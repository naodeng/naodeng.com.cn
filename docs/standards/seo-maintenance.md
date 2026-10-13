# SEO 维护指南

新增内容、调整栏目、修改双语路由或排查搜索收录问题时使用。优化覆盖博客、测试百科、AI 百科、自动化指南、QA Skills、提示词、工作流、周刊及作者与项目页面。

## 开始与验证

先查看 `git status --short --branch`，确认本轮范围和已有修改。源码检查、构建输出、线上状态和搜索表现分别记录，不互相代替。博客源码审计也要覆盖 `draft: true` 草稿，检查标题、摘要、双语配对、日期和正文重复或占位内容；构建与 sitemap 则应排除草稿，因此不能用公开路由检查来代替草稿的源码复核。

```bash
npm test
npm run seo:check:strict
npm run build
cd tests
npx playwright test e2e/specs/seo.spec.ts e2e/specs/seo-integrity.spec.ts
```

`npm run build` 包含 `seo:build:check`，检查所有生成内容页和 sitemap index 声明的分片。已有构建可单独运行 `npm run seo:build:check`，但源码改动后应重新构建。

`seo:check` 的源码范围是博客和两个百科；构建检查覆盖全站，二者都要看。源码中的摘要长度提示属于人工评估项，不能仅因超过 155 字就认定搜索摘要无效。`docs/temporary/seo/` 是生成输出，运行前保留已有报告修改，交付时避免混入无关重生成内容。

## 发布前规则

- 每个可收录页面的 canonical 指向自己的 HTTPS 正式地址，分页保留各自地址、标题和摘要。
- hreflang 只连接实际存在、可收录且互相返回的等价内容。没有对译时，语言切换可以回到栏目入口，但该入口不能伪装成对译。
- 中文与英文测试百科分别使用本站对应语言的内容与 URL；英文首页和词条页应可索引、使用本站 canonical，并进入 XML sitemap。原型、空列表和兼容旧地址继续按现有 noindex 规则处理。
- XML sitemap 的语言链接从 HTML 读取，包含同一组真实版本与默认入口，避免再次按文件名猜测译文地址。
- 页面结构化数据使用真实标题、摘要、语言和 canonical。站点介绍保持稳定，文章发布时间与修改时间来自内容，不用构建时间冒充更新日期。
- 保留 BlogPosting、Article、TechArticle、DefinedTerm 和内容目录的实际含义。没有真实问答、评价或业务数据时，不添加相应标记。
- JSON-LD 通过统一序列化函数输出，避免正文中的特殊文本截断 script 元素。构建检查验证解析与关键字段；富媒体结果仍需上线后单独检查。
- 标题和摘要先回答页面能帮助读者完成什么，再自然包含主题词。内容更新保持中英文等价，并检查桌面和移动端入口。

## 内容与搜索意图

以下是基于本站已有内容的候选方向，没有搜索量或排名数据。先完善已有页面的答案、示例与相关链接，再根据 Search Console 数据决定是否新增专题，避免多页重复争夺同一问题。

| 内容入口 | 中文候选主题 | 英文候选主题 | 丰富内容的重点 |
| --- | --- | --- | --- |
| `/[lang]/` | 软件测试资源、AI 测试实践 | software testing resources, AI testing | 让读者能进入文章、工具指南、百科、Skills 与提示词 |
| `/[lang]/blog/` | 测试设计、AI 辅助测试、质量分析 | test design, AI assisted testing, quality analysis | 补真实问题、输入输出、工程示例与适用边界 |
| `/zh-cn/wiki/`、`/en/wiki/` | 软件测试术语、测试用例、测试方法 | QA glossary, test cases, testing methods | 双语词条分别提供完整内容，定义清楚，方法可比较，词条之间的链接确有关系 |
| `/[lang]/AIWiki/` | AI 智能体、模型评估、AI 工程概念 | AI agents, agent evals, AI engineering glossary | 解释术语、典型场景及与测试工作的联系 |
| `/[lang]/guild/` | 接口自动化、UI 自动化、性能测试教程 | API testing tutorial, test automation, performance testing | 保留可复现示例、配置步骤、常见错误与持续集成路径 |
| `/[lang]/qaskills/` | QA Skills、智能体测试技能、需求分析技能 | QA skills, testing agent skills, requirements analysis | 写清输入、交付物、调用方式和人工复核点 |
| `/[lang]/prompts/` | 软件测试提示词、测试用例提示词 | software testing prompts, test case prompts | 通过任务找到模板，提供完整输入与输出示例 |
| `/[lang]/prompts/workflows/` 下的 `daily/`、`sprint/`、`release/` | 日常测试流程、迭代质量、发布评审 | QA workflow, sprint testing, release review | 说明步骤、交接材料及继续或停止的判断依据 |
| `/[lang]/ai-native-qa-weekly/` | AI 测试周刊、AI 原生质量工程 | AI testing weekly, AI native QA | 标明期次、周期、原始来源与工程应用 |
| `/[lang]/about/`、`/[lang]/projects/` | naodeng、软件测试同学、开源 QA 项目 | Nao Deng, open source QA projects | 作者信息、实际项目与联系方式可核查 |

正文内链应指向解决当前问题的内容，使用描述性锚文本；不要为了入链数量增加无关词条。历史文章保留原日期、署名和链接结构，更新技术事实时记录实际修改时间。

## 下一轮优先级

1. 有 Search Console 数据后，比较最近 28 天与前 28 天的点击、展示、CTR、平均排名，并按页面、查询、语言和设备拆开。没有数据就标记“未评估”。
2. 优先检查高展示、低点击的现有页面，核对标题、摘要和正文是否回答同一个问题，再处理相关词条是否真正相关。
3. 核实线上 HTTP、canonical、语言链接、重定向和 sitemap；不要把历史兼容页的 noindex 自动当成故障。
4. 单独测量移动端 LCP、INP、CLS 与真实加载过程，按证据修复资源或交互问题。
5. 新增专题之前检查已有文章、百科、指南和 Skills，避免同一个搜索问题出现多个薄内容入口。

这份指南用于手动继续优化；当前没有定时任务。提交、推送和上线按当次明确要求执行。

## 2026-10-09 本轮记录

工作区基线为 `main` 的 `eb84c75c7`。构建生成 3,313 个内容页面，其中 2,150 个可收录页面全部保留在 sitemap。验证文件不作为内容页参与检查。

| 已确认问题 | 优化前 | 本轮结果 |
| --- | --- | --- |
| 可收录 HTML 的语言标记指向 noindex 页面 | 454 条，来自中文 Wiki 的英文版本与默认入口 | 0 条；已修正为真实中文版本与默认入口 |
| sitemap 的语言链接指向不收录页面 | 248 条，包括英文 Wiki 和空的归档版本 | 0 条；改为从 HTML 中读取实际关联 |
| 博客、标签与系列分页标题 | 各页重复使用栏目或分组标题 | 标题包含页码；102 个可收录分页均与入口页区分 |
| 全站 WebPage 信息 | 缺少页面与站点的明确关联 | 新增页面名称、摘要、语言、canonical、站点与面包屑关联 |
| 构建检查范围 | 摘要与部分历史地址；只读一个 sitemap 分片 | 增加全站 canonical、双语回链、sitemap 一致性与 JSON-LD 校验 |

同时更新中英文栏目摘要，移除提示词介绍中已经过时的固定数量，以及未对应实际搜索 URL 的 SearchAction。未改写历史正文、署名、日期或发布状态。

本地验证：`npm test` 的 44 个文件、259 项测试通过；`npm run seo:check:strict` 通过，保留 7 条摘要长度提示；`npm run build` 和全站构建检查通过；上述两个 SEO 浏览器 spec 共 81 项通过，其中覆盖中英文桌面与移动端。另用 Python HTMLParser 与 XML 解析器复核了 noindex 语言链接和分页标题。摘要长度提示不属于硬错误，本轮没有按固定字数批量改写历史内容。

线上验证边界：默认 Python 请求检查中英文首页、robots.txt、两个 sitemap 文件及中英文 A/B Testing 词条入口时，HEAD 和 GET 均返回 HTTP 403，GET 响应正文为 Cloudflare `error code: 1010`。用户反馈浏览器可正常访问；改用浏览器请求头复核中文首页时，GET 返回 HTTP 200。根据 [Cloudflare 1010 说明](https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-1xxx-errors/error-1010/)，该错误表示请求客户端签名被拒，因此本轮记录为默认脚本客户端访问受限，不能据此认定页面不可访问或搜索引擎抓取受阻。

尚未完成全站线上 SEO 元数据复核；没有本轮 Search Console、排名或流量数据。上述优化结果属于本地实现与验证，不代表已经部署、已经收录或搜索表现已经提升。

## 2026-10-12 根语言入口内链复核

本地构建中，2,537 个可收录页面含 231,150 个站内链接实例；其中 5,076 个链接指向根路径 `/`。该路径由带 `noindex, follow` 的语言入口处理。确认来源为全站页脚版权链接、语言提示条的默认链接，以及 About 页中英文简介各一条。它们均改为指向当前语言首页。

`scripts/seo-integrity-utils.mjs` 现在会检查所有可收录构建页，发现站内链接指向 noindex 根语言入口时让构建失败；单元回归覆盖相对和绝对两种根链接。`npm run seo:check:strict` 通过，缺失标题/摘要、重复标题和站内坏链均为 0，保留 51 条摘要长度人工复核提示。`npm test` 为 45 个文件、264 项通过；`npm run build` 通过，生成 2,819 个 HTML 页面、2,537 个可收录页面和同数 sitemap URL。

线上 robots.txt、sitemap index、sitemap 分片和中英文首页均返回 HTTP 200，线上 sitemap 含 2,537 个 URL。本轮改动仅在本地，尚未提交或部署，因此线上尚未验证这项内链修复。Search Console 点击、展示、CTR、排名仍未评估；GSC Wizard 当前未安装，PageSpeed Insights API 本轮返回 HTTP 429。SEO Playwright 套件因本机 Chromium 启动权限错误未能完成。

## 2026-10-12 k6 教程图片替代文本复核

最新构建 HTML 中发现 245 个只有空白字符的图片 alt，分布在 46 个页面。源码定位到 k6 教程的 20 张截图，在英文 Guild、中文 Guild 和中文博客共出现 60 次；根据每张图相邻的操作步骤补充了中英文描述。重建后这三个页面的空白 alt 均为 0，全站剩余 185 个，分布在 43 个页面。真正为空的 `alt=""` 保持原样，继续作为装饰图的有效写法。

`npm run build` 通过，生成 2,819 个页面、2,537 个可收录页面和 2,537 个 sitemap URL。对构建 HTML 的复核确认空白 alt 由 245 降至 185。`npm run seo:check:strict` 通过：标题、摘要、重复标题和链接错误均为 0；保留 51 条摘要长度人工复核提示。`npm test` 的 45 个文件、264 项测试通过。Search Console 表现数据仍未评估；本轮改动仅在本地，尚未部署。

其余 185 个空白 alt 仍需逐图结合正文补充。待这批存量处理后，再把空白 alt 检查加入失败型构建门禁，避免已知存量阻断当前构建。

## 2026-10-12 Postbot 图片替代文本复核

在 k6 图片修复后，构建产物还剩 119 个空白 alt，分布在 37 个页面。Postbot 教程、30 天 AI 测试活动第 14 天文章及 Guild 页面重复使用 11 张截图；依据相邻操作说明补充中英文描述，共修复 66 个实例。重建后六个相关页面的空白 alt 均为 0，全站剩余 119 个。

`npm run build` 通过，生成 2,819 个页面、2,537 个可收录页面和同数 sitemap URL。HTMLParser 对 2,822 个构建 HTML 文件复核，确认空白 alt 为 119 个、影响 37 个页面。`npm run seo:check:strict` 通过：缺失标题/摘要、重复标题、坏链和格式错误均为 0，保留 51 条摘要长度人工复核提示。`npm test` 的 45 个文件、264 项测试通过。GSC Wizard 在插件目录可用但未安装，Search Console 账号未连接，因此点击、展示、CTR 和排名仍未评估；本轮尚未部署。

其余 119 个空白 alt 继续逐图核对。待存量处理完再加入失败型构建门禁。

## 2026-10-12 Bruno 教程图片替代文本复核

构建产物在 Postbot 图片修复后还剩 119 个空白 alt，分布在 37 个页面。Bruno 入门教程的 17 张截图在中文博客和中文 Guild 两页重复使用；英文对应页面已存在描述性 alt，因此只补充了中文 alt，共修复 34 个实例。最终构建 HTML 中这两页的空白 alt 均为 0，全站剩余 85 个，分布在 35 个页面。

`npm run build` 通过，生成 2,819 个页面、2,537 个可收录页面和同数 sitemap URL。HTMLParser 对 2,822 个 HTML 文件复核，确认全站剩余 85 个空白 alt。`npm run seo:check:strict` 通过，保留 51 条摘要长度人工复核提示；`npm test` 的 45 个文件、264 项测试通过。GSC Wizard 可在插件目录安装但当前未安装，Search Console 账号未连接，所以点击、展示、CTR 和排名仍未评估。本轮修改仅在本地，尚未部署。

剩余 85 个空白 alt 继续按正文与图片关系逐图核实，处理完成后再加入失败型构建门禁。

## 2026-10-12 全站空白图片替代文本清零与构建门禁

剩余 85 处空白 alt 分布在 35 个页面源码文件中。本轮依据正文步骤和图片内容，为 47 个图片地址补充描述，共修复 85 个图片实例。源码中已没有仅含空白字符的 Markdown 图片 alt；保留空字符串 alt，供装饰图片使用。

在全站 SEO 构建检查中加入空白 alt 门禁：可收录页面出现仅含空白字符的 alt 时构建失败，`alt=""` 仍有效。回归测试覆盖这两种情况。完整 HTMLParser 复核 2,822 个 HTML 文件和 7,805 张图片，空白 alt 为 0、缺少 alt 为 0，空字符串 alt 为 3,847 处。

`npm test` 的 45 个文件、266 项测试通过；`npm run build` 通过，生成 2,819 个页面、2,537 个可收录页面和 2,537 个 sitemap URL。`npm run seo:check:strict` 通过：缺失标题/摘要、重复标题、坏链和格式错误均为 0，仍有 51 条摘要长度提示需人工复核。

GSC Wizard 尚未安装，Search Console 账号未连接，因此点击、展示、CTR 和排名仍未评估。本轮仅完成本地修改和验证，尚未部署；后续应先人工复核 51 条摘要提示，再接入 Search Console 数据决定下一批优先项。

## 2026-10-12 Wiki 摘要内容复核

人工复核 SEO 检查给出的 51 条摘要长度提示。Google 没有规定 meta description 的固定长度上限，搜索摘要会按设备可用空间截断，因此该提示用于内容复核，不作为机械截短要求（[Google 搜索摘要指南](https://developers.google.com/search/docs/appearance/snippet)）。本轮保留准确且有信息量的摘要，只修正证据明确的内容问题：RUP 中英文页面将五项列表统一为四个阶段并补充 IBM 参考；Edge Testing 移除与正文定义矛盾的 Boundary Testing 别名；Retesting 区分缺陷修复确认测试与回归测试；Page Object Model 更正“对象库”定义；Clean Slate 修正文案。其余准确摘要不因长度单独改写，复核后仍有 46 条提示。

验证结果：`npm run wiki:style:check` 和 `npm run wiki:integrity:check` 通过；`npm run seo:check:strict` 通过，标题、描述、重复标题、链接与内容完整性错误均为 0；`npm run build` 通过，生成 2,819 个 HTML 页面、2,537 个可收录页面及 2,537 个 sitemap URL。对 9 个修改页面的构建 HTML 复核确认 canonical、描述内容和长度符合现有布局处理；SEO Playwright 两个 spec 共 81 项全部通过。

GSC Wizard 当前未安装且没有连接的 Search Console 账号，本轮点击、展示、CTR 和排名数据仍未评估。改动只在本地，尚未部署。

## 2026-10-12 QA Skills 目录摘要与线上技术复核

QA Skills 目录原中英文摘要把分类名称写得生硬，且没有说明页面提供的分类、生命周期筛选和技能使用指南。本轮将摘要改为与目录功能一致的双语描述；构建 HTML 中英文摘要分别为 127 和 73 个字符，均保留原文而未拼接通用描述，`CollectionPage` JSON-LD 描述与页面 meta description 一致。

线上抽查中，`robots.txt`、其中声明的 sitemap index 及其 sitemap 分片均返回 HTTP 200；XML 可解析，分片含 2,537 个唯一 URL，全部使用 `inaodeng.com` 主机名，无查询参数、片段或缺少尾部斜杠的 URL。中英文 RUP 页面各返回 200、canonical 指向自身，并互相声明 hreflang；`naodeng.com.cn` 根域以 HTTP 301 跳转至正式主域。页面 HTTP 只抽查了代表路由，没有逐个请求 sitemap 中的 2,537 个页面。

`npm run seo:check:strict` 通过：缺失标题/摘要、重复标题、链接和完整性问题均为 0，仍保留 46 条摘要人工复核提示。`npm run build` 通过，生成 2,819 个 HTML 页面、2,537 个可收录页面和同数 sitemap URL；Astro 检查有 0 个错误、0 个 warning 和 1 个 Guild 路由未使用变量 hint。

当前没有本地 Search Console 导出，GSC Wizard 未安装，点击、展示、CTR 和排名仍未评估。本轮改动只在本地，尚未部署；线上抽查结果不代表本轮代码已发布。

## 2026-10-12 QA Skills 详情页摘要复核

构建 HTML 复核发现，QA Skills 详情页摘要曾被布局统一限制在 155 个字符，英文还可能优先采用面向 Skill 触发的 YAML 描述；这会切断完整简介，并让 meta description 与 TechArticle 描述不一致。修复后，详情页优先使用本地化简介；简介缺失或为通用占位时，结合该 Skill 的输出摘要补足，必要时再用输入摘要。该路由保留完整描述，不施加固定字符上限。Google 的指南说明摘要会按设备可用空间截断，meta description 没有固定长度上限，内容应准确且能区分具体页面（[Google 搜索摘要指南](https://developers.google.com/search/docs/appearance/snippet)）。

对 326 个中英文路由复核，其中每种语言各有 162 个可收录详情页和 1 个 `noindex` 原型页。324 个可收录页面均有唯一摘要，缺失摘要、重复摘要、meta 与 TechArticle 不一致、英文 `triggers include` 描述及本轮产生的截断均为 0；摘要长度为英文 71–215、中文 70–151 个字符。

`npm test` 通过：45 个文件、268 项测试；`npm run seo:check:strict` 通过，缺失标题/摘要、重复标题和坏链均为 0，另有 46 条摘要长度提示保留人工复核；`npm run build` 通过，生成 2,819 个 HTML 页面、2,537 个可收录页面和 2,537 个 sitemap URL，SEO 构建门禁通过。

本地 Search Console 表现数据不可用，点击、展示、CTR 和排名仍未评估。本轮只验证本地源码与构建产物，尚未部署。Wiki、AI Wiki、Guild 等其他页面模板仍有各自的摘要处理逻辑；本轮只修复 QA Skills 详情页，不代表全站的摘要长度处理已完成复核。

## 2026-10-12 摘要模板与双语内容复核

人工复核剩余摘要后，修正 QA Metrics 和 Test Process Improvement 的中英文定义，使摘要与正文所述的度量用途、流程改进方法一致；定义参考 [ISTQB 测试管理大纲](https://www.istqb.org/wp-content/uploads/2024/11/ISTQB_CTAL-TM_Syllabus_v3.0_zKjKsaN.pdf) 与 [TMAP 的 TPI Next 说明](https://www.tmap.net/building-blocks/test-process-improvement-tpi/)。其余准确摘要不因字数单独改写。

全站构建复核发现 Base 曾给短摘要追加通用尾句，造成 335 个中文可收录页面的摘要不贴合页面。现在明确提供的摘要会保留完整内容，Base 不再默认拼接尾句或按 155 字截断；QA Skills 继续通过专用逻辑补充输出与输入信息。标签和系列页按标签/系列名称、文章数量及分页生成双语摘要；隐私、友情链接、赞助和版权页也补上对应页面说明。构建门禁将 70 字作为人工复核提示，不再作为失败条件，同时检查空摘要、重复摘要和已知通用尾句。

人工 HTML 复核覆盖 2,537 个可收录页：缺少摘要、通用回退尾句、重复摘要、Open Graph 摘要不一致及本次检查范围内的结构化摘要不一致均为 0。759 个摘要短于 70 字，保留为人工相关性复核项；SEO 源码检查另有 44 条长摘要提示。中英文 API Testing 简介页此前共享中文摘要，英文路由正文也实际是中文；本轮更正英文标题与摘要、翻译正文并将百科链接改到英文页面。该文章的发布日期与原有章节结构保持不变。

验证结果：`npm test` 的 45 个文件、274 项测试通过；`npm run seo:check:strict` 通过，标题、摘要、重复标题、坏链和词条关联错误均为 0；Wiki 样式检查扫描 452 个文件且无问题，Wiki/AI Wiki 完整性检查扫描 686 个文件且无问题。`npm run build` 通过，生成 2,819 个 HTML 页面、2,537 个可收录页面和同数 sitemap URL；构建检查输出 759 个短摘要供人工复核。Astro 检查有 0 个错误、0 个警告和 1 个现存 Guild 路由未使用变量 hint。

线上抽查的 HTTP 200 页面仍展示旧的 QA Metrics、TPI、标签/隐私摘要和英文 API Testing 页面内容，说明本轮源码尚未发布。当前没有 Search Console 连接或可用导出，点击、展示、CTR 与排名仍未评估；本轮未提交或推送。

## 2026-10-12 英文系列与分类语言复核

英文 API Testing 文章的正文、标题和摘要已在上一轮修正；本轮继续处理其英文路由仍显示中文的分类和系列名称。文章分类改为 `API Testing`、`Testing Tools`，其中首项与现有英文标签一致，可链接到对应标签页。系列目录、详情页、分页标题、面包屑和摘要将“测试理论指南”显示为 “Software Testing Theory Guide”；单篇系列的摘要和页内计数使用单数 “post”。路由和 canonical 继续使用原有编码后 URL，中文系列名保持不变。

验证结果：`npm test` 的 45 个文件、275 项测试通过；`npm run seo:check:strict` 通过，标题/摘要缺失、重复标题、坏链和格式错误均为 0，保留 44 条摘要长度提示；`npm run build` 通过，生成 2,819 个页面、2,537 个可收录页面和同数 sitemap URL。Astro 检查为 0 个错误、0 个警告和 1 个既有 Guild 路由未使用变量 hint。对构建 HTML 的复核确认英文系列标题、摘要、单数计数和文章分类已修正，系列链接及 canonical 保留原 URL，中文系列标题不变。

线上英文 API Testing 文章当前仍返回 HTTP 200，但页面标题仍为旧版 “Introduce of API Testing”，正文和分类仍为中文；本轮修改只在本地，未提交或部署。当前没有可用的 Search Console 数据导出或连接，点击、展示、CTR 和排名仍未评估；本轮没有取得新的线上 CWV 数据。

## 2026-10-12 中文 Wiki 摘要内容复核

构建摘要清单中发现 10 个中文 Wiki 词条使用“关于 X 的问题？”作为 meta description，另有可用性测试页只写“基础知识和重要性”；ISTQB 页摘要还混入标题、目录式标题和问答文字。根据词条定义与正文内容重写这 12 条中文摘要。对应英文词条已有具体摘要且内容一致，因此本轮只修改中文描述，不改正文、路径或词条结构。

验证结果：`npm test` 的 45 个文件、275 项测试通过；Wiki 样式检查扫描 452 个文件且两项错误计数均为 0；Wiki/AI Wiki 完整性检查扫描 452 个 Wiki 文件（中英文各 226 个）和 234 个 AI Wiki 文件，问题为 0。`npm run seo:check:strict` 通过：缺失标题/摘要、重复标题、坏链和词条关联错误均为 0，保留 44 条长摘要人工复核提示。`npm run build` 通过，生成 2,819 个页面、2,537 个可收录页面和同数 sitemap URL；构建提示 760 条短摘要留待相关性人工复核，长度本身不作为失败条件。生成 HTML 抽查确认 12 条描述均与源码一致，问题模板和 ISTQB 混入内容为 0。

SEO Playwright 两个 spec 未能完成：Chromium 启动阶段持续遇到 macOS `MachPortRendezvousServer` 权限拒绝；手动停止了重复失败的启动尝试，17 项未运行、3 项中断。线上抽查的实际结果、可用性测试和 ISTQB 页面均返回 HTTP 200，但仍展示旧摘要；本轮修改仅在本地，尚未部署。Google Drive 中 “Search Console” 和 “GSC” 检索均无结果，当前没有可用搜索表现数据，点击、展示、CTR 和排名仍未评估；本轮未取得新的线上 CWV 数据。

## 2026-10-12 性能测试指南双语摘要复核

全站构建复核仍有 759 个可收录页面摘要短于 70 字；此项只用于人工检查相关性，不作为失败条件或批量扩写理由。抽查发现，中英文性能测试指南摘要原先只泛指性能/负载测试，未体现目录中的 JMeter、K6、Gatling 教程。本轮将两种语言摘要改为说明工具及负载测试、脚本、场景设计、报告分析和 CI/CD 集成；其他短摘要不因字数单独改写。

验证结果：`npm test` 的 45 个文件、275 项测试通过；`npm run seo:check:strict` 通过，缺失标题/摘要、重复标题、坏链和词条关联问题均为 0，保留 44 条长摘要人工复核提示。`npm run build` 通过，生成 2,819 个页面、2,537 个可收录页面和同数 sitemap URL；构建保留 759 条短摘要相关性提示。HTML 复核确认中英文页面的 meta description 与 `CollectionPage` 描述一致，canonical 各自指向本页。

线上中英文性能测试指南均返回 HTTP 200，canonical 指向本页，但仍提供旧版通用摘要；本轮改动只在本地，未提交或部署。SEO Playwright 两个 spec 未能完成：Chromium 启动时遇到 macOS `MachPortRendezvousServer` 权限拒绝；停止重复启动后有 40 项未运行、3 项中断。当前没有可用 Search Console 数据，点击、展示、CTR 和排名仍未评估；本轮未取得新的线上 CWV 数据。

## 2026-10-12 Cypress 教程系列摘要复核

对 759 条短摘要人工抽样时，发现中文 Cypress 第 1–6 篇的描述都以“文章介绍”开头，部分只复述标题。逐篇对照正文后，改为概括安装与首测、报告格式、定位与断言、数据驱动、命令速查及 Cypress Studio 操作。仓库没有这六篇的英文对应文件，因此本轮只更新现存中文页面摘要，不另造英文文章或路由。

验证结果：`npm test` 的 45 个文件、275 项测试通过；`npm run seo:check:strict` 通过，缺失标题/摘要、重复标题、坏链和词条关联问题均为 0，保留 44 条长摘要人工复核提示。`npm run build` 通过，生成 2,819 个页面、2,537 个可收录页面和同数 sitemap URL，短摘要提示降至 757 条。构建 HTML 确认六页的 meta description、Open Graph description 和 Article 描述一致，canonical 均指向自身。

线上六页当前均返回 HTTP 200 且 canonical 指向自身，但仍呈现旧的标题式描述和通用尾句；本轮修改仅在本地，未部署。当前没有可用 Search Console 数据，点击、展示、CTR 和排名仍未评估；本轮未取得新的线上 CWV 数据。

## 2026-10-12 旧博客摘要针对性复核

继续人工复核构建标记的短摘要，修正两篇中文旧博客的标题复述：敏捷测试挑战页说明 30 项日常挑战、1 项加分挑战及参与方式；二八法则页概括其在软件研发、质量管理和测试中的应用。两篇均无英文对应文件，因此未创建未配对英文内容。摘要仍短于 70 字，但准确性和页面区分度优先于长度阈值。

验证结果：`npm test` 的 45 个文件、275 项测试通过；`npm run seo:check:strict` 通过，缺失标题/摘要、重复标题、坏链和内容关联问题均为 0，保留 44 条长摘要人工复核提示。`npm run build` 通过，生成 2,819 个页面、2,537 个可收录页面和同数 sitemap URL；构建保留 757 条短摘要人工复核提示。HTML 抽查确认两页的 meta description、Open Graph description 和 Article 描述一致，canonical 均指向自身。

线上两页当前均返回 HTTP 200 且 canonical 指向自身，但仍提供旧的标题式描述和通用尾句；本轮修改仅在本地，未部署。当前无可用 Search Console 表现数据，点击、展示、CTR 和排名未评估；本轮未取得新的线上 CWV 数据。

## 2026-10-12 双语旧博客摘要复核

抽查摘要仍以“文章介绍”概括内容的旧博客，依据正文分别重写 Awesome QA Prompt、API 测试和 Bruno 三篇文章的描述。Awesome QA Prompt 与 Bruno 更新中英文版本；API 测试的英文摘要已具体说明范围和测试类型，因此只更新中文摘要。未改正文、URL 或页面结构。

验证结果：`npm run seo:check:strict` 通过，缺失标题/摘要、重复标题、坏链和内容关联错误均为 0，保留 44 条长摘要人工复核提示。`npm run build` 通过，生成 2,819 个页面、2,537 个可收录页面及同数 sitemap URL；保留 756 条短摘要相关性提示。Astro 检查为 0 个错误、0 个警告和 1 个既有未使用变量 hint。构建 HTML 抽查了三篇文章的中英文共六页，确认 meta description、Open Graph 描述和 BlogPosting 描述一致，canonical 均指向自身。严格检查重写的三份生成报告已从运行前快照恢复，SEO 与 issue 临时报告目录均与快照一致。

线上六页当前均返回 HTTP 200 且 canonical 指向自身，但仍使用旧摘要；本轮更改只在本地，未提交或部署。Google Drive 中再次检索 “Search Console” 和 “GSC” 均无结果，当前没有可用搜索表现数据，点击、展示、CTR 和排名仍未评估；本轮未取得新的线上 CWV 数据。本轮未运行单元测试，验证范围为严格 SEO 检查、完整构建及构建 HTML 元数据核对。

## 2026-10-12 Playwright 与 Gatling 摘要内容复核

源码扫描发现 Playwright 入门页摘要只泛指框架介绍；四篇 Gatling 系列摘要重复概括正文，其中三条英文摘要以省略号截断。对照正文和历史双语路由，重写 Playwright 中文摘要，以及 Gatling 入门、工程搭建、报告与场景配置、CI/CD 四组中英文摘要。Playwright 没有英文对应页，因此未新增页面；正文、日期和路径均未改。另发现一篇 Edge 旧文标题写 Mac OS，步骤却操作 Windows 11 视觉效果开关；需要先复核正文和当前功能状态，本轮未单独改摘要。

验证结果：`npm test` 的 45 个文件、275 项测试通过；`npm run seo:check:strict` 通过，缺失标题/摘要、重复标题、坏链和内容关联错误均为 0，保留 44 条长摘要人工复核提示。`npm run build` 通过，生成 2,819 个页面、2,537 个可收录页面及同数 sitemap URL；短摘要相关性提示为 757 条。Astro 检查为 0 个错误、0 个警告和 1 个既有未使用变量 hint。构建 HTML 核对九个页面的 meta description、Open Graph 描述、BlogPosting 描述和自指 canonical，均与源码一致。

SEO Playwright 两个 spec 共 81 项，因 Chromium 启动时 macOS `MachPortRendezvousServer` 权限拒绝未能完成；停止重复启动后记录 3 项中断、5 项未运行。严格检查生成的 SEO 报告和 Playwright 测试报告均已按运行前快照恢复。线上九页当前均返回 HTTP 200 且 canonical 指向自身，但仍展示旧摘要；本轮更改仅在本地，未提交或部署。Google Drive 中 “Search Console” 和 “GSC” 检索仍无结果，当前没有搜索表现数据，点击、展示、CTR 和排名仍未评估。本轮未运行 PageSpeed/CWV 检查（未配置 PageSpeed API key），因此 CWV 未评估。

## 2026-10-12 Edge 实验功能旧文校正

源码与线上页面显示，这篇 2023 年文章的标题误写为 macOS，但正文步骤使用的选项名明确包含 “Windows 11 visual effects”。据此将标题改为 Windows 11 标题栏视觉效果设置记录，摘要标明 2023 年和实验选项可能随版本变化；正文新增平台范围说明，并链接到 [Microsoft Edge 配置与实验文档](https://learn.microsoft.com/en-us/deployedge/edge-configuration-and-experiments)。Microsoft Learn 说明 Edge 实验功能仍在开发或实验中，可能在推出或实验结束前保持隐藏。未改发布日期、URL 或正文步骤，也未新增英文页面。

验证结果：`npm test` 的 45 个文件、275 项测试通过；`npm run seo:check:strict` 通过，缺失标题/摘要、重复标题、坏链和内容关联错误均为 0，保留 44 条长摘要人工复核提示。`npm run build` 通过，生成 2,819 个页面、2,537 个可收录页面及同数 sitemap URL；短摘要相关性提示为 756 条。Astro 检查为 0 个错误、0 个警告和 1 个既有未使用变量 hint。构建 HTML 确认标题、meta description、Open Graph 描述、BlogPosting 描述、正文范围提示和外链均输出正确，canonical 指向本页。SEO 与 issue 临时报告已恢复到运行前快照。

线上页面仍返回 HTTP 200 且 canonical 正常，但仍显示旧的 macOS 标题和摘要；本轮修改仅在本地，未提交或部署。Playwright 本轮未重跑；最近一次 SEO 浏览器套件因 Chromium 在 macOS 上启动权限错误未能完成。Google Drive 中 “Search Console” 和 “GSC” 检索无结果，点击、展示、CTR 和排名仍未评估；本轮未测量 CWV。

## 2026-10-12 Gatling Guild 摘要双语复核

对照 Gatling Guild 的中英文正文，发现入门页摘要误称“进阶”，四组摘要多用“文章介绍”复述标题，报告分析和 CI/CD 页的具体内容也未清楚区分。本轮按环境与官方示例、项目搭建、报告与负载场景、CI/CD 集成分别重写四组双语摘要；正文、标题、URL 和发布日期不变，并保留此前已有的图片替代文本修改。

验证结果：`npm run seo:check:strict` 通过，缺失标题/摘要、重复标题、坏链和内容关联错误均为 0，保留 44 条长摘要人工复核提示；该源码检查不覆盖 Guild，Guild 页面由全站构建检查覆盖。`npm run build` 通过，生成 2,819 个 HTML 页面、2,537 个可收录页面及同数 sitemap URL；构建保留 757 条短摘要相关性人工复核提示。Astro 检查为 0 个错误、0 个警告和 1 个既有未使用变量 hint。Wiki/AI Wiki 完整性检查覆盖 452 个 Wiki 文件和 234 个 AI Wiki 文件，错误与警告均为 0。HTML 复核确认八页的 meta 与 Open Graph 摘要一致，canonical 指向各自页面，hreflang 连接中英文版本。

线上 `robots.txt`、sitemap index 和 sitemap 分片均返回 HTTP 200；分片含 2,537 个可解析 URL，八个 Gatling 页面全部列出。八页 HTTP 均为 200 且 canonical 指向自身，但仍显示旧摘要；本轮修改只在本地，未提交或部署。Google Drive 对 “Search Console”、“GSC”、“Google Search Performance” 和 SEO report 的检索均无结果，点击、展示、CTR 和排名仍未评估；本轮未测量 CWV，也未运行单元测试。严格 SEO 与 Wiki 检查生成的临时报告已恢复到运行前快照。

## 2026-10-13 QA 术语博客摘要复核

扫描博客源码发现 83 条摘要以省略号或三个句点结束。本轮逐篇核对其中 11 篇中文“软件测试术语分享”博客；这些摘要都套用相似的系列介绍模板，且末尾被截断。现改为概括每篇实际内容，涉及分析性测试策略、ASTQB、随机测试、敏捷开发、敏捷测试、API、ATDD、API 测试、实际结果、Alpha 测试和自动化测试。英文博客目录没有这些文章的对应版本，因此只更新现有中文页面；标题、日期、正文和 URL 保持原样。其余 72 条仅列为逐篇复核线索，不据省略号批量改写。

验证结果：`npm run seo:check:strict` 通过；缺失标题/摘要、重复标题、坏链和内容关联错误均为 0，仍有 44 条摘要长度人工复核提示。`npm run build` 通过，生成 2,819 个 HTML 页面、2,537 个可收录页面和同数 sitemap URL；70 字以下的人工复核提示为 768 条，其中包含本轮这 11 条简洁摘要。此项是相关性复核提示，不是失败条件，本轮未为满足字数而扩写。Astro 检查为 0 个错误、0 个警告和 1 个既有未使用变量 hint。构建 HTML 逐页核对 11 条摘要无截断，且 meta、Open Graph、BlogPosting 描述与自指 canonical 一致。SEO 生成报告已恢复至运行前快照；本轮未运行单元测试。

线上抽查的 Actual Result 博客仍返回 HTTP 200、canonical 自指，但提供旧的截断摘要；本轮修改只在本地，未提交或部署。Google Drive 对 Search Console、GSC 和 Google Search Performance 的搜索均无结果，点击、展示、CTR 和排名未评估；本轮未测量 CWV。

## 2026-10-13 UI 测试最佳实践摘要复核

继续逐篇检查博客摘要中的截断候选，本轮修正五篇中文 UI 测试最佳实践文章：组合测试与性能测试、UI 测试调试与状态设置、开发工具与低抽象度、服务请求/响应验证与监控、测试策略取舍。原摘要带系列套话并以省略号截断；新摘要改为概括各篇实际主题。英文博客中没有对应文章，因此只更新现有中文页面；正文、日期、标题、URL 和此前的图片替代文本改动均保留。

验证结果：`npm run seo:check:strict` 通过，缺失标题/摘要、重复标题、坏链和内容关联错误均为 0，保留 44 条摘要长度人工复核提示。`npm run build` 通过，生成 2,819 个 HTML 页面、2,537 个可收录页面及同数 sitemap URL；低于 70 字的相关性人工复核提示为 773 条，包含本轮五条经人工确认的简洁摘要，不为字数而扩写。Astro 检查为 0 个错误、0 个警告和 1 个既有未使用变量 hint。HTML 复核确认五页的摘要互不重复、不再以省略号结尾，meta、Open Graph 和 BlogPosting 描述一致，canonical 均自指。SEO 报告已恢复至运行前快照；本轮未运行单元测试。

线上五页均返回 HTTP 200 且 canonical 指向自身，但仍显示旧摘要；本轮只改本地源码，未提交或部署。Google Drive 中 Search Console、GSC 和 Google Search Performance 检索均无结果，也没有可用的直接 GSC 工具；点击、展示、CTR 和排名未评估。本轮未测量 CWV。源码扫描后仍有 67 条以省略号结束的博客摘要候选，后续继续逐篇核实，不自动视为缺陷。

## 2026-10-13 K6 教程系列摘要复核

对照正文复核 K6 教程中六条以省略号结尾的摘要，更新中英文 HTTP 请求、指标与 checks 摘要，以及中英文入门页摘要；另重写阈值/生命周期/场景、HTML 报告与 GitHub Actions、Test Builder/Recorder/HAR 转换三篇中文摘要。后三篇没有英文对应文件，因此只更新现存中文页面。摘要改为说明每篇实际覆盖的操作，不改标题、发布日期、正文和 URL，并保留已有图片替代文本修改。

验证结果：`npm run seo:check:strict` 通过，缺失标题/摘要、重复标题、坏链和内容关联错误均为 0，保留 44 条长摘要人工复核提示。`npm run build` 通过，生成 2,819 个 HTML 页面、2,537 个可收录页面和同数 sitemap URL；776 条 70 字以下摘要仅作为相关性人工复核提示。Astro 检查为 0 个错误、0 个警告和 1 个未使用变量 hint。构建 HTML 核对七页的 meta、Open Graph 与 BlogPosting 描述一致，canonical 自指，摘要均不再以省略号结尾；两组真实双语页面保留双向 hreflang。SEO 生成报告已按运行前快照恢复。构建另输出中文 Cypress 示例中的若干 Shiki 代码块语言标签回退提示，本轮未改该正文。

线上七页当前均返回 HTTP 200 且 canonical 指向自身，但仍展示旧摘要；本轮修改仅在本地，未提交或部署。Google Drive 对 Search Console、GSC 和 Google Search Performance 的检索均无结果，点击、展示、CTR 和排名未评估；本轮未测量 CWV，也未运行单元测试。

## 2026-10-13 Postman 与 API 教程目录摘要复核

继续核对接口自动化文章中的截断摘要，更新 Postman Postbot 试用和 API 自动化教程目录两组中英文摘要。Postbot 页标明这是 2024 年的试用记录，并列出请求测试生成、响应可视化、字段提取和接口文档功能；教程目录按 Java/REST Assured、JavaScript/SuperTest、Python/Pytest，以及 Postman、Bruno 工具教程说明内容。保留实际双语页面配对，不改标题、日期、正文或 URL。

验证结果：`npm run seo:check:strict` 通过，缺失标题/摘要、重复标题、坏链和内容关联错误均为 0，保留 44 条长摘要人工复核提示。`npm run build` 通过，生成 2,819 个 HTML 页面、2,537 个可收录页面和同数 sitemap URL；777 条 70 字以下摘要仅作为相关性人工复核提示。HTML 复核确认四页的 meta、Open Graph 和 BlogPosting 描述一致，canonical 自指，双语 hreflang 相互对应，摘要不再截断。SEO 生成报告已恢复至运行前快照。

线上四页当前均返回 HTTP 200 且 canonical 指向自身，但仍显示旧摘要；本轮修改仅在本地，未提交或部署。Google Drive 对 Search Console、GSC 和 Google Search Performance 的检索均无结果，点击、展示、CTR 和排名未评估；本轮未测量 CWV，也未运行单元测试。

## 2026-10-13 AI 测试挑战博客摘要复核

对照 30 天 AI 测试挑战系列正文，更新第 10、11、14、20、23、24 天的六组中英文摘要。新描述对应文章中的具体案例：购物车税费测试用例、Auth0 注册测试数据、Postman AI 助手 API 测试、Katalon 自愈定位与步骤顺序、Percy 页面和图标视觉差异，以及 ChatGPT-4 解释排序代码和测试思路。保留实际双语配对，不改标题、日期、正文和 URL。

验证结果：`npm run seo:check:strict` 通过，缺失标题/摘要、重复标题、坏链和内容关联错误均为 0，保留 44 条长摘要人工复核提示。`npm run build` 通过，生成 2,819 个 HTML 页面、2,537 个可收录页面和同数 sitemap URL；783 条 70 字以下摘要仅作相关性人工复核提示。Astro 检查为 0 个错误、0 个警告和 1 个未使用变量 hint。HTML 核对 12 页的 meta、Open Graph 与 BlogPosting 描述一致，canonical 自指、摘要无截断，hreflang 指向实际配对页。SEO 生成报告已恢复至运行前快照。构建还输出中文 Cypress 示例中若干代码块语言标签回退提示，本轮未修改该正文。

线上 12 页当前均返回 HTTP 200 且 canonical 指向自身，但仍显示旧摘要；本轮修改只在本地，未提交或部署。Google Drive 对 Search Console、GSC 和 Google Search Performance 的检索均无结果，点击、展示、CTR 和排名未评估；本轮未测量 CWV，也未运行单元测试。源码扫描还剩 45 条以省略号结尾的摘要候选，需逐篇核对后再判断是否修正。

## 2026-10-13 AI 测试挑战博客摘要复核（二）

继续对照 30 天 AI 测试挑战系列正文，更新第 13、15、16、17、18、19 天的六组中英文摘要。内容分别说明团队 QA 流程和 AI 引入价值、测试中 AI 使用投票、AI 无障碍测试的项目适用性、缺陷报告工具的隐私和试用限制、AI 测试工具的实际困扰，以及测试优先级方法与决策风险。第 17 天明确写出作者未能充分评估工具的原因，不再沿用“已完成自动化评估”的泛化描述。保留实际双语配对，不改标题、日期、正文和 URL。

验证结果：`npm run seo:check:strict` 通过，缺失标题/摘要、重复标题、坏链和内容关联错误均为 0，保留 44 条长摘要人工复核提示。`npm run build` 通过，生成 2,819 个 HTML 页面、2,537 个可收录页面和同数 sitemap URL；789 条 70 字以下摘要仅作相关性人工复核提示。Astro 检查为 0 个错误、0 个警告和 1 个未使用变量 hint。HTML 核对 12 页的 meta、Open Graph 与 BlogPosting 描述一致，canonical 自指、摘要无截断，hreflang 指向实际配对页。SEO 生成报告已恢复至运行前快照。构建另输出中文 Cypress 示例中若干代码块语言标签回退提示，本轮未修改该正文。

线上 12 页当前均返回 HTTP 200 且 canonical 指向自身，但仍显示旧摘要；本轮修改只在本地，未提交或部署。Google Drive 对 Search Console、GSC 和 Google Search Performance 的检索均无结果，点击、展示、CTR 和排名未评估；本轮未测量 CWV，也未运行单元测试。源码扫描还剩 33 条以省略号结尾的摘要候选，仍需逐篇核对后再判断是否修正。

## 2026-10-13 API 自动化教程双语摘要复核

对照正文更新 11 组 API 自动化教程的中英文摘要，涵盖 Bruno CLI 项目、Newman 文件上传与证书、Postman 脚本和第三方库、数据驱动、HTML/GitHub Actions/Allure 报告、Postman 入门、Pytest 并发与项目搭建，以及 SuperTest 数据驱动、多环境、Mocha/Jest 项目。英文 Pytest 与 SuperTest 摘要原先都误称相关工具为 Java 库，本轮按文章中的 Python、Mocha 和 Jest 内容修正。正文、标题、日期和 URL 保持不变。

验证结果：`npm run seo:check:strict` 通过，缺失标题/摘要、重复标题、坏链和内容关联错误均为 0，保留 44 条长摘要人工复核提示。`npm run build` 通过，生成 2,819 个 HTML 页面、2,537 个可收录页面和同数 sitemap URL；796 条 70 字以下摘要仅作相关性人工复核提示。Astro 检查为 0 个错误、0 个警告和 1 个未使用变量 hint。HTML 核对 22 页的 meta、Open Graph 与 BlogPosting 描述一致，canonical 自指、hreflang 对应实际双语页且摘要无截断。SEO 生成报告已恢复至运行前快照。构建另输出中文 Cypress 示例中若干代码块语言标签回退提示，本轮未修改该正文。

线上 22 页当前均返回 HTTP 200 且 canonical 指向自身，但仍显示旧摘要；本轮修改只在本地，未提交或部署。Google Drive 对 Search Console、GSC 和 Google Search Performance 的检索无结果，且没有可用的直接 GSC 工具，点击、展示、CTR 和排名未评估；本轮未测量 CWV，也未运行单元测试。源码扫描还剩 22 条以省略号结尾的摘要候选，均在 AI 测试挑战系列，仍需逐篇核对后再判断是否修正。

## 2026-10-13 AI 测试挑战摘要复核（三）

继续逐篇核对 30 天 AI 测试挑战系列，更新第 21、22、25、26 天的四组中英文摘要。第 21 天概述回顾挑战经验并起草个人 AI 测试宣言；第 22 天突出多学科团队设想中的 AI 伦理专家和培训发展负责人；第 25 天概括安全测试研究、团队障碍、工具价值和数据安全风险；第 26 天依据正文提到的两篇文章总结 AI 能耗与碳排放涉及的模型训练、数据中心、存储和模型优化。未改标题、正文、日期或 URL。

验证结果：`npm run seo:check:strict` 通过，缺失标题/摘要、重复标题、坏链、格式错误的 Markdown 链接和内容关联错误均为 0，保留 44 条长摘要人工复核提示。`npm run build` 通过，生成 2,819 个 HTML 页面、2,537 个可收录页面和同数 sitemap URL；800 条 70 字以下摘要仅作为相关性人工复核提示。构建 HTML 核对八页的 meta、Open Graph 和 BlogPosting 描述与源码一致，canonical 自指，中英文 hreflang 双向对应，摘要没有省略号截断。严格检查生成的 SEO 报告已恢复，目录与运行前快照一致。构建另输出中文 Cypress 示例代码块的 Shiki 语言标签回退提示，本轮未修改相关正文；未运行单元测试或 SEO Playwright。

线上八页当前均返回 HTTP 200，canonical 指向自身，但仍展示旧摘要；本轮修改仅在本地，未提交或部署。源码扫描还剩 14 条以省略号结尾的摘要候选（英文 8 条、中文 6 条），仍需逐篇核对。当前没有可用的 Search Console 数据，点击、展示、CTR 和排名未评估；本轮未测量 CWV。

## 2026-10-13 AI 测试挑战摘要复核（四）

继续核对第 2、5、6、8 天的四组中英文摘要。第 2 天聚焦 AppAgent 通过自主探索或示范学习手机应用，以及移动端 UI 探索测试的潜力与限制；第 5 天概括美团与复旦大学团队融合界面文本、视觉内容和组件树属性来识别交互意图的案例；第 6 天说明作者为何考虑尝试 Katalon Studio，并将 AI 用例编写、代码解释和自愈功能表述为产品介绍，不当作实测结果；第 8 天概括 MoT 登录页 BDD 提示词与 ChatGPT 3.5 生成的功能、非功能测试用例。未改标题、正文、日期或 URL。

验证结果：`npm run seo:check:strict` 通过，缺失标题/摘要、重复标题、坏链、格式错误的 Markdown 链接和内容关联错误均为 0，保留 44 条长摘要人工复核提示。`npm run build` 通过，生成 2,819 个 HTML 页面、2,537 个可收录页面和同数 sitemap URL；803 条 70 字以下摘要仅作相关性人工复核提示。构建 HTML 核对两轮更新的 16 页：meta、Open Graph 和 BlogPosting 描述与源码一致，canonical 自指，中英文 hreflang 双向对应。SEO 生成报告已恢复，目录与运行前快照一致。Astro 检查为 0 个错误、0 个警告和 1 个未使用变量 hint；构建另输出中文 Cypress 示例代码块的 Shiki 语言标签回退提示，本轮未改该正文。未运行单元测试或 SEO Playwright。

线上 16 页当前均返回 HTTP 200，canonical 指向自身，但仍展示旧摘要；本轮修改仅在本地，未提交或部署。源码扫描还剩 6 条省略号候选（英文 4 条、中文 2 条），仍需逐篇判断。当前没有可用的 Search Console 数据，点击、展示、CTR 和排名未评估；本轮未测量 CWV。

## 2026-10-13 AI 测试挑战摘要复核（五）

完成剩余六条博客省略号摘要的逐篇复核，并同步优化四组双语页面及第 9、12 天中文页。第 1 天说明作者的 AI 测试学习目标；第 3 天列出测试数据生成、缺陷预测、视觉测试、QA 知识库和测试工具开发五类用途；第 4 天概括 AMA 中的偏见、数据安全、日常测试应用和测试人员职责；第 7 天改正“prompt engineering”的中文误译，并总结背景、约束、目标和期望输出；第 9 天介绍 BDD 测试提示词及 CRAFT、PREP 的调整过程；第 12 天概括文章讨论的准确性、隐私、公平性和伦理风险。博客摘要扫描现无以省略号结尾的候选。

验证结果：`npm run seo:check:strict` 通过，缺失标题/摘要、重复标题、坏链、格式错误的 Markdown 链接和内容关联错误均为 0，保留 44 条长摘要人工复核提示。`npm run build` 通过，生成 2,819 个 HTML 页面、2,537 个可收录页面和同数 sitemap URL；809 条 70 字以下摘要仍仅作相关性人工复核提示。构建 HTML 核对本轮涉及的 14 组中英文页面共 28 页，meta、Open Graph 和 BlogPosting 描述与源码一致，canonical 自指，hreflang 双向对应。SEO 报告已恢复至运行前快照。Astro 检查为 0 个错误、0 个警告和 1 个未使用变量 hint；另有中文 Cypress 示例代码块的 Shiki 语言标签回退提示，本轮未修改该正文。未运行单元测试或 SEO Playwright。

线上 28 页均返回 HTTP 200，canonical 指向自身，但仍未体现当前本地摘要；本轮修改仅在本地，未提交或部署。没有可用的 Search Console 数据，点击、展示、CTR 和排名未评估；本轮未测量 CWV。

## 2026-10-13 API 自动化入门与环境摘要复核

对照正文更新 Pytest、REST Assured、SuperTest 三组中英文入门摘要。Pytest 摘要说明断言、自动发现、插件、报告及 Python 环境准备；REST Assured 摘要写明 Gradle/Maven 项目、依赖、链式请求与响应断言；SuperTest 摘要指出 Jest 或 Mocha/Chai 的组合及项目配置。英文摘要原先把环境准备写成“environment to be built”，本轮已改为自然且具体的表述。未改正文、标题、发布日期或 URL。

验证结果：`npm run seo:check:strict` 通过，缺失标题/摘要、重复标题、坏链、格式错误的 Markdown 链接和内容关联错误均为 0，保留 44 条长摘要人工复核提示。`npm run build` 通过，生成 2,819 个 HTML 页面、2,537 个可收录页面和同数 sitemap URL；812 条 70 字以下摘要仅作相关性人工复核提示。构建 HTML 核对六页的 meta、Open Graph、BlogPosting 描述与源码一致，canonical 自指，hreflang 双向对应。SEO 报告已恢复至运行前快照。Astro 检查为 0 个错误、0 个警告和 1 个未使用变量 hint；仍有中文 Cypress 示例代码块的 Shiki 语言标签回退提示。未运行单元测试或 SEO Playwright。

线上六页均返回 HTTP 200，canonical 指向自身，但仍未体现当前本地摘要；本轮修改仅在本地，未提交或部署。另核对线上 robots.txt、sitemap index、sitemap 分片和中英文首页均返回 HTTP 200；分片含 2,537 个 URL，无重复，2,537 个 URL 均带语言链接，目标存在、互相返回且自引用无错误。Google Drive 中 Search Console、GSC、Google Search Performance 和 SEO report 检索无结果；GSC Wizard 在插件目录可用但当前未安装。点击、展示、CTR 和排名未评估。PageSpeed Insights API 返回 HTTP 429，配额响应显示每日限额为 0，因此本轮 CWV 未评估。

## 2026-10-13 向后兼容性摘要错配修正

复核中文“Backward Compatibility 向后兼容性”术语博客时，发现摘要误写成“背靠背测试”，与页面标题及正文定义不符。现改为概括软件新版本对旧版本、数据格式和接口的兼容，并引用正文中的 Python 2/3 与 Java 示例。英文博客目录没有对应文章，因此只更新现有中文页；正文、标题、日期和 URL 保持不变。

验证结果：`npm run seo:check:strict` 通过，缺失标题/摘要、重复标题、坏链、格式错误的 Markdown 链接和内容关联错误均为 0，保留 44 条长摘要人工复核提示。`npm run build` 通过，生成 2,819 个 HTML 页面、2,537 个可收录页面和同数 sitemap URL；813 条 70 字以下摘要仅作相关性人工复核提示。构建 HTML 确认该页的 meta、Open Graph 和 Article 描述与源码一致，canonical 自指，hreflang 仅指向实际中文页及其默认入口。SEO 报告已恢复至运行前快照。Astro 检查为 0 个错误、0 个警告和 1 个未使用变量 hint；构建另有 Cypress 示例代码块的 Shiki 语言标签回退提示。未运行单元测试或 SEO Playwright。

线上页面返回 HTTP 200 且 canonical 自指，但仍展示旧摘要；本轮修改仅在本地，未提交或部署。当前没有可用 Search Console 表现数据，点击、展示、CTR 和排名未评估；本轮未测量 CWV。

## 2026-10-13 可用性测试摘要具体化

对照中文 Availability Testing 词条正文，原摘要主要重复系列模板，没有突出正常运行时间、响应性、故障恢复，以及维护窗口、流量峰值和网络中断等测试情景。现改为说明 MTBF、MTTR、健康检查、监控工具与自动化实践；标题、正文、发布日期和 URL 不变。仓库中没有对应英文博客，因此只更新中文页；文件里原有的微信公众号图片替代文本修改已保留。

验证结果：`npm run seo:check:strict` 通过，缺失标题/摘要、重复标题、坏链、格式错误的 Markdown 链接和内容关联错误均为 0，保留 44 条长摘要人工复核提示。`npm run build` 通过，生成 2,819 个 HTML 页面、2,537 个可收录页面和同数 sitemap URL；813 条短摘要仅作相关性人工复核提示。Astro 检查为 0 个错误、0 个警告和 1 个未使用变量 hint；构建检查通过。构建 HTML 确认新摘要与 meta、Open Graph 和 BlogPosting 描述一致，canonical 自指，hreflang 指向该中文页及默认入口。SEO 临时报告已恢复至运行前快照。线上文章返回 HTTP 200 且 canonical 自指，但仍显示旧摘要；本轮修改仅在本地，未提交或部署。域名复核时，`inaodeng.com.cn` 无法解析，`naodeng.com.cn/robots.txt` 返回 HTTP 200 并跳转到 `inaodeng.com`，因此保留仓库配置的 `inaodeng.com` 主域。Search Console 表现与 CWV 未评估；未运行单元测试或 SEO 浏览器测试。

## 2026-10-13 验收测试摘要具体化

对照中文 Acceptance Testing 词条正文，原摘要重复系列介绍，没有指出页面覆盖的验收类型与实施主题。现改为概括 UAT、BAT、Alpha/Beta、合同、法规和运营验收测试，以及验收标准、真实场景、用户反馈、自动化和发布决策；标题、正文、日期与 URL 不变。英文博客目录没有对应文章，因此只更新中文博客。

验证结果：`npm run seo:check:strict` 通过，缺失标题/摘要、重复标题、坏链、格式错误的 Markdown 链接和内容关联错误均为 0，保留 44 条长摘要人工复核提示。`npm run build` 通过，生成 2,819 个 HTML 页面、2,537 个可收录页面与同数 sitemap URL；813 条短摘要只是人工相关性复核提示。Astro 检查为 0 个错误、0 个警告和 1 个未使用变量 hint，SEO 构建门禁通过。生成 HTML 中 meta、Open Graph 与 BlogPosting 描述一致，canonical 自指，hreflang 指向实际中文页和默认入口；临时 SEO 报告与运行前快照一致。线上文章返回 HTTP 200、canonical 自指，但仍显示旧摘要；本地修改尚未提交或部署。Drive 搜索没有 Search Console 报告，GSC Wizard 可用但未安装或连接账号，因此点击、展示、CTR、排名未评估；本轮未测量 CWV，也未运行单元测试或 SEO 浏览器测试。

## 2026-10-13 摘要更新上线复核

`main` 与 `origin/main` 当前都在 `ce0cfa31877b2fe9f5d411bea6b4200a6b4a6cb2`。对应的 [Cloudflare 部署工作流](https://github.com/naodeng/naodeng.com.cn/actions/runs/38333734203) 已成功完成。部署后复查 Availability Testing、Backward Compatibility 和 Acceptance Testing 三篇中文博客：均返回 HTTP 200、canonical 自指，meta 与 Open Graph 摘要均已更新为当前内容。此前读到旧摘要的请求发生在部署完成前。

构建后按 sitemap 对 2,537 个 HTML 页面逐页核对：缺失文件、缺失摘要、重复摘要、meta 与 Open Graph 不一致、canonical 非自指及 sitemap 中的 noindex 均为 0。本轮本地 `npm run seo:check:strict` 与 `npm run build` 均通过。GitHub Tests 工作流已完成，单元测试通过，SEO E2E 为 830 项通过、2 项跳过。Drive 搜索未找到 Search Console 报告，GSC Wizard 可用但尚未安装或连接账号，因此点击、展示、CTR 和排名未评估；CWV 未测量。

## 2026-10-13 QA 术语博客摘要细化（二）

继续逐篇核对中文 QA 术语博客，将背靠背测试、无障碍测试和 A/B 测试的系列通用摘要改为页面实际主题：同输入多实现的输出比对与差异分析；WCAG/Section 508、键盘、屏幕阅读器和 ARIA 检查；随机分组、指标与样本量、统计显著性和用户分群。仅改三篇中文页的 description；没有同主题同目录的英文博客对译，标题、正文、日期和 URL 保持不变。

验证结果：`npm run seo:check:strict` 通过，缺失标题/摘要、重复标题、坏链、格式错误的 Markdown 链接和内容关联错误均为 0，保留 44 条长摘要人工复核提示。`npm run build` 通过，生成 2,819 个 HTML 页面、2,537 个可收录页面及同数 sitemap URL；813 条短摘要仍只是人工相关性复核提示，SEO 构建门禁通过。构建 HTML 确认三页的 meta、Open Graph 和 BlogPosting 描述与新摘要一致，canonical 自指，hreflang 指向实际中文页和默认入口。SEO 临时报告已按运行前快照恢复。线上三页返回 HTTP 200 且 canonical 自指，仍显示旧摘要；本轮修改仅在本地，未提交或部署。Drive 搜索没有 Search Console 报告，GSC Wizard 尚未安装或连接账号，因此点击、展示、CTR 和排名未评估；CWV 未测量，未运行单元测试或 SEO 浏览器测试。

## 2026-10-13 QA Skills 三组双语摘要细化

根因分析、日志分析和生产验证的中英文博客原先共用同一套系列摘要，无法区分文章重点。按正文分别概括事故时间线与反证实验、结构化日志聚类与数据限制、发布后的业务和技术信号及回滚决策。仅更新六页的 description，标题、正文、日期和 URL 不变。

验证结果：`npm run seo:check:strict` 通过，缺失标题/摘要、重复标题、坏链、格式错误的 Markdown 链接和内容关联错误均为 0；58 条长摘要是人工复核提示。`npm run build` 通过，生成 2,819 个页面、2,537 个可收录页面及同数 sitemap URL；792 条 70 字以下摘要仅作相关性复核提示。Astro 检查为 0 个错误、0 个警告和 1 个未使用变量 hint；构建输出代码块的 Shiki 语言标签回退提示，本轮未修改相关正文。首次构建曾报一个未改动的蜕变测试博客临时模块缺失，检查源码与配置无变化；再次完整构建通过，首次错误未能复现。HTML 核对六页的 meta、Open Graph 与 BlogPosting 描述均和源码一致，canonical 自指，`en-US` 与 `zh-CN` 语言链接双向对应。SEO 检查生成的报告已恢复至运行前快照。

本轮摘要修改未提交或部署，线上结果未复核。Search Console 点击、展示、CTR、排名以及 CWV 本轮均未测量。

## 2026-10-13 性能测试 Skills 双语摘要去模板化

性能测试主题下十组中英文博客仍共用两类通用摘要模板。本轮按正文分别概括容量规划、指标异常、瓶颈定位、性能回归、压测结果、性能目标、负载建模，以及 Gatling、JMeter、k6 的具体实践；更新 20 页的 description，标题、正文、日期和 URL 不变。

验证结果：`npm run seo:check:strict` 通过，缺失标题/摘要、重复标题、坏链、格式错误的 Markdown 链接和内容关联错误均为 0；58 条长摘要是人工复核提示。`npm run build` 通过，生成 2,819 个页面、2,537 个可收录页面及同数 sitemap URL；792 条 70 字以下摘要仅作相关性复核提示。构建 HTML 逐页核对 20 页的 meta、Open Graph、BlogPosting 描述与源码一致，canonical 自指，`en-US` 与 `zh-CN` 双向对应，且全部进入 sitemap；本组摘要无重复，英文摘要均不超过 155 字符。Astro 检查为 0 个错误、0 个警告和 1 个既有未使用变量 hint；构建另输出 Shiki 代码块语言标签回退提示，本轮未修改相关正文。SEO 检查生成的报告已恢复至运行前快照。

修改仅在本地，未提交或部署，线上页面未复核。Drive 搜索未找到 Search Console 报告，GSC Wizard 当前未安装，点击、展示、CTR 和排名未评估；CWV 本轮未测量。

## 2026-10-13 UI 自动化 Skills 双语摘要去模板化

Playwright、Puppeteer、WebdriverIO、Cypress、Selenium 和 TestCafe 六组中英文文章共用泛化摘要，未突出各工具的测试证据与工程重点。按正文分别概括稳定定位器和隔离数据、DOM/导航证据、跨浏览器能力和远端日志、网络控制与断言时机、等待和页面边界，以及选择器与浏览器差异；更新 12 页的 description，标题、正文、日期和 URL 不变。

验证结果：`npm run seo:check:strict` 通过，缺失标题/摘要、重复标题、坏链、格式错误的 Markdown 链接和内容关联错误均为 0；58 条长摘要是人工复核提示。`npm run build` 通过，生成 2,819 个页面、2,537 个可收录页面及同数 sitemap URL；798 条 70 字以下摘要仅作相关性复核提示。构建 HTML 核对本组 12 页及上一组 20 页：meta、Open Graph、BlogPosting 描述与源码一致，canonical 自指，`en-US` 与 `zh-CN` 双向对应，全部进入 sitemap，描述无重复且英文均不超过 155 字符。Astro 检查为 0 个错误、0 个警告和 1 个既有未使用变量 hint；构建输出 Shiki 代码块语言标签回退提示，本轮未改相关正文。SEO 检查生成的报告已恢复至运行前快照。

Drive 搜索未找到 Search Console 报告或导出；GSC Wizard 当前可用但未安装，因此点击、展示、CTR 和排名未评估。CWV 本轮未测量。Web 阅读工具对英文文章路径返回缓存未命中或不可访问，本轮未复核线上页面；这不是页面故障证据。修改仅在本地，未提交或部署。

同目录扫描后仍有 100 条通用模板摘要候选（英文 field-guide 模板 20 条、输入/安装模板 34 条；中文对应模板分别 20 条、26 条）。这些只是筛查线索，需逐篇对照正文确认，不直接视为缺陷。

## 2026-10-13 API 自动化 Skills 双语摘要去模板化

Bruno、Pytest、Postman、Supertest、REST Assured、API 测试和 API 契约测试七组中英文博客使用通用摘要，未突出具体验证边界。本轮依据正文分别概括集合版本管理与 CI 一致性、pytest 夹具隔离、Postman 变量和断言、Supertest HTTP 边界、REST Assured 失败诊断、API 契约风险，以及消费者期望驱动的契约示例；更新 14 页 description，标题、正文、日期和 URL 不变。

验证结果：`npm run seo:check:strict` 通过，缺失标题/摘要、重复标题、坏链、格式错误的 Markdown 链接和内容关联错误均为 0；58 条长摘要是人工复核提示。`npm run build` 通过，生成 2,819 个页面、2,537 个可收录页面及同数 sitemap URL；799 条 70 字以下摘要仅作相关性复核提示。HTML 核对 14 页的 meta、Open Graph 和 BlogPosting 描述与源码一致，canonical 自指，`en-US` 与 `zh-CN` 双向对应，全部进入 sitemap，摘要无重复且英文不超过 155 字符。Astro 检查为 0 个错误、0 个警告和 1 个既有未使用变量 hint；构建另输出 Shiki 代码块语言标签回退提示，本轮未修改相关正文。SEO 检查生成的报告已恢复至运行前快照。

Drive 对 Search Console、GSC 和 Google Search Performance 的搜索均无结果；GSC Wizard 可用但未安装，因此点击、展示、CTR 和排名未评估。CWV 本轮未测量。修改仅在本地，未提交或部署，线上页面未复核。

同目录更新后仍有 88 条完全匹配通用模板的摘要候选：英文 field-guide 模板 19 条、输入/安装模板 28 条；中文分别 19 条、22 条。需继续逐篇对照正文确认，不直接视为缺陷。

## 2026-10-13 大模型与提示词测试双语摘要具体化

LLM 评测设计、LLM 测试和提示词测试三组中英文博客沿用宽泛的 field-guide 摘要。本轮依据正文，分别概括代表性任务集、评分量表与评审器校准；事实准确性、引用、拒答、隐私、时延、成本及随机输出复测；以及提示词变更、多轮样本、量表评分和版本回归。仅更新六页的 description，标题、正文、日期和 URL 不变；相似但未来发布日期的草稿页暂不修改。

验证结果：`npm run seo:check:strict` 通过，缺失标题/摘要、重复标题、坏链、格式错误链接和内容关联错误均为 0；58 条长摘要是人工复核提示。`npm run build` 通过，生成 2,819 个 HTML 页面、2,537 个可收录页面及同数 sitemap URL；799 条 70 字以下摘要仅作人工相关性复核提示。Astro 检查为 0 个错误、0 个警告和 1 个既有未使用变量 hint，SEO 构建门禁通过。构建 HTML 核对六页的 meta、Open Graph、BlogPosting 摘要与源码一致，canonical 自指，`en-US`/`zh-CN` hreflang 相互对应，均在 sitemap 中；摘要互不重复，英文均不超过 155 字符。构建生成的三份 SEO 临时报告已恢复至运行前的干净版本。

Drive 对 Search Console、GSC 和 Google Search Performance 的搜索无结果；插件目录显示 GSC Wizard 可用但尚未安装，因此点击、展示、CTR 和排名未评估，CWV 未测量。本轮仅本地修改，未提交、部署或复核线上页面。

继续扫描后，该目录还有 82 条模板句式候选：英文 field-guide 16 条、输入/安装 28 条，中文 field-guide 16 条、输入/安装 22 条。它们是待逐篇检查的线索，并非自动判定为缺陷。

## 2026-10-13 测试策略与报告双语摘要具体化

测试策略、测试策略加强版、测试报告、测试报告评审、测试用例评审及加强版六组已发布中英文博客使用通用输入/安装摘要。本轮按正文改写为项目范围与质量门禁、来源版本与材料冲突、发布风险与责任人、报告证据审计、用例覆盖及跨来源高风险缺口；更新 12 页 description，其他内容不变。

验证结果：`npm run seo:check:strict` 与 `npm run build` 均通过；缺失标题/摘要、重复标题、坏链及错误关联均为 0，58 条长摘要和 799 条短摘要仍是人工复核提示。构建生成 2,819 个页面、2,537 个可收录页面及同数 sitemap URL；Astro 检查为 0 个错误、0 个警告和 1 个既有未使用变量 hint。HTML 核对本组 12 页及上一组 6 页的 meta、Open Graph、BlogPosting 描述、canonical、双向 hreflang 和 sitemap；均通过，摘要无重复且英文不超过 155 字符。三份 SEO 临时报告已恢复至运行前的干净版本。

本轮后同目录仍有 70 条模板句式候选：英文 field-guide 16 条、输入/安装 22 条，中文 field-guide 16 条、输入/安装 16 条。它们仍需结合正文逐页判断。Drive 对 Search Console 相关关键词搜索无结果，GSC Wizard 可用但未安装，搜索表现数据未评估；CWV 未测量。修改仅在本地，未提交或部署。

## 2026-10-13 风险与回归分析双语摘要具体化

变更影响分析、质量风险分析、回归范围分析、回归测试选择和不稳定测试分析五组已发布中英文博客共用 field-guide 摘要。本轮按正文说明变更后的依赖与重验证范围、风险触发条件及其证据、回归覆盖取舍，以及偶发失败的分类和处置；仅更新十页的 description。

验证结果：`npm run seo:check:strict` 与 `npm run build` 均通过；缺失标题/摘要、重复标题、坏链及错误关联为 0，58 条长摘要和 799 条短摘要仍作人工复核提示。构建生成 2,819 个页面、2,537 个可收录页面及同数 sitemap URL，SEO 构建门禁通过。Astro 检查为 0 个错误、0 个警告和 1 个既有未使用变量 hint；构建日志有 8 条现存 Shiki 代码块语言标签回退提示，未涉及本轮修改。HTML 核对本轮五组及前两轮九组，共 28 页：meta、Open Graph、BlogPosting 描述与源码一致，canonical 自指，双向 hreflang 和 sitemap 均正确；摘要无重复，英文最长 150 字符。三份 SEO 临时报告已恢复至运行前的干净版本。

本轮后同目录仍有 60 条模板句式候选：英文 field-guide 11 条、输入/安装 22 条，中文 field-guide 11 条、输入/安装 16 条；这些仍是待结合正文判断的线索。Drive 未找到 Search Console 报告，GSC Wizard 可用但未安装；点击、展示、CTR、排名未评估，CWV 未测量。修改仅在本地，未提交或部署。

## 2026-10-13 需求分析与验收标准摘要及开场修订

验收标准评审、需求缺口分析、可测试性分析和需求分析四组已发布中英文文章的摘要仍沿用通用模板。本轮依照正文分别概括验收条件歧义、需求与接口规则缺口、可观察性和测试阻塞，以及会员升级需求中的冲突和未知项；更新八页的 description。另发现前三篇英文正文共用同一段偏离主题的开场，且重复一句话，已按各页实际问题替换为主题明确的介绍。中文对应页的开场已有具体内容，因此保留；标题、日期和 URL 不变。

验证结果：`npm run seo:check:strict` 与 `npm run build` 均通过。缺失标题/摘要、重复标题、坏链、格式错误链接和错误关联均为 0；58 条长摘要与 799 条短摘要是人工复核提示。构建生成 2,819 个 HTML 页面、2,537 个可收录页面及同数 sitemap URL，SEO 构建门禁通过；Astro 检查为 0 个错误、0 个警告和 1 个既有 hint，构建另输出 8 条既有 Shiki 代码块语言标签回退提示。构建 HTML 核对八页的 meta、Open Graph、BlogPosting 描述、canonical、双向 hreflang 和 sitemap，均与源码一致；摘要无重复，英文不超过 155 字符。三份 SEO 临时报告已恢复至运行前的干净版本。

本轮后同目录还剩 52 条模板句式候选：英文 field-guide 8 条、输入/安装 21 条，中文 field-guide 8 条、输入/安装 15 条，仍需结合正文判断。Drive 未找到 Search Console 报告；GSC Wizard 可用但未安装，因此搜索表现未评估，CWV 未测量。本轮改动仅在本地，未提交或部署。

## 2026-10-13 跨角色质量视角双语摘要细化

多角色质量汇总、产品质量、QA 质量、技术质量、UX 质量和项目交付六组文章的英文摘要仍沿用输入/安装模板。根据正文的支付回调、会员升级和结账示例，分别概括多方证据冲突、用户与业务结果、覆盖与残余风险、架构及运行后果、体验恢复路径，以及范围与依赖取舍；更新 12 页中英文 description，并保持语言间事实对应。

验证结果：`npm run seo:check:strict` 与 `npm run build` 通过，缺失标题/摘要、重复标题、坏链、格式错误和错误关联均为 0；58 条长摘要及 799 条短摘要仍是人工复核提示。构建生成 2,819 个页面、2,537 个可收录页面及同数 sitemap URL，SEO 构建门禁通过。Astro 检查为 0 个错误、0 个警告和 1 个既有 hint，另有 8 条既有 Shiki 代码块语言标签回退提示。HTML 核对本组 12 页及上一组 8 页：meta、Open Graph、BlogPosting、canonical、双向 hreflang 和 sitemap 均通过；摘要无重复，英文最长 151 字符。三份 SEO 临时报告已恢复至干净版本。

本轮后同目录还有 46 条模板句式候选：英文 field-guide 8 条、输入/安装 15 条，中文 field-guide 8 条、输入/安装 15 条；逐篇判断仍在继续。Drive 搜索没有找到 Search Console 报告，GSC Wizard 可用但未安装，点击、展示、CTR、排名未评估；CWV 未测量。本轮修改仅在本地，未提交或部署。

## 2026-10-13 测试流程双语摘要细化

日常测试、迭代测试、发布测试和陌生项目测试技能探索四组文章仍使用通用摘要。本轮依据正文分别概括日终测试交接、迭代阶段及证据、候选版本发布交接，以及陌生项目入口与风险梳理；更新八页中英文 description，标题、正文、日期和 URL 不变。

验证结果：`npm run seo:check:strict` 通过，缺失标题/摘要、重复标题、坏链、格式错误链接和错误关联均为 0，58 条长摘要保留作人工复核提示。`npm run build` 通过，生成 2,819 个 HTML 页面、2,537 个可收录页面及同数 sitemap URL；800 条短摘要仍是相关性人工复核提示。Astro 检查为 0 个错误、0 个警告和 1 个既有未使用变量 hint；构建另有 8 条 Shiki 语言标签回退提示。HTML 核对八页的 meta、Open Graph、BlogPosting、canonical、双向 hreflang 和 sitemap 均通过；摘要无重复，英文为 123–134 字符。三份 SEO 临时报告已恢复至构建前版本。

本轮后同目录还有 38 条模板摘要候选：英文 field-guide 8 条、输入/安装 11 条，中文 field-guide 8 条、输入/安装 11 条；仍需逐篇对照正文确认，模板匹配本身不代表缺陷。Drive 搜索未找到 Search Console 报告，GSC Wizard 可用但尚未安装或连接账号，因此点击、展示、CTR 和排名未评估；CWV 未测量。本轮修改仅在本地，未提交或部署。

## 2026-10-13 测试与安全 Skills 双语摘要细化

AI 辅助测试、自动化测试、缺陷上报、测试代码审查、手动与探索性测试、移动端测试、测试用例编写加强版和安全测试八组已发布中英文博客共用输入/安装类摘要。本轮依据正文分别概括 AI 生成测试的真实性与证据审查、自动化候选和维护成本、缺陷复现材料、断言与隔离风险、探索会话证据、移动端状态变化、多来源版本追踪，以及安全风险排序和复测证据；更新 16 页 description，其他字段和正文不变。

验证结果：`npm run seo:check:strict` 与 `npm run build` 均通过。缺失标题/摘要、重复标题、坏链、格式错误链接和错误关联均为 0，58 条长摘要仍是人工复核提示。构建生成 2,819 个 HTML 页面、2,537 个可收录页面及同数 sitemap URL；800 条短摘要仍需人工判断相关性。Astro 检查为 0 个错误、0 个警告和 1 个既有 hint，另有 8 条既有 Shiki 语言标签回退提示。HTML 核对本组 16 页及上一组 8 页，共 24 页：meta、Open Graph、BlogPosting 描述、canonical、双向 hreflang 和 sitemap 均通过；摘要无重复，英文均不超过 155 字符。三份 SEO 临时报告已恢复至运行前版本。

本轮后按现有模板分类还剩 22 条摘要候选：英文 field-guide 8 条、输入/安装 3 条，中文各对应 8 条和 3 条。剩余输入/安装模板已逐页确认只在三组中英未来草稿中出现，均标记 `draft: true`，本轮未修改。Drive 对 Search Console、GSC 和 Google Search Performance 的检索均无结果，当前可用工具中也没有直接 GSC 查询入口；点击、展示、CTR 和排名未评估，CWV 未测量。本轮仅本地修改，未提交或部署。

## 2026-10-13 Awesome QA Skills 博客与草稿摘要去模板化

依据正文重写分布式链路分析、PR 测试影响分析、生产事故分析和测试数据生成四组已发布文章的中英文摘要；本轮继续按用户要求，把四组未来草稿（智能体工具调用、AI 智能体、AI 功能、提示注入测试）和三组 Skill 文案草稿（变更验证、文案契约审查、文案精简）也纳入处理，共更新 11 组双语 description。草稿仍保留 `draft: true` 和原发布日期，所有页面的标题、正文和 URL 不变。英文摘要均不超过 155 字符且同语言描述不重复。

本轮清除此前记录的两类精确通用模板候选：英文 field-guide 与输入/安装模板各 0 条，中文对应模板各 0 条。这一结果只覆盖这两类已跟踪句式，不代表所有摘要都已完成人工复核。

验证结果：`npm run seo:check:strict` 通过，缺失标题/摘要、重复标题、坏链、格式错误链接及内容关联错误均为 0；58 条长摘要仍是人工复核提示。`npm run build` 通过，生成 2,819 个 HTML 页面、2,537 个可收录页面及同数 sitemap URL；SEO 构建检查通过，800 条 70 字以下摘要仍是相关性复核提示。Astro 检查为 0 个错误、0 个警告和 1 个既有未使用变量 hint；构建另有 8 条 Shiki 代码块语言标签回退提示。HTML 核对四组已发布文章的八页，meta、Open Graph、BlogPosting 描述、canonical、双向 hreflang 和 sitemap 均正确；14 个草稿路由没有进入公开构建或 sitemap。

当前没有可用的 Search Console 表现数据，点击、展示、CTR 和排名未评估；本轮未测量 CWV。改动仅在本地，未提交或部署。

## 官方参考

- [Google：管理多语言页面](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Google：搜索摘要与 meta description](https://developers.google.com/search/docs/appearance/snippet)
- [ISTQB：Advanced Level Test Management Syllabus v3.0](https://www.istqb.org/wp-content/uploads/2024/11/ISTQB_CTAL-TM_Syllabus_v3.0_zKjKsaN.pdf)
- [TMAP：Test Process Improvement (TPI Next)](https://www.tmap.net/building-blocks/test-process-improvement-tpi/)
- [Google：创建和提交 sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Astro：sitemap 的 serialize 配置](https://docs.astro.build/en/guides/integrations-guide/sitemap/#serialize)
- [Google：站点链接搜索框已退出搜索结果](https://developers.google.com/search/blog/2024/10/sitelinks-search-box)


## 2026-10-13 Awesome QA Skills 正文重复与双语内容对齐

在 12 篇已发布英文 Skill 文章中发现同一段通用开场；其中六篇质量视角文章还复用了相同的示例表、角色分析和 FAQ，与各自中文版的会员升级、项目交付、技术回调、结账回归、产品规则和 UX 状态内容不符。本轮把 12 篇英文开场改成主题具体的案例摘要，并重写六篇质量视角英文正文，使案例、流程、证据边界和 FAQ 与中文版主题对应。六篇非角色视角文章的中文通用开场也改为逐篇概述；修正技术质量视角中文证据表的列分隔符。标题、日期、URL、现有安装说明和源 Skill 链接保留。

按用户要求，继续核验此前已优化的七组未来草稿：14 个中英文源文件仍标记为草稿，发布日期不变，构建输出和 sitemap 均不包含这些草稿；本轮没有发现相同的正文通用段落出现在草稿中。草稿摘要的去模板处理记录见上一节。

验证结果：npm run seo:check:strict 与 npm run build 均通过。SEO 源码检查的缺失标题、缺失摘要、重复标题、坏链、格式错误链接、legacy 相对链接及错误内容关联均为 0；58 条长摘要和构建检查中的 800 条短摘要仍是人工复核提示。构建生成 2,819 个 HTML 页面、2,537 个可收录页面及同数 sitemap URL；Astro 检查为 0 个错误、0 个警告和 1 个既有未使用变量 hint，构建另有 8 条既有 Shiki 代码块语言标签回退提示。对 12 组双语路由共 24 个构建页核对 meta、Open Graph、BlogPosting 描述、canonical、成对 hreflang 和 sitemap，均通过。构建产生的三份 SEO 临时报告已恢复到运行前版本。

本轮没有可用的 Search Console 表现数据，因此点击、展示、CTR 和排名未评估；CWV 未测量。公开页面和索引尚未因本地修改而更新；本轮未提交或部署。

## 2026-10-13 Postman 教程开场去重与未来草稿摘要复核

中文 Postman 入门教程曾复用《接口测试简介》中的 API 定义、类型和步骤开场；英文对应页也以泛化的 API 测试介绍起头。本轮改为围绕 Postman collection 项目搭建、请求和测试脚本、环境配置及 Newman 执行与报告展开，并链接到独立的接口测试概览。同步更新中英文 meta description，保持标题、日期和 URL 不变。

按用户要求将草稿纳入 SEO 检查：核对 69 组中英文 `draft: true` 博客，共 138 个源文件；标题和摘要齐全且无重复，双语发布日期一致，69 篇正文首段均不重复。两条超过 155 字符的英文摘要已精简；中文摘要虽低于 70 字符但内容完整，未为满足字符数而填充。草稿标记和日期均保留，构建输出及 sitemap 中没有这 138 个草稿路由。

验证结果：`npm run seo:check:strict` 和 `npm run build` 通过。严格检查中的缺失标题/摘要、重复标题、坏链、格式错误链接、旧式相对链接和错误内容关联均为 0；58 条长摘要仍需人工判断。构建生成 2,819 个 HTML 页面、2,537 个可收录页面及 2,537 个 sitemap URL，SEO 构建门禁通过；800 条短摘要仍是长度提示，不代表内容失败。Astro 检查为 0 个错误、0 个警告和 1 个既有未使用变量提示，构建另有 8 条既有 Shiki 语言标签回退提示。对 Postman 教程和接口概览的四个中英文构建页核对 meta、Open Graph、BlogPosting、canonical、双向 hreflang 与 sitemap；新开场和内部链接已渲染，重复的 API 定义已从教程中移除。三份 SEO 临时报告已恢复至运行前版本。

当前没有可用的 Search Console 数据，点击、展示、CTR 和排名未评估；CWV 未测量。改动仅在本地，未提交或部署。

## 2026-10-13 CI/CD 教程开场与摘要差异化

首段扫描发现 Pytest、REST Assured、SuperTest 三组中英文 CI/CD 教程复用同一句泛化开场；Gatling 中英文教程也用“以 GitHub Actions 为例”的空泛句子开头。本轮依照实际工作流改为说明 Pytest 的 Python 依赖、触发条件和报告产物，REST Assured 的 Gradle/Maven 与 Allure，SuperTest 的 Mocha/Jest，以及 Gatling 的 Gradle/Scala 与 Maven。同步将 REST Assured 和 SuperTest 的双语 meta description 改为具体工作内容，并把 Pytest 英文摘要从 186 字符收紧到 128 字符。各页标题、发布日期、正文步骤和 URL 保持不变。

验证结果：`npm run seo:check:strict` 通过；缺失标题/摘要、重复标题、坏链、格式错误链接、legacy 相对链接和错误关联均为 0，长摘要人工复核提示由 58 条降至 57 条。`npm run build` 通过，生成 2,819 个页面、2,537 个可收录页面及同数 sitemap URL，SEO 构建检查通过；801 条短摘要仍是人工相关性复核提示。Astro 检查为 0 个错误、0 个警告和 1 个既有未使用变量 hint；8 条 Shiki 语言回退提示仍来自无关旧代码块。构建 HTML 核对四组双语共 8 页：新首段已渲染，meta、Open Graph、BlogPosting 描述、canonical、成对 hreflang 与 sitemap 均通过。临时 SEO 报告已恢复至本轮运行前快照。

线上 Pytest 英文和中文页面均返回 HTTP 200，仍显示旧开场；本轮修改仅在本地，尚未部署。Drive 搜索 “Search Console” 返回空结果，当前可用工具没有 GSC 查询入口；点击、展示、CTR、排名未评估，CWV 未测量。

## 2026-10-13 QA Skills 草稿摘要去模板化

按用户补充要求，将未发布草稿也纳入本轮维护。复核博客中 138 个 `draft: true` 源文件，共 69 组中英文配对：标题与摘要齐全且各语言内唯一，配对发布日期一致，正文首段没有精确重复。16 篇英文 QA Skills 草稿虽各自概括了不同主题，但摘要都以 “A bilingual guide to…” 起头；依据正文所述任务改为直接说明读者可以评估、检查或设计什么。对应中文摘要已具体且与英文主题相符，因此保留。标题、正文、日期、URL 和草稿标记均未改动。该处理遵循 Google 关于摘要准确描述具体页面、避免重复或相似描述的建议；Google 不规定固定长度上限（[Google 搜索摘要指南](https://developers.google.com/search/docs/appearance/snippet)）。

验证结果：`npm run seo:check:strict` 通过，缺失标题/摘要、重复标题、坏链、格式错误链接、旧式相对链接及内容关联错误均为 0；57 条长摘要仍是人工复核提示。`npm run build` 通过，生成 2,819 个 HTML 页面、2,537 个可索引页面和 2,537 个 sitemap URL；801 条短摘要仍需结合内容人工复核。Astro 检查为 0 个错误、0 个警告和 1 个既有 hint，另有 8 条既有 Shiki 语言标签回退提示。逐条核对 69 组双语草稿，138 个预期博客路由均未生成且不在 sitemap 中；英文重复开头现为 0。检查期间更新的三份临时 SEO 报告已恢复到运行前干净版本，`git diff --check` 通过。

当前没有可用的 Search Console 表现数据，点击、展示、CTR 和排名未评估；CWV 未测量。改动仅在本地，未提交或部署。

## 2026-10-13 UI 测试最佳实践摘要去套话

复核中文 UI Testing Best Practice 系列后，发现 10 篇摘要反复使用“这篇博文……读者将学到……”等介绍句，未直接呈现文章中的验证方法。按正文分别概括邮件字段与邀请流程、测试状态隔离和不稳定结果、从端到端测试入门、条件等待与文件命名、测试作为行为文档、React 用例可读性、UI 集成与后端 E2E 分工、测试层级取舍、Cypress 的浏览器调试，以及 Percy/Applitools 视觉回归示例。其余同系列摘要已有具体方法，保留不动。仓库没有这些文章的英文对译源文件，因此本轮只更新中文摘要；标题、正文、日期、URL 和发布状态不变。摘要应准确、独特地描述页面内容；Google 不规定固定长度上限（[Google 搜索摘要指南](https://developers.google.com/search/docs/appearance/snippet)）。

验证结果：`npm run seo:check:strict` 通过，缺失标题/摘要、重复标题、坏链、格式错误链接、旧式相对链接和内容关联错误均为 0；57 条长摘要仍是人工复核提示。`npm run build` 通过，生成 2,819 个 HTML 页面、2,537 个可索引页面及 2,537 个 sitemap URL；811 条 70 字以下摘要是相关性复核提示，本轮 10 条已结合正文逐篇核对，没有为长度要求填充。Astro 检查为 0 个错误、0 个警告和 1 个既有 hint，另有 8 条既有 Shiki 语言标签回退提示。核对 10 个构建页面的 meta、Open Graph、BlogPosting 描述、自指 canonical、zh-CN hreflang 和 sitemap，均通过；没有指向不存在英文对译页的 alternate。三份检查生成的 SEO 临时报告已恢复到运行前干净版本，`git diff --check` 通过。

线上复核：`naodeng.com.cn` 根域返回 301 并跳转至 `inaodeng.com`；正式站点的 `robots.txt`、sitemap index 和 sitemap 分片均返回 HTTP 200。线上 sitemap 有 2,537 个唯一 URL，全部使用正式主机名且不带查询参数或片段。本轮三次 Drive 检索（Search Console、Google Search Performance、GSC）均无结果，当前工具列表没有 Search Console 查询入口；点击、展示、CTR、排名未评估，CWV 未测量。改动仅在本地，未提交或部署。

## 2026-10-13 QA Skills 分析类摘要差异化

四组已发布中英文 QA Skills 文章——测试数据需求、测试维护成本、测试有效性和测试套件健康——的摘要都以 “A bilingual guide to analyzing…” / “双语指南，围绕…分析” 开头。依据正文开场与检查范围，把八条摘要改为直接说明各文的判断任务与输入证据：数据实体与准备约束、维护成本与置信度、测试信号与漏检边界、运行历史与套件健康风险。两种语言保持事实对应；标题、正文、发布日期、URL 和发布状态均未改变。更新符合 Google 对页面级摘要应具体、各自有别的建议；不按固定字符长度机械删改（[Google 搜索摘要指南](https://developers.google.com/search/docs/appearance/snippet)）。

验证结果：`npm run seo:check:strict` 通过，缺失标题/摘要、重复标题、坏链、格式错误链接、旧式相对链接和内容关联错误均为 0；57 条长摘要仍是人工复核提示。`npm run build` 通过，生成 2,819 个 HTML 页面、2,537 个可索引页面和 2,537 个 sitemap URL；811 条 70 字以下摘要为相关性复核提示，不代表硬错误。Astro 检查为 0 个错误、0 个警告和 1 个既有 hint，另有 8 条既有 Shiki 代码块语言回退提示。核对这四组共八个构建页的 meta、Open Graph、BlogPosting、canonical、互相返回的 en-US/zh-CN hreflang 和 sitemap，均与源码一致。检查生成的三份 SEO 临时报告已恢复到运行前内容；`git diff --check` 通过。

线上复核确认正式站 `robots.txt`、sitemap index 和 sitemap 分片返回 HTTP 200；sitemap 含 2,537 个唯一 URL，主机名、查询参数和片段检查均无异常。当前 Drive 中没有 Search Console 报告，工具列表也没有直接 GSC 查询入口；点击、展示、CTR 和排名未评估，CWV 未测量。改动仅在本地，未提交或部署。

## 2026-10-13 双语草稿摘要占位符清理

按用户要求把未发布草稿纳入持续 SEO 维护。复核 138 个 `draft: true` 博客源文件，共 69 组中英文配对：标题与摘要齐全、各语言内唯一，配对发布日期一致。摘要扫描发现中文 API 安全测试摘要含 `AST-##`，中文技术设计复核摘要含 `TD-##`；编号格式在正文中是有意的输出约定，但不适合直接出现在搜索摘要中。本轮同步改写 API 安全测试的中英文摘要，说明其证据来源、对象授权与输入检查，以及待授权的验证场景；另改写技术设计复核中文摘要，使其概括 ADR、组件设计、数据流、约束与验证动作。标题、正文、日期、URL 和 `draft: true` 均保留。复查所有草稿摘要后，没有其他编号、TODO 或 TBD 占位符。

验证结果：`npm run seo:check:strict` 通过；博客 566 篇，缺失标题/摘要、重复标题、坏链、格式错误链接、legacy 相对链接和错误内容关联均为 0，57 条长摘要仍是人工复核提示。`npm run build` 通过，生成 2,819 个页面、2,537 个可收录页面和同数 sitemap URL；SEO 构建检查通过，811 条短摘要仍需结合页面判断相关性。Astro 检查为 0 个错误、0 个警告和 1 个既有 hint，构建另有 8 条既有 Shiki 语言回退提示。全量确认 138 个草稿路由均未进入构建输出或 sitemap。三份本次检查生成的 SEO 临时报告已恢复到运行前版本，`git diff --check` 通过。Search Console 表现数据未评估，CWV 未测量；本轮修改仅在本地，未提交或部署。

## 2026-10-13 AI 测试文章摘要精简

线上英文页面 HTTP 200，canonical 和中英文 hreflang 正常，但其 291 字符 meta description 将文章开场与来源说明连续拼在一起，主旨埋在较长叙述中。对照中英文正文，将两边摘要统一收束为 AI 承担重复测试、人负责需求理解、风险发现、证据判断与团队协作，并保留 Lewis Prescott 分享及 ATDD/BDD 主题。英文摘要从 291 字符缩至 155 字符；中文摘要也相应精简。标题、正文、日期、URL 和发布状态不变。

验证结果：`npm run seo:check:strict` 与 `npm run build` 均通过。缺失标题/摘要、重复标题、坏链、格式错误链接、旧式相对链接和错误关联均为 0，56 条长摘要仍是人工复核提示。构建生成 2,819 个页面、2,537 个可收录页面及同数 sitemap URL；Astro 检查为 0 个错误、0 个警告和 1 个既有 hint，另有 8 条既有 Shiki 语言标签回退提示。构建 HTML 核对中英文对应页的 meta、Open Graph、BlogPosting 描述、canonical、成对 hreflang 和 sitemap 均正确；更新后的两条摘要与源码一致。三份临时 SEO 报告已恢复到运行前版本，`git diff --check` 通过。Search Console 表现数据未评估，CWV 未测量；改动仅在本地，未提交或部署。

## 2026-10-13 QA Skills 英文长摘要精简

在线抽查五组双语 QA Skills 已发布页面，10 个 URL 均返回 HTTP 200、自指 canonical 和正确的双向 hreflang。英文摘要长 228–258 个字符，而对应中文摘要为 72–81 个字符，且已具体描述相同任务。本轮仅精简英文摘要，分别概括需求冲突与证据风险、订单流程场景、验收标准到用例、测试策略评审发现，以及结账流程中的可访问性问题；英文摘要现在为 146、151、154、150 和 153 个字符。中文摘要内容准确且简洁，因此保留；标题、正文、日期、URL 和发布状态不变。

验证结果：`npm run seo:check:strict` 通过，缺失标题/摘要、重复标题、坏链、格式错误链接、旧式相对链接和错误关联均为 0，长摘要人工复核提示从 56 条降至 51 条。`npm run build` 通过，生成 2,819 个页面、2,537 个可收录页面及同数 sitemap URL；Astro 检查为 0 个错误、0 个警告和 1 个既有 hint，构建另有 8 条既有 Shiki 语言回退提示。逐页核对 10 个构建页的 meta、Open Graph、BlogPosting 描述、自指 canonical、互相返回的 en-US/zh-CN hreflang 和 sitemap，均与源码一致。三份检查生成的 SEO 临时报告已恢复到运行前版本，`git diff --check` 通过。Search Console 表现数据未评估，CWV 未测量；本轮仅本地修改，未提交或部署。

## 2026-10-13 四篇 AI 测试文章英文摘要精简

线上核对 Awesome QA Skills 更新、dsh-qa 与 DeepSeek Harness 兼容性、陌生系统测试及 AI 测试信号与噪音四组双语文章；八个 URL 均返回 HTTP 200，自指 canonical 和英中 hreflang 正常。四条英文摘要长 199–235 个字符，集中列出多个主题。本轮根据正文分别概括项目演进能力、404 兼容修复、陌生系统测试起步方法，以及过滤 AI 测试噪音所需的上下文、评测、指标和人工判断；英文摘要改为 155、152、147、150 个字符。中文摘要已具体、较短且涵盖相同主旨，因此保留；标题、正文、日期、URL 和发布状态不变。

验证结果：`npm run seo:check:strict` 通过，缺失标题/摘要、重复标题、坏链、格式错误链接、旧式相对链接和错误关联均为 0，长摘要人工复核提示从 51 条降至 47 条。`npm run build` 通过，生成 2,819 个页面、2,537 个可收录页面及同数 sitemap URL；Astro 检查为 0 个错误、0 个警告和 1 个既有 hint，另有 8 条既有 Shiki 语言标签回退提示。构建 HTML 核对八个页面的 meta、Open Graph、BlogPosting 描述、自指 canonical、互相返回的 en-US/zh-CN hreflang 和 sitemap，均通过。三份临时 SEO 报告已恢复到运行前版本，`git diff --check` 通过。Search Console 报告和查询入口仍不可用，点击、展示、CTR、排名未评估；CWV 未测量。本轮修改仅在本地，未提交或部署。

## 2026-10-13 SuperTest 教程摘要收束

线上抽查 SuperTest 入门与数据驱动教程的中英文页面，四页均返回 HTTP 200，canonical 自指、hreflang 成对；当时英文摘要仍为 198 和 185 字符。根据各篇实际内容，将入门页英文摘要改为概括 SuperTest 与 Jest/Mocha、Chai、请求示例、依赖和示例目录结构，并同步调整中文描述以准确反映正文；数据驱动页英文摘要改为概括外置请求数据与预期响应、参数化输入及验证步骤，中文摘要保留。两条英文摘要现在为 143 和 150 字符。摘要以短而相关的页面概述为目标，不将固定字数当作硬门槛（[Google 搜索摘要指南](https://developers.google.com/search/docs/appearance/snippet)）；标题、正文、日期、URL 与发布状态不变。

验证结果：`npm run seo:check:strict` 通过，博客源码扫描 566 篇，缺失标题/摘要、重复标题、坏链和错误关联均为 0，长摘要人工复核项从 47 条降为 45 条。`npm run build` 通过，生成 2,819 个页面、2,537 个可收录页面和同数 sitemap URL；Astro 检查 0 错误、0 警告、1 个既有未使用变量 hint，另有 8 条既有 Shiki 语言回退提示。构建 HTML 核对四页 meta、Open Graph、BlogPosting 描述、canonical、三条 hreflang 和 sitemap 均与源码一致；138 个草稿路由未进入构建或 sitemap。`git diff --check` 通过，临时 SEO 报告已恢复为运行前版本。

Search Console 三组 Drive 检索均无结果，当前没有直接查询入口；点击、展示、CTR 和排名未评估，CWV 未测量。线上页面尚未反映本轮本地摘要改动；未提交或部署。

## 2026-10-13 Skill Eval 文章英文摘要精简

线上中英文 Skill Eval 设计文章均返回 HTTP 200，自指 canonical 和三条 hreflang 正常；英文摘要与源码一致，但末尾“让结果有用”没有补充页面信息。将英文摘要从 174 字符收紧为 143 字符，保留成功标准、可执行 Eval Case、Judge、运行元数据、轨迹、产物和限制；中文摘要已准确概括相同内容，因此保持不变。标题、正文、日期、URL 和发布状态不变。按 Google 指南，摘要应简短且相关，Google 按需截断摘要而不规定固定长度（[Google 搜索摘要指南](https://developers.google.com/search/docs/appearance/snippet)）。

验证结果：`npm run seo:check:strict` 通过，博客源码扫描 566 篇，缺失标题/摘要、重复标题、坏链、格式错误链接、旧式相对链接及内容关联错误均为 0；45 条摘要长度提示仍供人工复核。`npm run build` 通过，生成 2,819 个页面、2,537 个可收录页面和同数 sitemap URL；Astro 为 0 错误、0 警告、1 个既有未使用变量 hint，另有 8 条既有 Shiki 语言回退提示。构建 HTML 中中英文页的 meta、Open Graph、BlogPosting 描述、canonical、hreflang 和 sitemap 均正确；138 个草稿仍未进入构建或 sitemap。`git diff --check` 通过，生成的三份 SEO 临时报告已恢复至运行前版本。

本轮再次检索 Search Console、Google Search Performance 和 GSC，Drive 均无结果，且当前没有直接查询工具；点击、展示、CTR、排名未评估，CWV 未测量。线上英文页仍显示旧摘要；本轮修改仅在本地，未提交或部署。

## 2026-10-13 QA Skills 设计类草稿正文差异化

继续将未发布草稿纳入 SEO 维护。全量扫描 138 个 draft: true 博客源文件，共 69 组英中配对：标题和摘要存在且各语言内唯一，配对日期一致；未发现 TODO/TBD 等占位符、空图片替代文本、重复 H2 或页内重复的长段落。源码层面确认此前处理的 Skill 工程、工具调用、AI Agent、AI 功能和提示注入草稿仍为草稿。

本轮依据 Awesome QA Skills 的源 Skill 与提示词重写三组设计类草稿的双语正文：可观测性设计复核聚焦信号语义、跨服务关联、隐私、采样和告警动作；质量仪表盘设计聚焦受众决策、指标分子/分母、新鲜度、下钻和缺失值状态；质量门禁设计聚焦单项决策、PASS/FAIL/BLOCKED/UNKNOWN、例外、失效动作和回滚。各文保留独立标题、摘要、日期、URL 和草稿状态，避免用同一套泛化的评审、发现与交接段落填充主题内容。三篇英文稿之间的本地词汇 Jaccard 复核信号现为 0.226–0.291；该数值只是内部文本筛查启发式，不是 Google 指标或政策判定。Google 对规模化内容的政策判断涉及内容是否主要为操纵排名而生成、是否帮助用户；词汇相似度本身不足以作出违规结论（[Google Spam Policies](https://developers.google.com/search/docs/essentials/spam-policies)）。

其他已处理的 QA Skills 草稿组包括 Skill 变更验证、Skill 正文审查、Skill 精简，以及 Agent 工具、AI Agent、AI 功能和提示注入测试。本轮也为后续维护保留了高词汇相似度复核队列，优先项包括依赖故障与熔断器测试、错误处理复核与依赖故障测试。该队列用于逐篇对照各自源 Skill，不能单凭分数批量改写。

验证结果：npm run seo:check:strict 通过；博客源码 566 篇，缺失标题/摘要、重复标题、坏链、格式错误链接、旧式相对链接及内容关联错误均为 0，45 条长摘要仍需人工判断。npm run build 通过，生成 2,819 个 HTML 页面、2,537 个可索引页面和 2,537 个 sitemap URL；SEO 构建检查通过，811 条短摘要仍是相关性人工复核提示。Astro 检查为 0 错误、0 警告和 1 个既有未使用变量提示；构建的三份临时 SEO 报告已恢复为运行前内容。额外核对 138 个草稿路由，构建 HTML 和 sitemap 均未包含这些草稿。Playwright 的 SEO 与 SEO 完整性规格共 81 项均因本机 Chromium 启动时报 macOS MachPortRendezvousServer Permission denied 而未能执行；这是浏览器运行环境阻塞，不是页面断言结果。git diff --check 通过。

Search Console 点击、展示、CTR 和排名本轮未评估；CWV 未测量。修改仅在本地，未提交或部署。

## 2026-10-13 依赖故障与熔断器草稿正文区分

对照 Awesome QA Skills 的英文和中文源 Skill、提示词及交付契约，重写依赖故障测试和熔断器测试两组双语草稿正文。依赖故障测试现在聚焦同步/异步失败分类、部分副作用、超时后的未知提交、重试安全性、对账与补偿，并用 DPF-## 保留调用方/依赖/副作用证据；熔断器测试聚焦失败计数窗口、阈值来源、closed/open/half-open 转移、探测并发、本地拒绝及兜底，并用 CBR-## 和逐事件状态表描述验证准备。两篇分别链接重试与恢复相关内容；标题、摘要、日期、URL 和 draft: true 保留。

同一内部词汇 Jaccard 启发式显示，两篇英文稿从改写前 0.712 降至 0.258。该分数仅用于找出需要人工对照源材料的草稿，不代表 Google 的重复内容或垃圾内容判定。

本轮重新检索 Drive 中的 Search Console、Google Search Performance 和 GSC，均无结果；点击、展示、CTR、排名未评估，CWV 未测量。复核 138 个 draft: true 博客源文件、69 组双语配对：无缺失配对、日期差异、缺少标题/摘要、重复标题、占位符、空图片替代文本、重复 H2 或页内重复长段落。改写后本地词汇筛查的下一批候选包括授权测试与多智能体测试、LLM 幻觉测试与一致性测试、故障转移与灾难恢复、API Schema 验证与版本兼容；分数用于审阅排序，不据此自动改写。

验证结果：npm run seo:check:strict 通过；博客源码 566 篇，缺失标题/摘要、重复标题、坏链、格式错误链接、旧式相对链接和内容关联错误均为 0，45 条长摘要是人工复核提示。npm run build 通过，生成 2,819 个 HTML 页面、2,537 个可索引页面和 2,537 个 sitemap URL，SEO 构建检查通过；811 条短摘要仍是相关性复核提示。Astro 检查为 0 错误、0 警告和 1 个既有 hint。重新核对 138 个草稿路由，HTML 与 sitemap 均为 0 条；检查生成的三份 SEO 临时报告已恢复到运行前版本，git diff --check 通过。

改动仅在本地，未提交或部署。

## 2026-10-13 授权测试与多智能体草稿正文差异化

依据 Authorization Testing 与 Multi-Agent Testing 的中英文源 Skill 和执行提示词，重写两组双语草稿正文。授权测试聚焦主体/资源/动作/上下文矩阵、租户和所有权边界、服务端拒绝、副作用及撤权传播；多智能体测试聚焦任务与消息 ID、父级委派、共享状态版本、原子所有权、部分失败对账、ACK 和停止传播。各文使用各自的 AZT-## 或 MAT-## 发现字段，并增加对应内部内容链接。标题、摘要、日期、URL 和 draft: true 保留。自然地把主题词放在正文开头及相应 H2，不按关键词密度机械填充。

同一内部词汇 Jaccard 筛查中，授权测试与多智能体测试从改写前 0.699 降至 0.242。该值只用于优先人工内容复核；不代表 Google 搜索指标，也不单独构成政策判断。

本轮三次 Drive 搜索（Search Console、GSC performance、Google Search Performance）均无结果。点击、展示、CTR、排名未评估，CWV 未测量。全量复核 138 个 draft: true 博客源文件、69 组双语配对：无缺失标题/摘要、重复标题、缺失配对、日期差异、占位符、空图片替代文本、重复 H2 或页内重复长段落。当前本地词汇筛查的下一批高相似候选为 LLM 幻觉与一致性测试、故障转移与灾难恢复、API Schema 验证与版本兼容；仍需逐篇对照源 Skill，不据分数自动改写。

验证结果：npm run seo:check:strict 通过；博客源码 566 篇，缺失标题/摘要、重复标题、坏链、格式错误链接、旧式相对链接及内容关联错误均为 0，45 条长摘要为人工复核提示。npm run build 通过，生成 2,819 个 HTML 页面、2,537 个可索引页面及 2,537 个 sitemap URL，SEO 构建检查通过；811 条短摘要仍是相关性人工复核提示。Astro 检查为 0 错误、0 警告和 1 个既有 hint。138 个草稿路由均未生成 HTML 或进入 sitemap。线上 robots.txt、sitemap index、sitemap 分片和 /en/、/zh-cn/ 均返回 HTTP 200；两种首页 canonical 和 en-US/zh-CN/x-default hreflang 与预期一致。线上 sitemap 的 2,537 个 URL 唯一，全部使用正式主机名且无查询参数或片段。构建生成的三份 SEO 临时报告已恢复为运行前版本，git diff --check 通过。

改动仅在本地，未提交或部署。

## 2026-10-13 LLM 幻觉与一致性测试草稿正文区分

依照 Awesome QA Skills 的英中文源 Skill 与 Prompt，重写 LLM 幻觉测试和 LLM 一致性测试两组草稿正文。幻觉测试文章逐条核对声明与来源，使用源契约的 SUPPORTED、CONTRADICTED、MISSING_SOURCE、UNASSESSABLE 状态；把引用存在、可访问、相关及能否支持声明分开检查，并说明缺少支持不等于证明编造。没有适当真值和代表性样本时，只提供验证计划，不报告事实准确率。

一致性测试文章要求记录样本、模型/提示词/工具/数据版本、temperature、供应商支持时的 seed 和项目给定重复次数；先查结构约束，再按 rubric 判断语义；逐样本保留分母、结构与语义失败、偶发失败。删去原稿里无来源的“运行 20 次”与“30 天变成 60 天”例子，不自定重复次数、方差公式或阈值。两种语言各自保留完整内容，并链接相关 Skill 页面及对应执行 Prompt。标题、摘要、日期、URL 和 draft: true 未改。

内部词汇 Jaccard 筛查中，两篇英文草稿从改写前 0.692 降至 0.247。该分数只用于发现需要人工复核的正文相似，不是 Google 指标，也不单独代表搜索政策结论。

全量复核 138 个 draft: true 博客源文件、69 组双语配对：标题和摘要齐全、语言内不重复，配对日期一致；没有缺失配对、TODO/TBD/FIXME、少于三个 H2、重复 H2 或页内重复长段落。所有 138 个草稿路由在本次构建中均未生成 HTML，也没有出现在 sitemap。

验证结果：npm run seo:check:strict 通过，扫描 452 个 Wiki、234 个 AI Wiki 和 566 篇博客；缺失标题/摘要、重复标题、坏链、格式错误链接、旧式相对链接及关联错误均为 0，45 条长摘要仍供人工复核。npm run build 通过，生成 2,819 个 HTML 页面、2,537 个可索引页面及 2,537 个 sitemap URL；Astro 检查为 0 错误、0 警告和 1 个既有 hint，另有 8 条既有 Shiki 语言标签回退提示；811 条短摘要只作相关性人工复核。构建生成的三份 SEO 临时报告已恢复到运行前内容，git diff --check 通过。

本轮 Search Console、GSC performance 和 Google Search Performance 的 Drive 检索均无结果；点击、展示、CTR 和排名未评估，CWV 未测量。下一批候选为故障转移与灾难恢复、API Schema 验证与版本兼容；仍须先对照各自源 Skill 再处理。修改仅在本地，未提交或部署。

## 2026-10-13 故障恢复、API 契约与智能体草稿差异化

依据 Awesome QA Skills 的中英文 Skill 和 Prompt，重写六个主题共 12 篇 draft: true 草稿正文：故障切换、灾备测试、API Schema 校验、API 版本兼容性、智能体记忆测试和智能体权限测试。原 frontmatter、标题、摘要、日期、URL 与草稿状态保留，并使用各自对应的中英文 Skill 页面及执行 Prompt。

故障切换聚焦主备触发、旧主隔离、写入权、路由、账本冲突和切回；灾备聚焦合同定义的灾难范围、备份/恢复证据、跨区依赖、业务就绪以及有来源的 RTO/RPO 计算。明确说明切换可以是灾备步骤，但不能证明完整恢复。Schema 校验对照指定方言、引用上下文、请求/响应样例，以及缺字段、null、约束和引用状态；API 版本兼容性则评估适用的旧/新客户端与服务端组合、消费者实际容忍度、弃用、迁移与回滚。智能体记忆测试追踪记忆版本、来源、时效、租户隔离与删除传播；智能体权限测试核对主体/委派链、工具与资源范围、参数、授权时效、拒绝及副作用证据。各稿将候选设计与实际执行分开，不声称运行时测试或全量覆盖。

英文稿的内部词汇 Jaccard 筛查值分别从 0.690 降至 0.316（故障切换/灾备）、从 0.688 降至 0.304（Schema/版本兼容）、从 0.685 降至 0.350（智能体记忆/权限）。该词汇筛查只用于人工复核排序，不是 Google 指标或内容政策判定。

全量复核 138 个 draft: true 博客源文件、69 组中英文配对：标题与摘要齐全且各语言内唯一，配对日期一致；无缺失配对、TODO/TBD/FIXME、少于三个 H2、重复 H2、空图片替代文本或页内重复长段落。当前构建未生成这 138 个路由的 HTML，也没有把它们放入 sitemap。

验证结果：npm run seo:check:strict 通过；扫描 452 个 Wiki、234 个 AI Wiki 和 566 篇博客，缺失标题/摘要、重复标题、坏链、格式错误链接、旧式相对链接和关联错误均为 0，45 条长摘要保留为人工复核提示。npm run build 通过，生成 2,819 个 HTML 页面、2,537 个可索引页面及 2,537 个 sitemap URL；Astro 检查为 0 错误、0 警告和 1 个既有 hint，另有 8 条既有 Shiki 语言回退提示；811 条短摘要继续作为相关性人工复核项。构建生成的三份 SEO 临时报告已恢复至运行前内容，git diff --check 通过。

本轮重新检索 Drive 中的 Search Console、GSC performance 和 Google Search Performance，均无结果；点击、展示、CTR 与排名未评估，CWV 未测量。下一轮英文草稿词汇筛查候选为韧性测试与恢复测试、跨浏览器测试与认证测试、自动化 ROI 与质量债务分析；这些分数只用于选择后续逐篇核对源 Skill 的对象。改动仅在本地，未提交或部署。

## 2026-10-13 韧性与恢复测试草稿职责边界

依据 Resilience Testing 和 Recovery Testing 的中英文源 Skill 与 Prompt，重写两组双语草稿正文。韧性测试聚焦扰动前/中/后的功能与数据不变量、正常/降级/不可用状态、可暂停功能，以及回退、隔离、恢复和补偿的完整时间线；明确不把故障期间有响应等同于恢复成功，也不把可靠性长期指标或混沌注入实验当作场景证据。恢复测试分开记录服务就绪、实际恢复的数据点和业务一致性，根据有来源的 RTO/RPO 与时间戳计算，并检查账本对账、缺失区间、补偿和人工接管。文章也区分了恢复测试、灾备和韧性各自的问题范围。

韧性测试英文摘要沿用当前已修改的具体描述；中文原摘要较泛且称为“双语指南”，本轮改为概括系统降级、故障隔离、依赖恢复与残余风险。恢复测试中文摘要同步概括 RPO/RTO、恢复步骤、状态校验和自动化停止后的人工接管。标题、日期、URL 和 draft: true 保留。

两篇英文稿的内部词汇 Jaccard 筛查值从 0.680 降至 0.280。该分数只用于发现需要人工复核的正文相似，不是 Google 搜索指标或内容政策结论。

复核 138 个 draft: true 博客源文件、69 组中英文配对：标题摘要齐全、各语言内标题唯一、日期及 H2 数量相符；无缺失配对、占位符、少于三个 H2、重复 H2、空或缺失图片替代文本、页内重复长段落。全部 138 个草稿路由均未生成 HTML，且未进入 sitemap。

验证结果：npm run seo:check:strict 通过，566 篇博客及 452 个 Wiki、234 个 AI Wiki 的缺失标题/摘要、重复标题、坏链、Markdown 链接格式、旧式相对链接和关联错误均为 0，45 条长摘要仍供人工复核。npm run build 通过，生成 2,819 个 HTML 页面、2,537 个可索引页面和 2,537 个 sitemap URL；Astro 检查为 0 错误、0 警告及 1 个既有 hint，另有 8 条 Shiki 语言回退提示；811 条短摘要保留为人工相关性复核项。构建生成的三份 SEO 临时报告已恢复到运行前内容，git diff --check 通过。

本轮 Search Console、GSC performance 与 Google Search Performance 的 Drive 检索均无结果；点击、展示、CTR、排名未评估，CWV 未测量。后续英文草稿筛查候选为跨浏览器测试与认证测试、自动化 ROI 与质量债务分析、认证测试与 API 限流测试；这些分数只用于确定人工复核次序，必须先对照源 Skill 再改写。修改仅在本地，未提交或部署。

## 2026-10-13 跨浏览器与身份认证测试草稿差异化

依据 Awesome QA Skills 的中英文 Cross-Browser Testing 与 Authentication Testing 源 Skill、Prompt，重写两组双语共四篇 draft: true 草稿，并更新标题与摘要，使其先说明各自的搜索主题和读者所得。标题、摘要、日期和正文链接保持中英文配对；日期、路由与草稿状态保留。

跨浏览器测试稿围绕支持策略、用户权重、引擎/平台/版本/设备单元、真实设备与模拟环境差异，以及逐单元证据组织内容；示例使用 CBT-## 字段，明确浏览器候选不代表已运行或覆盖。身份认证稿围绕未认证、挑战、已认证、锁定/过期/撤销和恢复迁移，检查令牌签发及旧凭据有效性；AUT-## 示例受策略适用条件约束，并区分身份验证、资源授权与实际执行。两组稿均删除与主题无关的通用占位式 Finding / 交接句，保留事实、候选验证和人工决策边界。

内部英文词汇 Jaccard 筛查从 0.678 降至 0.290，仅作为正文人工复核信号，不是 Google 指标或质量验收门槛。下一轮待对照源 Skill 的候选是自动化 ROI 与质量债务分析、API 幂等与 Agent 故障恢复测试、API 设计质量评审与 Agent 故障恢复测试；候选排序仍需人工判读。

复核全部 138 个 draft: true 博客源文件、69 组中英文配对：标题和摘要齐全且各语言内唯一，日期及 H2 数量对应；无缺失配对、TODO/TBD/FIXME、重复 H2、空图片替代文本或页内重复长段落。本次检查的 138 个草稿源 slug 均未出现在构建 HTML 路径或 sitemap。

验证结果：npm run seo:check:strict 通过，566 篇博客、452 个 Wiki 和 234 个 AI Wiki 的缺失标题/摘要、重复标题、坏链、格式错误链接、旧式相对链接及关联错误均为 0，45 条长摘要仍供人工复核。npm run build 和 seo:build:check 通过，构建报告 2,819 个页面、2,537 个可索引页面和 2,537 个 sitemap URL；Astro 检查为 0 错误、0 警告和 1 个既有 hint。三份构建生成的 SEO 临时报告已从运行前干净的 HEAD 版本恢复，git diff --check 通过。

本轮重新检索 Drive 中的 Search Console、GSC performance 和 Google Search Performance，均无结果；点击、展示、CTR、排名未评估，CWV 未测量。改动仅在本地，未提交或部署。

## 2026-10-13 自动化 ROI 与质量债务草稿差异化

依据 Awesome QA Skills 的中英文 Automation ROI Analysis 与 Quality Debt Analysis 源 Skill、Prompt，重写两组双语共四篇 draft: true 草稿，并调整标题与摘要。路由、日期与草稿状态保留。

自动化 ROI 稿要求先固定候选、时间窗和成本单位，分开人工投入、机器占用、复核、维护与货币；加入同窗净节省、正向净节省下的回本窗口，以及项目提供的低/基准/高频率和变更维护敏感性。示例只给出季度频率、流程变化和专业数据背景，没有建设/运行/维护成本或费率，因此 ARO-## 保持 NOT_SCORED，不虚构回报或直接建议采纳。

质量债务稿明确区分当前产品缺陷、测试/架构债务、临时例外和证据缺口；利息只用可观察的维护投入、风险暴露或检测延迟说明，并按影响、暴露、可探测性、依赖及偿还投入排序，年龄仅作一个信号。QDA-## 示例将测试不稳定的来源保留为 UNKNOWN，优先级标为 NOT_SCORED；偿还关闭需有资产变更、独立行为检查、债务影响消失和负责人验收，工单或隔离本身不算偿还完成。

内部英文词汇 Jaccard 筛查从 0.676 降至 0.268，仅作为正文人工复核信号，不是 Google 指标或质量验收门槛。下一轮候选为 API 幂等测试与 Agent 故障恢复测试、API 设计质量评审与 Agent 故障恢复测试、Agent 循环测试与 Agent 故障恢复测试；仍须逐组对照源 Skill 后判断。

复核全部 138 个 draft: true 博客源文件、69 组中英文配对：标题和摘要齐全且各语言内唯一，日期及 H2 数量相符；无缺失配对、少于三个 H2、重复 H2、TODO/TBD/FIXME、空图片替代文本或页内重复长段落。本轮所查的草稿路由均未生成 HTML，也未进入 sitemap。

验证结果：npm run seo:check:strict 通过，566 篇博客、452 个 Wiki 和 234 个 AI Wiki 的缺失标题/摘要、重复标题、坏链、格式错误链接、旧式相对链接及关联错误均为 0，45 条长摘要仍供人工复核。npm run build 和 seo:build:check 通过，构建报告 2,819 个页面、2,537 个可索引页面和 2,537 个 sitemap URL；Astro 检查为 0 错误、0 警告和 1 个既有 hint。三份构建生成的 SEO 临时报告已恢复，git diff --check 通过。

本轮重新检索 Drive 中的 Search Console、GSC performance 和 Google Search Performance，均无结果；点击、展示、CTR、排名未评估，CWV 未测量。修改仅在本地，未提交或部署。

## 2026-10-13 QA Skills 多领域草稿正文与元数据差异化

本轮继续把未发布草稿纳入 SEO 维护，对照 Awesome QA Skills 的中英文源 Skill 和 Prompt，修订六个主题的双语正文：API 幂等测试与 Agent 故障恢复、Agent 循环测试、API 错误契约测试、API 负向测试、API 设计质量评审。标题和摘要按各页意图精简或改写；发布日期、URL、tags/series 与 `draft: true` 保留。

API 幂等测试围绕键作用范围、参数冲突、并发、保留期和业务副作用账本设计场景，使用 AIT-##；故障恢复区分暂态、永久、结果不明和部分成功状态，并核对安全重试、对账、授权补偿、升级及用户通知，使用 AFR-##。Agent 循环测试新增逐轮 task/run/step 轨迹、归一化参数、观察摘要、目标状态变化、累计时间/费用及无进展/停止门槛，使用 ALT-##，没有来源的阈值仍待确认。API 错误契约稿用 operation×error 矩阵复核状态与业务码、必需字段、关联 ID、重试含义和脱敏，使用 AEC-##，且只有违反适用来源规则的差异才列为发现；API 负向测试稿把字段/权限规则转成单项输入变体，保留有效邻近对照，并核对拒绝后的持久化副作用与部分成功，使用 ANT-##。API 设计质量评审稿则以 operation 覆盖矩阵呈现字段、错误、鉴权、重试、版本及迁移风险，并按源契约补充 API-## 所需的兼容风险、决策问题和验证证据。

内部英文正文 token-set Jaccard 启发式中，API 幂等/故障恢复从 0.674 降至 0.371，API 设计评审/故障恢复从 0.670 降至 0.294，循环测试/故障恢复从 0.661 降至 0.379，错误契约/负向测试从 0.665 降至 0.466。该分数用于定位需要人工对照源材料的共同段落，不是 Google 搜索指标、重复内容判定或政策结论；不同测试领域可以保留共同的证据状态和决策边界。

复核全部 138 个 `draft: true` 博客源文件、69 组英中配对：未发现缺失配对、标题/摘要缺失或重复、配对日期/H2 数量不一致、少于三个 H2、重复 H2、TODO/TBD/FIXME、空图片替代文本；本轮复核的 138 个草稿文件名均未出现在构建 HTML 路径或 sitemap。

验证结果：`npm run seo:check:strict` 通过，覆盖 452 个 Wiki、234 个 AI Wiki 和 566 篇博客；缺失标题/摘要、重复标题、坏链、格式错误链接、旧式相对链接和内容关联错误均为 0，45 条长摘要仍为人工复核项。`npm run build` 与 `seo:build:check` 通过，生成 2,819 个 HTML 页面、2,537 个可索引页面和 2,537 个 sitemap URL；Astro 检查为 0 错误、0 警告、1 个既有 hint，保留 8 条既有 Shiki 语言回退提示；811 条短摘要提示仅供相关性人工复核。构建生成的三份 SEO 临时报告已按运行前干净的 HEAD 内容恢复，`git diff --check` 通过。

本轮 Search Console、GSC performance 和 Google Search Performance 的 Drive 检索均无结果；点击、展示、CTR、排名未评估，CWV 未测量。改动仅在本地，未提交或部署。后续人工复核候选包括 API 限流与错误处理设计、AI 安全与生成测试审查；当前最高的未修改文本相似候选是 Chaos Testing 与 Database Design Quality Review，领域差异较大，应先看正文与各自源 Skill，不按分数自动改写。

## 2026-10-13 API 限流与错误处理设计评审草稿差异化

依据 Awesome QA Skills 的中英文 API Rate Limit Testing 与 Error Handling Design Review 源 Skill 和 Prompt，修订两组双语 `draft: true` 草稿，共四篇。标题和摘要改为直接说明配额/突发/恢复与失败模式/恢复主题；发布日期、路由和草稿状态保留。

API 限流稿现在把场景设计与执行分开，按配额 `N`、成功/拒绝请求计数、身份键、窗口算法、时间来源、突发额度、重置和响应契约整理候选；在规则明确时比较 `N-1`、`N`、`N+1`，并保留配额内控制、身份隔离、窗口恢复和重试预算。只有来源契约承诺时才要求 `429`、`Retry-After` 或其他响应字段；无运行记录的候选标为 `NOT_RUN`，不把设计评审写成测试执行。

错误处理设计评审稿改为按失败模式和边界建立 `EH-##` 矩阵，涵盖触发条件、预期行为类型、传播/回退、调用方结果、数据一致性、隐私安全的可观察证据、来源、影响/优先级、负责人和验证。`EH-01` 以报表生成后存储失败为例，重试安全性和提交状态留待契约确认；不假定恢复行为，也不声称做过故障注入。

内部英文正文 token-set Jaccard 启发式从 0.679 降至 0.587。两篇仍共享证据状态和交接等系列方法段落；该分数只用于定位人工复核点，不是 Google 指标、重复内容结论或验收门槛。

复核全部 138 个 `draft: true` 博客源文件、69 组中英文配对：标题和摘要齐全且各语言内唯一，日期与 H2 数量一致；无缺失配对、少于三个 H2、重复 H2、TODO/TBD/FIXME、空图片 alt 或页内重复长段落。所有草稿文件名均未出现在本次构建 HTML 路径或 sitemap 中。

验证结果：`npm run seo:check:strict` 通过，覆盖 566 篇博客、452 个 Wiki 和 234 个 AI Wiki；缺失标题/摘要、重复标题、坏链、格式错误链接、旧式相对链接和关联错误均为 0，45 条长摘要保留人工复核。`npm run build` 与 `seo:build:check` 通过，生成 2,819 个 HTML 页面、2,537 个可索引页面和 2,537 个 sitemap URL；Astro 检查为 0 错误、0 警告、1 个既有 hint，保留 8 条既有 Shiki 语言回退提示；811 条短摘要仍待相关性人工复核。运行生成的三份 SEO 临时报告已恢复到运行前干净的 HEAD 内容，`git diff --check` 通过。

本轮 Search Console、GSC performance 和 Google Search Performance 的 Drive 检索没有结果；点击、展示、CTR 和排名未评估，CWV 未测量。工作仅在本地，未提交或部署。下一轮候选为 AI Safety Testing 与 AI Generated Test Review；先核对两者源 Skill 的证据边界，再决定是否改写。

## 2026-10-13 AI 安全与 AI 生成测试评审草稿差异化

依据 Awesome QA Skills 的中英文 AI Safety Testing 与 AI-Generated Test Review 源 Skill 和 Prompt，重写两组双语共四篇 `draft: true` 草稿。标题与摘要按各页主题调整；发布日期、路由和草稿状态保留。

AI 安全测试稿将适用策略、类别与条件映射到允许、限制、拒答或升级，并区分有害请求处置、正常请求完成和过度拒答。评审须读取完整回答和工具动作，以策略定义的有害样本及近邻正常样本为依据；策略缺失时保留 `UNKNOWN`，未执行时标记 `NOT_RUN`。`AIS-##` 示例补充来源、触发条件、影响、证据状态、负责人及关闭验证；风险优先级未有证据时不打分，风险接受权保留给人工。

AI 生成测试评审稿要求逐条追到适用需求和实际生产代码路径，检查断言是否独立、错误实现能否仍然通过、模拟边界是否遮蔽目标行为，以及最小什么缺陷会逃逸。使用 `STRONG`、`WEAK`、`FAKE` 区分断言证据；没有找到可审查测试时明确记为范围缺口。示例是条件性说明，不声称执行了真实模型评测或实际项目测试。

复核全部 138 个 `draft: true` 博客源文件、69 组英中配对：标题和摘要齐全且各语言内唯一，配对日期一致；无缺失配对、少于三个 H2、重复 H2、TODO/TBD/FIXME、空图片替代文本或页内重复长段落。构建没有为这些草稿生成 HTML，它们也未进入 sitemap。

验证结果：`npm run seo:check:strict` 通过，扫描 452 个 Wiki、234 个 AI Wiki 和 566 篇博客；缺失标题/摘要、重复标题、坏链、格式错误链接、旧式相对链接和关联错误均为 0，45 条长摘要仍供人工复核。`npm run build` 与 `seo:build:check` 通过，生成 2,819 个 HTML 页面、2,537 个可索引页面和 2,537 个 sitemap URL；Astro 检查为 0 错误、0 警告及 1 个既有 hint，另有 8 条既有 Shiki 语言回退提示；811 条短摘要继续作为相关性人工复核项。运行生成的三份 SEO 临时报告已恢复到运行前干净的内容，`git diff --check` 通过。

本轮 Drive 中的 Search Console、GSC performance 和 Google Search Performance 检索均无结果；点击、展示、CTR 与排名未评估，CWV 未测量。改动仅在本地，未提交或部署。后续候选仍需先检查 Chaos Testing 与 Database Design Quality Review 的正文和源 Skill；主题差异较大，文本相似度筛查不能单独作为改写依据。

## 2026-10-13 混沌测试与数据库设计评审草稿差异化

依据 Awesome QA Skills 的中英文 Chaos Testing 与 Database Design Quality Review 源 Skill、Prompt，修订两组双语 `draft: true` 草稿，共四篇。标题和摘要更直接对应实验控制与数据库设计审查主题；日期、URL 和草稿状态保留。

混沌测试稿围绕可证伪假设、稳态信号、故障注入点/类型/范围/持续时间、隔离与爆炸半径、停止阈值、回滚及恢复证据组织候选，并使用 `CHS-##` 留下依据和关闭条件。示例不再套用无来源的流量比例；缺少阈值、负责人或回滚证据时，结论保留为未就绪，不声称实验已执行。数据库设计评审稿分别检查关系与基数、键和约束、访问模式与索引、所有权/隐私/保留、事务与并发、迁移兼容和回滚、备份与恢复，以 `DB-##` 记录来源、风险和验证条件；不从字段名臆测规则，也不声称运行查询、迁移或基准测试。

全量复核 138 个 `draft: true` 博客源文件、69 组英中配对：标题和摘要齐全且各语言内唯一，配对日期与 H2 数量一致；未发现缺失配对、少于三个 H2、重复 H2、TODO/TBD/FIXME、空图片替代文本或页内重复长段落。构建未生成这些草稿的 HTML，它们也未进入 sitemap。

验证结果：快进到最新 `origin/main` 后，`npm run seo:check:strict` 通过，扫描 566 篇博客、452 个 Wiki 和 234 个 AI Wiki；缺失标题/摘要、重复标题、坏链、格式错误链接、旧式相对链接及关联错误均为 0，45 条长摘要保留为人工复核项。`npm run build` 与 `seo:build:check` 通过，生成 2,819 个 HTML 页面、2,537 个可索引页面及同数 sitemap URL；Astro 检查为 0 错误、0 警告和 1 个既有 hint，另有 8 条既有 Shiki 语言回退提示；827 条短摘要仍需人工复核相关性。运行生成的三份 SEO 临时报告已恢复到运行前内容，`git diff --check` 通过。

本轮 Drive 中的 Search Console、GSC performance 和 Google Search Performance 检索均无结果；点击、展示、CTR、排名未评估，CWV 未测量。标准与需求双轴 review 已通过；本批改动待提交并推送。

## 2026-10-13 QA Skills 已发布文章开场去模板化

根据页面主题、摘要和正文复核，重写 8 篇英文 QA Skills 已发布文章及 4 篇中文对应文章的首段，覆盖测试策略评审、Sprint 测试工作流、需求分析、Test Strategy Plus、发布测试工作流、测试技能探索、测试策略和日常测试工作流。4 篇中文配对页原有首段已直接说明主题，因此保留。标题、摘要、日期、URL 和首段之后的正文均未改动。

当前 HEAD 中另有 3 组双语文章已由草稿调整为发布状态。复核剩余 132 篇 `draft: true` 源文件（66 组中英文配对）：标题、摘要齐全，配对日期和 H2 数量一致；未发现本轮已定位的重复开场模板，因此本批没有为了扩大范围而改写草稿。聊天机器人文章所引用的原始文章与正文核心示例一致；自动化断言和回归建议标明为工程补充。

验证结果：`npm run seo:check:strict` 通过，扫描 452 个 Wiki、234 个 AI Wiki 和 566 篇博客；缺失标题/摘要、重复标题、坏链、Markdown 链接格式错误、旧式相对链接和内容关联错误均为 0，45 条长摘要继续人工复核。`npm run build` 和 `seo:build:check` 通过，生成 2,839 个 HTML 页面、2,551 个可索引页面及同数 sitemap URL；Astro 检查为 0 错误、0 警告和 1 个既有 hint，保留 8 条 Shiki 语言回退提示，834 条短摘要继续人工复核相关性。对 11 组双语文章共 22 页做了定向输出检查，其中包括本轮改写的 12 页、4 篇未改写的中文对照页和当前 HEAD 中 6 篇新发布文章：标题、摘要、首段、canonical、双向 `en-US`/`zh-CN` hreflang 和 sitemap 收录均通过。运行生成的三份 SEO 临时报告已恢复到 HEAD 内容，`git diff --check` 通过。

本轮可用的 Search Console 表现数据仍未取得；点击、展示、CTR 和排名未评估，CWV 未测量，因此不据此声称流量或排名改善。
