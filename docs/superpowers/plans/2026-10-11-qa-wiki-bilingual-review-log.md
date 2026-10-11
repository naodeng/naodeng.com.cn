# QA Wiki 双语逐篇核对记录

> 本轮先完成 226 个页面的英文问题/章节结构与 Markdown 格式审计，再逐篇对照中文问题项；事实性主张按来源或官方资料核实并单独记录。

## 基线与许可记录

- 实施分支：`codex/qa-wiki-english-content-review`（基于 `origin/main`）。
- 来源仓库当前 HEAD：`ea02db6291f1`；`Sections/` 与 `Sections-zh/` 自计划建立时的 `f88411e10b07` 后无内容变化。
- 内容清点：来源 EN 224 篇、来源 ZH 224 篇、本站 ZH 226 篇；224 个来源 slug 一一配对，本站额外 `back-end-testing`、`positive-testing`。
- 许可处理：来源仓库原许可已核对；内容权利人于 2026-10-11 确认有权将词条改为本站现行 PolyForm Noncommercial License 1.0.0。来源名称署名继续保留，不展示旧来源站地址。
- 自动审计结果：224/224 英文来源词条均有本站页，英文页面未缺少来源中的问题标题；226/226 中英文配对页的中文问题项数量不低于英文版。452 篇 Wiki 的严格格式、完整性和 SEO 断链检查均通过。
- 审计边界：本轮未对 226 篇的每个事实句逐条做外部事实核验；除 A/B 测试工具停用信息外，其余内容以英文来源原文为依据。

## 逐篇记录

| Slug | 来源 EN | 来源 ZH | 英文审阅 | 中文对照 | 修复项 / 事实核查依据 |
|---|---|---|---|---|---|
| `a-b-testing` | `Sections/A/A-B-Testing.md` | `Sections-zh/A/A-B-Testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | 补 A/B 工具问答；更新 Google Optimize 停用状态（Google Analytics Help 官方说明）。 |
| `acceptance-test-driven-development` | `Sections/A/acceptance-test-driven-development.md` | `Sections-zh/A/acceptance-test-driven-development.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `acceptance-testing` | `Sections/A/acceptance-testing.md` | `Sections-zh/A/acceptance-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `accessibility-testing` | `Sections/A/accessibility-testing.md` | `Sections-zh/A/accessibility-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | 补齐英文已有的无障碍测试最佳实践问答。 |
| `actual-result` | `Sections/A/actual-result.md` | `Sections-zh/A/actual-result.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `ad-hoc-testing` | `Sections/A/ad-hoc-testing.md` | `Sections-zh/A/ad-hoc-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `agile-development` | `Sections/A/agile-development.md` | `Sections-zh/A/agile-development.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `agile-testing` | `Sections/A/agile-testing.md` | `Sections-zh/A/agile-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `alpha-testing` | `Sections/A/alpha-testing.md` | `Sections-zh/A/alpha-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `analytical-test-strategy` | `Sections/A/analytical-test-strategy.md` | `Sections-zh/A/analytical-test-strategy.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | 把已有策略要素列表整理为对应 FAQ 问题标题。 |
| `api` | `Sections/A/api.md` | `Sections-zh/A/api.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `api-testing` | `Sections/A/api-testing.md` | `Sections-zh/A/api-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `astqb` | `Sections/A/astqb.md` | `Sections-zh/A/astqb.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `automated-testing` | `Sections/A/automated-testing.md` | `Sections-zh/A/automated-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `availability-testing` | `Sections/A/availability-testing.md` | `Sections-zh/A/availability-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `back-end-testing` | — | — | 本站独有：英文页结构/格式检查通过 | 中文问题项对照通过（数量不低于英文） | 本站独有：已依据中文原文整理英文页。 |
| `back-to-back-testing` | `Sections/B/back-to-back-testing.md` | `Sections-zh/B/back-to-back-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `backward-compatibility` | `Sections/B/backward-compatibility.md` | `Sections-zh/B/backward-compatibility.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `baseline-testing` | `Sections/B/baseline-testing.md` | `Sections-zh/B/baseline-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `bdd` | `Sections/B/bdd.md` | `Sections-zh/B/bdd.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | 修复代码围栏遮蔽的问答结构并刷新目录。 |
| `beta-testing` | `Sections/B/beta-testing.md` | `Sections-zh/B/beta-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `big-bang-testing` | `Sections/B/big-bang-testing.md` | `Sections-zh/B/big-bang-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `black-box-testing` | `Sections/B/black-box-testing.md` | `Sections-zh/B/black-box-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `bottom-up-integration` | `Sections/B/bottom-up-integration.md` | `Sections-zh/B/bottom-up-integration.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `boundary-testing` | `Sections/B/boundary-testing.md` | `Sections-zh/B/boundary-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `browserstack` | `Sections/B/browserstack.md` | `Sections-zh/B/browserstack.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `bs-7925-2` | `Sections/B/bs-7925-2.md` | `Sections-zh/B/bs-7925-2.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `bug` | `Sections/B/bug.md` | `Sections-zh/B/bug.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `build-verification-testing` | `Sections/B/build-verification-testing.md` | `Sections-zh/B/build-verification-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `canary-testing` | `Sections/C/canary-testing.md` | `Sections-zh/C/canary-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `chai-js` | `Sections/C/chai-js.md` | `Sections-zh/C/chai-js.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `change-control` | `Sections/C/change-control.md` | `Sections-zh/C/change-control.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `change-requests` | `Sections/C/change-requests.md` | `Sections-zh/C/change-requests.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `chaos-engineering` | `Sections/C/chaos-engineering.md` | `Sections-zh/C/chaos-engineering.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `clean-slate` | `Sections/C/clean-slate.md` | `Sections-zh/C/clean-slate.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `cmmi` | `Sections/C/cmmi.md` | `Sections-zh/C/cmmi.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `code-coverage` | `Sections/C/code-coverage.md` | `Sections-zh/C/code-coverage.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `compatibility-testing` | `Sections/C/compatibility-testing.md` | `Sections-zh/C/compatibility-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `concurrency-testing` | `Sections/C/concurrency-testing.md` | `Sections-zh/C/concurrency-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `control-flow-testing` | `Sections/C/control-flow-testing.md` | `Sections-zh/C/control-flow-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `cross-browser-testing` | `Sections/C/cross-browser-testing.md` | `Sections-zh/C/cross-browser-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `cypress` | `Sections/C/cypress.md` | `Sections-zh/C/cypress.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | Playwright 无本站对应词条；移除失效外链，保留术语文字。 |
| `data-flow-testing` | `Sections/D/data-flow-testing.md` | `Sections-zh/D/data-flow-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `database` | `Sections/D/database.md` | `Sections-zh/D/database.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `decision-table-testing` | `Sections/D/decision-table-testing.md` | `Sections-zh/D/decision-table-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `defect-management` | `Sections/D/defect-management.md` | `Sections-zh/D/defect-management.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `dependency-testing` | `Sections/D/dependency-testing.md` | `Sections-zh/D/dependency-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `documentation-testing` | `Sections/D/documentation-testing.md` | `Sections-zh/D/documentation-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `dynamic-testing` | `Sections/D/dynamic-testing.md` | `Sections-zh/D/dynamic-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `edge-testing` | `Sections/E/edge-testing.md` | `Sections-zh/E/edge-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `end-to-end-testing` | `Sections/E/end-to-end-testing.md` | `Sections-zh/E/end-to-end-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `endurance-testing` | `Sections/E/endurance-testing.md` | `Sections-zh/E/endurance-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `entry-criteria` | `Sections/E/entry-criteria.md` | `Sections-zh/E/entry-criteria.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `equivalence-partitioning` | `Sections/E/equivalence-partitioning.md` | `Sections-zh/E/equivalence-partitioning.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `error-guessing` | `Sections/E/error-guessing.md` | `Sections-zh/E/error-guessing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `expected-result` | `Sections/E/expected-result.md` | `Sections-zh/E/expected-result.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `exploratory-testing` | `Sections/E/exploratory-testing.md` | `Sections-zh/E/exploratory-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `extreme-programming` | `Sections/E/extreme-programming.md` | `Sections-zh/E/extreme-programming.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `failover-testing` | `Sections/F/failover-testing.md` | `Sections-zh/F/failover-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `false-negative` | `Sections/F/false-negative.md` | `Sections-zh/F/false-negative.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `false-positive` | `Sections/F/false-positive.md` | `Sections-zh/F/false-positive.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `fat` | `Sections/F/fat.md` | `Sections-zh/F/fat.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `fault-injection-testing` | `Sections/F/fault-injection-testing.md` | `Sections-zh/F/fault-injection-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `flaky-test` | `Sections/F/flaky-test.md` | `Sections-zh/F/flaky-test.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `front-end-testing` | `Sections/F/front-end-testing.md` | `Sections-zh/F/front-end-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `functional-integration` | `Sections/F/functional-integration.md` | `Sections-zh/F/functional-integration.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `functional-requirements` | `Sections/F/functional-requirements.md` | `Sections-zh/F/functional-requirements.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `functional-testing` | `Sections/F/functional-testing.md` | `Sections-zh/F/functional-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `future-proof-testing` | `Sections/F/future-proof-testing.md` | `Sections-zh/F/future-proof-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `fuzz-testing` | `Sections/F/fuzz-testing.md` | `Sections-zh/F/fuzz-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `gherkin` | `Sections/G/gherkin.md` | `Sections-zh/G/gherkin.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `glass-box-testing` | `Sections/G/glass-box-testing.md` | `Sections-zh/G/glass-box-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `gorilla-testing` | `Sections/G/gorilla-testing.md` | `Sections-zh/G/gorilla-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `grey-box-testing` | `Sections/G/grey-box-testing.md` | `Sections-zh/G/grey-box-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `happy-path` | `Sections/H/happy-path.md` | `Sections-zh/H/happy-path.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `headless-testing` | `Sections/H/headless-testing.md` | `Sections-zh/H/headless-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `heuristic-testing` | `Sections/H/heuristic-testing.md` | `Sections-zh/H/heuristic-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `ieee-829` | `Sections/I/ieee-829.md` | `Sections-zh/I/ieee-829.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `impact-analysis` | `Sections/I/impact-analysis.md` | `Sections-zh/I/impact-analysis.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `incident-management` | `Sections/I/incident-management.md` | `Sections-zh/I/incident-management.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `incident-report` | `Sections/I/incident-report.md` | `Sections-zh/I/incident-report.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `incremental-testing` | `Sections/I/incremental-testing.md` | `Sections-zh/I/incremental-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `independent-verification-and-validation` | `Sections/I/independent-verification-and-validation.md` | `Sections-zh/I/independent-verification-and-validation.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `input-validation-testing` | `Sections/I/input-validation-testing.md` | `Sections-zh/I/input-validation-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `inspection` | `Sections/I/inspection.md` | `Sections-zh/I/inspection.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `integration-testing` | `Sections/I/integration-testing.md` | `Sections-zh/I/integration-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `interface-testing` | `Sections/I/interface-testing.md` | `Sections-zh/I/interface-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `internationalization-testing` | `Sections/I/internationalization-testing.md` | `Sections-zh/I/internationalization-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `interoperability-testing` | `Sections/I/interoperability-testing.md` | `Sections-zh/I/interoperability-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `istqb` | `Sections/I/istqb.md` | `Sections-zh/I/istqb.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `iteration` | `Sections/I/iteration.md` | `Sections-zh/I/iteration.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `jasmine` | `Sections/J/jasmine.md` | `Sections-zh/J/jasmine.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `jest` | `Sections/J/jest.md` | `Sections-zh/J/jest.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `jira` | `Sections/J/jira.md` | `Sections-zh/J/jira.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `jmeter` | `Sections/J/jmeter.md` | `Sections-zh/J/jmeter.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `junit-testing` | `Sections/J/junit-testing.md` | `Sections-zh/J/junit-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `keyword-driven-testing` | `Sections/K/keyword-driven-testing.md` | `Sections-zh/K/keyword-driven-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `lighthouse` | `Sections/L/lighthouse.md` | `Sections-zh/L/lighthouse.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | 按英文来源恢复正文；修复内链、围栏和目录。 |
| `load-testing` | `Sections/L/load-testing.md` | `Sections-zh/L/load-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `localization-testing` | `Sections/L/localization-testing.md` | `Sections-zh/L/localization-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `maintainability` | `Sections/M/maintainability.md` | `Sections-zh/M/maintainability.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `maintenance-testing` | `Sections/M/maintenance-testing.md` | `Sections-zh/M/maintenance-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `manual-testing` | `Sections/M/manual-testing.md` | `Sections-zh/M/manual-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `microservices-testing` | `Sections/M/microservices-testing.md` | `Sections-zh/M/microservices-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `mobile-app-testing` | `Sections/M/mobile-app-testing.md` | `Sections-zh/M/mobile-app-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `mobile-device-testing` | `Sections/M/mobile-device-testing.md` | `Sections-zh/M/mobile-device-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `mock-testing` | `Sections/M/mock-testing.md` | `Sections-zh/M/mock-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `monkey-testing` | `Sections/M/monkey-testing.md` | `Sections-zh/M/monkey-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `mtbf` | `Sections/M/mtbf.md` | `Sections-zh/M/mtbf.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `mutation-testing` | `Sections/M/mutation-testing.md` | `Sections-zh/M/mutation-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `negative-testing` | `Sections/N/negative-testing.md` | `Sections-zh/N/negative-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `node-js` | `Sections/N/node-js.md` | `Sections-zh/N/node-js.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `non-functional-testing` | `Sections/N/non-functional-testing.md` | `Sections-zh/N/non-functional-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `nunit` | `Sections/N/nunit.md` | `Sections-zh/N/nunit.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `operational-testing` | `Sections/O/operational-testing.md` | `Sections-zh/O/operational-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `orthogonal-array-testing` | `Sections/O/orthogonal-array-testing.md` | `Sections-zh/O/orthogonal-array-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `ott-testing` | `Sections/O/ott-testing.md` | `Sections-zh/O/ott-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `page-object-model` | `Sections/P/page-object-model.md` | `Sections-zh/P/page-object-model.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `pair-testing` | `Sections/P/pair-testing.md` | `Sections-zh/P/pair-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `parameterized-testing` | `Sections/P/parameterized-testing.md` | `Sections-zh/P/parameterized-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `path-testing` | `Sections/P/path-testing.md` | `Sections-zh/P/path-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `peer-testing` | `Sections/P/peer-testing.md` | `Sections-zh/P/peer-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `penetration-testing` | `Sections/P/penetration-testing.md` | `Sections-zh/P/penetration-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `performance-indicator` | `Sections/P/performance-indicator.md` | `Sections-zh/P/performance-indicator.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `performance-testing` | `Sections/P/performance-testing.md` | `Sections-zh/P/performance-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `positive-testing` | — | — | 本站独有：英文页结构/格式检查通过 | 中文问题项对照通过（数量不低于英文） | 本站独有：已依据中文原文整理英文页。 |
| `postcondition` | `Sections/P/postcondition.md` | `Sections-zh/P/postcondition.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `postman` | `Sections/P/postman.md` | `Sections-zh/P/postman.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `priority` | `Sections/P/priority.md` | `Sections-zh/P/priority.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `qa-metrics` | `Sections/Q/qa-metrics.md` | `Sections-zh/Q/qa-metrics.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `quality-assurance` | `Sections/Q/quality-assurance.md` | `Sections-zh/Q/quality-assurance.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `quality-management` | `Sections/Q/quality-management.md` | `Sections-zh/Q/quality-management.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | 修复定义标题格式并去掉重复定义。 |
| `regression-testing` | `Sections/R/regression-testing.md` | `Sections-zh/R/regression-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `release-testing` | `Sections/R/release-testing.md` | `Sections-zh/R/release-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `reliability-testing` | `Sections/R/reliability-testing.md` | `Sections-zh/R/reliability-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `requirements-management-tool` | `Sections/R/requirements-management-tool.md` | `Sections-zh/R/requirements-management-tool.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `responsive-design` | `Sections/R/responsive-design.md` | `Sections-zh/R/responsive-design.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `retesting` | `Sections/R/retesting.md` | `Sections-zh/R/retesting.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `reviewer` | `Sections/R/reviewer.md` | `Sections-zh/R/reviewer.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `risk-based-testing` | `Sections/R/risk-based-testing.md` | `Sections-zh/R/risk-based-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `robustness-testing` | `Sections/R/robustness-testing.md` | `Sections-zh/R/robustness-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `rup` | `Sections/R/rup.md` | `Sections-zh/R/rup.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `sanity-testing` | `Sections/S/sanity-testing.md` | `Sections-zh/S/sanity-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `scalability-testing` | `Sections/S/scalability-testing.md` | `Sections-zh/S/scalability-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `screenshot-testing` | `Sections/S/screenshot-testing.md` | `Sections-zh/S/screenshot-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `scrum` | `Sections/S/scrum.md` | `Sections-zh/S/scrum.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `security-testing` | `Sections/S/security-testing.md` | `Sections-zh/S/security-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `selenium` | `Sections/S/selenium.md` | `Sections-zh/S/selenium.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `selenium-ide` | `Sections/S/selenium-ide.md` | `Sections-zh/S/selenium-ide.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `session-based-testing` | `Sections/S/session-based-testing.md` | `Sections-zh/S/session-based-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `setup` | `Sections/S/setup.md` | `Sections-zh/S/setup.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `severity` | `Sections/S/severity.md` | `Sections-zh/S/severity.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `shift-left-testing` | `Sections/S/shift-left-testing.md` | `Sections-zh/S/shift-left-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `software-development-life-cycle` | `Sections/S/software-development-life-cycle.md` | `Sections-zh/S/software-development-life-cycle.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `software-quality` | `Sections/S/software-quality.md` | `Sections-zh/S/software-quality.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `software-quality-management` | `Sections/S/software-quality-management.md` | `Sections-zh/S/software-quality-management.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `software-risk-analysis` | `Sections/S/software-risk-analysis.md` | `Sections-zh/S/software-risk-analysis.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `software-testing` | `Sections/S/software-testing.md` | `Sections-zh/S/software-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `sql` | `Sections/S/sql.md` | `Sections-zh/S/sql.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | 按英文来源恢复正文；修复内链、围栏和目录。 |
| `state-transition-testing` | `Sections/S/state-transition-testing.md` | `Sections-zh/S/state-transition-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `static-testing` | `Sections/S/static-testing.md` | `Sections-zh/S/static-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `stlc` | `Sections/S/stlc.md` | `Sections-zh/S/stlc.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `stress-testing` | `Sections/S/stress-testing.md` | `Sections-zh/S/stress-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `structural-testing` | `Sections/S/structural-testing.md` | `Sections-zh/S/structural-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `swagger` | `Sections/S/swagger.md` | `Sections-zh/S/swagger.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `system-integration-testing` | `Sections/S/system-integration-testing.md` | `Sections-zh/S/system-integration-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `system-testing` | `Sections/S/system-testing.md` | `Sections-zh/S/system-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-approach` | `Sections/T/test-approach.md` | `Sections-zh/T/test-approach.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-automation` | `Sections/T/test-automation.md` | `Sections-zh/T/test-automation.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-case` | `Sections/T/test-case.md` | `Sections-zh/T/test-case.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-case-management` | `Sections/T/test-case-management.md` | `Sections-zh/T/test-case-management.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-class` | `Sections/T/test-class.md` | `Sections-zh/T/test-class.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-comparison` | `Sections/T/test-comparison.md` | `Sections-zh/T/test-comparison.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-coverage` | `Sections/T/test-coverage.md` | `Sections-zh/T/test-coverage.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-data` | `Sections/T/test-data.md` | `Sections-zh/T/test-data.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-design-specification` | `Sections/T/test-design-specification.md` | `Sections-zh/T/test-design-specification.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-design-tool` | `Sections/T/test-design-tool.md` | `Sections-zh/T/test-design-tool.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-driven-development` | `Sections/T/test-driven-development.md` | `Sections-zh/T/test-driven-development.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-environment` | `Sections/T/test-environment.md` | `Sections-zh/T/test-environment.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-execution` | `Sections/T/test-execution.md` | `Sections-zh/T/test-execution.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-execution-automation` | `Sections/T/test-execution-automation.md` | `Sections-zh/T/test-execution-automation.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-execution-schedule` | `Sections/T/test-execution-schedule.md` | `Sections-zh/T/test-execution-schedule.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-execution-technique` | `Sections/T/test-execution-technique.md` | `Sections-zh/T/test-execution-technique.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-execution-tool` | `Sections/T/test-execution-tool.md` | `Sections-zh/T/test-execution-tool.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-harness` | `Sections/T/test-harness.md` | `Sections-zh/T/test-harness.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-infrastructure` | `Sections/T/test-infrastructure.md` | `Sections-zh/T/test-infrastructure.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-log` | `Sections/T/test-log.md` | `Sections-zh/T/test-log.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-management` | `Sections/T/test-management.md` | `Sections-zh/T/test-management.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-observability` | `Sections/T/test-observability.md` | `Sections-zh/T/test-observability.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-oracles` | `Sections/T/test-oracles.md` | `Sections-zh/T/test-oracles.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-plan` | `Sections/T/test-plan.md` | `Sections-zh/T/test-plan.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-policy` | `Sections/T/test-policy.md` | `Sections-zh/T/test-policy.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-process` | `Sections/T/test-process.md` | `Sections-zh/T/test-process.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-process-improvement` | `Sections/T/test-process-improvement.md` | `Sections-zh/T/test-process-improvement.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-pyramid` | `Sections/T/test-pyramid.md` | `Sections-zh/T/test-pyramid.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-report` | `Sections/T/test-report.md` | `Sections-zh/T/test-report.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-runner` | `Sections/T/test-runner.md` | `Sections-zh/T/test-runner.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-scenario` | `Sections/T/test-scenario.md` | `Sections-zh/T/test-scenario.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-script` | `Sections/T/test-script.md` | `Sections-zh/T/test-script.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-specification` | `Sections/T/test-specification.md` | `Sections-zh/T/test-specification.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-strategy` | `Sections/T/test-strategy.md` | `Sections-zh/T/test-strategy.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-stub` | `Sections/T/test-stub.md` | `Sections-zh/T/test-stub.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-suite` | `Sections/T/test-suite.md` | `Sections-zh/T/test-suite.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `test-tool` | `Sections/T/test-tool.md` | `Sections-zh/T/test-tool.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `timebox-testing` | `Sections/T/timebox-testing.md` | `Sections-zh/T/timebox-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `top-down-integration` | `Sections/T/top-down-integration.md` | `Sections-zh/T/top-down-integration.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `traceability-matrix` | `Sections/T/traceability-matrix.md` | `Sections-zh/T/traceability-matrix.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `ui-testing` | `Sections/U/ui-testing.md` | `Sections-zh/U/ui-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `unit-test-framework` | `Sections/U/unit-test-framework.md` | `Sections-zh/U/unit-test-framework.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `unit-testing` | `Sections/U/unit-testing.md` | `Sections-zh/U/unit-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `usability-testing` | `Sections/U/usability-testing.md` | `Sections-zh/U/usability-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `use-case` | `Sections/U/use-case.md` | `Sections-zh/U/use-case.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `use-case-testing` | `Sections/U/use-case-testing.md` | `Sections-zh/U/use-case-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `user-acceptance-testing` | `Sections/U/user-acceptance-testing.md` | `Sections-zh/U/user-acceptance-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `v-model` | `Sections/V/v-model.md` | `Sections-zh/V/v-model.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `validation-testing` | `Sections/V/validation-testing.md` | `Sections-zh/V/validation-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `verification` | `Sections/V/verification.md` | `Sections-zh/V/verification.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `visual-regression-testing` | `Sections/V/visual-regression-testing.md` | `Sections-zh/V/visual-regression-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `volume-testing` | `Sections/V/volume-testing.md` | `Sections-zh/V/volume-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `web-automation` | `Sections/W/web-automation.md` | `Sections-zh/W/web-automation.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `web-performance-testing` | `Sections/W/web-performance-testing.md` | `Sections-zh/W/web-performance-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `web-test-automation-tools` | `Sections/W/web-test-automation-tools.md` | `Sections-zh/W/web-test-automation-tools.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | 将已有的 20 条加粗问句整理为正式标题并纳入目录。 |
| `web-testing` | `Sections/W/web-testing.md` | `Sections-zh/W/web-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `webdriver` | `Sections/W/webdriver.md` | `Sections-zh/W/webdriver.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `white-box-testing` | `Sections/W/white-box-testing.md` | `Sections-zh/W/white-box-testing.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |
| `xpath-query` | `Sections/X/xpath-query.md` | `Sections-zh/X/xpath-query.md` | 英文问题结构/格式检查通过；事实未逐条核验 | 中文问题项对照通过（数量不低于英文） | — |

## 批次小结

| 审计范围 | 英文结构/格式 | 中文问题项对照 | 内容修复 | 事实核验边界 |
|---|---:|---:|---|---|
| 全部 226 个本站词条（含 224 个来源配对） | 226/226 | 226/226 | 已记录在逐篇行；修复缺项和格式问题 | 除 A/B 工具停用状态外，未逐句做外部事实核验 |

## PR 审查补充（2026-10-11）

- 两位只读审查者提出英文摘要截断和来源署名不明确。复核当前内容后确认：226 篇英文 frontmatter 摘要中没有省略号截断；136 篇摘要是正文首句的完整前缀，只缺句末标点，已补齐标点并将其加入 Wiki 格式规范。
- 英文 Wiki 首页已明确署名为 QA Glossary Wiki 来源内容，并链接到来源代码仓库；PolyForm 许可与本站版权页入口保留，首页 E2E 增加对应断言。
- Wiki 详情页的目录回退解析改用 Markdown AST，避免把围栏代码中的 `##` 示例识别成页面标题。样式检查改用 Markdown 解析结果识别被错误渲染为代码的 Markdown 片段；样式修复脚本不再重写围栏缩进，避免改变列表嵌套。
- SEO 源码检查此前把中英文词条放入同一 slug 集合，导致配对页标题被误判为同语种重复，并可能漏检跨语种错误内链；现在标题、related 入链、孤立词条和内链目标均按语言分别检查。
- 复核修复候选树：452 篇 Wiki 的 frontmatter/TOC 标记有效，英文与中文各 226 篇配对；Markdown AST 未发现意外缩进代码块或多余 H1。

- PR #128 双轴复审发现 `seo-integrity.spec.ts` 删除了与 Wiki 路由无关的分页元数据断言和 12 个站点区块的桌面/移动端 WebPage JSON-LD 断言；已恢复这 54 项既有 E2E 覆盖并保留 Wiki 专项断言。恢复后该 spec 的 56 项检查全部通过。
