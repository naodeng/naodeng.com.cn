import { expect, test } from "@playwright/test";

const indexRoutes = [
  "/zh-cn/wiki/",
  "/zh-cn/AIWiki/",
  "/en/AIWiki/",
  "/zh-cn/ai-native-qa-weekly/",
  "/en/ai-native-qa-weekly/",
];

for (const route of indexRoutes) {
  test(`${route} uses the full directory column without page overflow`, async ({ page }) => {
    for (const width of [375, 768, 1024, 1440, 1920]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(route);
      await expect(page.locator("main h1")).toBeVisible();
      const bounds = await page.evaluate(() => {
        const layout = document.querySelector(".l-docs")!.getBoundingClientRect();
        const content = document.querySelector(".docs-content")!.getBoundingClientRect();
        return {
          viewport: document.documentElement.clientWidth,
          page: document.documentElement.scrollWidth,
          unusedRight: layout.right - content.right,
        };
      });
      expect(bounds.page).toBeLessThanOrEqual(bounds.viewport + 1);
      expect(Math.abs(bounds.unusedRight)).toBeLessThanOrEqual(1);
      await expect(page.locator(".docs-toc-wrap")).toHaveCount(0);
      if (width < 900) {
        await expect(page.locator(".docs-sidebar-toggle")).toBeVisible();
        await expect(page.locator(".docs-sidebar-nav")).toBeHidden();
        await expect(page.locator("main h1")).toBeInViewport();
      }
    }
  });
}

for (const { route, query } of [
  { route: "/zh-cn/wiki/", query: "acceptance" },
  { route: "/zh-cn/AIWiki/", query: "agent" },
  { route: "/en/AIWiki/", query: "agent" },
]) {
  test(`${route} finds English terms and recovers both search controls`, async ({ page }) => {
    await page.goto(`${route}?q=${query}`);
    const search = page.locator(".wiki-search-input");
    await expect(search).toHaveValue(query);
    expect(await page.locator(".wiki-letter-link:visible").count()).toBeGreaterThan(0);
    const total = await page.locator(".wiki-letter-link").count();
    const sidebar = page.locator("#docs-sidebar-search-input");
    await sidebar.fill("zz-no-matching-proofline-term");
    await expect(page.locator(".wiki-search-empty")).toBeVisible();
    await expect(page.locator(".wiki-letter-link:visible")).toHaveCount(0);
    await expect(page.locator(".wiki-letter-index-link:visible")).toHaveCount(0);
    await page.locator(".wiki-search-empty button").click();
    await expect(search).toBeFocused();
    await expect(search).toHaveValue("");
    await expect(sidebar).toHaveValue("");
    await expect(page.locator(".wiki-letter-link:visible")).toHaveCount(total);
    await expect(page.locator(".docs-sidebar-link:visible")).toHaveCount(total + 1);
  });

  test(`${route} letter jumps stay visible below the sticky index`, async ({ page }) => {
    for (const width of [375, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(route);
      const letters = page.locator(".wiki-letter-index-link");
      const middleLetter = letters.nth(Math.floor(await letters.count() / 2));
      const target = (await middleLetter.getAttribute("href"))!;
      await middleLetter.focus();
      await page.keyboard.press("Enter");
      await expect(page).toHaveURL(new RegExp(`${target}$`));
      const distance = () => page.evaluate((id) => {
        const anchor = document.querySelector(id)!.getBoundingClientRect();
        const navigation = document.querySelector(".wiki-letter-index")!.getBoundingClientRect();
        return anchor.top - navigation.bottom;
      }, target);
      await expect.poll(distance).toBeGreaterThanOrEqual(8);
      await expect.poll(distance).toBeLessThanOrEqual(36);
      await expect(page.locator(`${target} .wiki-letter-title`)).toBeInViewport();
    }
  });
}
