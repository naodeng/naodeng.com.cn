import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

// Vitest cwd 为 tests/（与现有 unit 测试一致）
const baseCss = readFileSync(
  resolve(process.cwd(), "../src/styles/base.css"),
  "utf8",
);

describe("Editorial design tokens in base.css", () => {
  it("uses blue as the single theme color", () => {
    expect(baseCss).toMatch(/--color-theme:\s*#2563eb/i);
    // 主题色保持单一，避免旧的多色强调
    expect(baseCss).not.toMatch(/--color-accent:/i);
    expect(baseCss).not.toMatch(/--color-theme:\s*#ef4d1a/i);
  });

  it("defines a cool SaaS canvas", () => {
    expect(baseCss).toMatch(/--color-base:\s*#f8fafc/i);
    expect(baseCss).toMatch(/--gradient-theme:\s*var\(--color-theme\)/i);
  });

  it("defines explicit light and dark surface tokens", () => {
    expect(baseCss).toMatch(/:root\[data-theme="dark"\]/i);
    ["strong", "medium", "weak"].forEach((level) => {
      expect(baseCss).toMatch(new RegExp(`--color-glass-${level}:`, "i"));
    });
    expect(baseCss).toMatch(/--color-glass-highlight:/i);
    expect(baseCss).toMatch(/--color-mist-secondary:/i);
  });

  it("removes dotted page background", () => {
    expect(baseCss).not.toMatch(/background-size:\s*16px\s+16px/);
  });

  it("defines restrained glass elevation levels", () => {
    expect(baseCss).not.toMatch(/--glow-theme:/i);
    ["sm", "md", "lg"].forEach((level) => {
      expect(baseCss).toMatch(new RegExp(`--shadow-glass-${level}:`, "i"));
    });
  });
});
