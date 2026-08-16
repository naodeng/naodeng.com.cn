# Skills 与 Prompts 上游内容同步设计

> 日期：2026-08-09  
> 状态：已实现（2026-08-09，计划 checkbox 28/28 已回填；2026-08-16 补充同步回归测试）  
> 上游：[awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)、[awesome-qa-prompt](https://github.com/naodeng/awesome-qa-prompt)

## 目标

让站点的 QA Skills、QA Prompts 和 Prompts 页面中的 Workflows 与两个上游仓库保持一致，并建立可重复执行的同步入口，避免以后人工复制时遗漏语言、内容类型或孤儿文件。

完成后应满足：

- `src/content/qaskills/{zh-cn,en}` 来自 `awesome-qa-skills`。
- `src/content/prompts/{zh-cn,en}` 来自 `awesome-qa-prompt/testing-types`。
- `src/content/workflows/{zh-cn,en}` 来自 `awesome-qa-prompt/Workflows`。
- 中英文内容均可被现有 Astro collection、页面和路由正常读取。
- 同步命令可重复执行，结果稳定，并报告数量、语言差异和删除的孤儿文件。

## 不在范围内

- 不改版 Skills、Prompts 或 Workflow 页面。
- 不修改现有公开 URL、导航结构和内容 schema，除非上游格式无法映射且必须做最小兼容调整。
- 不同步上游 README、贡献指南、示例目录或未来规划等非页面内容。
- 不修改部署配置、域名配置、许可证或 `dist`。

## 方案

采用独立同步脚本，并提供统一入口：

- 保留 `npm run qaskills:sync`。
- 新增 `npm run prompts:sync`，同步 testing prompts 与 workflows。
- 新增 `npm run content:sync`，依次运行上述两个同步命令。

Skills 和 Prompts 分属不同仓库、目录结构与页面 schema。拆分脚本能让每条同步链路独立测试和失败，统一入口则满足日常全量更新需求。

## 数据流与映射

### QA Skills

沿用现有 `scripts/sync-qaskills-from-repo.mjs`：

```text
awesome-qa-skills/skills/{zh,en}/{testing-types,testing-workflows}/<slug>/SKILL.md
  -> src/content/qaskills/{zh-cn,en}/<slug>.md
```

脚本继续负责解析标题、描述、标准章节、分类、Evals 状态、安装链接、原始 SKILL 内容和来源链接。

### QA Prompts

新增同步脚本，根据上游实际目录和文件命名识别测试类型、提示词框架与语言，然后转换为站点现有 frontmatter：

```text
awesome-qa-prompt/testing-types/**
  -> src/content/prompts/{zh-cn,en}/<testing-type>/<prompt-version>.md
```

生成文件必须包含现有 schema 所需的：

- `title`
- `description`
- `testingType`
- `promptVersion`
- `lang`
- `order`

提示词正文保持上游原文，不做语气改写。框架顺序优先沿用站点当前顺序；发现上游新增框架时，必须以确定且可重复的规则追加，不能静默丢弃。

### Workflows

同一个 Prompts 同步脚本处理上游 `Workflows`：

```text
awesome-qa-prompt/Workflows/**
  -> src/content/workflows/{zh-cn,en}/**
```

脚本将上游内容映射到现有 workflow schema 和路由所需的目录层级。正文保持原文；标题、描述、类型、语言和排序字段按现有同类文件生成。若上游 workflow 不能唯一映射，脚本应明确失败并指出文件，而不是猜测后覆盖。

## 同步行为与安全

两个同步脚本遵守相同原则：

1. 默认浅克隆对应上游仓库的 `main` 分支到临时目录。
2. 支持 `--repo-dir <path>`，用于本地仓库、离线测试和固定输入验证。
3. 先在临时输出目录完成全部生成和校验。
4. 校验通过后再替换目标 Markdown 文件，避免半同步状态。
5. 删除上游已不存在的站点孤儿文件，并在日志中逐项或汇总报告。
6. 保留目标目录中明确标记为非生成物的文件，例如 README；具体保留清单写在脚本中。
7. 输出中英文数量、内容类型数量、语言不匹配和孤儿删除结果。
8. 网络、解析或 schema 映射失败时返回非零退出码。

`content:sync` 不掩盖子命令失败；Skills 同步失败时不继续宣称全量同步成功，Prompts 同步失败时也必须返回失败。

## 兼容性与错误处理

- 优先兼容上游当前结构，不为历史未使用格式增加复杂分支。
- 对未知提示词框架、缺少语言对译、重复输出路径、缺少正文或必填元数据进行显式检查。
- 语言不匹配默认输出警告；提供严格模式用于验证时将其视为失败。
- 如果上游新增内容会改变页面路由，先按现有 slug 规则生成并通过构建验证。
- 不通过删除测试、放宽 schema 或跳过内容来让同步表面成功。

## 测试与验收

实施时至少完成以下验证：

1. 使用固定的本地上游目录测试同步脚本，确认可重复执行且第二次运行没有无意义差异。
2. 核对 Skills、Prompts、Workflows 的中英文数量和输出路径。
3. 抽查每类至少一个中文和英文文件，确认 frontmatter 与正文来源正确。
4. 运行相关单元测试；为 Prompts 映射、未知框架、孤儿文件和语言差异补测试。
5. 运行 `npm run build`。
6. 运行 `npm run seo:check`。
7. 检查 `/zh-cn/qaskills/`、`/en/qaskills/`、`/zh-cn/prompts/`、`/en/prompts/` 及代表性详情页。

验收标准：同步命令成功，生成内容与上游一致，双语页面可构建且关键路由正常，没有误改部署或无关内容。

## 预期改动

- 修改 `package.json`：增加 `prompts:sync` 与 `content:sync`。
- 新增 `scripts/sync-prompts-from-repo.mjs`。
- 按需小幅调整 `scripts/sync-qaskills-from-repo.mjs`，只处理当前上游变更或提升共同的失败报告。
- 新增或修改同步脚本相关测试。
- 更新生成内容：`src/content/qaskills/**`、`src/content/prompts/**`、`src/content/workflows/**`。
- 如现有 schema 无法承载上游当前内容，仅做最小兼容修改并补测试。
