import { test } from "@e2e-dev/web";
import { expect } from "e2e";

type TrackingEvent = {
  eventName: string;
  payload: {
    lang?: string;
    session_id?: string;
    entry_name?: string;
    depth?: number;
    from_slug?: string;
    to_slug?: string;
  };
};

test.beforeEach(async ({ browser }) => {
  await browser.addInitScript(() => {
    type EventState = { eventName: string; payload: Record<string, unknown> };
    const state = window as typeof window & { __ndTrackEvents?: EventState[] };
    state.__ndTrackEvents = [];
    window.addEventListener("nd:track", (event) => {
      state.__ndTrackEvents?.push((event as CustomEvent<EventState>).detail);
    });
    document.addEventListener("click", (event) => {
      const target = event.target;
      if (target instanceof Element && target.closest(".home-explore-grid .home-card[href='/zh-cn/wiki/'], .wiki-related-pill")) {
        event.preventDefault();
      }
    }, true);
  });
});

test("homepage entry click emits the localized event with session identity", async ({ app, browser }) => {
  await app.open("/zh-cn/");
  const entry = browser.locator(".home-explore-grid .home-card[href='/zh-cn/wiki/']");
  await expect(entry).toBeVisible();
  await entry.click();

  const events = await browser.evaluate(() =>
    ((window as typeof window & { __ndTrackEvents?: TrackingEvent[] }).__ndTrackEvents ?? []).slice(),
  );
  const event = events.find((item) => item.eventName === "home_entry_click");
  expect(event).toBeTruthy();
  expect(event?.payload.lang).toBe("zh-cn");
  expect(typeof event?.payload.session_id).toBe("string");
  expect(String(event?.payload.session_id ?? "").length).toBeGreaterThan(4);
  expect(typeof event?.payload.entry_name).toBe("string");
});

test("detail scroll event reports language, session identity and depth", async ({ app, browser }) => {
  await app.open("/zh-cn/wiki/acceptance-testing/");
  await browser.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
    return true;
  });

  await expect.poll(async () => {
    const events = await browser.evaluate(() =>
      ((window as typeof window & { __ndTrackEvents?: TrackingEvent[] }).__ndTrackEvents ?? []).slice(),
    );
    return events.filter((item) => item.eventName === "detail_scroll_depth").length;
  }).toBeGreaterThan(0);
  const events = await browser.evaluate(() =>
    ((window as typeof window & { __ndTrackEvents?: TrackingEvent[] }).__ndTrackEvents ?? []).slice(),
  );
  const scrollEvents = events.filter((item) => item.eventName === "detail_scroll_depth");
  expect(scrollEvents.some((item) => item.payload.lang === "zh-cn")).toBe(true);
  expect(scrollEvents.some((item) => typeof item.payload.session_id === "string")).toBe(true);
  expect(scrollEvents.some((item) => typeof item.payload.depth === "number")).toBe(true);
});

test("related Wiki term click emits source and destination slugs", async ({ app, browser }) => {
  await app.open("/zh-cn/wiki/acceptance-testing/");
  const term = browser.locator(".wiki-related-pill").first();
  await expect(term).toBeVisible();
  await term.click();

  const events = await browser.evaluate(() =>
    ((window as typeof window & { __ndTrackEvents?: TrackingEvent[] }).__ndTrackEvents ?? []).slice(),
  );
  const event = events.find((item) => item.eventName === "term_second_click");
  expect(event).toBeTruthy();
  expect(event?.payload.lang).toBe("zh-cn");
  expect(typeof event?.payload.session_id).toBe("string");
  expect(typeof event?.payload.from_slug).toBe("string");
  expect(typeof event?.payload.to_slug).toBe("string");
});
