import { expect, test } from "@playwright/test";

test("blog list and detail retain editorial width and existing links", async ({ page, baseURL }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${baseURL || ""}/en/blog/`, { waitUntil: "domcontentloaded" });
  const firstPost = page.locator("main a[href*='/en/blog/']").first();
  await expect(firstPost).toBeVisible();
  const href = await firstPost.getAttribute("href");
  expect(href).toBeTruthy();
  await page.goto(`${baseURL || ""}${href}`, { waitUntil: "domcontentloaded" });
  const width = await page.locator(".article-body").evaluate((node) => node.getBoundingClientRect().width);
  expect(width).toBeLessThanOrEqual(768);
});
