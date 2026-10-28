import { test } from "@e2e-dev/web";
import { expect } from "e2e";

for (const locale of ["zh-cn", "en"] as const) {
  test(`${locale} QA Skills directory searches and filters the catalog`, async ({ app, browser }) => {
    await app.open(`/${locale}/qaskills/`);

    await expect(browser.locator("[data-qaskills-directory]")).toBeVisible();
    await expect(browser.locator("[data-recommended-skill]")).toHaveCount(6);
    await expect(browser.locator("#qaskills-search")).toBeVisible();
    expect(await browser.locator("a.card[data-slug]").count()).toBeGreaterThan(0);

    await browser.locator("#qaskills-search").fill("API");
    await expect(browser.locator("#qaskills-results")).toContainText(/\d+/);
    await expect(browser.locator('a.card[data-slug="api-testing"]')).toBeVisible();
    await expect(browser.locator("[data-qaskills-default-only]").first()).toBeHidden();

    await browser.locator("#qaskills-search").fill("zzzz-no-skill-match");
    await expect(browser.locator("#qaskills-empty")).toBeVisible();
    await browser.locator("#qaskills-clear").click();
    await expect(browser.locator("#qaskills-search")).toHaveValue("");
    await expect(browser.locator("#qaskills-empty")).toBeHidden();
  });
}

test("QA Skills category and lifecycle filters combine before opening the matching detail", async ({ app, browser }) => {
  await app.open("/zh-cn/qaskills/");
  await browser.locator(".more-filter-details > summary").click();
  await browser.locator('[data-filter="type"]').click();
  await expect(browser.locator('a.card[data-slug="requirements-analysis"]')).toBeVisible();
  const lifecycle = browser.locator('[data-lifecycle-filter="requirements-strategy"]');
  await lifecycle.click();
  await expect(browser.locator('a.card[data-slug="requirements-analysis"]')).toBeVisible();
  await expect(browser.locator('a.card[data-slug="api-testing"]')).toBeHidden();
  await browser.locator('a.card[data-slug="requirements-analysis"]').click();

  await expect(browser).toHaveURL(/\/zh-cn\/qaskills\/requirements-analysis\/?$/);
  await expect(browser.locator("#section-problem")).toContainText("验收标准无法直接验证");
  await expect(browser.locator("#quick-start")).toBeVisible();
  await browser.locator('[data-locale-trigger]').first().click();
  await browser.locator('[data-locale-option][data-lang="en"]').first().click();
  await expect(browser).toHaveURL(/\/en\/qaskills\/requirements-analysis\/?$/);
  await expect(browser.locator("#quick-start")).toBeVisible();
});

for (const item of [
  { locale: "zh-cn", useLabel: "立即使用" },
  { locale: "en", useLabel: "Use now" },
] as const) {
  test(`${item.locale} QA Skill detail exposes source instructions and its install path`, async ({ app, browser, screen }) => {
    await app.open(`/${item.locale}/qaskills/requirements-analysis/`);

    await expect(browser.locator(".skill-console")).toBeVisible();
    await expect(screen.getByRole("link", { name: item.useLabel })).toHaveAttribute("href", "#quick-start");
    await expect(browser.locator("#section-problem")).toBeVisible();
    await expect(browser.locator("#section-how-it-works")).toBeVisible();
    await expect(browser.locator("#npx-install-code")).toContainText("npx skills add");

    await screen.getByRole("link", { name: item.useLabel }).click();
    await expect(browser).toHaveURL(/#quick-start$/);
    await expect(browser.locator("#quick-start")).toBeVisible();
    await expect(browser.locator("#quick-start h2")).toContainText(/快速开始|Quick Start/i);
    await screen.getByRole("tab", { name: "SKILL.md" }).click();
    await expect(browser.locator("[data-doc-panel='skill'] .skill-raw")).toContainText("name: requirements-analysis");
  });
}
