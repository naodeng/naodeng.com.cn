import { expect, test } from "@playwright/test";

test.describe("Prompt library discovery and review flow", () => {
  test("homepage starts with tasks and keeps the directory as a secondary action", async ({ page, baseURL }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${baseURL}/en/prompts/`, { waitUntil: "domcontentloaded" });

    await expect(page.locator("#prompt-home-title")).toContainText("Start with the task");
    await expect(page.locator(".prompt-home-search")).toBeVisible();
    await expect(page.locator("[data-prompt-task]")).toHaveCount(13);
    await expect(page.locator("[data-prompt-area]")).toHaveCount(10);
    await expect(page.locator(".prompt-outline-link")).toHaveAttribute("href", "/en/prompts/all/");
    await expect(page.locator("[data-featured-prompt]").first()).toHaveAttribute("href", /\/en\/prompts\//);
    await expect(page.locator("#quickstart-heading")).toBeVisible();
    await expect(page.locator("[data-prompt-quick-step]")).toHaveCount(5);
  });

  test("prompt controls keep readable contrast in dark theme", async ({ page, baseURL }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${baseURL}/en/prompts/`, { waitUntil: "domcontentloaded" });
    await page.evaluate(() => document.documentElement.dataset.theme = "dark");

    const homeContrast = await page.locator(".prompt-search-control button").evaluate((button) => {
      const input = button.parentElement?.querySelector("input");
      const parse = (value: string) => value.match(/\d+(?:\.\d+)?/g)?.map(Number) || [0, 0, 0];
      const luminance = (value: string) => {
        const [r, g, b] = parse(value).map((channel) => channel / 255);
        const transform = (channel: number) => channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
        return 0.2126 * transform(r) + 0.7152 * transform(g) + 0.0722 * transform(b);
      };
      const ratio = (foreground: string, background: string) => {
        const [light, dark] = [luminance(foreground), luminance(background)].sort((a, b) => b - a);
        return (light + 0.05) / (dark + 0.05);
      };
      const buttonStyle = getComputedStyle(button);
      const surfaceStyle = input?.parentElement ? getComputedStyle(input.parentElement) : buttonStyle;
      const placeholder = input ? getComputedStyle(input, "::placeholder") : buttonStyle;
      return {
        button: ratio(buttonStyle.color, buttonStyle.backgroundColor),
        placeholder: ratio(placeholder.color, surfaceStyle.backgroundColor),
      };
    });

    expect(homeContrast.button).toBeGreaterThanOrEqual(4.5);
    expect(homeContrast.placeholder).toBeGreaterThanOrEqual(4.5);

    await page.goto(`${baseURL}/en/prompts/all/`, { waitUntil: "domcontentloaded" });
    await page.evaluate(() => document.documentElement.dataset.theme = "dark");
    const explorerPlaceholder = await page.locator("#prompt-explorer-search").evaluate((input) => getComputedStyle(input, "::placeholder").color);
    expect(explorerPlaceholder).toBe("rgb(132, 144, 161)");
  });

  test("header controls keep one size and one visible state on desktop and mobile", async ({ page, baseURL }) => {
    const viewports = [
      { width: 1440, height: 900, controlSize: 44 },
      { width: 390, height: 844, controlSize: 40 },
    ];

    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto(`${baseURL}/zh-cn/prompts/requirements-analysis/`, { waitUntil: "domcontentloaded" });
      await page.evaluate(() => {
        document.documentElement.dataset.theme = "light";
        document.querySelector("header.l-header")?.removeAttribute("data-nav-open");
      });

      const controls = page.locator(
        "header.l-header [data-locale-trigger], header.l-header [data-search-open], header.l-header [data-theme-toggle], header.l-header [data-nav-toggle]",
      );
      const sizes = await controls.evaluateAll((elements) =>
        elements
          .filter((element) => getComputedStyle(element).display !== "none")
          .map((element) => {
            const rect = element.getBoundingClientRect();
            return { width: Math.round(rect.width), height: Math.round(rect.height) };
          }),
      );
      expect(sizes.length).toBeGreaterThanOrEqual(3);
      expect(sizes).toEqual(sizes.map(() => ({ width: viewport.controlSize, height: viewport.controlSize })));

      const iconState = await page.locator("header.l-header").evaluate((header) => {
        const visible = (selector: string) => {
          const element = header.querySelector(selector);
          return Boolean(element && getComputedStyle(element).display !== "none");
        };
        return {
          light: visible(".theme-toggle__light"),
          dark: visible(".theme-toggle__dark"),
          menu: visible(".nav-toggle__open"),
          close: visible(".nav-toggle__close"),
        };
      });
      expect(iconState).toEqual({ light: true, dark: false, menu: true, close: false });

      await page.locator("[data-theme-toggle]").click();
      await expect.poll(() => page.locator(".theme-toggle__dark").evaluate((icon) => getComputedStyle(icon).display)).not.toBe("none");
      await expect.poll(() => page.locator(".theme-toggle__light").evaluate((icon) => getComputedStyle(icon).display)).toBe("none");

      if (viewport.width < 834) {
        await page.locator("[data-nav-toggle]").click();
        await expect.poll(() => page.locator(".nav-toggle__close").evaluate((icon) => getComputedStyle(icon).display)).not.toBe("none");
        await expect.poll(() => page.locator(".nav-toggle__open").evaluate((icon) => getComputedStyle(icon).display)).toBe("none");
      }
    }
  });

  test("mobile homepage search keeps the button compact", async ({ page, baseURL }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`${baseURL}/zh-cn/prompts/`, { waitUntil: "domcontentloaded" });

    const layout = await page.locator(".prompt-search-control").evaluate((control) => {
      const button = control.querySelector("button");
      if (!(button instanceof HTMLElement)) return null;
      const controlRect = control.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();
      return {
        display: getComputedStyle(control).display,
        controlWidth: controlRect.width,
        buttonWidth: buttonRect.width,
        buttonHeight: buttonRect.height,
      };
    });

    expect(layout).not.toBeNull();
    expect(layout?.display).toBe("flex");
    expect(layout?.buttonWidth).toBeLessThan((layout?.controlWidth || 0) / 2);
    expect(layout?.buttonHeight).toBeLessThan(52);
  });

  test("explorer searches and filters the real prompt registry", async ({ page, baseURL }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${baseURL}/en/prompts/all/`, { waitUntil: "domcontentloaded" });

    await expect(page.locator("[data-prompt-card]")).toHaveCount(246);
    await expect(page.locator(".explorer-card").first()).toHaveAttribute("href", /\/en\/prompts\//);
    await expect(page.locator(".explorer-card-link")).toHaveCount(0);
    await expect(page.locator("#prompt-explorer-count")).toContainText("246");

    await page.locator("#prompt-explorer-search").fill("performance result analysis");
    await expect(page.locator("#prompt-explorer-count")).toContainText("1");
    await expect(page.locator('[data-prompt-card]:visible')).toHaveCount(1);
    await expect(page.locator('[data-prompt-card]:visible h2')).toContainText("Performance Result Analysis");
    await expect(page).toHaveURL(/q=performance\+result\+analysis|q=performance%20result%20analysis/);

    await page.locator("#prompt-clear-filters").click();
    await page.locator("#prompt-area-filter").selectOption("api-integration");
    await expect(page).toHaveURL(/area=api-integration/);
    const apiCards = page.locator('[data-prompt-card]:visible');
    expect(await apiCards.count()).toBeGreaterThan(1);
    await expect(apiCards.first()).toHaveAttribute("data-area", "api-integration");
  });

  test("detail pages expose context, variants, copy, and next steps", async ({ page, baseURL }) => {
    await page.goto(`${baseURL}/en/prompts/test-strategy/`, { waitUntil: "domcontentloaded" });

    await expect(page.locator(".prompt-detail-header h1")).toHaveText("Test Strategy Prompt");
    await expect(page.locator(".prompt-at-a-glance")).toBeVisible();
    await expect(page.locator("#prompt-at-a-glance-heading")).toHaveClass(/visually-hidden/);
    await expect(page.locator(".prompt-variants")).toBeVisible();
    await expect(page.locator(".prompt-variants a")).toHaveCount(4);
    await expect(page.locator(".prompt-copy-btn")).toBeVisible();
    await page.context().grantPermissions(["clipboard-read", "clipboard-write"], { origin: baseURL });
    await page.locator(".prompt-copy-btn").click();
    await expect(page.locator(".prompt-copy-btn-text")).toHaveText("Copied!");
    await expect(page.locator(".prompt-source-link")).toHaveAttribute(
      "href",
      /github\.com\/naodeng\/awesome-qa-prompt\/blob\/main\/testing-types\//,
    );
    await expect(page.locator(".prompt-content > h1")).toBeHidden();
    await expect(page.locator("#prompt-workflow-heading")).toBeVisible();
    await expect(page.locator("[data-related-prompt]")).toHaveCount(6);
  });

  test("legacy platform URLs remain navigable and show the current variant", async ({ page, baseURL }) => {
    await page.goto(`${baseURL}/zh-cn/prompts/test-strategy-Mobile/`, { waitUntil: "domcontentloaded" });

    await expect(page.locator(".prompt-detail-header h1")).toHaveText("测试策略 Prompt - 移动端版");
    await expect(page.locator(".prompt-detail-badges")).toContainText("移动端");
    await expect(page.locator(".prompt-detail-badges")).not.toContainText(/基础|进阶|高级/);
    await expect(page.locator(".prompt-variants a.is-current")).toContainText("移动端");
    await expect(page.locator(".prompt-related-prompts")).toBeVisible();
    await page.locator("[data-related-prompt]").first().click();
    await expect(page).toHaveURL(/\/zh-cn\/prompts\/[^/]+\/$/);
  });

  for (const lang of ["zh-cn", "en"] as const) {
    test(`${lang} keeps the task-first homepage bilingual`, async ({ page, baseURL }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto(`${baseURL}/${lang}/prompts/`, { waitUntil: "domcontentloaded" });

      const expectedTitle = lang === "zh-cn" ? "先说你要完成什么" : "Start with the task";
      await expect(page.locator("main h1")).toContainText(expectedTitle);
      const titleLines = await page.locator("#prompt-home-title").evaluate((heading) => {
        const range = document.createRange();
        range.selectNodeContents(heading);
        return new Set(Array.from(range.getClientRects()).map((rect) => Math.round(rect.top))).size;
      });
      expect(titleLines).toBeLessThanOrEqual(2);
      await expect(page.locator("[data-prompt-task]")).toHaveCount(13);
      await expect(page.locator("[data-prompt-area]")).toHaveCount(10);
      await expect(page.locator("#ai-output-notice")).toBeVisible();
      await expect(page.locator("main")).not.toContainText("9007199254740991");
      await expect(page.locator("main")).not.toContainText("_EN.md");
      await expect(page.locator(".prompt-home")).not.toContainText("⌕");
      await expect(page.locator(".prompt-home")).not.toContainText("↗");
      if (lang === "zh-cn") {
        await expect(page.locator(".prompt-home")).toContainText("QA 提示词库");
        await expect(page.locator(".prompt-home")).toContainText("测试工作流");
        await expect(page.locator(".prompt-search-examples a")).toHaveText(["需求分析", "接口", "性能", "智能体"]);
        await expect(page.locator(".prompt-search-examples")).not.toContainText("requirements");
        await expect(page.locator(".prompt-search-examples")).not.toContainText("performance");
        await expect(page.locator(".prompt-home")).not.toContainText("WORKFLOW LIBRARY");
        await expect(page.locator(".prompt-home")).not.toContainText("Playwri的");
        await expect(page.locator(".prompt-home")).not.toContainText("Prompt的");
      }
    });

    test(`${lang} provides an all-prompts explorer`, async ({ page, baseURL }) => {
      await page.goto(`${baseURL}/${lang}/prompts/all/`, { waitUntil: "domcontentloaded" });
      await expect(page.locator("#prompt-explorer-search")).toBeVisible();
      await expect(page.locator("#prompt-area-filter")).toBeVisible();
      await expect(page.locator("#prompt-task-filter")).toBeVisible();
      await expect(page.locator("#prompt-level-filter")).toBeVisible();
      await expect(page.locator("#prompt-variant-filter")).toBeVisible();
      await expect(page.locator("[data-prompt-card]")).toHaveCount(246);
      if (lang === "zh-cn") {
        await expect(page.locator("#prompt-variant-filter")).toContainText("轻量版");
        await expect(page.locator("#prompt-variant-filter")).not.toContainText("Lite");
      }
    });

    test(`${lang} detail content keeps structural labels localized`, async ({ page, baseURL }) => {
      await page.goto(`${baseURL}/${lang}/prompts/requirements-analysis/`, { waitUntil: "domcontentloaded" });

      if (lang === "zh-cn") {
        await expect(page.locator('meta[name="description"]')).not.toHaveAttribute("content", /角色：/);
        const detailContent = page.locator(".prompt-content");
        for (const label of [
          "Default",
          "Role",
          "Context",
          "Task",
          "Output Format",
          "Execution Instructions",
          "Quality Requirements",
          "Special Considerations",
          "Test Design Methodology",
          "Coverage Dimensions",
          "Happy Path",
          "Negative Path",
          "Gotchas",
        ]) {
          await expect(detailContent).not.toContainText(label);
        }
        await expect(detailContent).not.toContainText("�");
      }
    });

    test(`${lang} prompt surfaces have no mobile horizontal overflow`, async ({ page, baseURL }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      for (const route of ["prompts/", "prompts/all/", "prompts/requirements-analysis/"]) {
        await page.goto(`${baseURL}/${lang}/${route}`, { waitUntil: "domcontentloaded" });
        const width = await page.evaluate(() => ({ scroll: document.documentElement.scrollWidth, client: document.documentElement.clientWidth }));
        expect(width.scroll).toBeLessThanOrEqual(width.client + 1);
      }
    });
  }
});
