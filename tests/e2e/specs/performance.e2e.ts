import { test } from "@e2e-dev/web";
import { expect } from "e2e";

for (const locale of ["en", "zh-cn"] as const) {
  test(`${locale} home document reaches load within the existing 15 second budget`, async ({ app, browser }) => {
    await app.open(`/${locale}/`);
    const loadTime = await browser.evaluate(() => {
      const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
      return navigation ? navigation.loadEventEnd : -1;
    });
    expect(loadTime).toBeGreaterThanOrEqual(0);
    expect(loadTime).toBeLessThan(15_000);
  });

  test(`${locale} home first image keeps the lazy-loading policy`, async ({ app, browser }) => {
    await app.open(`/${locale}/`);
    const images = browser.locator("img");
    if (await images.count() > 0) {
      const loading = await images.first().getAttribute("loading");
      expect(loading === "lazy" || loading === null).toBe(true);
    }
  });

  test(`${locale} blog pagination opens page 2 through its next link`, async ({ app, browser, screen }) => {
    await app.open(`/${locale}/blog/`);
    const next = browser.locator("a[href*='/page/2'], a[aria-label*='next'], a[aria-label*='下一页']").first();
    await expect(next).toBeVisible();
    await next.click();
    await expect(browser).toHaveURL(/\/page\/2\/?$/);
    await expect(screen.getByRole("main")).toBeVisible();
  });

  test(`${locale} home has no uncaught script errors or unhandled rejections`, async ({ app, browser }) => {
    await browser.addInitScript(() => {
      const state = window as typeof window & { __e2ePageErrors?: string[] };
      state.__e2ePageErrors = [];
      const record = (message: string) => {
        if (!/TagError|googletagmanager/i.test(message)) state.__e2ePageErrors?.push(message);
      };
      window.addEventListener("error", (event) => record(`${event.message} ${event.filename}`));
      window.addEventListener("unhandledrejection", (event) => {
        const reason = event.reason instanceof Error ? `${event.reason.name}: ${event.reason.message}` : String(event.reason);
        record(reason);
      });
      const originalConsoleError = console.error.bind(console);
      console.error = (...args: unknown[]) => {
        const message = args.map((argument) => {
          if (typeof argument === "string") return argument;
          if (argument instanceof Error) return `${argument.name}: ${argument.message}`;
          try {
            return JSON.stringify(argument);
          } catch {
            return String(argument);
          }
        }).join(" ");
        const knownThirdPartyNoise = /googletagmanager|google-analytics|analytics\.inaodeng\.com|google\.com|Content Security Policy|frame-ancestors|net::ERR_|Failed to load resource/i;
        if (!knownThirdPartyNoise.test(message)) record(`console.error: ${message}`);
        originalConsoleError(...args);
      };
    });

    await app.open(`/${locale}/`);
    const errors = await browser.evaluate(() =>
      ((window as typeof window & { __e2ePageErrors?: string[] }).__e2ePageErrors ?? []).slice(),
    );
    expect(errors).toEqual([]);
  });
}
