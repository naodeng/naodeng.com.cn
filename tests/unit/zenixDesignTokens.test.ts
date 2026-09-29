import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

// Vitest cwd 为 tests/（与现有 unit 测试一致）
const baseCss = readFileSync(
  resolve(process.cwd(), "../src/styles/base.css"),
  "utf8",
);

describe("Editorial design tokens in base.css", () => {
  it("uses Proofline teal as the single theme color", () => {
    expect(baseCss).toMatch(/--color-theme:\s*#176b75/i);
    // 主题色保持单一，避免旧的多色强调
    expect(baseCss).not.toMatch(/--color-accent:/i);
    expect(baseCss).not.toMatch(/--color-theme:\s*#ef4d1a/i);
    expect(baseCss).not.toMatch(/rgba\(79,\s*70,\s*229/i);
  });

  it("defines a warm editorial canvas and explicit derived accents", () => {
    expect(baseCss).toMatch(/--color-base:\s*#faf9f6/i);
    expect(baseCss).toMatch(/--gradient-theme:\s*var\(--color-theme\)/i);
    expect(baseCss).toMatch(/--color-theme-soft:\s*color-mix\(in srgb, var\(--color-theme\) 10%, #ffffff\)/i);
    expect(baseCss).toMatch(/--color-theme-soft-hover:\s*color-mix\(in srgb, var\(--color-theme\) 16%, #ffffff\)/i);
  });

  it("keeps migration aliases without treating them as the new surface contract", () => {
    expect(baseCss).toMatch(/:root\[data-theme="dark"\]/i);
    ["strong", "medium", "weak"].forEach((level) => {
      expect(baseCss).toMatch(new RegExp(`--color-glass-${level}:`, "i"));
    });
    expect(baseCss).toMatch(/--color-glass-highlight:/i);
    expect(baseCss).toMatch(/--color-mist-secondary:/i);
    expect(baseCss).toMatch(/--color-glass-strong:\s*var\(--color-surface-elevated\)/i);
    expect(baseCss).toMatch(/--color-glass-medium:\s*var\(--color-surface-elevated\)/i);
    expect(baseCss).toMatch(/--color-glass-weak:\s*var\(--color-surface-muted\)/i);
    expect(baseCss).toMatch(/--color-mist-secondary:\s*transparent/i);
    expect(baseCss).not.toMatch(/--color-border-strong:\s*rgba\(79,\s*70,\s*229/i);
  });

  it("removes dotted page background", () => {
    expect(baseCss).not.toMatch(/background-size:\s*16px\s+16px/);
  });

  it("defines restrained glass elevation levels", () => {
    expect(baseCss).not.toMatch(/--glow-theme:/i);
    ["sm", "md", "lg"].forEach((level) => {
      expect(baseCss).toMatch(new RegExp(`--shadow-glass-${level}:`, "i"));
    });
    expect(baseCss).not.toMatch(/--shadow-product:\s*0\s+18px\s+48px\s+rgba\(79,\s*70,\s*229/i);
    expect(baseCss).not.toMatch(/--transition-base:\s*all/i);
  });
});
