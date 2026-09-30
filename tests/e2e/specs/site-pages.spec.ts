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
