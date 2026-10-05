import { expect, test } from "@playwright/test";

for (const locale of ["en", "zh-cn"]) {
  test(`${locale}: reduced motion keeps the homepage still`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`/${locale}/`);
    const primary = page.locator(".home-hero .pill-cta--primary");
    await primary.hover();
    await expect(primary).toHaveCSS("transform", "none");
    const railAnimation = await page.locator(".hero-topic-map").evaluate((element) =>
      getComputedStyle(element, "::before").animationName,
    );
    expect(railAnimation).toBe("none");
    const post = page.locator(".home-post-item").first();
    await post.hover();
    await expect(post).toHaveCSS("transform", "none");
  });

  test(`${locale}: skill discovery fits tablet and phone widths`, async ({ page }) => {
    for (const width of [1024, 768, 390]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(`/${locale}/qaskills/`);
      await expect(page.locator(".directory-hero")).toBeVisible();
      const bounds = await page.evaluate(() => ({
        viewport: document.documentElement.clientWidth,
        page: document.documentElement.scrollWidth,
        sections: Array.from(document.querySelectorAll(".qaskills-page > *"))
          .map((element) => element.getBoundingClientRect().right),
      }));
      expect(bounds.page).toBeLessThanOrEqual(bounds.viewport + 1);
      for (const right of bounds.sections) expect(right).toBeLessThanOrEqual(bounds.viewport + 1);
    }
  });

  test(`${locale}: tablet navigation preserves the full brand and keyboard access`, async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 900 });
    await page.goto(`/${locale}/`);
    const toggle = page.locator("[data-nav-toggle]");
    await expect(toggle).toBeVisible();
    const layout = await page.evaluate(() => {
      const brand = document.querySelector(".site-brand-link")!.getBoundingClientRect();
      const utilities = document.querySelector(".header-utils")!.getBoundingClientRect();
      return { brandRight: brand.right, utilitiesLeft: utilities.left };
    });
    expect(layout.brandRight).toBeLessThan(layout.utilitiesLeft);
    await toggle.focus();
    await page.keyboard.press("Enter");
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator(`header a[href='/${locale}/about/']`)).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  test(`${locale}: long inline code and Guild category headers fit a small phone`, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 844 });
    for (const route of ["blog/ai-testing/ai-test-auditor-static-evidence-for-ai-generated-tests/", "guild/ui-testing/"]) {
      await page.goto(`/${locale}/${route}`);
      const size = await page.evaluate(() => ({
        viewport: document.documentElement.clientWidth,
        page: document.documentElement.scrollWidth,
        headingRight: document.querySelector("main h1")!.getBoundingClientRect().right,
      }));
      expect(size.page).toBeLessThanOrEqual(size.viewport + 1);
      expect(size.headingRight).toBeLessThanOrEqual(size.viewport + 1);
    }
    await expect(page.locator(".tt-header__icon")).toHaveCSS("font-family", '"Material Icons Sharp"');
    const icon = await page.locator(".tt-header__icon").boundingBox();
    expect(icon!.width).toBeLessThanOrEqual(44);
    for (const tag of await page.locator(".fw-card__lang").all()) {
      const bounds = await tag.evaluate((element) => ({
        right: element.getBoundingClientRect().right,
        cardRight: element.closest(".fw-card")!.getBoundingClientRect().right,
      }));
      expect(bounds.right).toBeLessThan(bounds.cardRight);
    }
  });

  test(`${locale}: wide article tables stay readable and scroll with the keyboard`, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 844 });
    await page.goto(`/${locale}/blog/ai-testing/ai-test-auditor-static-evidence-for-ai-generated-tests/`);
    const table = page.getByRole("region", { name: locale === "zh-cn" ? "表格，可横向滚动" : "Table, scroll horizontally" }).first();
    await expect(table).toBeVisible();
    const bounds = await table.evaluate((element) => ({
      viewport: document.documentElement.clientWidth,
      page: document.documentElement.scrollWidth,
      width: element.clientWidth,
      contentWidth: element.scrollWidth,
      cellWidth: element.querySelector("td")!.getBoundingClientRect().width,
    }));
    expect(bounds.page).toBeLessThanOrEqual(bounds.viewport + 1);
    expect(bounds.contentWidth).toBeGreaterThan(bounds.width);
    expect(bounds.cellWidth).toBeGreaterThanOrEqual(120);
    await table.focus();
    await page.keyboard.press("ArrowRight");
    await expect.poll(() => table.evaluate((element) => element.scrollLeft)).toBeGreaterThan(0);
  });

  test(`${locale}: glossary search offers recovery from no results`, async ({ page }) => {
    await page.goto(`/${locale}/AIWiki/`);
    const input = page.locator("#aiwiki-search");
    const entries = page.locator(".wiki-letter-link:visible");
    const count = await entries.count();
    expect(count).toBeGreaterThan(0);
    await input.fill("zz-proofline-no-matching-entry");
    await expect(entries).toHaveCount(0);
    await expect(page.locator(".wiki-letter-index-link:visible")).toHaveCount(0);
    await expect(page.locator("#aiwiki-search-empty")).toBeVisible();
    await page.locator("#aiwiki-search-reset").click();
    await expect(entries).toHaveCount(count);
    await expect(input).toBeFocused();
    await expect(page.locator("#aiwiki-search-empty")).toBeHidden();
  });

  test(`${locale}: search opens immediately and recovers from a failed index`, async ({ page }) => {
    let releaseRequest!: () => void;
    const holdRequest = new Promise<void>((resolve) => { releaseRequest = resolve; });
    await page.route(`**/${locale}/search-index.json`, async (route) => {
      await holdRequest;
      await route.fulfill({ status: 503, body: "Unavailable" });
    });
    await page.goto(`/${locale}/`);
    await page.locator("[data-search-open]").click();
    await expect(page.locator("#search-dialog")).toBeVisible();
    await expect(page.locator("#search-input")).toBeFocused();
    await expect(page.locator("#search-input")).toHaveAttribute("aria-busy", "true");
    releaseRequest();
    await expect(page.locator("#search-retry")).toBeVisible();
    await page.unroute(`**/${locale}/search-index.json`);
    await page.locator("#search-input").fill("playwright");
    await page.locator("#search-retry").click();
    await expect(page.locator("#search-status")).toBeHidden();
    await expect(page.locator(".search-result-item").first()).toBeVisible();
    await page.locator("#search-input").press("Escape");
    await expect(page.locator("#search-dialog")).toBeHidden();
  });

  test(`${locale}: knowledge article TOC tracks reading and stays below the header`, async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`/${locale}/AIWiki/`);
    const firstEntry = await page.locator(".wiki-letter-link").first().getAttribute("href");
    expect(firstEntry).toBeTruthy();
    await page.goto(firstEntry!);
    const link = page.locator(".toc-list--desktop .toc-link").nth(1);
    const href = await link.getAttribute("href");
    expect(href).toBeTruthy();
    await page.evaluate((target) => {
      const heading = document.getElementById(target!.slice(1))!;
      window.scrollTo({ top: window.scrollY + heading.getBoundingClientRect().top - 140, behavior: "instant" });
    }, href);
    await expect(link).toHaveAttribute("aria-current", "true");
    const positions = await page.evaluate(() => ({
      headerBottom: document.querySelector(".l-header")!.getBoundingClientRect().bottom,
      tocTop: document.querySelector(".docs-toc-wrap")!.getBoundingClientRect().top,
    }));
    expect(positions.tocTop).toBeGreaterThanOrEqual(positions.headerBottom + 8);
  });

  test(`${locale}: production detail pages expose one main landmark`, async ({ page }) => {
    for (const route of ["qaskills/requirements-analysis/", "prompts/test-case-writing/", "dsh-qa/", "ai-test-auditor/"]) {
      await page.goto(`/${locale}/${route}`);
      await expect(page.locator("h1")).toBeVisible();
      await expect(page.locator("main")).toHaveCount(1);
    }
  });

  test(`${locale}: article reading progress follows the actual scroll position`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(`/${locale}/blog/ai-testing/ai-test-auditor-static-evidence-for-ai-generated-tests/`);
    const progress = page.getByRole("progressbar", { name: locale === "zh-cn" ? "阅读进度" : "Reading progress" });
    await expect(progress).toHaveAttribute("aria-valuenow", "0");
    await page.evaluate(() => window.scrollTo({
      top: (document.documentElement.scrollHeight - innerHeight) / 2,
      behavior: "instant",
    }));
    await expect.poll(async () => Number(await progress.getAttribute("aria-valuenow"))).toBeGreaterThanOrEqual(49);
    await expect.poll(async () => Number(await progress.getAttribute("aria-valuenow"))).toBeLessThanOrEqual(51);
    await page.evaluate(() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "instant" }));
    await expect(progress).toHaveAttribute("aria-valuenow", "100");
    await expect(progress).toHaveCSS("transform", "matrix(1, 0, 0, 1, 0, 0)");
  });

  test(`${locale}: code copy is available on touch screens and reports a clipboard failure`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.addInitScript(() => {
      Object.defineProperty(navigator, "clipboard", {
        configurable: true,
        value: { writeText: () => Promise.reject(new DOMException("Clipboard denied", "NotAllowedError")) },
      });
    });
    await page.goto(`/${locale}/blog/ai-testing/ai-test-auditor-static-evidence-for-ai-generated-tests/`);
    const copy = page.locator(".code-copy-btn").first();
    await expect(copy).toBeVisible();
    const size = await copy.boundingBox();
    expect(size!.height).toBeGreaterThanOrEqual(44);
    expect(size!.width).toBeGreaterThanOrEqual(44);
    await copy.click();
    await expect(copy).toHaveAccessibleName(locale === "zh-cn" ? "复制失败，请重试" : "Copy failed. Try again");
  });
}
