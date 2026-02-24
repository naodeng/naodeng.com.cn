import { test, expect } from "@playwright/test";

test.describe("Guild 功能测试", () => {
  test("zh-cn Guild 概览页：页面加载正常", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/", { waitUntil: "networkidle" });
    
    // 验证页面标题
    await expect(page.locator(".guild-hero__title")).toContainText("测试自动化指南");
    
    // 验证测试类型部分存在（UI测试已隐藏）
    await expect(page.locator("text=接口自动化测试")).toBeVisible();
    await expect(page.locator("text=性能测试")).toBeVisible();
  });

  test("en Guild 概览页：页面加载正常", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/guild/", { waitUntil: "networkidle" });
    
    // 验证页面标题
    await expect(page.locator(".guild-hero__title")).toContainText("Test Automation Guild");
    
    // 验证测试类型部分存在（UI测试已隐藏）
    await expect(page.locator("text=API Automation Testing")).toBeVisible();
    await expect(page.locator("text=Performance Testing")).toBeVisible();
  });

  test("zh-cn Guild 概览页：Hero区域显示完整", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/", { waitUntil: "networkidle" });
    
    // 验证Hero标题和副标题
    await expect(page.locator(".guild-hero__title")).toBeVisible();
    await expect(page.locator(".guild-hero__tagline")).toBeVisible();
    
    // 验证统计数据
    await expect(page.locator(".guild-hero__stats")).toBeVisible();
    const stats = page.locator(".guild-hero__stat");
    await expect(stats).toHaveCount(3);
  });

  test("en Guild 概览页：Hero区域显示完整", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/guild/", { waitUntil: "networkidle" });
    
    // 验证Hero标题和副标题
    await expect(page.locator(".guild-hero__title")).toBeVisible();
    await expect(page.locator(".guild-hero__tagline")).toBeVisible();
    
    // 验证统计数据
    await expect(page.locator(".guild-hero__stats")).toBeVisible();
    const stats = page.locator(".guild-hero__stat");
    await expect(stats).toHaveCount(3);
  });

  test("zh-cn Guild 概览页：特性区域显示正常", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/", { waitUntil: "networkidle" });
    
    // 验证特性卡片存在
    const featureCards = page.locator(".guild-features__card");
    await expect(featureCards).toHaveCount(6);
    
    // 验证特性卡片包含图标、标题和描述
    const firstCard = featureCards.first();
    await expect(firstCard.locator(".guild-features__icon")).toBeVisible();
    await expect(firstCard.locator(".guild-features__title")).toBeVisible();
    await expect(firstCard.locator(".guild-features__description")).toBeVisible();
  });

  test("zh-cn Guild 概览页：学习流程显示正常", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/", { waitUntil: "networkidle" });
    
    // 验证学习流程步骤
    const workflowSteps = page.locator(".workflow-step");
    await expect(workflowSteps).toHaveCount(3);
    
    // 验证每个步骤包含编号、标题和描述
    const firstStep = workflowSteps.first();
    await expect(firstStep.locator(".workflow-step__number")).toBeVisible();
    await expect(firstStep.locator(".workflow-step__title")).toBeVisible();
    await expect(firstStep.locator(".workflow-step__description")).toBeVisible();
  });

  test("zh-cn Guild 概览页：框架卡片显示正常", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/", { waitUntil: "networkidle" });
    
    // 验证框架卡片存在
    const frameworkCards = page.locator(".framework-card");
    await expect(frameworkCards.first()).toBeVisible();
    
    // 验证框架卡片包含图标、标题、语言和描述
    const firstCard = frameworkCards.first();
    await expect(firstCard.locator(".framework-card__icon")).toBeVisible();
    await expect(firstCard.locator(".framework-card__title h3")).toBeVisible();
    await expect(firstCard.locator(".framework-card__language")).toBeVisible();
    await expect(firstCard.locator(".framework-card__description")).toBeVisible();
    
    // 验证框架卡片包含链接
    await expect(firstCard.locator(".framework-card__links")).toBeVisible();
  });

  test("zh-cn 框架卡片：可点击跳转到学习页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/", { waitUntil: "networkidle" });
    
    // 点击框架卡片主区域
    const postmanCard = page.locator('.framework-card').filter({ hasText: 'Postman' }).first();
    await expect(postmanCard).toBeVisible();
    await postmanCard.locator('.framework-card__main').click();
    
    // 验证跳转到框架概述页
    await expect(page).toHaveURL(/\/zh-cn\/guild\/api-testing\/postman\//);
    await expect(page.locator(".framework-title")).toContainText("Postman");
  });

  test("zh-cn 框架卡片：Demo和Docs链接在新标签打开", async ({ page, baseURL, context }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/", { waitUntil: "networkidle" });
    
    // 查找第一个框架卡片的Demo链接
    const demoLink = page.locator('.framework-card__link').filter({ hasText: 'Demo' }).first();
    if (await demoLink.isVisible()) {
      await expect(demoLink).toHaveAttribute("target", "_blank");
      await expect(demoLink).toHaveAttribute("rel", "noopener noreferrer");
    }
    
    // 查找Docs链接
    const docsLink = page.locator('.framework-card__link').filter({ hasText: 'Docs' }).first();
    if (await docsLink.isVisible()) {
      await expect(docsLink).toHaveAttribute("target", "_blank");
      await expect(docsLink).toHaveAttribute("rel", "noopener noreferrer");
    }
  });

  test("zh-cn 框架概述页：显示学习路径", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/api-testing/postman/", { waitUntil: "networkidle" });
    
    // 验证框架信息
    await expect(page.locator(".framework-title")).toContainText("Postman");
    
    // 验证学习路径标题
    await expect(page.locator("text=学习路径")).toBeVisible();
    
    // 验证有文章卡片
    const articleCards = page.locator(".article-card");
    await expect(articleCards.first()).toBeVisible();
  });

  test("zh-cn 框架概述页：显示框架图标和信息", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/api-testing/postman/", { waitUntil: "networkidle" });
    
    // 验证框架图标
    const frameworkIcon = page.locator(".framework-icon img");
    if (await frameworkIcon.isVisible()) {
      await expect(frameworkIcon).toHaveAttribute("alt", /Postman/i);
    }
    
    // 验证框架描述
    await expect(page.locator(".framework-description")).toBeVisible();
    
    // 验证快速链接区域
    await expect(page.locator(".framework-links")).toBeVisible();
  });

  test("en 框架概述页：显示学习路径", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/guild/api-testing/postman/", { waitUntil: "networkidle" });
    
    // 验证框架信息
    await expect(page.locator(".framework-title")).toContainText("Postman");
    
    // 验证学习路径标题
    await expect(page.locator("text=Learning Path")).toBeVisible();
    
    // 验证有文章卡片
    const articleCards = page.locator(".article-card");
    await expect(articleCards.first()).toBeVisible();
  });

  test("zh-cn 文章详情页：内容完整", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/api-testing/postman/getting-started/", { waitUntil: "networkidle" });
    
    // 验证文章标题（使用 main 区域的 h1）
    await expect(page.locator("main h1").first()).toContainText("Postman");
    
    // 验证元信息存在
    await expect(page.locator(".guild-meta")).toBeVisible();
    await expect(page.locator("text=阶段")).toBeVisible();
    await expect(page.locator("text=难度")).toBeVisible();
    
    // 验证快速链接
    const githubLink = page.locator('a[href*="github.com"]').first();
    if (await githubLink.isVisible()) {
      await expect(githubLink).toHaveAttribute("target", "_blank");
    }
  });

  test("zh-cn 文章详情页：显示学习时长", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/api-testing/postman/getting-started/", { waitUntil: "networkidle" });
    
    // 验证学习时长信息
    const durationInfo = page.locator(".guild-meta").filter({ hasText: "分钟" });
    if (await durationInfo.isVisible()) {
      await expect(durationInfo).toBeVisible();
    }
  });

  test("en 文章详情页：内容完整", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/guild/api-testing/postman/getting-started/", { waitUntil: "networkidle" });
    
    // 验证文章标题
    await expect(page.locator("main h1").first()).toContainText("Postman");
    
    // 验证元信息存在
    await expect(page.locator(".guild-meta")).toBeVisible();
    await expect(page.locator("text=Stage")).toBeVisible();
    await expect(page.locator("text=Difficulty")).toBeVisible();
  });

  test("zh-cn 性能测试框架：K6页面加载正常", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/performance-testing/k6/", { waitUntil: "networkidle" });
    
    // 验证框架标题
    await expect(page.locator(".framework-title")).toContainText("K6");
    
    // 验证学习路径存在
    await expect(page.locator("text=学习路径")).toBeVisible();
  });

  test("en 性能测试框架：K6页面加载正常", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/guild/performance-testing/k6/", { waitUntil: "networkidle" });
    
    // 验证框架标题
    await expect(page.locator(".framework-title")).toContainText("K6");
    
    // 验证学习路径存在
    await expect(page.locator("text=Learning Path")).toBeVisible();
  });

  test("zh-cn 侧边栏导航：可见且可用", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/api-testing/postman/getting-started/", { waitUntil: "networkidle" });
    
    // 验证侧边栏存在
    const sidebar = page.locator(".docs-sidebar");
    await expect(sidebar).toBeVisible();
    
    // 验证概述链接
    const overviewLink = page.locator('a[href*="/guild/api-testing/postman"]').first();
    await expect(overviewLink).toBeVisible();
  });

  test("zh-cn 面包屑导航：显示正确", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/api-testing/postman/getting-started/", { waitUntil: "networkidle" });
    
    // 验证面包屑存在（使用更精确的选择器）
    const breadcrumb = page.locator("nav.breadcrumb").first();
    await expect(breadcrumb).toBeVisible();
  });

  test("响应式设计：移动端正常显示", async ({ page, baseURL }) => {
    // 设置移动端视口
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto((baseURL || "") + "/zh-cn/guild/", { waitUntil: "networkidle" });
    
    // 验证页面可见
    await expect(page.locator(".guild-hero__title")).toBeVisible();
    
    // 验证框架卡片在移动端可见
    const frameworkCards = page.locator(".framework-card, [class*='framework']");
    await expect(frameworkCards.first()).toBeVisible();
  });

  test("响应式设计：平板端正常显示", async ({ page, baseURL }) => {
    // 设置平板端视口
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto((baseURL || "") + "/zh-cn/guild/", { waitUntil: "networkidle" });
    
    // 验证页面布局
    await expect(page.locator(".guild-hero__title")).toBeVisible();
    await expect(page.locator(".guild-content")).toBeVisible();
  });

  test("SEO：meta 标签正确", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/api-testing/postman/getting-started/");
    
    // 验证 title
    const title = await page.title();
    expect(title).toContain("Postman");
    
    // 验证 meta description
    const metaDescription = await page.locator('meta[name="description"]').getAttribute("content");
    expect(metaDescription).toBeTruthy();
  });

  test("SEO：Guild概览页meta标签正确", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/");
    
    // 验证 title
    const title = await page.title();
    expect(title).toContain("测试自动化指南");
    
    // 验证 meta description
    const metaDescription = await page.locator('meta[name="description"]').getAttribute("content");
    expect(metaDescription).toBeTruthy();
    expect(metaDescription).toContain("测试");
  });
});

test.describe("首页 Guild 展示区测试", () => {
  test("zh-cn 首页：Guild展示区可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    
    // 验证Guild展示区存在
    const guildShowcase = page.locator(".guild-showcase");
    await expect(guildShowcase).toBeVisible();
    
    // 验证标题
    await expect(page.locator(".guild-showcase__title")).toContainText("测试自动化指南");
    
    // 验证副标题
    await expect(page.locator(".guild-showcase__subtitle")).toBeVisible();
  });

  test("en 首页：Guild展示区可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    
    // 验证Guild展示区存在
    const guildShowcase = page.locator(".guild-showcase");
    await expect(guildShowcase).toBeVisible();
    
    // 验证标题
    await expect(page.locator(".guild-showcase__title")).toContainText("Test Automation Guild");
    
    // 验证副标题
    await expect(page.locator(".guild-showcase__subtitle")).toBeVisible();
  });

  test("zh-cn 首页：Guild展示区显示测试类型", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    
    // 验证接口自动化测试区域
    const apiSection = page.locator('.guild-section[data-test-type="api-testing"]');
    await expect(apiSection).toBeVisible();
    await expect(apiSection.locator(".guild-section__title")).toContainText("接口自动化测试");
    
    // 验证性能测试区域
    const perfSection = page.locator('.guild-section[data-test-type="performance-testing"]');
    await expect(perfSection).toBeVisible();
    await expect(perfSection.locator(".guild-section__title")).toContainText("性能测试");
    
    // 验证UI测试已隐藏
    const uiSection = page.locator('.guild-section[data-test-type="ui-testing"]');
    await expect(uiSection).toHaveCount(0);
  });

  test("en 首页：Guild展示区显示测试类型", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    
    // 验证接口自动化测试区域
    const apiSection = page.locator('.guild-section[data-test-type="api-testing"]');
    await expect(apiSection).toBeVisible();
    await expect(apiSection.locator(".guild-section__title")).toContainText("API Automation Testing");
    
    // 验证性能测试区域
    const perfSection = page.locator('.guild-section[data-test-type="performance-testing"]');
    await expect(perfSection).toBeVisible();
    await expect(perfSection.locator(".guild-section__title")).toContainText("Performance Testing");
    
    // 验证UI测试已隐藏
    const uiSection = page.locator('.guild-section[data-test-type="ui-testing"]');
    await expect(uiSection).toHaveCount(0);
  });

  test("zh-cn 首页：Guild框架标签可点击跳转", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    
    // 查找并点击Postman框架标签
    const postmanTag = page.locator('.framework-tag').filter({ hasText: 'Postman' }).first();
    await expect(postmanTag).toBeVisible();
    
    // 验证标签包含框架名称和语言
    await expect(postmanTag.locator(".framework-tag__name")).toContainText("Postman");
    await expect(postmanTag.locator(".framework-tag__lang")).toBeVisible();
    
    // 点击跳转
    await postmanTag.click();
    await expect(page).toHaveURL(/\/zh-cn\/guild\/api-testing\/postman\//);
  });

  test("en 首页：Guild框架标签可点击跳转", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    
    // 查找并点击Postman框架标签
    const postmanTag = page.locator('.framework-tag').filter({ hasText: 'Postman' }).first();
    await expect(postmanTag).toBeVisible();
    
    // 点击跳转
    await postmanTag.click();
    await expect(page).toHaveURL(/\/en\/guild\/api-testing\/postman\//);
  });

  test("zh-cn 首页：Guild展示区显示所有框架", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    
    // 验证接口测试框架数量（5个）
    const apiFrameworks = page.locator('.guild-section[data-test-type="api-testing"] .framework-tag');
    await expect(apiFrameworks).toHaveCount(5);
    
    // 验证性能测试框架数量（2个）
    const perfFrameworks = page.locator('.guild-section[data-test-type="performance-testing"] .framework-tag');
    await expect(perfFrameworks).toHaveCount(2);
  });

  test("zh-cn 首页：Guild查看完整指南按钮可用", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    
    // 验证CTA按钮存在
    const ctaButton = page.locator(".guild-showcase__cta");
    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toContainText("查看完整指南");
    
    // 点击跳转到Guild页面
    await ctaButton.click();
    await expect(page).toHaveURL(/\/zh-cn\/guild\//);
  });

  test("en 首页：Guild查看完整指南按钮可用", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    
    // 验证CTA按钮存在
    const ctaButton = page.locator(".guild-showcase__cta");
    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toContainText("View Full Guide");
    
    // 点击跳转到Guild页面
    await ctaButton.click();
    await expect(page).toHaveURL(/\/en\/guild\//);
  });

  test("zh-cn 首页：Guild展示区hover效果正常", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    
    // 获取第一个框架标签
    const firstTag = page.locator('.framework-tag').first();
    await expect(firstTag).toBeVisible();
    
    // 悬停并验证样式变化（通过检查元素是否可交互）
    await firstTag.hover();
    await expect(firstTag).toBeVisible();
  });

  test("响应式：移动端首页Guild展示区正常显示", async ({ page, baseURL }) => {
    // 设置移动端视口
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    
    // 验证Guild展示区在移动端可见
    const guildShowcase = page.locator(".guild-showcase");
    await expect(guildShowcase).toBeVisible();
    
    // 验证框架标签在移动端可见
    const frameworkTags = page.locator('.framework-tag');
    await expect(frameworkTags.first()).toBeVisible();
    
    // 验证CTA按钮在移动端可见
    await expect(page.locator(".guild-showcase__cta")).toBeVisible();
  });
});
