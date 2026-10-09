import { describe, expect, it } from "vitest";
import { createBlogLocaleResolver } from "../../src/utils/blogLocalePaths";

const posts = [
  ...["en", "zh-cn"].flatMap(lang => Array.from({ length: lang === "en" ? 5 : 3 }, (_, index) => ({
    id: `${lang}/AI-Testing/post-${index}`,
    data: { tags: ["LLM", lang === "en" ? "AI Testing" : "AI 测试"], series: [lang === "en" ? "Field Guides" : "实践指南"] },
  }))),
  { id: "en/Performance-Testing/gatling-tool-tutorial1", data: {} },
  { id: "zh-cn/Performance-Testing/gatling-tool-intro1", data: {} },
];
const resolve = createBlogLocaleResolver(posts, 2);

describe("published blog language destinations", () => {
  it("keeps a published article's matching translation", () => {
    expect(resolve("/en/blog/ai-testing/post-0/", "zh-cn")).toEqual({ path: "/zh-cn/blog/ai-testing/post-0/", isEquivalent: true });
  });

  it("maps the historical Gatling filenames in both directions", () => {
    expect(resolve("/en/blog/performance-testing/gatling-tool-tutorial1/", "zh-cn")?.path).toBe("/zh-cn/blog/performance-testing/gatling-tool-intro1/");
    expect(resolve("/zh-cn/blog/performance-testing/gatling-tool-intro1/", "en")?.path).toBe("/en/blog/performance-testing/gatling-tool-tutorial1/");
  });

  it("offers the localized blog index when an article has no published translation", () => {
    expect(resolve("/en/blog/ai-testing/post-4/", "zh-cn")).toEqual({ path: "/zh-cn/blog/", isEquivalent: false });
  });

  it("keeps a tag pagination route only when the target language has that page", () => {
    expect(resolve("/en/tags/LLM/page/2/", "zh-cn")).toEqual({ path: "/zh-cn/tags/LLM/page/2/", isEquivalent: true });
    expect(resolve("/en/tags/LLM/page/3/", "zh-cn")).toEqual({ path: "/zh-cn/tags/LLM/", isEquivalent: false });
  });

  it("does not link a translated tag name to a legacy route that redirects back", () => {
    expect(resolve("/en/tags/AI%20Testing/page/2/", "zh-cn")).toEqual({ path: "/zh-cn/tags/", isEquivalent: false });
    expect(resolve("/zh-cn/tags/AI%20%E6%B5%8B%E8%AF%95/", "en")?.path).toBe("/en/tags/");
  });

  it("uses the destination's series index when the series name differs by language", () => {
    expect(resolve("/en/series/Field%20Guides/page/2/", "zh-cn")).toEqual({ path: "/zh-cn/series/", isEquivalent: false });
  });

  it("preserves the current language's page", () => {
    expect(resolve("/en/series/Field%20Guides/page/3/", "en")?.path).toBe("/en/series/Field%20Guides/page/3/");
  });

  it("uses the localized blog index when the pagination page is unavailable", () => {
    expect(resolve("/en/blog/page/4/", "zh-cn")).toEqual({ path: "/zh-cn/blog/", isEquivalent: false });
  });

  it("leaves other content families to the existing route resolver", () => {
    expect(resolve("/en/AIWiki/ai-agent/", "zh-cn")).toBeNull();
  });
});
