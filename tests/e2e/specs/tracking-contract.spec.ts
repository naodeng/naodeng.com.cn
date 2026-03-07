import { test, expect } from "@playwright/test";

test.describe("埋点契约", () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      (window as typeof window & { __ndTrackEvents?: Array<{ eventName: string; payload: Record<string, unknown> }> }).__ndTrackEvents = [];
      window.addEventListener("nd:track", ((evt: Event) => {
        const customEvent = evt as CustomEvent<{ eventName: string; payload: Record<string, unknown> }>;
        const store = (window as typeof window & { __ndTrackEvents: Array<{ eventName: string; payload: Record<string, unknown> }> }).__ndTrackEvents;
        store.push(customEvent.detail);
      }) as EventListener);
    });
  });

  test("首页入口点击事件包含 session_id", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });

    const entry = page.locator("a[href='/zh-cn/wiki/'], a[href='/zh-cn/blog/'], a[href='/zh-cn/AIWiki/'], a[href='/zh-cn/guild/']").first();
    await expect(entry).toBeVisible({ timeout: 10000 });
    await entry.evaluate((node) => {
      node.addEventListener(
        "click",
        (evt) => {
          evt.preventDefault();
        },
        { once: true }
      );
    });
    await entry.click();

    const events = await page.evaluate(() => {
      return (window as typeof window & { __ndTrackEvents?: Array<{ eventName: string; payload: Record<string, unknown> }> }).__ndTrackEvents || [];
    });

    const event = events.find((item) => item.eventName === "home_entry_click");
    expect(event).toBeTruthy();
    expect(event?.payload.lang).toBe("zh-cn");
    expect(typeof event?.payload.session_id).toBe("string");
    expect(String(event?.payload.session_id || "").length).toBeGreaterThan(4);
    expect(typeof event?.payload.entry_name).toBe("string");
  });

  test("详情页滚动事件包含 session_id", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/wiki/acceptance-testing/", { waitUntil: "networkidle" });
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1200);

    const events = await page.evaluate(() => {
      return (window as typeof window & { __ndTrackEvents?: Array<{ eventName: string; payload: Record<string, unknown> }> }).__ndTrackEvents || [];
    });

    const scrollEvents = events.filter((item) => item.eventName === "detail_scroll_depth");
    expect(scrollEvents.length).toBeGreaterThan(0);
    expect(scrollEvents.some((item) => item.payload.lang === "zh-cn")).toBeTruthy();
    expect(scrollEvents.some((item) => typeof item.payload.session_id === "string")).toBeTruthy();
    expect(scrollEvents.some((item) => typeof item.payload.depth === "number")).toBeTruthy();
  });

  test("详情页相关词条点击事件包含 session_id", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/wiki/acceptance-testing/", { waitUntil: "networkidle" });

    const term = page.locator(".wiki-related-pill").first();
    await expect(term).toBeVisible({ timeout: 10000 });
    await term.evaluate((node) => {
      node.addEventListener(
        "click",
        (evt) => {
          evt.preventDefault();
        },
        { once: true }
      );
    });
    await term.click();

    const events = await page.evaluate(() => {
      return (window as typeof window & { __ndTrackEvents?: Array<{ eventName: string; payload: Record<string, unknown> }> }).__ndTrackEvents || [];
    });

    const event = events.find((item) => item.eventName === "term_second_click");
    expect(event).toBeTruthy();
    expect(event?.payload.lang).toBe("zh-cn");
    expect(typeof event?.payload.session_id).toBe("string");
    expect(typeof event?.payload.from_slug).toBe("string");
    expect(typeof event?.payload.to_slug).toBe("string");
  });
});
