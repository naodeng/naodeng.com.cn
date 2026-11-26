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
    await expect(browser.locator(".hero-topic-map a")).toHaveCount(3);
    await expect(browser.locator(".hero-topic-map a svg")).toHaveCount(3);
    await expect(browser.locator(`.hero-topic-map a[href='/${locale}/qaskills/']`)).toBeVisible();
    await expect(browser.locator(`.hero-topic-map a[href='/${locale}/prompts/']`)).toBeVisible();
    await expect(browser.locator(`.hero-topic-map a[href='/${locale}/AIWiki/']`)).toBeVisible();
    await expect(browser.locator(`.home-explore-grid .home-card[href='/${locale}/wiki/']`)).toBeVisible();
    await expect(browser.locator(`.home-product-link[href='/${locale}/dsh-qa/']`)).toBeVisible();
    await expect(browser.locator(`.home-product-link[href='/${locale}/ai-test-auditor/']`)).toBeVisible();
    await expect(browser.locator("#home-product-links-title")).toHaveText(locale === "zh-cn" ? "产品官网" : "Product sites");
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
        ["home-hero", "home-task-navigator", "home-capability-guide", "home-latest-posts", "home-explore-hub", "home-product-sites", "home-learning-resources"].find((name) => section.classList.contains(name)) ?? "other",
      ),
    );
    expect(sectionOrder).toEqual([
      "home-hero",
      "home-task-navigator",
      "home-capability-guide",
      "home-latest-posts",
      "home-explore-hub",
      "home-product-sites",
      "home-learning-resources",
    ]);
  });
}

test("homepage hero links lead to the task navigator and skill library", async ({ app, browser }) => {
  await app.open("/zh-cn/");

  await expect(browser.locator(".home-hero__ctas a")).toHaveCount(2);
  await expect(browser.locator(".home-hero__ctas a").nth(0)).toHaveAttribute("href", "#home-task-navigator");
  await expect(browser.locator(".home-hero__ctas a").nth(1)).toHaveAttribute("href", "/zh-cn/qaskills/");
  const quickLinks = browser.locator(".hero-topic-map a");
  await expect(quickLinks).toHaveCount(3);
  await expect(browser.locator(".hero-topic-map a svg")).toHaveCount(3);
  await expect(browser.locator(".hero-topic-map a strong")).toHaveCount(3);
  await expect(browser.locator(".hero-topic-map a small")).toHaveCount(3);
  await expect(quickLinks.nth(0)).toHaveAttribute("href", "/zh-cn/qaskills/");
  await expect(quickLinks.nth(1)).toHaveAttribute("href", "/zh-cn/prompts/");
  await expect(quickLinks.nth(2)).toHaveAttribute("href", "/zh-cn/AIWiki/");
  const quickLinkMotion = await browser.evaluate(() => getComputedStyle(document.querySelector(".hero-topic-map a")!).animationName);
  expect(quickLinkMotion).not.toBe("none");
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

test("homepage section headings share one title and subtitle hierarchy", async ({ app, browser }) => {
  await app.open("/zh-cn/");
  for (const width of [390, 854, 1440, 2048, 3840]) {
    await browser.setViewport({ width, height: 900 });
    const headingStyles = await browser.evaluate(() => Array.from(
      document.querySelectorAll(".home-page .home-section-heading"),
      (heading) => {
        const title = heading.querySelector(".home-band__title")!;
        const subtitle = heading.querySelector(".home-band__subtitle");
        const titleStyle = getComputedStyle(title);
        const subtitleStyle = subtitle ? getComputedStyle(subtitle) : undefined;
        return {
          titleFont: titleStyle.fontFamily,
          titleSize: Number.parseFloat(titleStyle.fontSize),
          titleWeight: titleStyle.fontWeight,
          subtitleSize: subtitleStyle ? Number.parseFloat(subtitleStyle.fontSize) : null,
        };
      },
    ));

    expect(headingStyles).toHaveLength(6);
    await expect(browser.locator(".home-section-heading__eyebrow")).toHaveCount(0);
    expect(new Set(headingStyles.map(({ titleFont, titleSize, titleWeight }) =>
      `${titleFont}|${titleSize}|${titleWeight}`,
    )).size).toBe(1);
    expect(headingStyles.every(({ titleSize, subtitleSize }) => subtitleSize === null || titleSize > subtitleSize)).toBe(true);
  }
});

test("homepage task and capability cards use three, two, and one columns responsively", async ({ app, browser }) => {
  await browser.setViewport({ width: 1440, height: 900 });
  await app.open("/zh-cn/");
  for (const [width, expectedColumns] of [[390, 1], [854, 2], [1440, 3], [2048, 3], [3840, 3]] as const) {
    await browser.setViewport({ width, height: 900 });
    const layout = await browser.evaluate(() => ({
      columns: [".task-grid", ".capability-list"].map((selector) =>
        getComputedStyle(document.querySelector(selector)!).gridTemplateColumns.split(" ").length,
      ),
      pageWidth: document.documentElement.scrollWidth,
      viewportWidth: document.documentElement.clientWidth,
    }));
    expect(layout.columns).toEqual([expectedColumns, expectedColumns]);
    expect(layout.pageWidth).toBeLessThanOrEqual(layout.viewportWidth + 1);
  }
});

test("homepage product sites have their own section with a shared level-two heading", async ({ app, browser }) => {
  await app.open("/zh-cn/");

  const productSection = browser.locator(".home-product-sites");
  await expect(productSection).toBeVisible();
  await expect(browser.locator(".home-product-sites h2#home-product-links-title")).toHaveText("产品官网");
  await expect(browser.locator(".home-product-sites .home-product-link")).toHaveCount(2);
  await expect(browser.locator(".home-explore-hub .home-product-link")).toHaveCount(0);
  const articleColumns = await browser.evaluate(() =>
    getComputedStyle(document.querySelector(".home-post-list")!).gridTemplateColumns.split(" ").length,
  );
  expect(articleColumns).toBe(1);
});

for (const locale of ["zh-cn", "en"] as const) {
  test(`${locale} homepage places all learning plans after the main content`, async ({ app, browser }) => {
    await app.open(`/${locale}/`);

    await expect(browser.locator(".home-learning-resources")).toBeVisible();
    await expect(browser.locator(".home-learning-card")).toHaveCount(4);
    await expect(browser.locator(".home-learning-resources .home-section-heading__eyebrow")).toHaveCount(0);

    const sectionHeadingStyles = await browser.evaluate(() => {
      const stylesFor = (selector: string) => {
        const style = getComputedStyle(document.querySelector(selector)!);
        return [style.fontFamily, style.fontSize, style.fontWeight, style.lineHeight];
      };
      return {
        learning: stylesFor(".home-learning-resources .home-band__title"),
        latestPosts: stylesFor(".home-latest-posts .home-band__title"),
      };
    });
    expect(sectionHeadingStyles.learning).toEqual(sectionHeadingStyles.latestPosts);

    const cardTypography = await browser.evaluate(() => {
      const typographyFor = (selector: string) => {
        const style = getComputedStyle(document.querySelector(selector)!);
        return [style.fontFamily, style.fontSize, style.fontWeight, style.lineHeight];
      };
      return {
        learningTitle: typographyFor(".home-learning-card h3"),
        resourceTitle: typographyFor(".home-explore-grid .home-card__title"),
        learningDescription: typographyFor(".home-learning-card__description"),
        resourceDescription: typographyFor(".home-explore-grid .home-card__desc"),
      };
    });
    expect(cardTypography.learningTitle).toEqual(cardTypography.resourceTitle);
    expect(cardTypography.learningDescription).toEqual(cardTypography.resourceDescription);

    const learningSectionIsLast = await browser.evaluate(() => {
      const home = document.querySelector(".home-page");
      const lastSection = Array.from(home?.children ?? []).filter((child) => child.tagName === "SECTION").at(-1);
      return lastSection?.classList.contains("home-learning-resources") ?? false;
    });
    expect(learningSectionIsLast).toBe(true);

    const titles = await browser.locator(".home-learning-card h3").allTextContents();
    expect(titles).toEqual(locale === "zh-cn"
      ? ["AI Agent 学习", "英语学习", "Playwright学习", "DeepSeek 学习计划"]
      : ["AI Agent Learning", "English Learning", "Playwright Learning", "DeepSeek Learning Plan"]);

    const learningCards = await browser.evaluate(() =>
      Array.from(document.querySelectorAll(".home-learning-card"), (card) => ({
        href: (card as HTMLAnchorElement).getAttribute("href"),
        target: (card as HTMLAnchorElement).target,
        description: card.querySelector(".home-learning-card__description")?.textContent?.trim(),
      })),
    );
    expect(learningCards.map(({ href }) => href)).toEqual([
      "https://ai-agent-30-day-learning-plan.inaodeng.com/",
      "https://30-day-qa-english-learning-plan.inaodeng.com/",
      "https://30-day-qa-playwright-learning-plan.inaodeng.com/",
      "https://30-day-qa-deepseek-learning-plan.inaodeng.com/",
    ]);
    expect(learningCards.every(({ target, description }) => target === "_blank" && Boolean(description))).toBe(true);

    for (const [width, expectedColumns] of [[390, 1], [1440, 4], [2048, 4], [3840, 4]] as const) {
      await browser.setViewport({ width, height: 1000 });
      const geometry = await browser.evaluate(() => ({
        columns: getComputedStyle(document.querySelector(".home-learning-grid")!).gridTemplateColumns.split(" ").length,
        pageWidth: document.documentElement.scrollWidth,
        viewportWidth: document.documentElement.clientWidth,
      }));
      expect(geometry.columns).toBe(expectedColumns);
      expect(geometry.pageWidth).toBeLessThanOrEqual(geometry.viewportWidth + 1);
    }
  });

  test(`${locale} homepage shows product details and article dates and tags`, async ({ app, browser }) => {
    await app.open(`/${locale}/`);

    const productDescriptions = await browser.locator(".home-product-link__copy small").allTextContents();
    expect(productDescriptions).toHaveLength(2);
    expect(productDescriptions.every((description) => description.trim().length > 40)).toBe(true);

    await expect(browser.locator(".home-post-item time")).toHaveCount(4);
    await expect(browser.locator(".home-post-item__tags")).toHaveCount(4);
    await expect(browser.locator(".home-post-item__tags").first()).toBeVisible();

    const productCardStyle = await browser.evaluate(() => {
      const card = document.querySelector(".home-product-link")!;
      const copy = card.querySelector(".home-product-link__copy")!;
      const description = copy.querySelector("small")!;
      return {
        textAlign: getComputedStyle(copy).textAlign,
        descriptionFontSize: Number.parseFloat(getComputedStyle(description).fontSize),
      };
    });
    expect(productCardStyle.textAlign).toBe("start");
    expect(productCardStyle.descriptionFontSize).toBeLessThan(16);
    await expect(browser.locator(".home-product-links__heading span")).toHaveCount(0);
  });
}
