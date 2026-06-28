from PIL import Image

image_path = r"c:\Users\Sharafath\Desktop\Website\Travel agent\public\Logo1 Merveilles et Voyages.png"
try:
    img = Image.open(image_path)
    print(f"Format: {img.format}")
    print(f"Size: {img.size}")
    print(f"Mode: {img.mode}")
    
    # Find bounding box of non-zero alpha channel (if transparent)
    if img.mode in ("RGBA", "LA") or (img.mode == "P" and "transparency" in img.info):
        alpha = img.getchannel("A")
        bbox = alpha.getbbox()
        print(f"Alpha BBox (x1, y1, x2, y2): {bbox}")
except Exception as e:
    print(f"Error: {e}")
