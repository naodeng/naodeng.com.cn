import { test, expect } from "@playwright/test";

const AD_WRAPPER_SELECTOR = ".ad-wrap, .ad-thin-wrap, .home-ad-wrap";
const AD_INNER_SELECTOR = "ins.adsbygoogle";

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
        const visibleInViewport = await page.evaluate(({ wrapperSelector, innerSelector, viewportHeight }) => {
          const wrappers = Array.from(document.querySelectorAll(wrapperSelector));
          const visibleWrappers = wrappers.filter((node) => {
            const rect = (node as HTMLElement).getBoundingClientRect();
            return rect.bottom > 0 && rect.top < viewportHeight && rect.width > 0;
          });

          // 避免重复统计：优先统计外层广告容器；仅把不在容器内的裸 ins 作为补充。
          const extraInners = Array.from(document.querySelectorAll(innerSelector)).filter((node) => {
            const rect = (node as HTMLElement).getBoundingClientRect();
            if (!(rect.bottom > 0 && rect.top < viewportHeight && rect.width > 0)) return false;
            return !node.closest(wrapperSelector);
          });

          return visibleWrappers.length + extraInners.length;
        }, { wrapperSelector: AD_WRAPPER_SELECTOR, innerSelector: AD_INNER_SELECTOR, viewportHeight: vp.height });

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
      }, `${AD_WRAPPER_SELECTOR}, ${AD_INNER_SELECTOR}`);

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
