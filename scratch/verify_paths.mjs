import fs from "fs";
import path from "path";

const filesToScan = [
  "data/itineraries.ts",
  "app/itineraries/[id]/ItineraryClient.tsx",
  "app/components/promotions.tsx"
];

const imageRegex = /\/images\/[a-zA-Z0-9_\-]+\.[a-zA-Z0-9]+/g;
let allExist = true;
const checked = new Set();

for (const file of filesToScan) {
  if (!fs.existsSync(file)) continue;
  const content = fs.readFileSync(file, "utf8");
  const matches = content.match(imageRegex) || [];
  for (const imgPath of matches) {
    if (checked.has(imgPath)) continue;
    checked.add(imgPath);
    const fullPath = path.join("public", imgPath);
    if (!fs.existsSync(fullPath)) {
      console.error(`❌ MISSING: ${imgPath} referenced in ${file}`);
      allExist = false;
    } else {
      console.log(`✓ EXISTS: ${imgPath}`);
    }
  }
}

if (allExist) {
  console.log("\n✅ SUCCESS: All referenced image files exist on disk!");
} else {
  process.exit(1);
}
