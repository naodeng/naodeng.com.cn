import { test, expect } from "@playwright/test";

const AD_SELECTOR = ".ad-wrap, .ad-thin-wrap, .home-ad-wrap, ins.adsbygoogle";

test.describe("广告低干扰专项检查", () => {
  test("列表页：首屏广告密度每屏不超过 1", async ({ page, baseURL }) => {
    const routes = ["/en/blog/", "/zh-cn/wiki/", "/zh-cn/AIWiki/", "/zh-cn/"];
    const viewports = [
      { width: 390, height: 844 },
      { width: 1440, height: 900 },
    ];

    for (const vp of viewports) {
      await page.setViewportSize(vp);
      for (const route of routes) {
        await page.goto((baseURL || "") + route, { waitUntil: "networkidle" });
        const visibleInViewport = await page.evaluate(({ selector, viewportHeight }) => {
          const nodes = Array.from(document.querySelectorAll(selector));
          return nodes.filter((node) => {
            const rect = (node as HTMLElement).getBoundingClientRect();
            return rect.bottom > 0 && rect.top < viewportHeight && rect.width > 0;
          }).length;
        }, { selector: AD_SELECTOR, viewportHeight: vp.height });

        expect(
          visibleInViewport,
          `route=${route}, viewport=${vp.width}x${vp.height}, visibleAds=${visibleInViewport}`
        ).toBeLessThanOrEqual(1);
      }
    }
  });

  test("详情页：广告不插入 H1 与首段正文之间", async ({ page, baseURL }) => {
    const routes = ["/zh-cn/wiki/acceptance-testing/", "/zh-cn/blog/ai-testing/introduction_of_awesome_qa_prompt/"];

    for (const route of routes) {
      await page.goto((baseURL || "") + route, { waitUntil: "networkidle" });
      const isBetween = await page.evaluate((selector) => {
        const h1 = document.querySelector("main h1");
        const firstParagraph = document.querySelector("main article p, main .prose p, main p");
        if (!h1 || !firstParagraph) return false;

        const adNodes = Array.from(document.querySelectorAll(selector));
        return adNodes.some((ad) => {
          const afterH1 = !!(h1.compareDocumentPosition(ad) & Node.DOCUMENT_POSITION_FOLLOWING);
          const beforeFirstP = !!(ad.compareDocumentPosition(firstParagraph) & Node.DOCUMENT_POSITION_FOLLOWING);
          return afterH1 && beforeFirstP;
        });
      }, AD_SELECTOR);

      expect(isBetween, `route=${route}`).toBeFalsy();
    }
  });

  test("详情页：CLS 累积值不超过 0.1", async ({ page, baseURL }) => {
    const routes = ["/zh-cn/wiki/acceptance-testing/", "/zh-cn/AIWiki/codex/"];

    for (const route of routes) {
      await page.goto((baseURL || "") + route, { waitUntil: "domcontentloaded" });
      await page.waitForTimeout(3000);
      const cls = await page.evaluate(() => {
        let clsValue = 0;
        const entries = performance.getEntriesByType("layout-shift") as PerformanceEntry[];
        for (const entry of entries as Array<PerformanceEntry & { hadRecentInput?: boolean; value?: number }>) {
          if (!entry.hadRecentInput) clsValue += entry.value ?? 0;
        }
        return clsValue;
      });

      expect(cls, `route=${route}, cls=${cls}`).toBeLessThanOrEqual(0.1);
    }
  });
});
