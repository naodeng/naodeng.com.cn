# Wiki Markdown 格式 Review（R3）

## 范围

- 目录：`src/content/wiki`
- 文件数：226
- 复检时间：2026-03-03

## 结论

当前 `wiki` 的**结构性 Markdown 问题已基本清零**，可稳定渲染。

- `wiki:clean:check` 结果：`Changed files: 0`
- Frontmatter 缺失：0
- TOC START/END 不成对：0
- 连续 3+ 空行：0
- 未闭合代码块：0
- 链接 `] (` 空格错误：0

## 仍存在的问题（主要是格式一致性）

### P2: 中英文混排时中文后接英文标点前存在空格

- 现象：如 `中文 ,`、`中文 .`、`中文 :`。
- 影响：排版不专业，阅读节奏被打断。
- 扫描命中：81 处（示例）
  - `src/content/wiki/acceptance-test-driven-development.md:234`
  - `src/content/wiki/bdd.md:124`
  - `src/content/wiki/code-coverage.md:182`
  - `src/content/wiki/functional-testing.md:261`

### P3: 代码块缩进风格不统一（多数是列表中的缩进代码块）

- 现象：大量 `  ``` `（前置 2 空格）与顶格 ````` 混用。
- 影响：语义通常正确，但源码风格不统一，维护成本高。
- 扫描命中：5674 行（风格类，不是渲染错误）

## 改进建议

1. 建立“排版规范层”的 lint
- 专门校验中英混排标点空格（中文后英文标点前不留空格）。

2. 统一代码块缩进策略
- 规则：非列表场景顶格 fenced code；列表场景保持统一缩进层级。

3. 增加“结构 + 风格”双模式检查
- `wiki:clean:check` 继续负责结构。
- 新增 `wiki:style:check` 负责排版一致性。

## 可执行 Tasks

1. `task-1`：新增样式检查脚本
- 文件：`scripts/wiki-markdown-style-check.mjs`
- 检查项：
  - 中英混排标点空格
  - 代码块缩进一致性
- 输出：文件+行号+建议修复。

2. `task-2`：新增样式修复脚本（保守）
- 文件：`scripts/wiki-markdown-style-fix.mjs`
- 仅自动修复“中文后英文标点前空格”。
- 代码块缩进仅提示不自动改（避免误伤列表语义）。

3. `task-3`：接入 npm scripts
- `wiki:style:check`
- `wiki:style:fix`

4. `task-4`：CI 规则分级
- 阶段 1：style check 先 warning
- 阶段 2：清理完成后升级为 fail-on-error

## 建议执行顺序

- Day 1：`task-1`
- Day 2：`task-2` + 小范围试跑（Top 20 文件）
- Day 3：全量修复 + `task-3` + CI 接入

