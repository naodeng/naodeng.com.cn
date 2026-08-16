# 首页、QA Skills 与 Prompts 内容优化设计

## 1. 背景

网站已经形成由 Blog、Wiki、AI Wiki、Guild、Projects、QA Skills 和 Prompts 组成的双语测试知识体系，三个目标页面也已经使用统一的 Zenix 视觉语言。当前主要问题不在视觉完整度，而在内容定位和任务路径：

- 首页同时展开过多频道，用户难以快速判断网站最适合谁、能完成什么任务。
- QA Skills 页面拥有搜索、分类、生命周期和 Evals 信息，但新用户需要先理解大量概念才能开始使用。
- Prompts 页面仍包含 `_EN.md`、`_Lite.md` 等已经与当前内容结构不一致的说明，也没有解释六种 Prompt 版本如何选择。
- 资源数量很强，但缺少输入、产出和验证状态等可信度证据。

本设计选择“P0 修复 + 页面内容重构”的中等范围方案：保留现有路由、内容集合、双语体系和视觉主题，重点优化三个页面的定位、选择效率、上手路径和可信度表达。

## 2. 目标与成功标准

### 2.1 目标

1. 用户进入首页后，可以在首屏理解网站面向测试工程师，并能直接进入 Skills 或 Prompts。
2. 用户进入 QA Skills 页面后，可以根据任务、推荐入口或生命周期选择合适的 Skill。
3. 用户进入 Prompts 页面后，可以正确选择测试类型和 Prompt 版本，不再看到失效的文件命名说明。
4. 页面展示的资源数量、工具数量、同步时间和 Evals 状态均来自现有数据或明确的统一配置，避免容易漂移的文案。
5. 中文和英文页面结构、主要流程、信息层级和测试覆盖保持一致。

### 2.2 可验收标准

- 首页 `<title>` 不再重复站点名称。
- 首页首屏包含 Skills 与 Prompts 两个明确的任务型入口。
- 保留 main 已有的 Blog、Wiki、QA 工具三张主入口及 `home_entry_click` 埋点契约，并扩展对 Prompts 与 QA Skills 的识别。
- 首页主要内容收敛为五个一级区块，不再为每个频道保留一个大面积独立区块。
- QA Skills 的新手入口、搜索与快速开始出现在生命周期完整列表之前。
- QA Skills 页面不再使用不自然的“38 含 Evals”表达。
- AI 工具数量不再由页面中的固定数字维护。
- Prompts 页面不再出现 `_EN.md`、`_Lite.md`。
- Prompts 页面明确说明 Standard 是默认版本，并提供其他五种版本的简短适用场景。
- 中文与英文页面均通过 Astro 构建、相关单元测试和相关 Playwright E2E。
- 390px 移动视口不存在水平滚动、首屏按钮遮挡或标题不合理断行。

## 3. 范围

### 3.1 包含范围

- 重组首页、QA Skills 索引页和 Prompts 索引页的信息层级。
- 更新三个页面的中英文文案。
- 复用现有内容集合生成资源统计、推荐卡片和任务入口。
- 增加轻量的输入—输出示例和 AI 输出质量提醒。
- 增加或更新与标题、文案、资源统计、链接、搜索筛选和移动端布局相关的测试。

### 3.2 不包含范围

- 不新增独立案例中心路由。
- 不修改 Astro content collection schema。
- 不批量重写 180 个 Prompt Markdown 或 76 个双语 Skill Markdown。
- 不新增后端、数据库、登录或用户数据功能。
- 不修改部署、域名、广告、分析和 GitHub Actions 配置。
- 不替换现有 Zenix 主题，也不做无关组件重构。

## 4. 总体设计原则

### 4.1 任务优先于频道

首页首先回答“用户想完成什么测试任务”，再解释 Blog、Wiki、Skills、Prompts 等内容形态。频道入口继续保留，但不再拥有同等首屏权重。

### 4.2 先上手，再理解完整体系

QA Skills 和 Prompts 都先提供默认路径：

- 不知道选哪个 Skill 时，推荐 `discover-testing`。
- 不知道选哪个 Prompt 版本时，推荐 Standard。
- 生命周期和六种 Prompt 框架作为进阶选择，不要求新用户先全部理解。

### 4.3 数量不代替可信度

页面可以展示资源数量，但必须同时说明这些数字代表什么。Evals 只表述为“包含评测用例”，除非有运行证据，否则不表述为“评测全部通过”。

### 4.4 双语同构

中文和英文页面采用相同区块、相同交互和对应语义。允许中文标题更短以改善移动端断行，但不能减少英文页面的主要流程。

## 5. 首页设计

首页从当前多个频道依次展开的长页面，重组为五个一级区块。

main 已经新增 Blog、Wiki、QA 工具三张 `.home-primary-entry` 主入口卡、`home_entry_click` 事件以及对应 E2E。本方案保留这些能力，不将它们作为旧内容删除。三张主入口和六个 QA 任务入口共同组成第一个“开始使用”一级区块：前者帮助用户选择阅读、查询或执行模式，后者帮助已经选择执行模式的用户直达具体测试任务。

### 5.1 Hero：专业定位与主入口

中文建议：

- 标题：`面向测试工程师的 AI 测试知识与工作台`
- 副标题：`从需求分析、测试设计到自动化与质量评估，使用可直接落地的 Skills、Prompts、工作流和实践指南。`
- 主按钮：`找到适合我的测试 Skill`
- 次按钮：`使用测试 Prompt`

英文使用对应语义，不逐字直译。主按钮分别链接 `/qaskills/` 和 `/prompts/`。

现有控制台视觉继续保留，三个单元改为：

1. 输入测试任务。
2. 选择 Skill 或 Prompt。
3. 生成并复核测试产物。

首页标题应传入不会与 Base 布局重复拼接的页面级标题。建议最终搜索标题：

- 中文：`软件测试同学 X naodeng｜AI 测试知识、Skills 与 Prompts`
- 英文：`Nao Deng | QA Skills, Prompts and AI Testing Knowledge`

### 5.2 内容模式与按任务开始

保留 main 已有三张主入口，但将内容和目标调整为：

| 模式 | 内容 | 链接与行为 |
| --- | --- | --- |
| 阅读实践 | Blog | 链接当前语言 Blog，继续触发 `home_entry_click: blog`。 |
| 查询知识 | Wiki / AI Wiki | 中文链接 Wiki，英文链接 AI Wiki，继续触发现有 wiki / aiwiki 事件。 |
| 完成测试任务 | Skills 与 Prompts | 卡片内部提供 Skills、Prompts 两个明确入口，不再只链接 Prompts。 |

在同一个“开始使用”一级区块内，使用六张任务卡替代当前泛化的“探索内容”卡片：

| 任务 | 首选链接 |
| --- | --- |
| 分析需求 | `/qaskills/requirements-analysis/` |
| 制定测试策略 | `/qaskills/test-strategy/` |
| 编写或评审测试用例 | `/qaskills/test-case-writing/` |
| 设计 API / UI 自动化 | `/qaskills/automation-testing/` |
| 分析与报告缺陷 | `/qaskills/bug-reporting/` |
| 输出测试报告 | `/qaskills/test-reporting/` |

每张卡说明预期产出，而不是只描述频道名称。英文使用相同 slug 和对应文案。

`TrackingEvents.astro` 的首页入口识别范围扩展为 Blog、Wiki、AI Wiki、Guild、Prompts 和 QA Skills。Prompts 使用 `entry_name: prompts`，QA Skills 使用 `entry_name: qaskills`；保留 10 秒去重、语言、session ID、位置和路径字段。埋点绑定继续基于站内链接目标，不将 CSS 类名作为唯一业务接口。

### 5.3 Skills 与 Prompts 核心能力区

采用两个并列的能力面板：

- Prompt：适合复制使用并快速完成单次测试任务。
- Skill：适合安装到 Agent，包含流程、约束、参考资料和 Evals。

每个面板展示三个推荐入口。Skills 推荐 `discover-testing`、`requirements-analysis`、`test-case-writing`；Prompts 推荐需求分析、测试用例编写、Bug Reporting。推荐内容从现有 collection 读取，不复制正文。

### 5.4 可信度与轻量案例

统计信息从现有数据计算：

- Skills 总数。
- 包含 Evals 的 Skills 数量。
- Prompts 总数和测试类型数。
- Workflows 数量。
- 最近同步日期。

下方展示三个静态轻量案例：需求分析、测试用例、Bug Report。每个案例只包含输入摘要、推荐能力和产出类型，不展示大段虚构 AI 输出。案例中的数据必须明确标为示例，不声明不存在的覆盖率或效果提升。

### 5.5 继续探索

- 最新文章由 6 篇减少为 3 篇。
- Wiki、AI Wiki、Guild 和 Projects 合并为四个紧凑入口。
- Tags 不再使用独立一级区块，可作为“浏览全部主题”入口或移至博客相关区域。
- 中文 Wiki 仍指向站内 Wiki；英文保持现有外部 QA Wiki 策略。
- 保留 main 新增的移动端 Header 快捷入口，不在首页重构中修改其 Blog、Wiki、Prompts 三项结构。

## 6. QA Skills 页面设计

### 6.1 页面顺序

1. Hero 与资源状态。
2. 三个新手入口。
3. 搜索与筛选。
4. 推荐 Skills。
5. 快速开始。
6. 生命周期。
7. 全部分类。

### 6.2 新手入口

- `我知道要做什么`：滚动到搜索和筛选。
- `我不知道选哪个`：打开 `discover-testing` 详情页。
- `我想按阶段浏览`：滚动到生命周期。

入口必须使用普通链接或锚点，关闭 JavaScript 后仍可使用。

### 6.3 Hero 数据表达

- `38 个 Skills`：由当前语言下的 Skills 数据计算。
- `支持 6 个 AI 工具`：由统一工具列表或安装器数据计算，页面不得直接维护数字 6。
- `38 个 Skills 包含评测用例`：由 `hasEvals` 计算。
- `最近同步 2026-08-10`：由 Skills 的 `updatedAt` 最大值计算。

增加简短说明：Evals 表示技能包含可回归的评测用例，不自动代表当前所有运行结果通过。

### 6.4 推荐 Skills

首批固定推荐 slug：

- `discover-testing`
- `requirements-analysis`
- `test-case-writing`
- `test-strategy`
- `bug-reporting`
- `daily-testing-workflow`

如果对应语言内容缺失，应跳过该项，不生成失效链接。推荐区使用现有 Skill 数据渲染，不建立新的内容副本。

### 6.5 卡片描述

卡片优先使用现有结构化描述。对类似“需要在真实项目里处理 X 相关任务”的低信息描述，页面层可以生成更清晰的回退文案，但不能批量改写内容源。

长期标准为：

> 使用时机 + 关键输入 + 核心产出

本阶段只针对首页推荐和低质量通用描述建立有限映射，避免扩大为 76 个 Markdown 文件的内容重写项目。

### 6.6 搜索和筛选

保留现有客户端筛选，补充：

- 搜索结果数量。
- 当前筛选状态的可访问文本。
- 清空筛选继续保留。
- Evals 筛选使用“包含 Evals”或“Has Evals”，避免暗示运行结果。

## 7. Prompts 页面设计

### 7.1 Hero

中文标题改为 `软件测试提示词库`，副标题说明这是面向 QA 任务的专业 AI Prompts。英文继续使用 `QA Prompt Library`。资源数量从 collection 计算，不再使用固定的 `60+`：当前每种语言为 90 个 Prompt、15 个测试类型和 3 个工作流。

### 7.2 任务类型入口

保留 15 个测试类型卡片。卡片描述不再直接展示“X 标准提示词”，而应描述产出，例如：

- 需求分析：识别信息缺口、业务规则和测试风险。
- 测试用例：从测试场景生成带优先级的结构化用例。
- 缺陷上报：整理复现步骤、实际结果、预期结果和影响范围。

本阶段优先通过页面映射改善 15 个类型描述，不批量修改 90 个 Prompt 文件。

### 7.3 六种版本选择指南

默认推荐 Standard。其他版本只提供简短使用提示，不宣称效果优劣：

| 版本 | 使用提示 |
| --- | --- |
| Standard | 默认选择，结构完整、容易直接使用。 |
| ROSES | 适合需要明确角色、目标、场景和步骤的任务。 |
| LangGPT | 适合需要严格角色、约束和结构化输出的任务。 |
| ICIO | 适合输入条件和输出边界清楚的任务。 |
| CRISPE | 适合需要上下文、角色、洞察和迭代调整的任务。 |
| RISE | 适合需要分步执行和结果检查的任务。 |

### 7.4 正确的快速开始

删除 `_EN.md` 和 `_Lite.md` 说明，替换为：

1. 选择测试任务。
2. 默认使用 Standard，需要特定结构时再选择其他版本。
3. 准备需求、接口、用户故事或缺陷信息。
4. 将 Prompt 与输入材料交给 AI 助手。
5. 人工复核假设、遗漏、风险和不可验证结论。

### 7.5 输入—输出案例

增加三个折叠或紧凑案例：

- 需求文档摘要 → 风险清单与测试场景。
- OpenAPI / 接口说明 → API 测试方案。
- 缺陷原始信息 → 标准 Bug Report。

案例只展示输入字段和输出结构，不嵌入真实客户数据，不声称 AI 输出已通过人工验证。

### 7.6 AI 输出质量提醒

在工作流前增加短提示：

- AI 输出不是最终测试结论。
- 缺失信息和假设必须显式标注。
- 不允许编造接口、环境、数据、覆盖率、SLA 或合规结论。
- 安全、生产发布和合规判断必须由人员复核。

## 8. 数据与组件边界

### 8.1 页面数据

继续使用 Astro collection 和现有 `getQASkillsGrouped()`。新增的页面配置应放在专用数据文件中，避免三个 `.astro` 文件继续扩大：

- `src/data/homeTaskEntries.ts`：首页任务入口和轻量案例的中英文配置。
- `src/data/promptLibrary.ts`：15 类 Prompt 展示文案、六种版本指南和案例配置。
- `src/data/qaSkillLibrary.ts`：推荐 Skill slug、工具列表和低信息描述回退映射。

这些文件只包含显示配置，不复制 Markdown 正文，不引入新的持久化来源。

### 8.2 组件拆分

为避免首页和两个索引页继续增长，只抽取具有独立职责且会被清晰测试的组件：

- `src/components/home/HomeTaskNavigator.astro`
- `src/components/home/CoreCapabilities.astro`
- `src/components/home/HomeProofAndCases.astro`
- `src/components/qaskills/QASkillStarterPaths.astro`
- `src/components/qaskills/RecommendedQASkills.astro`
- `src/components/prompts/PromptVersionGuide.astro`
- `src/components/prompts/PromptExamples.astro`
- `src/components/prompts/AIOutputNotice.astro`

上述组件是本方案确定的页面边界。公共按钮、卡片和排版继续复用现有样式，不再抽取新的通用 UI 组件。

## 9. SEO、可访问性与错误处理

### 9.1 SEO

- 首页、Skills、Prompts 分别保持唯一、描述性的 `<title>` 和 description。
- 保留现有 CollectionPage、ItemList 和 breadcrumbs 结构化数据。
- 页面统计与 ItemList 数量必须来自同一批 collection 数据。
- 不改变现有 URL、slug、canonical 和语言替代链接。

### 9.2 可访问性

- 每页只保留一个内容级 H1；站点品牌不得造成重复页面主标题语义。
- 锚点跳转目标可以获得清晰 heading。
- 卡片列表继续使用 `ul` / `ol` 语义。
- 搜索结果数量使用 `aria-live="polite"`，不在每次按键时抢夺焦点。
- 390px 宽度下按钮触控区域不小于现有尺寸，页面无水平滚动。

### 9.3 数据缺失处理

- 推荐 Skill 或 Prompt 不存在时跳过该卡片，并在测试中阻止已知推荐项缺失。
- 日期为空时不显示“最近同步”，而不是输出 `-`。
- 统计值为 0 时仍展示真实数字，不替换为营销型模糊数字。

## 10. 测试设计

### 10.1 单元测试

- 任务入口和推荐 slug 在双语 collection 中均存在。
- Prompt 数量、测试类型数量和版本集合从内容源正确计算。
- Skills 工具数量来自配置数组长度，不存在页面硬编码。
- 页面源码不再包含 `_EN.md`、`_Lite.md` 和固定 `60+`。
- 首页标题不会与站点标题重复拼接。

### 10.2 E2E

中文和英文分别验证：

- 首页两个主 CTA 指向当前语言的 Skills 和 Prompts。
- 首页保留 Blog、Wiki、QA 工具三种内容模式，QA 工具卡能分别到达 Skills 与 Prompts。
- 首页六个任务入口可访问。
- `home_entry_click` 对 Blog、Wiki / AI Wiki、Prompts、QA Skills 生成正确的 `entry_name`，并包含 `lang` 与 `session_id`。
- Skills 三个新手入口可以到达搜索、`discover-testing` 和生命周期。
- 搜索、分类、Evals 筛选、清空筛选继续工作。
- Prompts 版本指南包含六种版本，Standard 被标记为默认。
- Prompt 类型卡和三个 workflow 链接可访问。
- 390px 下首页、Skills 和 Prompts 不出现水平滚动。

### 10.3 构建与检查

至少执行：

```bash
npm test
npm run build
cd tests && npm run test:unit
cd tests && PLAYWRIGHT_BASE_URL=http://127.0.0.1:4327 npm run test:e2e -- e2e/specs/apple-home.spec.ts e2e/specs/tracking-contract.spec.ts e2e/specs/header.spec.ts e2e/specs/qaskills.spec.ts e2e/specs/responsive.spec.ts e2e/specs/seo.spec.ts
```

E2E 必须使用当前工作区构建和独立预览端口，不能依赖可能过期的默认 localhost 服务。

## 11. 实施顺序

1. 建立共享页面数据配置和对应单元测试。
2. 修复 title、过期文案和硬编码统计等正确性问题。
3. 重构 Prompts 页面，优先解决使用说明和版本选择。
4. 重构 QA Skills 页面，优先建立新手路径和推荐区。
5. 重构首页，将内容收敛为五个一级区块，同时保留并调整 main 的三张主入口卡。
6. 扩展首页埋点并更新现有 `apple-home.spec.ts`、`tracking-contract.spec.ts` 和相关双语 E2E。
7. 完成移动端验证和 SEO 检查，确认 Header 快捷入口、搜索和 Footer 未被首页改动影响。

每一步必须独立可构建、可测试，并避免同时修改无关页面。

## 12. 风险与控制

- **首页收敛导致旧入口曝光下降：** 所有频道仍保留在“继续探索”、主导航或 Footer，不删除路由。
- **覆盖 main 新增交互：** 三张主入口、首页埋点和移动端 Header 快捷入口均作为现有行为契约保留，修改对应结构时必须同步更新现有测试，而不是删除断言。
- **静态映射与内容源再次漂移：** slug 存在性和统计一致性由单元测试约束。
- **中英文文案不同步：** 数据配置必须使用显式 `en` / `zh-cn` 对象，测试验证两个键均存在。
- **页面组件拆分过度：** 只拆独立、可命名、可测试的区块，不建立通用万能卡片系统。
- **Evals 表达过度承诺：** 本阶段只声明“包含评测用例”，运行状态只有在取得真实验证证据后才能展示。

## 13. 完成定义

- 三个页面按本设计完成内容和结构调整。
- 中文、英文、桌面、移动端关键路径均验证。
- 原有路由、SEO、内容 collection、导航和 Footer 不被破坏。
- 所有统计由数据计算或统一配置提供。
- 测试覆盖正确性、主要交互和移动端无横向溢出。
- 构建与相关测试实际通过，结果在交付说明中明确列出。
