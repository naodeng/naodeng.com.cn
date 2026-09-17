import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const CONTENT_ROOTS = [path.join(REPO_ROOT, "src/content"), path.join(REPO_ROOT, "src/blog")];
const MARKDOWN_EXTENSIONS = new Set([".md", ".mdx"]);
const NESTED_LINK_DESTINATION = /\]\([^\n)]*\[[^\n]*\]\(/g;

function walkMarkdownFiles(root: string): string[] {
  const files: string[] = [];
  for (const entry of readdirSync(root, { withFileTypes: true })) {
    const fullPath = path.join(root, entry.name);
    if (entry.isDirectory()) files.push(...walkMarkdownFiles(fullPath));
    else if (MARKDOWN_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) files.push(fullPath);
  }
  return files;
}

describe("SEO source hygiene", () => {
  it("does not use a Markdown link inside another link destination", () => {
    const matches = CONTENT_ROOTS.flatMap(walkMarkdownFiles).flatMap((file) => {
      const body = readFileSync(file, "utf8");
      return [...body.matchAll(NESTED_LINK_DESTINATION)].map((match) => `${path.relative(REPO_ROOT, file)}: ${match[0]}`);
    });

    expect(matches).toEqual([]);
  });
});
