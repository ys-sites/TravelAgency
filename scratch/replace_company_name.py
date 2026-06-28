import os

replacements = [
    # Full Name Replacements
    ("Majestic Experiences Voyages", "Merveilles et Voyages"),
    ("majestic experiences voyages", "merveilles et voyages"),
    ("Majestic Experiences", "Merveilles et Voyages"),
    ("majestic experiences", "merveilles et voyages"),
    
    # Specific Brand Structure (Navbar/Footer)
    ('brandName1: { FR: "Majestic", EN: "Majestic" }', 'brandName1: { FR: "Merveilles", EN: "Merveilles" }'),
    ('brandName2: { FR: "Experiences Voyages", EN: "Experiences Voyages" }', 'brandName2: { FR: "et Voyages", EN: "et Voyages" }'),
]

target_dir = r"c:\Users\Sharafath\Desktop\Website\Travel agent"
exclude_dirs = {".git", ".next", "node_modules"}

for root, dirs, files in os.walk(target_dir):
    # Exclude directories on-the-fly
    dirs[:] = [d for d in dirs if d not in exclude_dirs]
    
    for file in files:
        if file.endswith((".tsx", ".ts", ".html", ".js", ".json")):
            file_path = os.path.join(root, file)
            try:
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.read()
                
                new_content = content
                for old_val, new_val in replacements:
                    new_content = new_content.replace(old_val, new_val)
                
                if new_content != content:
                    with open(file_path, "w", encoding="utf-8") as f:
                        f.write(new_content)
                    print(f"Updated: {file_path}")
            except Exception as e:
                # Silently ignore binary/encoding errors on non-text files
                pass

print("Search and replace complete.")
