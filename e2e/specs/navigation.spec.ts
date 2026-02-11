import { test, expect } from "@playwright/test";

test.describe("导航与首页内容", () => {
  test("en 首页：简介区、项目展示、标签云、最新文章区可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    await expect(page.locator("main .intro-section").first()).toBeVisible();
    await expect(page.locator("main .projects-showcase").first()).toBeVisible();
    await expect(page.locator("main .tags-cloud").first()).toBeVisible();
    await expect(page.locator("main .latest").first()).toBeVisible();
  });

  test("zh-cn 首页：简介区、项目展示、标签云、最新文章区可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    await expect(page.locator("main .intro-section").first()).toBeVisible();
    await expect(page.locator("main .projects-showcase").first()).toBeVisible();
    await expect(page.locator("main .tags-cloud").first()).toBeVisible();
    await expect(page.locator("main .latest").first()).toBeVisible();
  });

  test("en 从首页点击「博客」进入博客列表", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    await page.locator("header a[href*='/en/blog'], header nav a[href*='/blog']").first().click();
    await expect(page).toHaveURL(/\/(en)\/blog\/?/);
    await expect(page.locator("main")).toBeVisible();
  });

  test("zh-cn 从首页点击「博客」进入博客列表", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    await page.locator("header a[href*='/zh-cn/blog'], header nav a[href*='/blog']").first().click();
    await expect(page).toHaveURL(/\/(zh-cn)\/blog\/?/);
    await expect(page.locator("main")).toBeVisible();
  });

  test("en 从首页点击「归档」进入归档页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    await page.locator("header a[href*='/en/archive'], header nav a[href*='/archive']").first().click();
    await expect(page).toHaveURL(/\/(en)\/archive\/?/);
    await expect(page.locator("main")).toBeVisible();
  });

  test("zh-cn 从首页点击「归档」进入归档页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    await page.locator("header a[href*='/zh-cn/archive'], header nav a[href*='/archive']").first().click();
    await expect(page).toHaveURL(/\/(zh-cn)\/archive\/?/);
    await expect(page.locator("main")).toBeVisible();
  });

  test("en 从首页点击「关于」进入关于页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    await page.locator("header a[href*='/en/about'], header nav a[href*='/about']").first().click();
    await expect(page).toHaveURL(/\/(en)\/about\/?/);
    await expect(page.locator("main")).toBeVisible();
  });

  test("zh-cn 从首页点击「关于」进入关于页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    await page.locator("header a[href*='/zh-cn/about'], header nav a[href*='/about']").first().click();
    await expect(page).toHaveURL(/\/(zh-cn)\/about\/?/);
    await expect(page.locator("main")).toBeVisible();
  });

  test("en 博客列表页：文章卡片可点击进入详情", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/blog/", { waitUntil: "networkidle" });
    const firstLink = page.locator("main a[href*='/en/blog/']").first();
    await expect(firstLink).toBeVisible({ timeout: 10000 });
    await firstLink.click();
    await expect(page).toHaveURL(/\/en\/blog\/.+\/$/);
    await expect(page.locator("article").first()).toBeVisible();
  });

  test("zh-cn 博客列表页：文章卡片可点击进入详情", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/blog/", { waitUntil: "networkidle" });
    const firstLink = page.locator("main a[href*='/zh-cn/blog/']").first();
    await expect(firstLink).toBeVisible({ timeout: 10000 });
    await firstLink.click();
    await expect(page).toHaveURL(/\/zh-cn\/blog\/.+\/$/);
    await expect(page.locator("article").first()).toBeVisible();
  });
});
