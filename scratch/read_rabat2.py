import pdfplumber
import sys

path = r"Client Request\new request\Rabat 7N.pdf"
print(f"===== {path} =====")

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

with pdfplumber.open(path) as pdf:
    for i, page in enumerate(pdf.pages):
        try:
            words = page.extract_words()
            if words:
                print(f"\n-- Page {i+1} --")
                line = []
                last_y = None
                for w in words:
                    if last_y is None or abs(w['top'] - last_y) > 3:
                        if line:
                            print(' '.join(line))
                        line = [w['text']]
                        last_y = w['top']
                    else:
                        line.append(w['text'])
                if line:
                    print(' '.join(line))
        except Exception as e:
            print(f"Page {i+1} error: {e}")
