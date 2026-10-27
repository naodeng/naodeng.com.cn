# 详情页赞助与互动入口实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在博客、QA Skill、Prompt、Prompt 工作流、所有 Guild 教程、测试 Wiki 和 AI Wiki 详情页的既有目录区域加入低调的支持入口与评论跳转。

**Architecture:** `DetailPageActions.astro` 输出并排的“支持 / Support”和“评论 / Comments”链接。`TableOfContents.astro` 提供操作插槽，博客、Prompt、工作流和 Docs 详情页复用；入口位于完整目录列表之后、卡片底部。窄屏目录展开时入口排在完整列表后，折叠时排在目录摘要后；QA Skill 并入自有的本页导航并排在章节列表之后。入口不固定在视口上。`Giscus.astro` 为目标页面提供可聚焦的讨论区锚点。Wiki 与 AI Wiki 将 Markdown 首个页面标题移至路由模板，同时保留原 H1 锚点及后续标题 ID。

**Tech Stack:** Astro 7、TypeScript、Markdown/MDX、Giscus、Vitest、Playwright。

**Spec:** [docs/superpowers/specs/2026-10-27-detail-page-engagement-actions-design.md](../specs/2026-10-27-detail-page-engagement-actions-design.md)

## Global Constraints

- 只改目标详情页和完成该体验所需的共用组件、工具、测试；不改列表页、博客正文、Giscus 讨论映射、每周简报页或全站导航。
- 保持英文和中文页面路径、标签、赞助链接均正确；赞助地址使用 `getRelativeLocaleUrl(lang, "/sponsor/")`。
- 保留 Giscus 反应和 `inputPosition="bottom"`，不承诺滚动到外层锚点后评论输入框已立即可见或可用。
- 目标 Giscus 在 iframe 加载中/失败/配置缺失时显示双语状态提示；只要页面传入讨论锚点 ID，外层锚点始终存在。
- 评论入口使用真实 `#page-discussion` 链接；目标可聚焦且有可见焦点样式，并使用 `--sticky-offset` 避免被固定页头遮住。
- 操作入口并入页面目录底部：博客 / Prompt / 工作流 / Wiki / AI Wiki / Guild 排在 TOC 列表之后，QA Skill 排在本页导航列表之后；手机与平板宽度下入口仍可见。
- 不新增固定悬浮评论入口；保留“回到顶部”自身行为。
- 评论链接跳转到 `#page-discussion` 并将焦点交给讨论区外层；遵守 sticky offset 和 `prefers-reduced-motion`。
- Wiki / AI Wiki 保持源 Markdown 不变；模板显示 Markdown 首个 H1 的原可见文字和旧锚点 ID，保留其他标题锚点和目录行为。SEO/侧栏等 `pageTitle` 保持现有用途。
- Git 交付按用户最新明确指示执行；提交前只纳入本功能设计、实现和验证涉及的文件。

## Review Focus

- 两个入口是否位于 TOC 列表或 QA Skill 自有导航列表之后，窄屏展开目录时是否位于完整列表之后、折叠时是否位于目录摘要之后。
- 1440px、834px、390px 断点的顺序、可见性、焦点行为和横向溢出；跳转焦点落在 Giscus 外层而非跨域 iframe 内部。
- Wiki / AI Wiki 标题文本和 slug 是否来自源 H1，尤其 frontmatter `pageTitle` 与源标题不一致时；重复标题编号、显式 ID、缺失 H1 回退，以及目录 H2/H3 锚点是否保持。
- Giscus iframe 延迟、脚本失败、配置缺失、长讨论和窄屏下的状态反馈；不以本地静态检查推断 GitHub 登录或跨域 iframe 内部行为。
- 1440px、834px 和 390px 下入口与 TOC / 本页导航的分组、宽度和触控尺寸；长段落、代码块和移动导航下不遮挡正文或导航。

### Task 1: 建立 Giscus 锚点与共用操作组件

**Files:** Create `src/components/DetailPageActions.astro`; modify `src/components/TableOfContents.astro`, `src/layouts/Docs.astro`, and `src/components/Giscus.astro`; remove the no-longer-used floating-link utility and its unit test.

- [x] `DetailPageActions.astro` 按当前语言显示“支持 / Support”和“评论 / Comments”，使用轻边框、44px 触控高度、真实链接和键盘焦点样式；不渲染固定入口。
- [x] `TableOfContents.astro` 提供可选操作插槽：TOC 存在时嵌入其面板，只有操作入口时也能显示最小面板。
- [x] Docs 布局把操作插槽提供给 wiki、AI Wiki、Guild 详情；QA Skill 复用组件并嵌入自有章节导航。
- [x] 评论链接使用 `#page-discussion`；点击后将焦点交给带 `tabindex="-1"` 的讨论区外层，不尝试聚焦 Giscus iframe 内部。
- [x] 给 `Giscus.astro` 增加可选讨论区 ID；传入 ID 时无论 Giscus 配置是否启用都渲染锚点外层。外层设 `tabindex="-1"`、焦点样式和 sticky scroll margin；本次目标页显示双语 `role="status"` 加载提示，iframe 加载成功后移除，脚本失败或进入视口后 15 秒仍无 iframe 时显示暂不可用提示，晚到的 iframe 加载后恢复成功状态。
- [x] Giscus 配置缺失时只保留目标页锚点和提示、不下载客户端及主题同步脚本；非目标 Giscus 页面的 aria-label 与脚本行为保持原样。
- [x] 保持每个详情页现有的 Giscus 加载策略、反应启用和评论框位置不变；目标页继续使用 `inputPosition="bottom"`。配置缺失时状态可读、锚点仍存在、外层 CTA 不失效，且不加载 Giscus 外部脚本。
- [x] 移除旧的讨论浮动入口显示逻辑和对应单元测试，保留 ScrollToTop 现有实现。

**Verification:** 新增单元测试通过；检查组件输出语义链接、双语标签、锚点属性和 `prefers-reduced-motion` 分支。此任务不改变任何页面路由。

### Task 2: 接入所有目标详情模板

**Files:** Modify `src/pages/[lang]/blog/[...id].astro`, `src/pages/[lang]/qaskills/[skillSlug].astro`, `src/pages/[lang]/prompts/[testingType].astro`, `src/pages/[lang]/prompts/workflows/[workflowType].astro`, and `src/pages/[lang]/guild/[...slug].astro`.

- [x] 先创建 `tests/e2e/specs/detail-page-engagement-actions.spec.ts` 的基础用例，覆盖中文和英文代表页，验证 Support 链接的 locale 路径、“评论”标签、本页 `#page-discussion` 目标和目标 Giscus 外层属性。
- [x] 运行该新 E2E 用例，确认当前页面尚无入口导致预期失败。
- [x] 将 `DetailPageActions` 并入既有导航：博客、Prompt、Prompt 工作流复用 TOC 操作插槽；QA Skill 放入自有的章节导航；Guild、Wiki、AI Wiki 通过 Docs 布局复用 TOC 操作插槽。没有 TOC 标题时保留紧凑入口。
- [x] 在每个目标模板的 Giscus 实例传入唯一页面锚点 `page-discussion`，并给 `DetailPageActions` 传递对应语言。
- [x] 确认博客自动化测试文章由博客详情模板覆盖；确认 Guild 路由的 API、UI、性能等所有教程类型均使用共用模板。
- [x] 确认每周简报等非目标 Giscus 页面仍不显示新的赞助或评论入口。
- [x] 运行基础 E2E 用例，修复路径、插入位置或语言标签问题。

**Verification:** 中英文代表页上的 Sponsor 链接均由 locale URL helper 生成，讨论锚点只指向当前页自己的 Giscus 外层；列表页和每周简报没有新增入口。

### Task 3: 将 Wiki / AI Wiki 标题移入模板并保留锚点

**Files:** Modify `src/pages/[lang]/wiki/[...slug].astro`, `src/pages/[lang]/AIWiki/[...slug].astro`, `src/utils/markdownPresentationRemark.mjs`, `tests/unit/markdownPresentation.test.ts`; create `src/utils/markdownTitleMetadata.mjs` and focused unit coverage; declare the directly used Markdown parser and slugging packages in `package.json` and update `package-lock.json`.

- [x] 先为 Wiki / AI Wiki 写标题迁移回归用例：模板 H1 沿用原 ID 和原可见文字；frontmatter 标题不同的条目维持当前 Markdown H1 显示；重复标题、显式 ID、H2/H3 锚点和目录项保持不变。
- [x] 运行相关单元测试，确认当前 Wiki / AI Wiki 没有模板标题和新锚点行为。
- [x] 在 Wiki Markdown 转换中先按现有顺序归一化额外 H1，再遍历全部标题；使用相同的 remark-parse、GFM 和 smartypants 处理后，用同一个 `GithubSlugger` 按旧文档顺序计算并写入没有显式 ID 的标题 `data.hProperties.id`，然后移除首个页面 H1。保留源文件显式 ID，不让下游 `rehype-slug` 重新编号。
- [x] 在同一次 Astro Markdown 转换中将首个 H1 的原可见文本和 slug 写入 `remarkPluginFrontmatter`；路由模板从 `render(entry)` 读取，避免重复解析并与实际输出使用同一标题/slug。metadata `pageTitle` 仍供 SEO、面包屑、侧栏、结构化数据使用。没有源 H1 时显示 `pageTitle`，不设置旧 H1 ID。
- [x] Wiki / AI Wiki 详情页启用 Docs 布局中的目录操作插槽，并给各自 Giscus 外层传入 `page-discussion`。
- [x] 用实际 Markdown + `rehype-slug` 的处理链测试迁移前后标题 ID；覆盖标题与后续 H2 同名、多个重复标题、显式 ID、标题缺失、Wiki 额外 H1，以及行内强调/代码/链接文本。
- [x] 增加已确认不一致的实页回归：`/zh-cn/wiki/test-automation/`、`/en/AIWiki/qwen/`、`/zh-cn/AIWiki/slash-commands/`，确认原可见 H1 不被 frontmatter 覆盖，旧标题深链仍落到模板 H1。
- [x] 检查 `renderedHeadings`、Wiki / AI Wiki 目录输入和 `DocsLayout` 的标题过滤；确认 Wiki 仅包含现有 H2/H3 目录项且 slug 不变，AI Wiki 保留当前目录行为。

**Verification:** 中英文 Wiki 和 AI Wiki 的模板 H1 `id` 与改动前相同；重复标题和其他标题 ID 未漂移，源 Markdown 未被批量改写。

### Task 4: 验证响应式布局、焦点行为与页面覆盖

**Files:** Extend `tests/e2e/specs/detail-page-engagement-actions.spec.ts`; make only necessary layout fixes in `src/components/DetailPageActions.astro`, `src/components/TableOfContents.astro`, `src/layouts/Docs.astro`, and the target route templates.

- [x] 扩展 E2E 覆盖：博客、QA Skill、Prompt、Prompt 工作流、Guild API/UI/性能教程、Wiki、AI Wiki；对可用的页面类型分别检查中英文路由。
- [x] 覆盖桌面、平板、手机宽度：入口在每种页面的 TOC / 本页导航区域内可见，折叠目录下仍能看见操作链接，页面不产生横向溢出。
- [x] 覆盖键盘和无障碍：操作链接名称清楚、焦点样式可见；激活评论链接后焦点落在讨论区外层。断言目标详情页和每周简报都没有固定讨论浮动入口。
- [x] 覆盖 Giscus 状态：锚点在配置缺失时仍存在且不加载外部脚本；加载中状态会被读出，iframe 加载成功后消失，脚本失败/超时显示不可用状态、超时后 iframe 晚到则恢复；反应仍启用且 `inputPosition="bottom"` 未变。测试不依赖 GitHub 登录或外部 iframe 的可变内容。
- [x] 在 1440px、834px 和 390px 检查支持/评论入口的目录分组、触控高度、标签换行、页面宽度，以及长正文与移动导航状态。
- [x] 修正 `tests/e2e/specs/scroll-to-top.spec.ts` 的定位器为 `#scroll-to-top`，移除“找不到按钮就 return”的静默跳过；按现有 opacity / pointer-events 行为断言显隐。
- [x] 当前没有配置 Giscus 外部评论源；定向 E2E 因配置为空跳过外部 iframe 场景，锚点、焦点转移和加载占位行为已由其余用例验证。
- [x] 运行 `npm run build`、`cd tests && npm run test:unit`，以及相关详情页 E2E；构建页面数量与具体用例结果以本次最终验证记录为准。
- [x] 运行 `git diff --check`；审查最终 diff 和 `git status --short`，确认未修改 `dist/`、每周简报页面、无关内容或用户已有改动。

**Verification:** 构建、单元测试和相关 E2E 结果明确记录；1440px、834px 和 390px 页面无明显遮挡或错位；Giscus 输入框顺序和页面覆盖范围符合设计稿。
