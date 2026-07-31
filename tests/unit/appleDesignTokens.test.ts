import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

// Vitest cwd 为 tests/（与现有 unit 测试一致）
const baseCss = readFileSync(
  resolve(process.cwd(), "../src/styles/base.css"),
  "utf8",
);

describe("apple design tokens in base.css", () => {
  it("uses Action Blue as theme / interactive color", () => {
    expect(baseCss).toMatch(/--color-theme:\s*#0066cc/i);
  });

  it("keeps brand orange only as a dedicated mark token", () => {
    expect(baseCss).toMatch(/--color-brand-mark:\s*#ef4d1a/i);
  });

  it("defines parchment canvas", () => {
    expect(baseCss).toMatch(/--color-base:\s*#f5f5f7/i);
  });

  it("does not use prefers-color-scheme dark for canvas tokens", () => {
    expect(baseCss).not.toMatch(
      /prefers-color-scheme:\s*dark[\s\S]{0,200}--color-base:/,
    );
  });

  it("removes dotted page background", () => {
    expect(baseCss).not.toMatch(/background-size:\s*16px\s+16px/);
  });
});
