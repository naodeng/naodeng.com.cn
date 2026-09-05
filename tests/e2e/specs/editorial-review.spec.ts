import { expect, test } from "@playwright/test";

for (const lang of ["en", "zh-cn"]) {
  test(`${lang}: editorial reading width and neutral footer`, async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(`/${lang}/qaskills/`);
    const detail = page.locator(`a[href^='/${lang}/qaskills/']`).filter({ hasNotText: /^$/ });
    const hrefs = await detail.evaluateAll(nodes => nodes.map(node => node.getAttribute("href")));
    const href = hrefs.find(value => value && value !== `/${lang}/qaskills/`);
    expect(href).toBeTruthy();
    await page.goto(href!);
    await expect(page.locator(".detail-main")).toBeVisible();
    expect(await page.locator(".detail-main").evaluate(el => el.getBoundingClientRect().width)).toBeLessThanOrEqual(768);
    await page.goto(`/${lang}/`);
    await expect(page.locator("footer .lang-label")).toHaveCSS("background-image", "none");
    await page.locator("footer .wechat-follow-trigger").click();
    await expect(page.locator("[data-wechat-dialog]")).toBeVisible();
    await expect(page.locator(".wechat-follow-card")).toHaveCSS("background-image", "none");
    expect(await page.locator("[data-wechat-dialog]").evaluate(el => getComputedStyle(el, "::backdrop").backdropFilter)).toBe("none");
  });

  test(`${lang}: prompts stays within the mobile viewport`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`/${lang}/prompts/`);
    await page.evaluate(() => document.fonts.ready);
    const widths = await page.evaluate(() => ({ scroll: document.documentElement.scrollWidth, client: document.documentElement.clientWidth }));
    expect(widths.scroll).toBeLessThanOrEqual(widths.client + 1);
  });
}
