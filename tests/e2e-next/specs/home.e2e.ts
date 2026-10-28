import { test } from "@e2e-dev/web";
import { expect } from "e2e";

const homepages = [
  { locale: "zh-cn", heading: "把测试任务变成可执行的下一步" },
  { locale: "en", heading: "Turn testing tasks into actionable next steps" },
] as const;

for (const { locale, heading } of homepages) {
  test(`${locale} homepage keeps the task, content, and product entry points`, async ({ app, browser, screen }) => {
    await app.open(`/${locale}/`);

    await expect(screen.getByRole("heading", { name: heading, level: 1 })).toBeVisible();
    await expect(browser.locator("[data-home-task]")).toHaveCount(6);
    await expect(browser.locator("[data-home-capability]")).toHaveCount(3);
    await expect(browser.locator(".home-explore-grid .home-card")).toHaveCount(4);
    await expect(browser.locator(".home-post-list > li")).toHaveCount(4);
    await expect(browser.locator(`.home-explore-grid .home-card[href='/${locale}/wiki/']`)).toBeVisible();
    await expect(browser.locator(`.home-product-link[href='/${locale}/dsh-qa/']`)).toBeVisible();
    await expect(browser.locator(`.home-product-link[href='/${locale}/ai-test-auditor/']`)).toBeVisible();
    await expect(browser.locator(".home-prompts, .home-qaskills, .home-projects, .home-guild, .home-wiki, .home-aiwiki, .home-tags")).toHaveCount(0);
    if (locale === "zh-cn") {
      await expect(browser.locator("#home-product-links-title")).toHaveText("产品官网");
      await expect(browser.locator(".home-product-link strong").nth(0)).toHaveText("DSH-QA");
      await expect(browser.locator(".home-product-link strong").nth(1)).toHaveText("AI test audit");
      await expect(browser.locator(".task-card__chip").filter({ hasText: "技能" }).first()).toBeVisible();
    }

    const iconCounts = await browser.evaluate(() => [
      document.querySelectorAll("[data-home-task] .material-icons-sharp").length,
      document.querySelectorAll("[data-home-capability] .material-icons-sharp").length,
      document.querySelectorAll(".home-explore-grid .home-card .material-icons-sharp").length,
    ]);
    expect(iconCounts).toEqual([6, 3, 4]);

    const sectionOrder = await browser.evaluate(() =>
      Array.from(document.querySelectorAll(".home-page > section"), (section) =>
        ["home-hero", "home-task-navigator", "home-capability-guide", "home-latest-posts", "home-explore-hub"].find((name) => section.classList.contains(name)) ?? "other",
      ),
    );
    expect(sectionOrder).toEqual([
      "home-hero",
      "home-task-navigator",
      "home-capability-guide",
      "home-latest-posts",
      "home-explore-hub",
    ]);
  });
}

test("homepage hero links lead to the task navigator and skill library", async ({ app, browser }) => {
  await app.open("/zh-cn/");

  await expect(browser.locator(".home-hero__ctas a")).toHaveCount(2);
  await expect(browser.locator(".home-hero__ctas a").nth(0)).toHaveAttribute("href", "#home-task-navigator");
  await expect(browser.locator(".home-hero__ctas a").nth(1)).toHaveAttribute("href", "/zh-cn/qaskills/");
  await expect(browser.locator(".hero-topic-map a")).toHaveCount(3);
  await expect(browser.locator(".home-primary-modes")).toHaveCount(0);
});

test("homepage editorial hero and section headings keep clear visual hierarchy", async ({ app, browser }) => {
  await browser.setViewport({ width: 1440, height: 900 });
  await app.open("/en/");
  const metrics = await browser.evaluate(() => {
    const hero = getComputedStyle(document.querySelector(".home-hero")!);
    const inner = document.querySelector(".home-task-navigator .home-inner")!.getBoundingClientRect();
    const title = document.querySelector(".home-task-navigator .home-band__title")!;
    const cardTitle = document.querySelector(".task-card h3")!;
    return {
      backgroundImage: hero.backgroundImage,
      backdropFilter: hero.backdropFilter,
      left: inner.left,
      right: window.innerWidth - inner.right,
      titleSize: Number.parseFloat(getComputedStyle(title).fontSize),
      cardTitleSize: Number.parseFloat(getComputedStyle(cardTitle).fontSize),
    };
  });
  expect(metrics.backgroundImage).toBe("none");
  expect(metrics.backdropFilter).toBe("none");
  expect(Math.abs(metrics.left - metrics.right)).toBeLessThanOrEqual(2);
  expect(metrics.titleSize).toBeGreaterThan(metrics.cardTitleSize * 1.5);
});

test("task cards switch from two desktop columns to one mobile column", async ({ app, browser }) => {
  await browser.setViewport({ width: 1440, height: 900 });
  await app.open("/zh-cn/");
  const desktopColumns = await browser.evaluate(() =>
    getComputedStyle(document.querySelector(".task-grid")!).gridTemplateColumns.split(" ").length,
  );
  expect(desktopColumns).toBe(2);

  await browser.setViewport({ width: 390, height: 844 });
  const mobileColumns = await browser.evaluate(() =>
    getComputedStyle(document.querySelector(".task-grid")!).gridTemplateColumns.split(" ").length,
  );
  expect(mobileColumns).toBe(1);
});
