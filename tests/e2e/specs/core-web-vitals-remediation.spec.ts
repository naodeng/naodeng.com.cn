import { expect, test } from "@playwright/test";

const LOCALES = ["en", "zh-cn"] as const;
const ARTICLE_SLUG = "ai-testing/dsh-qa-test-project-full-lifecycle";

test.describe("Core Web Vitals remediation contracts", () => {
  for (const locale of LOCALES) {
    test(`${locale} blog detail omits cover presentation and request`, async ({ page, baseURL }) => {
      const requests: string[] = [];
      page.on("request", (request) => requests.push(request.url()));

      await page.goto(`${baseURL || ""}/${locale}/blog/${ARTICLE_SLUG}/`, {
        waitUntil: "domcontentloaded",
      });
      await page.waitForLoadState("load");

      await expect(page.locator(".cover-wrap, .cover-bg, .cover-overlay")).toHaveCount(0);
      expect(requests.some((url) => /\/default\.jpg(?:$|\?)/.test(url))).toBe(false);
    });

    test(`${locale} dsh-qa article uses a sized eager local WebP`, async ({ page, baseURL }) => {
      await page.goto(`${baseURL || ""}/${locale}/blog/${ARTICLE_SLUG}/`, {
        waitUntil: "domcontentloaded",
      });

      const image = page.locator("img.article-content-image");
      await expect(image).toHaveCount(1);
      await expect(image).toHaveAttribute("src", "/images/dsh-qa-v1.webp");
      await expect(image).toHaveAttribute("width", "1600");
      await expect(image).toHaveAttribute("height", "979");
      await expect(image).toHaveAttribute("loading", "eager");
      await expect(image).toHaveAttribute("fetchpriority", "high");
      await expect(image).toHaveAttribute("decoding", "async");
    });
  }

  test("blog pagination omits cover cards", async ({ page, baseURL }) => {
    await page.goto(`${baseURL || ""}/en/blog/page/2/`, {
      waitUntil: "domcontentloaded",
    });
    await expect(page.locator(".post-cover, .post-cover-bg, .post-cover-overlay")).toHaveCount(0);
  });

  test("built stylesheet URLs do not contain raw at-signs", async ({ page, baseURL }) => {
    await page.goto(`${baseURL || ""}/en/blog/${ARTICLE_SLUG}/`, {
      waitUntil: "domcontentloaded",
    });
    const hrefs = await page.locator('link[rel="stylesheet"]').evaluateAll((nodes) =>
      nodes
        .map((node) => node.getAttribute("href") || "")
        .filter((href) => href.includes("/_astro/")),
    );
    expect(hrefs.every((href) => !href.includes("@"))).toBe(true);
  });

  test("desktop navigation has stable font and geometry contracts", async ({ page, baseURL }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto(`${baseURL || ""}/zh-cn/`, { waitUntil: "domcontentloaded" });

    const state = await page.locator("#site-primary-nav").evaluate((node) => {
      const nav = node.getBoundingClientRect();
      const icon = node
        .querySelector("li:not(.mobile-priority-nav) .material-icons-sharp")
        ?.getBoundingClientRect();
      const style = getComputedStyle(node);
      return {
        height: nav.height,
        minHeight: style.minHeight,
        fontFamily: style.fontFamily,
        iconWidth: icon?.width,
        iconHeight: icon?.height,
      };
    });

    expect(state.minHeight).toBe("80px");
    expect(state.fontFamily).toMatch(/^system-ui/);
    expect(state.height).toBeGreaterThanOrEqual(80);
    expect(state.iconWidth).toBe(21);
    expect(state.iconHeight).toBe(21);
  });
});
