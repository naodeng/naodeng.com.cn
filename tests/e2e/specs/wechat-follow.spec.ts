import { test, expect } from "@playwright/test";

test.describe("中文首页微信公众号入口", () => {
  test("仅首页展示入口，并可打开和关闭二维码弹窗", async ({ page }) => {
    await page.goto("/zh-cn/", { waitUntil: "domcontentloaded" });

    const triggers = page.getByRole("button", { name: "关注公众号" });
    await expect(triggers).toHaveCount(2);
    await expect(triggers.first()).toBeVisible();

    await triggers.first().click();
    const dialog = page.getByRole("dialog", { name: "关注软件测试同学公众号" });
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole("img", { name: "软件测试同学微信公众号二维码" })).toHaveAttribute(
      "src",
      "/brand/software-testing-students-wechat-qr.jpg",
    );

    await page.keyboard.press("Escape");
    await expect(dialog).not.toBeVisible();

    await triggers.last().click();
    await expect(dialog).toBeVisible();
    await dialog.getByRole("button", { name: "关闭二维码" }).click();
    await expect(dialog).not.toBeVisible();

    await page.goto("/zh-cn/blog/", { waitUntil: "domcontentloaded" });
    await expect(page.getByRole("button", { name: "关注公众号" })).toHaveCount(1);
  });

  test("移动端顶部品牌不会被公众号入口遮挡", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/zh-cn/", { waitUntil: "domcontentloaded" });

    const brandText = page.locator(".site-title-primary");
    const headerTools = page.locator(".header-utils");
    const brandBox = await brandText.boundingBox();
    const toolsBox = await headerTools.boundingBox();

    expect(brandBox).not.toBeNull();
    expect(toolsBox).not.toBeNull();
    expect(brandBox!.x + brandBox!.width).toBeLessThanOrEqual(toolsBox!.x);
  });

  test("首次进入任一中文页面显示一次引导并写入 Cookie", async ({ page, context }) => {
    await context.clearCookies();
    await page.goto("/zh-cn/blog/", { waitUntil: "domcontentloaded" });

    const coachmark = page.getByText("快速关注微信公众号吧", { exact: true });
    await expect(coachmark).toBeVisible();
    await expect
      .poll(async () => (await context.cookies()).some((cookie) => cookie.name === "wechat_follow_prompt_seen"))
      .toBe(true);
    await expect(coachmark).not.toBeVisible({ timeout: 8_000 });

    await page.goto("/zh-cn/about/", { waitUntil: "domcontentloaded" });
    await expect(page.getByText("快速关注微信公众号吧", { exact: true })).not.toBeVisible();

    await page.goto("/en/", { waitUntil: "domcontentloaded" });
    await expect(page.getByRole("button", { name: "关注公众号" })).toHaveCount(0);
    await expect(page.getByRole("dialog", { name: "关注软件测试同学公众号" })).toHaveCount(0);
  });
});
