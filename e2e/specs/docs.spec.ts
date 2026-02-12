import { test, expect } from "@playwright/test";
import { getDocsPageUrls } from "../support/constants";

test.describe("文档页（Docs）", () => {
  const docsPages = getDocsPageUrls();

  for (const { locale, path, name } of docsPages) {
    test(`${locale} ${name} ${path} 可正常访问`, async ({ page }) => {
      const response = await page.goto(path, { waitUntil: "domcontentloaded" });
      expect(response?.status()).toBe(200);
    });
  }

  test("en 文档首页：侧栏、主内容区、面包屑可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/docs/", { waitUntil: "networkidle" });
    await expect(page.locator(".docs-sidebar").first()).toBeVisible();
    await expect(page.locator(".docs-content").first()).toBeVisible();
    await expect(page.locator("nav.breadcrumb").first()).toBeVisible();
    await expect(page.locator("main")).toBeVisible();
  });

  test("zh-cn 文档首页：侧栏、主内容区、面包屑可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/docs/", { waitUntil: "networkidle" });
    await expect(page.locator(".docs-sidebar").first()).toBeVisible();
    await expect(page.locator(".docs-content").first()).toBeVisible();
    await expect(page.locator("nav.breadcrumb").first()).toBeVisible();
    await expect(page.locator("main")).toBeVisible();
  });

  test("en 文档子页 why-astro：侧栏、正文区、h1 可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/docs/why-astro/", { waitUntil: "networkidle" });
    await expect(page.locator(".docs-sidebar").first()).toBeVisible();
    await expect(page.locator(".docs-content").first()).toBeVisible();
    await expect(page.locator(".docs-content h1").first()).toBeVisible();
    await expect(page.getByText("Why Astro", { exact: true }).first()).toBeVisible();
  });

  test("zh-cn 文档子页 why-astro：侧栏、正文区、h1 可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/docs/why-astro/", { waitUntil: "networkidle" });
    await expect(page.locator(".docs-sidebar").first()).toBeVisible();
    await expect(page.locator(".docs-content").first()).toBeVisible();
    await expect(page.locator(".docs-content h1").first()).toBeVisible();
    await expect(page.getByText("为什么选择 Astro？", { exact: true }).first()).toBeVisible();
  });

  test("en 从文档首页点击侧栏「Why Astro?」进入子页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/docs/", { waitUntil: "networkidle" });
    await page.locator(".docs-sidebar a[href*='/en/docs/why-astro']").first().click();
    await expect(page).toHaveURL(/\/en\/docs\/why-astro\/?/);
    await expect(page.locator(".docs-content")).toBeVisible();
  });

  test("zh-cn 从文档首页点击侧栏「为什么选择 Astro？」进入子页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/docs/", { waitUntil: "networkidle" });
    await page.locator(".docs-sidebar a[href*='/zh-cn/docs/why-astro']").first().click();
    await expect(page).toHaveURL(/\/zh-cn\/docs\/why-astro\/?/);
    await expect(page.locator(".docs-content")).toBeVisible();
  });

  test("en 文档子页侧栏当前项有 active 样式", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/docs/configuration/", { waitUntil: "networkidle" });
    const activeLink = page.locator(".docs-sidebar-link--active").first();
    await expect(activeLink).toBeVisible();
    await expect(activeLink).toHaveAttribute("aria-current", "page");
  });

  test("zh-cn 文档子页侧栏当前项有 active 样式", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/docs/configuration/", { waitUntil: "networkidle" });
    const activeLink = page.locator(".docs-sidebar-link--active").first();
    await expect(activeLink).toBeVisible();
    await expect(activeLink).toHaveAttribute("aria-current", "page");
  });

  test("en 文档页：头部、主体、底部可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/docs/", { waitUntil: "networkidle" });
    await expect(page.locator("header").first()).toBeVisible();
    await expect(page.locator("main").first()).toBeVisible();
    await expect(page.locator("footer").first()).toBeVisible();
  });

  test("zh-cn 文档页：头部、主体、底部可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/docs/", { waitUntil: "networkidle" });
    await expect(page.locator("header").first()).toBeVisible();
    await expect(page.locator("main").first()).toBeVisible();
    await expect(page.locator("footer").first()).toBeVisible();
  });
});
