import { test } from "@e2e-dev/web";
import { expect } from "e2e";

for (const locale of ["en", "zh-cn"] as const) {
  test(`${locale} header has the brand, navigation, search, and no slogan`, async ({ app, browser }) => {
    await app.open(`/${locale}/`);
    await expect(browser.locator("header.l-header")).toBeVisible();
    await expect(browser.locator("header .site-logo, header .site-title-logo--students")).toBeVisible();
    await expect(browser.locator("header nav")).toBeVisible();
    await expect(browser.locator(".site-slogan")).toBeHidden();
    await expect(browser.locator("header button[data-search-open]")).toBeVisible();
    await expect(browser.locator("header nav [data-nav-item='home']")).toBeVisible();
    await expect(browser.locator("header nav [data-nav-item='blog']")).toBeVisible();
    await expect(browser.locator("header nav [data-nav-item='about']")).toBeVisible();
    await expect(browser.locator(`header nav a[href*='/${locale}/archive']`)).toHaveCount(0);
    await expect(browser.locator("header button[data-search-open]")).toHaveAttribute(
      "aria-label",
      locale === "en" ? "Search" : "搜索",
    );
  });
}

for (const { path, selector } of [
  { path: "/zh-cn/guild/", selector: "header nav [data-nav-group='qa-content'] a[data-nav-item='guild']" },
  { path: "/en/guild/api-testing/postman/", selector: "header nav [data-nav-group='qa-content'] a[data-nav-item='guild']" },
  { path: "/zh-cn/wiki/", selector: "header nav [data-nav-group='qa-content'] summary" },
]) {
  test(`${path} marks the matching navigation section active`, async ({ app, browser }) => {
    await app.open(path);
    await expect(browser).toHaveClass(browser.locator(selector), /active/);
  });
}

test("header groups expose localized QA, AI testing, and ecosystem links", async ({ app, browser }) => {
  await app.open("/zh-cn/");

  const qa = "header nav [data-nav-group='qa-content']";
  await browser.locator(`${qa} summary`).click();
  await expect(browser.locator(`${qa} .nav-submenu-intro`)).toContainText("测试术语");
  await expect(browser.locator(`${qa} a[data-nav-item='qa-wiki'] .nav-submenu-meta`)).toContainText("200+");
  await expect(browser.locator(`${qa} a[data-nav-item='guild'] .nav-submenu-meta`)).toContainText("50+");
  await expect(browser.locator(`${qa} a[data-nav-item='qa-wiki']`)).toHaveAttribute("href", "/zh-cn/wiki/");

  const ai = "header nav [data-nav-group='ai-testing']";
  await browser.locator(`${ai} summary`).click();
  await expect(browser.locator(`${ai} .nav-submenu-intro`)).toContainText("AI");
  await expect(browser.locator(`${ai} a[data-nav-item='qa-prompts'] .nav-submenu-meta`)).toContainText("200+");
  await expect(browser.locator(`${ai} a[data-nav-item='qa-skills'] .nav-submenu-meta`)).toContainText("100+");

  const ecosystem = "header nav [data-nav-group='ecosystem']";
  await browser.locator(`${ecosystem} summary`).click();
  await expect(browser.locator(`${ecosystem} a[data-nav-item='projects']`)).toBeVisible();
  await expect(browser.locator(`${ecosystem} a[data-nav-item='sponsor']`)).toBeVisible();
  const externalLinks = [
    ["english-learning", "https://30-day-qa-english-learning-plan.inaodeng.com/"],
    ["agent-learning", "https://ai-agent-30-day-learning-plan.inaodeng.com/"],
    ["playwright-learning", "https://30-day-qa-playwright-learning-plan.inaodeng.com/"],
  ] as const;
  for (const [item, href] of externalLinks) {
    const link = browser.locator(`${ecosystem} a[data-nav-item='${item}']`);
    await expect(link).toHaveAttribute("href", href);
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", "noopener noreferrer");
  }

  await app.open("/zh-cn/AIWiki/");
  const wikiCount = Number(await browser.locator(".wiki-stat-number").first().textContent());
  expect(wikiCount).toBeGreaterThan(0);
  const wikiCountLabel = `${Math.floor(wikiCount / 10) * 10}+`;

  await app.open("/en/");
  const englishAi = "header nav [data-nav-group='ai-testing']";
  await browser.locator(`${englishAi} summary`).click();
  await expect(browser.locator(`${englishAi} a[data-nav-item='qa-prompts']`)).toContainText("QA Prompts");
  await expect(browser.locator(`${englishAi} a[data-nav-item='qa-skills']`)).toContainText("QA Skills");

  await app.open("/zh-cn/");
  const localizedAi = "header nav [data-nav-group='ai-testing']";
  await browser.locator(`${localizedAi} summary`).click();
  await expect(browser.locator(`${localizedAi} a[data-nav-item='ai-wiki'] .nav-submenu-meta`)).toContainText(wikiCountLabel);
});

for (const locale of ["en", "zh-cn"] as const) {
  test(`${locale} blog navigation is marked active`, async ({ app, browser }) => {
    await app.open(`/${locale}/blog/`);
    await expect(browser).toHaveClass(browser.locator("header nav a[data-nav-item='blog']"), /active/);
  });
}

test("mobile header keeps the brand clear of the search and menu controls", async ({ app, browser }) => {
  await browser.setViewport({ width: 375, height: 667 });
  await app.open("/zh-cn/");
  await expect(browser.locator("header [data-nav-toggle]")).toBeVisible();
  await expect(browser.locator("header button[data-search-open]")).toBeVisible();
  await expect(browser.locator("header [data-site-nav]")).toBeHidden();

  const brandTools = await browser.evaluate(() => {
    const brand = document.querySelector(".site-brand-link")?.getBoundingClientRect();
    const tools = document.querySelector(".header-utils")?.getBoundingClientRect();
    return brand && tools ? { brandRight: brand.right, toolsLeft: tools.left } : null;
  });
  expect(brandTools).not.toBeNull();
  expect(brandTools!.toolsLeft - brandTools!.brandRight).toBeGreaterThanOrEqual(4);

  await browser.locator("header [data-nav-toggle]").click();
  await expect(browser.locator("header [data-site-nav]")).toBeVisible();
  await expect(browser.locator("header [data-nav-priority]")).toHaveCount(3);
});

test("editorial header uses a solid surface without blur", async ({ app, browser }) => {
  await app.open("/en/");
  const styles = await browser.evaluate(() => {
    const style = getComputedStyle(document.querySelector("header.l-header")!);
    return { backgroundImage: style.backgroundImage, backdropFilter: style.backdropFilter };
  });
  expect(styles.backgroundImage).toBe("none");
  expect(styles.backdropFilter).toBe("none");
});
