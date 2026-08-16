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

  test("zh-cn index shows search and code-review card metadata", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/");
    await expect(page.locator("#qaskills-search")).toBeVisible();
    await expect(page.locator("#qaskills-empty")).toBeHidden();
    const card = page.locator('a.card[data-slug="code-review"]');
    await expect(card).toBeVisible();
    await expect(card.locator(".tag-evals")).toBeVisible();
  });

  test("catalog cards show when-to-use, input, output, and human review rows", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/");
    const card = page.locator('a.card[data-slug="requirements-analysis"]').first();
    await expect(card).toBeVisible();
    await expect(card.locator("[data-summary-when]")).not.toBeEmpty();
    await expect(card.locator("[data-summary-input]")).not.toBeEmpty();
    await expect(card.locator("[data-summary-output]")).not.toBeEmpty();
    await expect(card.locator("[data-summary-review]")).not.toBeEmpty();
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
    await expect(page.locator("#copy-quick-btn")).toBeVisible();
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
