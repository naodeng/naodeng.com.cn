import { test } from "@e2e-dev/web";
import { expect } from "e2e";

for (const locale of ["en", "zh-cn"] as const) {
  test(`${locale} retired Docs entry stays unavailable and excluded from navigation`, async ({ app, browser, screen }) => {
    const responsePromise = browser.waitForResponse(`**/${locale}/docs/`);
    await app.open(`/${locale}/docs/`);
    const response = await responsePromise;
    expect(response.status).toBe(404);
    await expect(browser.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
    await expect(screen.getByRole("main")).toBeVisible();
    await expect(browser.locator(`a[href^="/${locale}/docs/"]`)).toHaveCount(0);

    const sitemap = await browser.evaluate(async () => await (await fetch("/sitemap-0.xml")).text());
    expect(sitemap).not.toMatch(new RegExp(`/${locale}/docs(?:/|<)`));
  });

  test(`${locale} AI Wiki continues to use the shared reading layout`, async ({ app, browser, screen }) => {
    await app.open(`/${locale}/AIWiki/ai-agent/`);

    await expect(screen.getByRole("main")).toBeVisible();
    await expect(browser.locator(".docs-content h1")).toBeVisible();
    await expect(browser.locator(".docs-sidebar-link--active")).toHaveAttribute("aria-current", "page");
    await expect(browser.locator(".docs-toc-wrap .toc-list--desktop .toc-link").first()).toBeVisible();
  });
}

test("mobile reading TOC opens by keyboard and follows a selected section", async ({ app, browser }) => {
  await browser.emulateMedia({ reducedMotion: "reduce" });
  await browser.setViewport({ width: 390, height: 900 });
  await app.open("/zh-cn/wiki/automated-testing/");

  const summary = browser.locator(".docs-toc-wrap .toc-summary");
  const details = browser.locator(".docs-toc-wrap details");
  await expect(summary).toBeVisible();
  await summary.press("Enter");
  await expect(details).toHaveAttribute("open", "");

  const link = browser.locator(".docs-toc-wrap .toc-list--mobile .toc-link").nth(1);
  const href = await link.getAttribute("href");
  expect(href).toBeTruthy();
  await link.press("Enter");
  await expect(browser).toHaveURL(new URL(href!, await browser.url()).href);
  await expect(details).not.toHaveAttribute("open", "");
});
