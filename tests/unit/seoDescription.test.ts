import { describe, expect, it } from "vitest";
import { buildMetaDescription } from "../../src/utils/seoDescription.mjs";

describe("meta description builder", () => {
  it("adds page context when padding a short description", () => {
    const result = buildMetaDescription({
      description: "Installation steps.",
      siteDescription: "The site description.",
      pageContext: "Installation",
      suffix: "Find practical software testing guidance.",
    });

    expect(result).toContain("Installation");
    expect(result.length).toBeGreaterThanOrEqual(70);
    expect(result.length).toBeLessThanOrEqual(155);
  });

  it("adds page context to the repeated default site description", () => {
    const result = buildMetaDescription({
      description: "The site description.",
      siteDescription: "The site description.",
      pageContext: "Page Two",
      suffix: "Find practical software testing guidance.",
    });

    expect(result.startsWith("Page Two: ")).toBe(true);
    expect(result).not.toBe("The site description.");
  });
});
