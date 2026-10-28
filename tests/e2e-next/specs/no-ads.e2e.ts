import { test } from "@e2e-dev/web";
import { expect } from "e2e";

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
  "/zh-cn/AIWiki/ai-agent/",
  "/zh-cn/wiki/",
  "/zh-cn/AIWiki/",
  "/zh-cn/guild/",
  "/zh-cn/prompts/",
  "/zh-cn/qaskills/",
] as const;

for (const path of routes) {
  test(`${path} renders without ad markup, scripts, or ad requests`, async ({ app, browser }) => {
    const adRequests: string[] = [];
    await browser.route(AD_REQUEST_PATTERN, async (route) => {
      adRequests.push(route.request.url);
      await route.continue();
    });
    await app.open(path);

    await expect(browser.locator(AD_MARKUP_SELECTOR)).toHaveCount(0);
    await expect(browser.locator('script[src*="googlesyndication"], script[src*="adsbygoogle"], script[src*="doubleclick"]')).toHaveCount(0);
    expect(adRequests).toEqual([]);
  });
}
