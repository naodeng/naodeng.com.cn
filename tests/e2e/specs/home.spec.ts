import { test, expect } from "@playwright/test";

test.describe("zenix homepage exploration", () => {
  for (const lang of ["zh-cn", "en"] as const) {
    test(`${lang} home shows five sections, explore hub, latest posts`, async ({
      page,
      baseURL,
    }) => {
      await page.goto(`${baseURL}/${lang}/`);
      await expect(page.locator(".home-hero")).toBeVisible();
      await expect(page.locator("[data-home-task]")).toHaveCount(6);
      await expect(page.locator("[data-home-capability]")).toHaveCount(3);
      await expect(page.locator("[data-home-example]")).toHaveCount(0);
      await expect(page.locator(".home-latest-posts")).toBeVisible();
      await expect(page.locator(".home-explore-hub .home-explore-grid")).toBeVisible();
      // zh 比 en 多一张 wiki 卡（wiki 为中文专属内容）
      await expect(page.locator(".home-explore-grid .home-card")).toHaveCount(
        lang === "zh-cn" ? 4 : 3,
      );
      await expect(page.locator(`.home-product-link[href='/${lang}/dsh-qa/']`)).toBeVisible();
      await expect(page.locator(`.home-product-link[href='/${lang}/ai-test-auditor/']`)).toBeVisible();
      if (lang === "zh-cn") {
        await expect(page.locator("#home-product-links-title")).toHaveText("产品官网");
        await expect(page.locator(".home-product-link strong").nth(0)).toHaveText("DSH-QA");
        await expect(page.locator(".home-product-link strong").nth(1)).toHaveText("AI test audit");
        await expect(page.getByText("Product sites", { exact: true })).toHaveCount(0);
        await expect(page.getByText("Explore the products behind the work", { exact: true })).toHaveCount(0);
        await expect(page.locator(".task-card__chip").filter({ hasText: "技能" }).first()).toBeVisible();
      }
      await expect(page.locator(".home-post-list > li")).toHaveCount(4);
      await expect(page.locator(".home-grid").first()).toBeVisible();
      // 五段式收敛后，旧独立长区块不再存在
      for (const gone of [
        ".home-prompts",
        ".home-qaskills",
        ".home-projects",
        ".home-guild",
        ".home-wiki",
        ".home-aiwiki",
        ".home-tags",
      ]) {
        await expect(page.locator(gone)).toHaveCount(0);
      }
    });

    test(`${lang} home cards use semantic Material Icons`, async ({
      page,
      baseURL,
    }) => {
      await page.goto(`${baseURL}/${lang}/`);

      const cardGroups = [
        page.locator("[data-home-task]"),
        page.locator("[data-home-capability]"),
        page.locator(".home-explore-grid .home-card"),
      ];

      for (const cards of cardGroups) {
        const count = await cards.count();
        expect(count).toBeGreaterThan(0);
        await expect(cards.locator(".material-icons-sharp")).toHaveCount(count);
      }
    });
  }
});

test.describe("home information architecture", () => {
  test("hero directs visitors to one task entry and one resource-library entry", async ({ page, baseURL }) => {
    const expectations = [
      { lang: "zh-cn", h1: "把测试任务变成可执行的下一步" },
      { lang: "en", h1: "Turn testing tasks into actionable next steps" },
    ] as const;
    for (const { lang, h1 } of expectations) {
      await page.goto(`${baseURL || ""}/${lang}/`);
      await expect(page.locator("main .home-hero h1")).toHaveText(h1);
      const ctas = page.locator(".home-hero__ctas a");
      await expect(ctas).toHaveCount(2);
      await expect(ctas.nth(0)).toHaveAttribute("href", "#home-task-navigator");
      await expect(ctas.nth(0)).toHaveClass(/pill-cta--primary/);
      await expect(ctas.nth(1)).toHaveAttribute("href", `/${lang}/qaskills/`);
      await expect(ctas.nth(1)).toHaveClass(/pill-cta--ghost/);
      await expect(page.locator(".home-primary-modes")).toHaveCount(0);
    }
  });

  test("hero exposes three topical entry points in both locales", async ({ page, baseURL }) => {
    for (const lang of ["zh-cn", "en"] as const) {
      await page.goto(`${baseURL || ""}/${lang}/`);
      const topics = page.locator(".hero-topic-map a");
      await expect(page.locator(".home-hero .hero-topic-map")).toBeVisible();
      await expect(topics).toHaveCount(3);
      await expect(topics.nth(0)).toBeVisible();
      await expect(topics.nth(1)).toBeVisible();
      await expect(topics.nth(2)).toBeVisible();
    }
  });

  test("five top-level sections appear in expected order", async ({ page, baseURL }) => {
    await page.goto(`${baseURL || ""}/zh-cn/`);
    const classes = await page
      .locator(".home-page > section")
      .evaluateAll((els) => els.map((el) => [...el.classList]));
    const find = (cls: string) => classes.findIndex((list) => list.includes(cls));
    expect(find("home-hero")).toBeGreaterThanOrEqual(0);
    expect(find("home-task-navigator")).toBeGreaterThan(find("home-hero"));
    expect(find("home-capability-guide")).toBeGreaterThan(find("home-task-navigator"));
    expect(find("home-latest-posts")).toBeGreaterThan(find("home-capability-guide"));
    expect(find("home-explore-hub")).toBeGreaterThan(find("home-latest-posts"));
  });

  test("section headings keep readable spacing and centered alignment", async ({ page, baseURL }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${baseURL || ""}/zh-cn/`);
    const spacing = await page.locator(".home-task-navigator .home-section-heading").evaluate((heading) => {
      const title = heading.querySelector(".home-band__title")?.getBoundingClientRect();
      const intro = heading.querySelector(".home-band__subtitle")?.getBoundingClientRect();
      return title && intro
        ? {
            gap: Math.round(intro.top - title.bottom),
            centerOffset: Math.round(Math.abs((intro.left + intro.right) / 2 - window.innerWidth / 2)),
          }
        : { gap: 0, centerOffset: 999 };
    });
    expect(spacing.gap).toBeGreaterThanOrEqual(8);
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
        cardTitleSize: getComputedStyle(element.querySelector(".task-card h3")!).fontSize,
        heroTitleSize: getComputedStyle(document.querySelector(".home-hero h1")!).fontSize,
      };
    });

    // Astro editorial layout: 92vw at a 1440px viewport rounds to 1325px.
    expect(layout.width).toBe(1325);
    expect(Math.abs(layout.left - layout.right)).toBeLessThanOrEqual(2);
    // Section headings sit clearly between the hero and the task-card titles.
    const sectionSize = parseFloat(layout.titleSize);
    expect(sectionSize).toBeGreaterThan(parseFloat(layout.cardTitleSize) * 1.5);
    expect(parseFloat(layout.heroTitleSize)).toBeGreaterThan(sectionSize * 1.5);
  });

  test("Proofline home hero uses a signal rail without decorative gradient or blur", async ({ page, baseURL }) => {
    await page.goto(`${baseURL || ""}/en/`);
    const styles = await page.locator(".home-hero").evaluate((element) => {
      const cs = getComputedStyle(element);
      return { backgroundImage: cs.backgroundImage, backdropFilter: cs.backdropFilter };
    });
    expect(styles.backgroundImage).toBe("none");
    expect(styles.backdropFilter).toBe("none");
  });

  test("task navigator uses a compact two-column desktop list and one mobile column", async ({ page, baseURL }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${baseURL || ""}/zh-cn/`);
    const desktopColumns = await page.locator(".task-grid").evaluate((element) =>
      getComputedStyle(element).gridTemplateColumns.split(" ").length,
    );
    expect(desktopColumns).toBe(2);

    await page.setViewportSize({ width: 390, height: 844 });
    await expect(page.locator(".task-grid")).toHaveCSS("grid-template-columns", /.+/);
    const columns = await page.locator(".task-grid").evaluate((element) =>
      getComputedStyle(element).gridTemplateColumns.split(" ").length,
    );
    expect(columns).toBe(1);
  });
});
