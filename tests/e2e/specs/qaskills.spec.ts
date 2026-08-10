import { test, expect } from "@playwright/test";

test.describe("QA Skills", () => {
  for (const locale of ["zh-cn", "en"] as const) {
    test(`${locale} index guides selection before the full catalog`, async ({ page }) => {
      await page.goto(`/${locale}/qaskills/`);

      await expect(page.locator("[data-starter-path]")).toHaveCount(3);
      await expect(page.locator("[data-recommended-skill]")).toHaveCount(6);
      await expect(page.locator("#qaskills-results")).toContainText(/\d+/);

      const evalsFilter = page.locator('[data-evals-toggle="1"]');
      await expect(evalsFilter).toHaveAttribute("aria-pressed", "false");
      await evalsFilter.click();
      await expect(evalsFilter).toHaveAttribute("aria-pressed", "true");
      await expect(page.locator("#qaskills-results")).toContainText(/\d+/);
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

  test("detail shows Guide section, raw SKILL tab, and install panel", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/api-testing/");
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
