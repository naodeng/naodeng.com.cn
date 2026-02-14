import { test, expect } from "@playwright/test";
import { getWikiPageUrls } from "../support/constants";

test.describe("百科（Wiki）", () => {
  const wikiPages = getWikiPageUrls();

  for (const { locale, path, name } of wikiPages) {
    test(`${locale} ${name} ${path} 可正常访问`, async ({ page }) => {
      const response = await page.goto(path, { waitUntil: "domcontentloaded" });
      expect(response?.status()).toBe(200);
    });
  }

  test("zh-cn 百科首页：侧栏、主内容区、面包屑、标题可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/wiki/", { waitUntil: "networkidle" });
    await expect(page.locator(".docs-sidebar").first()).toBeVisible();
    await expect(page.locator(".docs-content").first()).toBeVisible();
    await expect(page.locator("nav.breadcrumb").first()).toBeVisible();
    await expect(page.getByRole("heading", { name: "测试百科", level: 1 }).first()).toBeVisible();
    await expect(page.locator("main")).toBeVisible();
  });

  test("zh-cn 百科首页：汇总介绍、按字母浏览区可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/wiki/", { waitUntil: "networkidle" });
    await expect(page.getByRole("heading", { name: "汇总介绍" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "按字母浏览" })).toBeVisible();
  });

  test("en 百科首页：标题与 ray.run 外链可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/wiki/", { waitUntil: "networkidle" });
    await expect(page.getByRole("heading", { name: "QA Wiki", level: 1 }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "ray.run/wiki" }).first()).toBeVisible();
  });

  test("zh-cn 百科词条页 acceptance-testing：侧栏、正文、h1 可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/wiki/acceptance-testing/", { waitUntil: "networkidle" });
    await expect(page.locator(".docs-sidebar").first()).toBeVisible();
    await expect(page.locator(".docs-content").first()).toBeVisible();
    await expect(page.locator(".docs-content h1").first()).toBeVisible();
    await expect(page.getByText(/验收测试/).first()).toBeVisible();
  });

  test("zh-cn 百科词条页 manual-testing：侧栏、正文、标题可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/wiki/manual-testing/", { waitUntil: "networkidle" });
    await expect(page.locator(".docs-sidebar").first()).toBeVisible();
    await expect(page.locator(".docs-content").first()).toBeVisible();
    await expect(page.locator(".docs-content h1").first()).toBeVisible();
  });

  test("zh-cn 从百科首页点击侧栏「概述」仍在百科首页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/wiki/", { waitUntil: "networkidle" });
    await page.locator(".docs-sidebar a[href*='/zh-cn/wiki']").first().click();
    await expect(page).toHaveURL(/\/zh-cn\/wiki\/?$/);
  });

  test("zh-cn 从百科首页点击侧栏词条进入词条页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/wiki/", { waitUntil: "networkidle" });
    const entryLink = page.locator(".docs-sidebar a[href*='/zh-cn/wiki/acceptance-testing']").first();
    await expect(entryLink).toBeVisible({ timeout: 10000 });
    await entryLink.click();
    await expect(page).toHaveURL(/\/zh-cn\/wiki\/acceptance-testing\/?/);
    await expect(page.locator(".docs-content")).toBeVisible();
  });

  test("zh-cn 百科词条页侧栏当前项有 active 样式", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/wiki/acceptance-testing/", { waitUntil: "networkidle" });
    const activeLink = page.locator(".docs-sidebar-link--active").first();
    await expect(activeLink).toBeVisible();
    await expect(activeLink).toHaveAttribute("aria-current", "page");
  });

  test("zh-cn 百科页：头部、主体、底部可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/wiki/", { waitUntil: "networkidle" });
    await expect(page.locator("header").first()).toBeVisible();
    await expect(page.locator("main").first()).toBeVisible();
    await expect(page.locator("footer").first()).toBeVisible();
  });
});
