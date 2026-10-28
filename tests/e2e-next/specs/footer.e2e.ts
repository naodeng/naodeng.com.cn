import { test } from "@e2e-dev/web";
import { expect } from "e2e";

test("Chinese footer exposes its QR code and RSS without mobile overflow", async ({ app, browser }) => {
  await browser.setViewport({ width: 375, height: 844 });
  await app.open("/zh-cn/");

  await expect(browser.locator(".footer-subscribe img")).toHaveAttribute(
    "src",
    "/brand/software-testing-students-wechat-qr.jpg",
  );
  await expect(browser.locator(".footer-subscribe a[href*='/zh-cn/rss.xml']")).toBeVisible();
  const widths = await browser.evaluate(() => ({
    scroll: document.documentElement.scrollWidth,
    viewport: document.documentElement.clientWidth,
  }));
  expect(widths.scroll).toBeLessThanOrEqual(widths.viewport + 1);
});

test("English footer keeps grouped product and social destinations", async ({ app, browser }) => {
  await app.open("/en/");
  await expect(browser.locator("footer [data-footer-group]")).toHaveCount(5);
  await expect(browser.locator("footer a[href='/en/dsh-qa/']")).toBeVisible();
  await expect(browser.locator("footer a[href='/en/ai-test-auditor/']")).toBeVisible();
  await expect(browser.locator("footer a[href='https://github.com/naodeng']")).toBeVisible();
});

test("Chinese footer learning links keep safe external-link attributes", async ({ app, browser }) => {
  await app.open("/zh-cn/");
  const links = [
    ["english-learning", "https://30-day-qa-english-learning-plan.inaodeng.com/"],
    ["agent-learning", "https://ai-agent-30-day-learning-plan.inaodeng.com/"],
    ["playwright-learning", "https://30-day-qa-playwright-learning-plan.inaodeng.com/"],
  ] as const;
  for (const [item, href] of links) {
    const link = browser.locator(`footer .footer-nav a[href='${href}']`);
    await expect(link).toHaveAttribute("href", href);
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", "noopener noreferrer");
  }
});

test("footer surface is flat and the DeepSeek link stays on one line", async ({ app, browser }) => {
  await browser.setViewport({ width: 1440, height: 900 });
  await app.open("/zh-cn/");
  const styles = await browser.evaluate(() => {
    const style = getComputedStyle(document.querySelector("footer.l-footer")!);
    const link = Array.from(document.querySelectorAll("footer a")).find((item) =>
      item.textContent?.includes("DeepSeek 学习计划"),
    );
    return {
      backgroundImage: style.backgroundImage,
      backdropFilter: style.backdropFilter,
      linkHeight: link?.getBoundingClientRect().height ?? 0,
      lineHeight: Number.parseFloat(link ? getComputedStyle(link).lineHeight : "0"),
    };
  });
  expect(styles.backgroundImage).toBe("none");
  expect(styles.backdropFilter).toBe("none");
  expect(styles.linkHeight).toBeLessThanOrEqual(styles.lineHeight * 1.25);
});
