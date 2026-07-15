import sharp from "sharp";
import fs from "fs";
import path from "path";

const files = [
  "IMG_5158.jpg",
  "IMG_6768.jpg",
  "IMG_6787-Modifier.jpg",
  "IMG_6793-Modifier.jpg",
  "IMG_7238-Modifier.jpg",
  "IMG_7243.jpg",
  "IMG_8435.jpg",
  "IMG_9776.jpg",
  "IMG_9832.jpg",
  "IMG_9944.jpg"
];

const imagesDir = "public/images";

async function convertImage(filename, index) {
  const inputPath = path.join(imagesDir, filename);
  const outFilename = `marrakech_golf_pro_${index + 1}.webp`;
  const outputPath = path.join(imagesDir, outFilename);

  if (!fs.existsSync(inputPath)) {
    console.error(`Input file not found: ${inputPath}`);
    return;
  }

  console.log(`Processing ${filename} -> ${outFilename}...`);

  // First pass: quality 80
  let quality = 80;
  let buffer = await sharp(inputPath)
    .resize({ width: 1920, withoutEnlargement: true })
    .webp({ quality })
    .toBuffer();

  const maxBytes = 400 * 1024; // 400 KB

  if (buffer.length > maxBytes) {
    console.log(`  File size is ${(buffer.length / 1024).toFixed(1)} KB (over 400 KB). Re-encoding at Q=70...`);
    quality = 70;
    buffer = await sharp(inputPath)
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality })
      .toBuffer();
  }

  await fs.promises.writeFile(outputPath, buffer);
  console.log(`  Saved to ${outputPath} (${(buffer.length / 1024).toFixed(1)} KB, Quality=${quality})`);
}

async function run() {
  for (let i = 0; i < files.length; i++) {
    try {
      await convertImage(files[i], i);
    } catch (err) {
      console.error(`Error converting ${files[i]}:`, err);
    }
  }
}

run();
