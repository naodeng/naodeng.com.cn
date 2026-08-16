import type { Lang } from "@/i18n";

export type PromptTestingType =
  | "accessibility-testing"
  | "ai-assisted-testing"
  | "api-testing"
  | "automation-testing"
  | "bug-reporting"
  | "functional-testing"
  | "manual-testing"
  | "mobile-testing"
  | "performance-testing"
  | "requirements-analysis"
  | "security-testing"
  | "test-case-reviewer"
  | "test-case-writing"
  | "test-reporting"
  | "test-strategy";

export type PromptVersion = "Standard" | "ROSES" | "LangGPT" | "ICIO" | "CRISPE" | "RISE";

export type PromptVersionGuideItem = {
  version: PromptVersion;
  description: string;
  recommended: boolean;
};

export type PromptQuickStep = { title: string; description: string };
export type PromptExample = { key: string; input: string; capability: string; output: string };
export type PromptTypeCopy = { description: string };

const typeCopy = (
  requirements: string,
  cases: string,
  functional: string,
  performance: string,
  automation: string,
  mobile: string,
  bugs: string,
  reporting: string,
  strategy: string,
  ai: string,
  manual: string,
  security: string,
  api: string,
  accessibility: string,
  review: string,
): Record<PromptTestingType, PromptTypeCopy> => ({
  "requirements-analysis": { description: requirements },
  "test-case-writing": { description: cases },
  "functional-testing": { description: functional },
  "performance-testing": { description: performance },
  "automation-testing": { description: automation },
  "mobile-testing": { description: mobile },
  "bug-reporting": { description: bugs },
  "test-reporting": { description: reporting },
  "test-strategy": { description: strategy },
  "ai-assisted-testing": { description: ai },
  "manual-testing": { description: manual },
  "security-testing": { description: security },
  "api-testing": { description: api },
  "accessibility-testing": { description: accessibility },
  "test-case-reviewer": { description: review },
});

export const PROMPT_TYPE_COPY: Record<Lang, Record<PromptTestingType, PromptTypeCopy>> = {
  "zh-cn": typeCopy(
    "识别信息缺口、业务规则和测试风险。",
    "从测试场景生成带优先级的结构化用例。",
    "设计正向、异常、边界和业务流程测试。",
    "规划性能场景、指标、负载模型和风险分析。",
    "设计可维护的自动化范围、分层和实现策略。",
    "覆盖设备、系统、网络和移动交互风险。",
    "整理复现步骤、实际结果、预期结果和影响范围。",
    "汇总执行结果、风险、阻塞项和发布建议。",
    "确定测试范围、优先级、方法和质量保障重点。",
    "评估并规划 AI 在测试任务中的可靠使用方式。",
    "设计探索性、场景化和人工判断驱动的测试。",
    "识别认证、授权、输入和敏感数据风险。",
    "设计接口功能、契约、异常和数据验证方案。",
    "检查键盘、语义、对比度和辅助技术体验。",
    "检查测试用例的覆盖、清晰度、风险和可执行性。",
  ),
  en: typeCopy(
    "Find information gaps, business rules, and testing risks.",
    "Generate prioritized, structured cases from test scenarios.",
    "Design happy-path, negative, boundary, and business-flow tests.",
    "Plan performance scenarios, metrics, load models, and risk analysis.",
    "Design maintainable automation scope, layers, and implementation strategy.",
    "Cover device, OS, network, and mobile interaction risks.",
    "Organize reproduction steps, actual results, expectations, and impact.",
    "Summarize execution results, risks, blockers, and release advice.",
    "Set testing scope, priorities, methods, and quality safeguards.",
    "Evaluate reliable ways to use AI in testing tasks.",
    "Design exploratory, scenario-based, and human-judgment-driven testing.",
    "Find authentication, authorization, input, and sensitive-data risks.",
    "Design API functional, contract, error, and data validation coverage.",
    "Check keyboard, semantics, contrast, and assistive-technology experience.",
    "Review test cases for coverage, clarity, risk, and executability.",
  ),
};

export const PROMPT_VERSION_GUIDE: Record<Lang, PromptVersionGuideItem[]> = {
  "zh-cn": [
    { version: "Standard", description: "默认选择，结构完整、容易直接使用。", recommended: true },
    { version: "ROSES", description: "适合需要明确角色、目标、场景和步骤的任务。", recommended: false },
    { version: "LangGPT", description: "适合需要严格角色、约束和结构化输出的任务。", recommended: false },
    { version: "ICIO", description: "适合输入条件和输出边界清楚的任务。", recommended: false },
    { version: "CRISPE", description: "适合需要上下文、角色、洞察和迭代调整的任务。", recommended: false },
    { version: "RISE", description: "适合需要分步执行和结果检查的任务。", recommended: false },
  ],
  en: [
    { version: "Standard", description: "The default choice with a complete structure that is easy to use directly.", recommended: true },
    { version: "ROSES", description: "Use when the task needs an explicit role, objective, scenario, and steps.", recommended: false },
    { version: "LangGPT", description: "Use when the task needs strict roles, constraints, and structured output.", recommended: false },
    { version: "ICIO", description: "Use when input conditions and output boundaries are clear.", recommended: false },
    { version: "CRISPE", description: "Use when context, role, insight, and iterative refinement matter.", recommended: false },
    { version: "RISE", description: "Use when the task needs stepwise execution and result checks.", recommended: false },
  ],
};

export const PROMPT_QUICK_STEPS: Record<Lang, PromptQuickStep[]> = {
  "zh-cn": [
    { title: "选择测试任务", description: "从当前要解决的测试问题出发选择类型。" },
    { title: "选择 Prompt 版本", description: "默认使用 Standard，需要特定结构时再切换版本。" },
    { title: "准备输入材料", description: "提供需求、接口、用户故事、日志或缺陷信息。" },
    { title: "交给 AI 助手", description: "同时提供 Prompt、输入材料和期望输出格式。" },
    { title: "人工复核", description: "检查假设、遗漏、风险和不可验证结论。" },
  ],
  en: [
    { title: "Choose the testing task", description: "Start from the testing problem you need to solve." },
    { title: "Choose a Prompt version", description: "Use Standard by default and switch only for a specific structure." },
    { title: "Prepare the input", description: "Provide requirements, APIs, user stories, logs, or defect details." },
    { title: "Use an AI assistant", description: "Provide the Prompt, source material, and expected output format together." },
    { title: "Review the output", description: "Check assumptions, omissions, risks, and unverifiable claims." },
  ],
};

export type PromptAssistedFlowStep = {
  icon: string;
  slug: PromptTestingType;
  label: string;
  desc: string;
};

/** AI 辅助测试流程参考：只描述分析与设计环节，不声称真实执行或检测。 */
export const PROMPT_ASSISTED_FLOW: Record<Lang, PromptAssistedFlowStep[]> = {
  "zh-cn": [
    { icon: "edit_note", slug: "requirements-analysis", label: "需求分析", desc: "深度分析需求文档，设计全维度测试场景" },
    { icon: "track_changes", slug: "test-strategy", label: "测试策略", desc: "制定整体测试策略和测试计划" },
    { icon: "edit", slug: "test-case-writing", label: "测试用例编写", desc: "基于测试场景生成详细测试用例" },
    { icon: "search", slug: "functional-testing", label: "功能测试", desc: "设计功能测试步骤与检查清单" },
    { icon: "smart_toy", slug: "automation-testing", label: "自动化测试", desc: "设计自动化测试脚本和框架" },
    { icon: "bolt", slug: "performance-testing", label: "性能测试", desc: "设计性能测试场景和指标分析" },
    { icon: "lock", slug: "security-testing", label: "安全测试", desc: "识别潜在安全风险与验证点" },
    { icon: "bug_report", slug: "bug-reporting", label: "缺陷上报", desc: "标准化缺陷报告和根因分析" },
    { icon: "bar_chart", slug: "test-reporting", label: "测试报告", desc: "基于真实执行数据整理测试报告" },
  ],
  en: [
    { icon: "edit_note", slug: "requirements-analysis", label: "Requirements Analysis", desc: "Analyze requirements and design comprehensive test scenarios" },
    { icon: "track_changes", slug: "test-strategy", label: "Test Strategy", desc: "Define overall test strategy and test plan" },
    { icon: "edit", slug: "test-case-writing", label: "Test Case Writing", desc: "Generate detailed test cases from test scenarios" },
    { icon: "search", slug: "functional-testing", label: "Functional Testing", desc: "Design functional test steps and checklists" },
    { icon: "smart_toy", slug: "automation-testing", label: "Automation Testing", desc: "Design automation test scripts and frameworks" },
    { icon: "bolt", slug: "performance-testing", label: "Performance Testing", desc: "Design performance test scenarios and metrics" },
    { icon: "lock", slug: "security-testing", label: "Security Testing", desc: "Identify potential security risks and verification points" },
    { icon: "bug_report", slug: "bug-reporting", label: "Bug Reporting", desc: "Standardized bug reports and root cause analysis" },
    { icon: "bar_chart", slug: "test-reporting", label: "Test Reporting", desc: "Turn real execution data into test reports" },
  ],
};

export const PROMPT_EXAMPLES: Record<Lang, PromptExample[]> = {
  "zh-cn": [
    { key: "requirements", input: "需求文档摘要", capability: "需求分析 Prompt", output: "风险清单与测试场景" },
    { key: "api", input: "OpenAPI 或接口说明", capability: "API 测试 Prompt", output: "接口测试方案" },
    { key: "bug", input: "缺陷原始信息", capability: "缺陷上报 Prompt", output: "标准 Bug Report" },
  ],
  en: [
    { key: "requirements", input: "Requirements summary", capability: "Requirements Analysis Prompt", output: "Risk list and test scenarios" },
    { key: "api", input: "OpenAPI or API notes", capability: "API Testing Prompt", output: "API test approach" },
    { key: "bug", input: "Raw defect details", capability: "Bug Reporting Prompt", output: "Standard bug report" },
  ],
};
