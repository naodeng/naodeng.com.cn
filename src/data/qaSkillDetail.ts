import type { Lang } from "@/i18n";
import type { QASkill } from "@/utils/qaskills";

type Localized<T> = Record<Lang, T>;

export type DetailPreviewRow = {
  priority: string;
  finding: Localized<string>;
  evidence: Localized<string>;
  impact: Localized<string>;
  action: Localized<string>;
};

export type DetailExample = {
  before: Localized<string>;
  run: Localized<string>;
  after: Localized<Array<{ label: string; value: string }>>;
  full: Localized<string>;
};

export type QASkillDetailData = {
  domain: Localized<string>;
  sdlc: Localized<string>;
  type: Localized<string>;
  status: Localized<string>;
  problemValue: Localized<string>;
  outputSummary: Localized<string>;
  notRecommendedLabel: Localized<string>;
  roles: Localized<string[]>;
  problem: Localized<string[]>;
  whenToUse: Localized<string[]>;
  whenNotToUse: Localized<string[]>;
  input: {
    minimum: Localized<string[]>;
    recommended: Localized<string[]>;
    optional: Localized<string[]>;
  };
  outputSections: Localized<string[]>;
  outputPreview: DetailPreviewRow[];
  example: DetailExample | null;
  howItWorks: Localized<string[]>;
  workflow: string[];
  relations: {
    before: string[];
    deepen: string[];
    continueTo: string[];
    similar: string[];
  };
  similarNotes: Record<string, {
    problem: Localized<string>;
    timing: Localized<string>;
  }>;
};

const requirementsAnalysis: QASkillDetailData = {
  domain: {
    "zh-cn": "需求质量",
    en: "Requirement Quality",
  },
  sdlc: {
    "zh-cn": "需求",
    en: "Requirement",
  },
  type: {
    "zh-cn": "原子 Skill",
    en: "Atomic Skill",
  },
  status: {
    "zh-cn": "稳定",
    en: "Stable",
  },
  problemValue: {
    "zh-cn": "它把测试设计前的需求理解，变成一份可以评审、跟进和继续执行的质量输入。",
    en: "It turns pre-test-design requirement understanding into a quality input that can be reviewed, tracked, and acted on.",
  },
  outputSummary: {
    "zh-cn": "输出不是一段泛化总结，而是一份可以直接进入评审、测试设计和后续跟进的结构化分析报告。",
    en: "The output is not a generic summary. It is a structured analysis report that can move directly into review, test design, and follow-up.",
  },
  notRecommendedLabel: {
    "zh-cn": "不建议直接使用",
    en: "When not to use",
  },
  roles: {
    "zh-cn": ["QA", "BA", "PM", "DEV"],
    en: ["QA", "BA", "PM", "DEV"],
  },
  problem: {
    "zh-cn": [
      "业务规则描述不完整，正常流程明确但异常流程缺失。",
      "状态变化、边界条件和外部依赖没有定义清楚。",
      "验收标准无法直接验证，需求缺口被带入测试设计。",
      "API、UI 与业务规则之间存在不一致，质量风险没有优先级。",
    ],
    en: [
      "Business rules are incomplete: the happy path is clear but exception flows are missing.",
      "State changes, boundaries, and external dependencies are not defined clearly.",
      "Acceptance criteria cannot be verified directly, so gaps leak into test design.",
      "API, UI, and business rules can diverge while quality risks remain unprioritized.",
    ],
  },
  whenToUse: {
    "zh-cn": [
      "新需求进入需求细化阶段。",
      "用户故事初步完成，需要确认是否可测试。",
      "进行 PRD 评审或测试分析开始前。",
      "需求发生重大变化，需要重新梳理范围和风险。",
    ],
    en: [
      "A new requirement enters refinement.",
      "A user story is drafted and needs a testability check.",
      "A PRD review or test analysis is about to start.",
      "A major requirement change needs its scope and risks re-mapped.",
    ],
  },
  whenNotToUse: {
    "zh-cn": [
      "已经明确只需要生成测试用例。",
      "单纯分析 PR 变更。",
      "单纯排查生产事故。",
      "单纯做 API 自动化或执行回归测试。",
    ],
    en: [
      "The task is already limited to generating test cases.",
      "The task is only PR diff analysis.",
      "The task is only production incident triage.",
      "The task is only API automation or regression execution.",
    ],
  },
  input: {
    minimum: {
      "zh-cn": ["需求 / 用户故事", "当前变更目标"],
      en: ["Requirement / User Story", "Current change objective"],
    },
    recommended: {
      "zh-cn": [
        "PRD",
        "验收标准",
        "UI / 原型",
        "API 规范",
        "业务规则",
        "架构",
        "已有测试用例",
        "历史缺陷",
      ],
      en: [
        "PRD",
        "Acceptance Criteria",
        "UI / Prototype",
        "API Specification",
        "Business Rules",
        "Architecture",
        "Existing Test Cases",
        "Historical Defects",
      ],
    },
    optional: {
      "zh-cn": ["源代码", "PR 变更", "生产日志", "指标", "历史需求"],
      en: ["Source Code", "PR Diff", "Production Logs", "Metrics", "Previous Requirement"],
    },
  },
  outputSections: {
    "zh-cn": [
      "范围总结",
      "业务目标",
      "参与者",
      "业务规则",
      "主流程",
      "替代流程",
      "异常流程",
      "状态变化",
      "依赖关系",
      "边界条件",
      "信息缺口",
      "歧义",
      "质量风险",
      "待确认问题",
      "建议下一步",
    ],
    en: [
      "Scope Summary",
      "Business Objective",
      "Actors",
      "Business Rules",
      "Main Flow",
      "Alternative Flow",
      "Exception Flow",
      "State Changes",
      "Dependencies",
      "Boundary Conditions",
      "Missing Information",
      "Ambiguities",
      "Quality Risks",
      "Questions to Confirm",
      "Recommended Next Actions",
    ],
  },
  outputPreview: [
    {
      priority: "P0",
      finding: {
        "zh-cn": "升级失败后的会员状态未定义",
        en: "Membership state after a failed upgrade is undefined",
      },
      evidence: { "zh-cn": "AC-03", en: "AC-03" },
      impact: {
        "zh-cn": "状态可能不一致",
        en: "State may become inconsistent",
      },
      action: {
        "zh-cn": "PM 明确失败规则",
        en: "PM defines the failure rule",
      },
    },
    {
      priority: "P1",
      finding: {
        "zh-cn": "外部权益接口超时行为未知",
        en: "Timeout behavior for the external benefits API is unknown",
      },
      evidence: { "zh-cn": "API 规范", en: "API Spec" },
      impact: {
        "zh-cn": "无法设计恢复场景",
        en: "Recovery scenarios cannot be designed",
      },
      action: {
        "zh-cn": "开发补充超时策略",
        en: "Dev adds a timeout strategy",
      },
    },
    {
      priority: "P1",
      finding: {
        "zh-cn": "10,000 元边界定义不明确",
        en: "The 10,000 boundary is not defined",
      },
      evidence: { "zh-cn": "PRD", en: "PRD" },
      impact: {
        "zh-cn": "边界测试无法确定",
        en: "Boundary tests cannot be determined",
      },
      action: {
        "zh-cn": "明确 >= / >",
        en: "Clarify >= / >",
      },
    },
  ],
  example: {
    before: {
      "zh-cn": "新增会员等级自动升级功能。金卡用户累计消费达到 10,000 元后，自动升级为白金卡，并立即获得白金卡权益。",
      en: "Add automatic membership upgrades. A Gold user becomes Platinum after cumulative spending reaches 10,000, with Platinum benefits granted immediately.",
    },
    run: {
      "zh-cn": "@skill requirements-analysis\n\n分析这个会员升级需求，识别业务规则、边界、依赖、缺口和质量风险。",
      en: "@skill requirements-analysis\n\nAnalyze this membership upgrade requirement. Identify business rules, boundaries, dependencies, gaps, and quality risks.",
    },
    after: {
      "zh-cn": [
        { label: "业务规则", value: "金卡 → 白金卡；累计消费达到 10,000" },
        { label: "信息缺口", value: "退款后累计消费是否回退？升级失败是否重试？" },
        { label: "边界条件", value: "9,999.99 / 10,000.00 / 10,000.01" },
        { label: "依赖", value: "会员服务 / 订单服务 / 权益服务" },
        { label: "质量风险", value: "P0：会员已升级，但权益未发放。" },
      ],
      en: [
        { label: "Business rule", value: "Gold → Platinum when cumulative spend reaches 10,000" },
        { label: "Missing information", value: "Should refunds reverse spend? Should upgrade failures retry?" },
        { label: "Boundary", value: "9,999.99 / 10,000.00 / 10,000.01" },
        { label: "Dependencies", value: "Membership Service / Order Service / Benefit Service" },
        { label: "Quality risk", value: "P0: membership upgrades but benefits are not granted." },
      ],
    },
    full: {
      "zh-cn": "完整示例：确认会员升级触发条件、失败重试、退款回退和权益发放的一致性，再进入测试设计。",
      en: "Full example: confirm the upgrade trigger, failure retry, refund reversal, and benefit-grant consistency before moving into test design.",
    },
  },
  howItWorks: {
    "zh-cn": [
      "理解上下文",
      "提取业务规则",
      "识别流程与状态",
      "识别边界与依赖",
      "发现信息缺口",
      "识别质量风险",
      "输出结构化分析",
    ],
    en: [
      "Understand context",
      "Extract business rules",
      "Identify flow and state",
      "Identify boundaries and dependencies",
      "Discover missing information",
      "Identify quality risks",
      "Produce structured analysis",
    ],
  },
  workflow: [
    "requirements-analysis",
    "requirement-gap-analysis",
    "testability-analysis",
    "quality-risk-analysis",
    "test-strategy",
    "test-case-writing",
  ],
  relations: {
    before: [],
    deepen: ["requirement-gap-analysis", "testability-analysis", "quality-risk-analysis"],
    continueTo: ["test-strategy", "test-case-writing"],
    similar: [
      "requirement-gap-analysis",
      "testability-analysis",
      "quality-risk-analysis",
      "requirement-quality-review",
    ],
  },
  similarNotes: {
    "requirement-gap-analysis": {
      problem: { "zh-cn": "找遗漏、冲突和未覆盖规则", en: "Find omissions, conflicts, and uncovered rules" },
      timing: { "zh-cn": "需要深入评审时", en: "When a deeper review is needed" },
    },
    "testability-analysis": {
      problem: { "zh-cn": "判断需求是否可验证、可执行", en: "Judge whether the requirement is verifiable and executable" },
      timing: { "zh-cn": "进入测试设计前", en: "Before test design" },
    },
    "quality-risk-analysis": {
      problem: { "zh-cn": "识别并排序质量风险", en: "Identify and prioritize quality risks" },
      timing: { "zh-cn": "制定策略前", en: "Before shaping the strategy" },
    },
    "requirement-quality-review": {
      problem: { "zh-cn": "检查需求质量是否达到评审标准", en: "Check whether requirement quality meets review criteria" },
      timing: { "zh-cn": "需求细化 / PRD 评审", en: "Refinement / PRD review" },
    },
  },
};

export const QA_SKILL_DETAIL_DATA: Record<string, QASkillDetailData> = {
  "requirements-analysis": requirementsAnalysis,
};

export function getQASkillDetailData(slug: string): QASkillDetailData | null {
  return QA_SKILL_DETAIL_DATA[slug] ?? null;
}

type GenericDetailOptions = {
  skill: Pick<QASkill, "category" | "description" | "hasEvals" | "sections" | "slug" | "title">;
  lang: Lang;
  summary: {
    whenToUse: string;
    input: string;
    output: string;
  };
  relatedSlugs: string[];
};

const genericLocalized = <T,>(lang: Lang, value: T, fallback: Localized<T>): Localized<T> => ({
  "zh-cn": lang === "zh-cn" ? value : fallback["zh-cn"],
  en: lang === "en" ? value : fallback.en,
});

function markdownBullets(value: string): string[] {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => /^([-*+]|\d+\.)\s+/.test(line))
    .map((line) => line
      .replace(/^([-*+]|\d+\.)\s+/, "")
      .replace(/^\[[ xX]\]\s*/, "")
      .replace(/\*\*/g, "")
      .replace(/`/g, "")
      .trim())
    .filter(Boolean);
}

function uniqueItems(items: string[], limit?: number): string[] {
  const unique = [...new Set(items.filter(Boolean))];
  return typeof limit === "number" ? unique.slice(0, limit) : unique;
}

type QASkillRoleKey =
  | "qa"
  | "ba"
  | "pm"
  | "dev"
  | "sre";

const QASkillRoleLabels: Record<QASkillRoleKey, Localized<string>> = {
  qa: { "zh-cn": "QA", en: "QA" },
  ba: { "zh-cn": "BA", en: "BA" },
  pm: { "zh-cn": "PM", en: "PM" },
  dev: { "zh-cn": "DEV", en: "DEV" },
  sre: { "zh-cn": "SRE / DevOps", en: "SRE / DevOps" },
};

const QASkillRoleOrder: QASkillRoleKey[] = ["qa", "ba", "pm", "dev", "sre"];

const ROLE_RULES: Array<{ pattern: RegExp; roles: QASkillRoleKey[] }> = [
  {
    pattern: /(?:skill\s*(?:change|prose|review|trim)|skill(?:变更|文案|过程性)|过程性文案|技能变更)/i,
    roles: ["qa"],
  },
  {
    pattern: /(?:\b(?:ai|llm|rag|agent|prompt|model)\b|大模型|智能体|提示词(?:测试|注入)|提示注入)/i,
    roles: ["dev"],
  },
  {
    pattern: /(?:security|threat|威胁|安全(?:测试|需求|审查|策略|边界|漏洞)|authentication|authorization|身份认证|授权|secret|敏感信息|prompt injection|提示注入)/i,
    roles: ["qa", "dev"],
  },
  {
    pattern: /(?:performance|性能|capacity|容量|load|stress|spike|soak|endurance|吞吐|延迟|workload|负载)/i,
    roles: ["qa", "sre"],
  },
  {
    pattern: /(?:production|生产|incident|事故|observability|可观测|reliability|可靠性|resilience|韧性|chaos|混沌|failover|故障切换|disaster recovery|灾备|recovery|恢复|circuit breaker|熔断|dependency failure|依赖故障|timeout|超时|retry|重试|sre|devops|运维|基础设施|部署|deployment|kubernetes|\bk8s\b|docker|ci\/cd|流水线)/i,
    roles: ["sre"],
  },
  {
    pattern: /(?:ux|体验|accessibility|可访问|cross-browser|跨浏览|mobile|移动端|visual regression|视觉回归)/i,
    roles: ["pm"],
  },
  {
    pattern: /(?:automation|自动化|api-test-|postman|bruno|pytest|rest assured|restassure|supertest)/i,
    roles: ["qa", "dev"],
  },
  {
    pattern: /(?:ui-test-|cypress|playwright|puppeteer|selenium|testcafe|webdriverio|browser|浏览器|selector|选择器|wait strategy|等待策略)/i,
    roles: ["qa", "dev"],
  },
  {
    pattern: /(?:API|api|接口|GraphQL|gRPC|OpenAPI|database|数据库|code review|代码审查|test code|测试代码|schema|契约|contract|mock)/i,
    roles: ["dev"],
  },
  {
    pattern: /(?:API 设计质量|database design|数据库设计|technical design|技术设计|observability design|可观测性设计|error-handling design|错误处理设计|架构|architecture|ADR)/i,
    roles: ["dev"],
  },
  {
    pattern: /(?:requirement|需求|acceptance|验收|business rule|业务规则|product quality|产品质量|user story|用户故事|traceability|可追踪|PRD)/i,
    roles: ["ba", "pm"],
  },
  {
    pattern: /(?:strategy|策略|workflow|release|发布|sprint|迭代|report|报告|metrics|指标|dashboard|仪表盘|quality gate|质量门禁|maturity|成熟度|ROI|投资回报|delivery|交付|scope|范围)/i,
    roles: ["qa", "pm"],
  },
  {
    pattern: /(?:test|testing|测试|review|评审|analysis|分析|validation|校验|verification|验证|bug|缺陷|risk|风险|quality|质量)/i,
    roles: ["qa"],
  },
];

/**
 * Infer the people most likely to use a Skill from its own title, description,
 * slug, and (when needed) canonical Markdown sections. This stays deterministic
 * so every generated detail page makes the same decision in both locales.
 */
export function inferQASkillRoles(
  skill: Pick<QASkill, "slug" | "title" | "description" | "sections">,
): Localized<string[]> {
  const identityContext = [skill.slug, skill.title, skill.description].join("\n");
  const sectionContext = Object.values(skill.sections).map((section) => markdownBullets(section).slice(0, 2).join(" ")).join("\n");
  const roleKeys: QASkillRoleKey[] = [];
  const addRoles = (roles: QASkillRoleKey[]) => {
    for (const role of roles) {
      if (!roleKeys.includes(role)) roleKeys.push(role);
    }
  };

  for (const rule of ROLE_RULES) {
    if (rule.pattern.test(identityContext)) addRoles(rule.roles);
  }
  if (!roleKeys.length) {
    for (const rule of ROLE_RULES) {
      if (rule.pattern.test(sectionContext)) addRoles(rule.roles);
    }
  }

  if (!roleKeys.length) addRoles(["qa"]);
  const selected = roleKeys
    .sort((left, right) => QASkillRoleOrder.indexOf(left) - QASkillRoleOrder.indexOf(right))
    .slice(0, 4);
  return {
    "zh-cn": selected.map((role) => QASkillRoleLabels[role]["zh-cn"]),
    en: selected.map((role) => QASkillRoleLabels[role].en),
  };
}

/**
 * Build the shared detail structure from each Skill's own canonical sections.
 * The current route language remains source-faithful; the opposite language is
 * only a typed fallback because this data is consumed one locale at a time.
 */
export function buildGenericQASkillDetailData({
  skill,
  lang,
  summary,
  relatedSlugs,
}: GenericDetailOptions): QASkillDetailData {
  const whenToUse = markdownBullets(skill.sections.whenToUse);
  const workflow = markdownBullets(skill.sections.workflow);
  const constraints = markdownBullets(skill.sections.coreConstraints);
  const progressiveDisclosure = markdownBullets(skill.sections.progressiveDisclosure);
  const checklist = markdownBullets(skill.sections.checklist);
  const pitfalls = markdownBullets(skill.sections.pitfalls);
  const sourceWhenToUse = uniqueItems(whenToUse, 6);
  const sourcePitfalls = uniqueItems(pitfalls, 5);
  const sourceInputs = uniqueItems(progressiveDisclosure, 8);
  const sourceOutputs = uniqueItems(checklist.length ? checklist : workflow, 18);
  const sourceWorkflow = uniqueItems(workflow.length ? workflow : constraints, 10);
  const summaryLooksProcedural = /(?:阅读并遵循|产出前必须|需要套用|需要框架规范|需要格式转换|用户只要最短上手|read and follow|before producing|when .* requested|for .* notes|for format conversion|shortest quick-start)/i.test(summary.input);
  const minimumInput = summaryLooksProcedural
    ? lang === "zh-cn" ? "当前任务范围、目标和待处理对象。" : "The current task scope, objective, and subject under review."
    : summary.input;

  const categoryMeta = {
    type: {
      domain: { "zh-cn": "软件测试", en: "Software testing" },
      sdlc: { "zh-cn": "测试设计", en: "Test design" },
      type: { "zh-cn": "原子 Skill", en: "Atomic Skill" },
    },
    workflow: {
      domain: { "zh-cn": "质量流程", en: "Quality workflow" },
      sdlc: { "zh-cn": "测试流程", en: "Testing workflow" },
      type: { "zh-cn": "工作流 Skill", en: "Workflow Skill" },
    },
    plus: {
      domain: { "zh-cn": "质量工程", en: "Quality engineering" },
      sdlc: { "zh-cn": "质量增强", en: "Quality enablement" },
      type: { "zh-cn": "增强 Skill", en: "Enhanced Skill" },
    },
  }[skill.category];

  const genericInputs: {
    minimum: Localized<string[]>;
    recommended: Localized<string[]>;
    optional: Localized<string[]>;
  } = {
    minimum: {
      "zh-cn": [minimumInput],
      en: [minimumInput],
    },
    recommended: {
      "zh-cn": ["项目目标", "测试范围", "约束条件"],
      en: ["Project goal", "Test scope", "Constraints"],
    },
    optional: {
      "zh-cn": ["相关代码或配置", "历史结果", "日志与指标"],
      en: ["Relevant code or configuration", "Historical results", "Logs and metrics"],
    },
  };

  const recommendedInputs = sourceInputs.slice(0, 4);
  const optionalInputs = sourceInputs.slice(4);
  const problem = uniqueItems([
    summary.whenToUse,
    ...constraints.slice(0, 3),
    ...pitfalls.slice(0, 2),
  ], 5);

  return {
    domain: categoryMeta.domain,
    sdlc: categoryMeta.sdlc,
    type: categoryMeta.type,
    status: {
      "zh-cn": skill.hasEvals ? "稳定" : "暂无评测",
      en: skill.hasEvals ? "Stable" : "No evals yet",
    },
    problemValue: {
      "zh-cn": "它把当前 Skill 的方法整理成可以直接执行、评审和复用的质量输入。",
      en: "It turns this Skill's method into a quality input that can be executed, reviewed, and reused.",
    },
    outputSummary: {
      "zh-cn": "输出会围绕该 Skill 的方法形成可执行结果，并明确事实、假设、风险和下一步。",
      en: "The output follows this Skill's method and makes facts, assumptions, risks, and next steps explicit.",
    },
    notRecommendedLabel: {
      "zh-cn": "常见误区",
      en: "Common pitfalls",
    },
    roles: inferQASkillRoles(skill),
    problem: genericLocalized(lang, problem, {
      "zh-cn": ["当前任务需要按该 Skill 的方法处理。"],
      en: ["The current task needs this Skill's method."],
    }),
    whenToUse: genericLocalized(lang, sourceWhenToUse.length ? sourceWhenToUse : [summary.whenToUse], {
      "zh-cn": ["需要按该 Skill 的方法处理当前质量任务时使用。"],
      en: ["Use this Skill when its method fits the current quality task."],
    }),
    whenNotToUse: genericLocalized(lang, sourcePitfalls, {
      "zh-cn": ["范围和上下文不清楚时，不要假装结果已经完整可用。"],
      en: ["Do not treat the result as complete when scope and context are unclear."],
    }),
    input: {
      minimum: genericLocalized(lang, genericInputs.minimum[lang], genericInputs.minimum),
      recommended: genericLocalized(lang, recommendedInputs.length ? recommendedInputs : genericInputs.recommended[lang], genericInputs.recommended),
      optional: genericLocalized(lang, optionalInputs.length ? optionalInputs : genericInputs.optional[lang], genericInputs.optional),
    },
    outputSections: genericLocalized(lang, sourceOutputs.length ? sourceOutputs : [summary.output], {
      "zh-cn": ["可执行结果", "关键风险与信息缺口", "建议下一步"],
      en: ["Actionable result", "Key risks and information gaps", "Recommended next steps"],
    }),
    outputPreview: [],
    example: null,
    howItWorks: genericLocalized(lang, sourceWorkflow, {
      "zh-cn": ["读取当前上下文", "按 Skill 方法处理", "标明假设、风险和下一步"],
      en: ["Read the current context", "Apply the Skill's method", "Mark assumptions, risks, and next steps"],
    }),
    workflow: [],
    relations: {
      before: [],
      deepen: [],
      continueTo: [],
      similar: relatedSlugs,
    },
    similarNotes: {},
  };
}
