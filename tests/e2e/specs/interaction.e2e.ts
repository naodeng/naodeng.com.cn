import { test } from "@e2e-dev/web";
import { expect } from "e2e";

const articles = {
  en: "/en/blog/ai-testing/ai-test-auditor-static-evidence-for-ai-generated-tests/",
  "zh-cn": "/zh-cn/blog/ai-testing/ai-test-auditor-static-evidence-for-ai-generated-tests/",
} as const;

for (const locale of ["en", "zh-cn"] as const) {
  test(`${locale} article TOC link scrolls to its section`, async ({ app, browser }) => {
    await browser.emulateMedia({ reducedMotion: "reduce" });
    await app.open(articles[locale]);
    const link = browser.locator(".toc-sidebar .toc-list--desktop .toc-link").first();
    await expect(link).toBeVisible();
    const href = await link.getAttribute("href");
    expect(href).toMatch(/^#.+$/);
    await link.click();
    await expect(browser).toHaveURL(new URL(href!, await browser.url()).href);
    await expect.poll(() => browser.evaluate((fragment) => {
      const target = document.getElementById(decodeURIComponent(fragment.slice(1)));
      if (!target) return false;
      const bounds = target.getBoundingClientRect();
      return bounds.top >= -1 && bounds.top < window.innerHeight && bounds.bottom > 0;
    }, href!)).toBe(true);
  });

  test(`${locale} tag cloud links open a tag page`, async ({ app, browser }) => {
    await app.open(`/${locale}/tags/`);
    const link = browser.locator(".tags-cloud a").first();
    await expect(link).toBeVisible();
    await link.click();
    await expect(browser).toHaveURL(new RegExp(`/${locale}/tags/`));
    await expect(browser.locator("main")).toBeVisible();
  });

  test(`${locale} article code copy reports success`, async ({ app, browser }) => {
    await browser.addInitScript(() => {
      Object.defineProperty(navigator, "clipboard", {
        configurable: true,
        value: { writeText: () => Promise.resolve() },
      });
    });
    await app.open(articles[locale]);
    const copyButton = browser.locator(".code-copy-btn").first();
    await expect(copyButton).toBeVisible();
    await copyButton.focus();
    await copyButton.click();
    await expect(copyButton).toHaveText(locale === "en" ? "Copied!" : "已复制");
    await expect(browser).toHaveClass(copyButton, /copied/);
  });
}

for (const locale of ["en", "zh-cn"] as const) {
  test(`${locale} article share controls expose supported destinations and copy feedback`, async ({ app, browser }) => {
    await browser.addInitScript(() => {
      Object.defineProperty(navigator, "clipboard", {
        configurable: true,
        value: { writeText: () => Promise.resolve() },
      });
    });
    await app.open(articles[locale]);

    const share = browser.locator(".article-share");
    await expect(share).toBeVisible();
    const copyLabel = locale === "zh-cn" ? "复制链接" : "Copy link";
    const copiedText = locale === "zh-cn" ? "已复制" : "Copied";
    await expect(browser.locator(`.article-share button[aria-label='${copyLabel}']`)).toBeVisible();
    const destinations = ["X (Twitter)", "LinkedIn", "Facebook", ...(locale === "zh-cn" ? ["微博"] : [])];
    for (const label of destinations) {
      await expect(browser.locator(`.article-share a[aria-label="${label}"]`)).toBeVisible();
    }
    await expect(browser.locator('.article-share a[aria-label="Instagram"]')).toHaveCount(0);

    const copy = browser.locator(".article-share-copy");
    await copy.click();
    await expect(copy).toHaveAttribute("data-state", "copied");
    await expect(browser.locator("#article-share-copy-feedback")).toHaveText(copiedText);
  });
}
