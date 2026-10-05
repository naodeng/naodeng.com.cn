import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, test } from "vitest";

const baseCss = readFileSync(resolve(process.cwd(), "../src/styles/base.css"), "utf8");
const layoutCss = readFileSync(resolve(process.cwd(), "../src/styles/layout.css"), "utf8");
const astroConfig = readFileSync(resolve(process.cwd(), "../astro.config.mjs"), "utf8");
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
    expect(baseCss).toContain("--color-base: #faf9f6");
    expect(baseCss).toContain("--color-canvas: #faf9f6");
    expect(baseCss).toContain("--color-surface: #ffffff");
    expect(baseCss).toContain("--color-surface-elevated: #ffffff");
    expect(baseCss).toContain("--color-main: #202a30");
    expect(baseCss).toContain("--color-text-secondary: #5c6b6d");
    expect(baseCss).toContain("--color-text-tertiary: #627275");
    expect(baseCss).toContain("--color-border: #dfe4e1");
    expect(baseCss).toContain("--color-border-strong: #b9cfcb");
    expect(baseCss).toContain("--color-code-surface: #f1f5f3");
    expect(baseCss).toContain("--color-success-text: #16803a");
    expect(baseCss).toContain("--color-theme: #176b75");
    expect(baseCss).toContain("--color-theme-focus: #0f5962");
    expect(baseCss).toContain("--color-theme-on-dark: #ffffff");
    expect(baseCss).not.toContain("--color-mist-primary:");
    expect(baseCss).not.toContain("--gradient-hero:");
  });

  test("switches the interactive accent for dark mode", () => {
    const darkTheme = baseCss.match(/:root\[data-theme="dark"\]\s*\{([\s\S]*?)\n\}/)?.[1];
    expect(darkTheme).toContain("--color-theme: #12ccd8");
    expect(darkTheme).toContain("--color-base: #13191c");
    expect(darkTheme).toContain("--color-canvas: #13191c");
    expect(darkTheme).toContain("--color-surface: #1a2226");
    expect(darkTheme).toContain("--color-surface-elevated: #202b2f");
    expect(darkTheme).toContain("--color-main: #e7eceb");
    expect(darkTheme).toContain("--color-text-secondary: #a8b6b5");
    expect(darkTheme).toContain("--color-text-tertiary: #819390");
    expect(darkTheme).toContain("--color-border: #344247");
    expect(darkTheme).toContain("--color-border-strong: #4d686c");
    expect(darkTheme).toContain("--color-code-surface: #202b2f");
    expect(darkTheme).toContain("--color-success-text: #76c893");
    expect(darkTheme).toContain("--color-theme-focus: #7de6ec");
    expect(darkTheme).toContain("--color-theme-on-dark: #13191c");
    expect(darkTheme).toContain("--color-theme-soft: color-mix(in srgb, var(--color-theme) 10%, #13191c)");
    expect(darkTheme).toContain("--color-theme-soft-hover: color-mix(in srgb, var(--color-theme) 16%, #13191c)");
  });

  test("defines Proofline motion and reading affordances", () => {
    expect(baseCss).toContain("--transition-base: color");
    expect(baseCss).not.toContain("--transition-base: all");
    expect(baseCss).toContain("font-variant-numeric: tabular-nums");
    expect(baseCss).toContain("text-wrap: balance");
  });

  test("keeps Markdown code blocks aligned with the selected theme", () => {
    expect(astroConfig).toContain('light: "github-light"');
    expect(astroConfig).toContain('dark: "github-dark"');
    expect(astroConfig).toContain("defaultColor: false");
    expect(baseCss).toContain("pre.astro-code");
    expect(baseCss).toContain("var(--shiki-light)");
    expect(baseCss).toContain("var(--shiki-dark)");
  });

  test("keeps homepage and footer breakpoints on the editorial grid", () => {
    expect(homePage).not.toContain("width: min(1120px, calc(100% - 48px))");
    expect(homePage).not.toContain("width: min(980px, calc(100% - 32px))");
    expect(footer).toMatch(
      /@media \(max-width: 760px\)\s*\{[\s\S]*?\.footer-nav\s*\{[\s\S]*?grid-template-columns:\s*repeat\(2, minmax\(0, 1fr\)\)/,
    );
  });
});
