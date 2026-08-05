#!/usr/bin/env node
/**
 * Sync src/content/qaskills/{zh-cn,en} from naodeng/awesome-qa-skills.
 * Heading map MUST stay aligned with src/utils/qaskillsSections.ts.
 */
import {
  mkdtempSync,
  rmSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
  cpSync,
  statSync,
} from "node:fs";
import { join, dirname } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT = {
  zh: join(ROOT, "src/content/qaskills/zh-cn"),
  en: join(ROOT, "src/content/qaskills/en"),
};
const TOOLS = ["codex", "cursor", "claudecode", "kiro", "opencode", "trae"];
const REPO_URL = "https://github.com/naodeng/awesome-qa-skills.git";

// Keep in sync with src/utils/qaskillsSections.ts
const SECTION_KEYS = [
  "whenToUse",
  "workflow",
  "coreConstraints",
  "progressiveDisclosure",
  "checklist",
  "pitfalls",
];

const HEADING_TO_KEY = {
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

const SECTION_LABELS = {
  whenToUse: { zh: "何时使用", en: "When to Use" },
  workflow: { zh: "执行流程", en: "Workflow" },
  coreConstraints: { zh: "核心约束", en: "Core Constraints" },
  progressiveDisclosure: { zh: "按需加载", en: "Progressive Disclosure" },
  checklist: { zh: "交付前自检", en: "Pre-delivery Checklist" },
  pitfalls: { zh: "常见误区", en: "Common Pitfalls" },
};

function parseArgs(argv) {
  const opts = { repoDir: "", failOnLangMismatch: false };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--repo-dir") opts.repoDir = argv[++i] || "";
    else if (argv[i] === "--fail-on-lang-mismatch") opts.failOnLangMismatch = true;
  }
  return opts;
}

function stripFrontmatter(markdown) {
  if (!markdown.startsWith("---")) return markdown;
  const end = markdown.indexOf("\n---", 3);
  if (end === -1) return markdown;
  return markdown.slice(end + 4).replace(/^\s+/, "");
}

function parseYamlField(markdown, field) {
  if (!markdown.startsWith("---")) return "";
  const end = markdown.indexOf("\n---", 3);
  if (end === -1) return "";
  const fm = markdown.slice(3, end);
  const match = fm.match(new RegExp(`^${field}:\\s*(.+)$`, "m"));
  return match ? match[1].trim().replace(/^["']|["']$/g, "") : "";
}

function extractCanonicalSections(markdown) {
  const body = stripFrontmatter(markdown);
  const result = Object.fromEntries(SECTION_KEYS.map((k) => [k, ""]));
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

function parseTitle(markdown) {
  const match = stripFrontmatter(markdown).match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : "";
}

function displayTitle(rawTitle, siteLang) {
  if (!rawTitle) return "";
  if (siteLang === "zh") {
    return rawTitle.replace(/（中文版）/g, "").replace(/\(Chinese\)/gi, "").trim();
  }
  return rawTitle.replace(/\(English\)/gi, "").replace(/（英文版）/g, "").trim();
}

function hasEvalsDir(skillDir) {
  const evalsPath = join(skillDir, "evals");
  if (!existsSync(evalsPath) || !statSync(evalsPath).isDirectory()) return false;
  return readdirSync(evalsPath).length > 0;
}

function categoryFromPath(kind, slug) {
  if (kind === "testing-workflows") return "workflow";
  if (slug.endsWith("-plus")) return "plus";
  return "type";
}

function fenceRawMarkdown(raw) {
  let ticks = "```";
  while (raw.includes(ticks)) ticks += "`";
  return `${ticks}markdown\n${raw.replace(/\n$/, "")}\n${ticks}`;
}

function callExample(slug, siteLang) {
  if (siteLang === "zh") {
    return `@skill ${slug}\n结合当前项目上下文，按该技能的要求给出可执行结果。`;
  }
  return `@skill ${slug}\nUsing the current project context, produce an actionable result following this skill.`;
}

function buildInstallSection(installerLang, slug, siteLang) {
  const lines = [
    siteLang === "zh" ? "## 安装" : "## Install",
    "",
    siteLang === "zh"
      ? "### 按系统与 AI 工具选择安装脚本"
      : "### Choose installer by OS and AI tool",
    "",
    "#### macOS / Linux",
  ];
  for (const tool of TOOLS) {
    const url = `https://github.com/naodeng/awesome-qa-skills/blob/main/installers/${installerLang}/${slug}/mac/${tool}.sh`;
    lines.push(`- \`${tool}\`：[${tool}.sh](${url})`);
  }
  lines.push("", "#### Windows (PowerShell)");
  for (const tool of TOOLS) {
    const url = `https://github.com/naodeng/awesome-qa-skills/blob/main/installers/${installerLang}/${slug}/windows/${tool}.ps1`;
    lines.push(`- \`${tool}\`：[${tool}.ps1](${url})`);
  }
  lines.push(
    "",
    siteLang === "zh" ? "### 说明" : "### Notes",
    siteLang === "zh"
      ? "- 根据你使用的系统和 AI 工具，选择对应脚本。"
      : "- Pick the script that matches your OS and AI tool."
  );
  return lines.join("\n");
}

function buildSiteMarkdown({
  title,
  author,
  slug,
  category,
  hasEvals,
  syncedAt,
  sourceSkillUrl,
  description,
  sections,
  rawSkillMarkdown,
  siteLang,
  installerLang,
}) {
  const labelLang = siteLang === "zh" ? "zh" : "en";
  const parts = [
    `# ${title}`,
    "",
    siteLang === "zh" ? `作者：${author}` : `Author: ${author}`,
    "",
    siteLang === "zh" ? "## 元数据" : "## Metadata",
    `- slug: ${slug}`,
    `- category: ${category}`,
    `- hasEvals: ${hasEvals ? "true" : "false"}`,
    `- syncedAt: ${syncedAt}`,
    `- sourceSkillUrl: ${sourceSkillUrl}`,
    `- description: ${description}`,
    "",
  ];

  for (const key of SECTION_KEYS) {
    const body = sections[key];
    if (!body) continue;
    parts.push(`## ${SECTION_LABELS[key][labelLang]}`, "", body, "");
  }

  parts.push(
    siteLang === "zh" ? "## 原始 SKILL.md" : "## Raw SKILL.md",
    "",
    fenceRawMarkdown(rawSkillMarkdown),
    "",
    buildInstallSection(installerLang, slug, siteLang),
    "",
    siteLang === "zh" ? "## 调用示例" : "## Call Example",
    "",
    "```text",
    callExample(slug, siteLang),
    "```",
    "",
    siteLang === "zh" ? "## 来源" : "## Source",
    `- ${siteLang === "zh" ? "原始技能" : "Original Skill"}：[${slug}](${sourceSkillUrl})`,
    `- ${siteLang === "zh" ? "仓库" : "Repository"}：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)`,
    ""
  );

  return parts.join("\n");
}

function listSkills(repoRoot, lang) {
  const results = [];
  for (const kind of ["testing-types", "testing-workflows"]) {
    const base = join(repoRoot, "skills", lang, kind);
    if (!existsSync(base)) continue;
    for (const name of readdirSync(base)) {
      const skillDir = join(base, name);
      if (!statSync(skillDir).isDirectory()) continue;
      const skillPath = join(skillDir, "SKILL.md");
      if (!existsSync(skillPath)) continue;
      results.push({ slug: name, kind, skillDir, skillPath, lang });
    }
  }
  return results.sort((a, b) => a.slug.localeCompare(b.slug));
}

function ensureRepo(repoDir) {
  if (repoDir) {
    if (!existsSync(join(repoDir, "skills"))) {
      throw new Error(`--repo-dir missing skills/: ${repoDir}`);
    }
    return { path: repoDir, cleanup: false };
  }
  const dir = mkdtempSync(join(tmpdir(), "awesome-qa-skills-sync-"));
  const clone = spawnSync(
    "git",
    ["clone", "--depth", "1", "--branch", "main", REPO_URL, dir],
    { encoding: "utf8" }
  );
  if (clone.status !== 0) {
    rmSync(dir, { recursive: true, force: true });
    throw new Error(`git clone failed: ${clone.stderr || clone.stdout}`);
  }
  return { path: dir, cleanup: true };
}

function replaceLangDir(outDir, generatedDir) {
  mkdirSync(outDir, { recursive: true });
  const keep = new Set(["README.md"]);
  const existing = readdirSync(outDir).filter((f) => f.endsWith(".md") && !keep.has(f));
  const generated = new Set(readdirSync(generatedDir).filter((f) => f.endsWith(".md")));
  const removed = [];
  for (const file of existing) {
    if (!generated.has(file)) {
      rmSync(join(outDir, file), { force: true });
      removed.push(file);
    }
  }
  for (const file of generated) {
    cpSync(join(generatedDir, file), join(outDir, file));
  }
  return removed;
}

function syncLang(repoRoot, repoLang, siteKey, syncedAt) {
  const siteLang = siteKey === "zh" ? "zh" : "en";
  const installerLang = repoLang;
  const skills = listSkills(repoRoot, repoLang);
  const tmpOut = mkdtempSync(join(tmpdir(), `qaskills-out-${siteKey}-`));
  let evalsCount = 0;

  for (const skill of skills) {
    const raw = readFileSync(skill.skillPath, "utf8");
    const description = parseYamlField(raw, "description");
    const yamlName = parseYamlField(raw, "name") || skill.slug;
    const sections = extractCanonicalSections(raw);
    const title = displayTitle(parseTitle(raw), siteLang) || yamlName;
    const category = categoryFromPath(skill.kind, skill.slug);
    const evals = hasEvalsDir(skill.skillDir);
    if (evals) evalsCount += 1;
    const sourceSkillUrl = `https://github.com/naodeng/awesome-qa-skills/blob/main/skills/${repoLang}/${skill.kind}/${skill.slug}/SKILL.md`;
    const md = buildSiteMarkdown({
      title,
      author: "naodeng",
      slug: skill.slug,
      category,
      hasEvals: evals,
      syncedAt,
      sourceSkillUrl,
      description,
      sections,
      rawSkillMarkdown: raw,
      siteLang,
      installerLang,
    });
    writeFileSync(join(tmpOut, `${skill.slug}.md`), md, "utf8");
  }

  const removed = replaceLangDir(OUT[siteKey], tmpOut);
  rmSync(tmpOut, { recursive: true, force: true });
  return {
    count: skills.length,
    evalsCount,
    removed,
    slugs: skills.map((s) => s.slug),
  };
}

function main() {
  const opts = parseArgs(process.argv.slice(2));
  const syncedAt = new Date().toISOString().slice(0, 10);
  let repo;
  try {
    repo = ensureRepo(opts.repoDir);
    const zh = syncLang(repo.path, "zh", "zh", syncedAt);
    const en = syncLang(repo.path, "en", "en", syncedAt);

    const zhSet = new Set(zh.slugs);
    const enSet = new Set(en.slugs);
    const onlyZh = zh.slugs.filter((s) => !enSet.has(s));
    const onlyEn = en.slugs.filter((s) => !zhSet.has(s));
    if (onlyZh.length || onlyEn.length) {
      console.warn("[qaskills:sync] language mismatch:");
      if (onlyZh.length) console.warn(`  only zh: ${onlyZh.join(", ")}`);
      if (onlyEn.length) console.warn(`  only en: ${onlyEn.join(", ")}`);
      if (opts.failOnLangMismatch) process.exit(1);
    }

    console.log(
      `[qaskills:sync] synced ${zh.count} zh / ${en.count} en, hasEvals=${zh.evalsCount}/${en.evalsCount}, removed orphans zh=${JSON.stringify(zh.removed)} en=${JSON.stringify(en.removed)}`
    );
  } finally {
    if (repo?.cleanup) rmSync(repo.path, { recursive: true, force: true });
  }
}

main();
