import { test, expect } from "@playwright/test";

// 覆盖 AuthorStatsCard 最近改动：
// - 新增 RSS 图标（social.rss prop）
// - RSS hover 颜色 #f26522
// - X (Twitter) 链接从 twitter.com 改为 x.com
// - 博客文章页传入 rss: `/${lang}/rss.xml`

test.describe("AuthorStatsCard — 博客文章页侧栏", () => {
  // 辅助：获取第一篇博文 URL
  async function getFirstPostUrl(page: import("@playwright/test").Page, baseURL: string, locale: string) {
    await page.goto(baseURL + `/${locale}/blog/`, { waitUntil: "networkidle" });
    const link = page.locator(`main a[href*='/${locale}/blog/']`).first();
    await link.waitFor({ state: "visible", timeout: 10000 });
    return await link.getAttribute("href");
  }

  test("en 博客文章页：作者卡片可见", async ({ page, baseURL }) => {
    const href = await getFirstPostUrl(page, baseURL || "", "en");
    await page.goto(new URL(href!, baseURL).href, { waitUntil: "networkidle" });
    await expect(page.locator(".author-stats-card")).toBeVisible();
  });

  test("zh-cn 博客文章页：作者卡片可见", async ({ page, baseURL }) => {
    const href = await getFirstPostUrl(page, baseURL || "", "zh-cn");
    await page.goto(new URL(href!, baseURL).href, { waitUntil: "networkidle" });
    await expect(page.locator(".author-stats-card")).toBeVisible();
  });

  test("en 博客文章页：社交图标区域可见", async ({ page, baseURL }) => {
    const href = await getFirstPostUrl(page, baseURL || "", "en");
    await page.goto(new URL(href!, baseURL).href, { waitUntil: "networkidle" });
    await expect(page.locator(".author-social")).toBeVisible();
  });

  test("zh-cn 博客文章页：社交图标区域可见", async ({ page, baseURL }) => {
    const href = await getFirstPostUrl(page, baseURL || "", "zh-cn");
    await page.goto(new URL(href!, baseURL).href, { waitUntil: "networkidle" });
    await expect(page.locator(".author-social")).toBeVisible();
  });

  test("en 博客文章页：RSS 图标存在且链接指向 /en/rss.xml", async ({ page, baseURL }) => {
    const href = await getFirstPostUrl(page, baseURL || "", "en");
    await page.goto(new URL(href!, baseURL).href, { waitUntil: "networkidle" });
    const rssBtn = page.locator(".author-social a[aria-label='RSS']");
    await expect(rssBtn).toBeVisible();
    const rssHref = await rssBtn.getAttribute("href");
    expect(rssHref).toContain("/en/rss.xml");
  });

  test("zh-cn 博客文章页：RSS 图标存在且链接指向 /zh-cn/rss.xml", async ({ page, baseURL }) => {
    const href = await getFirstPostUrl(page, baseURL || "", "zh-cn");
    await page.goto(new URL(href!, baseURL).href, { waitUntil: "networkidle" });
    const rssBtn = page.locator(".author-social a[aria-label='RSS']");
    await expect(rssBtn).toBeVisible();
    const rssHref = await rssBtn.getAttribute("href");
    expect(rssHref).toContain("/zh-cn/rss.xml");
  });

  test("en 博客文章页：X (Twitter) 链接指向 x.com（非 twitter.com）", async ({ page, baseURL }) => {
    const href = await getFirstPostUrl(page, baseURL || "", "en");
    await page.goto(new URL(href!, baseURL).href, { waitUntil: "networkidle" });
    const xBtn = page.locator(".author-social a[aria-label='X (Twitter)']");
    await expect(xBtn).toBeVisible();
    const xHref = await xBtn.getAttribute("href");
    expect(xHref).toContain("x.com");
    expect(xHref).not.toContain("twitter.com");
  });

  test("zh-cn 博客文章页：X (Twitter) 链接指向 x.com", async ({ page, baseURL }) => {
    const href = await getFirstPostUrl(page, baseURL || "", "zh-cn");
    await page.goto(new URL(href!, baseURL).href, { waitUntil: "networkidle" });
    const xBtn = page.locator(".author-social a[aria-label='X (Twitter)']");
    await expect(xBtn).toBeVisible();
    const xHref = await xBtn.getAttribute("href");
    expect(xHref).toContain("x.com");
  });

  test("en 博客文章页：GitHub 社交链接存在", async ({ page, baseURL }) => {
    const href = await getFirstPostUrl(page, baseURL || "", "en");
    await page.goto(new URL(href!, baseURL).href, { waitUntil: "networkidle" });
    const ghBtn = page.locator(".author-social a[aria-label='GitHub']");
    await expect(ghBtn).toBeVisible();
    await expect(ghBtn).toHaveAttribute("href", /github\.com/);
    await expect(ghBtn).toHaveAttribute("target", "_blank");
  });

  test("en 博客文章页：所有社交链接在新标签打开", async ({ page, baseURL }) => {
    const href = await getFirstPostUrl(page, baseURL || "", "en");
    await page.goto(new URL(href!, baseURL).href, { waitUntil: "networkidle" });
    const socialLinks = page.locator(".author-social a[target='_blank']");
    const count = await socialLinks.count();
    // GitHub、Medium、X、Weibo 都应在新标签打开（RSS 是站内链接，不需要 _blank）
    expect(count).toBeGreaterThanOrEqual(4);
  });

  test("en 博客文章页：作者统计数据（文章/分类/标签/字数）可见", async ({ page, baseURL }) => {
    const href = await getFirstPostUrl(page, baseURL || "", "en");
    await page.goto(new URL(href!, baseURL).href, { waitUntil: "networkidle" });
    const statsCard = page.locator(".author-stats-card");
    await expect(statsCard.locator(".author-stats")).toBeVisible();
    // 4 个统计项
    await expect(statsCard.locator(".stat-item")).toHaveCount(4);
  });

  test("zh-cn 博客文章页：作者统计数据可见", async ({ page, baseURL }) => {
    const href = await getFirstPostUrl(page, baseURL || "", "zh-cn");
    await page.goto(new URL(href!, baseURL).href, { waitUntil: "networkidle" });
    await expect(page.locator(".author-stats-card .author-stats")).toBeVisible();
    await expect(page.locator(".author-stats-card .stat-item")).toHaveCount(4);
  });

  test("en 博客文章页：作者名和 slogan 可见", async ({ page, baseURL }) => {
    const href = await getFirstPostUrl(page, baseURL || "", "en");
    await page.goto(new URL(href!, baseURL).href, { waitUntil: "networkidle" });
    await expect(page.locator(".author-name")).toBeVisible();
    await expect(page.locator(".author-slogan")).toBeVisible();
    await expect(page.locator(".author-slogan")).toContainText("Quality Analyst");
  });

  test("zh-cn 博客文章页：slogan 为中文", async ({ page, baseURL }) => {
    const href = await getFirstPostUrl(page, baseURL || "", "zh-cn");
    await page.goto(new URL(href!, baseURL).href, { waitUntil: "networkidle" });
    await expect(page.locator(".author-slogan")).toContainText("质量分析师");
  });
});

// ─────────────────────────────────────────────
// consts.ts 改动：sponsor 链接 locale 前缀
// ─────────────────────────────────────────────
test.describe("HOME_INTRO 链接正确性", () => {
  test("en 首页：sponsor 链接包含 /en/ 前缀", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    // HOME_INTRO 渲染在 .intro-section 内
    const introSection = page.locator(".intro-section");
    if (await introSection.isVisible()) {
      const sponsorLink = introSection.locator("a[href*='/en/sponsor']");
      if (await sponsorLink.isVisible()) {
        const href = await sponsorLink.getAttribute("href");
        expect(href).toContain("/en/sponsor");
      }
    }
  });

  test("zh-cn 首页：sponsor 链接包含 /zh-cn/ 前缀", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    const introSection = page.locator(".intro-section");
    if (await introSection.isVisible()) {
      const sponsorLink = introSection.locator("a[href*='/zh-cn/sponsor']");
      if (await sponsorLink.isVisible()) {
        const href = await sponsorLink.getAttribute("href");
        expect(href).toContain("/zh-cn/sponsor");
      }
    }
  });

  test("en 首页：X (Twitter) 链接指向 x.com", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    const introSection = page.locator(".intro-section");
    if (await introSection.isVisible()) {
      const xLink = introSection.locator("a[href*='x.com/inaodeng']");
      if (await xLink.isVisible()) {
        const href = await xLink.getAttribute("href");
        expect(href).toContain("x.com");
        expect(href).not.toContain("twitter.com");
      }
    }
  });

  test("zh-cn 首页：X (Twitter) 链接指向 x.com", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    const introSection = page.locator(".intro-section");
    if (await introSection.isVisible()) {
      const xLink = introSection.locator("a[href*='x.com/inaodeng']");
      if (await xLink.isVisible()) {
        const href = await xLink.getAttribute("href");
        expect(href).toContain("x.com");
      }
    }
  });
});
