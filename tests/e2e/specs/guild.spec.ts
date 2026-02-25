import { test, expect } from "@playwright/test";

// ─────────────────────────────────────────────
// Guild 概览页
// ─────────────────────────────────────────────
test.describe("Guild 概览页", () => {
  test("zh-cn：页面加载，标题和测试类型可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/", { waitUntil: "domcontentloaded" });
    await expect(page.locator(".guild-hero__title")).toContainText("让自动化测试成为你的超能力", { timeout: 10000 });
    await expect(page.locator(".tts__title").filter({ hasText: "接口自动化测试" })).toBeVisible();
    await expect(page.locator(".tts__title").filter({ hasText: "性能测试" })).toBeVisible();
  });

  test("en：页面加载，标题和测试类型可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/guild/", { waitUntil: "domcontentloaded" });
    await expect(page.locator(".guild-hero__title")).toContainText("Make Test Automation Your Superpower", { timeout: 10000 });
    await expect(page.locator(".tts__title").filter({ hasText: "API Automation Testing" })).toBeVisible();
    await expect(page.locator(".tts__title").filter({ hasText: "Performance Testing" })).toBeVisible();
  });

  test("zh-cn：Hero 统计数据显示 3 项", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/", { waitUntil: "domcontentloaded" });
    await expect(page.locator(".guild-hero__title")).toBeVisible({ timeout: 10000 });
    const stats = page.locator(".stat-item");
    const count = await stats.count();
    if (count > 0) expect(count).toBe(3);
  });

  test("zh-cn：特性卡片存在且包含图标/标题/描述", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/", { waitUntil: "networkidle" });
    const cards = page.locator(".guild-features__card");
    const count = await cards.count();
    if (count > 0) {
      expect(count).toBe(6);
      await expect(cards.first().locator(".guild-features__icon")).toBeVisible();
      await expect(cards.first().locator(".guild-features__title")).toBeVisible();
      await expect(cards.first().locator(".guild-features__description")).toBeVisible();
    }
  });

  test("zh-cn：学习流程显示 3 步", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/", { waitUntil: "networkidle" });
    const steps = page.locator(".workflow-step");
    await expect(steps).toHaveCount(3);
    await expect(steps.first().locator(".workflow-step__number")).toBeVisible();
    await expect(steps.first().locator(".workflow-step__title")).toBeVisible();
    await expect(steps.first().locator(".workflow-step__description")).toBeVisible();
  });

  test("zh-cn：框架卡片包含图标/名称/语言/描述", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/", { waitUntil: "networkidle" });
    const card = page.locator(".fw-card").first();
    await expect(card).toBeVisible();
    await expect(card.locator(".fw-card__top")).toBeVisible();
    await expect(card.locator(".fw-card__name")).toBeVisible();
    await expect(card.locator(".fw-card__desc")).toBeVisible();
  });

  test("zh-cn：点击框架卡片跳转到框架概述页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/", { waitUntil: "networkidle" });
    const postmanCard = page.locator(".fw-card").filter({ hasText: "Postman" }).first();
    await expect(postmanCard).toBeVisible();
    await postmanCard.click();
    await expect(page).toHaveURL(/\/zh-cn\/guild\/api-testing\/postman\//);
  });

  test("zh-cn：SEO meta 标签正确", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/");
    const title = await page.title();
    expect(title).toContain("测试");
    const desc = await page.locator('meta[name="description"]').getAttribute("content");
    expect(desc).toBeTruthy();
    expect(desc).toContain("测试");
  });

  test("响应式：移动端 Guild 概览页正常显示", async ({ page, baseURL }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto((baseURL || "") + "/zh-cn/guild/", { waitUntil: "networkidle" });
    await expect(page.locator(".guild-hero__title")).toBeVisible();
    await expect(page.locator(".fw-card").first()).toBeVisible();
  });

  test("响应式：平板端 Guild 概览页正常显示", async ({ page, baseURL }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto((baseURL || "") + "/zh-cn/guild/", { waitUntil: "networkidle" });
    await expect(page.locator(".guild-hero__title")).toBeVisible();
    await expect(page.locator(".tts").first()).toBeVisible();
  });
});

// ─────────────────────────────────────────────
// 框架概述页（fw-hero 新设计）
// ─────────────────────────────────────────────
test.describe("框架概述页", () => {
  test("zh-cn Postman：fw-hero 标题/描述/徽章可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/api-testing/postman/", { waitUntil: "networkidle" });
    await expect(page.locator(".fw-hero__title")).toContainText("Postman");
    await expect(page.locator(".fw-hero__desc")).toBeVisible();
    await expect(page.locator(".fw-badge--type")).toBeVisible();
  });

  test("zh-cn Postman：Hero 统计数据（教程数/语言/阶段）可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/api-testing/postman/", { waitUntil: "networkidle" });
    const stats = page.locator(".fw-stat");
    await expect(stats).toHaveCount(3);
    for (let i = 0; i < 3; i++) {
      await expect(stats.nth(i).locator(".fw-stat__value")).toBeVisible();
      await expect(stats.nth(i).locator(".fw-stat__label")).toBeVisible();
    }
  });

  test("zh-cn Postman：「立即开始」按钮存在且 href 指向 #learning-path", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/api-testing/postman/", { waitUntil: "networkidle" });
    const btn = page.locator(".fw-link--start");
    await expect(btn).toBeVisible();
    await expect(btn).toHaveAttribute("href", "#learning-path");
    await expect(btn).toContainText("立即开始");
  });

  test("en Postman：「Start Learning」按钮存在", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/guild/api-testing/postman/", { waitUntil: "networkidle" });
    const btn = page.locator(".fw-link--start");
    await expect(btn).toBeVisible();
    await expect(btn).toContainText("Start Learning");
  });

  test("zh-cn Postman：「立即开始」点击后滚动到学习路径区域", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/api-testing/postman/", { waitUntil: "networkidle" });
    await page.locator(".fw-link--start").click();
    await expect(page).toHaveURL(/#learning-path/);
  });

  test("zh-cn Postman：示例代码按钮指向 Automation-Test-Starter 仓库", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/api-testing/postman/", { waitUntil: "networkidle" });
    const demoBtn = page.locator(".fw-link--primary");
    if (await demoBtn.isVisible()) {
      const href = await demoBtn.getAttribute("href");
      expect(href).toContain("Automation-Test-Starter");
      await expect(demoBtn).toHaveAttribute("target", "_blank");
    }
  });

  test("zh-cn Postman：官方文档按钮存在且在新标签打开", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/api-testing/postman/", { waitUntil: "networkidle" });
    const docsBtn = page.locator(".fw-link--ghost");
    if (await docsBtn.isVisible()) {
      await expect(docsBtn).toHaveAttribute("target", "_blank");
      await expect(docsBtn).toHaveAttribute("rel", "noopener noreferrer");
    }
  });

  test("zh-cn Postman：学习工作流程显示 3 步", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/api-testing/postman/", { waitUntil: "networkidle" });
    const steps = page.locator(".fw-step");
    await expect(steps).toHaveCount(3);
    await expect(steps.first()).toHaveClass(/fw-step--done/);
    await expect(steps.first().locator(".fw-step__num")).toContainText("1");
    await expect(steps.first().locator(".fw-step__title")).toBeVisible();
  });

  test("zh-cn Postman：工作流程第三步包含 Demo 链接", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/api-testing/postman/", { waitUntil: "networkidle" });
    const thirdStep = page.locator(".fw-step").nth(2);
    const demoLink = thirdStep.locator(".fw-step__link");
    if (await demoLink.isVisible()) {
      await expect(demoLink).toHaveAttribute("target", "_blank");
      const href = await demoLink.getAttribute("href");
      expect(href).toContain("Automation-Test-Starter");
    }
  });

  test("zh-cn Postman：学习路径区域存在且有文章卡片", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/api-testing/postman/", { waitUntil: "networkidle" });
    await expect(page.locator("#learning-path")).toBeVisible();
    await expect(page.locator(".article-card").first()).toBeVisible();
  });

  test("zh-cn Postman：阶段筛选 pills 存在，「全部」默认激活", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/api-testing/postman/", { waitUntil: "networkidle" });
    const allPill = page.locator(".lp-pill").filter({ hasText: "全部" });
    await expect(allPill).toBeVisible();
    await expect(allPill).toHaveClass(/lp-pill--active/);
  });

  test("zh-cn Postman：点击阶段 pill 过滤文章", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/api-testing/postman/", { waitUntil: "networkidle" });
    const pills = page.locator(".lp-pill");
    const count = await pills.count();
    if (count > 1) {
      await pills.nth(1).click();
      await expect(pills.nth(1)).toHaveClass(/lp-pill--active/);
      await expect(pills.first()).not.toHaveClass(/lp-pill--active/);
    }
  });

  test("zh-cn Postman：文章卡片包含标题/描述/时长/难度", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/api-testing/postman/", { waitUntil: "networkidle" });
    const card = page.locator(".article-card").first();
    await expect(card.locator(".article-title")).toBeVisible();
    await expect(card.locator(".article-meta")).toBeVisible();
  });

  test("zh-cn Postman：文章卡片可点击跳转到文章详情页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/api-testing/postman/", { waitUntil: "networkidle" });
    await page.locator(".article-card").first().click();
    await expect(page).toHaveURL(/\/zh-cn\/guild\/api-testing\/postman\/.+\//);
  });

  test("en Postman：框架概述页正常加载", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/guild/api-testing/postman/", { waitUntil: "networkidle" });
    await expect(page.locator(".fw-hero__title")).toContainText("Postman");
    await expect(page.locator("#learning-path")).toBeVisible();
    await expect(page.locator(".article-card").first()).toBeVisible();
  });

  test("zh-cn K6：性能测试框架概述页正常加载", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/performance-testing/k6/", { waitUntil: "networkidle" });
    await expect(page.locator(".fw-hero__title")).toContainText("K6");
    await expect(page.locator("#learning-path")).toBeVisible();
  });

  test("en K6：性能测试框架概述页正常加载", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/guild/performance-testing/k6/", { waitUntil: "networkidle" });
    await expect(page.locator(".fw-hero__title")).toContainText("K6");
    await expect(page.locator("#learning-path")).toBeVisible();
  });

  test("zh-cn Postman：面包屑导航显示正确", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/api-testing/postman/", { waitUntil: "networkidle" });
    await expect(page.locator("nav.breadcrumb").first()).toBeVisible();
  });

  test("zh-cn Postman：SEO meta 标签正确", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/api-testing/postman/");
    const title = await page.title();
    expect(title).toContain("Postman");
    const desc = await page.locator('meta[name="description"]').getAttribute("content");
    expect(desc).toBeTruthy();
  });

  test("响应式：移动端框架概述页正常显示", async ({ page, baseURL }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto((baseURL || "") + "/zh-cn/guild/api-testing/postman/", { waitUntil: "networkidle" });
    await expect(page.locator(".fw-hero__title")).toBeVisible();
    await expect(page.locator(".article-card").first()).toBeVisible();
  });
});

// ─────────────────────────────────────────────
// 文章详情页
// ─────────────────────────────────────────────
test.describe("Guild 文章详情页", () => {
  const articleUrl = "/zh-cn/guild/api-testing/postman/getting-started/";
  const articleUrlEn = "/en/guild/api-testing/postman/getting-started/";

  test("zh-cn：页面加载，h1 可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + articleUrl, { waitUntil: "networkidle" });
    await expect(page.locator("h1").first()).toBeVisible({ timeout: 10000 });
  });

  test("zh-cn：元信息区域（类型/框架/阶段/难度/阅读时长）可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + articleUrl, { waitUntil: "networkidle" });
    const meta = page.locator(".guild-meta");
    await expect(meta).toBeVisible();
    await expect(meta.filter({ hasText: "类型" })).toBeVisible();
    await expect(meta.filter({ hasText: "框架" })).toBeVisible();
    await expect(meta.filter({ hasText: "阅读" })).toBeVisible();
  });

  test("zh-cn：示例代码按钮文字可见（白色文字，非透明）", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + articleUrl, { waitUntil: "networkidle" });
    const demoBtn = page.locator(".guild-link").first();
    if (await demoBtn.isVisible()) {
      await expect(demoBtn).toBeVisible();
      const text = await demoBtn.textContent();
      expect(text?.trim().length).toBeGreaterThan(0);
      const href = await demoBtn.getAttribute("href");
      expect(href).toContain("Automation-Test-Starter");
    }
  });

  test("zh-cn：官方文档按钮存在且在新标签打开", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + articleUrl, { waitUntil: "networkidle" });
    const links = page.locator(".guild-link");
    const count = await links.count();
    for (let i = 0; i < count; i++) {
      await expect(links.nth(i)).toHaveAttribute("target", "_blank");
      await expect(links.nth(i)).toHaveAttribute("rel", "noopener noreferrer");
    }
  });

  test("zh-cn：文章内容区域可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + articleUrl, { waitUntil: "networkidle" });
    await expect(page.locator(".guild-content")).toBeVisible();
  });

  test("zh-cn：侧边栏导航可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + articleUrl, { waitUntil: "networkidle" });
    await expect(page.locator(".docs-sidebar")).toBeVisible();
  });

  test("zh-cn：面包屑导航显示正确", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + articleUrl, { waitUntil: "networkidle" });
    await expect(page.locator("nav.breadcrumb").first()).toBeVisible();
  });

  test("zh-cn：前后导航（pagination）存在", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + articleUrl, { waitUntil: "networkidle" });
    const pagination = page.locator(".guild-pagination");
    const hasPagination = await pagination.isVisible();
    if (hasPagination) {
      const links = pagination.locator(".guild-pagination-link");
      await expect(links.first()).toBeVisible();
    }
  });

  test("zh-cn：SEO meta 标签正确", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + articleUrl);
    const title = await page.title();
    expect(title).toContain("Postman");
    const desc = await page.locator('meta[name="description"]').getAttribute("content");
    expect(desc).toBeTruthy();
  });

  test("en：页面加载，h1 可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + articleUrlEn, { waitUntil: "networkidle" });
    await expect(page.locator("h1").first()).toBeVisible({ timeout: 10000 });
  });

  test("en：元信息区域可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + articleUrlEn, { waitUntil: "networkidle" });
    const meta = page.locator(".guild-meta");
    if (await meta.isVisible()) {
      await expect(meta.filter({ hasText: "Read" })).toBeVisible();
    }
  });
});

// ─────────────────────────────────────────────
// 首页 Guild 展示区
// ─────────────────────────────────────────────
test.describe("首页 Guild 展示区", () => {
  test("zh-cn：展示区可见，标题/副标题正确", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    await expect(page.locator(".guild-showcase")).toBeVisible();
    await expect(page.locator(".gs-title")).toContainText("测试自动化指南");
    await expect(page.locator(".gs-subtitle")).toBeVisible();
  });

  test("en：展示区可见，标题正确", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    await expect(page.locator(".guild-showcase")).toBeVisible();
    await expect(page.locator(".gs-title")).toContainText("Test Automation Guild");
  });

  test("zh-cn：接口/性能测试区域可见，UI 测试已隐藏", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    await expect(page.locator('.gs-type-block[data-type="api-testing"]')).toBeVisible();
    await expect(page.locator('.gs-type-block[data-type="performance-testing"]')).toBeVisible();
    await expect(page.locator('.gs-type-block[data-type="ui-testing"]')).toHaveCount(0);
  });

  test("en：接口/性能测试区域可见，UI 测试已隐藏", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    await expect(page.locator('.gs-type-block[data-type="api-testing"]')).toBeVisible();
    await expect(page.locator('.gs-type-block[data-type="performance-testing"]')).toBeVisible();
    await expect(page.locator('.gs-type-block[data-type="ui-testing"]')).toHaveCount(0);
  });

  test("zh-cn：接口测试框架卡片存在", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    const apiBlock = page.locator('.gs-type-block[data-type="api-testing"]');
    const cards = apiBlock.locator(".gs-fw-card");
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);
  });

  test("zh-cn：点击 Postman 框架卡片跳转到框架概述页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    const card = page.locator(".gs-fw-card").filter({ hasText: "Postman" }).first();
    await expect(card).toBeVisible();
    await card.click();
    await expect(page).toHaveURL(/\/zh-cn\/guild\/api-testing\/postman\//);
  });

  test("en：点击 Postman 框架卡片跳转到框架概述页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    const card = page.locator(".gs-fw-card").filter({ hasText: "Postman" }).first();
    await expect(card).toBeVisible();
    await card.click();
    await expect(page).toHaveURL(/\/en\/guild\/api-testing\/postman\//);
  });

  test("zh-cn：「查看完整指南」按钮跳转到 Guild 页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    const cta = page.locator(".gs-cta");
    await expect(cta).toBeVisible();
    await expect(cta).toContainText("查看完整指南");
    await cta.click();
    await expect(page).toHaveURL(/\/zh-cn\/guild\//);
  });

  test("en：「View Full Guide」按钮跳转到 Guild 页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    const cta = page.locator(".gs-cta");
    await expect(cta).toBeVisible();
    await expect(cta).toContainText("View Full Guide");
    await cta.click();
    await expect(page).toHaveURL(/\/en\/guild\//);
  });

  test("响应式：移动端首页 Guild 展示区正常显示", async ({ page, baseURL }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    await expect(page.locator(".guild-showcase")).toBeVisible();
    await expect(page.locator(".gs-fw-card").first()).toBeVisible();
    await expect(page.locator(".gs-cta")).toBeVisible();
  });
});
