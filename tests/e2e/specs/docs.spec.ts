import { test, expect } from "@playwright/test";
import { getRetiredDocsPageUrls, LOCALES } from "../support/constants";

test.describe("Docs 共享阅读布局与示例页面移除", () => {
  const retired = [
    ...LOCALES.map(locale => ({ path: `/${locale}/docs/` })),
    ...getRetiredDocsPageUrls(),
  ];

  for (const { path } of retired) {
    test(`${path} 返回 404 且不允许索引`, async ({ page }) => {
      const response = await page.goto(path, { waitUntil: "domcontentloaded" });
      expect(response?.status()).toBe(404);
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
      await expect(page.locator("main h1")).toBeVisible();
    });
  }

  test("站点地图不包含示例路径", async ({ request }) => {
    const response = await request.get("/sitemap-0.xml");
    expect(response.ok()).toBe(true);
    expect(await response.text()).not.toMatch(/\/(en|zh-cn)\/docs(?:\/|<)/);
  });

  for (const locale of LOCALES) {
    test(`${locale} 导航和搜索索引不包含 Docs 示例入口`, async ({ page, request }) => {
      await page.goto(`/${locale}/`, { waitUntil: "domcontentloaded" });
      await expect(page.locator(`a[href^="/${locale}/docs/"]`)).toHaveCount(0);
      const response = await request.get(`/${locale}/search-index.json`);
      expect(response.ok()).toBe(true);
      const items = await response.json();
      expect(items.length).toBeGreaterThan(0);
      expect(items.some((item: { url: string }) => /\/(en|zh-cn)\/docs\//.test(item.url))).toBe(false);
    });

    test(`${locale} AI 百科继续使用共享阅读布局和当前项导航`, async ({ page }) => {
      await page.goto(`/${locale}/AIWiki/ai-agent/`, { waitUntil: "domcontentloaded" });
      await expect(page.locator(".docs-content h1")).toBeVisible();
      await expect(page.locator(".docs-sidebar-link--active")).toHaveAttribute("aria-current", "page");
      await expect(page.locator(".docs-toc-wrap .toc-list--desktop .toc-link").first()).toBeVisible();
    });
  }

  const readingRoutes = [
    ...LOCALES.flatMap(locale => [
      `/${locale}/AIWiki/ai-agent/`,
      `/${locale}/guild/ui-testing/playwright/getting-started/`,
      `/${locale}/ai-native-qa-weekly/2026/week-39/`,
    ]),
    "/zh-cn/wiki/accessibility-testing/",
  ];

  for (const path of readingRoutes) {
    for (const width of [768, 899]) {
      test(`${path} 在 ${width}px 首屏可阅读，侧栏支持键盘与触控`, async ({ page }) => {
        await page.setViewportSize({ width, height: 900 });
        await page.goto(path, { waitUntil: "domcontentloaded" });
        const title = page.locator(".docs-content h1");
        const toggle = page.locator(".docs-sidebar-toggle");
        const nav = page.locator(".docs-sidebar-nav");
        await expect(title).toBeInViewport({ ratio: 1 });
        expect((await title.boundingBox())!.y).toBeLessThan(540);
        await expect(toggle).toHaveAttribute("aria-expanded", "false");
        await expect(nav).toBeHidden();
        expect((await toggle.boundingBox())!.height).toBeGreaterThanOrEqual(44);

        await toggle.focus();
        await page.keyboard.press("Enter");
        await expect(toggle).toHaveAttribute("aria-expanded", "true");
        await expect(nav).toBeVisible();
        expect((await nav.locator("a").first().boundingBox())!.height).toBeGreaterThanOrEqual(44);
        await page.keyboard.press("Space");
        await expect(toggle).toHaveAttribute("aria-expanded", "false");
        await expect(nav).toBeHidden();

        await page.setViewportSize({ width: 900, height: 900 });
        await expect(toggle).toBeHidden();
        await expect(nav).toBeVisible();
        await expect(page.locator(".docs-content")).toBeVisible();
      });
    }
  }
});
