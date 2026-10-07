import fs from 'node:fs';
import path from 'node:path';

/**
 * Image optimization script using sharp (optional dependency).
 * Scans public/images/ and creates WebP/AVIF versions.
 */
async function run() {
  console.log('Optimizing images in public/images...');
  const imagesDir = path.resolve('public/images');
  if (!fs.existsSync(imagesDir)) {
    console.log('Directory public/images not found. Skipping.');
    return;
  }

  try {
    const sharp = (await import('sharp')).default;
    const files = fs.readdirSync(imagesDir, { recursive: true });
    for (const file of files) {
      if (typeof file === 'string' && /\.(jpe?g|png)$/i.test(file)) {
        const fullPath = path.join(imagesDir, file);
        const ext = path.extname(fullPath);
        const webpPath = fullPath.replace(ext, '.webp');
        if (!fs.existsSync(webpPath)) {
          await sharp(fullPath).webp({ quality: 82 }).toFile(webpPath);
          console.log(`Generated: ${webpPath}`);
        }
      }
    }
    console.log('Image optimization complete.');
  } catch (err) {
    console.warn('sharp is not installed or failed to run. Original images will be served.');
  }
}

run();
