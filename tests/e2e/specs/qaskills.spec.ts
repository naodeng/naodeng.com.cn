import { test, expect } from "@playwright/test";

test.describe("QA Skills", () => {
  test("index presents a compact directory with visible results and direct-link cards", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/");

    const directory = page.locator("[data-qaskills-directory]");
    await expect(directory).toBeVisible();
    await expect(directory.locator(".directory-toolbar")).toBeVisible();
    await expect(directory.locator(".filter-sidebar")).toBeVisible();
    await expect(directory.locator(".skill-card").first()).toBeVisible();
    await expect(directory.locator(".quick-preview-toggle")).toHaveCount(0);
  });

  test("directory keeps the visual hierarchy focused on search and results", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/");

    await expect(page.locator(".directory-toolbar .eyebrow, .filter-sidebar .eyebrow, .results-heading .eyebrow")).toHaveCount(0);

    const catalogLabels = await page.locator(".category-toggle").evaluateAll((toggles) =>
      toggles.map((toggle) => toggle.textContent || "")
    );
    expect(catalogLabels.length).toBeGreaterThan(0);
    expect(catalogLabels.every((label) => !label.includes("—"))).toBe(true);
  });

  test("direct-link cards rely on the card surface instead of a redundant arrow", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/");

    const card = page.locator('a.card[data-slug="requirements-analysis"]').first();
    await expect(card.locator(".skill-card-link")).toHaveCount(0);
  });

  test("skill cards use a smaller fixed footprint", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/");

    const metrics = await page.locator(".skill-card").first().evaluate((card) => {
      const styles = getComputedStyle(card);
      const rect = card.getBoundingClientRect();
      return {
        height: Math.round(rect.height),
        paddingBlock: parseFloat(styles.paddingBlockStart),
        paddingInline: parseFloat(styles.paddingInlineStart),
      };
    });

    expect(metrics.height).toBeLessThanOrEqual(150);
    expect(metrics.paddingBlock).toBeLessThanOrEqual(13);
    expect(metrics.paddingInline).toBeLessThanOrEqual(13);
  });

  test("skill type labels only appear for workflow and plus cards", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/");

    await expect(page.locator('.skill-card[data-category="type"]').first().locator(".skill-card-type")).toHaveCount(0);
    await expect(page.locator('.skill-card[data-category="workflow"]').first().locator(".skill-card-type")).toBeVisible();
    await expect(page.locator('.skill-card[data-category="plus"]').first().locator(".skill-card-type")).toBeVisible();
  });

  test("workflow and plus labels share the title row and sit at the card edge", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/");

    const layout = await page.locator('.skill-card[data-category="workflow"]').first().evaluate((card) => {
      const row = card.querySelector(".skill-card-title-row");
      const title = card.querySelector("h5");
      const label = card.querySelector(".skill-card-type");
      const cardRect = card.getBoundingClientRect();
      const labelRect = label?.getBoundingClientRect();
      return {
        rowDisplay: row ? getComputedStyle(row).display : "",
        sameRow: title && label ? Math.abs(title.getBoundingClientRect().top - label.getBoundingClientRect().top) <= 8 : false,
        rightGap: labelRect ? cardRect.right - labelRect.right : Number.POSITIVE_INFINITY,
      };
    });

    expect(layout.rowDisplay).toBe("flex");
    expect(layout.sameRow).toBe(true);
    expect(layout.rightGap).toBeLessThan(24);
  });

  test("directory starts without an oversized gap below the header", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/");

    const gap = await page.evaluate(() => {
      const header = document.querySelector(".l-header")?.getBoundingClientRect();
      const directory = document.querySelector(".directory-hero-topline")?.getBoundingClientRect();
      return header && directory ? directory.top - header.bottom : Number.POSITIVE_INFINITY;
    });

    expect(gap).toBeLessThan(100);
  });

  test("skill cards use one consistent height in each result grid", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/");

    const heights = await page.locator(".cards").first().locator(".skill-card").evaluateAll((cards) =>
      cards.map((card) => Math.round(card.getBoundingClientRect().height))
    );

    expect(heights.length).toBeGreaterThan(1);
    expect(new Set(heights).size).toBe(1);
  });

  test("clicking a skill card opens its guide", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/");

    await page.locator('[data-skill-item="requirements-analysis"] .skill-card').click();
    await expect(page).toHaveURL(/\/zh-cn\/qaskills\/requirements-analysis\/$/);
  });

  test("filter sidebar keeps its labels clear of the column edge", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/");

    const spacing = await page.locator(".filter-sidebar").evaluate((element) => {
      const styles = getComputedStyle(element);
      const sidebarRect = element.getBoundingClientRect();
      const headingRect = element.querySelector(".filter-sidebar-heading")?.getBoundingClientRect();

      return {
        paddingInlineStart: parseFloat(styles.paddingInlineStart),
        headingOffset: headingRect ? headingRect.left - sidebarRect.left : 0,
      };
    });

    expect(spacing.paddingInlineStart).toBeGreaterThanOrEqual(12);
    expect(spacing.headingOffset).toBeGreaterThanOrEqual(12);
  });

  test("supporting sections keep their content clear of the section rule", async ({ page }) => {
    await page.setViewportSize({ width: 426, height: 1037 });
    await page.goto("/zh-cn/qaskills/");

    const spacing = await page.locator(".usage-note, .lifecycle-path").evaluateAll((sections) =>
      sections.map((section) => {
        const sectionRect = section.getBoundingClientRect();
        const headingRect = section.querySelector("h2")?.getBoundingClientRect();
        const contentRect = section.querySelector("ol, .lifecycle-track")?.getBoundingClientRect();

        return {
          headingOffset: headingRect ? headingRect.left - sectionRect.left : 0,
          contentOffset: contentRect ? contentRect.left - sectionRect.left : 0,
        };
      })
    );

    expect(spacing).toHaveLength(2);
    for (const section of spacing) {
      expect(section.headingOffset).toBeGreaterThanOrEqual(12);
      expect(section.contentOffset).toBeGreaterThanOrEqual(12);
    }
  });

  test("filter category counts match the rendered card categories", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/");

    const counts = await page.evaluate(() => {
      const cards = [...document.querySelectorAll("a.card[data-slug]")];
      const cardCounts = Object.fromEntries(
        ["all", "type", "workflow", "plus"].map((category) => [
          category,
          category === "all" ? cards.length : cards.filter((card) => card.dataset.category === category).length,
        ])
      );
      const filterCounts = Object.fromEntries(
        [...document.querySelectorAll(".filter-option[data-filter]")].map((button) => [
          button.dataset.filter,
          Number(button.querySelector("span:last-child")?.textContent || 0),
        ])
      );

      return { cardCounts, filterCounts };
    });

    expect(counts.filterCounts).toEqual(counts.cardCounts);
  });

  test("active category counts stay aligned with the visible result set", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/");

    for (const category of ["all", "type", "workflow", "plus"]) {
      await page.locator(`[data-filter="${category}"]`).click();
      const state = await page.evaluate(() => {
        const selected = document.querySelector(".filter-option.is-active[data-filter]");
        const visibleCards = [...document.querySelectorAll("a.card[data-slug]")].filter(
          (card) => !card.closest("li")?.hasAttribute("hidden")
        ).length;
        return {
          selectedCategory: selected?.getAttribute("data-filter"),
          selectedPressed: selected?.getAttribute("aria-pressed"),
          selectedCount: Number(selected?.querySelector("span:last-child")?.textContent || -1),
          visibleCards,
          resultCount: Number(document.querySelector("#qaskills-results")?.textContent?.match(/\d+/)?.[0] || -1),
        };
      });

      expect(state.selectedCategory).toBe(category);
      expect(state.selectedPressed).toBe("true");
      expect(state.selectedCount).toBe(state.visibleCards);
      expect(state.resultCount).toBe(state.visibleCards);
    }
  });

  test("category group counts stay aligned with the visible result set", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/");

    for (const category of ["all", "type", "workflow", "plus"]) {
      await page.locator(`[data-filter="${category}"]`).click();
      const counts = await page.locator(".category-block:not([hidden])").evaluateAll((blocks) =>
        blocks.map((block) => ({
          displayed: Number(block.querySelector(".category-toggle-count")?.textContent || -1),
          actual: [...block.querySelectorAll("a.card[data-slug]")].filter(
            (card) => !card.closest("li")?.hasAttribute("hidden")
          ).length,
        }))
      );

      expect(counts.length).toBeGreaterThan(0);
      expect(counts.every(({ displayed, actual }) => displayed === actual)).toBe(true);
    }
  });

  test("facet counts follow the current search query", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/");
    await page.locator("#qaskills-search").fill("API");
    await page.locator(".more-filter-details > summary").click();
    for (const summary of await page.locator("#qaskills-secondary-filters [data-secondary-group] > summary").all()) {
      await summary.click();
    }

    const counts = await page.evaluate(() => {
      const visibleCards = [...document.querySelectorAll("a.card[data-slug]")].filter(
        (card) => !card.closest("li")?.hasAttribute("hidden")
      );
      const secondary = [...document.querySelectorAll("[data-secondary-filter]:not([hidden])")].map((button) => {
        const key = button.getAttribute("data-secondary-filter");
        const actual = visibleCards.filter((card) => card.getAttribute("data-secondary-category") === key).length;
        return { displayed: Number(button.querySelector("[data-filter-count]")?.textContent || -1), actual };
      });
      const lifecycle = [...document.querySelectorAll("[data-lifecycle-filter]")].map((button) => {
        const stage = button.getAttribute("data-lifecycle-filter");
        const actual = visibleCards.filter((card) => (card.getAttribute("data-lifecycle-stages") || "").split(" ").includes(stage || "")).length;
        return { displayed: Number(button.querySelector("[data-filter-count]")?.textContent || -1), actual };
      });
      const evals = document.querySelector("[data-evals-toggle]");
      const evalsActual = visibleCards.filter((card) => card.getAttribute("data-evals") === "true").length;
      return {
        secondary,
        lifecycle,
        evals: evals
          ? { displayed: Number(evals.querySelector("span:last-child")?.textContent || -1), actual: evalsActual }
          : null,
        result: Number(document.querySelector("#qaskills-results")?.textContent?.match(/\d+/)?.[0] || -1),
      };
    });

    expect(counts.result).toBeGreaterThan(0);
    expect(counts.secondary.every(({ displayed, actual }) => displayed === actual)).toBe(true);
    expect(counts.lifecycle.every(({ displayed, actual }) => displayed === actual)).toBe(true);
    if (counts.evals) expect(counts.evals.displayed).toBe(counts.evals.actual);
  });

  test("subcategory filter counts match their visible card sets", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/");
    const moreFilters = page.locator(".more-filter-details");
    await moreFilters.locator(":scope > summary").click();
    for (const summary of await page.locator("#qaskills-secondary-filters [data-secondary-group] > summary").all()) {
      await summary.click();
    }

    const readCounts = async () =>
      page.locator("#qaskills-secondary-filters [data-secondary-filter]:visible").evaluateAll((buttons) =>
        buttons.map((button) => {
          const key = button.getAttribute("data-secondary-filter") || "";
          const cards = [...document.querySelectorAll("a.card[data-slug]")].filter(
            (card) => card.getAttribute("data-secondary-category") === key && !card.closest("li")?.hasAttribute("hidden")
          );
          return {
            key,
            displayed: Number(button.querySelector("[data-filter-count]")?.textContent || -1),
            actual: cards.length,
          };
        })
      );

    const allCounts = await readCounts();
    expect(allCounts.length).toBeGreaterThan(0);
    expect(allCounts.every(({ displayed, actual }) => displayed === actual)).toBe(true);

    const unassignedCards = await page.locator("a.card[data-slug]").evaluateAll((cards) =>
      cards.filter((card) => !card.getAttribute("data-secondary-category")).length
    );
    expect(unassignedCards).toBe(0);

    for (const category of ["all", "type", "workflow", "plus"]) {
      await page.locator(`[data-filter="${category}"]`).click();
      const counts = await readCounts();
      expect(counts.length).toBeGreaterThan(0);
      expect(counts.every(({ displayed, actual }) => displayed === actual)).toBe(true);
    }

    await page.locator('[data-filter="all"]').click();
    await page.locator('[data-lifecycle-filter="requirements-strategy"]').click();
    const lifecycleCounts = await readCounts();
    expect(lifecycleCounts.every(({ displayed, actual }) => displayed === actual)).toBe(true);
  });

  for (const locale of ["zh-cn", "en"] as const) {
    test(`${locale} index exposes recommended entry points before the full catalog`, async ({ page }) => {
      await page.goto(`/${locale}/qaskills/`);

      await expect(page.locator("[data-recommended-skill]")).toHaveCount(6);
      await expect(page.locator("#qaskills-results")).toContainText(/\d+/);

      // 当前全量 skill 均含评测用例，筛选无区分度时不渲染 chip
      await expect(page.locator('[data-evals-toggle="1"]')).toHaveCount(0);
    });
  }

  for (const locale of ["zh-cn", "en"] as const) {
    test(`${locale} search state hides helper sections and surfaces results next to filters`, async ({ page }) => {
      await page.goto(`/${locale}/qaskills/`);

      const helpers = page.locator("[data-qaskills-default-only]");
      const assertHelpersVisible = async () => {
        const els = await helpers.all();
        expect(els.length).toBeGreaterThan(0);
        for (const el of els) await expect(el).toBeVisible();
      };
      const assertHelpersHidden = async () => {
        const els = await helpers.all();
        expect(els.length).toBeGreaterThan(0);
        for (const el of els) await expect(el).toBeHidden();
      };

      // 默认态：辅助区可见，目录紧跟筛选区
      await assertHelpersVisible();
      const domOrder = await page.evaluate(() => {
        const discovery = document.querySelector(".discovery");
        const categories = document.getElementById("categories");
        return discovery && categories ? discovery.nextElementSibling === categories : false;
      });
      expect(domOrder).toBe(true);

      // 搜索态：辅助区隐藏，可见结果紧邻搜索框
      const search = page.locator("#qaskills-search");
      await search.fill("API");
      await assertHelpersHidden();
      const firstCard = page.locator("a.card[data-slug]:visible").first();
      await expect(firstCard).toContainText(/api/i);
      await expect(page.locator("#qaskills-results")).toContainText(/\d+/);
      await expect(page.locator(".category-block:not([hidden]) .category-toggle[aria-expanded='true']").first()).toBeVisible();

      // 清空后辅助区恢复，焦点回到搜索框
      await search.fill("");
      await assertHelpersVisible();

      // 无匹配词：出现空状态与清空按钮，点击后恢复
      await search.fill("zzzz-no-match-qq");
      await expect(page.locator("#qaskills-empty")).toBeVisible();
      const clearBtn = page.locator("#qaskills-clear");
      await expect(clearBtn).toBeVisible();
      await clearBtn.click();
      await expect(search).toHaveValue("");
      await assertHelpersVisible();
      await expect(page.locator("#qaskills-empty")).toBeHidden();
      await expect(search).toBeFocused();
    });
  }

  test("zh-cn index shows search and a concise code-review card", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/");
    await expect(page.locator("#qaskills-search")).toBeVisible();
    await expect(page.locator("#qaskills-empty")).toBeHidden();
    const card = page.locator('a.card[data-slug="code-review"]');
    const category = page.locator(".category-block").filter({ has: card });
    await expect(category.locator(".category-toggle")).toHaveAttribute("aria-expanded", "true");
    await expect(card).toBeVisible();
    await expect(card.locator("h5")).toBeVisible();
    await expect(card.locator(".card-intro")).toBeVisible();
    await expect(card.locator(".card-meta")).toHaveCount(0);
  });

  test("catalog cards show their README-aligned summary", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/");
    const card = page.locator('a.card[data-slug="requirements-analysis"]').first();
    await expect(card).toBeVisible();
    await expect(card.locator(".card-intro")).not.toBeEmpty();
  });

  test("primary filters reveal and apply README subcategory filters", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/");
    const typeFilter = page.locator('[data-filter="type"]');
    const secondary = page.locator("#qaskills-secondary-filters");
    const moreFilters = page.locator(".more-filter-details");

    await expect(secondary).toBeHidden();
    await moreFilters.locator(":scope > summary").click();
    await expect(secondary).toBeVisible();
    await typeFilter.click();
    await expect(secondary).toBeVisible();
    for (const summary of await secondary.locator("[data-secondary-group] > summary").all()) {
      if (await summary.isVisible()) await summary.click();
    }

    const requirements = secondary.locator('[data-parent-category~="type"][data-secondary-filter*="需求发现与分析"]').first();
    await expect(requirements).toBeVisible();
    await requirements.click();
    await expect(page.locator('a.card[data-slug="requirements-analysis"]')).toBeVisible();
    await expect(page.locator('a.card[data-slug="api-testing"]')).toBeHidden();

    await page.locator("#qaskills-clear").click();
    await expect(secondary).toBeVisible();
  });

  test("catalog supports plus and lifecycle shortcuts as combinable discovery filters", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/");

    await page.locator('[data-filter="plus"]').click();
    await expect(page.locator('a.card[data-slug="test-strategy-plus"]')).toBeVisible();
    await expect(page.locator('a.card[data-slug="api-testing"]')).toBeHidden();

    await page.locator("#qaskills-clear").click();
    await page.locator(".more-filter-details > summary").click();
    await page.locator('[data-lifecycle-filter="requirements-strategy"]').click();
    await expect(page.locator('a.card[data-slug="requirements-analysis"]')).toBeVisible();
    await expect(page.locator('a.card[data-slug="api-testing"]')).toBeHidden();
  });

  test("lifecycle filters without matches are disabled for the chosen skill category", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/");
    await page.locator('[data-filter="plus"]').click();

    await expect(page.locator('[data-lifecycle-filter="functional-compatibility"]')).toBeDisabled();
    await expect(page.locator('[data-lifecycle-filter="requirements-strategy"]')).toBeEnabled();
    await expect(page.locator("#qaskills-results")).toContainText("4");
  });

  test("catalog cards keep the browsing view to title and concise description", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/");
    const card = page.locator('a.card[data-slug="requirements-analysis"]').first();

    await expect(card).toBeVisible();
    await expect(card.locator("h5")).toBeVisible();
    await expect(card.locator(".card-intro")).toBeVisible();
    await expect(card.locator(".card-meta")).toHaveCount(0);
    await expect(card.locator(".tag")).toHaveCount(0);
  });

  test("lifecycle filters stay compact on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/zh-cn/qaskills/#qaskills-search");
    await page.locator(".more-filter-details > summary").click();
    const buttons = page.locator(".chips-lifecycle [data-lifecycle-filter]");
    const heights = await buttons.evaluateAll((elements) =>
      elements.map((element) => Math.round(element.getBoundingClientRect().height))
    );

    expect(heights.length).toBeGreaterThan(0);
    expect(Math.max(...heights)).toBeLessThanOrEqual(48);
  });

  test("secondary category filters do not collapse into vertical text on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/zh-cn/qaskills/#qaskills-search");
    await page.locator(".more-filter-details > summary").click();
    for (const summary of await page.locator("#qaskills-secondary-filters [data-secondary-group] > summary").all()) {
      await summary.click();
    }
    const buttons = page.locator(".chips-secondary [data-secondary-filter]");
    const heights = await buttons.evaluateAll((elements) =>
      elements.map((element) => Math.round(element.getBoundingClientRect().height))
    );

    expect(heights.length).toBeGreaterThan(0);
    expect(Math.max(...heights)).toBeLessThanOrEqual(48);
  });

  test("all primary category filters remain visible on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/zh-cn/qaskills/#qaskills-search");

    const metrics = await page.locator(".filter-options").evaluate((element) => ({
      visibleOptions: [...element.querySelectorAll("[data-filter]")].filter((option) => {
        const rect = option.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      }).length,
      scrollWidth: element.scrollWidth,
      clientWidth: element.clientWidth,
    }));

    expect(metrics.visibleOptions).toBe(4);
    expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth + 1);
  });

  test("lifecycle path fits the mobile column instead of clipping the next stage", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/zh-cn/qaskills/#lifecycle-path");

    const metrics = await page.locator(".lifecycle-track").evaluate((element) => ({
      scrollWidth: element.scrollWidth,
      clientWidth: element.clientWidth,
    }));

    expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth + 1);
  });

  test("secondary filters expose their groups before showing the full chip wall", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/");
    const moreFilters = page.locator(".more-filter-details");
    await moreFilters.locator(":scope > summary").click();

    const groups = page.locator("#qaskills-secondary-filters [data-secondary-group]");
    await expect(groups).toHaveCount(6);
    await expect(groups.locator("summary")).toHaveCount(6);
    for (const summary of await groups.locator("summary").all()) await expect(summary).toBeVisible();
  });

  test("detail shows Guide section, raw SKILL tab, and install panel", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/api-testing/", { waitUntil: "domcontentloaded" });
    await expect(page.getByRole("heading", { name: /何时使用|When to Use/ })).toBeVisible();
    await expect(page.locator("#skill-elevator")).toBeVisible();
    await page.getByRole("tab", { name: /SKILL\.md/i }).click();
    await expect(page.locator(".skill-raw")).toContainText("name: api-testing");
    await expect(page.locator("#copy-raw-skill-btn")).toBeVisible();
    await expect(page.locator("#install-section")).toBeVisible();
    await expect(page.locator("#installer-panel")).toBeVisible();
    await expect(page.locator("#npx-install-code")).toContainText("npx skills add");
    await expect(page.locator("#copy-quick-btn")).toBeVisible();
    await expect(page.locator(".related-card").first()).toBeVisible();
  });

  test("detail header prioritizes installation and keeps source as a secondary action", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/discover-testing/");
    const header = page.locator(".detail-header");
    await expect(header.locator(".detail-status-tags")).toBeVisible();
    await expect(header.locator(".detail-intro")).not.toBeEmpty();
    await expect(header.getByText(/工作流|Workflow/)).toBeVisible();
    await expect(header.getByText(/^Evals$/)).toBeVisible();
    await expect(header.locator(".detail-author")).toBeVisible();
    await expect(header.locator(".detail-updated")).toBeVisible();
  });

  test("detail page does not overflow horizontally on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/zh-cn/qaskills/requirements-analysis/");
    await expect(page.locator("#install-section")).toBeVisible();
    const metrics = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      codeCardWidth: Math.round(
        (document.querySelector(".code-card") as HTMLElement | null)?.getBoundingClientRect().width || 0,
      ),
    }));
    expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth + 1);
    expect(metrics.codeCardWidth).toBeGreaterThan(0);
    expect(metrics.codeCardWidth).toBeLessThanOrEqual(metrics.clientWidth);
  });

  test("index lifecycle path links to skill detail", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/");
    const section = page.locator("#lifecycle-path");
    await expect(section).toBeVisible();
    await expect(section.getByRole("heading", { name: "软件测试生命周期路径" })).toBeVisible();
    const link = section.locator('a.lifecycle-skill[data-slug="requirements-analysis"]');
    await expect(link).toBeVisible();
    await link.click();
    await expect(page).toHaveURL(/\/zh-cn\/qaskills\/requirements-analysis\/?/);
  });

  test("en index shows lifecycle path", async ({ page }) => {
    await page.goto("/en/qaskills/");
    const section = page.locator("#lifecycle-path");
    await expect(section).toBeVisible();
    await expect(
      section.getByRole("heading", { name: "Software Testing Lifecycle Path" })
    ).toBeVisible();
    await expect(
      section.locator('a.lifecycle-skill[data-slug="api-testing"]')
    ).toBeVisible();
  });
});
