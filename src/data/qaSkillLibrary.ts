import type { Lang } from "@/i18n";
import type { QASkill } from "@/utils/qaskills";

export const QA_SKILL_TOOLS = ["codex", "cursor", "claudecode", "kiro", "opencode", "trae"] as const;
export const QA_SKILL_STARTER_PATHS = ["search", "discover", "lifecycle"] as const;
export const RECOMMENDED_QA_SKILL_SLUGS = [
  "discover-testing",
  "requirements-analysis",
  "test-case-writing",
  "test-strategy",
  "bug-reporting",
  "daily-testing-workflow",
] as const;

type RecommendedSlug = (typeof RECOMMENDED_QA_SKILL_SLUGS)[number];

const INTRO_FALLBACKS: Record<Lang, Partial<Record<RecommendedSlug, string>>> = {
  "zh-cn": {
    "discover-testing": "输入当前测试任务和项目背景，选择最匹配的主 Skill，并给出下一步执行方式。",
    "requirements-analysis": "输入需求文档或 User Story，输出信息缺口、业务规则、风险和测试范围。",
    "test-case-writing": "输入测试场景和业务约束，输出带优先级的结构化测试用例。",
    "test-strategy": "输入项目目标、范围和风险，输出可执行的测试策略与质量保障重点。",
    "bug-reporting": "输入问题现象、日志和复现信息，输出清晰、可诊断的缺陷报告。",
    "daily-testing-workflow": "输入当天范围、进度和风险，输出可执行的日常测试节奏与交付清单。",
  },
  en: {
    "discover-testing": "Provide the testing task and project context to select the best primary Skill and the next execution step.",
    "requirements-analysis": "Provide requirements or a user story to produce gaps, rules, risks, and test scope.",
    "test-case-writing": "Provide test scenarios and constraints to produce prioritized, structured test cases.",
    "test-strategy": "Provide project goals, scope, and risks to produce an actionable test strategy and quality priorities.",
    "bug-reporting": "Provide symptoms, logs, and reproduction details to produce a clear, diagnosable defect report.",
    "daily-testing-workflow": "Provide today's scope, progress, and risks to produce an actionable daily QA flow and delivery checklist.",
  },
};

export function getQASkillCardIntro(
  skill: Pick<QASkill, "slug" | "intro">,
  lang: Lang,
): string {
  const generic = /(?:真实项目里处理|real project.*related task)/i.test(skill.intro);
  return generic ? INTRO_FALLBACKS[lang][skill.slug as RecommendedSlug] || skill.intro : skill.intro;
}

export type QASkillCardSummary = {
  whenToUse: string;
  input: string;
  output: string;
  humanReview: string;
};

type SummaryFallback = Partial<QASkillCardSummary>;

/**
 * 结构化章节提取不出有效内容时，按 slug 维护的双语兜底。
 * 工具类 skill 只有「何时使用」与「常见误区」，缺少执行流程与交付自检，
 * 其输入/输出线索统一在此显式维护，保证目录摘要完整覆盖。
 */
const UI_TOOL_NAMES = {
  "ui-test-cypress": "Cypress",
  "ui-test-playwright": "Playwright",
  "ui-test-puppeteer": "Puppeteer",
  "ui-test-selenium": "Selenium",
  "ui-test-testcafe": "TestCafe",
  "ui-test-webdriverio": "WebdriverIO",
} as const;

function buildToolSummaryFallbacks(lang: Lang): Record<string, SummaryFallback> {
  const zh = lang === "zh-cn";
  const entries: Record<string, SummaryFallback> = {
    "api-test-postman": {
      input: zh ? "接口清单、Postman 环境与测试范围。" : "API endpoints, Postman environment, and test scope.",
      output: zh
        ? "Postman collections、环境配置与回归脚本方案。"
        : "Postman collections, environment setup, and regression script plan.",
    },
    "performance-test-jmeter": {
      input: zh ? "压测目标、性能指标与测试范围。" : "Load targets, performance metrics, and test scope.",
      output: zh
        ? "JMeter 测试计划、线程模型与结果分析要点。"
        : "JMeter test plan, thread model, and result analysis points.",
    },
  };
  for (const [slug, tool] of Object.entries(UI_TOOL_NAMES)) {
    entries[slug] = {
      input: zh ? "被测页面、目标浏览器与测试范围。" : "Pages under test, target browsers, and test scope.",
      output: zh
        ? `${tool} 用例结构、定位策略与执行配置方案。`
        : `${tool} case structure, locator strategy, and run configuration plan.`,
    };
  }
  return entries;
}

const SUMMARY_FALLBACKS: Record<Lang, Partial<Record<string, SummaryFallback>>> = {
  "zh-cn": buildToolSummaryFallbacks("zh-cn"),
  en: buildToolSummaryFallbacks("en"),
};

/** 通用句检测：像“处理相关任务”这种没有信息量的句子不能作为卡片摘要。 */
const GENERIC_WHEN: Record<Lang, RegExp> = {
  "zh-cn": /处理.*相关任务|相关任务/,
  en: /real project context|related tasks?|related work/i,
};

/** 工作流里更像“输入/准备”的线索词。 */
const INPUT_HINTS: Record<Lang, RegExp> = {
  "zh-cn": /补充|输入|上下文|范围|请求|需求|环境|信息不全|提供|阅读|读|先/,
  en: /provide|input|context|scope|request|requirement|environment|details|incomplete|gather|collect|read/i,
};

/** 自检列表里描述交付物/覆盖内容的线索词。 */
const OUTPUT_HINTS: Record<Lang, RegExp> = {
  "zh-cn": /最低覆盖|输出|交付|产物|报告|用例|清单|评审|总结|结构/,
  en: /coverage|output|deliver|artifact|report|cases?|checklist|review|summary|structure/i,
};

/** 引用主提示词的自检句不能当作输出描述。 */
const SELF_REF: Record<Lang, RegExp> = {
  "zh-cn": /主提示词/,
  en: /main prompt/i,
};

function bulletList(sectionBody: string): string[] {
  return sectionBody
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => /^([-*+]|\d+\.)\s+/.test(line))
    .map((line) =>
      line
        .replace(/^([-*+]|\d+\.)\s+/, "")
        .replace(/^\[[ xX]\]\s*/, "")
        .trim()
    )
    .filter(Boolean);
}

function pickWhenToUse(skill: Pick<QASkill, "sections">, lang: Lang): string {
  const bullets = bulletList(skill.sections.whenToUse);
  return bullets.find((b) => !GENERIC_WHEN[lang].test(b)) ?? "";
}

function pickInput(skill: Pick<QASkill, "sections">, lang: Lang): string {
  const bullets = bulletList(skill.sections.workflow);
  return bullets.find((b) => INPUT_HINTS[lang].test(b)) ?? bullets[0] ?? "";
}

function pickOutput(skill: Pick<QASkill, "sections">, lang: Lang): string {
  const bullets = bulletList(skill.sections.checklist);
  return (
    bullets.find((b) => OUTPUT_HINTS[lang].test(b) && !SELF_REF[lang].test(b)) ??
    bullets.find((b) => !SELF_REF[lang].test(b)) ??
    ""
  );
}

function pickHumanReview(skill: Pick<QASkill, "sections">): string {
  return (
    bulletList(skill.sections.coreConstraints)[0] ??
    bulletList(skill.sections.pitfalls)[0] ??
    ""
  );
}

/**
 * 目录卡的完整摘要：适用场景、输入、输出、人工复核，
 * 只从结构化章节（whenToUse / workflow / checklist / coreConstraints / pitfalls）提取，
 * 不解析自由文案 intro；提取不到时用 SUMMARY_FALLBACKS 兜底。
 */
export function getQASkillCardSummary(
  skill: Pick<QASkill, "slug" | "sections">,
  lang: Lang,
): QASkillCardSummary {
  const fallback = SUMMARY_FALLBACKS[lang][skill.slug] ?? {};
  return {
    whenToUse: pickWhenToUse(skill, lang) || fallback.whenToUse || "",
    input: pickInput(skill, lang) || fallback.input || "",
    output: pickOutput(skill, lang) || fallback.output || "",
    humanReview: pickHumanReview(skill) || fallback.humanReview || "",
  };
}
