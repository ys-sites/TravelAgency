from PIL import Image

image_path = r"c:\Users\Sharafath\Desktop\Website\Travel agent\public\images\logo.png"
try:
    img = Image.open(image_path)
    width, height = img.size
    print(f"Cropped Image size: {img.size}")
    
    # Let's save a square crop of the top part (the circle seal)
    # The width is 801. So let's crop a square of 801x801 from the top of the image content
    square_seal = img.crop((0, 0, width, width))
    square_seal.save(r"c:\Users\Sharafath\Desktop\Website\Travel agent\scratch\square_seal.png", "PNG")
    print("Saved square_seal.png")
except Exception as e:
    print(f"Error: {e}")
