export const QA_SKILL_TASK_PATHS = [
  {
    taskKey: "requirements",
    skillSlug: "requirements-analysis",
    nextSkillSlug: "test-strategy",
    stageKey: "requirements-strategy",
    output: {
      "zh-cn": "需求范围与业务规则摘要，列出待澄清项、风险和建议的测试范围。",
      en: "A requirement brief with scope, business rules, open questions, risks, and suggested test coverage.",
    },
  },
  {
    taskKey: "test-cases",
    skillSlug: "test-case-writing",
    nextSkillSlug: "test-case-reviewer",
    stageKey: "case-design-review",
    output: {
      "zh-cn": "一套带优先级的结构化用例，包含前置条件、测试数据、步骤、预期结果和覆盖缺口说明。",
      en: "A prioritized test suite with preconditions, test data, steps, expected results, and any coverage gaps.",
    },
  },
  {
    taskKey: "bugs",
    skillSlug: "bug-reporting",
    nextSkillSlug: "test-reporting",
    stageKey: "defect-reporting",
    output: {
      "zh-cn": "可诊断的缺陷报告，列明环境、复现步骤、预期与实际结果、影响范围和证据。",
      en: "A diagnosable bug report with environment, reproduction steps, expected and actual behavior, impact, and evidence.",
    },
  },
] as const;
