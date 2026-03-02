import fs from 'node:fs';
import path from 'node:path';

const WIKI_DIR = path.resolve('src/content/wiki');
const OUT_FILE = path.resolve('src/data/wiki-related.json');

function extractTokens(text) {
  const normalized = text.toLowerCase();
  const tokens = [];
  const enMatches = normalized.match(/[a-z][a-z0-9-]{2,}/g) ?? [];
  const zhMatches = normalized.match(/[\u4e00-\u9fff]{2,}/g) ?? [];
  tokens.push(...enMatches);
  for (const phrase of zhMatches) {
    tokens.push(phrase);
    if (phrase.length >= 4) {
      for (let i = 0; i < phrase.length - 1; i++) {
        tokens.push(phrase.slice(i, i + 2));
      }
    }
  }
  return tokens;
}

function buildFreq(tokens) {
  const freq = new Map();
  for (const token of tokens) {
    freq.set(token, (freq.get(token) ?? 0) + 1);
  }
  return freq;
}

function parseFrontmatterRelated(markdown) {
  if (!markdown.startsWith('---\n')) return [];
  const end = markdown.indexOf('\n---\n', 4);
  if (end === -1) return [];
  const fm = markdown.slice(4, end);
  const lines = fm.split('\n');
  const related = [];
  let inRelated = false;
  for (const line of lines) {
    if (/^related:\s*$/.test(line.trim())) {
      inRelated = true;
      continue;
    }
    if (inRelated) {
      const m = line.match(/^\s*-\s+(.+)$/);
      if (m) {
        related.push(m[1].trim().replace(/^['"]|['"]$/g, ''));
        continue;
      }
      if (/^[A-Za-z0-9_-]+:\s*/.test(line.trim())) {
        inRelated = false;
      }
    }
  }
  return related;
}

const files = fs.readdirSync(WIKI_DIR).filter((f) => f.endsWith('.md'));
const profiles = files.map((file) => {
  const fullPath = path.join(WIKI_DIR, file);
  const markdown = fs.readFileSync(fullPath, 'utf8');
  const slug = file.replace(/\.md$/, '');
  const tokens = extractTokens(markdown);
  return {
    slug,
    freq: buildFreq(tokens),
    tokenSet: new Set(tokens),
    explicitRelated: parseFrontmatterRelated(markdown),
  };
});

const totalDocs = profiles.length;
const docFreq = new Map();
for (const profile of profiles) {
  for (const token of profile.tokenSet) {
    docFreq.set(token, (docFreq.get(token) ?? 0) + 1);
  }
}

const mapping = {};
for (const current of profiles) {
  const ranked = profiles
    .filter((p) => p.slug !== current.slug)
    .map((candidate) => {
      let score = 0;
      for (const [token, tfA] of current.freq) {
        const tfB = candidate.freq.get(token) ?? 0;
        if (!tfB) continue;
        const df = docFreq.get(token) ?? 1;
        const idf = Math.log((totalDocs + 1) / (df + 1)) + 1;
        score += tfA * tfB * idf * idf;
      }
      if (current.explicitRelated.includes(candidate.slug)) score += 200;
      if (candidate.explicitRelated.includes(current.slug)) score += 120;
      return { slug: candidate.slug, score };
    })
    .sort((a, b) => b.score - a.score || a.slug.localeCompare(b.slug, 'en'))
    .slice(0, 5)
    .map((x) => x.slug);

  mapping[current.slug] = ranked;
}

fs.writeFileSync(OUT_FILE, `${JSON.stringify(mapping, null, 2)}\n`, 'utf8');
console.log(`Generated ${OUT_FILE} (${Object.keys(mapping).length} entries)`);
