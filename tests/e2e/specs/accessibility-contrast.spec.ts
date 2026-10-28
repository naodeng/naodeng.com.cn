import { expect, test } from "@playwright/test";
import { measureContrast } from "../support/wcag-contrast";

type ContrastSample = {
  name: string;
  path: string;
  selectors: string[];
  theme?: "light" | "dark";
  copyState?: "copied" | "failed";
};

const samples: ContrastSample[] = [
  {
    name: "home-zh",
    path: "/zh-cn/",
    selectors: [
      ".home-hero__subtitle",
      ".home-band__subtitle",
      ".home-card__title",
      ".home-card__desc",
    ],
  },
  {
    name: "wiki-index-zh",
    path: "/zh-cn/wiki/",
    selectors: [".wiki-letter-title", ".wiki-letter-link", ".wiki-search-input"],
  },
  {
    name: "aiwiki-index-zh",
    path: "/zh-cn/AIWiki/",
    selectors: [".wiki-letter-title", ".wiki-letter-link", ".wiki-search-input"],
  },
  {
    name: "blog-detail-zh",
    path: "/zh-cn/blog/ai-testing/introduction_of_awesome_qa_prompt/",
    selectors: [".prose p", ".prose li", ".article-meta", ".blog-related-terms-pill"],
  },
  {
    name: "dsh-qa-light",
    path: "/zh-cn/dsh-qa/",
    selectors: [".flow-status.pass"],
    theme: "light",
  },
  {
    name: "dsh-qa-dark",
    path: "/zh-cn/dsh-qa/",
    selectors: [".flow-status.pass"],
    theme: "dark",
  },
  {
    name: "ai-test-auditor-dark",
    path: "/zh-cn/ai-test-auditor/",
    selectors: [".status.fake", ".status.weak"],
    theme: "dark",
  },
];

for (const locale of ["en", "zh-cn"]) {
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

test.describe("可访问性对比度审计（WCAG AA 抽样）", () => {
  for (const sample of samples) {
    test(`${sample.name} 关键文本对比度满足 WCAG AA`, async ({ page }) => {
      await page.emulateMedia({ reducedMotion: "reduce" });
      if (sample.theme) {
        await page.addInitScript(selected => localStorage.setItem("themePreference", selected), sample.theme);
      }
      if (sample.copyState) {
        await page.addInitScript(state => {
          Object.defineProperty(navigator, "clipboard", {
            configurable: true,
            value: {
              writeText: () => state === "copied" ? Promise.resolve() : Promise.reject(new Error("Clipboard denied")),
            },
          });
        }, sample.copyState);
      }
      await page.goto(sample.path, { waitUntil: "domcontentloaded" });
      if (sample.theme) {
        await expect(page.locator("html")).toHaveAttribute("data-theme", sample.theme);
      }
      if (sample.copyState) {
        await page.locator(".article-share-copy").click();
        await expect(page.locator(".article-share-copy")).toHaveAttribute("data-state", sample.copyState);
        await expect(page.locator("#article-share-copy-feedback")).toBeVisible();
      }

      for (const selector of sample.selectors) {
        const result = await page.evaluate(measureContrast, selector);

        expect(result.missing, `${sample.name} missing selector ${selector}`).toBeFalsy();
        expect((result as { ratio?: number }).ratio, `${sample.name} ${selector} ratio missing`).toBeTruthy();
        expect(
          (result as { ratio: number; threshold: number }).ratio,
          `${sample.name} ${selector} contrast ratio too low: ${JSON.stringify(result)}`,
        ).toBeGreaterThanOrEqual((result as { threshold: number }).threshold);
      }
    });
  }
});
