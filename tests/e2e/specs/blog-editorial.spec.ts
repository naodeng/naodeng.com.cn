import { expect, test } from "@playwright/test";

test("blog list and detail share the site container and retain existing links", async ({ page, baseURL }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${baseURL || ""}/en/blog/`, { waitUntil: "domcontentloaded" });
  const firstPost = page.locator("main a[href*='/en/blog/']").first();
  await expect(firstPost).toBeVisible();
  const href = await firstPost.getAttribute("href");
  expect(href).toBeTruthy();
  const listBounds = await page.locator("main").boundingBox();
  await page.goto(`${baseURL || ""}${href}`, { waitUntil: "domcontentloaded" });
  const detailBounds = await page.locator("main").boundingBox();
  expect(detailBounds!.width).toBeCloseTo(listBounds!.width, 0);
  expect(detailBounds!.x).toBeCloseTo(listBounds!.x, 0);
  const width = await page.locator(".article-body").evaluate((node) => node.getBoundingClientRect().width);
  expect(width).toBeGreaterThanOrEqual(900);
  expect(width).toBeLessThanOrEqual(1024);
});

for (const locale of ["en", "zh-cn"]) {
  const article = `/${locale}/blog/ai-testing/ai-test-auditor-static-evidence-for-ai-generated-tests/`;

  for (const path of [`/${locale}/blog/`, `/${locale}/blog/page/2/`]) {
    test(`${path}: previews retain one reading column and match article reading time`, async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto(path, { waitUntil: "domcontentloaded" });
      const preview = page.locator(".post-card").first();
      const readLabel = (await preview.locator(".post-reading-time").innerText()).trim();
      const href = await preview.locator(".post-link").getAttribute("href");
      for (const width of [390, 600, 1440]) {
        await page.setViewportSize({ width, height: 900 });
        const layout = await page.locator(".post-grid").evaluate(element => ({
          columns: getComputedStyle(element).gridTemplateColumns.split(" ").length,
          overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
        }));
        expect(layout.columns).toBe(1);
        expect(layout.overflow).toBe(false);
      }
      await page.goto(href!, { waitUntil: "domcontentloaded" });
      await expect(page.locator(".article-meta")).toContainText(readLabel);
    });
  }

  test(`${locale}: article title and prose share a reading column with font fallbacks`, async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.route("https://fonts.googleapis.com/**", route => route.abort());
    await page.goto(article, { waitUntil: "domcontentloaded" });
    const layout = await page.evaluate(() => {
      const title = document.querySelector(".article-title-header")!;
      const prose = document.querySelector(".prose")!;
      const sidebar = document.querySelector(".article-sidebar")!;
      return {
        titleLeft: title.getBoundingClientRect().left,
        titleWidth: title.getBoundingClientRect().width,
        proseLeft: prose.getBoundingClientRect().left,
        proseWidth: prose.getBoundingClientRect().width,
        titleAlign: getComputedStyle(title).textAlign,
        sidebarLeft: sidebar.getBoundingClientRect().left,
        proseRight: prose.getBoundingClientRect().right,
      };
    });
    expect(layout.titleAlign).toBe("start");
    expect(Math.abs(layout.titleLeft - layout.proseLeft)).toBeLessThanOrEqual(1);
    expect(Math.abs(layout.titleWidth - layout.proseWidth)).toBeLessThanOrEqual(1);
    expect(layout.proseWidth).toBeGreaterThanOrEqual(900);
    expect(layout.proseWidth).toBeLessThanOrEqual(1024);
    expect(layout.sidebarLeft - layout.proseRight).toBeGreaterThanOrEqual(32);
    await expect(page.locator(".article-sidebar .author-stats-card")).toHaveCount(0);
    await expect(page.locator(".article-body .author-stats-card")).toHaveCount(1);
  });

  test(`${locale}: tablet reading preserves width and puts the collapsed TOC before prose`, async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 900 });
    await page.goto(article, { waitUntil: "domcontentloaded" });
    await expect(page.locator(".toc-summary")).toBeVisible();
    await expect(page.locator(".toc-list--desktop")).toBeHidden();
    const layout = await page.evaluate(() => ({
      proseWidth: document.querySelector(".prose")!.getBoundingClientRect().width,
      proseTop: document.querySelector(".prose")!.getBoundingClientRect().top,
      tocBottom: document.querySelector(".article-sidebar")!.getBoundingClientRect().bottom,
    }));
    expect(layout.proseWidth).toBeGreaterThanOrEqual(900);
    expect(layout.tocBottom).toBeLessThan(layout.proseTop);
  });

  test(`${locale}: mobile article TOC opens with the keyboard and navigates to a section`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(article, { waitUntil: "domcontentloaded" });
    const summary = page.locator(".toc-summary");
    await expect(summary).toBeInViewport();
    await expect(page.locator(".toc-list--desktop")).toBeHidden();
    const bounds = await summary.boundingBox();
    expect(bounds!.height).toBeGreaterThanOrEqual(44);
    await summary.focus();
    await page.keyboard.press("Enter");
    await expect(page.locator(".toc-details-mobile")).toHaveAttribute("open", "");
    const link = page.locator(".toc-list--mobile .toc-link").nth(1);
    await expect(link).toBeVisible();
    expect((await link.boundingBox())!.height).toBeGreaterThanOrEqual(44);
    const href = await link.getAttribute("href");
    await link.focus();
    await page.keyboard.press("Enter");
    await expect(page.locator(".toc-details-mobile")).not.toHaveAttribute("open", "");
    await expect(page).toHaveURL(new RegExp(`${encodeURI(href!)}$`));
    await expect(page.locator(".toc-summary [data-current-section]")).toHaveText((await link.textContent())!.trim());
    await expect(page.locator(href!)).toBeInViewport();
  });

  test(`${locale}: articles without sections have no empty sidebar`, async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`/${locale}/blog/others/article-plagiarism-statement/`, { waitUntil: "domcontentloaded" });
    await expect(page.locator(".article-sidebar")).toHaveCount(0);
    const layout = await page.evaluate(() => ({
      title: document.querySelector("main h1")!.getBoundingClientRect().left,
      prose: document.querySelector(".prose")!.getBoundingClientRect().left,
      width: document.querySelector(".prose")!.getBoundingClientRect().width,
    }));
    expect(Math.abs(layout.title - layout.prose)).toBeLessThanOrEqual(1);
    expect(layout.width).toBeGreaterThanOrEqual(900);
    expect(layout.width).toBeLessThanOrEqual(1024);
  });

  test(`${locale}: article credits fit every layout and link to the local license page`, async ({ page }) => {
    await page.goto(article, { waitUntil: "domcontentloaded" });
    const license = page.locator(".article-license a");
    await expect(license).toHaveText("PolyForm Noncommercial 1.0.0");
    await expect(license).toHaveAttribute("href", `/${locale}/copyright/`);
    await expect(page.locator(".author-stats dt")).toHaveCount(4);
    await expect(page.locator(".author-stats dd")).toHaveCount(4);

    for (const width of [390, 768, 1024, 1100, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      const layout = await page.evaluate(() => {
        const body = document.querySelector(".article-body")!.getBoundingClientRect();
        const card = document.querySelector(".author-stats-card")!.getBoundingClientRect();
        const license = document.querySelector(".article-license")!.getBoundingClientRect();
        const controls = [...document.querySelectorAll(".author-social a, .article-license a")];
        return {
          cardWidth: card.width,
          bodyWidth: body.width,
          licenseTop: license.top,
          cardBottom: card.bottom,
          controlBounds: controls.map(node => {
            const bounds = node.getBoundingClientRect();
            return { height: bounds.height, left: bounds.left, right: bounds.right };
          }),
          bodyLeft: body.left,
          bodyRight: body.right,
          pageWidth: document.documentElement.scrollWidth,
          viewport: document.documentElement.clientWidth,
        };
      });
      expect(Math.abs(layout.cardWidth - layout.bodyWidth)).toBeLessThanOrEqual(1);
      expect(layout.licenseTop).toBeGreaterThanOrEqual(layout.cardBottom);
      expect(layout.pageWidth).toBeLessThanOrEqual(layout.viewport + 1);
      for (const control of layout.controlBounds) {
        expect(control.height).toBeGreaterThanOrEqual(44);
        expect(control.left).toBeGreaterThanOrEqual(layout.bodyLeft);
        expect(control.right).toBeLessThanOrEqual(layout.bodyRight + 1);
      }
    }
    await license.scrollIntoViewIfNeeded();
    await license.focus();
    await expect(license).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(new RegExp(`/${locale}/copyright/$`));
    await expect(page.locator("main h1")).toBeVisible();
  });

  for (const theme of ["light", "dark"] as const) {
    test(`${locale}: comments follow the selected ${theme} theme from initial load through switching`, async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.emulateMedia({ colorScheme: theme === "light" ? "dark" : "light" });
      await page.addInitScript(selected => localStorage.setItem("themePreference", selected), theme);
      await page.route("https://giscus.app/client.js", route => route.fulfill({
        contentType: "application/javascript",
        body: `
          const initialTheme = document.currentScript.dataset.theme;
          const frame = document.createElement("iframe");
          frame.className = "giscus-frame";
          frame.dataset.initialTheme = initialTheme;
          document.querySelector(".giscus").appendChild(frame);
          frame.contentWindow.postMessage = (message, origin) => {
            frame.dataset.receivedTheme = message.giscus.setConfig.theme;
            frame.dataset.messageOrigin = origin;
          };
        `,
      }));
      await page.goto(article, { waitUntil: "domcontentloaded" });
      const frame = page.locator(".giscus-frame");
      await expect(frame).toHaveAttribute("data-initial-theme", theme);
      const next = theme === "light" ? "dark" : "light";
      await page.locator("[data-theme-toggle]").click();
      await page.locator(`[data-theme-option="${next}"]`).click();
      await expect(frame).toHaveAttribute("data-received-theme", next);
      await expect(frame).toHaveAttribute("data-message-origin", "https://giscus.app");
    });
  }
}
