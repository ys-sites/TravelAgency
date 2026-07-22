const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'public', 'Client Request must be added');
const destDir = path.join(__dirname, '..', 'public', 'images', 'client_request');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function cleanFilename(filename) {
  return filename
    .replace(/[^\w\.\-\(\)]/g, '_')
    .replace(/\s+/g, '_')
    .toLowerCase();
}

function processDirectory(dir, relativePath = '') {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      processDirectory(fullPath, path.join(relativePath, item.name));
    } else if (item.isFile()) {
      const ext = path.extname(item.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp', '.avif'].includes(ext)) {
        const cleanedName = cleanFilename(item.name);
        const folderSlug = relativePath.split(path.sep)[0].split('-2026')[0].replace(/[^\w]/g, '_').toLowerCase();
        
        const targetSubDir = path.join(destDir, folderSlug);
        if (!fs.existsSync(targetSubDir)) {
          fs.mkdirSync(targetSubDir, { recursive: true });
        }

        const targetPath = path.join(targetSubDir, cleanedName);
        fs.copyFileSync(fullPath, targetPath);
        console.log(`Copied: ${cleanedName} -> /images/client_request/${folderSlug}/${cleanedName}`);
      }
    }
  }
}

processDirectory(baseDir);
console.log('Finished copying all client request images!');
