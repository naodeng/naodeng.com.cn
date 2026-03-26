import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { marked } from "marked";
import type { Lang } from "@/i18n";

export type QASkill = {
  lang: "en" | "zh-cn";
  slug: string;
  title: string;
  chineseName: string;
  author: string;
  updatedAt: string;
  intro: string;
  whoShouldUse: string;
  whenToUse: string;
  sourceSkillUrl: string;
  sourceRepoUrl: string;
  usageMarkdown: string;
  usageHtml: string;
  summaryCards: Array<{ title: string; html: string }>;
  fullIntroMarkdown: string;
  fullIntroHtml: string;
  installMarkdown: string;
  installHtml: string;
};

export type QASkillsGrouped = {
  testingTypes: QASkill[];
  testingWorkflows: QASkill[];
  plus: QASkill[];
  testingTypeSubgroups: Array<{
    key: string;
    title: { "zh-cn": string; en: string };
    skills: QASkill[];
  }>;
};

const WORKFLOW_SLUGS = new Set([
  "daily-testing-workflow",
  "discover-testing",
  "sprint-testing-workflow",
  "release-testing-workflow",
]);

const TESTING_TYPE_SUBGROUPS: Array<{
  key: string;
  title: { "zh-cn": string; en: string };
  slugs: string[];
}> = [
  {
    key: "requirements-strategy",
    title: { "zh-cn": "需求与策略", en: "Requirements & Strategy" },
    slugs: ["requirements-analysis", "test-strategy"],
  },
  {
    key: "case-design-review",
    title: { "zh-cn": "用例与评审", en: "Case Design & Review" },
    slugs: ["test-case-writing", "test-case-reviewer"],
  },
  {
    key: "functional-compatibility",
    title: { "zh-cn": "功能与兼容", en: "Functional & Compatibility" },
    slugs: ["functional-testing", "manual-testing", "mobile-testing"],
  },
  {
    key: "api-automation",
    title: { "zh-cn": "接口与自动化", en: "API & Automation" },
    slugs: [
      "api-testing",
      "api-test-bruno",
      "api-test-pytest",
      "api-test-restassure",
      "api-test-supertest",
      "automation-testing",
    ],
  },
  {
    key: "quality-specialties",
    title: { "zh-cn": "质量保障专项", en: "Quality Specialties" },
    slugs: [
      "performance-testing",
      "performance-test-gatling",
      "performance-test-k6",
      "security-testing",
      "accessibility-testing",
    ],
  },
  {
    key: "defect-reporting",
    title: { "zh-cn": "缺陷与报告", en: "Defect & Reporting" },
    slugs: ["bug-reporting", "test-reporting", "ai-assisted-testing"],
  },
];

function toHtml(markdown: string) {
  if (!markdown.trim()) return "";
  return marked.parse(markdown, { gfm: true }) as string;
}

function normalizeInline(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function sectionContent(body: string, heading: string) {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const headingRegex = new RegExp(`^##\\s+${escaped}\\s*$`, "m");
  const headingMatch = headingRegex.exec(body);
  if (!headingMatch) return "";

  const start = headingMatch.index + headingMatch[0].length;
  const rest = body.slice(start);
  const nextHeadingMatch = /^##\s+/m.exec(rest);
  const end = nextHeadingMatch ? start + nextHeadingMatch.index : body.length;
  return body.slice(start, end).trim();
}

function parseQuickIntro(body: string, lang: "en" | "zh-cn") {
  const section = lang === "zh-cn" ? sectionContent(body, "快速介绍") : sectionContent(body, "Quick Intro");
  const lines = section
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("-"));

  const whoPrefix = lang === "zh-cn" ? /^-\s*适合谁[:：]\s*/ : /^-\s*Who should use[:：]\s*/i;
  const whenPrefix = lang === "zh-cn" ? /^-\s*何时使用[:：]\s*/ : /^-\s*Best used when[:：]\s*/i;

  const whoLine = lines.find((line) => whoPrefix.test(line)) ?? "";
  const whenLine = lines.find((line) => whenPrefix.test(line)) ?? "";

  const whoShouldUse = normalizeInline(whoLine.replace(whoPrefix, ""));
  const whenToUse = normalizeInline(whenLine.replace(whenPrefix, ""));

  const intro = lines
    .map((line) => line.replace(/^-\s*/, "").trim())
    .join(" ")
    .trim();

  return { intro, whoShouldUse, whenToUse };
}

function parseUpdatedAt(body: string, lang: "en" | "zh-cn") {
  const heading = lang === "zh-cn" ? "同步日期" : "Last Synced";
  const section = sectionContent(body, heading);
  return section.split("\n")[0]?.trim() ?? "";
}

function parseSourceLinks(body: string) {
  const sourceSection = sectionContent(body, "来源") || sectionContent(body, "Source");
  const skillMatch = sourceSection.match(/\[[^\]]+\]\((https?:\/\/[^)]+)\)/);
  const repoMatch = sourceSection.match(/Repository[:：]\s*\[([^\]]+)\]\((https?:\/\/[^)]+)\)/i);
  const fallbackRepo = sourceSection.match(/https?:\/\/github\.com\/naodeng\/awesome-qa-skills[^\s)]*/i);

  return {
    sourceSkillUrl: skillMatch?.[1] ?? "",
    sourceRepoUrl: repoMatch?.[2] ?? fallbackRepo?.[0] ?? "https://github.com/naodeng/awesome-qa-skills",
  };
}

function parseAuthor(body: string) {
  const match = body.match(/^作者[:：]\s*(.+)$/m);
  return (match?.[1] ?? "").trim();
}

function parseTitle(body: string) {
  const match = body.match(/^#\s+(.+)$/m);
  return (match?.[1] ?? "").trim();
}

function parseChineseName(body: string, lang: "en" | "zh-cn") {
  if (lang !== "zh-cn") return "";
  const section = sectionContent(body, "中文名称");
  return section.split("\n")[0]?.trim() ?? "";
}

function splitDetailSections(body: string, lang: "en" | "zh-cn") {
  const usageHeading = lang === "zh-cn" ? "使用说明" : "Usage Guide";
  const installHeading = lang === "zh-cn" ? "安装" : "Install";
  const sourceHeading = lang === "zh-cn" ? "来源" : "Source";

  const usageSection = sectionContent(body, usageHeading);
  const summarySection = lang === "zh-cn"
    ? sectionContent(body, "说明汇总")
    : sectionContent(body, "Skill Breakdown");
  const installSection = sectionContent(body, installHeading);

  const usageMarkdown = usageSection ? `## ${usageHeading}\n\n${usageSection}` : "";
  const fullIntroMarkdown = summarySection
    ? `## ${lang === "zh-cn" ? "说明汇总" : "Skill Breakdown"}\n\n${summarySection}`
    : "";

  const installMarkdown = installSection
    ? `## ${installHeading}\n\n${installSection}`
    : "";

  const sourceSection = sectionContent(body, sourceHeading);
  const sourceMarkdown = sourceSection
    ? `## ${sourceHeading}\n\n${sourceSection}`
    : "";

  return {
    usageMarkdown: usageMarkdown.trim(),
    fullIntroMarkdown: fullIntroMarkdown.trim(),
    installMarkdown: [installMarkdown, sourceMarkdown].filter(Boolean).join("\n\n").trim(),
  };
}

function buildSummaryCards(summaryMarkdown: string) {
  const normalized = summaryMarkdown
    .replace(/^##[^\n]*\n*/m, "")
    .trim();
  if (!normalized) return [] as Array<{ title: string; html: string }>;

  const headingRegex = /^###\s+(.+)$/gm;
  const matches = Array.from(normalized.matchAll(headingRegex));
  if (matches.length === 0) return [] as Array<{ title: string; html: string }>;

  return matches
    .map((match, index) => {
      const title = (match[1] ?? "").trim();
      const bodyStart = (match.index ?? 0) + match[0].length;
      const nextIndex = matches[index + 1]?.index ?? normalized.length;
      const body = normalized.slice(bodyStart, nextIndex).trim();
      if (!title) return null;
      return {
        title,
        html: toHtml(body),
      };
    })
    .filter((item): item is { title: string; html: string } => Boolean(item));
}

function sortBySlugOrder(skills: QASkill[], slugOrder: string[]) {
  const orderMap = new Map(slugOrder.map((slug, index) => [slug, index]));
  return [...skills].sort((a, b) => {
    const ai = orderMap.get(a.slug) ?? Number.MAX_SAFE_INTEGER;
    const bi = orderMap.get(b.slug) ?? Number.MAX_SAFE_INTEGER;
    if (ai !== bi) return ai - bi;
    return a.slug.localeCompare(b.slug);
  });
}

export async function getQASkills(lang: Lang) {
  if (lang !== "en" && lang !== "zh-cn") return [];

  const dir = path.resolve(process.cwd(), "src", "content", "qaskills", lang);
  const files = (await readdir(dir))
    .filter((name) => name.endsWith(".md") && name !== "README.md")
    .sort((a, b) => a.localeCompare(b));

  const skills = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.md$/, "");
      const fullPath = path.join(dir, file);
      const body = await readFile(fullPath, "utf-8");
      const title = parseTitle(body) || slug;
      const chineseName = parseChineseName(body, lang);
      const author = parseAuthor(body);
      const updatedAt = parseUpdatedAt(body, lang);
      const { intro, whoShouldUse, whenToUse } = parseQuickIntro(body, lang);
      const { sourceSkillUrl, sourceRepoUrl } = parseSourceLinks(body);
      const { usageMarkdown, fullIntroMarkdown, installMarkdown } = splitDetailSections(body, lang);
      const summaryCards = buildSummaryCards(fullIntroMarkdown);

      return {
        lang,
        slug,
        title,
        chineseName,
        author,
        updatedAt,
        intro,
        whoShouldUse,
        whenToUse,
        sourceSkillUrl,
        sourceRepoUrl,
        usageMarkdown,
        usageHtml: toHtml(usageMarkdown),
        summaryCards,
        fullIntroMarkdown,
        fullIntroHtml: toHtml(fullIntroMarkdown),
        installMarkdown,
        installHtml: toHtml(installMarkdown),
      } satisfies QASkill;
    })
  );

  return skills;
}

export async function getQASkillsGrouped(lang: Lang): Promise<QASkillsGrouped> {
  const skills = await getQASkills(lang);

  const testingWorkflows = sortBySlugOrder(
    skills.filter((skill) => WORKFLOW_SLUGS.has(skill.slug)),
    [
      "daily-testing-workflow",
      "discover-testing",
      "sprint-testing-workflow",
      "release-testing-workflow",
    ]
  );

  const plus = skills
    .filter((skill) => skill.slug.endsWith("-plus"))
    .sort((a, b) => a.slug.localeCompare(b.slug));

  const testingTypes = skills
    .filter((skill) => !WORKFLOW_SLUGS.has(skill.slug) && !skill.slug.endsWith("-plus"))
    .sort((a, b) => a.slug.localeCompare(b.slug));

  const testingTypeSubgroups = TESTING_TYPE_SUBGROUPS.map((group) => ({
    key: group.key,
    title: group.title,
    skills: sortBySlugOrder(
      testingTypes.filter((skill) => group.slugs.includes(skill.slug)),
      group.slugs
    ),
  })).filter((group) => group.skills.length > 0);

  return {
    testingTypes,
    testingWorkflows,
    plus,
    testingTypeSubgroups,
  };
}

export async function getQASkillBySlug(lang: Lang, slug: string) {
  const skills = await getQASkills(lang);
  return skills.find((skill) => skill.slug === slug) ?? null;
}
