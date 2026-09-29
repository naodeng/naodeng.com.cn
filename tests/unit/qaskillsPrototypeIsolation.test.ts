import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const repoRoot = resolve(import.meta.dirname, "../..");
const prototypePath = resolve(repoRoot, "src/pages/[lang]/qaskills/detail-prototype.astro");
const discoveryPaths = [
  "src/components/Header.astro",
  "src/components/Footer.astro",
  "src/pages/[lang]/sitemap.astro",
  "src/utils/seoUrls.ts",
  "src/components/qaskills/RecommendedQASkills.astro",
  "src/pages/[lang]/qaskills/index.astro",
  "src/components/home/HomeGlassHero.astro",
  "src/components/home/HomeCapabilityGuide.astro",
  "src/components/home/HomeTaskNavigator.astro",
];

describe("QA Skills prototype isolation", () => {
  it("keeps the prototype explicitly non-indexable", () => {
    const source = readFileSync(prototypePath, "utf8");
    expect(source).toMatch(/robots\s*=\s*["']noindex, nofollow["']/);
  });

  it("does not expose the prototype as a production discovery target", () => {
    for (const relativePath of discoveryPaths) {
      const source = readFileSync(resolve(repoRoot, relativePath), "utf8");
      expect(source, relativePath).not.toContain("detail-prototype");
    }
  });
});
