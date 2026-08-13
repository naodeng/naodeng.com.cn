import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

// Vitest cwd 为 tests/（与现有 unit 测试一致）
const baseCss = readFileSync(
  resolve(process.cwd(), "../src/styles/base.css"),
  "utf8",
);

describe("Zenix-inspired design tokens in base.css", () => {
  it("uses indigo as the single theme color", () => {
    expect(baseCss).toMatch(/--color-theme:\s*#4f46e5/i);
    // teal accent 已移除，indigo 为唯一主色
    expect(baseCss).not.toMatch(/--color-accent:/i);
    expect(baseCss).not.toMatch(/--color-theme:\s*#ef4d1a/i);
  });

  it("defines a cool SaaS canvas", () => {
    expect(baseCss).toMatch(/--color-base:\s*#f8fafc/i);
    expect(baseCss).toMatch(/--gradient-theme:\s*linear-gradient/i);
  });

  it("does not use prefers-color-scheme dark for canvas tokens", () => {
    expect(baseCss).not.toMatch(
      /prefers-color-scheme:\s*dark[\s\S]{0,200}--color-base:/,
    );
    expect(baseCss).not.toMatch(
      /@media\s*\(\s*prefers-color-scheme:\s*dark\s*\)/,
    );
  });

  it("removes dotted page background", () => {
    expect(baseCss).not.toMatch(/background-size:\s*16px\s+16px/);
  });

  it("does not define glow shadows (slate shadows only)", () => {
    expect(baseCss).not.toMatch(/--glow-theme:/i);
  });
});
