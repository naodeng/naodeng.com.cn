import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, test } from "vitest";

const baseCss = readFileSync(resolve(process.cwd(), "../src/styles/base.css"), "utf8");
const layoutCss = readFileSync(resolve(process.cwd(), "../src/styles/layout.css"), "utf8");
const homePage = readFileSync(resolve(process.cwd(), "../src/pages/[lang]/index.astro"), "utf8");
const footer = readFileSync(resolve(process.cwd(), "../src/components/Footer.astro"), "utf8");

describe("Astro Editorial theme tokens", () => {
  test("defines official-site-derived layout measurements", () => {
    expect(baseCss).toContain("--layout-max: 1280px");
    expect(baseCss).toContain("--layout-gutter: 24px");
    expect(baseCss).toContain("--reading-max: 768px");
    expect(baseCss).toContain("--header-height: 80px");
    expect(baseCss).toContain("--reading-max: 768px");
    expect(layoutCss).toContain("var(--layout-max)");
  });

  test("uses semantic surfaces instead of the legacy mist and glass system", () => {
    expect(baseCss).toContain("--color-canvas:");
    expect(baseCss).toContain("--color-surface-elevated:");
    expect(baseCss).toContain("--color-code-surface:");
    expect(baseCss).toContain("--color-canvas: #f8fafc");
    expect(baseCss).toContain("--color-border: #dce2ea");
    expect(baseCss).not.toContain("--color-mist-primary:");
    expect(baseCss).not.toContain("--gradient-hero:");
  });

  test("switches the interactive accent for dark mode", () => {
    const darkTheme = baseCss.match(/:root\[data-theme="dark"\]\s*\{([\s\S]*?)\n\}/)?.[1];
    expect(darkTheme).toContain("--color-theme: #78a9ff");
  });

  test("keeps homepage and footer breakpoints on the editorial grid", () => {
    expect(homePage).not.toContain("width: min(1120px, calc(100% - 48px))");
    expect(homePage).not.toContain("width: min(980px, calc(100% - 32px))");
    expect(footer).toMatch(
      /@media \(max-width: 760px\)\s*\{[\s\S]*?\.footer-nav\s*\{[\s\S]*?grid-template-columns:\s*repeat\(2, minmax\(0, 1fr\)\)/,
    );
  });
});
