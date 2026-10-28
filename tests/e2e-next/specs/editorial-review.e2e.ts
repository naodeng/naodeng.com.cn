import { test } from "@e2e-dev/web";
import { expect } from "e2e";

for (const locale of ["en", "zh-cn"] as const) {
  test(`${locale} QA Skill detail stays within its desktop reading-width cap`, async ({ app, browser }) => {
    await browser.setViewport({ width: 1920, height: 1080 });
    await app.open(`/${locale}/qaskills/`);

    const links = await browser.locator(`a[href^='/${locale}/qaskills/']`).all();
    let detailPath: string | null = null;
    for (const link of links) {
      const href = await link.getAttribute("href");
      if (href && href !== `/${locale}/qaskills/`) {
        detailPath = href;
        break;
      }
    }
    expect(detailPath).toBeTruthy();
    await app.open(String(detailPath));
    await expect(browser.locator(".detail-main")).toBeVisible();
    const layout = await browser.evaluate(() => ({
      cap: Number.parseFloat(getComputedStyle(document.querySelector(".qaskill-detail")!).maxInlineSize),
      width: document.querySelector(".detail-main")!.getBoundingClientRect().width,
    }));
    expect(layout.width).toBeLessThanOrEqual(layout.cap + 1);
  });

  test(`${locale} footer follow dialog opens and dismisses with Escape`, async ({ app, browser }) => {
    await app.open(`/${locale}/`);
    const trigger = browser.locator("footer .wechat-follow-trigger");
    if (await trigger.count() === 0) return;

    await trigger.click();
    const dialog = browser.locator("[data-wechat-dialog]");
    await expect(dialog).toBeVisible();
    await browser.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
  });

  test(`${locale} prompts directory fits a mobile viewport`, async ({ app, browser }) => {
    await browser.setViewport({ width: 390, height: 844 });
    await app.open(`/${locale}/prompts/`);
    const widths = await browser.evaluate(() => ({
      scroll: document.documentElement.scrollWidth,
      client: document.documentElement.clientWidth,
    }));
    expect(widths.scroll).toBeLessThanOrEqual(widths.client + 1);
  });
}
