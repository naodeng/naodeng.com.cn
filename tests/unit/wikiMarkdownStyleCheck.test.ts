import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { afterEach, describe, expect, it } from "vitest";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const fixtures: string[] = [];

afterEach(() => fixtures.splice(0).forEach((root) => rmSync(root, { recursive: true, force: true })));

function runChecker(relativePath: string, markdown: string) {
  const root = mkdtempSync(path.join(tmpdir(), "wiki-markdown-style-check-"));
  fixtures.push(root);
  const filePath = path.join(root, "src/content/wiki", relativePath);
  mkdirSync(path.dirname(filePath), { recursive: true });
  writeFileSync(filePath, `---\ntitle: Example\n---\n\n${markdown}`, "utf8");

  return spawnSync(
    process.execPath,
    [path.join(REPO_ROOT, "scripts/wiki-markdown-style-check.mjs"), "--json", "--strict"],
    { cwd: root, encoding: "utf8" },
  );
}

describe("Wiki question heading hierarchy check", () => {
  it("reports a non-H2 English question root and still checks its descendants", () => {
    const result = runChecker(
      "en/example.md",
      [
        "### Questions about Example?",
        "## Basics and Importance",
        "#### What is Example?",
      ].join("\n\n"),
    );

    expect(result.status).toBe(1);
    const report = JSON.parse(result.stdout);
    expect(report.issues.questionHeadingHierarchy).toBe(2);
    expect(report.samples.questionHeadingHierarchy).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ text: "Questions about Example?", level: 3, expectedLevel: 2 }),
        expect.objectContaining({ text: "Basics and Importance", level: 2, expectedLevel: 3 }),
      ]),
    );
  });

  it("reports a non-H2 Chinese question root", () => {
    const result = runChecker(
      "example.md",
      ["### 关于示例的问题", "### 基础知识和重要性", "#### 什么是示例？"].join("\n\n"),
    );

    expect(result.status).toBe(1);
    const report = JSON.parse(result.stdout);
    expect(report.issues.questionHeadingHierarchy).toBe(1);
    expect(report.samples.questionHeadingHierarchy).toContainEqual(
      expect.objectContaining({ text: "关于示例的问题", level: 3, expectedLevel: 2 }),
    );
  });

  it("accepts the documented H2, H3, and H4 hierarchy", () => {
    const result = runChecker(
      "en/example.md",
      ["## Questions about Example?", "### Basics and Importance", "#### What is Example?"].join("\n\n"),
    );

    expect(result.status).toBe(0);
    expect(JSON.parse(result.stdout).issues.questionHeadingHierarchy).toBe(0);
  });
});
