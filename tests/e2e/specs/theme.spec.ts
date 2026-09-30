import { test, expect } from "@playwright/test";

test.describe("主题切换", () => {
  test("en 首页：主题切换按钮可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });
    const themeToggle = page.locator("[data-theme-toggle]");
    await expect(themeToggle).toBeVisible({ timeout: 10000 });
  });

  test("zh-cn 首页：主题切换按钮可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });
    const themeToggle = page.locator("[data-theme-toggle]");
    await expect(themeToggle).toBeVisible({ timeout: 10000 });
  });

  test("en 主题菜单以图标和说明展示三种模式", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });
    await page.locator("[data-theme-toggle]").click();

    const systemOption = page.locator('[data-theme-option="system"]');
    const lightOption = page.locator('[data-theme-option="light"]');
    const darkOption = page.locator('[data-theme-option="dark"]');
    await expect(systemOption).toHaveRole("button");
    await expect(systemOption).toHaveAttribute("aria-pressed", "true");
    await expect(systemOption).toContainText("Follow system");
    await expect(systemOption).toContainText("Match your device's appearance setting");
    await expect(systemOption.locator(".theme-option__icon")).toHaveText("brightness_auto");
    await expect(lightOption.locator(".theme-option__icon")).toHaveText("light_mode");
    await expect(darkOption.locator(".theme-option__icon")).toHaveText("dark_mode");
    await expect(lightOption).toContainText("Always use the light theme");
    await expect(darkOption).toContainText("Always use the dark theme");
  });

  test("zh-cn 主题菜单以本地化图标和说明展示三种模式", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });
    await page.locator("[data-theme-toggle]").click();

    const systemOption = page.locator('[data-theme-option="system"]');
    const lightOption = page.locator('[data-theme-option="light"]');
    const darkOption = page.locator('[data-theme-option="dark"]');
    await expect(systemOption).toHaveRole("button");
    await expect(systemOption).toHaveAttribute("aria-pressed", "true");
    await expect(systemOption).toContainText("跟随系统");
    await expect(systemOption).toContainText("根据设备的浅色或深色设置自动切换");
    await expect(systemOption.locator(".theme-option__icon")).toHaveText("brightness_auto");
    await expect(lightOption.locator(".theme-option__icon")).toHaveText("light_mode");
    await expect(darkOption.locator(".theme-option__icon")).toHaveText("dark_mode");
    await expect(lightOption).toContainText("始终使用浅色主题");
    await expect(darkOption).toContainText("始终使用深色主题");
  });

  test("zh-cn 移动端主题下拉菜单不会溢出视口", async ({ page, baseURL }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });
    await page.locator("[data-theme-toggle]").click();

    const panel = page.locator("[data-theme-panel]");
    await expect(panel).toBeVisible();
    await expect(page.locator('[data-theme-option="system"]')).toContainText("根据设备的浅色或深色设置自动切换");

    const panelBounds = await panel.boundingBox();
    expect(panelBounds).not.toBeNull();
    if (!panelBounds) throw new Error("Theme panel should have a rendered bounding box");
    expect(panelBounds.x).toBeGreaterThanOrEqual(0);
    expect(panelBounds.x + panelBounds.width).toBeLessThanOrEqual(375);
  });

  test("首次访问默认跟随系统，并随系统浅色/深色变化", async ({ page, baseURL }) => {
    await page.emulateMedia({ colorScheme: "light" });
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });

    const htmlElement = page.locator("html");
    await expect(htmlElement).toHaveAttribute("data-theme-preference", "system");
    await expect(htmlElement).toHaveAttribute("data-theme", "light");

    await page.emulateMedia({ colorScheme: "dark" });
    await expect(htmlElement).toHaveAttribute("data-theme", "dark");

    await page.emulateMedia({ colorScheme: "light" });
    await expect(htmlElement).toHaveAttribute("data-theme", "light");
  });

  test("手动浅色偏好在刷新后保留，并忽略系统深色变化", async ({ page, baseURL }) => {
    await page.emulateMedia({ colorScheme: "light" });
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });

    await page.locator("[data-theme-toggle]").click();
    await page.locator('[data-theme-option="light"]').click();

    const htmlElement = page.locator("html");
    await expect(htmlElement).toHaveAttribute("data-theme-preference", "light");
    await expect(htmlElement).toHaveAttribute("data-theme", "light");
    await expect(page.locator("[data-theme-panel]")).toBeHidden();

    await page.emulateMedia({ colorScheme: "dark" });
    await expect(htmlElement).toHaveAttribute("data-theme", "light");

    await page.reload({ waitUntil: "domcontentloaded" });
    await expect(htmlElement).toHaveAttribute("data-theme-preference", "light");
    await expect(htmlElement).toHaveAttribute("data-theme", "light");
    await page.locator("[data-theme-toggle]").click();
    await expect(page.locator('[data-theme-option="light"]')).toHaveAttribute("aria-pressed", "true");
  });

  test("手动深色偏好在刷新后保留，并忽略系统浅色变化", async ({ page, baseURL }) => {
    await page.emulateMedia({ colorScheme: "light" });
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });

    await page.locator("[data-theme-toggle]").click();
    await page.locator('[data-theme-option="dark"]').click();

    const htmlElement = page.locator("html");
    await expect(htmlElement).toHaveAttribute("data-theme-preference", "dark");
    await expect(htmlElement).toHaveAttribute("data-theme", "dark");

    await page.emulateMedia({ colorScheme: "light" });
    await expect(htmlElement).toHaveAttribute("data-theme", "dark");

    await page.reload({ waitUntil: "domcontentloaded" });
    await expect(htmlElement).toHaveAttribute("data-theme-preference", "dark");
    await expect(htmlElement).toHaveAttribute("data-theme", "dark");
    await page.locator("[data-theme-toggle]").click();
    await expect(page.locator('[data-theme-option="dark"]')).toHaveAttribute("aria-pressed", "true");
  });

  test("选择跟随系统后，网站重新响应系统主题变化", async ({ page, baseURL }) => {
    await page.emulateMedia({ colorScheme: "light" });
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });

    await page.locator("[data-theme-toggle]").click();
    await page.locator('[data-theme-option="light"]').click();
    const htmlElement = page.locator("html");
    await expect(htmlElement).toHaveAttribute("data-theme", "light");

    await page.locator("[data-theme-toggle]").click();
    await page.locator('[data-theme-option="system"]').click();
    await expect(htmlElement).toHaveAttribute("data-theme-preference", "system");

    await page.emulateMedia({ colorScheme: "dark" });
    await expect(htmlElement).toHaveAttribute("data-theme", "dark");
    await page.emulateMedia({ colorScheme: "light" });
    await expect(htmlElement).toHaveAttribute("data-theme", "light");
  });

  test("明确主题偏好在页面之间保持一致", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });
    await page.locator("[data-theme-toggle]").click();
    await page.locator('[data-theme-option="dark"]').click();

    const htmlElement = page.locator("html");
    await expect(htmlElement).toHaveAttribute("data-theme", "dark");
    await page.goto((baseURL || "") + "/en/blog/", { waitUntil: "domcontentloaded" });
    await expect(htmlElement).toHaveAttribute("data-theme-preference", "dark");
    await expect(htmlElement).toHaveAttribute("data-theme", "dark");
  });

  test("主题菜单按 Escape 关闭并将焦点还给触发按钮", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });
    const trigger = page.locator("[data-theme-toggle]");
    await trigger.click();
    await page.locator('[data-theme-option="system"]').press("Escape");

    await expect(page.locator("[data-theme-panel]")).toBeHidden();
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await expect(trigger).toBeFocused();
  });

  test("Proofline theme-color follows the resolved light and dark surface", async ({ page, baseURL }) => {
    await page.emulateMedia({ colorScheme: "light" });
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });
    await page.evaluate(() => localStorage.removeItem("themePreference"));
    await page.reload({ waitUntil: "domcontentloaded" });

    const themeColor = page.locator('meta[name="theme-color"]');
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
    await expect(themeColor).toHaveAttribute("content", "#faf9f6");

    await page.evaluate(() => window.setThemePreference?.("dark"));
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
    await expect(themeColor).toHaveAttribute("content", "#13191c");
  });
});
