import { test, expect } from "@playwright/test";

const AD_REQUEST_PATTERN = /pagead|googlesyndication|adsbygoogle|doubleclick\.net/i;
const AD_MARKUP_SELECTOR = [
  "ins.adsbygoogle",
  "[data-ad-collapse]",
  ".ad-slot-250",
  ".ad-thin-wrap",
  ".sidebar-ad",
  ".footer-ad",
].join(", ");

const routes = [
  "/en/",
  "/zh-cn/",
  "/en/blog/",
  "/zh-cn/docs/installation/",
  "/zh-cn/wiki/",
  "/zh-cn/AIWiki/",
  "/zh-cn/guild/",
  "/zh-cn/prompts/",
  "/zh-cn/qaskills/",
];

test.describe("广告移除", () => {
  for (const route of routes) {
    test(`${route} 不渲染广告位或 AdSense 请求`, async ({ page, baseURL }) => {
      const adRequests: string[] = [];
      page.on("request", (request) => {
        if (AD_REQUEST_PATTERN.test(request.url())) adRequests.push(request.url());
      });

      await page.goto((baseURL || "") + route, { waitUntil: "domcontentloaded" });

      await expect(page.locator(AD_MARKUP_SELECTOR), `route=${route}`).toHaveCount(0);
      await expect(
        page.locator('script[src*="googlesyndication"], script[src*="adsbygoogle"], script[src*="doubleclick"]'),
        `route=${route}`,
      ).toHaveCount(0);
      expect(adRequests, `route=${route}`).toEqual([]);
    });
  }
});
