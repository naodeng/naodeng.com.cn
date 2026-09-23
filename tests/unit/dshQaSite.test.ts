import { describe, expect, it } from "vitest";
import { DSH_QA_SITE } from "@/data/dshQaSite";

describe("dsh-qa site data", () => {
  it.each(["en", "zh-cn"] as const)("provides complete localized product content for %s", (lang) => {
    const site = DSH_QA_SITE[lang];

    expect(site.hero.title.toLowerCase()).toContain("dsh-qa");
    expect(site.hero.latestRelease).toEqual({
      version: "v0.5.2",
      publishedAt: "2026-09-23",
      url: "https://github.com/naodeng/dsh-qa/releases/tag/v0.5.2",
    });
    expect(site.hero.actions).toHaveLength(3);
    expect(site.features).toHaveLength(4);
    expect(site.showcase).toHaveLength(6);
    expect(site.showcase.map((item) => item.image)).toEqual([
      "/images/projects/dsh-qa/home.webp",
      "/images/projects/dsh-qa/board.webp",
      "/images/projects/dsh-qa/project-detail.webp",
      "/images/projects/dsh-qa/calendar.webp",
      "/images/projects/dsh-qa/test-mode.webp",
      "/images/projects/dsh-qa/skills.webp",
    ]);
    expect(site.deliveryFlow).toHaveLength(5);
    expect(site.installModes).toHaveLength(2);
    expect(site.ecosystemLinks.map((link) => link.href)).toEqual(expect.arrayContaining([
      `/${lang}/qaskills/`,
      `/${lang}/prompts/`,
      `/${lang}/blog/ai-testing/dsh-qa-harness-api-compatibility-404/`,
    ]));
  });

  it.each(["en", "zh-cn"] as const)("keeps verified release facts in newest-first order for %s", (lang) => {
    expect(DSH_QA_SITE[lang].releases.map((release) => [release.version, release.publishedAt, release.url])).toEqual([
      ["v0.5.2", "2026-09-23", "https://github.com/naodeng/dsh-qa/releases/tag/v0.5.2"],
      ["v0.5.1", "2026-09-22", "https://github.com/naodeng/dsh-qa/releases/tag/v0.5.1"],
      ["v0.5.0", "2026-09-21", "https://github.com/naodeng/dsh-qa/releases/tag/v0.5.0"],
      ["v0.4.1", "2026-09-15", "https://github.com/naodeng/dsh-qa/releases/tag/v0.4.1"],
      ["v0.4.0", "2026-09-15", "https://github.com/naodeng/dsh-qa/releases/tag/v0.4.0"],
      ["v0.3.1", "2026-09-11", "https://github.com/naodeng/dsh-qa/releases/tag/v0.3.1"],
      ["v0.3.0", "2026-09-11", "https://github.com/naodeng/dsh-qa/releases/tag/v0.3.0"],
      ["v0.2.0", "2026-09-01", "https://github.com/naodeng/dsh-qa/releases/tag/v0.2.0"],
      ["v0.1.8", "2026-08-26", "https://github.com/naodeng/dsh-qa/releases/tag/v0.1.8"],
      ["v0.1.7", "2026-08-25", "https://github.com/naodeng/dsh-qa/releases/tag/v0.1.7"],
      ["v0.1.6", "2026-08-25", "https://github.com/naodeng/dsh-qa/releases/tag/v0.1.6"],
      ["v0.1.5", "2026-08-24", "https://github.com/naodeng/dsh-qa/releases/tag/v0.1.5"],
      ["v0.1.4", "2026-08-20", "https://github.com/naodeng/dsh-qa/releases/tag/v0.1.4"],
      ["v0.1.3", "2026-08-19", "https://github.com/naodeng/dsh-qa/releases/tag/v0.1.3"],
      ["v0.1.2", "2026-08-19", "https://github.com/naodeng/dsh-qa/releases/tag/v0.1.2"],
      ["v0.1.1", "2026-08-19", "https://github.com/naodeng/dsh-qa/releases/tag/v0.1.1"],
      ["v0.1.0", "2026-08-19", "https://github.com/naodeng/dsh-qa/releases/tag/v0.1.0"],
    ]);
  });
});
