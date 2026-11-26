import { test } from "@e2e-dev/web";
import { expect } from "e2e";

for (const item of [
  { locale: "zh-cn", title: /先说你要完成什么/ },
  { locale: "en", title: /Start with the task/i },
] as const) {
  test(`${item.locale} prompt homepage points from task discovery to the full library`, async ({ app, browser, screen }) => {
    await app.open(`/${item.locale}/prompts/`);

    await expect(screen.getByRole("heading", { name: item.title, level: 1 })).toBeVisible();
    await expect(browser.locator("[data-prompt-task]")).toHaveCount(14);
    await expect(browser.locator("[data-prompt-area]")).toHaveCount(10);
    await expect(browser.locator("#ai-output-notice")).toBeVisible();
    await expect(browser.locator(".prompt-outline-link")).toHaveAttribute("href", `/${item.locale}/prompts/all/`);
    await expect(browser.locator("[data-featured-prompt]").first()).toHaveAttribute(
      "href",
      new RegExp(`/${item.locale}/prompts/`),
    );
  });
}

for (const item of [
  { locale: "en", query: "performance result analysis", title: /Performance Result Analysis/i },
  { locale: "zh-cn", query: "性能结果分析", title: /性能结果分析/ },
] as const) {
  test(`${item.locale} prompt explorer searches the matching prompt, then filters by area`, async ({ app, browser }) => {
    await app.open(`/${item.locale}/prompts/all/`);
    const search = browser.locator("#prompt-explorer-search");
    await expect(search).toBeVisible();
    expect(await browser.locator("[data-prompt-card]").count()).toBeGreaterThan(0);

    await search.fill(item.query);
    await expect(browser.locator("[data-prompt-card]:not([hidden])")).toHaveCount(1);
    await expect(browser.locator("[data-prompt-card]:not([hidden]) h2")).toContainText(item.title);
    if (item.locale === "en") {
      await expect(browser).toHaveURL(/q=performance(?:\+|%20)result(?:\+|%20)analysis/);
    } else {
      await expect(browser).toHaveURL(new RegExp(`q=${encodeURIComponent(item.query)}`));
    }

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
}

for (const locale of ["en", "zh-cn"] as const) {
  test(`${locale} prompt explorer recovers from a query with no matching prompts`, async ({ app, browser }) => {
    await app.open(`/${locale}/prompts/all/`);
    const search = browser.locator("#prompt-explorer-search");
    await search.fill("zzzz-no-prompt-match");

    await expect(browser.locator("#prompt-explorer-empty")).toBeVisible();
    await expect(browser.locator("[data-prompt-card]:not([hidden])")).toHaveCount(0);

    await browser.locator("#prompt-clear-filters").click();
    await expect(search).toHaveValue("");
    await expect(browser.locator("#prompt-explorer-empty")).toBeHidden();
    expect(await browser.locator("[data-prompt-card]:not([hidden])").count()).toBeGreaterThan(0);
  });
}

test("mobile prompt quick searches are reachable and preserve the selected query", async ({ app, browser }) => {
  await browser.setViewport({ width: 390, height: 844 });

  for (const locale of ["zh-cn", "en"] as const) {
    await app.open(`/${locale}/prompts/`);
    const examples = browser.locator(".prompt-search-examples a");
    const sizes = await browser.evaluate(() =>
      Array.from(document.querySelectorAll(".prompt-search-examples a"), (element) => {
        const rect = element.getBoundingClientRect();
        return { width: rect.width, height: rect.height };
      }),
    );
    expect(sizes).toHaveLength(4);
    expect(Math.min(...sizes.map((size) => size.width)), `${locale} minimum width`).toBeGreaterThanOrEqual(44);
    expect(Math.min(...sizes.map((size) => size.height)), `${locale} minimum height`).toBeGreaterThanOrEqual(44);

    await examples.first().click();
    await expect(browser).toHaveURL(new RegExp(`/${locale}/prompts/all/\\?q=requirements$`));
    await expect(browser.locator("#prompt-explorer-search")).toHaveValue("requirements");
  }
});

test("localized prompt detail exposes variants, source, and related prompts", async ({ app, browser, screen }) => {
  await app.open("/en/prompts/test-strategy/");
  await browser.evaluate(() => {
    const testWindow = window as Window & {
      __e2eClipboard?: string;
      __e2eCopyFeedbackSeen?: boolean;
      __e2eCopyFeedbackObserver?: MutationObserver;
    };
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText: async (text: string) => { testWindow.__e2eClipboard = text; } },
    });
    testWindow.__e2eCopyFeedbackSeen = false;
    const copyText = document.querySelector(".prompt-copy-btn-text");
    if (!copyText) throw new Error("Prompt copy button text was not found");
    testWindow.__e2eCopyFeedbackObserver = new MutationObserver(() => {
      if (copyText.textContent?.trim() === "Copied!") {
        testWindow.__e2eCopyFeedbackSeen = true;
        testWindow.__e2eCopyFeedbackObserver?.disconnect();
      }
    });
    testWindow.__e2eCopyFeedbackObserver.observe(copyText, { childList: true, characterData: true, subtree: true });
  });
  await expect(screen.getByRole("heading", { name: "Test Strategy Prompt", level: 1 })).toBeVisible();
  await expect(browser.locator(".prompt-at-a-glance")).toBeVisible();
  await expect(browser.locator(".prompt-variants a")).toHaveCount(4);
  const copyButton = browser.locator(".prompt-copy-btn");
  await expect(copyButton).toBeVisible();
  const rawPrompt = await copyButton.getAttribute("data-raw-content");
  expect(rawPrompt).toBeTruthy();
  await copyButton.click();
  const copyResult = await browser.evaluate(() => {
    const testWindow = window as Window & { __e2eClipboard?: string; __e2eCopyFeedbackSeen?: boolean };
    return {
      copiedPrompt: testWindow.__e2eClipboard ?? "",
      showedCopiedFeedback: testWindow.__e2eCopyFeedbackSeen === true,
    };
  });
  expect(copyResult.copiedPrompt).toBe(rawPrompt!);
  expect(copyResult.showedCopiedFeedback).toBe(true);
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
  for (const slug of ["test-case-writing", "workflows/daily"] as const) {
    test(`${locale} ${slug} prompt TOC supports keyboard navigation on mobile`, async ({ app, browser }) => {
      await browser.emulateMedia({ reducedMotion: "reduce" });
      await browser.setViewport({ width: 390, height: 844 });
      await app.open(`/${locale}/prompts/${slug}/`);

      const toc = browser.locator(".toc-details-mobile");
      await expect(toc).toBeVisible();
      await expect(toc).not.toHaveAttribute("open", "");
      const layout = await browser.evaluate(() => {
        const tocBounds = document.querySelector(".toc-details-mobile")!.getBoundingClientRect();
        const navigationBounds = document.querySelector(".prompt-detail-sidebar, .workflow-sidebar-left")!.getBoundingClientRect();
        return { tocTop: tocBounds.top, navigationBottom: navigationBounds.bottom };
      });
      expect(layout.tocTop).toBeGreaterThanOrEqual(layout.navigationBottom);
      const summary = browser.locator(".toc-details-mobile summary");
      await summary.press("Enter");
      await expect(toc).toHaveAttribute("open", "");
      const link = browser.locator(".toc-details-mobile a").nth(1);
      const href = await link.getAttribute("href");
      await link.press("Enter");
      expect(decodeURIComponent(new URL(await browser.url()).hash)).toBe(href);
      const topOffset = await browser.evaluate((fragment) => {
        const target = document.getElementById(decodeURIComponent(fragment!.slice(1)));
        const header = document.querySelector(".l-header")?.getBoundingClientRect().bottom ?? 0;
        return (target?.getBoundingClientRect().top ?? -1) - header;
      }, href);
      expect(topOffset).toBeGreaterThanOrEqual(-1);
      const widths = await browser.evaluate(() => ({ client: document.documentElement.clientWidth, scroll: document.documentElement.scrollWidth }));
      expect(widths.scroll).toBeLessThanOrEqual(widths.client + 1);
    });
  }
}
