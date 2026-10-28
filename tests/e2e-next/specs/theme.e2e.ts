import { test } from "@e2e-dev/web";
import { expect } from "e2e";

for (const { locale, labels } of [
  {
    locale: "en",
    labels: ["Follow system", "Always use the light theme", "Always use the dark theme"],
  },
  {
    locale: "zh-cn",
    labels: ["跟随系统", "始终使用浅色主题", "始终使用深色主题"],
  },
] as const) {
  test(`${locale} theme menu describes system, light, and dark modes`, async ({ app, browser }) => {
    await app.open(`/${locale}/`);
    const trigger = browser.locator("[data-theme-toggle]");
    await expect(trigger).toBeVisible();
    await trigger.click();

    await expect(browser.locator('[data-theme-option="system"]')).toHaveAttribute("aria-pressed", "true");
    await expect(browser.locator('[data-theme-option="system"]')).toContainText(labels[0]);
    await expect(browser.locator('[data-theme-option="light"]')).toContainText(labels[1]);
    await expect(browser.locator('[data-theme-option="dark"]')).toContainText(labels[2]);
    await expect(browser.locator('[data-theme-option="system"] .theme-option__icon')).toHaveText("brightness_auto");
    await expect(browser.locator('[data-theme-option="light"] .theme-option__icon')).toHaveText("light_mode");
    await expect(browser.locator('[data-theme-option="dark"] .theme-option__icon')).toHaveText("dark_mode");
  });
}

test("system theme follows the emulated light and dark appearance", async ({ app, browser }) => {
  await browser.addInitScript(() => localStorage.removeItem("themePreference"));
  await browser.emulateMedia({ colorScheme: "light" });
  await app.open("/en/");
  await expect(browser.locator("html")).toHaveAttribute("data-theme-preference", "system");
  await expect(browser.locator("html")).toHaveAttribute("data-theme", "light");

  await browser.emulateMedia({ colorScheme: "dark" });
  await expect(browser.locator("html")).toHaveAttribute("data-theme", "dark");
  await browser.emulateMedia({ colorScheme: "light" });
  await expect(browser.locator("html")).toHaveAttribute("data-theme", "light");
});

test("manual theme preference persists across pages and ignores system changes", async ({ app, browser }) => {
  await browser.emulateMedia({ colorScheme: "light" });
  await app.open("/zh-cn/");
  await browser.locator("[data-theme-toggle]").click();
  await browser.locator('[data-theme-option="dark"]').click();
  await expect(browser.locator("html")).toHaveAttribute("data-theme-preference", "dark");
  await expect(browser.locator("html")).toHaveAttribute("data-theme", "dark");

  await browser.emulateMedia({ colorScheme: "light" });
  await expect(browser.locator("html")).toHaveAttribute("data-theme", "dark");
  await app.open("/en/blog/");
  await expect(browser.locator("html")).toHaveAttribute("data-theme-preference", "dark");
  await expect(browser.locator("html")).toHaveAttribute("data-theme", "dark");
});

test("manual light preference survives reload and system dark changes", async ({ app, browser }) => {
  await browser.emulateMedia({ colorScheme: "light" });
  await app.open("/zh-cn/");
  await browser.locator("[data-theme-toggle]").click();
  await browser.locator('[data-theme-option="light"]').click();
  await expect(browser.locator("html")).toHaveAttribute("data-theme-preference", "light");
  await expect(browser.locator("html")).toHaveAttribute("data-theme", "light");

  await browser.emulateMedia({ colorScheme: "dark" });
  await expect(browser.locator("html")).toHaveAttribute("data-theme", "light");
  await app.open("/zh-cn/");
  await expect(browser.locator("html")).toHaveAttribute("data-theme-preference", "light");
  await expect(browser.locator("html")).toHaveAttribute("data-theme", "light");
});

test("theme menu closes on Escape and returns focus to its trigger", async ({ app, browser }) => {
  await app.open("/en/");
  const trigger = browser.locator("[data-theme-toggle]");
  await trigger.click();
  await browser.locator('[data-theme-option="system"]').press("Escape");
  await expect(browser.locator("[data-theme-panel]")).toBeHidden();
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
  await expect(trigger).toBeFocused();
});

test("choosing system theme restores response to system appearance", async ({ app, browser }) => {
  await browser.emulateMedia({ colorScheme: "light" });
  await app.open("/zh-cn/");
  await browser.locator("[data-theme-toggle]").click();
  await browser.locator('[data-theme-option="dark"]').click();
  await browser.locator("[data-theme-toggle]").click();
  await browser.locator('[data-theme-option="system"]').click();
  await expect(browser.locator("html")).toHaveAttribute("data-theme-preference", "system");
  await browser.emulateMedia({ colorScheme: "dark" });
  await expect(browser.locator("html")).toHaveAttribute("data-theme", "dark");
  await browser.emulateMedia({ colorScheme: "light" });
  await expect(browser.locator("html")).toHaveAttribute("data-theme", "light");
});

test("theme-color metadata follows the selected light and dark surfaces", async ({ app, browser }) => {
  await browser.emulateMedia({ colorScheme: "light" });
  await app.open("/en/");
  const themeColor = browser.locator('meta[name="theme-color"]');
  await expect(browser.locator("html")).toHaveAttribute("data-theme", "light");
  await expect(themeColor).toHaveAttribute("content", "#faf9f6");

  await browser.locator("[data-theme-toggle]").click();
  await browser.locator('[data-theme-option="dark"]').click();
  await expect(browser.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(themeColor).toHaveAttribute("content", "#13191c");
});

test("mobile theme panel stays inside the viewport", async ({ app, browser }) => {
  await browser.setViewport({ width: 375, height: 812 });
  await app.open("/zh-cn/");
  await browser.locator("[data-theme-toggle]").click();
  await expect(browser.locator("[data-theme-panel]")).toBeVisible();
  const bounds = await browser.evaluate(() => {
    const panel = document.querySelector("[data-theme-panel]")!.getBoundingClientRect();
    return { left: panel.left, right: panel.right };
  });
  expect(bounds.left).toBeGreaterThanOrEqual(0);
  expect(bounds.right).toBeLessThanOrEqual(375);
});
