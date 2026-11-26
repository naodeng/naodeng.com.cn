import { test } from "@e2e-dev/web";
import { expect } from "e2e";

for (const slug of ["junit-testing", "ui-testing", "mobile-app-testing", "localization-testing"] as const) {
  test(`wiki/${slug} remains within a phone viewport`, async ({ app, browser, screen }) => {
    await app.open(`/zh-cn/wiki/${slug}/`);
    await expect(screen.getByRole("heading", { level: 1 })).toBeVisible();
    for (const width of [390, 375]) {
      await browser.setViewport({ width, height: 900 });
      const overflow = await browser.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow).toBeLessThanOrEqual(1);
    }
  });
}

for (const locale of ["en", "zh-cn"] as const) {
  for (const path of [
    `/blog/performance-testing/${locale === "en" ? "gatling-tool-tutorial" : "gatling-tool-intro"}-advanced-usage/`,
    "/guild/performance-testing/gatling/advanced-usage/",
    "/guild/performance-testing/k6/http-request-and-checks/",
  ]) {
    test(`${locale}${path} keeps long code inside the page and scrollable`, async ({ app, browser, screen }) => {
      await app.open(`/${locale}${path}`);
      await expect(screen.getByRole("heading", { level: 1 })).toBeVisible();
      await browser.setViewport({ width: 390, height: 900 });
      const pageOverflow = await browser.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(pageOverflow).toBeLessThanOrEqual(1);

      const codeState = await browser.evaluate(() => {
        const block = Array.from(document.querySelectorAll("article pre")).find((pre) => pre.scrollWidth > pre.clientWidth);
        if (!block) return null;
        block.scrollLeft = 0;
        block.scrollLeft = 48;
        return { overflow: getComputedStyle(block).overflowX, scrollLeft: block.scrollLeft };
      });
      expect(codeState).not.toBeNull();
      expect(codeState?.overflow).toMatch(/auto|scroll/);
      expect(codeState?.scrollLeft ?? 0).toBeGreaterThan(0);
    });
  }

  test(`${locale} tablet navigation opens and closes with the keyboard`, async ({ app, browser }) => {
    await browser.setViewport({ width: 1024, height: 900 });
    await app.open(`/${locale}/`);

    const toggle = browser.locator("[data-nav-toggle]");
    await expect(toggle).toBeVisible();
    await toggle.focus();
    await toggle.press("Enter");
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await expect(browser.locator(`header a[href='/${locale}/about/']`)).toBeVisible();
    await browser.keyboard.press("Escape");
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  test(`${locale} glossary search recovers from no matches and restores focus`, async ({ app, browser }) => {
    await app.open(`/${locale}/AIWiki/`);
    const input = browser.locator("#aiwiki-search");
    const entries = browser.locator(".wiki-letter-link");
    const entryCount = await entries.count();
    expect(entryCount).toBeGreaterThan(0);

    await input.fill("zz-proofline-no-matching-entry");
    await expect(entries.first()).toBeHidden();
    await expect(browser.locator("#aiwiki-search-empty")).toBeVisible();
    await browser.locator("#aiwiki-search-reset").click();
    await expect(entries).toHaveCount(entryCount);
    await expect(input).toBeFocused();
    await expect(browser.locator("#aiwiki-search-empty")).toBeHidden();
  });

  test(`${locale} search opens before a failed index request and recovers on retry`, async ({ app, browser }) => {
    let releaseRequest!: () => void;
    const holdRequest = new Promise<void>((resolve) => { releaseRequest = resolve; });
    const indexPattern = new RegExp(`/${locale}/search-index\\.json(?:\\?.*)?$`);
    await browser.route(indexPattern, async (route) => {
      await holdRequest;
      await route.fulfill({ status: 503, body: "Unavailable" });
    });
    await app.open(`/${locale}/`);
    await browser.locator("[data-search-open]").click();
    await expect(browser.locator("#search-dialog")).toBeVisible();
    const input = browser.locator("#search-input");
    await expect(input).toBeFocused();
    await expect(input).toHaveAttribute("aria-busy", "true");

    releaseRequest();
    await expect(browser.locator("#search-retry")).toBeVisible();
    await browser.unroute(indexPattern);
    await input.fill("playwright");
    await browser.locator("#search-retry").click();
    await expect(browser.locator("#search-status")).toBeHidden();
    await expect(browser.locator(".search-result-item").first()).toBeVisible();
    await input.press("Escape");
    await expect(browser.locator("#search-dialog")).toBeHidden();
  });

  test(`${locale} article TOC follows the heading reached by a reader`, async ({ app, browser }) => {
    await browser.setViewport({ width: 1440, height: 900 });
    await app.open(`/${locale}/AIWiki/`);
    const firstEntry = await browser.locator(".wiki-letter-link").first().getAttribute("href");
    expect(firstEntry).toBeTruthy();
    await app.open(String(firstEntry));
    const link = browser.locator(".toc-list--desktop .toc-link").nth(1);
    const href = await link.getAttribute("href");
    expect(href).toBeTruthy();
    const scrolled = await browser.evaluate((target) => {
      const heading = document.getElementById(target.replace(/^#/, ""));
      if (!heading) return false;
      window.scrollTo({ top: window.scrollY + heading.getBoundingClientRect().top - 140, behavior: "instant" });
      return true;
    }, String(href));
    expect(scrolled).toBe(true);
    await expect(link).toHaveAttribute("aria-current", "true");
  });

  test(`${locale} article reading progress follows the scroll position`, async ({ app, browser }) => {
    await browser.emulateMedia({ reducedMotion: "reduce" });
    await app.open(`/${locale}/blog/ai-testing/ai-test-auditor-static-evidence-for-ai-generated-tests/`);
    const progress = browser.locator(`[role="progressbar"][aria-label='${locale === "zh-cn" ? "阅读进度" : "Reading progress"}']`);
    await expect(progress).toHaveAttribute("aria-valuenow", "0");

    await browser.evaluate(() => {
      window.scrollTo({
        top: (document.documentElement.scrollHeight - innerHeight) / 2,
        behavior: "instant",
      });
      return true;
    });
    await expect.poll(async () => Number(await progress.getAttribute("aria-valuenow"))).toBeGreaterThanOrEqual(49);
    await expect.poll(async () => Number(await progress.getAttribute("aria-valuenow"))).toBeLessThanOrEqual(51);
    await browser.evaluate(() => {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "instant" });
      return true;
    });
    await expect(progress).toHaveAttribute("aria-valuenow", "100");
  });

  test(`${locale} code copy reports clipboard denial on a touch-sized control`, async ({ app, browser }) => {
    await browser.setViewport({ width: 390, height: 844 });
    await browser.addInitScript(() => {
      Object.defineProperty(navigator, "clipboard", {
        configurable: true,
        value: { writeText: () => Promise.reject(new DOMException("Clipboard denied", "NotAllowedError")) },
      });
    });
    await app.open(`/${locale}/blog/ai-testing/ai-test-auditor-static-evidence-for-ai-generated-tests/`);

    const copy = browser.locator(".code-copy-btn").first();
    await expect(copy).toBeVisible();
    const box = await copy.boundingBox();
    expect(box?.width ?? 0).toBeGreaterThanOrEqual(44);
    expect(box?.height ?? 0).toBeGreaterThanOrEqual(44);
    await copy.click();
    await expect(copy).toHaveAccessibleName(locale === "zh-cn" ? "复制失败，请重试" : "Copy failed. Try again");
  });

  test(`${locale} production detail pages expose one main landmark`, async ({ app, browser }) => {
    for (const route of ["qaskills/requirements-analysis/", "prompts/test-case-writing/", "dsh-qa/", "ai-test-auditor/"]) {
      await app.open(`/${locale}/${route}`);
      await expect(browser.locator("h1").first()).toBeVisible();
      await expect(browser.locator("main")).toHaveCount(1);
    }
  });
}

for (const locale of ["en", "zh-cn"] as const) {
  test(`${locale} detail table scrolls horizontally without widening the page`, async ({ app, browser, screen }) => {
    await browser.setViewport({ width: 375, height: 844 });
    await app.open(`/${locale}/blog/ai-testing/ai-test-auditor-static-evidence-for-ai-generated-tests/`);
    const region = screen.getByRole("region", { name: locale === "zh-cn" ? "表格，可横向滚动" : "Table, scroll horizontally" });
    await expect(region).toBeVisible();
    const metrics = await browser.evaluate(() => {
      const tableRegion = document.querySelector('[role="region"][tabindex="0"]');
      if (!tableRegion) return null;
      const cell = tableRegion.querySelector("td");
      return {
        viewport: document.documentElement.clientWidth,
        page: document.documentElement.scrollWidth,
        width: tableRegion.clientWidth,
        contentWidth: tableRegion.scrollWidth,
        cellWidth: cell?.getBoundingClientRect().width ?? 0,
      };
    });
    expect(metrics).not.toBeNull();
    expect(metrics?.page ?? 0).toBeLessThanOrEqual((metrics?.viewport ?? 0) + 1);
    expect(metrics?.contentWidth ?? 0).toBeGreaterThan(metrics?.width ?? 0);
    await region.focus();
    await region.press("ArrowRight");
    await expect.poll(() => browser.evaluate(() => document.querySelector('[role="region"][tabindex="0"]')?.scrollLeft ?? 0)).toBeGreaterThan(0);
  });
}
