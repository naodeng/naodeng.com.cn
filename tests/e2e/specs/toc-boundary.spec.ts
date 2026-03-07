import { expect, test } from "@playwright/test";

const ARTICLE_PATH = "/zh-cn/blog/ai-testing/introduction_of_awesome_qa_prompt/";

test.describe("TOC 边界与滚动稳定性", () => {
  test.beforeEach(async ({ page, baseURL }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto((baseURL || "") + ARTICLE_PATH, { waitUntil: "networkidle" });
    await expect(page.locator(".article-sidebar-inner")).toBeVisible({ timeout: 10000 });
    await expect(page.locator(".toc-nav")).toBeVisible({ timeout: 10000 });
  });

  test("滚动到不同标题时，TOC 当前项会切换", async ({ page }) => {
    const h2Links = await page.evaluate(() => {
      return Array.from(document.querySelectorAll<HTMLAnchorElement>(".toc-link"))
        .map((link) => link.getAttribute("href") || "")
        .filter((href) => href.startsWith("#"))
        .filter((href) => {
          const target = document.getElementById(href.slice(1));
          return target?.tagName === "H2";
        });
    });

    expect(h2Links.length).toBeGreaterThan(2);

    const targets = [h2Links[1], h2Links[h2Links.length - 1]];
    for (const href of targets) {
      await page.evaluate((targetHref) => {
        const target = document.getElementById(targetHref.slice(1)) as HTMLElement | null;
        if (!target) return;
        const top = window.scrollY + target.getBoundingClientRect().top - 140;
        window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
      }, href);

      await expect
        .poll(
          async () => {
            return await page.locator(".toc-link[aria-current='true']").first().getAttribute("href");
          },
          { timeout: 3000 }
        )
        .toBe(href);
    }
  });

  test("滚动到页尾附近时，侧栏不侵入页脚区域", async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(800);

    const overlap = await page.evaluate(() => {
      const sidebar = document.querySelector(".article-sidebar-inner") as HTMLElement | null;
      const footer = document.querySelector(".l-footer") as HTMLElement | null;
      if (!sidebar || !footer) return null;

      const sidebarRect = sidebar.getBoundingClientRect();
      const footerRect = footer.getBoundingClientRect();
      const verticalOverlap = Math.max(
        0,
        Math.min(sidebarRect.bottom, footerRect.bottom) - Math.max(sidebarRect.top, footerRect.top)
      );

      return {
        verticalOverlap,
        sidebarBottom: sidebarRect.bottom,
        footerTop: footerRect.top,
      };
    });

    expect(overlap).not.toBeNull();
    expect(overlap?.verticalOverlap, JSON.stringify(overlap)).toBeLessThanOrEqual(0.5);
    expect(overlap?.sidebarBottom, JSON.stringify(overlap)).toBeLessThanOrEqual((overlap?.footerTop ?? 0) + 0.5);
  });
});
