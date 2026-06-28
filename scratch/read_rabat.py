import pdfplumber
import sys

path = r"Client Request\new request\Rabat 7N.pdf"
print(f"===== {path} =====")
try:
    with pdfplumber.open(path) as pdf:
        for i, page in enumerate(pdf.pages):
            try:
                text = page.extract_text()
                if text:
                    print(f"-- Page {i+1} --")
                    # encode to ascii with replacement to avoid codec errors
                    safe = text.encode('utf-8', errors='replace').decode('utf-8')
                    print(safe)
                else:
                    print(f"-- Page {i+1}: no text --")
            except Exception as e:
                print(f"Page {i+1} error: {e}")
except Exception as e:
    print(f"File error: {e}")
