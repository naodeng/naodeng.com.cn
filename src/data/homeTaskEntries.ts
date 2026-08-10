import type { Lang } from "@/i18n";

export type HomePrimaryMode = {
  key: "read" | "reference" | "act";
  eyebrow: string;
  title: string;
  description: string;
};

export type HomeTaskEntry = {
  slug:
    | "requirements-analysis"
    | "test-strategy"
    | "test-case-writing"
    | "automation-testing"
    | "bug-reporting"
    | "test-reporting";
  title: string;
  description: string;
};

export type HomeExample = {
  key: "requirements" | "test-cases" | "bug-report";
  input: string;
  capability: string;
  output: string;
};

export const HOME_PRIMARY_MODES: Record<Lang, HomePrimaryMode[]> = {
  "zh-cn": [
    {
      key: "read",
      eyebrow: "阅读实践",
      title: "博客",
      description: "阅读软件测试、自动化、AI 工程和个人实践总结。",
    },
    {
      key: "reference",
      eyebrow: "查询知识",
      title: "Wiki / AI 百科",
      description: "查询测试概念、AI 术语和工程实践词条。",
    },
    {
      key: "act",
      eyebrow: "完成任务",
      title: "Skills 与 Prompts",
      description: "选择可复用的测试能力，直接开始当前 QA 任务。",
    },
  ],
  en: [
    {
      key: "read",
      eyebrow: "Read practices",
      title: "Blog",
      description: "Read software testing, automation, AI engineering, and practice notes.",
    },
    {
      key: "reference",
      eyebrow: "Look up knowledge",
      title: "Wiki / AI Wiki",
      description: "Look up testing concepts, AI terms, and engineering references.",
    },
    {
      key: "act",
      eyebrow: "Complete a task",
      title: "Skills and Prompts",
      description: "Choose a reusable testing capability and start the QA task at hand.",
    },
  ],
};

export const HOME_TASK_ENTRIES: Record<Lang, HomeTaskEntry[]> = {
  "zh-cn": [
    {
      slug: "requirements-analysis",
      title: "分析需求",
      description: "识别信息缺口、业务规则和高风险测试场景。",
    },
    {
      slug: "test-strategy",
      title: "制定测试策略",
      description: "确定测试范围、优先级、方法和质量风险。",
    },
    {
      slug: "test-case-writing",
      title: "编写或评审测试用例",
      description: "生成或检查带优先级的结构化测试用例。",
    },
    {
      slug: "automation-testing",
      title: "设计 API / UI 自动化",
      description: "规划可维护的接口或界面自动化测试。",
    },
    {
      slug: "bug-reporting",
      title: "分析与报告缺陷",
      description: "整理复现步骤、影响范围和诊断信息。",
    },
    {
      slug: "test-reporting",
      title: "输出测试报告",
      description: "汇总执行结果、风险、阻塞项和发布建议。",
    },
  ],
  en: [
    {
      slug: "requirements-analysis",
      title: "Analyze requirements",
      description: "Find information gaps, business rules, and high-risk test scenarios.",
    },
    {
      slug: "test-strategy",
      title: "Define a test strategy",
      description: "Set scope, priorities, methods, and quality risks.",
    },
    {
      slug: "test-case-writing",
      title: "Write or review test cases",
      description: "Create or review prioritized, structured test cases.",
    },
    {
      slug: "automation-testing",
      title: "Design API / UI automation",
      description: "Plan maintainable API or UI automated tests.",
    },
    {
      slug: "bug-reporting",
      title: "Analyze and report defects",
      description: "Organize reproduction steps, impact, and diagnostic evidence.",
    },
    {
      slug: "test-reporting",
      title: "Produce a test report",
      description: "Summarize results, risks, blockers, and release advice.",
    },
  ],
};

export const HOME_EXAMPLES: Record<Lang, HomeExample[]> = {
  "zh-cn": [
    {
      key: "requirements",
      input: "需求文档或 User Story",
      capability: "需求分析 Skill",
      output: "信息缺口、业务规则、风险和测试场景",
    },
    {
      key: "test-cases",
      input: "测试场景与业务约束",
      capability: "测试用例 Prompt",
      output: "带优先级的结构化测试用例",
    },
    {
      key: "bug-report",
      input: "现象、日志和复现信息",
      capability: "缺陷上报 Skill",
      output: "可复现、可诊断的 Bug Report",
    },
  ],
  en: [
    {
      key: "requirements",
      input: "Requirements or user story",
      capability: "Requirements Analysis Skill",
      output: "Gaps, rules, risks, and test scenarios",
    },
    {
      key: "test-cases",
      input: "Test scenarios and business constraints",
      capability: "Test Case Prompt",
      output: "Prioritized, structured test cases",
    },
    {
      key: "bug-report",
      input: "Symptoms, logs, and reproduction details",
      capability: "Bug Reporting Skill",
      output: "A reproducible, diagnosable bug report",
    },
  ],
};
