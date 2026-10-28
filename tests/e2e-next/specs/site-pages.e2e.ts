import { test } from "@e2e-dev/web";
import { expect } from "e2e";

const compactPages = [
  "/archive/",
  "/projects/",
  "/links/",
  "/privacy/",
  "/copyright/",
  "/sponsor/",
  "/sitemap/",
] as const;

for (const locale of ["en", "zh-cn"] as const) {
  test(`${locale} shared page headings stay inside phone and tablet viewports`, async ({ app, browser, screen }) => {
    await browser.emulateMedia({ reducedMotion: "reduce" });
    for (const width of [390, 600]) {
      await browser.setViewport({ width, height: 900 });
      for (const path of [...compactPages, "/tags/", "/series/"]) {
        await app.open(`/${locale}${path}`);
        await expect(screen.getByRole("heading", { level: 1 })).toBeVisible();
        const bounds = await browser.evaluate(() => {
          const heading = document.querySelector("main > header h1") ?? document.querySelector("main h1");
          return {
            viewport: document.documentElement.clientWidth,
            page: document.documentElement.scrollWidth,
            headingRight: heading?.getBoundingClientRect().right ?? null,
          };
        });
        expect(bounds.page).toBeLessThanOrEqual(bounds.viewport + 1);
        expect(bounds.headingRight ?? 0).toBeLessThanOrEqual(bounds.viewport + 1);
      }
    }
  });

  test(`${locale} resource guide card opens the named article`, async ({ app, browser }) => {
    await app.open(`/${locale}/resources/`);
    const card = browser.locator("#guides .resource-card").first();
    await expect(card).toBeVisible();
    const title = await browser.locator("#guides .resource-card h3").first().textContent();
    expect(title).toBeTruthy();
    await card.click();
    await expect(browser.locator(".guild-article-title")).toHaveText(String(title).trim());
  });

  for (const path of compactPages) {
    test(`${locale}${path} presents its compact editorial headline`, async ({ app, browser, screen }) => {
      await app.open(`/${locale}${path}`);
      await expect(screen.getByRole("main")).toBeVisible();
      await expect(browser.locator("main > header.compact")).toBeVisible();
      await expect(screen.getByRole("heading", { level: 1 })).toBeVisible();
      const pageWidth = await browser.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth);
      expect(pageWidth).toBe(true);
    });
  }

  test(`${locale}/links has no empty placeholder destinations`, async ({ app, browser }) => {
    await app.open(`/${locale}/links/`);
    await expect(browser.locator('.link-card[href="#"]')).toHaveCount(0);
    await expect(browser.locator('main a[href="mailto:dengnao@gmail.com"]')).toBeVisible();
  });

  test(`${locale}/about and ${locale}/404 keep readable recovery surfaces`, async ({ app, browser, screen }) => {
    await app.open(`/${locale}/about/`);
    await expect(browser.locator(".about-hero")).toBeVisible();
    await app.open(`/${locale}/404/`);
    await expect(screen.getByRole("main")).toBeVisible();
    await expect(browser.locator(".container .gotop")).toBeVisible();
    await expect(browser.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/i);
    expect(await browser.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  });
}
