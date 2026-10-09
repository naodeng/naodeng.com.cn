import { expect, test } from "@playwright/test";

type ContrastSample = {
  name: string;
  path: string;
  selectors: string[];
  theme?: "light" | "dark";
  copyState?: "copied" | "failed";
};

const samples: ContrastSample[] = [
  {
    name: "home-zh",
    path: "/zh-cn/",
    selectors: [
      ".home-hero__subtitle",
      ".home-band__subtitle",
      ".home-card__title",
      ".home-card__desc",
    ],
  },
  {
    name: "wiki-index-zh",
    path: "/zh-cn/wiki/",
    selectors: [".wiki-letter-title", ".wiki-letter-link", ".wiki-search-input"],
  },
  {
    name: "aiwiki-index-zh",
    path: "/zh-cn/AIWiki/",
    selectors: [".wiki-letter-title", ".wiki-letter-link", ".wiki-search-input"],
  },
  {
    name: "blog-detail-zh",
    path: "/zh-cn/blog/ai-testing/introduction_of_awesome_qa_prompt/",
    selectors: [".prose p", ".prose li", ".article-meta", ".blog-related-terms-pill"],
  },
  {
    name: "dsh-qa-light",
    path: "/zh-cn/dsh-qa/",
    selectors: [".flow-status.pass"],
    theme: "light",
  },
  {
    name: "dsh-qa-dark",
    path: "/zh-cn/dsh-qa/",
    selectors: [".flow-status.pass"],
    theme: "dark",
  },
  {
    name: "ai-test-auditor-dark",
    path: "/zh-cn/ai-test-auditor/",
    selectors: [".status.fake", ".status.weak"],
    theme: "dark",
  },
];

for (const locale of ["en", "zh-cn"]) {
  for (const theme of ["light", "dark"] as const) {
    for (const copyState of ["copied", "failed"] as const) {
      samples.push({
        name: `${locale}-share-${copyState}-${theme}`,
        path: `/${locale}/blog/ai-testing/introduction_of_awesome_qa_prompt/`,
        selectors: [".article-share-copy", "#article-share-copy-feedback"],
        theme,
        copyState,
      });
    }
    samples.push(
      { name: `${locale}-archive-dates-${theme}`, path: `/${locale}/archive/`, selectors: [".date"], theme },
      { name: `${locale}-series-counts-${theme}`, path: `/${locale}/series/`, selectors: [".aggregate-count"], theme },
      { name: `${locale}-footer-${theme}`, path: `/${locale}/`, selectors: [".built-with", ".capability-recommendations__label"], theme },
      { name: `${locale}-blog-metadata-${theme}`, path: `/${locale}/blog/`, selectors: [".post-date", ".post-reading-time"], theme },
      { name: `${locale}-guild-category-${theme}`, path: `/${locale}/guild/ui-testing/`, selectors: [".breadcrumb-link", ".tt-section-title", ".fw-card__lang", ".fw-card__desc", ".fw-card__count"], theme },
      { name: `${locale}-guild-framework-${theme}`, path: `/${locale}/guild/ui-testing/playwright/`, selectors: [".fw-stat__label", ".article-description", ".article-difficulty"], theme },
      { name: `${locale}-guild-article-${theme}`, path: `/${locale}/guild/ui-testing/playwright/getting-started/`, selectors: [".difficulty-badge"], theme },
      { name: `${locale}-prompt-metadata-${theme}`, path: `/${locale}/prompts/test-case-writing/`, selectors: [".prompt-sidebar-label", ".prompt-sidebar-nav li small", ".prompt-variants-label", ".prompt-related-prompt small"], theme },
    );
  }
}

test.describe("可访问性对比度审计（WCAG AA 抽样）", () => {
  for (const sample of samples) {
    test(`${sample.name} 关键文本对比度满足 WCAG AA`, async ({ page }) => {
      if (sample.theme) {
        await page.addInitScript(selected => localStorage.setItem("themePreference", selected), sample.theme);
      }
      if (sample.copyState) {
        await page.emulateMedia({ reducedMotion: "reduce" });
        await page.addInitScript(state => {
          Object.defineProperty(navigator, "clipboard", {
            configurable: true,
            value: {
              writeText: () => state === "copied" ? Promise.resolve() : Promise.reject(new Error("Clipboard denied")),
            },
          });
        }, sample.copyState);
      }
      await page.goto(sample.path, { waitUntil: "domcontentloaded" });
      if (sample.theme) {
        await expect(page.locator("html")).toHaveAttribute("data-theme", sample.theme);
      }
      if (sample.copyState) {
        await page.locator(".article-share-copy").click();
        await expect(page.locator(".article-share-copy")).toHaveAttribute("data-state", sample.copyState);
        await expect(page.locator("#article-share-copy-feedback")).toBeVisible();
      }

      for (const selector of sample.selectors) {
        const result = await page.evaluate((sel) => {
          type RGBA = { r: number; g: number; b: number; a: number };

          const parseColor = (value: string): RGBA | null => {
            const canvas = document.createElement("canvas");
            canvas.width = 1;
            canvas.height = 1;
            const ctx = canvas.getContext("2d");
            if (!ctx) return null;

            ctx.clearRect(0, 0, 1, 1);
            ctx.fillStyle = "rgba(1,2,3,1)";
            const before = ctx.fillStyle;
            ctx.fillStyle = value;
            const after = ctx.fillStyle;
            const source = value.trim().toLowerCase();
            if (after === before && source !== "rgba(1,2,3,1)" && source !== "rgb(1,2,3)") {
              return null;
            }

            ctx.fillRect(0, 0, 1, 1);
            const px = ctx.getImageData(0, 0, 1, 1).data;
            return {
              r: px[0],
              g: px[1],
              b: px[2],
              a: px[3] / 255,
            };
          };

          const blend = (fg: RGBA, bg: RGBA): RGBA => {
            const alpha = fg.a + bg.a * (1 - fg.a);
            if (alpha <= 0) return { r: 255, g: 255, b: 255, a: 1 };
            return {
              r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / alpha,
              g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / alpha,
              b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / alpha,
              a: alpha,
            };
          };

          const toLinear = (channel: number) => {
            const v = channel / 255;
            return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
          };

          const luminance = (c: RGBA) =>
            0.2126 * toLinear(c.r) + 0.7152 * toLinear(c.g) + 0.0722 * toLinear(c.b);

          const contrastRatio = (a: RGBA, b: RGBA) => {
            const l1 = luminance(a);
            const l2 = luminance(b);
            const lighter = Math.max(l1, l2);
            const darker = Math.min(l1, l2);
            return (lighter + 0.05) / (darker + 0.05);
          };

          const effectiveBackground = (el: Element): RGBA => {
            let bg: RGBA = { r: 255, g: 255, b: 255, a: 1 };
            const ancestors: Element[] = [];
            let node: Element | null = el;
            while (node) {
              ancestors.unshift(node);
              node = node.parentElement;
            }
            for (const ancestor of ancestors) {
              const color = parseColor(window.getComputedStyle(ancestor).backgroundColor);
              if (color && color.a > 0) {
                bg = blend(color, bg);
              }
            }
            return bg;
          };

          const target = document.querySelector(sel) as HTMLElement | null;
          if (!target) {
            return { missing: true, selector: sel };
          }

          const style = window.getComputedStyle(target);
          const fg = parseColor(style.color);
          if (!fg) {
            return { missing: false, invalidColor: true, selector: sel, color: style.color };
          }

          const bg = effectiveBackground(target);
          let opacity = 1;
          let ancestor: Element | null = target;
          while (ancestor) {
            opacity *= Number.parseFloat(window.getComputedStyle(ancestor).opacity);
            ancestor = ancestor.parentElement;
          }
          const ink = blend({ ...fg, a: fg.a * opacity }, bg);
          const ratio = contrastRatio(ink, bg);
          const fontSize = Number.parseFloat(style.fontSize);
          const fontWeight = Number.parseInt(style.fontWeight, 10) || 400;
          const isLargeText = fontSize >= 24 || (fontSize >= 18.66 && fontWeight >= 700);
          const threshold = isLargeText ? 3 : 4.5;

          return {
            missing: false,
            selector: sel,
            ratio,
            threshold,
            fontSize,
            fontWeight,
            color: style.color,
            backgroundColor: style.backgroundColor,
            text: target.textContent?.trim().slice(0, 80) ?? "",
          };
        }, selector);

        expect(result.missing, `${sample.name} missing selector ${selector}`).toBeFalsy();
        expect((result as { ratio?: number }).ratio, `${sample.name} ${selector} ratio missing`).toBeTruthy();
        expect(
          (result as { ratio: number; threshold: number }).ratio,
          `${sample.name} ${selector} contrast ratio too low: ${JSON.stringify(result)}`,
        ).toBeGreaterThanOrEqual((result as { threshold: number }).threshold);
      }
    });
  }
});
