import os
import sys
import numpy as np
import onnxruntime as ort
from PIL import Image, ImageFilter, ImageEnhance
import cv2

def remove_background(input_path, output_path, model_path):
    print(f"Loading image from {input_path}...")
    orig_img = Image.open(input_path).convert("RGB")
    orig_w, orig_h = orig_img.size
    print(f"Original size: {orig_w}x{orig_h}")

    # Resize to 320x320 for U2Net
    input_size = 320
    img_resized = orig_img.resize((input_size, input_size), Image.Resampling.BILINEAR)
    
    # Preprocess
    img_np = np.array(img_resized, dtype=np.float32) / 255.0
    # Normalize with ImageNet mean and std
    mean = np.array([0.485, 0.456, 0.406], dtype=np.float32)
    std = np.array([0.229, 0.224, 0.225], dtype=np.float32)
    img_np = (img_np - mean) / std
    
    # Transpose to (1, 3, 320, 320)
    img_tensor = np.transpose(img_np, (2, 0, 1))
    img_tensor = np.expand_dims(img_tensor, axis=0)

    # Run ONNX session
    print(f"Loading ONNX model from {model_path}...")
    session = ort.InferenceSession(model_path, providers=['CPUExecutionProvider'])
    input_name = session.get_inputs()[0].name
    
    print("Running inference...")
    outputs = session.run(None, {input_name: img_tensor})
    
    # First output d0 is the fusion prediction
    d0 = outputs[0][0, 0, :, :]
    
    # Normalize d0 to 0..1
    ma = np.max(d0)
    mi = np.min(d0)
    d0 = (d0 - mi) / (ma - mi + 1e-8)
    
    # Convert mask to uint8 0..255
    mask_np = (d0 * 255).astype(np.uint8)
    
    # Resize mask back to original resolution with high-quality cubic interpolation
    mask_full = cv2.resize(mask_np, (orig_w, orig_h), interpolation=cv2.INTER_CUBIC)
    
    # Refine mask: smooth edges using bilateral filter or guided filter for natural hair/edges
    mask_refined = cv2.bilateralFilter(mask_full, d=9, sigmaColor=75, sigmaSpace=75)
    
    # Threshold slight background noise
    mask_refined = np.where(mask_refined < 35, 0, mask_refined)
    mask_refined = np.where(mask_refined > 220, 255, mask_refined)
    
    # Convert to PIL Image
    mask_img = Image.fromarray(mask_refined.astype(np.uint8), mode="L")
    
    # Slight Gaussian blur on alpha border for anti-aliasing (smooth clean cut)
    mask_smooth = mask_img.filter(ImageFilter.GaussianBlur(radius=1.2))
    
    # Composite into RGBA
    rgba_img = orig_img.convert("RGBA")
    rgba_img.putalpha(mask_smooth)
    
    # Crop tightly around bounding box with nice padding
    bbox = rgba_img.getbbox()
    if bbox:
        # Give a small 2% padding if possible
        pad_x = int((bbox[2] - bbox[0]) * 0.03)
        pad_y = int((bbox[3] - bbox[1]) * 0.02)
        crop_box = (
            max(0, bbox[0] - pad_x),
            max(0, bbox[1] - pad_y),
            min(orig_w, bbox[2] + pad_x),
            min(orig_h, bbox[3] + pad_y)
        )
        rgba_img = rgba_img.crop(crop_box)
    
    # Enhance slightly: sharpness & contrast for 8K-like crispness
    sharpener = ImageEnhance.Sharpness(rgba_img)
    rgba_img = sharpener.enhance(1.25)
    
    contrast = ImageEnhance.Contrast(rgba_img)
    rgba_img = contrast.enhance(1.06)

    # Upscale 2x using Lanczos high-res interpolation for ultra-crisp resolution
    target_w = rgba_img.width * 2
    target_h = rgba_img.height * 2
    rgba_img_8k = rgba_img.resize((target_w, target_h), Image.Resampling.LANCZOS)

    print(f"Saving high-res PNG ({target_w}x{target_h}) to {output_path}...")
    rgba_img_8k.save(output_path, "PNG", optimize=True)
    print("Done successfully!")

if __name__ == "__main__":
    input_file = r"C:/Users/harsh/.gemini/antigravity/brain/f5f8f18e-94cc-420c-9b4d-50c66dd6f8e8/.user_uploaded/media_1795202820727_b1247f05.jpg"
    output_file = r"public/profile.png"
    model_file = os.path.expandvars(r"$TEMP\u2netp.onnx")
    remove_background(input_file, output_file, model_file)
