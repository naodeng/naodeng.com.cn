import { test } from "@e2e-dev/web";
import { expect } from "e2e";
import { getRetiredDocsPageUrls } from "../support/constants";

for (const locale of ["en", "zh-cn"] as const) {
  test(`${locale} retired Docs routes return local noindex 404 pages and stay out of navigation and indexes`, async ({ app, browser }) => {
    await app.open(`/${locale}/`);
    const retiredPaths = getRetiredDocsPageUrls()
      .filter((page) => page.locale === locale)
      .map((page) => page.path);
    const retiredResponses = await browser.evaluate(async (paths) => Promise.all(paths.map(async (path) => {
      const response = await fetch(path);
      const body = await response.text();
      return { path, status: response.status, hasHeading: /<h1[\s>]/i.test(body), hasNoindex: /name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(body) };
    })), retiredPaths);

    for (const result of retiredResponses) {
      expect(result.status, `${result.path} local status`).toBe(404);
      expect(result.hasHeading, `${result.path} has a 404 heading`).toBe(true);
      expect(result.hasNoindex, `${result.path} is not indexable`).toBe(true);
    }
    await expect(browser.locator(`a[href^="/${locale}/docs/"]`)).toHaveCount(0);

    const indexes = await browser.evaluate(async (lang) => {
      const [sitemapResponse, indexResponse] = await Promise.all([
        fetch("/sitemap-0.xml"),
        fetch(`/${lang}/search-index.json`),
      ]);
      return {
        sitemapStatus: sitemapResponse.status,
        sitemap: await sitemapResponse.text(),
        searchIndexStatus: indexResponse.status,
        searchIndex: await indexResponse.json() as { url: string }[],
      };
    }, locale);
    expect(indexes.sitemapStatus).toBe(200);
    expect(indexes.searchIndexStatus).toBe(200);
    expect(indexes.sitemap).not.toMatch(new RegExp(`/${locale}/docs(?:/|<)`));
    expect(indexes.searchIndex.length).toBeGreaterThan(0);
    expect(indexes.searchIndex.some((item) => /\/(en|zh-cn)\/docs\//.test(item.url))).toBe(false);
  });

  test(`${locale} AI Wiki continues to use the shared reading layout`, async ({ app, browser, screen }) => {
    await app.open(`/${locale}/AIWiki/ai-agent/`);

    await expect(screen.getByRole("main")).toBeVisible();
    await expect(browser.locator(".docs-content h1")).toBeVisible();
    await expect(browser.locator(".docs-sidebar-link--active")).toHaveAttribute("aria-current", "page");
    await expect(browser.locator(".docs-toc-wrap .toc-list--desktop .toc-link").first()).toBeVisible();
  });
}

for (const path of ["/en/AIWiki/model-context-protocol-mcp/", "/zh-cn/wiki/automated-testing/", "/zh-cn/ai-native-qa-weekly/2026/week-40/"]) {
  test(`${path} reading TOC opens by keyboard and follows a selected section without hiding it`, async ({ app, browser }) => {
    await browser.emulateMedia({ reducedMotion: "reduce" });
    for (const width of [390, 1024]) {
      await browser.setViewport({ width, height: 900 });
      await app.open(path);

      const summary = browser.locator(".docs-toc-wrap .toc-summary");
      const details = browser.locator(".docs-toc-wrap details");
      await expect(summary).toBeVisible();
      const tocMetrics = await browser.evaluate(() => ({
        summaryHeight: document.querySelector(".docs-toc-wrap .toc-summary")!.getBoundingClientRect().height,
        tocBottom: document.querySelector(".docs-toc-wrap")!.getBoundingClientRect().bottom,
        contentTop: document.querySelector(".docs-content")!.getBoundingClientRect().top,
      }));
      expect(tocMetrics.summaryHeight).toBeGreaterThanOrEqual(44);
      expect(tocMetrics.tocBottom).toBeLessThan(tocMetrics.contentTop);
      await summary.press("Enter");
      await expect(details).toHaveAttribute("open", "");

      const link = browser.locator(".docs-toc-wrap .toc-list--mobile .toc-link").nth(1);
      const href = await link.getAttribute("href");
      expect(href).toBeTruthy();
      await link.press("Enter");
      await expect(browser).toHaveURL(new URL(href!, await browser.url()).href);
      await expect(details).not.toHaveAttribute("open", "");
      const sectionId = decodeURIComponent(href!.slice(1));
      const position = await browser.evaluate((id) => ({
        sectionTop: document.getElementById(id)!.getBoundingClientRect().top,
        headerBottom: document.querySelector(".l-header")!.getBoundingClientRect().bottom,
      }), sectionId);
      expect(position.sectionTop - position.headerBottom).toBeGreaterThanOrEqual(8);
      const inViewport = await browser.evaluate((id) => {
        const rect = document.getElementById(id)!.getBoundingClientRect();
        return rect.bottom > 0 && rect.top < window.innerHeight;
      }, sectionId);
      expect(inViewport).toBe(true);
    }
  });
}

const readingRoutes = [
  ...["en", "zh-cn"].flatMap((locale) => [
    `/${locale}/AIWiki/ai-agent/`,
    `/${locale}/guild/ui-testing/playwright/getting-started/`,
    `/${locale}/ai-native-qa-weekly/2026/week-39/`,
  ]),
  "/zh-cn/wiki/accessibility-testing/",
];

for (const path of readingRoutes) {
  for (const width of [768, 899]) {
    test(`${path} at ${width}px keeps the reading sidebar keyboard operable`, async ({ app, browser }) => {
      await browser.setViewport({ width, height: 900 });
      await app.open(path);
      const title = browser.locator(".docs-content h1");
      const toggle = browser.locator(".docs-sidebar-toggle");
      const nav = browser.locator(".docs-sidebar-nav");
      const titleBounds = await browser.evaluate(() => {
        const rect = document.querySelector(".docs-content h1")!.getBoundingClientRect();
        return { top: rect.top, bottom: rect.bottom, viewportHeight: window.innerHeight };
      });
      expect(titleBounds.top).toBeGreaterThanOrEqual(0);
      expect(titleBounds.bottom).toBeLessThanOrEqual(titleBounds.viewportHeight);
      expect(titleBounds.top).toBeLessThan(540);
      await expect(toggle).toHaveAttribute("aria-expanded", "false");
      await expect(nav).toBeHidden();
      const toggleHeight = await browser.evaluate(() => document.querySelector(".docs-sidebar-toggle")!.getBoundingClientRect().height);
      expect(toggleHeight).toBeGreaterThanOrEqual(44);

      await toggle.press("Enter");
      await expect(toggle).toHaveAttribute("aria-expanded", "true");
      await expect(nav).toBeVisible();
      const firstLinkHeight = await browser.evaluate(() => document.querySelector(".docs-sidebar-nav a")!.getBoundingClientRect().height);
      expect(firstLinkHeight).toBeGreaterThanOrEqual(44);
      await toggle.press("Space");
      await expect(toggle).toHaveAttribute("aria-expanded", "false");
      await expect(nav).toBeHidden();

      await browser.setViewport({ width: 900, height: 900 });
      await expect(toggle).toBeHidden();
      await expect(nav).toBeVisible();
      await expect(browser.locator(".docs-content")).toBeVisible();
    });
  }
}
