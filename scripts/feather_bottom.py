import numpy as np
from PIL import Image

def feather_bottom(image_path, fade_percent=0.18):
    img = Image.open(image_path).convert("RGBA")
    w, h = img.size
    print(f"Feathering bottom of {image_path}: {w}x{h}")
    
    img_np = np.array(img, dtype=np.float32)
    alpha = img_np[:, :, 3]
    
    fade_height = int(h * fade_percent)
    start_y = h - fade_height
    
    # Create smooth cubic ease-out fade factor from 1.0 at start_y to 0.0 at h
    for y in range(start_y, h):
        progress = (y - start_y) / float(fade_height) # 0.0 to 1.0
        # Smooth cosine/cubic ease: 1 at progress=0, 0 at progress=1
        fade_factor = 0.5 * (1.0 + np.cos(progress * np.pi))
        alpha[y, :] = alpha[y, :] * fade_factor
        
    img_np[:, :, 3] = np.clip(alpha, 0, 255)
    result = Image.fromarray(img_np.astype(np.uint8), "RGBA")
    
    result.save(image_path, "PNG", optimize=True)
    print(f"Successfully applied smooth bottom fade to {image_path}!")

if __name__ == "__main__":
    feather_bottom("public/profile.png", fade_percent=0.20)
    feather_bottom("dist/profile.png", fade_percent=0.20)
