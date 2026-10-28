import { test } from "@e2e-dev/web";
import { expect } from "e2e";
import { measureContrast } from "../../e2e/support/wcag-contrast";

type ContrastSample = {
  name: string;
  path: string;
  selectors: string[];
  theme?: "light" | "dark";
  copyState?: "copied" | "failed";
};

const samples: ContrastSample[] = [
  { name: "home-zh", path: "/zh-cn/", selectors: [".home-hero__subtitle", ".home-band__subtitle", ".home-card__title", ".home-card__desc"] },
  { name: "wiki-index-zh", path: "/zh-cn/wiki/", selectors: [".wiki-letter-title", ".wiki-letter-link", ".wiki-search-input"] },
  { name: "aiwiki-index-zh", path: "/zh-cn/AIWiki/", selectors: [".wiki-letter-title", ".wiki-letter-link", ".wiki-search-input"] },
  { name: "blog-detail-zh", path: "/zh-cn/blog/ai-testing/introduction_of_awesome_qa_prompt/", selectors: [".prose p", ".prose li", ".article-meta", ".blog-related-terms-pill"] },
  { name: "dsh-qa-light", path: "/zh-cn/dsh-qa/", selectors: [".flow-status.pass"], theme: "light" },
  { name: "dsh-qa-dark", path: "/zh-cn/dsh-qa/", selectors: [".flow-status.pass"], theme: "dark" },
  { name: "ai-test-auditor-dark", path: "/zh-cn/ai-test-auditor/", selectors: [".status.fake", ".status.weak"], theme: "dark" },
];

for (const locale of ["en", "zh-cn"] as const) {
  for (const theme of ["light", "dark"] as const) {
    for (const copyState of ["copied", "failed"] as const) {
      samples.push({
        name: `${locale}-share-${copyState}-${theme}`,
        path: `/${locale}/blog/ai-testing/introduction_of_awesome_qa_prompt/`,
        selectors: [".article-share-copy", "#article-share-copy-feedback"],
        theme,
        copyState,
      });
    }
    samples.push(
      { name: `${locale}-archive-dates-${theme}`, path: `/${locale}/archive/`, selectors: [".date"], theme },
      { name: `${locale}-series-counts-${theme}`, path: `/${locale}/series/`, selectors: [".aggregate-count"], theme },
      { name: `${locale}-footer-${theme}`, path: `/${locale}/`, selectors: [".built-with", ".capability-recommendations__label"], theme },
      { name: `${locale}-blog-metadata-${theme}`, path: `/${locale}/blog/`, selectors: [".post-date", ".post-reading-time"], theme },
      { name: `${locale}-guild-category-${theme}`, path: `/${locale}/guild/ui-testing/`, selectors: [".breadcrumb-link", ".tt-section-title", ".fw-card__lang", ".fw-card__desc", ".fw-card__count"], theme },
      { name: `${locale}-guild-framework-${theme}`, path: `/${locale}/guild/ui-testing/playwright/`, selectors: [".fw-stat__label", ".article-description", ".article-difficulty"], theme },
      { name: `${locale}-guild-article-${theme}`, path: `/${locale}/guild/ui-testing/playwright/getting-started/`, selectors: [".difficulty-badge"], theme },
      { name: `${locale}-prompt-metadata-${theme}`, path: `/${locale}/prompts/test-case-writing/`, selectors: [".prompt-sidebar-label", ".prompt-sidebar-nav li small", ".prompt-variants-label", ".prompt-related-prompt small"], theme },
    );
  }
}

for (const sample of samples) {
  test(`${sample.name} sampled text meets WCAG AA contrast`, async ({ app, browser }) => {
    await browser.emulateMedia({ reducedMotion: "reduce" });
    if (sample.theme) {
      await browser.addInitScript((theme) => localStorage.setItem("themePreference", theme), sample.theme);
    }
    if (sample.copyState) {
      await browser.addInitScript((state) => {
        Object.defineProperty(navigator, "clipboard", {
          configurable: true,
          value: {
            writeText: () => state === "copied" ? Promise.resolve() : Promise.reject(new Error("Clipboard denied")),
          },
        });
      }, sample.copyState);
    }

    await app.open(sample.path);
    if (sample.theme) {
      await expect(browser.locator("html")).toHaveAttribute("data-theme", sample.theme);
    }
    if (sample.copyState) {
      const copyButton = browser.locator(".article-share-copy");
      await copyButton.click();
      await expect(copyButton).toHaveAttribute("data-state", sample.copyState);
      await expect(browser.locator("#article-share-copy-feedback")).toBeVisible();
    }

    for (const selector of sample.selectors) {
      const result = await browser.evaluate(measureContrast, selector);

      expect(result.missing, `${sample.name} missing selector ${selector}`).toBe(false);
      expect(result.ratio, `${sample.name} ${selector} has a measurable contrast ratio`).not.toBeNull();
      expect(result.ratio ?? 0, `${sample.name} ${selector} contrast ratio`).toBeGreaterThanOrEqual(result.threshold ?? 100);
    }
  });
}
