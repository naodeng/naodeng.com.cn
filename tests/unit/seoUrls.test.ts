import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { canonicalWikiSlug, shouldIncludeInSitemap } from "../../src/utils/seoUrls";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const astroConfig = readFileSync(path.join(REPO_ROOT, "astro.config.mjs"), "utf8");
const wikiData = readFileSync(path.join(REPO_ROOT, "src/data/wiki.ts"), "utf8");
const wikiRoute = readFileSync(
  path.join(REPO_ROOT, "src/pages/[lang]/wiki/[...slug].astro"),
  "utf8",
);
const redirects = readFileSync(path.join(REPO_ROOT, "public/_redirects"), "utf8");
const seoBuildChecker = readFileSync(
  path.join(REPO_ROOT, "scripts/seo-build-check.mjs"),
  "utf8",
);

describe("SEO URL policy", () => {
  it("normalizes Wiki slugs to lowercase", () => {
    expect(canonicalWikiSlug("A-B-Testing")).toBe("a-b-testing");
    expect(canonicalWikiSlug("manual-testing")).toBe("manual-testing");
  });

  it.each([
    ["https://inaodeng.com/", false],
    ["https://inaodeng.com/en/wiki/inspection/", false],
    ["https://inaodeng.com/zh-cn/wiki/wiki/inspection/", false],
    ["https://inaodeng.com/zh-cn/wiki/inspection.md/", false],
    ["https://inaodeng.com/zh-cn/wiki/A-B-Testing/", false],
    ["https://inaodeng.com/zh-cn/wiki/a-b-testing/", true],
    ["https://inaodeng.com/zh-cn/wiki/", true],
    ["https://inaodeng.com/zh-cn/blog/", true],
  ])("applies sitemap inclusion policy to %s", (page, expected) => {
    expect(shouldIncludeInSitemap(page)).toBe(expected);
  });

  it("uses the centralized sitemap policy in Astro config", () => {
    expect(astroConfig).toContain('import { shouldIncludeInSitemap } from "./src/utils/seoUrls"');
    expect(astroConfig).toContain("filter: shouldIncludeInSitemap");
  });

  it("normalizes Wiki IDs and redirects case-only aliases", () => {
    expect(wikiData).toContain('import { canonicalWikiSlug } from "@/utils/seoUrls"');
    expect(wikiData).toContain("return canonicalWikiSlug(");
    expect(wikiRoute).toContain("return Astro.redirect(`/${locale}/wiki/${legacyCanonical}/`, 301)");
    expect(redirects).toContain("/zh-cn/wiki/A-B-Testing/ /zh-cn/wiki/a-b-testing/ 301");
    expect(wikiRoute).not.toContain("const fileNames = fs.readdirSync(wikiDir)");
    expect(seoBuildChecker).toContain("const redirectsPath = path.join(DIST, \"_redirects\")");
  });
});
