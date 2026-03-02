import fs from 'node:fs';
import path from 'node:path';

const wikiDir = path.resolve('src/content/wiki');
const relatedPath = path.resolve('src/data/wiki-related.json');

const relatedMap = JSON.parse(fs.readFileSync(relatedPath, 'utf8'));
const relatedMapLower = Object.fromEntries(
  Object.entries(relatedMap).map(([k, v]) => [k.toLowerCase(), v])
);

function removeExistingRelated(lines) {
  const out = [];
  let skipping = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!skipping && /^related:\s*$/.test(line.trim())) {
      skipping = true;
      continue;
    }
    if (skipping) {
      if (/^\s*-\s+/.test(line)) {
        continue;
      }
      if (line.trim() === '') {
        continue;
      }
      skipping = false;
    }
    out.push(line);
  }
  return out;
}

function insertRelated(lines, related) {
  const block = ['related:', ...related.map((r) => `  - ${r}`)];

  const orderIdx = lines.findIndex((l) => /^order:\s*/.test(l.trim()));
  if (orderIdx !== -1) {
    return [...lines.slice(0, orderIdx), ...block, ...lines.slice(orderIdx)];
  }

  const sectionIdx = lines.findIndex((l) => /^section:\s*/.test(l.trim()));
  if (sectionIdx !== -1) {
    return [...lines.slice(0, sectionIdx + 1), ...block, ...lines.slice(sectionIdx + 1)];
  }

  return [...lines, ...block];
}

let updated = 0;
let skipped = 0;

for (const file of fs.readdirSync(wikiDir)) {
  if (!file.endsWith('.md')) continue;
  const slug = file.replace(/\.md$/, '');
  const related = relatedMap[slug] ?? relatedMapLower[slug.toLowerCase()];

  if (!Array.isArray(related) || related.length === 0) {
    skipped++;
    continue;
  }

  const fullPath = path.join(wikiDir, file);
  const original = fs.readFileSync(fullPath, 'utf8');
  if (!original.startsWith('---\n')) {
    skipped++;
    continue;
  }

  const end = original.indexOf('\n---\n', 4);
  if (end === -1) {
    skipped++;
    continue;
  }

  const fm = original.slice(4, end);
  const body = original.slice(end + 5);
  const lines = fm.split('\n');

  const withoutRelated = removeExistingRelated(lines);
  const withRelated = insertRelated(withoutRelated, related);
  const newFm = withRelated.join('\n').replace(/\n{3,}/g, '\n\n');
  const next = `---\n${newFm}\n---\n${body}`;

  if (next !== original) {
    fs.writeFileSync(fullPath, next, 'utf8');
    updated++;
  }
}

console.log(`Updated: ${updated}, Skipped: ${skipped}`);
