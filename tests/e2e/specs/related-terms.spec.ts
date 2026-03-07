import { test, expect } from "@playwright/test";

test.describe("相关词条与相关推荐", () => {
  test("zh-cn wiki 详情页：相关词条可点击跳转", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/wiki/acceptance-testing/", { waitUntil: "networkidle" });

    const firstPill = page.locator(".wiki-related-pill").first();
    await expect(firstPill).toBeVisible({ timeout: 10000 });

    const href = await firstPill.getAttribute("href");
    expect(href).toBeTruthy();

    await firstPill.click();
    await expect(page).toHaveURL(new RegExp("/zh-cn/wiki/.+/"));
  });

  test("zh-cn aiwiki 详情页：相关词条可点击跳转", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/AIWiki/codex/", { waitUntil: "networkidle" });

    const firstPill = page.locator(".aiwiki-related-pill").first();
    await expect(firstPill).toBeVisible({ timeout: 10000 });

    const href = await firstPill.getAttribute("href");
    expect(href).toBeTruthy();

    await firstPill.click();
    await expect(page).toHaveURL(new RegExp("/zh-cn/AIWiki/.+/"));
  });

  test("zh-cn blog 详情页：相关文章标签可点击跳转", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/blog/", { waitUntil: "networkidle" });

    const firstPost = page
      .locator("main a[href^='/zh-cn/blog/']")
      .filter({ hasNotText: "page" })
      .first();
    await expect(firstPost).toBeVisible({ timeout: 10000 });
    await firstPost.click();

    const firstPill = page.locator(".blog-related-terms-pill").first();
    await expect(firstPill).toBeVisible({ timeout: 10000 });

    const href = await firstPill.getAttribute("href");
    expect(href).toBeTruthy();

    await firstPill.click();
    await expect(page).toHaveURL(/\/zh-cn\/(wiki|AIWiki|guild|tags|series)\//);
  });

  test("zh-cn guild 详情页：相关词条可点击跳转", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/api-testing/postman/", { waitUntil: "networkidle" });

    const firstArticle = page
      .locator("main a[href^='/zh-cn/guild/api-testing/postman/']")
      .filter({ hasNotText: "learning-path" })
      .first();
    await expect(firstArticle).toBeVisible({ timeout: 10000 });
    await firstArticle.click();

    const firstPill = page.locator(".guild-related-terms-pill").first();
    await expect(firstPill).toBeVisible({ timeout: 10000 });

    const href = await firstPill.getAttribute("href");
    expect(href).toBeTruthy();

    await firstPill.click();
    await expect(page).toHaveURL(new RegExp("/zh-cn/(wiki|AIWiki|guild|blog)/"));
  });
});
