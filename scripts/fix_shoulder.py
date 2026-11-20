import os
import cv2
import numpy as np
import onnxruntime as ort
from PIL import Image, ImageFilter, ImageEnhance

def complete_and_cutout():
    img_path = r"C:/Users/harsh/.gemini/antigravity/brain/f5f8f18e-94cc-420c-9b4d-50c66dd6f8e8/.user_uploaded/media_1795204435893_6d095e7a.jpg"
    img = cv2.imread(img_path)
    h, w, c = img.shape
    print(f"Loaded original image: {w}x{h}")

    # Expand canvas horizontally so the cut-off shoulder has room to naturally round off
    # Face center is around x=480. Symmetrical width should be ~500 on each side -> total width ~1020
    pad_right = 180
    pad_left = 40
    new_w = w + pad_left + pad_right
    canvas = np.zeros((h, new_w, c), dtype=np.uint8)
    
    # Fill background color (mean of top-right background)
    bg_color = np.median(img[50:200, -100:], axis=(0, 1)).astype(np.uint8)
    canvas[:] = bg_color

    # Paste original image
    offset_x = pad_left
    canvas[:, offset_x:offset_x + w] = img

    # Now let's reconstruct the missing shoulder on the right:
    # Look at the left shoulder (viewer's left, around x=20..220 in original image)
    # y range for shoulder: y=500 to 1024
    # Mirror the left shoulder slope and shirt fabric to complete the right shoulder
    shoulder_left_patch = img[500:1024, 0:240]
    shoulder_flipped = cv2.flip(shoulder_left_patch, 1) # horizontally flip
    
    # Adjust color of the flipped patch to match the right side lighting
    # Right side is slightly warmer/darker, adjust mean color
    mean_right_shirt = np.mean(img[700:900, 700:820], axis=(0, 1))
    mean_left_shirt = np.mean(shoulder_left_patch[200:400, 50:200], axis=(0, 1))
    color_ratio = (mean_right_shirt + 1e-5) / (mean_left_shirt + 1e-5)
    
    shoulder_adjusted = np.clip(shoulder_flipped.astype(np.float32) * color_ratio, 0, 255).astype(np.uint8)

    # Blend the extended shoulder into the canvas on the right side
    # Target region: offset_x + w - 40 to offset_x + w + 160
    blend_width = min(200, shoulder_adjusted.shape[1])
    paste_x = offset_x + w - 30
    
    for row in range(500, h):
        src_row = row - 500
        # Linear cross-fade
        for col in range(blend_width):
            tx = paste_x + col
            if tx < new_w and src_row < shoulder_adjusted.shape[0]:
                alpha = min(1.0, col / 35.0) # smooth fade-in
                canvas[row, tx] = (
                    (1 - alpha) * canvas[row, tx].astype(np.float32) + 
                    alpha * shoulder_adjusted[src_row, col].astype(np.float32)
                ).astype(np.uint8)

    cv2.imwrite(r"public/canvas_extended_debug.jpg", canvas)
    print("Extended canvas saved for mask prediction.")

    # Now run ONNX U2Net on the balanced image!
    model_path = os.path.expandvars(r"$TEMP\u2netp.onnx")
    session = ort.InferenceSession(model_path, providers=['CPUExecutionProvider'])
    input_name = session.get_inputs()[0].name

    # Resize to 320x320 for U2Net
    resized_for_model = cv2.resize(canvas, (320, 320), interpolation=cv2.INTER_AREA)
    rgb_model = cv2.cvtColor(resized_for_model, cv2.COLOR_BGR2RGB).astype(np.float32) / 255.0
    mean = np.array([0.485, 0.456, 0.406], dtype=np.float32)
    std = np.array([0.229, 0.224, 0.225], dtype=np.float32)
    norm = (rgb_model - mean) / std
    tensor = np.transpose(norm, (2, 0, 1))
    tensor = np.expand_dims(tensor, axis=0)

    print("Running U2Net segmentation on balanced image...")
    outputs = session.run(None, {input_name: tensor})
    d0 = outputs[0][0, 0, :, :]
    d0 = (d0 - np.min(d0)) / (np.max(d0) - np.min(d0) + 1e-8)
    mask_np = (d0 * 255).astype(np.uint8)

    # Resize mask to canvas size
    mask_full = cv2.resize(mask_np, (new_w, h), interpolation=cv2.INTER_CUBIC)
    
    # Smooth bilateral filter
    mask_refined = cv2.bilateralFilter(mask_full, d=9, sigmaColor=75, sigmaSpace=75)
    mask_refined = np.where(mask_refined < 30, 0, mask_refined)
    mask_refined = np.where(mask_refined > 215, 255, mask_refined).astype(np.uint8)

    # Convert canvas to PIL RGBA
    canvas_rgb = cv2.cvtColor(canvas, cv2.COLOR_BGR2RGB)
    pil_img = Image.fromarray(canvas_rgb).convert("RGBA")
    
    # Smooth alpha mask
    mask_pil = Image.fromarray(mask_refined, mode="L").filter(ImageFilter.GaussianBlur(radius=1.2))
    pil_img.putalpha(mask_pil)

    # Crop to subject bounding box with symmetric margins
    bbox = pil_img.getbbox()
    if bbox:
        # Make left and right symmetric relative to face center
        face_center_x = offset_x + 480
        dist_left = face_center_x - bbox[0]
        dist_right = bbox[2] - face_center_x
        max_dist = max(dist_left, dist_right) + 20
        
        crop_left = max(0, face_center_x - max_dist)
        crop_right = min(new_w, face_center_x + max_dist)
        crop_top = max(0, bbox[1] - 15)
        crop_bottom = min(h, bbox[3])
        
        pil_img = pil_img.crop((crop_left, crop_top, crop_right, crop_bottom))

    # Enhance crispness
    sharpener = ImageEnhance.Sharpness(pil_img)
    pil_img = sharpener.enhance(1.25)
    contrast = ImageEnhance.Contrast(pil_img)
    pil_img = contrast.enhance(1.05)

    # Upscale 2x Lanczos for crystal-clear 8K definition
    final_w = pil_img.width * 2
    final_h = pil_img.height * 2
    pil_img_8k = pil_img.resize((final_w, final_h), Image.Resampling.LANCZOS)

    out_path = r"public/profile.png"
    pil_img_8k.save(out_path, "PNG", optimize=True)
    print(f"Saved complete symmetric 8K PNG ({final_w}x{final_h}) to {out_path}!")

if __name__ == "__main__":
    complete_and_cutout()
