// Script to convert large PNG/JPG images to optimized WebP
// Run: node scripts/optimize-images.mjs

import { readdir, stat } from 'fs/promises';
import { join } from 'path';
import { execSync } from 'child_process';

const PUBLIC_DIR = './public';
const SIZE_THRESHOLD = 500 * 1024; // 500KB

async function main() {
  const files = await readdir(PUBLIC_DIR);
  const largeImages = [];

  for (const file of files) {
    if (!/\.(png|jpg|jpeg)$/i.test(file)) continue;
    const filePath = join(PUBLIC_DIR, file);
    const stats = await stat(filePath);
    if (stats.size > SIZE_THRESHOLD) {
      largeImages.push({ file, size: (stats.size / 1024 / 1024).toFixed(2) });
    }
  }

  console.log(`\nFound ${largeImages.length} images over 500KB:\n`);
  largeImages.forEach(img => {
    console.log(`  ${img.file} — ${img.size} MB`);
  });

  console.log('\nTo convert them to WebP, run:');
  console.log('  npx -y sharp-cli -i public/<file> -o public/<file>.webp --format webp --quality 80\n');
  console.log('Then update your code to use the .webp versions.\n');
}

main();
