import { test, expect } from "@playwright/test";

test.describe("zenix homepage exploration", () => {
  for (const lang of ["zh-cn", "en"] as const) {
    test(`${lang} home shows hero, explore grid, latest posts`, async ({
      page,
      baseURL,
    }) => {
      await page.goto(`${baseURL}/${lang}/`);
      await expect(page.locator(".home-hero")).toBeVisible();
      await expect(page.locator("[data-home-task]")).toHaveCount(6);
      await expect(page.locator("[data-home-capability]")).toHaveCount(3);
      await expect(page.locator("[data-home-example]")).toHaveCount(3);
      await expect(page.locator(".home-explore-grid")).toBeVisible();
      await expect(page.locator(".home-latest-posts")).toBeVisible();
      // zh 比 en 多一张 blog 卡（en 的 wiki 语义由 AIWiki 卡覆盖）
      await expect(page.locator(".home-explore-grid .home-card")).toHaveCount(
        lang === "zh-cn" ? 7 : 6,
      );
      await expect(page.locator(".home-prompts")).toBeVisible();
      await expect(page.locator(".home-projects")).toBeVisible();
      await expect(page.locator(".home-tags .tags-container")).toBeVisible();
      await expect(page.locator(".home-tags .home-chip").first()).toBeVisible();
      await expect(page.locator(".home-grid").first()).toBeVisible();
    });
  }
});

test.describe("home information architecture", () => {
  test("hero CTAs link to blog and wiki entries", async ({ page, baseURL }) => {
    for (const [lang, wikiPath] of [["zh-cn", "/zh-cn/wiki/"], ["en", "/en/AIWiki/"]] as const) {
      await page.goto(`${baseURL || ""}/${lang}/`);
      const ctas = page.locator(".home-hero__ctas a");
      await expect(ctas).toHaveCount(2);
      await expect(ctas.nth(0)).toHaveAttribute("href", `/${lang}/blog/`);
      await expect(ctas.nth(1)).toHaveAttribute("href", wikiPath);
    }
  });

  test("proof section keeps readable spacing between title and introduction", async ({ page, baseURL }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${baseURL || ""}/zh-cn/`);
    const spacing = await page.locator("[data-home-example]").first().evaluate((example) => {
      const section = example.closest("section");
      const title = section?.querySelector(".home-band__title")?.getBoundingClientRect();
      const intro = section?.querySelector(".home-band__subtitle")?.getBoundingClientRect();
      return title && intro
        ? {
            gap: Math.round(intro.top - title.bottom),
            centerOffset: Math.round(Math.abs((intro.left + intro.right) / 2 - window.innerWidth / 2)),
          }
        : { gap: 0, centerOffset: 999 };
    });
    expect(spacing.gap).toBeGreaterThanOrEqual(18);
    expect(spacing.centerOffset).toBeLessThanOrEqual(2);
  });


  test("new homepage sections keep the shared centered content layout", async ({ page, baseURL }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${baseURL || ""}/zh-cn/`);

    const layout = await page.locator(".home-task-navigator .home-inner").evaluate((element) => {
      const rect = element.getBoundingClientRect();
      const title = element.querySelector(".home-band__title");
      return {
        width: Math.round(rect.width),
        left: Math.round(rect.left),
        right: Math.round(window.innerWidth - rect.right),
        titleSize: title ? getComputedStyle(title).fontSize : "",
      };
    });

    expect(layout.width).toBeLessThanOrEqual(1120);
    expect(Math.abs(layout.left - layout.right)).toBeLessThanOrEqual(2);
    expect(layout.titleSize).toBe("34px");
  });
});
