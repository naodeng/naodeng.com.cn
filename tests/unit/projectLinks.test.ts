import { describe, expect, it } from "vitest";
import { PROJECTS_LIST } from "@/data/projects";
import { getProjectHref, isExternalProject } from "@/utils/projectLinks";

describe("project links", () => {
  const dshQa = PROJECTS_LIST.find((project) => project.url === "/dsh-qa/");

  it("keeps dsh-qa inside the matching locale", () => {
    expect(dshQa).toBeDefined();
    expect(isExternalProject(dshQa!)).toBe(false);
    expect(getProjectHref("en", dshQa!)).toBe("/en/dsh-qa/");
    expect(getProjectHref("zh-cn", dshQa!)).toBe("/zh-cn/dsh-qa/");
  });

  it("does not localize GitHub projects", () => {
    const external = PROJECTS_LIST.find((project) => project.url.includes("github.com"));
    expect(external).toBeDefined();
    expect(isExternalProject(external!)).toBe(true);
    expect(getProjectHref("en", external!)).toBe(external!.url);
  });
});
