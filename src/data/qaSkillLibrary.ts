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
