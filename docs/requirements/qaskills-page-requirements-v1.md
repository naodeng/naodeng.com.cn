# QA Skills 页面需求文档（v1）

## 1. 目标

基于 `docs/temporary/qaskills` 现有内容，新增一套中英文 QA Skills 页面，整体形态参考现有 Prompts 页面，包含：

- `qaskills` 主页面（聚合页）
- 单个 Skill 介绍页面（详情页）

目标是让用户可以按分类快速找到技能，并在详情页直接完成了解与安装。

## 2. 来源范围

本需求仅使用以下内容作为数据来源：

- `docs/temporary/qaskills/zh/*.md`
- `docs/temporary/qaskills/en/*.md`

不包含目录下 `README.md` 之外的额外外部数据源。

## 3. 页面范围与路由

### 3.1 中文页面

- 主页面：`/zh-cn/qaskills/`
- 详情页：`/zh-cn/qaskills/{skill-slug}/`

### 3.2 英文页面

- 主页面：`/en/qaskills/`
- 详情页：`/en/qaskills/{skill-slug}/`

### 3.3 默认跳转入口

- 增加 `/qaskills/` 入口页，行为与现有多语言入口保持一致（按站点语言策略跳转到对应语言页面）。

## 4. 主页面需求（qaskills 首页）

主页面必须包含以下 3 个核心模块，顺序固定：

1. 主介绍模块
2. 快速开始模块
3. Skills 分类模块

### 4.1 主介绍模块

展示内容：

- 页面主标题（中英文）
- 一句话价值说明（中英文）
- 简短数量信息（例如总 Skill 数）
- 操作按钮：
  - 快速开始锚点按钮
  - GitHub 仓库按钮（`https://github.com/naodeng/awesome-qa-skills`）

### 4.2 快速开始模块

固定为 3 步结构（中英文各一套文案）：

1. 选择合适 Skill
2. 准备输入材料
3. 在 AI 助手中使用并得到结果

每一步包含：

- 步骤标题
- 1 段简要说明
- 2-3 条操作提示

### 4.3 Skills 分类模块

按以下 3 类展示：

- 测试类型（Testing Types）
- 测试工作流程（Testing Workflows）
- 加强版（Plus）

#### 4.3.1 分类规则

- 测试工作流程：slug 属于 `daily-testing-workflow`、`discover-testing`、`sprint-testing-workflow`、`release-testing-workflow`。
- 加强版：slug 以 `-plus` 结尾。
- 测试类型：除上面两类之外的其余 Skill。

#### 4.3.2 分类展示要求

- 每个分类有独立标题与简介。
- 每个 Skill 使用卡片展示，至少包含：
  - Skill 名称
  - 简单介绍（1-2 句）
  - 跳转详情页按钮
- 分类下无数据时不显示空分类。

#### 4.3.3 测试类型二级细分（新增）

“测试类型”分类内再细分为 6 个二级分组，用于主页面分组展示和后续筛选：

1. 需求与策略（Requirements & Strategy）
2. 用例与评审（Case Design & Review）
3. 功能与兼容（Functional & Compatibility）
4. 接口与自动化（API & Automation）
5. 质量保障专项（Quality Specialties）
6. 缺陷与报告（Defect & Reporting）

细分展示要求：

- 二级分组有独立小标题（中英文）。
- 分组为空时不显示该分组。
- 同一 Skill 只能归入一个二级分组，不重复展示。
- 页面顺序固定按上面 1-6 排列。

## 5. 详情页需求（单个 Skill 页面）

详情页从上到下包含以下结构（顺序固定）：

1. 基础信息区
2. 外部链接按钮区
3. Skill 完整介绍区
4. 安装说明区

### 5.1 基础信息区（必须字段）

每个 Skill 必须展示：

- Skill 名称
- 作者
- 更新时间
- 简单介绍
- 试用场景
- 试用人群

#### 5.1.1 字段映射规则

- Skill 名称：文档一级标题（`# ...`）
- 作者：`作者：...`
- 更新时间：中文取“同步日期”，英文取“Last Synced”
- 简单介绍：`快速介绍 / Quick Intro` 内容
- 试用场景：从“何时使用 / Best used when”提取
- 试用人群：从“适合谁 / Who should use”提取

### 5.2 外部链接按钮区

必须提供两个按钮：

- Skill 链接按钮（指向该 Skill 的原始仓库页面）
- Skills GitHub 链接按钮（指向仓库首页）

链接来源：

- Skill 链接来自详情文档“来源 / Source”中的原始技能链接
- Skills GitHub 固定为：`https://github.com/naodeng/awesome-qa-skills`

### 5.3 Skill 完整介绍区

展示该 Skill 的完整说明内容，覆盖（但不限于）以下段落：

- 使用说明 / Usage Guide
- 说明汇总 / Skill Breakdown（When / What / How / Reference / Limits）

要求：

- 保留原始信息顺序
- 保持中英文内容各自独立，不混排

### 5.4 安装说明区

显示原文中的安装部分，包含：

- 工具路径表
- macOS/Linux 安装说明
- Windows 安装说明
- 注意事项说明

要求：

- 保留代码块排版与复制可读性
- 安装区需有清晰标题，便于用户直接定位

## 6. 数据清单（基于当前 qaskills 内容）

当前共 29 个 Skill（zh/en 各 29 个，对应 slug 一致）：

### 6.1 测试工作流程（4）

- daily-testing-workflow
- discover-testing
- sprint-testing-workflow
- release-testing-workflow

### 6.2 加强版（4）

- requirements-analysis-plus
- test-case-reviewer-plus
- test-strategy-plus
- testcase-writer-plus

### 6.3 测试类型（21）

#### 6.3.1 需求与策略（2）

- requirements-analysis
- test-strategy

#### 6.3.2 用例与评审（2）

- test-case-writing
- test-case-reviewer

#### 6.3.3 功能与兼容（3）

- functional-testing
- manual-testing
- mobile-testing

#### 6.3.4 接口与自动化（6）

- api-testing
- api-test-bruno
- api-test-pytest
- api-test-restassure
- api-test-supertest
- automation-testing

#### 6.3.5 质量保障专项（5）

- performance-testing
- performance-test-gatling
- performance-test-k6
- security-testing
- accessibility-testing

#### 6.3.6 缺陷与报告（3）

- bug-reporting
- test-reporting
- ai-assisted-testing

## 7. 中英文一致性要求

- 中文与英文页面都必须有主页面与详情页。
- 同一 slug 的中英文详情页都可访问。
- 分类结果在中英文下保持一致（分类规则一致，不因文案语言改变）。
- 导航、按钮、模块标题需提供中英文文案。

## 8. 验收标准

满足以下条件视为完成：

1. 新增 qaskills 主页面，且包含“主介绍 / 快速开始 / 分类”三大模块。
2. 新增 29 个中文详情页与 29 个英文详情页（按已有 slug）。
3. 每个详情页都展示：名称、作者、更新时间、简单介绍、试用场景、试用人群。
4. 每个详情页都有“Skill 链接按钮”和“Skills GitHub 链接按钮”。
5. 每个详情页都包含“完整介绍”与“安装说明”两个完整区块。
6. 中英文路径和内容映射正确，无明显缺页、错链、空白模块。

## 9. 建议验证清单（开发完成后执行）

- 打开 `/zh-cn/qaskills/` 与 `/en/qaskills/`，确认三大模块都正常显示。
- 随机抽查 6 个详情页（每类至少 1 个，中英文各 3 个）：
  - 字段完整
  - 按钮可点
  - 安装说明显示完整
- 检查 3 类分类数量：测试类型 21、工作流程 4、加强版 4。
- 检查测试类型二级分组数量：2 / 2 / 3 / 6 / 5 / 3。
- 检查详情页的 Skill 链接与 GitHub 链接均可访问。
- 运行一次站点构建，确认无新增构建错误。

## 10. 非目标（本期不做）

- 不在本期新增 Skill 内容本身（仅消费现有 qaskills 文档）。
- 不改动 `docs/temporary/qaskills` 原始文档内容。
- 不在本期扩展新的分类体系（仅三类）。
- 不在本期加入筛选器、排序器、搜索联想等增强交互。
