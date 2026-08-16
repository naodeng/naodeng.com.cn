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
export type PromptExample = {
  key: string;
  scenario: string;
  input: string;
  version: string;
  versionReason: string;
  outputLines: string[];
  reviewPoints: string[];
  href: string;
};
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
    {
      key: "requirements",
      scenario: "新功能上线前的需求分析",
      input: "登录功能需求原文 + 产品目标",
      version: "Standard",
      versionReason: "结构完整，先产出可直接评审的初版",
      outputLines: [
        "范围总结：登录、注册与找回密码三个入口",
        "业务规则：密码规则、验证码时效、设备绑定关系",
        "信息缺口：并发登录、风控策略未在需求中说明",
        "风险优先级：找回密码链路高风险，优先验证",
      ],
      reviewPoints: ["核对业务规则是否与最新需求一致", "确认未编造需求中没有的接口与字段"],
      href: "/prompts/requirements-analysis/",
    },
    {
      key: "api",
      scenario: "订单接口上线前的接口测试设计",
      input: "OpenAPI 文档 + 鉴权方式 + 环境说明",
      version: "Standard",
      versionReason: "默认结构覆盖接口测试的完整输出",
      outputLines: [
        "契约覆盖：创建、查询、取消订单三个端点",
        "异常场景：重复提交、超时、无效 token",
        "断言重点：状态码、字段类型、幂等性",
        "数据策略：账号与订单数据使用占位符和隔离环境",
      ],
      reviewPoints: ["在真实环境冒烟验证断言可执行", "确认鉴权方式与生产环境一致"],
      href: "/prompts/api-testing/",
    },
    {
      key: "ui-automation",
      scenario: "回归场景的 UI 自动化方案",
      input: "核心回归路径 + 目标浏览器 + CI 环境",
      version: "Standard",
      versionReason: "范围与策略描述足够，无需特定框架结构",
      outputLines: [
        "范围分层：冒烟、核心回归、边缘场景三档",
        "定位策略：优先可访问性角色与稳定标识",
        "执行配置：失败截图、重试上限与超时基线",
      ],
      reviewPoints: ["确认定位策略在真实页面上稳定", "检查脚本是否依赖了会变动的测试数据"],
      href: "/prompts/automation-testing/",
    },
    {
      key: "bug",
      scenario: "线上缺陷的标准化上报",
      input: "缺陷现象、日志片段、复现步骤草稿",
      version: "Standard",
      versionReason: "默认结构正好覆盖报告字段",
      outputLines: [
        "标题：可支付订单在回调前被标记为已取消",
        "复现步骤：5 步可复现操作序列",
        "期望 vs 实际：状态流转与日志时间线对照",
        "影响范围：支付成功但订单被取消的订单量级",
      ],
      reviewPoints: ["按步骤实际复现一次再提交", "移除日志中的敏感信息"],
      href: "/prompts/bug-reporting/",
    },
    {
      key: "report",
      scenario: "迭代结束的测试报告整理",
      input: "执行结果数据、缺陷清单、发布窗口",
      version: "Standard",
      versionReason: "按默认结构直接汇总，便于人工复核",
      outputLines: [
        "执行摘要：用例总数、通过率与阻塞项",
        "风险列表：未覆盖范围与已知问题",
        "发布建议：可发布 / 有条件发布 / 暂缓及理由",
      ],
      reviewPoints: ["数据必须来自真实执行记录", "发布建议与实际缺陷严重度一致"],
      href: "/prompts/test-reporting/",
    },
    {
      key: "security-checklist",
      scenario: "上线前的安全验证点梳理",
      input: "应用类型、登录体系与数据敏感级别",
      version: "Standard",
      versionReason: "清单结构简单，标准版本足够",
      outputLines: [
        "认证：登录、会话与权限边界检查点",
        "输入：注入、越权与文件上传验证点",
        "数据：敏感字段脱敏与日志泄露检查点",
      ],
      reviewPoints: ["清单只作为验证参考，实际检测由安全工具与人工执行", "按风险等级裁剪，不要照单全收"],
      href: "/prompts/security-testing/",
    },
  ],
  en: [
    {
      key: "requirements",
      scenario: "Requirements analysis before a feature release",
      input: "Login requirement text + product goals",
      version: "Standard",
      versionReason: "Complete structure that yields a reviewable first draft",
      outputLines: [
        "Scope summary: login, registration, and password recovery",
        "Business rules: password policy, captcha expiry, device binding",
        "Gaps: concurrent login and risk control are not specified",
        "Risk priority: password recovery is high risk — verify first",
      ],
      reviewPoints: ["Check rules against the latest requirements", "Confirm no invented endpoints or fields"],
      href: "/prompts/requirements-analysis/",
    },
    {
      key: "api",
      scenario: "API test design before the order service launch",
      input: "OpenAPI document + auth method + environment notes",
      version: "Standard",
      versionReason: "The default structure covers the full API testing output",
      outputLines: [
        "Contract coverage: create, query, and cancel order endpoints",
        "Error paths: duplicate submit, timeout, invalid token",
        "Assertions: status codes, field types, idempotency",
        "Data strategy: placeholders and isolated environments",
      ],
      reviewPoints: ["Smoke-test the assertions against a real environment", "Confirm the auth method matches production"],
      href: "/prompts/api-testing/",
    },
    {
      key: "ui-automation",
      scenario: "UI automation approach for regression",
      input: "Core regression paths + target browsers + CI setup",
      version: "Standard",
      versionReason: "Scope and strategy fit the default structure",
      outputLines: [
        "Layering: smoke, core regression, and edge cases",
        "Locators: prefer accessibility roles and stable identifiers",
        "Run config: screenshots on failure, retry cap, timeout baseline",
      ],
      reviewPoints: ["Verify locators stay stable on real pages", "Check scripts do not depend on changing test data"],
      href: "/prompts/automation-testing/",
    },
    {
      key: "bug",
      scenario: "Standardized report for a production defect",
      input: "Symptoms, log excerpt, draft reproduction steps",
      version: "Standard",
      versionReason: "The default structure matches the report fields",
      outputLines: [
        "Title: payable order marked cancelled before the callback",
        "Steps: five reproducible actions",
        "Expected vs actual: status flow against the log timeline",
        "Impact: volume of paid-but-cancelled orders",
      ],
      reviewPoints: ["Reproduce once before submitting", "Remove sensitive data from logs"],
      href: "/prompts/bug-reporting/",
    },
    {
      key: "report",
      scenario: "Test report assembly at iteration close",
      input: "Execution results, defect list, release window",
      version: "Standard",
      versionReason: "Aggregates in the default structure for easy review",
      outputLines: [
        "Execution summary: totals, pass rate, and blockers",
        "Risk list: uncovered scope and known issues",
        "Release advice: go / conditional go / hold with reasons",
      ],
      reviewPoints: ["Data must come from real execution records", "Advice must match actual defect severity"],
      href: "/prompts/test-reporting/",
    },
    {
      key: "security-checklist",
      scenario: "Security verification points before launch",
      input: "App type, login system, data sensitivity",
      version: "Standard",
      versionReason: "A checklist fits the plain default structure",
      outputLines: [
        "Authentication: login, session, and permission boundaries",
        "Inputs: injection, broken access, and file upload checks",
        "Data: masking sensitive fields and log leakage checks",
      ],
      reviewPoints: ["Use as a review reference; run security tools and manual checks for actual detection", "Trim by risk level instead of applying everything"],
      href: "/prompts/security-testing/",
    },
  ],
};
