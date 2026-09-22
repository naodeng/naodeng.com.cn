import { test, expect } from "@playwright/test";
import { getDocsPageUrls } from "../support/constants";

test.describe("文档页（Docs）", () => {
  const docsPages = getDocsPageUrls();

  for (const locale of ["en", "zh-cn"]) {
    test(`${locale} 文档根路径返回 404`, async ({ page, baseURL }) => {
      const response = await page.goto((baseURL || "") + `/${locale}/docs/`, { waitUntil: "domcontentloaded" });
      expect(response?.status()).toBe(404);
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
    });
  }

  for (const { locale, path, name } of docsPages) {
    test(`${locale} ${name} ${path} 可正常访问`, async ({ page }) => {
      const response = await page.goto(path, { waitUntil: "domcontentloaded" });
      expect(response?.status()).toBe(200);
    });
  }

  test("en 文档子页 why-astro：侧栏、正文区、h1 可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/docs/why-astro/", { waitUntil: "domcontentloaded" });
    await expect(page.locator(".docs-sidebar").first()).toBeVisible();
    await expect(page.locator(".docs-content").first()).toBeVisible();
    await expect(page.locator(".docs-content h1").first()).toBeVisible();
    await expect(page.getByText("Why Astro", { exact: true }).first()).toBeVisible();
  });

  test("zh-cn 文档子页 why-astro：侧栏、正文区、h1 可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/docs/why-astro/", { waitUntil: "domcontentloaded" });
    await expect(page.locator(".docs-sidebar").first()).toBeVisible();
    await expect(page.locator(".docs-content").first()).toBeVisible();
    await expect(page.locator(".docs-content h1").first()).toBeVisible();
    await expect(page.getByText("为什么选择 Astro？", { exact: true }).first()).toBeVisible();
  });

  for (const locale of ["en", "zh-cn"]) {
    test(`${locale} 文档子页不暴露已屏蔽的根路径链接`, async ({ page, baseURL }) => {
      await page.goto((baseURL || "") + `/${locale}/docs/why-astro/`, { waitUntil: "domcontentloaded" });
      await expect(page.locator(`a[href="/${locale}/docs/"]`)).toHaveCount(0);
    });
  }

  test("en 文档子页侧栏当前项有 active 样式", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/docs/configuration/", { waitUntil: "domcontentloaded" });
    const activeLink = page.locator(".docs-sidebar-link--active").first();
    await expect(activeLink).toBeVisible();
    await expect(activeLink).toHaveAttribute("aria-current", "page");
  });

  test("zh-cn 文档子页侧栏当前项有 active 样式", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/docs/configuration/", { waitUntil: "domcontentloaded" });
    const activeLink = page.locator(".docs-sidebar-link--active").first();
    await expect(activeLink).toBeVisible();
    await expect(activeLink).toHaveAttribute("aria-current", "page");
  });

  test("en 文档子页：头部、主体、底部可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/docs/why-astro/", { waitUntil: "domcontentloaded" });
    await expect(page.locator("header").first()).toBeVisible();
    await expect(page.locator("main").first()).toBeVisible();
    await expect(page.locator("footer").first()).toBeVisible();
  });

  test("zh-cn 文档子页：头部、主体、底部可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/docs/why-astro/", { waitUntil: "domcontentloaded" });
    await expect(page.locator("header").first()).toBeVisible();
    await expect(page.locator("main").first()).toBeVisible();
    await expect(page.locator("footer").first()).toBeVisible();
  });
});
