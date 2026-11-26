import { test } from "@e2e-dev/web";
import { expect } from "e2e";

type Sample = {
  name: string;
  path: string;
  targets: string[];
  text: string[];
};

const samples: Sample[] = [
  {
    name: "home",
    path: "/zh-cn/",
    targets: [".pill-cta", ".home-card", ".home-explore-grid .home-card"],
    text: [".home-hero__subtitle", ".home-card__desc", ".home-band__subtitle"],
  },
  {
    name: "wiki-index",
    path: "/zh-cn/wiki/",
    targets: [".wiki-search-input", ".wiki-letter-index-link", ".wiki-letter-link"],
    text: [".wiki-letter-title", ".wiki-letter-link", ".wiki-search-input"],
  },
  {
    name: "aiwiki-index",
    path: "/zh-cn/AIWiki/",
    targets: [".wiki-search-input", ".wiki-letter-index-link", ".wiki-letter-link"],
    text: [".wiki-letter-title", ".wiki-letter-link", ".wiki-search-input"],
  },
  {
    name: "blog-detail",
    path: "/zh-cn/blog/ai-testing/introduction_of_awesome_qa_prompt/",
    targets: [".tag", ".blog-related-terms-pill", ".article-share a"],
    text: [".prose p", ".blog-related-terms-pill", ".article-meta"],
  },
];

test("root text size remains readable", async ({ app, browser }) => {
  await app.open("/zh-cn/");
  const rootFontSize = await browser.evaluate(() => Number.parseFloat(getComputedStyle(document.documentElement).fontSize));
  expect(rootFontSize).toBeGreaterThanOrEqual(16);
});

for (const sample of samples) {
  test(`${sample.name} interactive targets meet the 44px touch target`, async ({ app, browser }) => {
    await app.open(sample.path);

    for (const selector of sample.targets) {
      const target = browser.locator(selector).first();
      await expect(target).toBeVisible();
      const box = await target.boundingBox();
      expect(box).not.toBeNull();
      expect(box?.width ?? 0, `${sample.name} ${selector} width`).toBeGreaterThanOrEqual(44);
      expect(box?.height ?? 0, `${sample.name} ${selector} height`).toBeGreaterThanOrEqual(44);
    }
  });

  test(`${sample.name} body and supporting text remain at least 14px`, async ({ app, browser }) => {
    await app.open(sample.path);

    for (const selector of sample.text) {
      const fontSize = await browser.evaluate((targetSelector) => {
        const target = document.querySelector(targetSelector);
        return target ? Number.parseFloat(getComputedStyle(target).fontSize) : null;
      }, selector);
      expect(fontSize, `${sample.name} missing ${selector}`).not.toBeNull();
      expect(fontSize ?? 0, `${sample.name} ${selector} font size`).toBeGreaterThanOrEqual(14);
    }
  });
}
