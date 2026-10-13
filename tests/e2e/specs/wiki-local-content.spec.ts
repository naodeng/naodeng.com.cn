import { expect, test } from "@playwright/test";

test("English Wiki term is served from a local page with a matching Chinese translation", async ({ page }) => {
  const path = "/en/wiki/acceptance-testing/";
  const response = await page.request.get(path, { maxRedirects: 0 });
  expect(response.status()).toBe(200);
  const html = await response.text();
  expect(html).toMatch(/<html lang="en(?:-[A-Za-z]+)?"/);
  expect(html).toContain('<link rel="canonical" href="https://inaodeng.com/en/wiki/acceptance-testing/">');
  expect(html).toContain("Acceptance testing is conducted by potential end-users or customers");

  await page.goto(path, { waitUntil: "domcontentloaded" });
  await expect(page.locator(".docs-content h1")).toHaveText("Acceptance Testing");
  await expect(page.locator(".docs-sidebar-link--active")).toHaveText("Acceptance Testing");
  await expect(page.getByText("On this page").first()).toBeVisible();
  await expect(page.locator('.giscus-section script[data-lang="en"]')).toHaveCount(1);
  await expect(page.locator('link[rel="alternate"][hreflang="zh-CN"]')).toHaveAttribute("href", "https://inaodeng.com/zh-cn/wiki/acceptance-testing/");

  const schemas = await page.locator('script[type="application/ld+json"]').evaluateAll(nodes =>
    nodes.map(node => JSON.parse(node.textContent || "null")));
  const term = schemas.find(schema => schema?.["@type"] === "DefinedTerm");
  expect(term?.name).toBe("Acceptance Testing");
  expect(term?.inDefinedTermSet?.name).toBe("QA Wiki");
});

test("Wiki question sections render with H2, H3, and H4 hierarchy", async ({ page }) => {
  const cases = [
    {
      path: "/en/wiki/acceptance-testing/",
      root: "Questions about Acceptance Testing?",
      category: "Basics and Importance",
      question: "What is acceptance testing?",
    },
    {
      path: "/zh-cn/wiki/acceptance-testing/",
      root: "关于验收测试的问题",
      category: "基础知识和重要性",
      question: "什么是验收测试？",
    },
    {
      path: "/en/wiki/acceptance-test-driven-development/",
      root: "Questions about Acceptance Test Driven Development?",
      category: "Basics and Importance",
      question: "What is Acceptance Test Driven Development (ATDD)?",
    },
    {
      path: "/zh-cn/wiki/acceptance-test-driven-development/",
      root: "关于验收测试驱动开发的问题",
      category: "基础知识和重要性",
      question: "什么是验收测试驱动开发（ATDD）？",
    },
  ];

  for (const item of cases) {
    await page.goto(item.path, { waitUntil: "domcontentloaded" });
    for (const [level, text] of [[2, item.root], [3, item.category], [4, item.question]] as const) {
      await expect(page.locator(`.docs-content article h${level}`).filter({ hasText: text })).toHaveCount(1);
    }
  }
});

test("English Wiki table of contents follows the Chinese section hierarchy", async ({ page }) => {
  await page.goto("/en/wiki/acceptance-test-driven-development/", { waitUntil: "domcontentloaded" });

  const tocLinks = page.locator(".toc-list--desktop .toc-link");
  await expect(tocLinks).toHaveText([
    "Questions about Acceptance Test Driven Development?",
    "Basics and Importance",
    "Process and Techniques",
    "Tools and Technologies",
    "Challenges and Solutions",
  ]);
  await expect(page.locator(".toc-list--desktop .toc-item--h3 .toc-link")).toHaveText([
    "Basics and Importance",
    "Process and Techniques",
    "Tools and Technologies",
    "Challenges and Solutions",
  ]);
  await expect(page.getByRole("heading", { name: "Related Terms:", exact: true })).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "See also:", exact: true })).toHaveCount(0);
});

test("paired Wiki See also labels stay outside headings and tables of contents", async ({ page }) => {
  for (const slug of ["astqb", "browserstack", "chai-js", "jest", "jira", "postman"]) {
    for (const { locale, label } of [
      { locale: "en", label: "See also:" },
      { locale: "zh-cn", label: "另请参阅：" },
    ]) {
      await page.goto(`/${locale}/wiki/${slug}/`, { waitUntil: "domcontentloaded" });
      await expect(page.getByRole("heading", { name: label, exact: true })).toHaveCount(0);
      await expect(page.locator(".toc-link").filter({ hasText: label })).toHaveCount(0);
    }
  }
});

test("Related-term labels stay outside headings and the Wiki table of contents", async ({ page }) => {
  for (const { locale, label } of [
    { locale: "en", label: "Related Terms:" },
    { locale: "zh-cn", label: "相关术语" },
  ]) {
    await page.goto(`/${locale}/wiki/defect-management/`, { waitUntil: "domcontentloaded" });
    await expect(page.getByRole("heading", { name: label, exact: true })).toHaveCount(0);
    await expect(page.locator(".toc-link").filter({ hasText: label })).toHaveCount(0);
    await expect(page.getByText(label, { exact: true })).toBeVisible();
  }
});

test("Wiki examples stay in code blocks and repaired question headings render at the right level", async ({ page }) => {
  await page.goto("/en/wiki/inspection/", { waitUntil: "domcontentloaded" });
  await expect(page.getByRole("heading", { name: "Inspection Report", exact: true })).toHaveCount(0);
  await expect(page.locator(".docs-content pre").filter({ hasText: "## Inspection Report" })).toHaveCount(1);

  await page.goto("/zh-cn/wiki/dependency-testing/", { waitUntil: "domcontentloaded" });
  await expect(page.getByRole("heading", { name: "依赖测试结果摘要", exact: true })).toHaveCount(0);
  await expect(page.locator(".docs-content pre").filter({ hasText: "## 依赖测试结果摘要" })).toHaveCount(1);

  await page.goto("/zh-cn/wiki/test-suite/", { waitUntil: "domcontentloaded" });
  for (const heading of ["创建测试套件时要避免哪些常见错误？", "如何使测试套件更易于维护？"]) {
    await expect(page.locator(".docs-content article h4").filter({ hasText: heading })).toHaveCount(1);
  }

  await page.goto("/zh-cn/wiki/web-test-automation-tools/", { waitUntil: "domcontentloaded" });
  await expect(page.getByRole("heading", { name: "相关术语：", exact: true })).toHaveCount(0);
  await expect(page.locator(".toc-list--desktop .toc-link").filter({ hasText: "相关术语" })).toHaveCount(0);
});

test("English Wiki answer labels do not become article headings", async ({ page }) => {
  await page.goto("/en/wiki/chai-js/", { waitUntil: "domcontentloaded" });
  for (const label of ["Should & Expect", "Assert"]) {
    await expect(page.getByRole("heading", { name: label, exact: true })).toHaveCount(0);
    await expect(page.getByText(label, { exact: true })).toHaveCount(1);
  }
});

test("English Wiki language switch opens the matching Chinese term", async ({ page }) => {
  await page.goto("/en/wiki/acceptance-testing/", { waitUntil: "domcontentloaded" });
  await page.locator("[data-locale-trigger]").first().click();
  await page.locator('[data-locale-option][data-lang="zh-cn"]').first().click();
  await expect(page).toHaveURL(/\/zh-cn\/wiki\/acceptance-testing\/?$/);
  await expect(page.locator(".docs-content h1")).toContainText("验收测试");
});

test("English Wiki index stays usable on desktop and mobile", async ({ page }) => {
  for (const viewport of [{ width: 1280, height: 900 }, { width: 390, height: 844 }]) {
    await page.setViewportSize(viewport);
    await page.goto("/en/wiki/", { waitUntil: "domcontentloaded" });
    await expect(page.getByRole("heading", { name: "QA Wiki", level: 1 })).toBeVisible();
    await expect(page.locator('.wiki-license a[href="https://github.com/naodeng/QA-Glossary-Wiki"]'))
      .toHaveText("QA Glossary Wiki source collection");
    await expect(page.locator('.wiki-license a[rel="license"]')).toHaveText("PolyForm Noncommercial 1.0.0");
    await expect(page.locator("#wiki-search")).toBeVisible();
    await page.locator("#wiki-search").fill("acceptance testing");
    await expect(page.locator(".wiki-letter-link[href='/en/wiki/acceptance-testing/']")).toBeVisible();
    const widths = await page.evaluate(() => ({ viewport: document.documentElement.clientWidth, content: document.documentElement.scrollWidth }));
    expect(widths.content).toBeLessThanOrEqual(widths.viewport + 1);
  }
});
