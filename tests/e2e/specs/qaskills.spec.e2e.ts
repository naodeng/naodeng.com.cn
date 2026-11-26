import { test } from "@e2e-dev/web";
import { expect } from "e2e";
import { measureContrast } from "../support/wcag-contrast";

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

test("QA Skills category counts stay aligned with each visible result set", async ({ app, browser }) => {
  await app.open("/zh-cn/qaskills/");

  for (const category of ["all", "type", "workflow", "plus"] as const) {
    await browser.locator(`[data-filter="${category}"]`).click();
    const state = await browser.evaluate(() => {
      const selected = document.querySelector(".filter-option.is-active[data-filter]");
      const cards = [...document.querySelectorAll("a.card[data-slug]")];
      const visibleCount = cards.filter((card) => !card.closest("li")?.hasAttribute("hidden")).length;
      const resultCount = Number(document.querySelector("#qaskills-results")?.textContent?.match(/\d+/)?.[0] || -1);
      return {
        selected: selected?.getAttribute("data-filter"),
        pressed: selected?.getAttribute("aria-pressed"),
        displayedCount: Number(selected?.querySelector("span:last-child")?.textContent || -1),
        visibleCount,
        resultCount,
      };
    });

    expect(state.selected).toBe(category);
    expect(state.pressed).toBe("true");
    expect(state.displayedCount).toBe(state.visibleCount);
    expect(state.resultCount).toBe(state.visibleCount);
  }
});

test("QA Skills secondary and lifecycle facet counts follow the current search", async ({ app, browser }) => {
  await app.open("/zh-cn/qaskills/");
  await browser.locator("#qaskills-search").fill("API");
  await expect(browser.locator('a.card[data-slug="api-testing"]')).toBeVisible();
  await browser.locator(".more-filter-details > summary").click();

  const groupSummaries = browser.locator("#qaskills-secondary-filters [data-secondary-group] > summary");
  for (let index = 0; index < await groupSummaries.count(); index += 1) {
    const summary = groupSummaries.nth(index);
    if (await summary.isVisible()) await summary.click();
  }

  const facets = await browser.evaluate(() => {
    const visibleCards = [...document.querySelectorAll("a.card[data-slug]")].filter(
      (card) => !card.closest("li")?.hasAttribute("hidden"),
    );
    const readCount = (button: Element) => Number(button.querySelector("[data-filter-count]")?.textContent || -1);
    const secondary = Array.from(document.querySelectorAll("[data-secondary-filter]:not([hidden])")).map((button) => {
      const key = button.getAttribute("data-secondary-filter");
      const actual = visibleCards.filter((card) => card.getAttribute("data-secondary-category") === key).length;
      return { displayed: readCount(button), actual };
    });
    const lifecycle = Array.from(document.querySelectorAll("[data-lifecycle-filter]")).map((button) => {
      const stage = button.getAttribute("data-lifecycle-filter") || "";
      const actual = visibleCards.filter((card) =>
        (card.getAttribute("data-lifecycle-stages") || "").split(" ").includes(stage),
      ).length;
      return { displayed: readCount(button), actual };
    });
    const result = Number(document.querySelector("#qaskills-results")?.textContent?.match(/\d+/)?.[0] || -1);
    return { secondary, lifecycle, result };
  });

  expect(facets.result).toBeGreaterThan(0);
  expect(facets.secondary.length).toBeGreaterThan(0);
  expect(facets.secondary.every(({ displayed, actual }) => displayed === actual)).toBe(true);
  expect(facets.lifecycle.every(({ displayed, actual }) => displayed === actual)).toBe(true);
});

test("QA Skills subcategory filters refine and clear the selected category", async ({ app, browser }) => {
  await app.open("/zh-cn/qaskills/");
  const secondaryFilters = browser.locator("#qaskills-secondary-filters");
  await expect(secondaryFilters).toBeHidden();
  await browser.locator(".more-filter-details > summary").click();
  await browser.locator('[data-filter="type"]').click();
  await expect(secondaryFilters).toBeVisible();

  const targetCard = browser.locator('a.card[data-slug="requirements-analysis"]');
  const subcategory = await targetCard.getAttribute("data-secondary-category");
  expect(subcategory).toBeTruthy();
  const groupSummaries = browser.locator("#qaskills-secondary-filters [data-secondary-group] > summary");
  for (let index = 0; index < await groupSummaries.count(); index += 1) {
    const summary = groupSummaries.nth(index);
    if (await summary.isVisible()) await summary.click();
  }

  const subcategoryFilter = browser.locator(`#qaskills-secondary-filters [data-secondary-filter="${subcategory}"]`);
  await expect(subcategoryFilter).toBeVisible();
  await subcategoryFilter.click();
  await expect(targetCard).toBeVisible();
  await expect(browser.locator('a.card[data-slug="api-testing"]')).toBeHidden();

  await browser.locator('[data-filter="workflow"]').click();
  await expect(browser.locator('[data-filter="workflow"]')).toHaveAttribute("aria-pressed", "true");
  await expect(browser.locator("#qaskills-secondary-filters [data-secondary-filter].is-active")).toHaveCount(0);
  await expect(browser.locator("#qaskills-results")).toContainText(/\d+/);

  await browser.locator("#qaskills-clear").click();
  await expect(browser.locator('[data-filter="all"]')).toHaveAttribute("aria-pressed", "true");
  await expect(targetCard).toBeVisible();
  await expect(browser.locator('a.card[data-slug="api-testing"]')).toBeVisible();
});

test("QA Skills plus and lifecycle filters expose matching and unavailable states", async ({ app, browser }) => {
  await app.open("/zh-cn/qaskills/");
  await browser.locator(".more-filter-details > summary").click();
  await browser.locator('[data-filter="plus"]').click();

  const incompatibleStage = browser.locator('[data-lifecycle-filter="functional-compatibility"]');
  const compatibleStage = browser.locator('[data-lifecycle-filter="requirements-strategy"]');
  await expect(incompatibleStage).toHaveAttribute("disabled", "");
  await expect(compatibleStage).not.toHaveAttribute("disabled", "");
  await compatibleStage.click();
  await expect(browser.locator('a.card[data-slug="test-strategy-plus"]')).toBeVisible();
  await expect(browser.locator('a.card[data-slug="api-testing"]')).toBeHidden();

  await browser.locator("#qaskills-clear").click();
  await expect(browser.locator('[data-filter="all"]')).toHaveAttribute("aria-pressed", "true");
  await expect(incompatibleStage).not.toHaveAttribute("disabled", "");
});

test("QA Skills lifecycle filters remain readable and reachable on mobile", async ({ app, browser }) => {
  await browser.emulateMedia({ reducedMotion: "reduce" });
  await browser.setViewport({ width: 390, height: 844 });

  for (const locale of ["zh-cn", "en"] as const) {
    await app.open(`/${locale}/qaskills/#qaskills-search`);
    await browser.evaluate(() => {
      const style = document.createElement("style");
      style.textContent = "*, *::before, *::after { transition: none !important; }";
      document.head.append(style);
    });
    await browser.locator(".more-filter-details > summary").click();

    const heights = await browser.evaluate(() =>
      Array.from(document.querySelectorAll(".chips-lifecycle [data-lifecycle-filter]"), (element) =>
        Math.round(element.getBoundingClientRect().height),
      ),
    );
    expect(heights.length, `${locale} lifecycle filters exist`).toBeGreaterThan(0);
    expect(Math.min(...heights), `${locale} minimum touch target`).toBeGreaterThanOrEqual(44);
    expect(Math.max(...heights), `${locale} compact layout`).toBeLessThanOrEqual(48);

    for (const theme of ["light", "dark"] as const) {
      await browser.evaluate((value) => { document.documentElement.dataset.theme = value; }, theme);
      const selector = '[data-lifecycle-filter="requirements-strategy"] [data-filter-label]';
      const filter = browser.locator('[data-lifecycle-filter="requirements-strategy"]');
      const label = await browser.evaluate(measureContrast, selector);
      expect(label.missing, `${locale} ${theme} label exists`).toBe(false);
      expect(label.fontSize ?? 0, `${locale} ${theme} label size`).toBeGreaterThanOrEqual(14);
      expect(label.ratio ?? 0, `${locale} ${theme} label contrast`).toBeGreaterThanOrEqual(label.threshold ?? 100);

      await filter.click();
      await expect(filter).toHaveAttribute("aria-pressed", "true");
      const selected = await browser.evaluate(measureContrast, selector);
      expect(selected.ratio ?? 0, `${locale} ${theme} selected contrast`).toBeGreaterThanOrEqual(selected.threshold ?? 100);
      await filter.click();
      await expect(filter).toHaveAttribute("aria-pressed", "false");
    }
  }
});

for (const locale of ["en", "zh-cn"] as const) {
  for (const slug of ["negative-scenario-discovery", "manual-testing"] as const) {
    test(`${locale}/${slug} keeps long skill steps within a phone viewport`, async ({ app, browser }) => {
      await browser.setViewport({ width: 1440, height: 900 });
      await app.open(`/${locale}/qaskills/${slug}/`);
      await browser.setViewport({ width: 390, height: 900 });
      expect(await browser.locator(".how-it-works li").count()).toBeGreaterThan(0);
      await expect.poll(() => browser.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(1);

      if (locale === "en" && slug === "manual-testing") {
        const lines = await browser.evaluate(() => {
          const heading = document.querySelector(".console-hero h1");
          if (!heading) return [];
          const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
          let node: Node | null;
          while ((node = walker.nextNode())) {
            const start = node.textContent!.indexOf("Exploratory");
            if (start < 0) continue;
            return Array.from("Exploratory", (_, index) => {
              const range = document.createRange();
              range.setStart(node!, start + index);
              range.setEnd(node!, start + index + 1);
              return Math.round(range.getBoundingClientRect().top);
            });
          }
          return [];
        });
        expect(lines).toHaveLength("Exploratory".length);
        expect(new Set(lines).size).toBe(1);
      }
    });
  }

  test(`${locale} skill installation controls and command stay usable on mobile`, async ({ app, browser }) => {
    await browser.emulateMedia({ reducedMotion: "reduce" });
    await browser.setViewport({ width: 390, height: 844 });
    await app.open(`/${locale}/qaskills/requirements-analysis/`);
    for (const selector of [".console-button", ".console-source-link", ".elevator-link", ".quick-install-top button", ".quick-doc-top button"]) {
      const heights = await browser.evaluate((query) =>
        Array.from(document.querySelectorAll(query), (element) => element.getBoundingClientRect().height), selector);
      expect(heights.length, `${selector} exists`).toBeGreaterThan(0);
      expect(Math.min(...heights), selector).toBeGreaterThanOrEqual(44);
    }
    const width = await browser.evaluate(() => {
      const element = document.querySelector(".console-hero-command pre")!;
      return { scroll: element.scrollWidth, client: element.clientWidth };
    });
    expect(width.scroll).toBeLessThanOrEqual(width.client + 1);
  });
}

for (const item of [
  { locale: "zh-cn", slug: "requirements-analysis" },
  { locale: "en", slug: "api-testing" },
] as const) {
  test(`${item.locale} lifecycle path opens a localized skill detail`, async ({ app, browser }) => {
    await app.open(`/${item.locale}/qaskills/`);
    const link = browser.locator(`#lifecycle-path a.lifecycle-skill[data-slug="${item.slug}"]`);
    await expect(link).toBeVisible();
    await link.click();
    await expect(browser).toHaveURL(new RegExp(`/${item.locale}/qaskills/${item.slug}/?$`));
    await expect(browser.locator(".skill-console")).toBeVisible();
  });
}

for (const item of [
  { locale: "zh-cn", useLabel: "立即使用" },
  { locale: "en", useLabel: "Use now" },
] as const) {
  test(`${item.locale} QA Skill detail exposes source instructions and its install path`, async ({ app, browser, screen }) => {
    await browser.addInitScript(() => {
      const testWindow = window as Window & { __e2eClipboard?: string };
      Object.defineProperty(navigator, "clipboard", {
        configurable: true,
        value: { writeText: async (text: string) => { testWindow.__e2eClipboard = text; } },
      });
    });
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
    const promptTab = browser.locator('[data-doc-tab="prompt"]');
    const skillTab = screen.getByRole("tab", { name: "SKILL.md" });
    await promptTab.press("ArrowRight");
    await expect(skillTab).toBeFocused();
    await expect(skillTab).toHaveAttribute("aria-selected", "true");
    await expect(browser.locator("[data-doc-panel='skill'] .skill-raw")).toContainText("name: requirements-analysis");
    await skillTab.press("ArrowLeft");
    await expect(promptTab).toBeFocused();
    await expect(browser.locator("[data-doc-panel='prompt']")).toBeVisible();
    await skillTab.click();
    await expect(skillTab).toHaveAttribute("aria-selected", "true");
    await promptTab.click();
    await expect(promptTab).toHaveAttribute("aria-selected", "true");

    const installCopy = browser.locator("#install-section [data-copy]");
    const installCommand = await installCopy.getAttribute("data-copy");
    expect(installCommand).toContain("npx skills add");
    await browser.evaluate((copiedLabel) => {
      const testWindow = window as Window & {
        __e2eCopyFeedbackSeen?: boolean;
        __e2eCopyFeedbackObserver?: MutationObserver;
      };
      const button = document.querySelector("#install-section [data-copy]");
      if (!(button instanceof HTMLElement)) throw new Error("Install copy button was not found");
      testWindow.__e2eCopyFeedbackSeen = false;
      testWindow.__e2eCopyFeedbackObserver = new MutationObserver(() => {
        if (button.textContent?.trim() === copiedLabel) {
          testWindow.__e2eCopyFeedbackSeen = true;
          testWindow.__e2eCopyFeedbackObserver?.disconnect();
        }
      });
      testWindow.__e2eCopyFeedbackObserver.observe(button, { childList: true, characterData: true, subtree: true });
    }, item.locale === "zh-cn" ? "已复制" : "Copied");
    await installCopy.click();
    await expect.poll(() => browser.evaluate(() => (window as Window & { __e2eCopyFeedbackSeen?: boolean }).__e2eCopyFeedbackSeen === true)).toBe(true);
    expect(await browser.evaluate(() => (window as Window & { __e2eClipboard?: string }).__e2eClipboard ?? "")).toBe(installCommand);
  });
}
