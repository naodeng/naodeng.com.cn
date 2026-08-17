import type { Lang } from "@/i18n";

export type HomeTaskTarget = {
  kind: "skill" | "prompt";
  slug: string;
  label: string;
  description: string;
};

export type HomeTaskEntry = {
  key:
    | "requirements"
    | "strategy"
    | "test-cases"
    | "automation"
    | "bugs"
    | "reporting";
  title: string;
  description: string;
  targets: HomeTaskTarget[];
};

export type HomeExample = {
  key: "requirements" | "test-cases" | "bug-report";
  input: string;
  capability: string;
  output: string;
};

export const HOME_TASK_ENTRIES: Record<Lang, HomeTaskEntry[]> = {
  "zh-cn": [
    {
      key: "requirements",
      title: "分析需求",
      description: "识别信息缺口、业务规则和高风险测试场景。",
      targets: [
        {
          kind: "skill",
          slug: "requirements-analysis",
          label: "需求分析",
          description: "把需求文档整理为信息缺口、业务规则与风险清单。",
        },
      ],
    },
    {
      key: "strategy",
      title: "制定测试策略",
      description: "确定测试范围、优先级、方法和质量风险。",
      targets: [
        {
          kind: "skill",
          slug: "test-strategy",
          label: "测试策略",
          description: "明确测试范围、优先级、方法与质量风险。",
        },
      ],
    },
    {
      key: "test-cases",
      title: "编写或评审测试用例",
      description: "生成或检查带优先级的结构化测试用例。",
      targets: [
        {
          kind: "skill",
          slug: "test-case-writing",
          label: "编写测试用例",
          description: "基于测试场景与业务约束设计带优先级的结构化用例。",
        },
        {
          kind: "skill",
          slug: "test-case-reviewer",
          label: "评审测试用例",
          description: "检查用例覆盖度、可执行性与质量风险。",
        },
      ],
    },
    {
      key: "automation",
      title: "设计 API / UI 自动化",
      description: "规划可维护的接口或界面自动化测试。",
      targets: [
        {
          kind: "skill",
          slug: "api-testing",
          label: "API 测试",
          description: "设计接口测试方案与用例，覆盖关键路径和边界。",
        },
        {
          kind: "skill",
          slug: "automation-testing",
          label: "自动化设计",
          description: "规划可维护的接口或界面自动化测试架构。",
        },
      ],
    },
    {
      key: "bugs",
      title: "分析与报告缺陷",
      description: "整理复现步骤、影响范围和诊断信息。",
      targets: [
        {
          kind: "skill",
          slug: "bug-reporting",
          label: "缺陷报告",
          description: "整理可复现步骤、影响范围与诊断证据。",
        },
      ],
    },
    {
      key: "reporting",
      title: "输出测试报告",
      description: "汇总执行结果、风险、阻塞项和发布建议。",
      targets: [
        {
          kind: "skill",
          slug: "test-reporting",
          label: "测试报告",
          description: "汇总执行结果、风险、阻塞项与发布建议。",
        },
      ],
    },
  ],
  en: [
    {
      key: "requirements",
      title: "Analyze requirements",
      description: "Find information gaps, business rules, and high-risk test scenarios.",
      targets: [
        {
          kind: "skill",
          slug: "requirements-analysis",
          label: "Requirements Analysis",
          description: "Turn requirements into gaps, business rules, and risk notes.",
        },
      ],
    },
    {
      key: "strategy",
      title: "Define a test strategy",
      description: "Set scope, priorities, methods, and quality risks.",
      targets: [
        {
          kind: "skill",
          slug: "test-strategy",
          label: "Test Strategy",
          description: "Set scope, priorities, methods, and quality risks.",
        },
      ],
    },
    {
      key: "test-cases",
      title: "Write or review test cases",
      description: "Create or review prioritized, structured test cases.",
      targets: [
        {
          kind: "skill",
          slug: "test-case-writing",
          label: "Write Test Cases",
          description: "Design prioritized, structured cases from scenarios and constraints.",
        },
        {
          kind: "skill",
          slug: "test-case-reviewer",
          label: "Review Test Cases",
          description: "Check coverage, executability, and quality risks.",
        },
      ],
    },
    {
      key: "automation",
      title: "Design API / UI automation",
      description: "Plan maintainable API or UI automated tests.",
      targets: [
        {
          kind: "skill",
          slug: "api-testing",
          label: "API Testing",
          description: "Design API test plans and cases across critical paths and edges.",
        },
        {
          kind: "skill",
          slug: "automation-testing",
          label: "Automation Design",
          description: "Plan maintainable API or UI automated test architecture.",
        },
      ],
    },
    {
      key: "bugs",
      title: "Analyze and report defects",
      description: "Organize reproduction steps, impact, and diagnostic evidence.",
      targets: [
        {
          kind: "skill",
          slug: "bug-reporting",
          label: "Bug Reporting",
          description: "Organize reproduction steps, impact, and diagnostic evidence.",
        },
      ],
    },
    {
      key: "reporting",
      title: "Produce a test report",
      description: "Summarize results, risks, blockers, and release advice.",
      targets: [
        {
          kind: "skill",
          slug: "test-reporting",
          label: "Test Reporting",
          description: "Summarize results, risks, blockers, and release advice.",
        },
      ],
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
