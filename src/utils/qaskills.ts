import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { marked } from "marked";
import type { Lang } from "@/i18n";
import type { QASkillCategory } from "@/utils/qaskillsFilter";
import { getRelatedQASkills } from "@/utils/qaskillsRelated";
import {
  SECTION_KEYS,
  SECTION_LABELS,
  extractCanonicalSections,
  firstBulletText,
  type CanonicalSections,
  type SectionKey,
} from "@/utils/qaskillsSections";

export type { QASkillCategory };
export { SECTION_KEYS, SECTION_LABELS };

export type QASkill = {
  lang: "en" | "zh-cn";
  slug: string;
  title: string;
  chineseName: string;
  author: string;
  updatedAt: string;
  description: string;
  intro: string;
  category: QASkillCategory;
  subgroup: string;
  hasEvals: boolean;
  sourceSkillUrl: string;
  sourceRepoUrl: string;
  sections: CanonicalSections;
  sectionHtml: Record<SectionKey, string>;
  rawSkillMarkdown: string;
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
    title: { "zh-cn": "缺陷、报告与审查", en: "Defect, Reporting & Review" },
    slugs: ["bug-reporting", "test-reporting", "ai-assisted-testing", "code-review"],
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

function parseTitle(body: string) {
  const match = body.match(/^#\s+(.+)$/m);
  return (match?.[1] ?? "").trim();
}

function parseAuthor(body: string) {
  const match = body.match(/^(?:作者|Author)[:：]\s*(.+)$/m);
  return (match?.[1] ?? "").trim();
}

function parseMetadata(body: string) {
  const section = sectionContent(body, "元数据") || sectionContent(body, "Metadata");
  const get = (key: string) => {
    const re = new RegExp(`^-\\s*${key}:\\s*(.+)$`, "im");
    const m = section.match(re);
    return m ? normalizeInline(m[1]) : "";
  };

  const categoryRaw = get("category");
  const category: QASkillCategory =
    categoryRaw === "workflow" || categoryRaw === "plus" || categoryRaw === "type"
      ? categoryRaw
      : "type";

  return {
    slug: get("slug"),
    category,
    hasEvals: /^(true|1|yes)$/i.test(get("hasEvals")),
    syncedAt: get("syncedAt"),
    sourceSkillUrl: get("sourceSkillUrl"),
    description: get("description"),
  };
}

function extractRawSkillMarkdown(body: string) {
  const section =
    sectionContent(body, "原始 SKILL.md") || sectionContent(body, "Raw SKILL.md");
  if (!section) return "";

  const fence = section.match(/^(`{3,})(?:markdown|md)?\s*\n([\s\S]*?)\n\1\s*$/m);
  if (fence) return fence[2].replace(/\n$/, "");

  const loose = section.match(/^(`{3,})(?:markdown|md)?\s*\n([\s\S]*)/m);
  if (loose) {
    const ticks = loose[1];
    const rest = loose[2];
    const end = rest.lastIndexOf(`\n${ticks}`);
    if (end >= 0) return rest.slice(0, end);
    return rest.replace(new RegExp(`\n${ticks}\\s*$`), "");
  }
  return section.trim();
}

function inferCategory(slug: string, declared: QASkillCategory): QASkillCategory {
  if (declared) return declared;
  if (WORKFLOW_SLUGS.has(slug)) return "workflow";
  if (slug.endsWith("-plus")) return "plus";
  return "type";
}

function subgroupForSlug(slug: string) {
  const group = TESTING_TYPE_SUBGROUPS.find((g) => g.slugs.includes(slug));
  return group?.key ?? "";
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

export function parseQASkillMarkdown(lang: "en" | "zh-cn", slug: string, body: string): QASkill {
  const meta = parseMetadata(body);
  const title = parseTitle(body) || meta.slug || slug;
  const author = parseAuthor(body) || "naodeng";
  const rawSkillMarkdown = extractRawSkillMarkdown(body);
  // Avoid ## headings inside the raw fence overwriting structured sections.
  const bodyWithoutRaw = body
    .replace(/^##\s+原始 SKILL\.md\s*$[\s\S]*?(?=^##\s+|\Z)/m, "")
    .replace(/^##\s+Raw SKILL\.md\s*$[\s\S]*?(?=^##\s+|\Z)/m, "");
  const sections = extractCanonicalSections(bodyWithoutRaw);
  const sectionHtml = Object.fromEntries(
    SECTION_KEYS.map((key) => [key, toHtml(sections[key])])
  ) as Record<SectionKey, string>;
  const description = meta.description;
  const intro = description || firstBulletText(sections.whenToUse) || title;
  const category = inferCategory(meta.slug || slug, meta.category);
  const installMarkdown =
    sectionContent(body, "安装") || sectionContent(body, "Install") || "";
  const sourceSection = sectionContent(body, "来源") || sectionContent(body, "Source");
  const repoMatch = sourceSection.match(/https?:\/\/github\.com\/naodeng\/awesome-qa-skills[^\s)]*/i);

  return {
    lang,
    slug: meta.slug || slug,
    title,
    chineseName: lang === "zh-cn" ? title : "",
    author,
    updatedAt: meta.syncedAt,
    description,
    intro,
    category,
    subgroup: subgroupForSlug(meta.slug || slug),
    hasEvals: meta.hasEvals,
    sourceSkillUrl: meta.sourceSkillUrl,
    sourceRepoUrl: repoMatch?.[0] ?? "https://github.com/naodeng/awesome-qa-skills",
    sections,
    sectionHtml,
    rawSkillMarkdown,
    installMarkdown: installMarkdown ? `## Install\n\n${installMarkdown}` : "",
    installHtml: toHtml(installMarkdown),
  };
}

export async function getQASkills(lang: Lang) {
  if (lang !== "en" && lang !== "zh-cn") return [];

  const dir = path.resolve(process.cwd(), "src", "content", "qaskills", lang);
  const files = (await readdir(dir))
    .filter((name) => name.endsWith(".md") && name !== "README.md")
    .sort((a, b) => a.localeCompare(b));

  return Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.md$/, "");
      const body = await readFile(path.join(dir, file), "utf-8");
      return parseQASkillMarkdown(lang, slug, body);
    })
  );
}

export async function getQASkillsGrouped(lang: Lang): Promise<QASkillsGrouped> {
  const skills = await getQASkills(lang);

  const testingWorkflows = sortBySlugOrder(
    skills.filter((skill) => skill.category === "workflow" || WORKFLOW_SLUGS.has(skill.slug)),
    [
      "daily-testing-workflow",
      "discover-testing",
      "sprint-testing-workflow",
      "release-testing-workflow",
    ]
  );

  const plus = skills
    .filter((skill) => skill.category === "plus" || skill.slug.endsWith("-plus"))
    .sort((a, b) => a.slug.localeCompare(b.slug));

  const testingTypes = skills
    .filter(
      (skill) =>
        !WORKFLOW_SLUGS.has(skill.slug) &&
        skill.category !== "workflow" &&
        !skill.slug.endsWith("-plus") &&
        skill.category !== "plus"
    )
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

export async function getRelatedForSkill(lang: Lang, slug: string, limit = 5) {
  const skills = await getQASkills(lang);
  return getRelatedQASkills(skills, slug, limit);
}
