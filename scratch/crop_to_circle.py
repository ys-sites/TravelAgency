from PIL import Image

image_path = r"c:\Users\Sharafath\Desktop\Website\Travel agent\public\images\logo.png"
root_path = r"c:\Users\Sharafath\Desktop\Website\Travel agent\logo.png"
try:
    # Open the original logo before our crop (we'll re-read it from root or public)
    img = Image.open(image_path)
    
    # We know the bounding box of the whole content in the 2000x2000 image is:
    # x1=611, y1=464, x2=1412, y2=1530.
    # The circle seal is located at the top of the content. Since the width is 801,
    # the circle seal is a square of 801x801 starting at (611, 464).
    # Let's crop it from the original 2000x2000 dimensions:
    # (611, 464, 611 + 801, 464 + 801) -> (611, 464, 1412, 1265)
    
    # Wait, if we cropped it already, the current image_path is 801x1066.
    # So we can just crop the top 801x801 square from the current image!
    width, height = img.size
    circle_seal = img.crop((0, 0, width, width))
    
    # Save to both paths
    circle_seal.save(image_path, "PNG")
    circle_seal.save(root_path, "PNG")
    print(f"Successfully cropped logo to a perfect square circle seal of {circle_seal.size}")
except Exception as e:
    print(f"Error: {e}")
