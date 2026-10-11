import { describe, expect, it } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const WIKI_DIR = path.join(REPO_ROOT, "src/content/wiki");
const seoChecker = readFileSync(path.join(REPO_ROOT, "scripts/seo-static-check.mjs"), "utf8");
const integrityChecker = readFileSync(
  path.join(REPO_ROOT, "scripts/wiki-aiwiki-integrity-check.mjs"),
  "utf8",
);
const relatedGenerator = readFileSync(
  path.join(REPO_ROOT, "scripts/generate-wiki-related.mjs"),
  "utf8",
);
const wikiFiles = readdirSync(WIKI_DIR)
  .filter((file) => file.endsWith(".md"))
  .map((file) => path.join(WIKI_DIR, file));

describe("Wiki source links", () => {
  it("does not contain nested Markdown links", () => {
    const offenders = wikiFiles.filter((file) => readFileSync(file, "utf8").includes("[["));

    expect(offenders).toEqual([]);
  });

  it("uses canonical absolute Wiki links instead of legacy relative paths", () => {
    const offenders: string[] = [];
    const linkTargetPattern = /\]\((?:<)?([^)>\n]+)(?:>)?\)/g;

    for (const file of wikiFiles) {
      const source = readFileSync(file, "utf8");
      for (const match of source.matchAll(linkTargetPattern)) {
        const target = match[1].trim();
        if (/^\.\.\/[A-Z]\//.test(target) || target.startsWith("/sections/")) {
          offenders.push(`${path.relative(REPO_ROOT, file)} -> ${target}`);
        }
      }
    }

    expect(offenders).toEqual([]);
  });

  it("keeps A/B Testing links and related data on the lowercase slug", () => {
    const uppercaseLinks = wikiFiles.filter((file) =>
      /\/zh-cn\/wiki\/A-B-Testing\//.test(readFileSync(file, "utf8")),
    );
    const relatedData = readFileSync(path.join(REPO_ROOT, "src/data/wiki-related.json"), "utf8");

    expect(uppercaseLinks).toEqual([]);
    expect(relatedData).not.toContain('"A-B-Testing"');
  });

  it("uses a local Wiki route for the API testing article's glossary references", () => {
    const source = readFileSync(
      path.join(REPO_ROOT, "src/blog/zh-cn/QA-Glossary-Wiki/QA-Glossary-Wiki-api.mdx"),
      "utf8",
    );

    expect(source).toContain("[测试自动化](/zh-cn/wiki/test-automation/)");
    expect(source).not.toContain("blob/main/Sections/T/test-automation.md");
  });

  it("keeps the static SEO checker sensitive to these link regressions", () => {
    expect(seoChecker).toContain("malformedMarkdownLinks");
    expect(seoChecker).toContain("legacyRelativeLinks");
  });

  it("normalizes locale-specific Wiki slugs in integrity and related-data generators", () => {
    expect(integrityChecker).toContain('path.basename(file, ".md").toLowerCase()');
    expect(integrityChecker).toContain(
      "wikiSlugs[wikiMatch[1].toLowerCase()]?.has(wikiMatch[2].toLowerCase())",
    );
    expect(integrityChecker).toContain("wikiSlugs[wikiLang].has(ref.toLowerCase())");
    expect(relatedGenerator).toContain("file.replace(/\\.md$/, '').toLowerCase()");
    expect(relatedGenerator).toContain("parseFrontmatterRelated(markdown).map((ref) => ref.toLowerCase())");
  });
});
