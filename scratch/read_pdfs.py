import pdfplumber

for path in [
    r"Client Request\new request\Tasks.pdf",
    r"Client Request\new request\Rabat 7N.pdf"
]:
    print(f"\n===== {path} =====")
    try:
        with pdfplumber.open(path) as pdf:
            for i, page in enumerate(pdf.pages):
                text = page.extract_text()
                if text:
                    print(f"-- Page {i+1} --")
                    print(text)
                else:
                    print(f"-- Page {i+1}: no text layer --")
    except Exception as e:
        print(f"Error: {e}")
