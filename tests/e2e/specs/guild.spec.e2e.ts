import { test } from "@e2e-dev/web";
import { expect } from "e2e";

for (const locale of ["zh-cn", "en"] as const) {
  const indexHeading = locale === "zh-cn" ? /让自动化测试成为你的超能力/ : /Make Test Automation Your Superpower/;

  test(`${locale} Guild directory filters learning cards and opens a framework`, async ({ app, browser, screen }) => {
    await app.open(`/${locale}/guild/`);
    await expect(screen.getByRole("heading", { name: indexHeading, level: 1 })).toBeVisible();

    const uiFilter = browser.locator('.filter-pill[data-filter="ui-testing"]');
    await uiFilter.click();
    await expect(uiFilter).toHaveAttribute("aria-pressed", "true");
    await expect(browser.locator('[data-testtype="ui-testing"]').first()).toBeVisible();
    await expect(browser.locator('[data-testtype="api-testing"]').first()).toBeHidden();

    const frameworkPath = `/${locale}/guild/api-testing/postman/`;
    await app.open(`/${locale}/guild/`);
    const framework = browser.locator(`.fw-card[href="${frameworkPath}"]`);
    await expect(framework).toBeVisible();
    await expect(browser.locator(`.fw-card[href="${frameworkPath}"] .fw-card__name`)).toContainText("Postman");
    await framework.click();
    await expect(browser).toHaveURL(new RegExp(`${locale}/guild/api-testing/postman/`));
    await expect(browser.locator("#learning-path .article-card").first()).toBeVisible();
  });

  test(`${locale} Guild directory filters test types and restores the full catalog`, async ({ app, browser }) => {
    await app.open(`/${locale}/guild/`);

    for (const type of ["ui-testing", "api-testing", "performance-testing"] as const) {
      const filter = browser.locator(`.filter-pill[data-filter="${type}"]`);
      const selectedSection = browser.locator(`[data-testtype="${type}"]`);
      await filter.click();
      await expect(filter).toHaveAttribute("aria-pressed", "true");
      await expect(selectedSection).toBeVisible();
      const sections = await browser.evaluate(() =>
        Array.from(document.querySelectorAll("[data-testtype]")).map((item) => ({
          type: item.getAttribute("data-testtype"),
          hidden: item.hasAttribute("hidden"),
        })),
      );
      expect(sections.filter((section) => !section.hidden).map((section) => section.type)).toEqual([type]);
    }

    const allFilter = browser.locator('.filter-pill[data-filter="all"]');
    await allFilter.click();
    await expect(allFilter).toHaveAttribute("aria-pressed", "true");
    const visibleSections = await browser.evaluate(() =>
      Array.from(document.querySelectorAll("[data-testtype]")).filter((item) => !item.hasAttribute("hidden")).length,
    );
    expect(visibleSections).toBeGreaterThan(1);
  });
}

for (const locale of ["zh-cn", "en"] as const) {
  test(`${locale} Postman learning path filters a stage and opens its tutorial`, async ({ app, browser }) => {
    await app.open(`/${locale}/guild/api-testing/postman/`);
    const pills = browser.locator(".lp-pill");
    const allPill = pills.first();
    const filteredPill = pills.nth(1);
    const visibleTutorials = browser.locator(".stage-section:not([hidden]) .article-card");
    await expect(allPill).toHaveAttribute("class", /lp-pill--active/);
    const allTutorialCount = await visibleTutorials.count();
    expect(allTutorialCount).toBeGreaterThan(0);

    await filteredPill.click();
    await expect(filteredPill).toHaveAttribute("class", /lp-pill--active/);
    const filteredTutorialCount = await visibleTutorials.count();
    expect(filteredTutorialCount).toBeGreaterThan(0);
    expect(filteredTutorialCount).toBeLessThan(allTutorialCount);

    await allPill.click();
    await expect(allPill).toHaveAttribute("class", /lp-pill--active/);
    expect(await visibleTutorials.count()).toBe(allTutorialCount);

    await filteredPill.click();
    const tutorial = visibleTutorials.first();
    const href = await tutorial.getAttribute("href");
    await tutorial.click();
    await expect(browser).toHaveURL(new RegExp(`/${locale}/guild/api-testing/postman/.+/`));
    await expect(browser.locator(".guild-content")).toBeVisible();
    expect(href).toContain(`/${locale}/guild/api-testing/postman/`);
  });
}

for (const item of [
  { locale: "zh-cn", title: "Playwright MCP：用 AI Agent 探索浏览器并沉淀测试" },
  { locale: "en", title: "Playwright MCP: Agent-Assisted Browser Exploration" },
] as const) {
  test(`${item.locale} Playwright MCP tutorial keeps the localized setup guidance`, async ({ app, browser }) => {
    await app.open(`/${item.locale}/guild/ui-testing/playwright/mcp-agent-browser-automation/`);
    await expect(browser.locator("h1")).toContainText(item.title);
    await expect(browser.locator(".guild-content")).toContainText("@playwright/mcp@latest");
    await expect(browser.locator(".guild-content")).toContainText("Playwright MCP");
  });
}

for (const locale of ["zh-cn", "en"] as const) {
  test(`${locale} Postman directory exposes its demo starter repository`, async ({ app, browser }) => {
    await app.open(`/${locale}/guild/api-testing/postman/`);
    const demoLink = browser.locator(".fw-link--primary");
    await expect(demoLink).toBeVisible();
    await expect(demoLink).toHaveAttribute("href", "https://github.com/Automation-Test-Starter/Postman-API-Test-Starter");
    await expect(demoLink).toHaveAttribute("target", "_blank");
    await expect(demoLink).toHaveAttribute("rel", /noopener/);
  });

  for (const framework of [
    { category: "ui-testing", slug: "playwright", count: 6 },
    { category: "ui-testing", slug: "selenium", count: 5 },
    { category: "ui-testing", slug: "cypress", count: 5 },
    { category: "performance-testing", slug: "jmeter", count: 5 },
  ] as const) {
    test(`${locale} ${framework.slug} directory count matches its article list and first tutorial opens`, async ({ app, browser }) => {
      const frameworkPath = `/${locale}/guild/${framework.category}/${framework.slug}/`;
      await app.open(frameworkPath);
      const stat = browser.locator(".fw-stat__value").first();
      const count = Number((await stat.textContent())?.trim());
      expect(count).toBe(framework.count);
      const articles = browser.locator("#learning-path .article-card");
      await expect(articles).toHaveCount(count);
      const firstArticle = articles.first();
      const href = await firstArticle.getAttribute("href");
      expect(href).toMatch(new RegExp(`^/${locale}/guild/${framework.category}/${framework.slug}/.+/$`));
      await firstArticle.click();
      await expect(browser).toHaveURL(new RegExp(`/${locale}/guild/${framework.category}/${framework.slug}/.+/$`));
      await expect(browser.locator(".guild-content")).toBeVisible();
      await expect(browser.locator(".guild-content")).not.toContainText(/\bDemo\b/);

      for (const directoryPath of [`/${locale}/guild/`, `/${locale}/guild/${framework.category}/`]) {
        await app.open(directoryPath);
        const directoryCount = await browser.locator(`.fw-card[href="${frameworkPath}"] .fw-card__count`).textContent();
        expect(Number(directoryCount?.match(/\d+/)?.[0])).toBe(count);
      }
    });
  }
}
