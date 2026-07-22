const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const baseDir = path.join(__dirname, '..', 'public', 'Client Request must be added');
const destDir = path.join(__dirname, '..', 'public', 'images', 'client_request');

function cleanFilename(filename) {
  return filename
    .replace(/[^\w\.\-\(\)]/g, '_')
    .replace(/\s+/g, '_')
    .toLowerCase();
}

async function processAllFiles(dir, relativePath = '') {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  const results = [];

  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      const subResults = await processAllFiles(fullPath, path.join(relativePath, item.name));
      results.push(...subResults);
    } else if (item.isFile()) {
      const ext = path.extname(item.name).toLowerCase();
      if (['.pdf'].includes(ext)) {
        results.push({ type: 'pdf', original: item.name, path: fullPath, status: 'Skipped PDF document' });
        continue;
      }
      
      const folderSlug = relativePath.split(path.sep)[0].split('-2026')[0].replace(/[^\w]/g, '_').toLowerCase();
      const targetSubDir = path.join(destDir, folderSlug);
      if (!fs.existsSync(targetSubDir)) {
        fs.mkdirSync(targetSubDir, { recursive: true });
      }

      if (['.jpg', '.jpeg', '.png', '.webp', '.avif'].includes(ext)) {
        const cleanedName = cleanFilename(item.name);
        const targetPath = path.join(targetSubDir, cleanedName);
        fs.copyFileSync(fullPath, targetPath);
        results.push({
          type: 'image',
          original: item.name,
          folder: folderSlug,
          webPath: `/images/client_request/${folderSlug}/${cleanedName}`,
          status: 'Copied'
        });
      } else if (['.tif', '.tiff', '.heic'].includes(ext)) {
        const baseNameNoExt = path.basename(item.name, path.extname(item.name));
        const cleanedName = cleanFilename(baseNameNoExt) + '.jpg';
        const targetPath = path.join(targetSubDir, cleanedName);

        try {
          await sharp(fullPath).toFormat('jpeg', { quality: 90 }).toFile(targetPath);
          results.push({
            type: 'converted_image',
            original: item.name,
            folder: folderSlug,
            webPath: `/images/client_request/${folderSlug}/${cleanedName}`,
            status: 'Converted to JPG'
          });
        } catch (err) {
          console.error(`Error converting ${item.name}:`, err.message);
          results.push({
            type: 'error',
            original: item.name,
            folder: folderSlug,
            error: err.message
          });
        }
      }
    }
  }
  return results;
}

(async () => {
  const audit = await processAllFiles(baseDir);
  console.log('\n--- AUDIT SUMMARY ---');
  console.log(`Total files processed: ${audit.length}`);
  
  const byFolder = {};
  audit.forEach(r => {
    if (!r.folder) return;
    if (!byFolder[r.folder]) byFolder[r.folder] = [];
    byFolder[r.folder].push(r);
  });

  for (const [folder, files] of Object.entries(byFolder)) {
    console.log(`\nFolder [${folder}]: ${files.length} images`);
    files.forEach(f => console.log(`  - ${f.original} -> ${f.webPath} (${f.status})`));
  }

  // Save audit log to file for verification
  fs.writeFileSync(path.join(__dirname, 'image_audit.json'), JSON.stringify(audit, null, 2));
})();
