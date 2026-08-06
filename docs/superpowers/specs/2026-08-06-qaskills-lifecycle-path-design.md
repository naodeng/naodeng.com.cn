# QA Skills 首页：软件生命周期路径图

> 日期：2026-08-06  
> 状态：已实现（2026-08-06）  
> 范围：`/[lang]/qaskills/` 首页新增生命周期路径图区块；skill 节点可跳转详情页  
> 相关：现有首页分类/搜索（`2026-08-05-qaskills-pages-redesign-design.md`）保持不变

## 1. 目标与成功标准

### 1.1 目标

在 skills 首页提供一条**从软件测试生命周期从前到后**的路径图，让用户按阶段发现会调用到的 skills，并一键进入详情页。

### 1.2 成功标准

- Hero 与搜索筛选之间出现路径图区块（中英均有）
- 6 个阶段按生命周期顺序展示；每阶段含多个可点击 skill 链接
- 链接指向 `/[lang]/qaskills/[slug]/`，可打开对应详情页
- Type skill 为主；有对应 Plus 的挂在该阶段末尾并有视觉区分
- 只展示父级 skill，不展示工具变体（Bruno / k6 等）
- 桌面端为横向阶段列；移动端竖向叠放，流向仍可读
- `npm run build` 通过；中英页面均可打开并点击节点

### 1.3 非目标

- 不把 workflow skill（daily / sprint / release 等）放进路径图
- 不把工具专属变体放进路径图（仍只在下方分类列表）
- 不改详情页、搜索筛选逻辑、内容同步脚本
- 不做 SVG/画布式可交互流程图，不做展开折叠复杂交互
- 不为路径图单独引入 JS（纯静态链接即可）

## 2. 已确认决策

| 项 | 选择 |
| --- | --- |
| 内容形态 | 分阶段多 skill（非单节点流水线） |
| Skill 覆盖 | Type 为主，阶段末尾挂相关 Plus |
| 工具变体 | 不进路径图，只挂父级 |
| 页面位置 | Hero 与搜索筛选之间 |
| 布局 | 横向阶段列（列内 skill 竖排，列间箭头）；移动端竖叠 |
| 视觉 | 沿用 qaskills 首页现有变量与风格 |

## 3. 阶段与 skill 挂载

| # | 阶段（zh-cn） | 阶段（en） | Type slugs | Plus slugs |
| --- | --- | --- | --- | --- |
| 1 | 需求与策略 | Requirements & Strategy | `requirements-analysis`, `test-strategy` | `requirements-analysis-plus`, `test-strategy-plus` |
| 2 | 用例与评审 | Case Design & Review | `test-case-writing`, `test-case-reviewer` | `testcase-writer-plus`, `test-case-reviewer-plus` |
| 3 | 功能与兼容 | Functional & Compatibility | `functional-testing`, `manual-testing`, `mobile-testing` | — |
| 4 | 接口与自动化 | API & Automation | `api-testing`, `automation-testing` | — |
| 5 | 质量专项 | Quality Specialties | `performance-testing`, `security-testing`, `accessibility-testing` | — |
| 6 | 缺陷、报告与审查 | Defect, Reporting & Review | `bug-reporting`, `test-reporting`, `code-review`, `ai-assisted-testing` | — |

**解析规则：** 用当前语言已加载的 skills 按 slug 取展示名与链接；某 slug 缺失时跳过该节点，不报错、不留空链。

## 4. UI 结构

```text
Hero
  ↓
[生命周期路径图]   ← 新增
  标题 + 一句说明
  阶段列 → 阶段列 → …（桌面横向 / 移动竖向）
    阶段标题
    [type skill 链接]
    [plus skill 链接 · 弱样式]
  ↓
搜索 / 筛选
  ↓
快速开始 / 分类列表（不变）
```

### 4.1 文案（示意）

- 标题 zh：`软件测试生命周期路径`；en：`Software Testing Lifecycle Path`
- 说明 zh：`按生命周期阶段查看会用到的 Skills，点击进入详情。`  
  en：`Browse skills by lifecycle stage. Click any skill to open its detail page.`

### 4.2 样式约定

- 阶段列：浅边框/背景容器，与现有卡片圆角、间距一致
- Type 链接：实线/实心弱底，可辨认为可点
- Plus 链接：虚线边或 `Plus` 小标，对比度略弱但不影响可点性
- 列间：箭头 `→`（移动端可改为 `↓` 或省略）
- 使用现有 CSS 变量（`--sp-*`、`--color-theme` 等），不新开主题色板

## 5. 实现要点

### 5.1 数据

在 `src/utils/qaskills.ts` 导出路径阶段配置（常量数组），例如：

```ts
LIFECYCLE_PATH_STAGES: Array<{
  key: string;
  title: { "zh-cn": string; en: string };
  typeSlugs: string[];
  plusSlugs: string[];
}>
```

首页用 `getQASkills` / 已有 `allSkills` 建 `slug → skill` 映射后渲染。配置与现有 `TESTING_TYPE_SUBGROUPS` 可并存；路径图用独立常量，避免把「展示父级」逻辑硬塞进分类分组。

### 5.2 页面

改动主文件：`src/pages/[lang]/qaskills/index.astro`

- 在 Hero 后插入 `<section>`（带稳定 `id`，如 `lifecycle-path`，便于锚点）
- 双语文案写入现有 `text` 对象
- 每个 skill 使用 `getRelativeLocaleUrl(lang, `/qaskills/${slug}/`)`

### 5.3 响应式

- 与首页现有断点对齐：默认横向 flex，必要时 `overflow-x: auto`
- `max-width: 920px`：改为竖向叠放（`flex-direction: column`），列间箭头可改为 `↓` 或隐藏

## 6. 测试与验证

- `npm run build` 通过
- 手动打开 `/zh-cn/qaskills/` 与 `/en/qaskills/`：区块位置正确；抽点若干节点进详情
- 窄视口下阶段竖叠、链接可点、无明显遮挡
- 不要求新增 e2e（除非后续回归需要）；若有现成 qaskills 首页单元/断言可顺带覆盖路径配置常量

## 7. 风险与边界

- Plus 与 type 展示名较长时，阶段列可能偏高：靠竖排 + 横滑/竖叠消化，不截断链接文字到不可读
- 内容同步后若某 slug 更名/删除：节点自动跳过；需在同步或完整性检查中另行感知（本次不做额外告警 UI）
