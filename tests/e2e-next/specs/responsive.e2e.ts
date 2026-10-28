import { test } from "@e2e-dev/web";
import { expect } from "e2e";

const mobile = { width: 390, height: 844 };
const mobileRoutes = [
  "",
  "qaskills/",
  "prompts/",
  "prompts/all/",
  "AIWiki/agent-evals/",
  "ai-native-qa-weekly/2026/week-39/",
  "ai-test-auditor/",
] as const;

for (const locale of ["zh-cn", "en"] as const) {
  for (const route of mobileRoutes) {
    test(`${locale}/${route || "home"} fits a 390px viewport`, async ({ app, browser }) => {
      await browser.setViewport(mobile);
      await app.open(`/${locale}/${route}`);
      const widths = await browser.evaluate(() => ({
        scroll: document.documentElement.scrollWidth,
        client: document.documentElement.clientWidth,
      }));
      expect(widths.scroll).toBeLessThanOrEqual(widths.client + 1);
      await expect(browser.locator("header [data-nav-toggle]")).toBeVisible();
    });
  }

  test(`${locale} mobile navigation opens and closes`, async ({ app, browser }) => {
    await browser.setViewport(mobile);
    await app.open(`/${locale}/`);
    const toggle = browser.locator("header [data-nav-toggle]");
    await expect(toggle).toBeVisible();
    await expect(browser.locator("header [data-site-nav]")).toBeHidden();
    await toggle.click();
    await expect(browser.locator("header [data-site-nav]")).toBeVisible();
    await toggle.click();
    await expect(browser.locator("header [data-site-nav]")).toBeHidden();
  });

  test(`${locale} mobile blog list shows article cards without overflow`, async ({ app, browser }) => {
    await browser.setViewport(mobile);
    await app.open(`/${locale}/blog/`);
    await expect(browser.locator("main")).toBeVisible();
    expect(await browser.locator("main a[href*='/blog/']").count()).toBeGreaterThan(0);
    const widths = await browser.evaluate(() => ({
      scroll: document.documentElement.scrollWidth,
      client: document.documentElement.clientWidth,
    }));
    expect(widths.scroll).toBeLessThanOrEqual(widths.client + 1);
  });

  test(`${locale} AI Wiki sidebar toggles on mobile`, async ({ app, browser }) => {
    await browser.setViewport(mobile);
    await app.open(`/${locale}/AIWiki/ai-agent/`);
    const toggle = browser.locator(".docs-sidebar-toggle");
    const nav = browser.locator(".docs-sidebar-nav");
    await expect(toggle).toBeVisible();
    await expect(nav).toBeHidden();
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await expect(nav).toBeVisible();
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(nav).toBeHidden();
  });
}

test("mobile navigation stays above its backdrop after scrolling", async ({ app, browser }) => {
  await browser.setViewport(mobile);
  await app.open("/zh-cn/");
  await browser.evaluate(() => {
    window.scrollTo(0, 600);
    return null;
  });
  await browser.locator("header [data-nav-toggle]").click();
  const state = await browser.evaluate(() => {
    const nav = document.querySelector("[data-site-nav]");
    const backdrop = document.querySelector("[data-nav-backdrop]");
    const link = nav?.querySelector("a");
    if (!(nav instanceof HTMLElement) || !(backdrop instanceof HTMLElement) || !(link instanceof HTMLElement)) return null;
    const rect = link.getBoundingClientRect();
    const hit = document.elementFromPoint(rect.left + rect.width / 2, rect.top + rect.height / 2);
    const navZ = Number.parseInt(getComputedStyle(nav).zIndex, 10);
    const backdropZ = Number.parseInt(getComputedStyle(backdrop).zIndex, 10);
    return {
      navAboveBackdrop: Number.isFinite(navZ) && Number.isFinite(backdropZ) && navZ > backdropZ,
      linkReceivesHit: Boolean(hit?.closest("[data-site-nav]")),
      background: getComputedStyle(nav).backgroundColor,
    };
  });
  expect(state).not.toBeNull();
  expect(state!.navAboveBackdrop).toBe(true);
  expect(state!.linkReceivesHit).toBe(true);
  expect(state!.background).not.toMatch(/rgba?\(\s*0\s*,\s*0\s*,\s*0\s*,\s*0\s*\)/);
});

for (const viewport of [
  { name: "tablet", width: 768, height: 1024 },
  { name: "laptop", width: 1024, height: 768 },
  { name: "desktop", width: 1440, height: 900 },
]) {
  for (const locale of ["en", "zh-cn"] as const) {
    test(`${locale} homepage keeps the shared layout at ${viewport.name} width`, async ({ app, browser }) => {
      await browser.setViewport({ width: viewport.width, height: viewport.height });
      await app.open(`/${locale}/`);
      await expect(browser.locator("header.l-header")).toBeVisible();
      await expect(browser.locator("main")).toBeVisible();
      await expect(browser.locator("footer.l-footer")).toBeVisible();
      const mainWidth = await browser.evaluate(() => document.querySelector("main")!.getBoundingClientRect().width);
      expect(mainWidth).toBeGreaterThan(500);
      expect(mainWidth).toBeLessThanOrEqual(viewport.width);
    });
  }
}

test("prompts explorer keeps its title and back link readable on mobile", async ({ app, browser }) => {
  await browser.setViewport(mobile);
  await app.open("/en/prompts/all/");
  await expect(browser.locator(".explorer-header h1")).toBeVisible();
  await expect(browser.locator(".explorer-header .explorer-back")).toBeVisible();
  const widths = await browser.evaluate(() => ({
    scroll: document.documentElement.scrollWidth,
    client: document.documentElement.clientWidth,
  }));
  expect(widths.scroll).toBeLessThanOrEqual(widths.client + 1);
});
