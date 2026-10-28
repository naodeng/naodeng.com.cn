import { test } from "@e2e-dev/web";
import { expect } from "e2e";
import { getExtraPageUrls, getMainPageUrls } from "../../e2e/support/constants";

const pages = [...getMainPageUrls(""), ...getExtraPageUrls()];

for (const { path, locale, name } of pages) {
  test(`${locale} ${name} page renders its header, main content, and footer`, async ({ app, browser }) => {
    await app.open(path);
    await expect(browser.locator("header").first()).toBeVisible();
    await expect(browser.locator("main").first()).toBeVisible();
    await expect(browser.locator("footer").first()).toBeVisible();

    const bounds = await browser.evaluate(() => {
      const main = document.querySelector("main")!.getBoundingClientRect();
      return { width: main.width, height: main.height };
    });
    expect(bounds.width).toBeGreaterThan(200);
    expect(bounds.height).toBeGreaterThan(100);
  });
}

for (const path of ["/en/blog/page/2/", "/zh-cn/blog/page/2/"]) {
  test(`${path} keeps the shared page layout`, async ({ app, browser }) => {
    await app.open(path);
    await expect(browser.locator("header").first()).toBeVisible();
    await expect(browser.locator("main").first()).toBeVisible();
    await expect(browser.locator("footer").first()).toBeVisible();
  });
}

for (const path of ["/en/series/", "/zh-cn/tags/"]) {
  test(`${path} child page keeps the shared layout`, async ({ app, browser }) => {
    await app.open(path);
    const childLink = browser.locator(`main a[href*='${path}']`).first();
    await expect(childLink).toBeVisible();
    await childLink.click();
    await expect(browser.locator("header").first()).toBeVisible();
    await expect(browser.locator("main").first()).toBeVisible();
    await expect(browser.locator("footer").first()).toBeVisible();
  });
}

for (const locale of ["en", "zh-cn"] as const) {
  test(`${locale} article detail has a readable title and body`, async ({ app, browser }) => {
    await app.open(`/${locale}/blog/`);
    const firstArticle = browser.locator(`main a[href*='/${locale}/blog/']`).first();
    await expect(firstArticle).toBeVisible();
    await firstArticle.click();
    await expect(browser.locator("article").first()).toBeVisible();
    await expect(browser.locator("main").first()).toBeVisible();
    await expect(browser.locator("article h1").first()).toBeVisible();
  });
}

test("Chinese footer remains divided into its five content groups", async ({ app, browser }) => {
  await app.open("/zh-cn/");
  await expect(browser.locator("footer [data-footer-group]")).toHaveCount(5);
  await expect(browser.locator("footer [data-footer-group='explore']")).toContainText("探索");
  await expect(browser.locator("footer [data-footer-group='knowledge']")).toContainText("知识库");
  await expect(browser.locator("footer [data-footer-group='tools']")).toContainText("工具与学习");
  await expect(browser.locator("footer [data-footer-group='site']")).toContainText("站点");
  await expect(browser.locator("footer [data-footer-group='products']")).toContainText("产品官网");
});
