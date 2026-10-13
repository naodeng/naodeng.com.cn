# SEO 维护指南

新增内容、调整栏目、修改双语路由或排查搜索收录问题时使用。优化覆盖博客、测试百科、AI 百科、自动化指南、QA Skills、提示词、工作流、周刊及作者与项目页面。

## 开始与验证

先查看 `git status --short --branch`，确认本轮范围和已有修改。源码检查、构建输出、线上状态和搜索表现分别记录，不互相代替。

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

## 官方参考

- [Google：管理多语言页面](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Google：搜索摘要与 meta description](https://developers.google.com/search/docs/appearance/snippet)
- [ISTQB：Advanced Level Test Management Syllabus v3.0](https://www.istqb.org/wp-content/uploads/2024/11/ISTQB_CTAL-TM_Syllabus_v3.0_zKjKsaN.pdf)
- [TMAP：Test Process Improvement (TPI Next)](https://www.tmap.net/building-blocks/test-process-improvement-tpi/)
- [Google：创建和提交 sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Astro：sitemap 的 serialize 配置](https://docs.astro.build/en/guides/integrations-guide/sitemap/#serialize)
- [Google：站点链接搜索框已退出搜索结果](https://developers.google.com/search/blog/2024/10/sitelinks-search-box)
