import { expect, test } from "@playwright/test";

test("Chinese footer exposes the official-account QR code and RSS without overflow", async ({ page, baseURL }) => {
  await page.setViewportSize({ width: 375, height: 844 });
  await page.goto(`${baseURL || ""}/zh-cn/`, { waitUntil: "domcontentloaded" });
  await expect(page.locator(".footer-subscribe img")).toHaveAttribute("src", "/brand/software-testing-students-wechat-qr.jpg");
  await expect(page.locator(".footer-subscribe a[href*='/zh-cn/rss.xml']")).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});

test("English footer keeps navigation and social destinations visible", async ({ page, baseURL }) => {
  await page.goto(`${baseURL || ""}/en/`, { waitUntil: "domcontentloaded" });
  await expect(page.locator("footer [data-footer-group]")).toHaveCount(4);
  await expect(page.locator("footer a[href='https://github.com/naodeng']")).toBeVisible();
});
