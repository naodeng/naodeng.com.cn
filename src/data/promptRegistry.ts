import type { Lang } from "@/i18n";

export type PromptVariant = "lite" | "standard" | "plus";
export type PromptComplexity = "basic" | "intermediate" | "advanced";
export type PromptPlatform = "mobile" | "web";

export type PromptAreaKey =
  | "requirements-planning"
  | "test-analysis-design"
  | "api-integration"
  | "automation-engineering"
  | "performance-reliability"
  | "security-accessibility"
  | "data-environment"
  | "quality-governance"
  | "release-observability"
  | "ai-llm"
  | "other-testing";

export type PromptTaskKey =
  | "requirements-analysis"
  | "test-strategy"
  | "test-design"
  | "test-review"
  | "api-testing"
  | "automation-testing"
  | "performance-analysis"
  | "failure-analysis"
  | "release-readiness"
  | "security-accessibility"
  | "ai-quality"
  | "quality-governance"
  | "data-environment";

export type PromptAreaDefinition = {
  key: PromptAreaKey;
  label: string;
  description: string;
  category: string;
  order: number;
};

export type PromptTaskDefinition = {
  key: PromptTaskKey;
  label: string;
  description: string;
  areaKey: PromptAreaKey;
  aliases: string[];
};

export type PromptSourceEntry = {
  id: string;
  body?: string;
  data: {
    title: string;
    description: string;
    testingType: string;
    category: string;
    categoryOrder: number;
    sourcePath: string;
    lang: Lang;
    order: number;
  };
};

export type PromptRegistryEntry = {
  id: string;
  slug: string;
  title: string;
  description: string;
  cardDescription: string;
  category: string;
  categoryOrder: number;
  sourcePath: string;
  lang: Lang;
  order: number;
  body: string;
  areaKey: PromptAreaKey;
  areaLabel: string;
  areaDescription: string;
  taskKey: PromptTaskKey;
  taskLabel: string;
  taskDescription: string;
  variant: PromptVariant;
  complexity: PromptComplexity;
  platform?: PromptPlatform;
  familyId: string;
  tags: string[];
  aliases: string[];
  inputs: string[];
  outputs: string[];
  searchText: string;
};

const areaDefinitions: Record<Lang, PromptAreaDefinition[]> = {
  en: [
    {
      key: "requirements-planning",
      label: "Requirements and planning",
      description: "Turn product context into scope, strategy, risks, and test priorities.",
      category: "Requirements, Planning, And Test Strategy",
      order: 1,
    },
    {
      key: "test-analysis-design",
      label: "Test analysis and design",
      description: "Explore scenarios, boundaries, journeys, and executable test ideas.",
      category: "Test Analysis And Design",
      order: 2,
    },
    {
      key: "api-integration",
      label: "API and integration",
      description: "Reason about contracts, services, messages, data flow, and integration risk.",
      category: "API, Contract, Messaging, And Integration",
      order: 3,
    },
    {
      key: "automation-engineering",
      label: "Automation engineering",
      description: "Plan maintainable UI automation, test code, CI checks, and test assets.",
      category: "Automation And Test Engineering",
      order: 4,
    },
    {
      key: "performance-reliability",
      label: "Performance and reliability",
      description: "Plan load, capacity, resilience, recovery, and performance analysis.",
      category: "Performance, Reliability, And Resilience",
      order: 5,
    },
    {
      key: "security-accessibility",
      label: "Security and accessibility",
      description: "Review security, privacy, accessibility, and inclusive product risks.",
      category: "Security, Privacy, And Accessibility",
      order: 6,
    },
    {
      key: "data-environment",
      label: "Data and test environment",
      description: "Prepare trustworthy test data and reason about environment dependencies.",
      category: "Data, Database, And Test Environment",
      order: 7,
    },
    {
      key: "quality-governance",
      label: "Quality and governance",
      description: "Review test assets, defects, quality signals, and decision evidence.",
      category: "Defects, Quality, And Test Governance",
      order: 8,
    },
    {
      key: "release-observability",
      label: "Release and observability",
      description: "Connect release decisions with production signals, incidents, and recovery.",
      category: "Release, Production, And Observability",
      order: 9,
    },
    {
      key: "ai-llm",
      label: "AI and LLM testing",
      description: "Evaluate AI features, agents, model behavior, safety, and generated tests.",
      category: "AI And LLM Testing",
      order: 10,
    },
    {
      key: "other-testing",
      label: "Other testing tasks",
      description: "Additional platform, framework, and cross-cutting testing prompts.",
      category: "Other Prompts",
      order: 11,
    },
  ],
  "zh-cn": [
    {
      key: "requirements-planning",
      label: "需求与测试规划",
      description: "把产品上下文转化为范围、策略、风险和测试优先级。",
      category: "需求、规划与测试策略",
      order: 1,
    },
    {
      key: "test-analysis-design",
      label: "测试分析与设计",
      description: "探索场景、边界、用户旅程和可执行的测试思路。",
      category: "测试分析与测试设计",
      order: 2,
    },
    {
      key: "api-integration",
      label: "接口与集成",
      description: "分析契约、服务、消息、数据流和集成风险。",
      category: "API、契约、消息与集成",
      order: 3,
    },
    {
      key: "automation-engineering",
      label: "自动化与测试工程",
      description: "规划可维护的 UI 自动化、测试代码、CI 检查和测试资产。",
      category: "自动化与测试工程",
      order: 4,
    },
    {
      key: "performance-reliability",
      label: "性能与可靠性",
      description: "规划负载、容量、韧性、恢复和性能分析。",
      category: "性能、可靠性与韧性",
      order: 5,
    },
    {
      key: "security-accessibility",
      label: "安全与可访问性",
      description: "检查安全、隐私、可访问性和包容性体验风险。",
      category: "安全、隐私与无障碍",
      order: 6,
    },
    {
      key: "data-environment",
      label: "数据与测试环境",
      description: "准备可信的测试数据，分析环境依赖和差异。",
      category: "数据、数据库与测试环境",
      order: 7,
    },
    {
      key: "quality-governance",
      label: "质量与治理",
      description: "检查测试资产、缺陷、质量信号和决策证据。",
      category: "缺陷、质量与测试治理",
      order: 8,
    },
    {
      key: "release-observability",
      label: "发布与可观测性",
      description: "把发布决策和生产信号、故障、恢复动作连接起来。",
      category: "发布、生产与可观测性",
      order: 9,
    },
    {
      key: "ai-llm",
      label: "AI 与 LLM 测试",
      description: "评估 AI 功能、Agent、模型行为、安全性和生成式测试。",
      category: "AI 与 LLM 测试",
      order: 10,
    },
    {
      key: "other-testing",
      label: "其他测试任务",
      description: "补充平台、框架和跨领域测试提示词。",
      category: "其他提示词",
      order: 11,
    },
  ],
};

const taskDefinitions: Record<Lang, PromptTaskDefinition[]> = {
  en: [
    {
      key: "requirements-analysis",
      label: "Analyze requirements",
      description: "Find gaps, rules, assumptions, and test risks before design starts.",
      areaKey: "requirements-planning",
      aliases: ["requirements", "acceptance criteria", "business rules", "scope"],
    },
    {
      key: "test-strategy",
      label: "Define a test strategy",
      description: "Set scope, priorities, methods, environments, and review points.",
      areaKey: "requirements-planning",
      aliases: ["test plan", "test scope", "quality strategy", "sprint planning"],
    },
    {
      key: "test-design",
      label: "Design test cases",
      description: "Turn scenarios and rules into structured, reviewable test ideas.",
      areaKey: "test-analysis-design",
      aliases: ["test scenarios", "test cases", "boundary", "state transition"],
    },
    {
      key: "test-review",
      label: "Review test cases",
      description: "Check coverage, traceability, clarity, risk, and executability.",
      areaKey: "quality-governance",
      aliases: ["test review", "coverage review", "quality review"],
    },
    {
      key: "api-testing",
      label: "Test APIs and contracts",
      description: "Review API behavior, contracts, messages, data, and service boundaries.",
      areaKey: "api-integration",
      aliases: ["api", "contract", "integration", "message", "graphql", "openapi"],
    },
    {
      key: "automation-testing",
      label: "Build UI automation",
      description: "Choose automation scope, layers, locators, frameworks, and CI signals.",
      areaKey: "automation-engineering",
      aliases: ["ui automation", "test code", "playwright", "cypress", "selenium", "ci"],
    },
    {
      key: "performance-analysis",
      label: "Analyze performance",
      description: "Plan scenarios and interpret capacity, latency, throughput, and bottlenecks.",
      areaKey: "performance-reliability",
      aliases: ["performance", "load", "latency", "capacity", "reliability"],
    },
    {
      key: "failure-analysis",
      label: "Investigate failures",
      description: "Organize symptoms, evidence, timelines, causes, and next checks.",
      areaKey: "release-observability",
      aliases: ["failure", "incident", "bug", "defect", "logs", "trace", "root cause"],
    },
    {
      key: "release-readiness",
      label: "Review release readiness",
      description: "Connect release scope, risks, evidence, blockers, and rollback decisions.",
      areaKey: "release-observability",
      aliases: ["release", "go no-go", "rollback", "production verification"],
    },
    {
      key: "security-accessibility",
      label: "Test security and accessibility",
      description: "Identify security, privacy, keyboard, semantics, and assistive-technology risks.",
      areaKey: "security-accessibility",
      aliases: ["security", "privacy", "accessibility", "wcag", "owasp"],
    },
    {
      key: "ai-quality",
      label: "Test AI and agents",
      description: "Evaluate model quality, agent behavior, safety, regressions, and generated tests.",
      areaKey: "ai-llm",
      aliases: ["ai", "llm", "agent", "model", "prompt", "hallucination"],
    },
    {
      key: "quality-governance",
      label: "Improve quality governance",
      description: "Review defects, metrics, test assets, coverage gaps, and quality gates.",
      areaKey: "quality-governance",
      aliases: ["quality", "defect", "metrics", "coverage", "governance", "report"],
    },
    {
      key: "data-environment",
      label: "Prepare test data and environments",
      description: "Analyze data dependencies, environment drift, and trustworthy test setup.",
      areaKey: "data-environment",
      aliases: ["test data", "database", "environment", "configuration", "docker"],
    },
  ],
  "zh-cn": [
    {
      key: "requirements-analysis",
      label: "分析需求",
      description: "在测试设计前识别缺口、规则、假设和风险。",
      areaKey: "requirements-planning",
      aliases: ["需求", "验收标准", "业务规则", "范围"],
    },
    {
      key: "test-strategy",
      label: "制定测试策略",
      description: "明确范围、优先级、方法、环境和评审点。",
      areaKey: "requirements-planning",
      aliases: ["测试计划", "测试范围", "质量策略", "迭代规划"],
    },
    {
      key: "test-design",
      label: "设计测试用例",
      description: "把场景和规则转化为结构化、可评审的测试思路。",
      areaKey: "test-analysis-design",
      aliases: ["测试场景", "测试用例", "边界", "状态迁移"],
    },
    {
      key: "test-review",
      label: "评审测试用例",
      description: "检查覆盖、可追溯性、清晰度、风险和可执行性。",
      areaKey: "quality-governance",
      aliases: ["测试评审", "覆盖评审", "质量评审"],
    },
    {
      key: "api-testing",
      label: "测试接口与契约",
      description: "检查 API 行为、契约、消息、数据和服务边界。",
      areaKey: "api-integration",
      aliases: ["接口", "契约", "集成", "消息", "GraphQL", "OpenAPI"],
    },
    {
      key: "automation-testing",
      label: "构建 UI 自动化",
      description: "选择自动化范围、分层、定位、框架和 CI 信号。",
      areaKey: "automation-engineering",
      aliases: ["UI 自动化", "测试代码", "Playwright", "Cypress", "Selenium", "CI"],
    },
    {
      key: "performance-analysis",
      label: "分析性能问题",
      description: "规划场景并分析容量、延迟、吞吐和瓶颈。",
      areaKey: "performance-reliability",
      aliases: ["性能", "负载", "延迟", "容量", "可靠性"],
    },
    {
      key: "failure-analysis",
      label: "排查故障",
      description: "整理现象、证据、时间线、原因和下一步检查。",
      areaKey: "release-observability",
      aliases: ["失败", "故障", "缺陷", "日志", "链路", "根因"],
    },
    {
      key: "release-readiness",
      label: "评审发布就绪度",
      description: "连接发布范围、风险、证据、阻塞和回滚决策。",
      areaKey: "release-observability",
      aliases: ["发布", "放行", "回滚", "生产验证"],
    },
    {
      key: "security-accessibility",
      label: "测试安全与可访问性",
      description: "识别安全、隐私、键盘、语义和辅助技术风险。",
      areaKey: "security-accessibility",
      aliases: ["安全", "隐私", "可访问性", "WCAG", "OWASP"],
    },
    {
      key: "ai-quality",
      label: "测试 AI 与 Agent",
      description: "评估模型质量、Agent 行为、安全性、回归和生成式测试。",
      areaKey: "ai-llm",
      aliases: ["AI", "LLM", "Agent", "模型", "提示词", "幻觉"],
    },
    {
      key: "quality-governance",
      label: "改进质量治理",
      description: "检查缺陷、指标、测试资产、覆盖缺口和质量门禁。",
      areaKey: "quality-governance",
      aliases: ["质量", "缺陷", "指标", "覆盖", "治理", "报告"],
    },
    {
      key: "data-environment",
      label: "准备测试数据与环境",
      description: "分析数据依赖、环境漂移和可信的测试准备。",
      areaKey: "data-environment",
      aliases: ["测试数据", "数据库", "环境", "配置", "Docker"],
    },
  ],
};

const areaKeyByCategory = new Map(
  [...areaDefinitions.en, ...areaDefinitions["zh-cn"]].map((area) => [normalise(area.category), area.key]),
);

function normalise(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function taskByKey(lang: Lang): Map<PromptTaskKey, PromptTaskDefinition> {
  return new Map(taskDefinitions[lang].map((task) => [task.key, task]));
}

function areaByKey(lang: Lang): Map<PromptAreaKey, PromptAreaDefinition> {
  return new Map(areaDefinitions[lang].map((area) => [area.key, area]));
}

function getAreaKey(category: string, slug = "", title = ""): PromptAreaKey {
  const categoryKey = areaKeyByCategory.get(normalise(category));
  const baseSlug = slug.replace(/-(?:mobile|web|plus|lite|lean)$/i, "").toLowerCase();
  const hasVariantSuffix = baseSlug !== slug.toLowerCase();
  const value = normalise(`${slug} ${title}`);

  // A few legacy platform/Plus entries carry a generic or stale category. Keep
  // those variants beside their family instead of making the variant a new area.
  if (hasVariantSuffix || categoryKey === "other-testing") {
    if (/requirements-analysis|test-strategy/.test(baseSlug)) return "requirements-planning";
    if (/test-case-reviewer|test-review/.test(baseSlug)) return "quality-governance";
    if (/testcase-writer|test-case-writing|functional-testing/.test(baseSlug)) return "test-analysis-design";
  }

  if (categoryKey && categoryKey !== "other-testing") return categoryKey;
  if (/ai|llm|agent|hallucination|prompt injection/.test(value)) return "ai-llm";
  if (/api|graphql|kafka|websocket|mock api|wiremock|contract|message/.test(value)) return "api-integration";
  if (/performance|load|latency|capacity|reliability|neoload|jvm|nginx/.test(value)) return "performance-reliability";
  if (/ui test|automation|playwright|cypress|selenium|puppeteer|testcafe|webdriver|locator|ci cd|cicd/.test(value)) return "automation-engineering";
  if (/security|accessibility|wcag|owasp|privacy|authentication|authorization/.test(value)) return "security-accessibility";
  if (/database|sql|environment|docker|data/.test(value)) return "data-environment";
  if (/release|production|rollback|hotfix/.test(value)) return "release-observability";
  if (/mobile/.test(value)) return "test-analysis-design";
  return categoryKey || "other-testing";
}

function getTaskKey(slug: string, title: string, areaKey: PromptAreaKey): PromptTaskKey {
  const value = normalise(`${slug} ${title}`);

  if (areaKey === "ai-llm") return "ai-quality";
  if (areaKey === "security-accessibility") return "security-accessibility";
  if (areaKey === "data-environment") return "data-environment";
  if (areaKey === "performance-reliability") return "performance-analysis";
  if (areaKey === "api-integration") return "api-testing";
  if (areaKey === "automation-engineering") return "automation-testing";

  if (areaKey === "release-observability") {
    if (/release|go no go|rollback|production verification|hotfix/.test(value)) {
      return "release-readiness";
    }
    return "failure-analysis";
  }

  if (areaKey === "quality-governance") {
    if (/test review|reviewer|review test|test case review|测试评审|用例评审|评审测试|审查测试/.test(value)) return "test-review";
    if (/failure|incident|bug|defect|log|trace|root cause|flaky|失败|故障|缺陷|日志|链路|根因|波动/.test(value)) return "failure-analysis";
    return "quality-governance";
  }

  if (areaKey === "requirements-planning") {
    if (/strategy|plan|scope|sprint|quality gate/.test(value)) return "test-strategy";
    return "requirements-analysis";
  }

  if (areaKey === "test-analysis-design") {
    if (/review|reviewer/.test(value)) return "test-review";
    if (/strategy|test plan|scope/.test(value)) return "test-strategy";
    if (/requirement|business rule|acceptance criteria/.test(value)) return "requirements-analysis";
    return "test-design";
  }

  if (/review|reviewer/.test(value)) return "test-review";
  if (/requirement|business rule|acceptance criteria/.test(value)) return "requirements-analysis";
  if (/strategy|test plan|scope/.test(value)) return "test-strategy";
  return "test-design";
}

function getVariant(title: string, slug: string): PromptVariant {
  const value = normalise(`${title} ${slug}`);
  if (/\bplus\b/.test(value)) return "plus";
  if (/\blite\b|\blean\b/.test(value)) return "lite";
  return "standard";
}

function getComplexity(variant: PromptVariant): PromptComplexity {
  if (variant === "lite") return "basic";
  if (variant === "plus") return "advanced";
  return "intermediate";
}

function getPlatform(title: string, slug: string): PromptPlatform | undefined {
  const value = normalise(`${title} ${slug}`);
  if (/\bmobile\b/.test(value)) return "mobile";
  if (/\bweb\b/.test(value)) return "web";
  return undefined;
}

export function getPromptFamilyId(slug: string): string {
  return slug
    .replace(/-(?:mobile|web|plus|lite|lean)$/i, "")
    .toLowerCase();
}

function metadataForTask(task: PromptTaskDefinition, lang: Lang): { inputs: string[]; outputs: string[] } {
  if (lang === "zh-cn") {
    const inputs: Record<PromptTaskKey, string[]> = {
      "requirements-analysis": ["需求原文、用户故事或验收标准", "已知业务目标与约束"],
      "test-strategy": ["发布范围、风险背景和环境信息", "可用的测试资源与时间窗口"],
      "test-design": ["需求、业务规则或用户旅程", "相关数据、状态和边界条件"],
      "test-review": ["待评审的测试用例或测试代码", "需求、接口契约或覆盖目标"],
      "api-testing": ["API 契约、请求与响应示例", "鉴权、数据和环境说明"],
      "automation-testing": ["核心回归路径与目标平台", "定位方式、框架和 CI 约束"],
      "performance-analysis": ["性能目标、场景和负载模型", "指标、日志或性能结果"],
      "failure-analysis": ["失败现象、日志和时间线", "复现步骤、环境与已知变更"],
      "release-readiness": ["发布范围、执行结果和缺陷清单", "阻塞项、风险和回滚信息"],
      "security-accessibility": ["应用类型、权限模型和数据敏感度", "平台、辅助技术或安全约束"],
      "ai-quality": ["模型、Prompt、Agent 流程或生成结果", "评估标准、风险边界和样本"],
      "quality-governance": ["质量数据、测试资产或缺陷清单", "指标定义、范围和决策规则"],
      "data-environment": ["测试数据、数据库和环境配置", "依赖关系、隔离要求和清理规则"],
    };
    const outputs: Record<PromptTaskKey, string[]> = {
      "requirements-analysis": ["信息缺口、业务规则和风险", "可追溯的测试关注点与待确认项"],
      "test-strategy": ["测试范围、优先级和方法", "环境、证据和风险跟踪建议"],
      "test-design": ["结构化测试场景与用例", "正向、异常、边界和状态覆盖"],
      "test-review": ["覆盖与可执行性评审", "问题分级和可操作的修改建议"],
      "api-testing": ["接口、契约和异常场景", "断言重点、数据策略和依赖风险"],
      "automation-testing": ["自动化范围与分层方案", "稳定性、维护性和 CI 建议"],
      "performance-analysis": ["场景、指标和负载模型", "瓶颈、风险与下一步分析"],
      "failure-analysis": ["证据整理与可能原因", "复现、定位和验证下一步"],
      "release-readiness": ["发布证据与风险清单", "放行、条件放行或暂缓的判断依据"],
      "security-accessibility": ["验证点与风险分类", "需要人工或工具进一步确认的项目"],
      "ai-quality": ["评估维度、样本和风险", "可复核的结果结构与限制说明"],
      "quality-governance": ["质量信号、缺口和问题分级", "可追踪的改进建议与决策输入"],
      "data-environment": ["数据与环境依赖图", "准备、隔离、清理和风险建议"],
    };
    return { inputs: inputs[task.key], outputs: outputs[task.key] };
  }

  const inputs: Record<PromptTaskKey, string[]> = {
    "requirements-analysis": ["Requirement text, user stories, or acceptance criteria", "Known product goals and constraints"],
    "test-strategy": ["Release scope, risk context, and environment notes", "Available test resources and time window"],
    "test-design": ["Requirements, business rules, or user journeys", "Relevant data, states, and boundary conditions"],
    "test-review": ["Test cases or test code to review", "Requirements, API contracts, or coverage goals"],
    "api-testing": ["API contract, request, and response examples", "Auth, data, and environment notes"],
    "automation-testing": ["Core regression paths and target platforms", "Locator, framework, and CI constraints"],
    "performance-analysis": ["Performance goals, scenarios, and load model", "Metrics, logs, or performance results"],
    "failure-analysis": ["Failure symptoms, logs, and timeline", "Reproduction steps, environment, and recent changes"],
    "release-readiness": ["Release scope, execution results, and defect list", "Blockers, risks, and rollback information"],
    "security-accessibility": ["App type, permission model, and data sensitivity", "Platform, assistive technology, or security constraints"],
    "ai-quality": ["Model, prompt, agent flow, or generated output", "Evaluation criteria, risk boundaries, and samples"],
    "quality-governance": ["Quality data, test assets, or defect list", "Metric definitions, scope, and decision rules"],
    "data-environment": ["Test data, database, and environment configuration", "Dependencies, isolation, and cleanup rules"],
  };
  const outputs: Record<PromptTaskKey, string[]> = {
    "requirements-analysis": ["Information gaps, business rules, and risks", "Traceable testing concerns and open questions"],
    "test-strategy": ["Testing scope, priorities, and methods", "Environment, evidence, and risk tracking guidance"],
    "test-design": ["Structured test scenarios and cases", "Happy-path, negative, boundary, and state coverage"],
    "test-review": ["Coverage and executability review", "Prioritized issues and actionable changes"],
    "api-testing": ["API, contract, and error scenarios", "Assertion focus, data strategy, and dependency risks"],
    "automation-testing": ["Automation scope and layer strategy", "Stability, maintenance, and CI guidance"],
    "performance-analysis": ["Scenarios, metrics, and load model", "Bottlenecks, risks, and next analysis steps"],
    "failure-analysis": ["Organized evidence and possible causes", "Reproduction, isolation, and verification steps"],
    "release-readiness": ["Release evidence and risk list", "Go, conditional-go, or hold decision inputs"],
    "security-accessibility": ["Verification points and risk categories", "Items requiring further human or tool confirmation"],
    "ai-quality": ["Evaluation dimensions, samples, and risks", "Reviewable result structure and limitations"],
    "quality-governance": ["Quality signals, gaps, and issue priority", "Traceable improvement suggestions and decision inputs"],
    "data-environment": ["Data and environment dependency map", "Preparation, isolation, cleanup, and risk guidance"],
  };
  return { inputs: inputs[task.key], outputs: outputs[task.key] };
}

function getSearchText(parts: string[]): string {
  return normalise(parts.filter(Boolean).join(" "));
}

function truncatePromptDescription(value: string, lang: Lang): string {
  const limit = lang === "zh-cn" ? 116 : 168;
  const characters = Array.from(value.trim());
  return characters.length > limit ? `${characters.slice(0, limit).join("").trimEnd()}…` : characters.join("");
}

function cleanPromptDescription(value: string): string {
  return value
    .replace(/^\s*#{1,6}\s+/gm, "")
    .replace(/^\s*---\s*$/gm, "")
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function getPromptCardDescription(body: string, fallback: string, lang: Lang): string {
  const withoutComments = body.replace(/<!--[\s\S]*?-->/g, "");
  const taskMatch = withoutComments.match(/\*\*(?:Task|任务)\s*[:：]\*\*\s*([\s\S]*?)(?=\n\s*\n|$)/i);
  const paragraphs = withoutComments.split(/\n\s*\n/);
  const candidate = taskMatch?.[1] || paragraphs.find((paragraph) => {
    const lines = paragraph.trim().split("\n").map((line) => line.trim()).filter(Boolean);
    if (!lines.length || lines.every((line) => /^(?:#{1,6}\s+|---\s*$)/.test(line))) return false;
    if (lines.every((line) => /^(?:[-*+]\s+|\|)/.test(line))) return false;
    if (/^\*\*(?:Role|Context|角色|上下文)\s*[:：]\*\*/i.test(lines[0])) return false;
    const cleaned = cleanPromptDescription(paragraph);
    return cleaned.length >= 30 && !/^\|/.test(cleaned);
  });
  const cleaned = candidate ? cleanPromptDescription(candidate) : "";
  const withoutRolePrefix = cleaned.replace(/^(?:你是一名|你是|You are)\s*[^。！？.!?]+[。！？.!?]\s*/i, "");
  const summary = withoutRolePrefix.length >= 30 ? withoutRolePrefix : cleaned;
  return summary ? truncatePromptDescription(summary, lang) : fallback;
}

export const PROMPT_AREAS = areaDefinitions;
export const PROMPT_TASKS = taskDefinitions;

export function buildPromptRegistry(entries: readonly PromptSourceEntry[], lang: Lang): PromptRegistryEntry[] {
  const areas = areaByKey(lang);
  const tasks = taskByKey(lang);

  return entries
    .filter((entry) => entry.data.lang === lang)
    .map((entry) => {
      const { title, description, testingType, category, categoryOrder, sourcePath, order } = entry.data;
      const areaKey = getAreaKey(category, testingType, title);
      const taskKey = getTaskKey(testingType, title, areaKey);
      const area = areas.get(areaKey) || areas.get("other-testing")!;
      const task = tasks.get(taskKey)!;
      const variant = getVariant(title, testingType);
      const platform = getPlatform(title, testingType);
      const familyId = getPromptFamilyId(testingType);
      const { inputs, outputs } = metadataForTask(task, lang);
      const tags = [category, area.label, task.label, platform || "", variant];
      const aliases = [
        testingType.replace(/-/g, " "),
        ...task.aliases,
        ...(platform ? [platform] : []),
      ];
      const searchText = getSearchText([
        testingType,
        title,
        description,
        category,
        area.label,
        task.label,
        ...tags,
        ...aliases,
        ...inputs,
        ...outputs,
      ]);

      return {
        id: testingType,
        slug: testingType,
        title,
        description,
        cardDescription: getPromptCardDescription(entry.body || "", description, lang),
        category,
        categoryOrder,
        sourcePath,
        lang,
        order,
        body: entry.body || "",
        areaKey,
        areaLabel: area.label,
        areaDescription: area.description,
        taskKey,
        taskLabel: task.label,
        taskDescription: task.description,
        variant,
        complexity: getComplexity(variant),
        ...(platform ? { platform } : {}),
        familyId,
        tags,
        aliases,
        inputs,
        outputs,
        searchText,
      } satisfies PromptRegistryEntry;
    })
    .sort((a, b) => a.order - b.order);
}

export type PromptRegistryFilter = {
  query?: string;
  areaKey?: string;
  taskKey?: string;
  variant?: string;
  complexity?: string;
};

export function filterPromptRegistry(
  registry: readonly PromptRegistryEntry[],
  filter: PromptRegistryFilter,
): PromptRegistryEntry[] {
  const queryTokens = normalise(filter.query || "").split(" ").filter(Boolean);

  return registry.filter((entry) => {
    const queryMatches = queryTokens.every((token) => entry.searchText.includes(token));
    const areaMatches = !filter.areaKey || filter.areaKey === entry.areaKey;
    const taskMatches = !filter.taskKey || filter.taskKey === entry.taskKey;
    const variantMatches = !filter.variant || filter.variant === entry.variant;
    const complexityMatches = !filter.complexity || filter.complexity === entry.complexity;
    return queryMatches && areaMatches && taskMatches && variantMatches && complexityMatches;
  });
}

export function getPromptAreaCounts(registry: readonly PromptRegistryEntry[], lang: Lang) {
  return PROMPT_AREAS[lang].map((area) => ({
    ...area,
    count: registry.filter((entry) => entry.areaKey === area.key).length,
  }));
}

export function getPromptTaskCounts(registry: readonly PromptRegistryEntry[], lang: Lang) {
  return PROMPT_TASKS[lang].map((task) => ({
    ...task,
    count: registry.filter((entry) => entry.taskKey === task.key).length,
  }));
}

export function getVariantGroup(
  current: PromptRegistryEntry,
  registry: readonly PromptRegistryEntry[],
): PromptRegistryEntry[] {
  const rank = (entry: PromptRegistryEntry) => {
    if (entry.id === current.id) return -1;
    if (entry.variant === "plus") return 0;
    if (entry.variant === "lite") return 1;
    if (entry.platform) return 3;
    return 2;
  };

  return registry
    .filter((entry) => entry.familyId === current.familyId)
    .sort((a, b) => rank(a) - rank(b) || a.order - b.order || a.title.localeCompare(b.title, current.lang));
}

export function getRelatedPromptEntries(
  current: PromptRegistryEntry,
  registry: readonly PromptRegistryEntry[],
  limit = 5,
): PromptRegistryEntry[] {
  return registry
    .filter((entry) => entry.id !== current.id && entry.familyId !== current.familyId)
    .map((entry) => {
      let score = 0;
      if (entry.taskKey === current.taskKey) score += 100;
      if (entry.areaKey === current.areaKey) score += 35;
      if (entry.category === current.category) score += 15;
      if (entry.variant === current.variant) score += 5;
      const sharedTags = entry.tags.filter((tag) => current.tags.includes(tag)).length;
      score += sharedTags * 2;
      return { entry, score };
    })
    .sort((a, b) => b.score - a.score || a.entry.order - b.entry.order)
    .slice(0, limit)
    .map(({ entry }) => entry);
}
