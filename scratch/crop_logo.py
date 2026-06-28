from PIL import Image

image_path = r"c:\Users\Sharafath\Desktop\Website\Travel agent\public\images\logo.png"
try:
    img = Image.open(image_path)
    if img.mode in ("RGBA", "LA") or (img.mode == "P" and "transparency" in img.info):
        alpha = img.getchannel("A")
        bbox = alpha.getbbox()
        if bbox:
            cropped = img.crop(bbox)
            cropped.save(image_path, "PNG")
            print(f"Successfully cropped logo to bbox: {bbox}")
        else:
            print("No non-transparent bbox found.")
    else:
        print("Image mode is not transparent. Cannot crop margins automatically.")
except Exception as e:
    print(f"Error: {e}")
