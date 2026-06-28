from PIL import Image

image_path = r"c:\Users\Sharafath\Desktop\Website\Travel agent\Client Request\new request\IMG_0813.PNG"
try:
    img = Image.open(image_path)
    print(f"Format: {img.format}")
    print(f"Size: {img.size}")
    print(f"Mode: {img.mode}")
except Exception as e:
    print(f"Error: {e}")
