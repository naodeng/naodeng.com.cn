import { test } from "@e2e-dev/web";
import { expect } from "e2e";

test("English Wiki article keeps its local source, Chinese pairing, and answer hierarchy", async ({ app, browser, screen }) => {
  await app.open("/en/wiki/acceptance-testing/");

  await expect(screen.getByRole("heading", { name: "Acceptance Testing", level: 1 })).toBeVisible();
  await expect(browser.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://inaodeng.com/en/wiki/acceptance-testing/",
  );
  await expect(browser.locator('link[hreflang="zh-CN"]')).toHaveAttribute(
    "href",
    "https://inaodeng.com/zh-cn/wiki/acceptance-testing/",
  );
  await expect(browser.locator(".docs-content article")).toContainText("potential end-users or customers");
  await expect(browser.locator(".giscus-section script[data-lang='en']")).toHaveCount(1);

  await app.open("/zh-cn/wiki/acceptance-testing/");
  await expect(screen.getByRole("heading", { name: /验收测试/, level: 1 })).toBeVisible();
  await expect(browser.locator(".docs-content article")).toContainText("潜在的最终用户或客户");
});

test("Wiki question headings stay in the article and table of contents", async ({ app, browser, screen }) => {
  const cases = [
    {
      path: "/en/wiki/acceptance-testing/",
      section: "Questions about Acceptance Testing?",
      category: "Basics and Importance",
      question: "What is acceptance testing?",
    },
    {
      path: "/zh-cn/wiki/acceptance-testing/",
      section: "关于验收测试的问题",
      category: "基础知识和重要性",
      question: "什么是验收测试？",
    },
  ];

  for (const item of cases) {
    await app.open(item.path);
    await expect(screen.getByRole("heading", { name: item.section, level: 2 })).toBeVisible();
    await expect(screen.getByRole("heading", { name: item.category, level: 3 })).toBeVisible();
    await expect(browser.locator(".docs-content h4").filter({ hasText: item.question })).toBeVisible();
    await expect(browser.locator(".toc-list--desktop .toc-link").filter({ hasText: item.category })).toBeVisible();
    await expect(browser.locator(".docs-content").getByRole("heading", { name: /Related Terms|相关术语/, exact: false })).toHaveCount(0);
  }
});

test("Wiki code examples remain code and the language switch opens the paired term", async ({ app, browser, screen }) => {
  await app.open("/en/wiki/inspection/");
  await expect(screen.getByRole("heading", { name: "Inspection Report" })).toHaveCount(0);
  await expect(browser.locator(".docs-content pre").filter({ hasText: "## Inspection Report" })).toHaveCount(1);

  await app.open("/en/wiki/acceptance-testing/");
  await browser.locator("[data-locale-trigger]").first().click();
  await browser.locator('[data-locale-option][data-lang="zh-cn"]').first().click();
  await expect(browser).toHaveURL(/\/zh-cn\/wiki\/acceptance-testing\/?$/);
  await expect(screen.getByRole("heading", { name: /验收测试/, level: 1 })).toBeVisible();
});
