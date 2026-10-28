import { test } from "@e2e-dev/web";
import { expect } from "e2e";

for (const item of [
  { locale: "zh-cn", title: /先说你要完成什么/ },
  { locale: "en", title: /Start with the task/i },
] as const) {
  test(`${item.locale} prompt homepage points from task discovery to the full library`, async ({ app, browser, screen }) => {
    await app.open(`/${item.locale}/prompts/`);

    await expect(screen.getByRole("heading", { name: item.title, level: 1 })).toBeVisible();
    await expect(browser.locator("[data-prompt-task]")).toHaveCount(13);
    await expect(browser.locator("[data-prompt-area]")).toHaveCount(10);
    await expect(browser.locator("#ai-output-notice")).toBeVisible();
    await expect(browser.locator(".prompt-outline-link")).toHaveAttribute("href", `/${item.locale}/prompts/all/`);
    await expect(browser.locator("[data-featured-prompt]").first()).toHaveAttribute(
      "href",
      new RegExp(`/${item.locale}/prompts/`),
    );
  });
}

test("prompt explorer finds the exact task, updates its query, then filters by area", async ({ app, browser }) => {
  await app.open("/en/prompts/all/");
  const search = browser.locator("#prompt-explorer-search");
  await expect(search).toBeVisible();
  expect(await browser.locator("[data-prompt-card]").count()).toBeGreaterThan(0);

  await search.fill("performance result analysis");
  await expect(browser.locator("[data-prompt-card]:not([hidden])")).toHaveCount(1);
  await expect(browser.locator("[data-prompt-card]:not([hidden]) h2")).toContainText("Performance Result Analysis");
  await expect(browser).toHaveURL(/q=performance\+result\+analysis|q=performance%20result%20analysis/);

  await browser.locator("#prompt-clear-filters").click();
  const areaFilter = browser.locator("#prompt-area-filter");
  const apiArea = await browser.evaluate(() => {
    const select = document.querySelector<HTMLSelectElement>("#prompt-area-filter");
    return Array.from(select?.options ?? []).find((option) => /api|接口/i.test(option.textContent ?? ""))?.value ?? null;
  });
  expect(apiArea).toBeTruthy();
  await areaFilter.selectOption({ value: apiArea! });
  await expect(browser).toHaveURL(/area=api-integration/);
  expect(await browser.locator("[data-prompt-card]:not([hidden])").count()).toBeGreaterThan(1);
  await expect(browser.locator("[data-prompt-card]:not([hidden])").first()).toHaveAttribute("data-area", "api-integration");
});

test("localized prompt detail exposes variants, source, and related prompts", async ({ app, browser, screen }) => {
  await app.open("/en/prompts/test-strategy/");
  await browser.evaluate(() => {
    const testWindow = window as Window & { __e2eClipboard?: string };
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText: async (text: string) => { testWindow.__e2eClipboard = text; } },
    });
  });
  await expect(screen.getByRole("heading", { name: "Test Strategy Prompt", level: 1 })).toBeVisible();
  await expect(browser.locator(".prompt-at-a-glance")).toBeVisible();
  await expect(browser.locator(".prompt-variants a")).toHaveCount(4);
  const copyButton = browser.locator(".prompt-copy-btn");
  await expect(copyButton).toBeVisible();
  const rawPrompt = await copyButton.getAttribute("data-raw-content");
  expect(rawPrompt).toBeTruthy();
  await copyButton.click();
  await expect(copyButton).toContainText("Copied!");
  const copiedPrompt = await browser.evaluate(() => (window as Window & { __e2eClipboard?: string }).__e2eClipboard ?? "");
  expect(copiedPrompt).toBe(rawPrompt!);
  await expect(browser.locator(".prompt-source-link")).toHaveAttribute(
    "href",
    /github\.com\/naodeng\/awesome-qa-prompt\/blob\/main\/testing-types\//,
  );
  await expect(browser.locator("#prompt-workflow-heading")).toBeVisible();
  await expect(browser.locator("[data-related-prompt]")).toHaveCount(6);

  await app.open("/zh-cn/prompts/test-strategy-Mobile/");
  await expect(screen.getByRole("heading", { name: "测试策略 Prompt - 移动端版", level: 1 })).toBeVisible();
  await expect(browser.locator(".prompt-variants a.is-current")).toContainText("移动端");
  await expect(browser.locator(".prompt-related-prompts")).toBeVisible();
  await browser.locator("[data-related-prompt]").first().click();
  await expect(browser).toHaveURL(/\/zh-cn\/prompts\/[^/]+\/$/);
});

for (const locale of ["en", "zh-cn"] as const) {
  test(`${locale} prompt detail TOC supports keyboard navigation on mobile`, async ({ app, browser }) => {
    await browser.emulateMedia({ reducedMotion: "reduce" });
    await browser.setViewport({ width: 390, height: 844 });
    await app.open(`/${locale}/prompts/test-case-writing/`);

    const toc = browser.locator(".toc-details-mobile");
    await expect(toc).toBeVisible();
    await expect(toc).not.toHaveAttribute("open", "");
    const summary = browser.locator(".toc-details-mobile summary");
    await summary.press("Enter");
    await expect(toc).toHaveAttribute("open", "");
    const link = browser.locator(".toc-details-mobile a").nth(1);
    const href = await link.getAttribute("href");
    await link.press("Enter");
    expect(await browser.url()).toBe(new URL(href!, await browser.url()).href);
    await expect(toc).not.toHaveAttribute("open", "");
  });
}
