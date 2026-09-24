import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const redirects = readFileSync(path.join(REPO_ROOT, "public/_redirects"), "utf8");
const pagination = readFileSync(
  path.join(REPO_ROOT, "src/components/PaginationNav.astro"),
  "utf8",
);
const combinatorialArticle = readFileSync(
  path.join(
    REPO_ROOT,
    "src/blog/zh-cn/UI-Automation-Testing/UI-Testing-best-practice-advanced-combinatorial-testing-and-performance-testing.mdx",
  ),
  "utf8",
);

describe("GSC-confirmed SEO fixes", () => {
  it("keeps exact redirects for verified legacy 404 URLs", () => {
    const mappings = [
      ["/zh-cn/wiki/B/bug", "/zh-cn/wiki/bug/"],
      ["/zh-cn/wiki/S/selenium", "/zh-cn/wiki/selenium/"],
      ["/zh-cn/wiki/wTiki/test-automation.md", "/zh-cn/wiki/test-automation/"],
      [
        "/zh-cn/blog/performance-testing/gatling-tool-tutorial-advanced-usage/",
        "/en/blog/performance-testing/gatling-tool-tutorial-advanced-usage/",
      ],
      [
        "/zh-cn/blog/performance-testing/gatling-tool-tutorial-ci-cd-integration/",
        "/en/blog/performance-testing/gatling-tool-tutorial-ci-cd-integration/",
      ],
    ];

    for (const [from, to] of mappings) {
      expect(redirects).toContain(`${from} ${to} 301`);
    }
  });

  it("generates final trailing-slash URLs for blog pagination", () => {
    expect(pagination).toContain('const blogBase = getRelativeLocaleUrl(locale, "/blog/");');
    expect(pagination).toContain("`${blogBase}page/${currentPage - 1}/`");
    expect(pagination).toContain("`${blogBase}page/${currentPage + 1}/`");
    expect(pagination).toContain("`${blogBase}page/${totalPages}/`");
    expect(pagination).toContain('blogBase + "page/" + num + "/"');
  });

  it("links to the published test-flake article instead of a Markdown source file", () => {
    expect(combinatorialArticle).not.toContain("./test-flake.zh.md");
    expect(combinatorialArticle).toContain(
      "/zh-cn/blog/ui-automation-testing/ui-testing-best-practice-advanced-test-states-and-test-flake/",
    );
  });
});
