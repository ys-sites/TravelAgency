import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const trackedPublic = execSync('git ls-files public/', { encoding: "utf8" })
  .split("\n")
  .filter(Boolean);

const sourceExts = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".css", ".json", ".html", ".md"]);
function collectSourceFiles(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".next" || entry.name === ".git" || entry.name === "public") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) collectSourceFiles(full, acc);
    else if (sourceExts.has(path.extname(entry.name))) acc.push(full);
  }
  return acc;
}

const sourceFiles = collectSourceFiles(".");
let allSourceContent = "";
for (const f of sourceFiles) {
  allSourceContent += fs.readFileSync(f, "utf8") + "\n";
}

const unreferenced = [];
const referenced = [];
for (const relPath of trackedPublic) {
  const publicRelative = "/" + relPath.slice("public/".length);
  // Only exact full-path match (as it would appear as a URL/src string in code) -- avoids
  // generic-basename false positives like "hero.jpg" matching inside an unrelated filename.
  if (allSourceContent.includes(publicRelative)) {
    referenced.push(relPath);
  } else {
    unreferenced.push(relPath);
  }
}

console.log(`Scanned ${sourceFiles.length} source files, ${trackedPublic.length} tracked public/ files.\n`);
console.log(`=== REFERENCED (${referenced.length}) ===`);
console.log(`=== UNREFERENCED (${unreferenced.length}) ===`);
for (const u of unreferenced) console.log("  " + u);
