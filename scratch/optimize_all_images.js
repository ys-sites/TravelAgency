const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDirs = [
  path.join(__dirname, '..', 'public', 'images')
];

async function compressImage(filePath) {
  const stat = fs.statSync(filePath);
  const ext = path.extname(filePath).toLowerCase();

  // If image is over 400KB, optimize it
  if (stat.size > 400 * 1024 && ['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
    try {
      const tempPath = filePath + '.tmp';
      const image = sharp(filePath);
      const metadata = await image.metadata();

      let pipeline = image;
      // Resize if insanely large (> 2000px wide)
      if (metadata.width && metadata.width > 2000) {
        pipeline = pipeline.resize({ width: 2000, withoutEnlargement: true });
      }

      if (ext === '.png') {
        await pipeline.png({ quality: 80, compressionLevel: 8 }).toFile(tempPath);
      } else if (ext === '.webp') {
        await pipeline.webp({ quality: 80 }).toFile(tempPath);
      } else {
        await pipeline.jpeg({ quality: 82, progressive: true, mozjpeg: true }).toFile(tempPath);
      }

      const newStat = fs.statSync(tempPath);
      if (newStat.size < stat.size) {
        fs.renameSync(tempPath, filePath);
        console.log(`Optimized ${path.basename(filePath)}: ${(stat.size/1024/1024).toFixed(2)}MB -> ${(newStat.size/1024/1024).toFixed(2)}MB`);
      } else {
        fs.unlinkSync(tempPath);
      }
    } catch (err) {
      console.error(`Error optimizing ${filePath}:`, err.message);
    }
  }
}

async function processDir(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      await processDir(fullPath);
    } else if (item.isFile()) {
      await compressImage(fullPath);
    }
  }
}

(async () => {
  console.log('Starting image compression optimization...');
  for (const dir of targetDirs) {
    if (fs.existsSync(dir)) {
      await processDir(dir);
    }
  }
  console.log('Image compression finished!');
})();
