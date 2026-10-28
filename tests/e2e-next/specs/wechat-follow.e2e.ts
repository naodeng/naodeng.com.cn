import { test } from "@e2e-dev/web";
import { expect } from "e2e";

test("Chinese homepage opens and closes the official-account QR dialog", async ({ app, browser, screen }) => {
  await app.open("/zh-cn/");
  const triggers = screen.getByRole("button", { name: "关注公众号" });
  await expect(triggers).toHaveCount(2);

  await triggers.first().click();
  const dialog = screen.getByRole("dialog", { name: "关注软件测试同学公众号" });
  await expect(dialog).toBeVisible();
  await expect(browser.locator("[data-wechat-dialog] img")).toHaveAttribute(
    "src",
    "/brand/software-testing-students-wechat-qr.jpg",
  );
  await browser.locator("body").press("Escape");
  await expect(dialog).toBeHidden();

  await triggers.last().click();
  await expect(dialog).toBeVisible();
  await dialog.getByRole("button", { name: "关闭二维码" }).click();
  await expect(dialog).toBeHidden();

  await app.open("/zh-cn/blog/");
  await expect(screen.getByRole("button", { name: "关注公众号" })).toHaveCount(1);
});

test("mobile header brand does not overlap the account entry", async ({ app, browser }) => {
  await browser.setViewport({ width: 390, height: 844 });
  await app.open("/zh-cn/");
  const bounds = await browser.evaluate(() => {
    const brand = document.querySelector(".site-title-primary")?.getBoundingClientRect();
    const tools = document.querySelector(".header-utils")?.getBoundingClientRect();
    return brand && tools ? { brandRight: brand.right, toolsLeft: tools.left } : null;
  });
  expect(bounds).not.toBeNull();
  expect(bounds!.brandRight).toBeLessThanOrEqual(bounds!.toolsLeft);
});

test("first Chinese visit records the coachmark and later pages do not repeat it", async ({ app, browser, screen }) => {
  await app.open("/zh-cn/blog/");
  const prompt = screen.getByText("快速关注微信公众号吧", { exact: true });
  await expect(prompt).toBeVisible();
  await expect.poll(async () =>
    (await browser.cookies()).some((cookie) => cookie.name === "wechat_follow_prompt_seen"),
  ).toBe(true);
  await expect(prompt).toBeHidden({ timeout: 15_000 });

  await app.open("/zh-cn/about/");
  await expect(screen.getByText("快速关注微信公众号吧", { exact: true })).toBeHidden();
  await app.open("/en/");
  await expect(screen.getByRole("button", { name: "关注公众号" })).toHaveCount(0);
  await expect(screen.getByRole("dialog", { name: "关注软件测试同学公众号" })).toHaveCount(0);
});
