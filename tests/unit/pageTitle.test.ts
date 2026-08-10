import { describe, expect, it } from "vitest";
import { buildPageTitle } from "../../src/utils/pageTitle";

describe("buildPageTitle", () => {
  it("returns the site title when no page title is provided", () => {
    expect(buildPageTitle(undefined, "Site", "append-site")).toBe("Site");
  });

  it("appends the site title by default", () => {
    expect(buildPageTitle("Prompts", "Site", "append-site")).toBe("Prompts | Site");
  });

  it("keeps an absolute title unchanged", () => {
    expect(buildPageTitle("Site | QA Skills", "Site", "absolute")).toBe("Site | QA Skills");
  });
});
