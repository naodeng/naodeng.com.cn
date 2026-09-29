# Proofline 全站主题改造设计

> **Proofline — A QA-inspired editorial system built around evidence, signals, and clarity.**

## 状态

用户已确认主题名称为 Proofline，视觉参考 AIHOT 风格，并要求 dsh-qa、AI Test Auditor、Guild 与内容页面使用同一套主题。本文档用于实现前评审；Docs 旧模板明确不纳入本次改造。

## 目标

将现有 Astro 双语内容站从“蓝紫色、玻璃卡片、页面局部风格叠加”收敛为统一的 Proofline 设计系统：

- Proofline 的视觉方向参考 AIHOT 的编辑型 AI 情报站，而不是复制其页面或内容；
- 所有页面族共享同一套浅色/深色主题、字体、间距、边框、控件和交互状态；
- 解决前一轮 review 中确认的 Wiki/AI Wiki 重复信息架构、英文移动端布局、页面留白、卡片同质化和主题 token 不一致问题；
- 保留所有现有路由、双语路径、内容链接、SEO 入口和产品功能；
- 不把 Docs 旧模板占位内容误判为需要补齐的产品内容。

## 设计原则

1. **统一主题，不强制统一页面模板**：所有页面使用同一套视觉语言，但 Blog 仍以阅读为中心，Wiki/Prompts/QA Skills 仍以探索为中心，产品页仍以产品信息为中心。
2. **编辑型信息设计优先**：使用栏目线、细分割线、编号、统计带和内容节奏制造层次，减少依赖阴影、渐变和圆角卡片。
3. **青绿色单一强调色**：不再使用蓝紫色、紫色 glow 或多套产品强调色作为默认主题；产品差异通过内容、标签、图形和信息结构体现。
4. **浅色与深色是同一系统**：两种主题共享结构、间距和对比关系，切换不改变布局，也不产生孤立的深色区块。
5. **内容事实不重写**：本次不批量改写 Blog、Wiki、Prompt、QA Skill 的事实内容、标题、日期、链接或双语含义；内容问题只做必要的状态收口和未完成标识治理。

## 范围

### 纳入改造

- 全局 CSS token、Base theme-color、代码块、focus ring、主题持久化；
- Header、Footer、首页和 PageHeadline；
- Blog、Archive、Series、Tags、Projects、Resources、About、Links、Privacy、Copyright、Sponsor；
- Wiki、AI Wiki、Guild、Prompts、QA Skills、AI Native QA Weekly；
- dsh-qa、AI Test Auditor；
- 404、搜索、移动导航、主题切换、列表筛选、TOC 和主要空状态；
- 前一轮 review 发现的 Bruno TODO、Links 空占位、Prototype 路由治理和英文 Wiki 外部重定向审查。

### 明确不纳入

- `src/content/docs/` 中旧网站模板的占位内容；
- 路由、域名、部署配置和现有外部链接的无理由变更；
- 新增 UI 框架、设计系统依赖、图标库或运行时依赖；
- 通过虚构内容填充 Bruno TODO；
- 将所有页面强制改成 AIHOT 参考站的固定左侧导航结构。

### 页面覆盖矩阵

本矩阵是实现范围的闭合清单；实现计划中的任务必须明确修改或验证每一行，不能把页面留给“收尾扫描”自行发现。

| 页面/能力族 | 关键源码 | 计划任务 | 验收入口 |
| --- | --- | --- | --- |
| 全局主题与共享交互 | `src/styles/base.css`、`src/styles/layout.css`、`src/layouts/Base.astro`、`src/components/{Header,Footer,PageHeadline,TableOfContents,PaginationNav,SearchModal}.astro` | Task 1–2 | `theme.spec.ts`、`header.spec.ts`、`footer.spec.ts`、`interaction.spec.ts`、`search.spec.ts` |
| 首页与集合页 | `src/pages/[lang]/index.astro`、`archive`、`projects`、`resources.astro`、`series`、`tags`、`about.astro` | Task 3 | `home.spec.ts`、`editorial-review.spec.ts`、`responsive.spec.ts` |
| 法律、工具与错误页 | `privacy.astro`、`copyright.astro`、`sponsor.astro`、`sitemap.astro`、`src/pages/{404,en/404,zh-cn/404}.astro` | Task 3 | 新增 `site-pages.spec.ts` |
| Wiki 与 AI Wiki | `src/pages/[lang]/wiki`、`src/pages/[lang]/AIWiki`、`src/layouts/Docs.astro`、`src/components/DocsSidebar.astro` | Task 4 | Wiki、搜索、相关术语和响应式测试 |
| Blog、Prompts、QA Skills、Weekly | `src/pages/[lang]/blog`、`prompts`、`qaskills`、`ai-native-qa-weekly` | Task 5 | `blog-editorial.spec.ts`、`prompts.spec.ts`、`qaskills.spec.ts`、新增 `weekly.spec.ts` |
| Guild | `src/components/guild`、`src/pages/[lang]/guild` | Task 6 | `guild.spec.ts` 与响应式测试 |
| dsh-qa、AI Test Auditor | `src/pages/[lang]/dsh-qa`、`src/pages/[lang]/ai-test-auditor` | Task 7 | `dsh-qa.spec.ts`、新增 `ai-test-auditor.spec.ts` |
| 内容状态与特殊路由 | Bruno 双语内容、`links.astro`、`qaskills/detail-prototype.astro`、英文 Wiki redirect | Task 8 | `links.spec.ts`、新增 `wiki-redirect.spec.ts`、Prototype 隔离单元测试 |

`src/content/docs/` 只允许被验证为未修改；Docs layout 的表面迁移归 Task 4，但不改变其中的旧模板内容。

## 主题系统

### 语义色板

| 语义角色 | 浅色 | 深色 |
| --- | --- | --- |
| 页面背景 / `--color-base` / `--color-canvas` | `#faf9f6` | `#13191c` |
| 内容表面 / `--color-surface` | `#ffffff` | `#1a2226` |
| 抬升表面 / `--color-surface-elevated` | `#ffffff` | `#202b2f` |
| 主文字 / `--color-main` | `#202a30` | `#e7eceb` |
| 次级文字 / `--color-text-secondary` | `#5c6b6d` | `#a8b6b5` |
| 三级文字 / `--color-text-tertiary` | `#738184` | `#819390` |
| 普通边框 / `--color-border` | `#dfe4e1` | `#344247` |
| 强化边框 / `--color-border-strong` | `#b9cfcb` | `#4d686c` |
| 强调色 / `--color-theme` | `#176b75` | `#12ccd8` |
| 焦点强调 / `--color-theme-focus` | `#0f5962` | `#7de6ec` |
| 代码表面 / `--color-code-surface` | `#f1f5f3` | `#202b2f` |

实现时使用上述语义变量。`--color-theme` 是稀缺的信号色，只用于 CTA、链接交互、当前项、状态和少量指标/标记；正文标题、普通导航文字、默认表面和普通边框使用中性色，不把强调色扩展成页面主色。`--color-theme-on-dark` 浅色取 `#ffffff`、深色取 `#13191c`；`--color-theme-soft` 与 `--color-theme-soft-hover` 分别使用以下固定公式：浅色为 `color-mix(in srgb, #176b75 10%, #ffffff)` / `color-mix(in srgb, #176b75 16%, #ffffff)`，深色为 `color-mix(in srgb, #12ccd8 10%, #13191c)` / `color-mix(in srgb, #12ccd8 16%, #13191c)`。组件不得继续直接引入新的蓝紫色或独立产品主色。

旧 `color-glass-*`、`color-mist-secondary`、`gradient-theme`、`shadow-glass-*` 和 `shadow-product` 可以作为迁移期兼容别名保留，但不计入新主题的默认材质。测试要断言新组件不消费这些别名，而不是要求它们立即从变量表中消失。

### 表面与形状

- 默认表面使用不透明背景、1px 边框和极弱阴影；
- 一般按钮、筛选器和标签不使用 9999px 胶囊形；只有标签、状态和紧凑筛选项保留胶囊形；
- 页面容器使用小半径，主内容面板可使用中等半径，内部控件使用更紧的半径；
- 删除默认 `backdrop-filter`、彩色 glow、紫色渐变和玻璃雾面；
- 使用细线、背景层次和留白表达结构，不用大量浮起卡片表达所有层级。

### 字体与数字

- 继续使用现有 Noto Sans / Noto Sans SC fallback，不新增字体依赖；
- 标题使用更紧的字距和更明确的重量，长标题使用 `text-wrap: balance` 或 `pretty`；
- 正文和文章内容限制在可读宽度；
- 统计数字使用 `font-variant-numeric: tabular-nums`；
- 小标签使用句式或小型标签风格，不把所有标题转成全大写。

## 全局布局与组件

### Header 与 Footer

- 保留现有导航 DOM、语言切换、搜索、主题切换和所有链接；
- Header 采用克制的编辑型顶栏：中性表面、细底线、低噪声 active 状态；
- 移动导航继续使用抽屉，但清理推荐入口与普通导航的重复 Blog；
- Footer 统一使用内容分区和细线，不再使用独立玻璃/渐变视觉；
- 主题切换后的 `meta[name="theme-color"]` 必须与当前实际背景一致；
- 所有交互控件保留可见 focus ring、active/pressed 状态和 reduced-motion 支持。

### PageHeadline 与页面密度

为 PageHeadline 增加或整理内容密度变体：

- 内容型页面可保留较宽松的标题区；
- Archive、Projects、Links、About、Sitemap 等工具/列表型页面使用 compact 标题区；
- 移动端取消不必要的横向负边距和大块空白；
- 页面标题、说明和辅助链接在窄屏统一采用单列布局。

### 卡片、列表与信息带

- 默认卡片改为“内容行/编辑栏目块”优先，只有需要区分层级时才使用卡片；
- Projects、Resources、Prompts、Guild 允许使用不等高、两列或分组列表，避免所有页面都是相同三列卡片；
- 保留现有链接和数据映射，不改变卡片的目的地；
- hover 只改变边框、背景或最多 1–2px 位移，使用明确的 transform/color/border 属性，不使用 `transition: all`；
- 空状态使用明确说明和真实下一步，不能暴露多个“虚位以待”空卡片。

## 页面族应用

### 首页与内容入口

首页采用 Proofline 结构：简洁主标题、强调线、站点用途说明、任务入口、内容统计和探索分区。保留现有 CTA 与链接，不引入 AIHOT 的新闻内容。

### Blog 与长文

- 精选文章改成可伸缩的 editorial lead，英文长标题不得被窄列挤压；
- 普通文章减少卡片阴影，使用细边框、元信息行和清晰的阅读入口；
- 文章正文、标题、代码块、表格、相关链接和 TOC 使用同一套表面与颜色 token；正文标题保持中性，强调色只出现在链接、当前项、状态和操作反馈；
- 保留文章 URL、分享、评论、标签和双语结构。

### Wiki 与 AI Wiki

目标是消除“侧栏完整术语列表 + 主区域再次完整展示”的重复感，同时保留所有术语链接：

- 桌面端侧栏负责搜索、字母/分类和当前项状态；
- 主区域负责按字母或分类展示术语；
- 侧栏不再重复渲染全部主区域内容；
- 移动端侧栏折叠为筛选/跳转控件；
- 详情页仍保留上下文导航、相关术语和本页目录。

### Prompts 与 QA Skills

- 保留任务导向 IA 和筛选能力；
- `/en/prompts/all/` 移动端标题区改为单列，返回链接不再挤压标题；
- Prompts、QA Skills 列表减少相同的三列卡片语法，采用分组信息行与可识别的状态标签；
- 详情页保留输入/输出、复制、变体和右侧目录，但统一面板、按钮和状态样式。

### Guild

Guild 完整迁移到同一 Proofline 主题：

- 保留测试类型、框架、文章层级和现有链接；
- 删除独立蓝紫/玻璃/高圆角视觉；
- 首页统计改为编辑型指标带；
- 框架入口使用分组列表或不等高模块，避免最后一张卡单独掉到下一行；
- 详情页沿用统一的侧栏、正文和 TOC 表面。

### dsh-qa 与 AI Test Auditor

两个产品页也不再保留独立产品主题：

- Hero 使用统一背景、强调线、标题比例和 CTA 语义；
- 版本、能力、流程和安装信息使用统一的指标带、分区线和内容面板；
- 保留产品名称、Logo、版本信息、安装命令、外部链接和产品内容；
- 不再使用各自独立的渐变、蓝紫色、玻璃卡片或不同的主题切换规则。

产品差异只通过内容结构、编号、标签和图形表达，不通过另起一套颜色系统表达。

### Weekly、About、Links、404

- Weekly 周期选择器在英文下应完整显示，长 TOC 在窄屏应可折叠或限制宽度；
- About 使用更紧凑的介绍和统计层级；
- Links 隐藏所有空占位，只保留现有真实友链和已有邮件联系说明作为提交入口；不新增路由或外部目标；
- 404 保留自动返回功能前先确保用户可以读完错误信息，并提供清晰的手动返回入口。

## 内容与路由治理

### Bruno TODO

检查 Guild 和 Blog 中英文 Bruno 内容的 TODO 标题：

- 如果已有正文，替换为与正文相符的描述性标题；
- 如果没有正文，隐藏或移除空章节，不凭空编写事实；
- 保持中英文章节结构一致；
- 不改动其他内容的事实、日期和链接。

### QA Skills Prototype

保留 Prototype 作为明确的实验页面时，必须保持：

- 明显的 Prototype 标识；
- `noindex,nofollow`；
- 不出现在普通内容导航、站点地图或推荐入口；
- 最终方向确定后，再单独决定删除或归档，不在本次主题改造中强行删除。

实现时用 `tests/unit/qaskillsPrototypeIsolation.test.ts` 检查以下现有入口源码不包含 `/qaskills/detail-prototype`：`src/components/Header.astro`、`src/components/Footer.astro`、`src/pages/[lang]/sitemap.astro`、`src/utils/seoUrls.ts`、`src/components/qaskills/RecommendedQASkills.astro`、`src/pages/[lang]/qaskills/index.astro`、`src/components/home/HomeGlassHero.astro`、`src/components/home/HomeCapabilityGuide.astro` 和 `src/components/home/HomeTaskNavigator.astro`。页面自身继续检查 `noindex,nofollow` 与 Prototype 标识。

### 英文 Wiki 外部重定向

检查 `/en/wiki/acceptance-testing/` 的外部重定向是否仍为产品意图：

- 若没有英文本地内容，保留目标并补充明确的链接语义；
- 不因为视觉改造擅自替换外部目标；
- 若未来有对应英文内容，再单独迁移并验证旧链接。

由于当前项目保持静态 Astro 输出且部署配置不在本轮范围，当前验收目标固定为 `/en/wiki/acceptance-testing/` 生成 200 的静态 redirect artifact，并包含指向 `https://ray.run/wiki#acceptance-testing` 的 meta refresh 与 canonical；由 `tests/e2e/specs/wiki-redirect.spec.ts` 直接验证。若未来要求真实 HTTP 3xx，应另开部署/托管配置任务。

## 技术边界

- 继续使用 Astro、现有 scoped CSS 和全局 CSS token；
- 不新增 UI 框架或第三方运行时依赖；
- 优先修改 `src/styles/`、`src/layouts/`、共享组件和页面 scoped CSS；
- 不修改 `dist/`、`node_modules/`、测试产物或部署配置；
- 不批量改写内容文件，除明确的 Bruno TODO 收口；
- 不改变任何已有 href、路由模式和内容集合路径，除非发现明确的死链或空占位需要收口。

## 验证标准

### 自动检查

- `git diff --check`
- `npm test`
- `npm run build`
- `npm run seo:check`
- `npm run wiki:style:check`
- `npm run wiki:integrity:check`
- `cd tests && npm run test:unit`
- `cd tests && npm run test:e2e`

页面族专项验收还必须包含：`cd tests && npm run test:e2e -- specs/site-pages.spec.ts specs/weekly.spec.ts specs/wiki-redirect.spec.ts`，以及 Prototype 隔离单元测试。若某个页面没有独立现成 spec，必须创建对应的专项 spec，不能只依赖全站链接扫描。

### 视觉与交互检查

至少在 375px、390px、768px、1024px、1440px 下验证：

- 中文/英文首页、Blog、Wiki、AI Wiki、Prompts、QA Skills、Guild；
- dsh-qa、AI Test Auditor；
- Weekly、About、Links、404；
- 浅色、深色和跟随系统三种主题偏好；
- 搜索、移动导航、主题切换、侧栏折叠、TOC、复制、空状态和返回路径；
- 无横向溢出、标题截断、不可点击控件和不符合当前主题的孤立颜色。

### 接受标准

1. 所有纳入范围的页面共享同一套 Proofline 主题，且 dsh-qa、AI Test Auditor、Guild 不再是视觉例外。
2. 中文和英文主要路由可访问，现有链接目标没有被无意改变。
3. Wiki/AI Wiki 重复导航明显减少，移动端仍能快速定位术语。
4. 英文 Prompts、Blog、Weekly 的已确认响应式问题消失。
5. 旧蓝紫/玻璃视觉不再作为默认页面表面出现。
6. Docs 旧模板保持不变，不被错误纳入内容改造。
7. 构建、SEO、Wiki 检查和相关 E2E 通过；无法运行的检查必须明确记录原因。

## 风险与取舍

- 全站统一主题会降低三个产品页的独立视觉差异；通过内容结构、Logo、编号和信息层级保留识别，而不是重新引入多色主题。
- Wiki/AI Wiki 导航调整可能影响用户的浏览习惯；实现时必须保留所有术语链接和搜索能力，并用代表性中英文页面验证。
- 取消卡片和阴影可能让页面显得过于平；通过边界线、指标带、背景层次和栏目节奏保持信息层次。
- Bruno TODO 不适合由设计改造阶段编造正文，因此只做标题/空章节治理，新增事实内容应另行提供。
