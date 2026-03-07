import { expect, test, type Locator } from "@playwright/test";

type Sample = {
  name: string;
  path: string;
  selectors: string[];
  textSelectors: string[];
};

const samples: Sample[] = [
  {
    name: "home",
    path: "/zh-cn/",
    selectors: [".cta-button", ".prompts-type-card", ".project-card"],
    textSelectors: [".intro-card", ".prompts-type-desc", ".project-desc"],
  },
  {
    name: "wiki-index",
    path: "/zh-cn/wiki/",
    selectors: [".wiki-search-input", ".wiki-letter-index-link", ".wiki-letter-link"],
    textSelectors: [".wiki-letter-title", ".wiki-letter-link", ".wiki-search-input"],
  },
  {
    name: "aiwiki-index",
    path: "/zh-cn/AIWiki/",
    selectors: [".wiki-search-input", ".wiki-letter-index-link", ".wiki-letter-link"],
    textSelectors: [".wiki-letter-title", ".wiki-letter-link", ".wiki-search-input"],
  },
  {
    name: "blog-detail",
    path: "/zh-cn/blog/ai-testing/introduction_of_awesome_qa_prompt/",
    selectors: [".tag", ".blog-related-terms-pill", ".article-share a"],
    textSelectors: [".prose p", ".blog-related-terms-pill", ".article-meta"],
  },
];

async function getBoxMetrics(locator: Locator) {
  return locator.evaluate((el) => {
    const target = el as HTMLElement;
    const rect = target.getBoundingClientRect();
    return {
      width: rect.width,
      height: rect.height,
      visible: rect.width > 0 && rect.height > 0,
    };
  });
}

async function getFontSize(locator: Locator) {
  return locator.evaluate((el) => Number.parseFloat(window.getComputedStyle(el as Element).fontSize));
}

test.describe("可访问性硬指标", () => {
  test("根字号不低于 16px", async ({ page }) => {
    await page.goto("/zh-cn/", { waitUntil: "domcontentloaded" });
    const rootFontSize = await page.evaluate(() =>
      Number.parseFloat(window.getComputedStyle(document.documentElement).fontSize)
    );
    expect(rootFontSize).toBeGreaterThanOrEqual(16);
  });

  for (const sample of samples) {
    test(`${sample.name} 关键交互区域满足最小触控面积`, async ({ page }) => {
      await page.goto(sample.path, { waitUntil: "networkidle" });

      for (const selector of sample.selectors) {
        const locator = page.locator(selector).first();
        await expect(locator, `${sample.name} missing selector ${selector}`).toBeVisible();
        const { width, height, visible } = await getBoxMetrics(locator);
        expect(visible).toBeTruthy();
        expect(width, `${sample.name} ${selector} width`).toBeGreaterThanOrEqual(44);
        expect(height, `${sample.name} ${selector} height`).toBeGreaterThanOrEqual(44);
      }
    });

    test(`${sample.name} 正文与辅助文本字号不低于 14px`, async ({ page }) => {
      await page.goto(sample.path, { waitUntil: "networkidle" });

      for (const selector of sample.textSelectors) {
        const locator = page.locator(selector).first();
        await expect(locator, `${sample.name} missing text selector ${selector}`).toBeVisible();
        const fontSize = await getFontSize(locator);
        expect(fontSize, `${sample.name} ${selector} font-size`).toBeGreaterThanOrEqual(14);
      }
    });
  }
});
