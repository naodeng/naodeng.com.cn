import { expect, test } from "@playwright/test";

const compactPages = [
  { path: "/archive/", name: "archive" },
  { path: "/projects/", name: "projects" },
  { path: "/links/", name: "links" },
  { path: "/privacy/", name: "privacy" },
  { path: "/copyright/", name: "copyright" },
  { path: "/sponsor/", name: "sponsor" },
  { path: "/sitemap/", name: "sitemap" },
] as const;

test.describe("Proofline site pages", () => {
  for (const locale of ["en", "zh-cn"] as const) {
    test(`${locale} shared page headlines stay inside phone and tablet gutters`, async ({ page }) => {
      await page.emulateMedia({ reducedMotion: "reduce" });
      for (const width of [390, 600]) {
        await page.setViewportSize({ width, height: 900 });
        for (const { path } of [...compactPages, { path: "/tags/" }, { path: "/series/" }]) {
          await page.goto(`/${locale}${path}`, { waitUntil: "domcontentloaded" });
          const sizes = await page.locator("main > header").evaluate((el) => ({ left: el.getBoundingClientRect().left, right: el.getBoundingClientRect().right, width: document.documentElement.clientWidth, scroll: document.documentElement.scrollWidth }));
          expect(sizes.left, path).toBeGreaterThanOrEqual(0);
          expect(sizes.right, path).toBeLessThanOrEqual(sizes.width + 1);
          expect(sizes.scroll, path).toBeLessThanOrEqual(sizes.width + 1);
        }
      }
    });

    test(`${locale} resource guide cards open the named article`, async ({ page }) => {
      await page.goto(`/${locale}/resources/`, { waitUntil: "domcontentloaded" });
      const card = page.locator("#guides .resource-card").first();
      const title = await card.locator("h3").innerText();
      await card.click();
      await expect(page.locator(".guild-article-title")).toHaveText(title);
    });

    test(`${locale} series article counts remain on one line on mobile`, async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto(`/${locale}/series/`, { waitUntil: "domcontentloaded" });
      for (const count of await page.locator(".aggregate-count").all()) {
        const sizes = await count.evaluate((el) => ({ width: el.clientWidth, scroll: el.scrollWidth, height: el.getBoundingClientRect().height, line: parseFloat(getComputedStyle(el).lineHeight) }));
        expect(sizes.scroll).toBeLessThanOrEqual(sizes.width + 1);
        expect(sizes.height).toBeLessThanOrEqual(sizes.line + 1);
      }
    });

    for (const pageInfo of compactPages) {
      test(`${locale}${pageInfo.path} keeps the compact editorial headline`, async ({ page, baseURL }) => {
        await page.goto(`${baseURL || ""}/${locale}${pageInfo.path}`, { waitUntil: "domcontentloaded" });
        await expect(page.locator("main")).toBeVisible();
        await expect(page.locator("main > header.compact")).toBeVisible();
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
      });
    }

    test(`${locale}/links has no empty placeholder destinations`, async ({ page, baseURL }) => {
      await page.goto(`${baseURL || ""}/${locale}/links/`, { waitUntil: "domcontentloaded" });
      await expect(page.locator('.link-card[href="#"]')).toHaveCount(0);
      await expect(page.locator('main a[href="mailto:dengnao@gmail.com"]')).toBeVisible();
    });

    test(`${locale}/about and ${locale}/404 keep readable recovery surfaces`, async ({ page, baseURL }) => {
      await page.goto(`${baseURL || ""}/${locale}/about/`, { waitUntil: "domcontentloaded" });
      await expect(page.locator(".about-hero")).toBeVisible();
      await page.goto(`${baseURL || ""}/${locale}/404/`, { waitUntil: "domcontentloaded" });
      await expect(page.locator(".container .gotop")).toBeVisible();
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    });
  }
});
