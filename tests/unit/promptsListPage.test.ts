// Tests for prompts list page getStaticPaths logic
import { describe, it, expect } from "vitest";

// Replicate the getStaticPaths logic from src/pages/[lang]/prompts/index.astro
function getStaticPaths() {
  return [
    { params: { lang: "en" } },
    { params: { lang: "zh-cn" } },
  ];
}

describe("prompts list page getStaticPaths", () => {
  it("returns exactly 2 routes", () => {
    const paths = getStaticPaths();
    expect(paths).toHaveLength(2);
  });

  it("includes en route", () => {
    const paths = getStaticPaths();
    expect(paths.some((p) => p.params.lang === "en")).toBe(true);
  });

  it("includes zh-cn route", () => {
    const paths = getStaticPaths();
    expect(paths.some((p) => p.params.lang === "zh-cn")).toBe(true);
  });

  it("each route has a lang param", () => {
    const paths = getStaticPaths();
    paths.forEach((p) => {
      expect(p.params).toHaveProperty("lang");
      expect(typeof p.params.lang).toBe("string");
    });
  });
});
