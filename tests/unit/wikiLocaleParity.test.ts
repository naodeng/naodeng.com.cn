import { existsSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const wikiRoot = path.join(repositoryRoot, "src/content/wiki");

function markdownSlugs(directory: string): string[] {
  if (!existsSync(directory)) return [];
  return readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => entry.name.slice(0, -3).toLowerCase())
    .sort();
}

describe("Wiki locale parity", () => {
  it("publishes one English page for every Chinese Wiki slug", () => {
    const chineseSlugs = markdownSlugs(wikiRoot);
    const englishSlugs = markdownSlugs(path.join(wikiRoot, "en"));

    expect(chineseSlugs).toHaveLength(226);
    expect(englishSlugs).toHaveLength(226);
    expect(englishSlugs).toEqual(chineseSlugs);
  });
});
