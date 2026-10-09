import { test, expect } from "@playwright/test";

test.describe("语言切换使用有效的本地化地址", () => {
  for (const [source, target, lang, equivalent] of [
    ["/en/blog/performance-testing/gatling-tool-tutorial1/", "/zh-cn/blog/performance-testing/gatling-tool-intro1/", "zh-cn", true],
    ["/zh-cn/blog/performance-testing/gatling-tool-intro1/", "/en/blog/performance-testing/gatling-tool-tutorial1/", "en", true],
    ["/zh-cn/blog/others/80-20-rule/", "/en/blog/", "en", false],
    ["/en/series/Awesome%20QA%20Skills%20Field%20Guides/page/8/", "/zh-cn/series/", "zh-cn", false],
    ["/zh-cn/tags/AI%20%E6%B5%8B%E8%AF%95/page/10/", "/en/tags/", "en", false],
    ["/zh-cn/guild/api-testing/pytest/getting-started/", "/en/guild/api-testing/pytest/", "en", false],
  ] as const) {
    test(`${source} 切换到 ${lang} 的可访问页面`, async ({ page }) => {
      await page.goto(source, { waitUntil: "domcontentloaded" });
      const option = page.locator(`header [data-locale-option][data-lang="${lang}"]`);
      await expect(option).toHaveAttribute("href", target);
      await expect(page.locator(`footer a[href="${target}"]`)).toBeVisible();
      const alternate = page.locator(`head link[hreflang="${lang === "zh-cn" ? "zh-CN" : "en-US"}"]`);
      if (equivalent) await expect(alternate).toHaveAttribute("href", `https://inaodeng.com${target}`);
      else await expect(alternate).toHaveCount(0);
      await page.locator("header [data-locale-trigger]").click();
      await option.click();
      await expect(page).toHaveURL(url => decodeURIComponent(url.pathname) === decodeURIComponent(target));
      await expect(page.locator("main h1").first()).toBeVisible();
    });
  }
});

test.describe("导航与首页内容", () => {
  test("en 首页：Hero、探索中心与最新文章可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });
    await expect(page.locator("main .home-hero").first()).toBeVisible();
    await expect(page.locator("main .home-explore-hub .home-explore-grid").first()).toBeVisible();
    await expect(page.locator("main .home-latest-posts").first()).toBeVisible();
  });

  test("zh-cn 首页：Hero、探索中心与最新文章可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });
    await expect(page.locator("main .home-hero").first()).toBeVisible();
    await expect(page.locator("main .home-explore-hub .home-explore-grid").first()).toBeVisible();
    await expect(page.locator("main .home-latest-posts").first()).toBeVisible();
  });

  test("en 从首页点击「博客」进入博客列表", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });
    await page.locator("header nav a[data-nav-item='blog']").click();
    await expect(page).toHaveURL(/\/(en)\/blog\/?/);
    await expect(page.locator("main")).toBeVisible();
  });

  test("zh-cn 从首页点击「博客」进入博客列表", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });
    await page.locator("header nav a[data-nav-item='blog']").click();
    await expect(page).toHaveURL(/\/(zh-cn)\/blog\/?/);
    await expect(page.locator("main")).toBeVisible();
  });

  test("en 从博客首页点击「归档」按钮进入归档页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/blog/", { waitUntil: "domcontentloaded" });
    await page.locator(".headline-actions a[href*='/en/archive']").first().click();
    await expect(page).toHaveURL(/\/(en)\/archive\/?/);
    await expect(page.locator("main")).toBeVisible();
  });

  test("zh-cn 从博客首页点击「归档」按钮进入归档页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/blog/", { waitUntil: "domcontentloaded" });
    await page.locator(".headline-actions a[href*='/zh-cn/archive']").first().click();
    await expect(page).toHaveURL(/\/(zh-cn)\/archive\/?/);
    await expect(page.locator("main")).toBeVisible();
  });

  test("en 从首页点击「关于」进入关于页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });
    await page.locator("header nav a[data-nav-item='about']").click();
    await expect(page).toHaveURL(/\/(en)\/about\/?/);
    await expect(page.locator("main")).toBeVisible();
  });

  test("zh-cn 从首页点击「关于」进入关于页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });
    await page.locator("header nav a[data-nav-item='about']").click();
    await expect(page).toHaveURL(/\/(zh-cn)\/about\/?/);
    await expect(page.locator("main")).toBeVisible();
  });

  test("zh-cn 从首页点击「QA 专业库 > 软件测试百科」进入百科首页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });
    await page.locator("header nav [data-nav-group='qa-content'] summary").click();
    await page.locator("header nav a[data-nav-item='qa-wiki']").click();
    await expect(page).toHaveURL(/\/(zh-cn)\/wiki\/?/);
    await expect(page.locator("main .docs-sidebar").first()).toBeVisible();
    await expect(page.getByRole("heading", { name: "测试百科", level: 1 }).first()).toBeVisible();
  });

  test("zh-cn 从首页点击「QA 专业库 > 指南」进入指南页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });
    await page.locator("header nav [data-nav-group='qa-content'] summary").click();
    await page.locator("header nav [data-nav-group='qa-content'] a[data-nav-item='guild']").click();
    await expect(page).toHaveURL(/\/(zh-cn)\/guild\/?/);
    await expect(page.locator(".guild-hero__title")).toBeVisible();
  });

  test("en 从首页点击「QA Library > Guides」进入指南页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });
    await page.locator("header nav [data-nav-group='qa-content'] summary").click();
    const guildLink = page.locator("header nav [data-nav-group='qa-content'] a[data-nav-item='guild']").first();
    await expect(guildLink).toHaveAttribute("href", /\/en\/guild\/?$/);
    await guildLink.click();
    await expect(page).toHaveURL(/\/(en)\/guild\/?/);
    await expect(page.locator(".guild-hero__title")).toBeVisible();
  });

  test("en 首页「QA Library > QA wiki」链接指向外站 ray.run", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });
    await page.locator("header nav [data-nav-group='qa-content'] summary").click();
    const wikiLink = page.locator("header nav a[data-nav-item='qa-wiki']").first();
    await expect(wikiLink).toBeVisible();
    await expect(wikiLink).toHaveAttribute("target", "_blank");
  });

  test("zh-cn 从首页点击「AI测试 > 软件测试提示词库」进入提示词库", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });
    await page.locator("header nav [data-nav-group='ai-testing'] summary").click();
    await page.locator("header nav a[data-nav-item='qa-prompts']").click();
    await expect(page).toHaveURL(/\/(zh-cn)\/prompts\/?/);
    await expect(page.locator("main")).toBeVisible();
  });

  test("zh-cn 从首页点击「AI测试 > 软件测试技能库」进入技能库", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });
    await page.locator("header nav [data-nav-group='ai-testing'] summary").click();
    await page.locator("header nav a[data-nav-item='qa-skills']").click();
    await expect(page).toHaveURL(/\/(zh-cn)\/qaskills\/?/);
    await expect(page.locator("main")).toBeVisible();
  });

  test("en 从首页点击「AI Testing > QA Skill Library」进入技能库", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });
    await page.locator("header nav [data-nav-group='ai-testing'] summary").click();
    await page.locator("header nav a[data-nav-item='qa-skills']").click();
    await expect(page).toHaveURL(/\/(en)\/qaskills\/?/);
    await expect(page.locator("main")).toBeVisible();
  });

  test("zh-cn 页脚包含「软件测试技能库」并跳转到 qaskills", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });
    const footerLink = page.locator("footer .footer-nav a[href*='/zh-cn/qaskills']").first();
    await expect(footerLink).toBeVisible();
    await footerLink.click();
    await expect(page).toHaveURL(/\/(zh-cn)\/qaskills\/?/);
  });

  test("en 页脚包含「QA Skill Library」并跳转到 qaskills", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });
    const footerLink = page.locator("footer .footer-nav a[href*='/en/qaskills']").first();
    await expect(footerLink).toBeVisible();
    await footerLink.click();
    await expect(page).toHaveURL(/\/(en)\/qaskills\/?/);
  });

  test("zh-cn 页脚包含「英语学习」外链", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });
    const footerLink = page.locator("footer .footer-nav a", { hasText: "英语学习" }).first();
    await expect(footerLink).toBeVisible();
    await expect(footerLink).toHaveAttribute(
      "href",
      "https://30-day-qa-english-learning-plan.inaodeng.com/",
    );
    await expect(footerLink).toHaveAttribute("target", "_blank");
    await expect(footerLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("zh-cn 页脚包含「Agent学习」外链", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });
    const footerLink = page.locator("footer .footer-nav a", { hasText: "Agent学习" }).first();
    await expect(footerLink).toBeVisible();
    await expect(footerLink).toHaveAttribute(
      "href",
      "https://ai-agent-30-day-learning-plan.inaodeng.com/",
    );
    await expect(footerLink).toHaveAttribute("target", "_blank");
    await expect(footerLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("zh-cn 页脚包含「Playwright学习」外链", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });
    const footerLink = page.locator("footer .footer-nav a", { hasText: "Playwright学习" }).first();
    await expect(footerLink).toBeVisible();
    await expect(footerLink).toHaveAttribute(
      "href",
      "https://30-day-qa-playwright-learning-plan.inaodeng.com/",
    );
    await expect(footerLink).toHaveAttribute("target", "_blank");
    await expect(footerLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("zh-cn 从首页点击「生态与项目 > 项目」进入项目页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });
    await page.locator("header nav [data-nav-group='ecosystem'] summary").click();
    await page.locator("header nav a[data-nav-item='projects']").click();
    await expect(page).toHaveURL(/\/(zh-cn)\/projects\/?/);
    await expect(page.locator("main")).toBeVisible();
  });

  test("zh-cn 项目页展示推荐的 Awesome QA Skills 项目", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/projects/", { waitUntil: "domcontentloaded" });

    const projectCard = page.locator(".project-card", { hasText: "Awesome QA Skills" });
    await expect(projectCard).toHaveAttribute("href", "https://github.com/naodeng/awesome-qa-skills");
    await expect(projectCard.locator(".project-badge")).toHaveText("推荐");
  });

  test("zh-cn 从首页点击「生态与项目 > 支持」进入支持页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });
    await page.locator("header nav [data-nav-group='ecosystem'] summary").click();
    await page.locator("header nav a[data-nav-item='sponsor']").click();
    await expect(page).toHaveURL(/\/(zh-cn)\/sponsor\/?/);
    await expect(page.locator("main")).toBeVisible();
  });

  test("en 博客列表页：文章卡片可点击进入详情", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/blog/", { waitUntil: "domcontentloaded" });
    const firstLink = page.locator("main a[href*='/en/blog/']").first();
    await expect(firstLink).toBeVisible({ timeout: 10000 });
    await firstLink.click();
    await expect(page).toHaveURL(/\/en\/blog\/.+\/$/);
    await expect(page.locator("article").first()).toBeVisible();
  });

  test("zh-cn 博客列表页：文章卡片可点击进入详情", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/blog/", { waitUntil: "domcontentloaded" });
    const firstLink = page.locator("main a[href*='/zh-cn/blog/']").first();
    await expect(firstLink).toBeVisible({ timeout: 10000 });
    await firstLink.click();
    await expect(page).toHaveURL(/\/zh-cn\/blog\/.+\/$/);
    await expect(page.locator("article").first()).toBeVisible();
  });
});
