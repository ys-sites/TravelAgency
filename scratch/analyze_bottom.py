from PIL import Image

image_path = r"c:\Users\Sharafath\Desktop\Website\Travel agent\public\images\logo.png"
try:
    img = Image.open(image_path)
    width, height = img.size
    
    # Analyze the bottom part of the cropped image
    bottom_part = img.crop((0, 800, width, height))
    bottom_part.save(r"c:\Users\Sharafath\Desktop\Website\Travel agent\scratch\bottom_part.png", "PNG")
    
    # Check if there are any non-transparent pixels in the bottom part
    alpha = bottom_part.getchannel("A")
    bbox = alpha.getbbox()
    print(f"Bottom part size: {bottom_part.size}")
    print(f"Bottom part alpha bbox: {bbox}")
    
    # Check the colors of the non-transparent pixels in the bottom part
    if bbox:
        pixels = bottom_part.load()
        colors = set()
        for y in range(bottom_part.size[1]):
            for x in range(bottom_part.size[0]):
                r, g, b, a = pixels[x, y]
                if a > 0:
                    colors.add((r, g, b))
        print(f"Unique colors in bottom part (first 10): {list(colors)[:10]}")
except Exception as e:
    print(f"Error: {e}")
