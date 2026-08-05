export const SECTION_KEYS = [
  "whenToUse",
  "workflow",
  "coreConstraints",
  "progressiveDisclosure",
  "checklist",
  "pitfalls",
] as const;

export type SectionKey = (typeof SECTION_KEYS)[number];

export type CanonicalSections = Record<SectionKey, string>;

const HEADING_TO_KEY: Record<string, SectionKey> = {
  "何时使用": "whenToUse",
  "When to Use": "whenToUse",
  "执行流程": "workflow",
  Workflow: "workflow",
  "核心约束": "coreConstraints",
  "Core Constraints": "coreConstraints",
  "按需加载": "progressiveDisclosure",
  "Progressive Disclosure": "progressiveDisclosure",
  "交付前自检": "checklist",
  "Pre-delivery Checklist": "checklist",
  "常见误区": "pitfalls",
  "Common Pitfalls": "pitfalls",
};

export const SECTION_LABELS: Record<SectionKey, { "zh-cn": string; en: string }> = {
  whenToUse: { "zh-cn": "何时使用", en: "When to Use" },
  workflow: { "zh-cn": "执行流程", en: "Workflow" },
  coreConstraints: { "zh-cn": "核心约束", en: "Core Constraints" },
  progressiveDisclosure: { "zh-cn": "按需加载", en: "Progressive Disclosure" },
  checklist: { "zh-cn": "交付前自检", en: "Pre-delivery Checklist" },
  pitfalls: { "zh-cn": "常见误区", en: "Common Pitfalls" },
};

function stripFrontmatter(markdown: string) {
  if (!markdown.startsWith("---")) return markdown;
  const end = markdown.indexOf("\n---", 3);
  if (end === -1) return markdown;
  return markdown.slice(end + 4).replace(/^\s+/, "");
}

export function extractCanonicalSections(markdown: string): CanonicalSections {
  const body = stripFrontmatter(markdown);
  const result = Object.fromEntries(SECTION_KEYS.map((k) => [k, ""])) as CanonicalSections;
  const headingRe = /^##\s+(.+?)\s*$/gm;
  const matches = Array.from(body.matchAll(headingRe));

  for (let i = 0; i < matches.length; i++) {
    const rawTitle = (matches[i][1] || "").trim();
    const key = HEADING_TO_KEY[rawTitle];
    if (!key) continue;
    const start = (matches[i].index || 0) + matches[i][0].length;
    const end = i + 1 < matches.length ? matches[i + 1].index || body.length : body.length;
    result[key] = body.slice(start, end).trim();
  }

  return result;
}

export function firstBulletText(sectionBody: string) {
  const line = sectionBody
    .split("\n")
    .map((l) => l.trim())
    .find((l) => /^([-*+]|\d+\.)\s+/.test(l));
  if (!line) return sectionBody.split("\n").map((l) => l.trim()).find(Boolean) || "";
  return line.replace(/^([-*+]|\d+\.)\s+/, "").trim();
}

export function parseYamlDescription(markdown: string) {
  if (!markdown.startsWith("---")) return "";
  const end = markdown.indexOf("\n---", 3);
  if (end === -1) return "";
  const fm = markdown.slice(3, end);
  const match = fm.match(/^description:\s*(.+)$/m);
  if (!match) return "";
  return match[1].trim().replace(/^["']|["']$/g, "");
}

export function parseYamlName(markdown: string) {
  if (!markdown.startsWith("---")) return "";
  const end = markdown.indexOf("\n---", 3);
  if (end === -1) return "";
  const fm = markdown.slice(3, end);
  const match = fm.match(/^name:\s*(.+)$/m);
  return match ? match[1].trim().replace(/^["']|["']$/g, "") : "";
}
