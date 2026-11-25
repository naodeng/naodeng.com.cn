import { test } from "@e2e-dev/web";
import { expect } from "e2e";

test("Chinese footer exposes its QR code and RSS without mobile overflow", async ({ app, browser }) => {
  await browser.setViewport({ width: 375, height: 844 });
  await app.open("/zh-cn/");

  await expect(browser.locator("footer [data-footer-group='wechat'] img")).toHaveAttribute(
    "src",
    "/brand/software-testing-students-wechat-qr.jpg",
  );
  await expect(browser.locator("footer .footer-brand__socials a[href^='/zh-cn/rss.xml'][aria-label='订阅 RSS'] svg")).toBeVisible();
  await expect(browser.locator("footer .footer-brand__social-link--rss")).toContainText("订阅 RSS");
  await expect(browser.locator("footer [data-footer-group='wechat'] a[href*='rss']")).toHaveCount(0);
  const widths = await browser.evaluate(() => ({
    scroll: document.documentElement.scrollWidth,
    viewport: document.documentElement.clientWidth,
  }));
  expect(widths.scroll).toBeLessThanOrEqual(widths.viewport + 1);
});

test("Chinese footer matches the Figma brand, social, and WeChat layout", async ({ app, browser }) => {
  await browser.setViewport({ width: 1440, height: 900 });
  await app.open("/zh-cn/");

  await expect(browser.locator("footer .footer-brand a[href='https://github.com/naodeng']")).toBeVisible();
  await expect(browser.locator("footer .footer-brand a[href='https://x.com/inaodeng']")).toBeVisible();
  const socialIcons = await browser.evaluate(() => Array.from(
    document.querySelectorAll("footer .footer-brand__socials a"),
    (link) => ({
      label: link.getAttribute("aria-label"),
      hasIcon: link.querySelector("svg") !== null,
    }),
  ));
  expect(socialIcons).toEqual([
    { label: "GitHub", hasIcon: true },
    { label: "X", hasIcon: true },
    { label: "Medium", hasIcon: true },
    { label: "微博", hasIcon: true },
    { label: "Ko-fi", hasIcon: true },
    { label: "邮箱", hasIcon: true },
    { label: "订阅 RSS", hasIcon: true },
  ]);
  await expect(browser.locator("footer .footer-brand__social-link--rss")).toContainText("订阅 RSS");
  const rssStyles = await browser.evaluate(() => {
    const element = document.querySelector("footer .footer-brand__social-link--rss")!;
    return {
      borderRadius: getComputedStyle(element).borderRadius,
      minWidth: getComputedStyle(element).minWidth,
      label: element.querySelector("span")?.textContent?.trim(),
    };
  });
  expect(rssStyles).toEqual({ borderRadius: "999px", minWidth: "96px", label: "订阅 RSS" });
  const socialButtonRadius = await browser.evaluate(() => getComputedStyle(
    document.querySelector("footer .footer-brand__social-link:not(.footer-brand__social-link--rss)")!,
  ).borderRadius);
  expect(socialButtonRadius).toBe("50%");
  await expect(browser.locator("footer [data-footer-group='wechat'] a[href*='rss']")).toHaveCount(0);
  await expect(browser.locator("footer [data-footer-group='wechat'] img")).toHaveAttribute(
    "src",
    "/brand/software-testing-students-wechat-qr.jpg",
  );
  await expect(browser.locator("footer [data-footer-locale]")).toHaveCount(0);

  const shellWidth = await browser.evaluate(() => document.querySelector("footer .footer-main")!.getBoundingClientRect().width);
  expect(shellWidth).toBeGreaterThan(1200);
  const legalDirection = await browser.evaluate(() => getComputedStyle(document.querySelector("footer .footer-info")!).flexDirection);
  expect(legalDirection).toBe("row");
  const footerWeights = await browser.evaluate(() => ({
    navigation: getComputedStyle(document.querySelector("footer [data-footer-group='explore'] a")!).fontWeight,
    rss: getComputedStyle(document.querySelector("footer .footer-brand__socials a[aria-label='订阅 RSS']")!).fontWeight,
  }));
  expect(footerWeights).toEqual({ navigation: "400", rss: "650" });

  const dimensions = await browser.evaluate(() => ({
    footer: document.querySelector("footer.l-footer")!.getBoundingClientRect().height,
    main: document.querySelector("footer .footer-main")!.getBoundingClientRect().height,
  }));
  expect(Math.abs(dimensions.main - 211)).toBeLessThan(1);
  expect(Math.abs(dimensions.footer - 366)).toBeLessThan(1);
  for (const [group, rows] of [["explore", 2], ["knowledge", 2], ["tools", 5], ["site", 4], ["products", 2], ["wechat", 1]] as const) {
    await expect(browser.locator(`footer [data-footer-group='${group}'] [data-footer-row]`)).toHaveCount(rows);
  }
  const chineseRows = await browser.evaluate(() => Object.fromEntries(
    ["explore", "knowledge", "tools", "site", "products"].map((group) => [
      group,
      Array.from(document.querySelectorAll(`footer [data-footer-group='${group}'] [data-footer-row]`), (row) => row.textContent?.replace(/\s+/g, " ").trim()),
    ]),
  ));
  expect(chineseRows).toEqual({
    explore: ["关于 · 归档 · 项目", "系列 · 标签"],
    knowledge: ["软件测试百科 · AI 百科", "自动化测试指南"],
    tools: ["软件测试提示词库", "软件测试技能库", "Agent学习 · 英语学习", "Playwright学习", "DeepSeek 学习计划"],
    site: ["版权信息 · 隐私政策", "友情链接 · 支持", "状态 · 访问统计", "站点地图"],
    products: ["DSH-QA", "AI test audit"],
  });
});

test("Chinese mobile footer follows the designed row rhythm and full height", async ({ app, browser }) => {
  await browser.setViewport({ width: 390, height: 844 });
  await app.open("/zh-cn/");

  const dimensions = await browser.evaluate(() => ({
    footer: document.querySelector("footer.l-footer")!.getBoundingClientRect().height,
    main: document.querySelector("footer .footer-main")!.getBoundingClientRect().height,
    scroll: document.documentElement.scrollWidth,
  }));
  expect(Math.abs(dimensions.main - 1006)).toBeLessThan(1);
  expect(Math.abs(dimensions.footer - 1173)).toBeLessThan(1);
  expect(dimensions.scroll).toBeLessThanOrEqual(391);
  for (const [group, rows] of [["explore", 2], ["knowledge", 2], ["tools", 5], ["site", 4], ["products", 2], ["wechat", 1]] as const) {
    await expect(browser.locator(`footer [data-footer-group='${group}'] [data-footer-row]`)).toHaveCount(rows);
  }
});

test("footer shell expands cleanly at 2K and 4K widths", async ({ app, browser }) => {
  await app.open("/zh-cn/");
  for (const width of [2048, 3840]) {
    await browser.setViewport({ width, height: 1000 });
    const layout = await browser.evaluate(() => ({
      shellWidth: document.querySelector("footer .footer-main")!.getBoundingClientRect().width,
      viewport: document.documentElement.clientWidth,
      scroll: document.documentElement.scrollWidth,
    }));
    expect(layout.shellWidth).toBeGreaterThan(1180);
    expect(layout.scroll).toBeLessThanOrEqual(layout.viewport + 1);
  }
});

test("Chinese desktop footer gives grouped links room to stay on one line", async ({ app, browser }) => {
  await browser.setViewport({ width: 1336, height: 900 });
  await app.open("/zh-cn/");

  const layout = await browser.evaluate(() => ({
    shellWidth: document.querySelector("footer .footer-main")!.getBoundingClientRect().width,
    groupedRowHeights: Array.from(
      document.querySelectorAll("footer .footer-nav-group li[data-footer-row]"),
      (row) => ({
        group: row.closest<HTMLElement>("[data-footer-group]")?.dataset.footerGroup,
        linkCount: row.querySelectorAll("a").length,
        height: row.getBoundingClientRect().height,
      }),
    ).filter(({ group, linkCount }) => ["explore", "tools", "site"].includes(group ?? "") && linkCount > 1)
      .map(({ height }) => height),
  }));

  expect(layout.shellWidth).toBeGreaterThan(1200);
  expect(layout.groupedRowHeights.length).toBeGreaterThan(0);
  expect(layout.groupedRowHeights.every((height) => height <= 25)).toBe(true);
});

test("English footer keeps grouped product and social destinations", async ({ app, browser }) => {
  await app.open("/en/");
  await expect(browser.locator("footer [data-footer-group]")).toHaveCount(5);
  await expect(browser.locator("footer .footer-brand a[href='https://github.com/naodeng']")).toBeVisible();
  await expect(browser.locator("footer [data-footer-group='wechat']")).toHaveCount(0);
  await expect(browser.locator("footer [data-footer-locale]")).toHaveCount(0);
  await expect(browser.locator("footer a[href='/en/dsh-qa/']")).toBeVisible();
  await expect(browser.locator("footer a[href='/en/ai-test-auditor/']")).toBeVisible();
  await expect(browser.locator("footer a[href='https://github.com/naodeng']")).toBeVisible();
  await expect(browser.locator("footer .footer-brand__socials a[href^='/en/rss.xml'][aria-label='RSS Feed'] svg")).toBeVisible();
  await expect(browser.locator("footer .footer-brand__social-link--rss")).toContainText("RSS Feed");
  const shellWidth = await browser.evaluate(() => document.querySelector("footer .footer-main")!.getBoundingClientRect().width);
  expect(shellWidth).toBeGreaterThan(1200);
  const legalDirection = await browser.evaluate(() => getComputedStyle(document.querySelector("footer .footer-info")!).flexDirection);
  expect(legalDirection).toBe("row");
  for (const [group, rows] of [["explore", 2], ["knowledge", 2], ["tools", 2], ["site", 4], ["products", 2]] as const) {
    await expect(browser.locator(`footer [data-footer-group='${group}'] [data-footer-row]`)).toHaveCount(rows);
  }
  const englishRows = await browser.evaluate(() => Object.fromEntries(
    ["explore", "knowledge", "tools", "site", "products"].map((group) => [
      group,
      Array.from(document.querySelectorAll(`footer [data-footer-group='${group}'] [data-footer-row]`), (row) => row.textContent?.replace(/\s+/g, " ").trim()),
    ]),
  ));
  expect(englishRows).toEqual({
    explore: ["About · Archive", "Projects · Series · Tags"],
    knowledge: ["QA Wiki · AI Wiki", "Automation Testing Guild"],
    tools: ["QA Prompt Library", "QA Skill Library"],
    site: ["Copyright · Privacy", "Friends · Support", "Status · Analytics", "Sitemap"],
    products: ["DSH-QA", "AI test audit"],
  });
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
