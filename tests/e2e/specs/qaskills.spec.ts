import { test, expect } from "@playwright/test";

test.describe("QA Skills", () => {
  for (const locale of ["zh-cn", "en"] as const) {
    test(`${locale} index guides selection before the full catalog`, async ({ page }) => {
      await page.goto(`/${locale}/qaskills/`);

      await expect(page.locator("[data-starter-path]")).toHaveCount(3);
      await expect(page.locator("[data-recommended-skill]")).toHaveCount(6);
      await expect(page.locator("#qaskills-results")).toContainText(/\d+/);

      // 当前全量 skill 均含评测用例，筛选无区分度时不渲染 chip
      await expect(page.locator('[data-evals-toggle="1"]')).toHaveCount(0);
    });
  }

  for (const locale of ["zh-cn", "en"] as const) {
    test(`${locale} search state hides helper sections and surfaces results next to filters`, async ({ page }) => {
      await page.goto(`/${locale}/qaskills/`);

      const helpers = page.locator("[data-qaskills-default-only]");
      const assertHelpersVisible = async () => {
        const els = await helpers.all();
        expect(els.length).toBeGreaterThan(0);
        for (const el of els) await expect(el).toBeVisible();
      };
      const assertHelpersHidden = async () => {
        const els = await helpers.all();
        expect(els.length).toBeGreaterThan(0);
        for (const el of els) await expect(el).toBeHidden();
      };

      // 默认态：辅助区可见，目录紧跟筛选区
      await assertHelpersVisible();
      const domOrder = await page.evaluate(() => {
        const discovery = document.querySelector(".discovery");
        const categories = document.getElementById("categories");
        return discovery && categories ? discovery.nextElementSibling === categories : false;
      });
      expect(domOrder).toBe(true);

      // 搜索态：辅助区隐藏，可见结果紧邻搜索框
      const search = page.locator("#qaskills-search");
      await search.fill("API");
      await assertHelpersHidden();
      const firstCard = page.locator("a.card[data-slug]:visible").first();
      await expect(firstCard).toContainText(/api/i);
      await expect(page.locator("#qaskills-results")).toContainText(/\d+/);
      await expect(page.locator(".category-toggle[aria-expanded='true']").first()).toBeVisible();

      // 清空后辅助区恢复，焦点回到搜索框
      await search.fill("");
      await assertHelpersVisible();

      // 无匹配词：出现空状态与清空按钮，点击后恢复
      await search.fill("zzzz-no-match-qq");
      await expect(page.locator("#qaskills-empty")).toBeVisible();
      const clearBtn = page.locator("#qaskills-clear");
      await expect(clearBtn).toBeVisible();
      await clearBtn.click();
      await expect(search).toHaveValue("");
      await assertHelpersVisible();
      await expect(page.locator("#qaskills-empty")).toBeHidden();
      await expect(search).toBeFocused();
    });
  }

  test("zh-cn index shows search and a concise code-review card", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/");
    await expect(page.locator("#qaskills-search")).toBeVisible();
    await expect(page.locator("#qaskills-empty")).toBeHidden();
    const card = page.locator('a.card[data-slug="code-review"]');
    const category = page.locator(".category-block").filter({ has: card });
    await expect(category.locator(".category-toggle")).toHaveAttribute("aria-expanded", "false");
    await category.locator(".category-toggle").click();
    await expect(card).toBeVisible();
    await expect(card.locator("h5")).toBeVisible();
    await expect(card.locator(".card-intro")).toBeVisible();
    await expect(card.locator(".card-meta")).toHaveCount(0);
  });

  test("catalog cards show their README-aligned summary", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/");
    const card = page.locator('a.card[data-slug="requirements-analysis"]').first();
    await page.locator(".category-block").filter({ has: card }).locator(".category-toggle").click();
    await expect(card).toBeVisible();
    await expect(card.locator(".card-intro")).not.toBeEmpty();
  });

  test("primary filters reveal and apply README subcategory filters", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/");
    const typeFilter = page.locator('[data-filter="type"]');
    const secondary = page.locator("#qaskills-secondary-filters");

    await expect(secondary).toBeVisible();
    await typeFilter.click();
    await expect(secondary).toBeVisible();

    const requirements = secondary.locator('[data-parent-category="type"][data-secondary-filter*="需求发现与分析"]').first();
    await expect(requirements).toBeVisible();
    await requirements.click();
    await expect(page.locator('a.card[data-slug="requirements-analysis"]')).toBeVisible();
    await expect(page.locator('a.card[data-slug="api-testing"]')).toBeHidden();

    await page.locator("#qaskills-clear").click();
    await expect(secondary).toBeVisible();
  });

  test("catalog supports plus and lifecycle shortcuts as combinable discovery filters", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/");

    await page.locator('[data-filter="plus"]').click();
    await expect(page.locator('a.card[data-slug="test-strategy-plus"]')).toBeVisible();
    await expect(page.locator('a.card[data-slug="api-testing"]')).toBeHidden();

    await page.locator("#qaskills-clear").click();
    await page.locator('[data-lifecycle-filter="requirements-strategy"]').click();
    await expect(page.locator('a.card[data-slug="requirements-analysis"]')).toBeVisible();
    await expect(page.locator('a.card[data-slug="api-testing"]')).toBeHidden();
  });

  test("catalog cards keep the browsing view to title and concise description", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/");
    const card = page.locator('a.card[data-slug="requirements-analysis"]').first();
    await page.locator(".category-block").filter({ has: card }).locator(".category-toggle").click();

    await expect(card).toBeVisible();
    await expect(card.locator("h5")).toBeVisible();
    await expect(card.locator(".card-intro")).toBeVisible();
    await expect(card.locator(".card-meta")).toHaveCount(0);
    await expect(card.locator(".tag")).toHaveCount(0);
  });

  test("lifecycle filters stay compact and horizontally browsable on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/zh-cn/qaskills/#qaskills-search");
    const buttons = page.locator(".chips-lifecycle [data-lifecycle-filter]");
    const heights = await buttons.evaluateAll((elements) =>
      elements.map((element) => Math.round(element.getBoundingClientRect().height))
    );

    expect(heights.length).toBeGreaterThan(0);
    expect(Math.max(...heights)).toBeLessThanOrEqual(48);
  });

  test("secondary category filters do not collapse into vertical text on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/zh-cn/qaskills/#qaskills-search");
    const buttons = page.locator(".chips-secondary [data-secondary-filter]");
    const heights = await buttons.evaluateAll((elements) =>
      elements.map((element) => Math.round(element.getBoundingClientRect().height))
    );

    expect(heights.length).toBeGreaterThan(0);
    expect(Math.max(...heights)).toBeLessThanOrEqual(48);
  });

  test("detail shows Guide section, raw SKILL tab, and install panel", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/api-testing/", { waitUntil: "domcontentloaded" });
    await expect(page.getByRole("heading", { name: /何时使用|When to Use/ })).toBeVisible();
    await expect(page.locator("#skill-elevator")).toBeVisible();
    await page.getByRole("tab", { name: /SKILL\.md/i }).click();
    await expect(page.locator(".skill-raw")).toContainText("name: api-testing");
    await expect(page.locator("#copy-raw-skill-btn")).toBeVisible();
    await expect(page.locator("#install-section")).toBeVisible();
    await expect(page.locator("#installer-panel")).toBeVisible();
    await expect(page.locator("#npx-install-code")).toContainText("npx skills add");
    await expect(page.locator("#copy-quick-btn")).toBeVisible();
    await expect(page.locator(".related-card").first()).toBeVisible();
  });

  test("detail header prioritizes installation and keeps source as a secondary action", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/discover-testing/");
    const header = page.locator(".detail-header");
    await expect(header.locator(".detail-status-tags")).toBeVisible();
    await expect(header.locator(".detail-intro")).not.toBeEmpty();
    await expect(header.getByText(/工作流|Workflow/)).toBeVisible();
    await expect(header.getByText(/^Evals$/)).toBeVisible();
    await expect(header.locator(".detail-author")).toBeVisible();
    await expect(header.locator(".detail-updated")).toBeVisible();
  });

  test("detail page does not overflow horizontally on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/zh-cn/qaskills/requirements-analysis/");
    await expect(page.locator("#install-section")).toBeVisible();
    const metrics = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      codeCardWidth: Math.round(
        (document.querySelector(".code-card") as HTMLElement | null)?.getBoundingClientRect().width || 0,
      ),
    }));
    expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth + 1);
    expect(metrics.codeCardWidth).toBeGreaterThan(0);
    expect(metrics.codeCardWidth).toBeLessThanOrEqual(metrics.clientWidth);
  });

  test("index lifecycle path links to skill detail", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/");
    const section = page.locator("#lifecycle-path");
    await expect(section).toBeVisible();
    await expect(section.getByRole("heading", { name: "软件测试生命周期路径" })).toBeVisible();
    const link = section.locator('a.lifecycle-skill[data-slug="requirements-analysis"]');
    await expect(link).toBeVisible();
    await link.click();
    await expect(page).toHaveURL(/\/zh-cn\/qaskills\/requirements-analysis\/?/);
  });

  test("en index shows lifecycle path", async ({ page }) => {
    await page.goto("/en/qaskills/");
    const section = page.locator("#lifecycle-path");
    await expect(section).toBeVisible();
    await expect(
      section.getByRole("heading", { name: "Software Testing Lifecycle Path" })
    ).toBeVisible();
    await expect(
      section.locator('a.lifecycle-skill[data-slug="api-testing"]')
    ).toBeVisible();
  });
});
