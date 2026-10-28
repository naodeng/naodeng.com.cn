import { test } from "@e2e-dev/web";
import { expect } from "e2e";

for (const locale of ["en", "zh-cn"] as const) {
  test(`${locale} homepage exposes its hero, exploration hub, and latest posts`, async ({ app, browser }) => {
    await app.open(`/${locale}/`);
    await expect(browser.locator("main .home-hero")).toBeVisible();
    await expect(browser.locator("main .home-explore-hub .home-explore-grid")).toBeVisible();
    await expect(browser.locator("main .home-latest-posts")).toBeVisible();
  });

  test(`${locale} primary navigation reaches the blog and about pages`, async ({ app, browser }) => {
    await app.open(`/${locale}/`);
    await browser.locator(`header nav a[data-nav-item="blog"]`).click();
    await expect(browser).toHaveURL(new RegExp(`/${locale}/blog/?$`));
    await expect(browser.locator("main")).toBeVisible();

    await app.open(`/${locale}/`);
    await browser.locator(`header nav a[data-nav-item="about"]`).click();
    await expect(browser).toHaveURL(new RegExp(`/${locale}/about/?$`));
    await expect(browser.locator("main")).toBeVisible();
  });

  test(`${locale} AI testing menu links reach prompts and skills`, async ({ app, browser }) => {
    await app.open(`/${locale}/`);
    await browser.locator("header nav [data-nav-group='ai-testing'] summary").click();
    await browser.locator("header nav a[data-nav-item='qa-prompts']").click();
    await expect(browser).toHaveURL(new RegExp(`/${locale}/prompts/?$`));
    await expect(browser.locator("main")).toBeVisible();

    await app.open(`/${locale}/`);
    await browser.locator("header nav [data-nav-group='ai-testing'] summary").click();
    await browser.locator("header nav a[data-nav-item='qa-skills']").click();
    await expect(browser).toHaveURL(new RegExp(`/${locale}/qaskills/?$`));
    await expect(browser.locator("main")).toBeVisible();
  });

  test(`${locale} blog list cards open an article`, async ({ app, browser }) => {
    await app.open(`/${locale}/blog/`);
    const firstArticle = browser.locator(`main a[href*='/${locale}/blog/']`).first();
    await expect(firstArticle).toBeVisible();
    await firstArticle.click();
    await expect(browser).toHaveURL(new RegExp(`/${locale}/blog/.+/`));
    await expect(browser.locator("article").first()).toBeVisible();
  });
}

test("blog archive links and localized QA wiki links navigate to their destinations", async ({ app, browser }) => {
  await app.open("/en/blog/");
  await browser.locator(".headline-actions a[href*='/en/archive']").first().click();
  await expect(browser).toHaveURL(/\/en\/archive\/?$/);
  await expect(browser.locator("main")).toBeVisible();

  await app.open("/zh-cn/");
  await browser.locator("header nav [data-nav-group='qa-content'] summary").click();
  await browser.locator("header nav a[data-nav-item='qa-wiki']").click();
  await expect(browser).toHaveURL(/\/zh-cn\/wiki\/?$/);
  await expect(browser.locator("main .docs-sidebar")).toBeVisible();
  await expect(browser.locator("main h1")).toContainText("测试百科");

  await app.open("/en/");
  await browser.locator("header nav [data-nav-group='qa-content'] summary").click();
  await browser.locator("header nav a[data-nav-item='qa-wiki']").click();
  await expect(browser).toHaveURL(/\/en\/wiki\/?$/);
  await expect(browser.locator("main h1")).toContainText("QA Wiki");
});

test("QA content menus navigate to the localized guide pages", async ({ app, browser }) => {
  for (const locale of ["en", "zh-cn"] as const) {
    await app.open(`/${locale}/`);
    await browser.locator("header nav [data-nav-group='qa-content'] summary").click();
    await browser.locator("header nav a[data-nav-item='guild']").click();
    await expect(browser).toHaveURL(new RegExp(`/${locale}/guild/?$`));
    await expect(browser.locator(".guild-hero__title")).toBeVisible();
  }
});

test("Chinese ecosystem menu links to projects and support", async ({ app, browser }) => {
  await app.open("/zh-cn/");
  await browser.locator("header nav [data-nav-group='ecosystem'] summary").click();
  await browser.locator("header nav a[data-nav-item='projects']").click();
  await expect(browser).toHaveURL(/\/zh-cn\/projects\/?$/);
  await expect(browser.locator("main")).toBeVisible();
  await app.open("/zh-cn/projects/");
  await expect(browser.locator(".project-card[href='https://github.com/naodeng/awesome-qa-skills'] .project-badge")).toHaveText("推荐");

  await app.open("/zh-cn/");
  await browser.locator("header nav [data-nav-group='ecosystem'] summary").click();
  await browser.locator("header nav a[data-nav-item='sponsor']").click();
  await expect(browser).toHaveURL(/\/zh-cn\/sponsor\/?$/);
  await expect(browser.locator("main")).toBeVisible();
});

test("footer QA skill links reach the localized skill libraries", async ({ app, browser }) => {
  for (const locale of ["en", "zh-cn"] as const) {
    await app.open(`/${locale}/`);
    const link = browser.locator(`footer .footer-nav a[href*='/${locale}/qaskills']`).first();
    await expect(link).toBeVisible();
    await link.click();
    await expect(browser).toHaveURL(new RegExp(`/${locale}/qaskills/?$`));
  }
});
