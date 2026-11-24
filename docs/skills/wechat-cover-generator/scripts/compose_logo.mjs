#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const specs = {
  wide: { width: 1880, height: 800, right: 94, bottom: 48, logo: 96, compactLogo: 80 },
  '16x9': { width: 1920, height: 1080, right: 96, bottom: 65, logo: 130, compactLogo: 108 },
};
const background = { r: 247, g: 241, b: 231, alpha: 1 };

function usage() {
  console.error('Usage: node compose_logo.mjs <logo-free-artwork> <output.png> <wide|16x9> [--compact]');
  process.exit(2);
}

async function main() {
  const [inputArg, outputArg, ratio, ...options] = process.argv.slice(2);
  if (!inputArg || !outputArg || !specs[ratio] || options.some((option) => option !== '--compact') || options.length > 1) {
    usage();
  }

  const inputPath = path.resolve(inputArg);
  const outputPath = path.resolve(outputArg);
  if (inputPath === outputPath) throw new Error('Output must not overwrite the source artwork.');
  if (path.extname(outputPath).toLowerCase() !== '.png') throw new Error('Output path must end in .png.');
  if (!(await fs.stat(inputPath)).isFile()) throw new Error(`Artwork is not a file: ${inputPath}`);

  const spec = specs[ratio];
  const compact = options.includes('--compact');
  const diameter = compact ? spec.compactLogo : spec.logo;
  const x = spec.width - spec.right - diameter;
  const y = spec.height - spec.bottom - diameter;
  const skillDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const logoPath = path.join(skillDir, 'assets', 'brand-assets', `logo-${diameter}px.png`);
  const logo = await fs.readFile(logoPath);
  const logoMeta = await sharp(logo).metadata();
  if (logoMeta.width !== diameter || logoMeta.height !== diameter || !logoMeta.hasAlpha) {
    throw new Error(`Unexpected logo asset: expected ${diameter}x${diameter} PNG with alpha.`);
  }

  const fitted = await sharp(inputPath)
    .rotate()
    .resize(spec.width, spec.height, { fit: 'contain', background })
    .flatten({ background })
    .png()
    .toBuffer();
  const canvasMeta = await sharp(fitted).metadata();
  if (canvasMeta.width !== spec.width || canvasMeta.height !== spec.height) {
    throw new Error(`Unexpected normalized artwork size: ${canvasMeta.width}x${canvasMeta.height}.`);
  }

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await sharp(fitted)
    .composite([{ input: logo, left: x, top: y }])
    .png()
    .toFile(outputPath);

  const [outputMeta, logoPixels, outputPixels] = await Promise.all([
    sharp(outputPath).metadata(),
    sharp(logo).ensureAlpha().raw().toBuffer({ resolveWithObject: true }),
    sharp(outputPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true }),
  ]);
  if (outputMeta.format !== 'png' || outputMeta.width !== spec.width || outputMeta.height !== spec.height) {
    throw new Error(`Unexpected output file: ${outputMeta.format} ${outputMeta.width}x${outputMeta.height}.`);
  }

  for (let row = 0; row < diameter; row += 1) {
    for (let col = 0; col < diameter; col += 1) {
      const logoIndex = (row * diameter + col) * logoPixels.info.channels;
      if (logoPixels.data[logoIndex + 3] !== 255) continue;
      const outputIndex = ((y + row) * spec.width + (x + col)) * outputPixels.info.channels;
      if (
        outputPixels.data[outputIndex] !== logoPixels.data[logoIndex]
        || outputPixels.data[outputIndex + 1] !== logoPixels.data[logoIndex + 1]
        || outputPixels.data[outputIndex + 2] !== logoPixels.data[logoIndex + 2]
      ) {
        throw new Error('Opaque logo pixels differ from the provided logo asset.');
      }
    }
  }

  console.log(
    `Verified ${outputPath}: ${spec.width}x${spec.height}, ${diameter}px specified logo asset. `
    + 'Visual clearance, title, theme, and identity still require review.',
  );
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
