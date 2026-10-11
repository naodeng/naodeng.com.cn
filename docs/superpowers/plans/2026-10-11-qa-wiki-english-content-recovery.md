# QA Wiki 英文内容恢复与双语核对实施计划

> **执行方式：** 由当前会话按本计划逐项实施；内容按字母顺序分批核对。
> **目标：** 移除英文 QA Wiki 对已停止运营外站的跳转依赖，在本站发布英文索引和词条，并以来源英文版为基准逐篇检查、补齐中英文差异。
> **依据：** 用户 2026-10-11 的请求及补充说明；项目规则见仓库 `AGENTS.md`。
> **基线：** 新分支 `codex/qa-wiki-english-content-review`，从 `origin/main` 的 `70a865279` 建立。来源仓库当前 HEAD 为 `ea02db6291f1`，英文和中文词条目录相对 `f88411e10b07` 未变化。

## 已确认的内容盘点

- 来源仓库 `~/awsomeCode/QA-Glossary-Wiki` 有 224 篇英文词条和 224 篇中文词条，文件名一一对应。
- 本站 `src/content/wiki/` 有 226 篇中文词条；相比来源库多出 `back-end-testing`、`positive-testing` 两篇。
- 英文词条页、导航、Wiki 首页、SEO 构建检查和 E2E 测试目前仍依赖已停运来源站；仓库内博客和历史计划文档也保留了来源站链接或旧行为记录。
- 本站现有许可为 PolyForm Noncommercial License 1.0.0（以英文版权页和仓库 LICENSE 为准）。用户已明确确认其持有词条内容权利并授权按本站 PolyForm 许可发布；保留 QA Glossary Wiki 内容来源署名，Wiki 面向读者展示的本站许可信息与网站其余内容一致。来源站的旧跳转不再承担内容展示或导航功能。

## 实施方案

英文内容放在 `src/content/wiki/en/*.md`，现有中文文件继续留在 `src/content/wiki/*.md`，中文 URL 保持不变。把现有中文 collection 限定为根目录文件（`*.md`），另建以 `src/content/wiki/en` 为 base 的英文 collection，避免同一英文文档被两个 collection 重复读取。为英文内容建立明确的 collection 和语言路由，让 `/en/wiki/`、英文词条页、侧栏、搜索、规范 URL 与站点地图都使用本站内容。英文索引和词条页应可索引、使用本站自指 canonical，并与中文配对页互设 hreflang；详情页语言切换应落到同 slug 的对译页面。英文正文以 224 篇来源英文原文为基础；两篇来源库没有的本站词条单独核实，并从现有中文内容整理英文版本，不静默遗漏。

随后按英文词条逐篇审阅内容和格式，再对照对应中文页面，修复确认的遗漏、错译、格式问题和失效词条链接。按字母顺序分批推进，每批约 10 篇；英文是配对词条的主要审阅依据。事实性修订以来源原文或官方一手资料为依据，无法确认的条目标记待核实。正文中的术语互链改为本站对应语言页面，并扫描现有 Wiki 中残留的旧站词条链接。历史文章的出处说明不作为 Wiki 导航；新的 Wiki 页面不依赖已停止运营的来源站。

## 验收计划

### 内容与配对

- [x] 本站 226 个中文词条均有同 slug 英文页面：224 篇来自来源英文原文，另 2 篇依据本站中文内容整理；slug 集合一致，完整构建已产出 226 个英文详情页。
- [x] 本站独有的“后端测试（Back-end Testing）”与“正向测试（Positive Testing）”均有英文页面，并标明没有来源英文配对。
- [x] 224 个英文来源配对均已核对问题标题/章节结构；全 452 篇通过严格 Markdown、TOC、内部链接和 SEO 断链检查。发现的 SQL、Lighthouse、BDD 围栏与内链错误已修复；本轮未逐句外部核验所有事实主张，A/B 工具停用信息已按官方说明更新。
- [x] 226 个中文配对页均与英文问题项/章节结构对照；自动审计未发现中文问题项少于英文，确认的缺项和格式问题已修复。逐句语义和事实核验边界见审查日志。
- [x] 双语标题、摘要、目录、术语链接和 frontmatter 满足本站 Wiki 规范；英文页面的 `html lang`、面包屑、侧栏、搜索、目录、相关词条和评论语言均为英文。英文 JSON-LD 的 DefinedTerm/DefinedTermSet 使用英文名称并与页面一致。来源内容署名按核实后的来源要求保留；Wiki 英文首页或明确的版权入口展示与本站一致的 PolyForm Noncommercial License 1.0.0 信息，并链接到本站英文版权页及官方许可文本。

### 页面行为与 SEO

- [x] `/en/wiki/` 展示本站英文词条列表、搜索和导航。
- [x] 英文词条路由生成本站完整正文；英文首页、导航、页脚、搜索结果、相关词条和语言切换均使用本站对应词条，构建及 E2E 验证通过。
- [x] Wiki 页面不再生成指向已停运来源站的 redirect、canonical、导航或词条互链；英文索引与词条无 `noindex`，使用本站自指 canonical、与中文页互设 hreflang，并进入 XML sitemap。许可链接指向本站版权页和 PolyForm 官方文本；来源署名链接指向经核实且仍有效的来源页面或来源代码仓库。
- [x] 中文 Wiki 现有 URL、内容、搜索和导航没有回归；桌面与手机索引搜索和布局 E2E 通过。
- [x] 全仓库扫描覆盖 Wiki、QA Glossary 博客、脚本、测试、注释、项目计划与历史归档；旧来源域名、跳转、canonical、meta refresh、SEO 例外和旧行为断言均已清理。

### 验证命令

- [x] `npm run wiki:style:check:strict`（452 篇通过，0 问题）
- [x] `npm run wiki:integrity:check:strict`（452 篇，0 错误、0 警告）
- [x] `npm run seo:check`（brokenLinks=0、malformedMarkdownLinks=0）
- [x] `npm run build`（3365 页构建完成；2415 个可索引页面进入 sitemap；SEO build check 通过）
- [x] `npm test`（45 个文件、262 项通过）
- [x] 更新英文词条与索引 E2E，验证本站正文、200 响应、无旧站跳转、语言切换、英文 hreflang 和 sitemap 收录；覆盖桌面与手机 viewport（93 项通过）。运行命令：`cd tests && npm run test:e2e -- specs/wiki.spec.ts specs/wiki-search.spec.ts specs/wiki-local-content.spec.ts specs/navigation.spec.ts specs/seo.spec.ts specs/seo-integrity.spec.ts`。

## 分步任务

### Task 1：建立内容清单和配对规则

- [x] 记录来源英文、来源中文、本站中文的数量与 slug 差异。
- [x] 新建逐篇审阅日志，按 226 个 slug 记录英文结构/格式检查、中文问题项对照、修复结果和事实核验边界；标明 224 个来源配对及本站额外两篇。
- [x] 检查来源链接、抓取标记、frontmatter、署名和许可；记录用户对词条权利与按本站 PolyForm Noncommercial License 1.0.0 发布的明确确认，并保留来源署名。

### Task 2：建立本站英文 Wiki 页面和路由

- [x] 在 `src/content.config.ts` 将中文 Wiki loader 限制为根目录 `*.md`，新增 base 为 `src/content/wiki/en` 的英文 collection；保留现有中文 collection 与页面 ID。
- [x] 更新 `src/pages/[lang]/wiki/index.astro` 与 `src/pages/[lang]/wiki/[...slug].astro`，分别生成英文索引和词条正文。
- [x] 更新 `src/data/wiki.ts`、Wiki 展示组件或相关布局，使英文侧栏、标题、摘要、目录、面包屑、返回索引、相关词条和评论区语言使用英文。
- [x] 让头部、页脚和英文 Wiki 首页链接指向本站 `/en/wiki/`；保持中文路由不变，并验证详情页语言切换到同 slug 对译页。
- [x] 更新 `src/utils/seoUrls.ts`、`scripts/seo-build-check.mjs` 和 `astro.config.mjs` 相关断言，使英文索引/词条可索引、拥有本站 canonical、hreflang 和语言正确的 DefinedTerm/DefinedTermSet JSON-LD，并进入正确站点地图。

### Task 3：导入并整理英文正文

- [x] 将 224 篇来源英文词条整理到 `src/content/wiki/en/`，按本站 frontmatter、标题、TOC 和链接规范格式化。
- [x] 将来源中的词条互链映射到本站英文 Wiki 页面；中文配对页继续指向本站中文路径。扫描中英文 Wiki 内容中的已停运来源站链接（目前已知 `cypress.md` 指向来源站 Playwright 词条），统一替换为本站对应页面。
- [x] 审阅本站独有两篇词条，为其建立英文正文并记录内容依据。
- [x] 保留来源署名；Wiki 的本站许可说明采用网站现有的 PolyForm Noncommercial License 1.0.0 入口。来源内容的授权条件按 Task 1 核实，不把来源许可误写成本站统一许可；不保留失效的业务跳转。

### Task 4：逐篇进行英文审阅和中文对照

- [x] 按 slug 对 224 篇英文源和 226 篇本站页面逐项核对问题/章节结构，并在审阅日志逐篇记录结果。
- [x] 修复本轮确认的问答遗漏、失效词条链、重复定义标题及 Markdown/TOC 格式问题。
- [x] 记录全量结构审计结果、修复项和事实核验边界；两篇来源库缺失的词条单独记录。
- [x] 完成所有 226 个本站词条的英文页面与中文配对状态检查：224 篇使用来源英文，2 篇本站独有词条使用中文内容整理英文版。

### Task 5：更新回归检查

- [x] 更新英文 Wiki 本地内容 E2E 断言；同步更新 Wiki、导航、搜索、SEO E2E 和 `tests/e2e/support/constants.ts`。
- [x] 更新 `scripts/seo-build-check.mjs`、`tests/unit/seoBuildGate.test.ts`、`tests/unit/seoUrls.test.ts`、`tests/e2e/specs/seo.spec.ts`、`tests/e2e/specs/seo-integrity.spec.ts` 及导航/Wiki 相关测试，验证英文正文、可索引状态、canonical、互设 hreflang、语言正确的 JSON-LD 和 sitemap，不再断言外站跳转。
- [x] 递归扫描 `src/content/wiki/en/` 的 `scripts/wiki-markdown-style-check.mjs`，使中英文格式检查都覆盖到；更新 `scripts/wiki-aiwiki-integrity-check.mjs`，按 locale 校验链接目标，不能用中文 slug 集合掩盖英文缺页。
- [x] 新增 `tests/unit/wikiLocaleParity.test.ts`，检查中文与英文 slug 集合一致；SEO 构建检查逐个确认所有英文详情页都生成并可索引。
- [x] 执行“验证命令”所列检查；修复本次引入的问题后重跑。
- [x] 检查最终 Git diff 和分支状态；用户已明确授权提交到功能分支、推送并创建面向 `main` 的 PR，本任务不合并 PR。

### Task 6：同步项目说明

- [x] 更新 `AGENTS.md`、`CLAUDE.md`、`docs/standards/wiki-format.md` 和 `docs/standards/seo-maintenance.md`，说明中英文目录、frontmatter/链接格式和本地英文 Wiki SEO 规则。
- [x] 更新 `src/content.config.ts` 与 `src/consts.ts` 中过时的语言和路由注释。

### Task 7：全仓库清理来源站关联项

- [x] 清理头部/页脚导航、英文 Wiki 路由、SEO 构建规则、站点地图例外和所有旧跳转目标；移除相关 URL、meta refresh、canonical 与注释。
- [x] 重写 E2E、单元测试、测试常量和构建检查，使其验证本站英文 Wiki 正常展示；删除所有对旧外站行为和目标地址的断言。
- [x] 修复 Wiki 正文中的旧站互链；检查 `src/blog/zh-cn/QA-Glossary-Wiki/` 下所有历史文章的来源条目，将仍有效的 Wiki 引用改为本站对应词条，失效且无替代价值的引用删除。
- [x] 检查 `docs/superpowers/`、`docs/archive/` 等历史文档中的旧域名、链接和行为约定；保留有用历史背景，但删除具体外站地址及会误导后续维护的旧操作说明。
- [x] 全仓库全文扫描已确认不再含旧来源域名及相关词条链接/跳转行为。

## 当前验收状态

内容结构与格式审计、严格 Wiki 检查、SEO 源码/构建检查、262 项单元测试、93 项指定 E2E 及全仓旧域名扫描均已通过。所有词条事实未逐句外部核验；来源依据和 A/B 工具状态例外见逐篇审阅日志。

## 范围边界

本轮处理 QA Wiki 英文内容、对应中文核对、路由/导航/SEO、内容检查、项目说明和必要测试；同时清理仓库中所有指向已停运来源站或依赖其旧行为的内容，包括博客来源链接、脚本、测试、注释、计划和归档文档。仍有价值的来源引用改为本站对应词条或有效来源；没有合适目标的失效引用删除。最终对所有受版本控制的文本文件做全仓扫描，确认没有旧跳转域名、路由、目标或相关标识残留。不改部署配置或本站域名；按用户授权提交到功能分支、推送并创建面向 `main` 的 PR，不合并。
