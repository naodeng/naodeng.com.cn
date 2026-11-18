# 将验证闭环用于后续开发迭代

**日期：** 2026-11-18
**依据：** [How the Claude Code team thinks about verification](https://claude.dev/blog/how-the-claude-code-team-thinks-about-verification/)，Addy Osmani，2026-11-16。
**范围：** 把文章中的验证实践映射到本站的 Astro、双语内容和测试流程。第一阶段已将按改动选择检查与 E2E 失败处理写入仓库指南；CI 自动汇总不稳定用例、逐步启用门禁和收敛测试套件仍是后续建议。

## 文章中可迁移的做法

- **验证要运行真实功能。** E2E 能提供用户步骤、失败位置、截图和 trace；只有测试通过还不足以证明功能正常。文章建议把启动和检查应用的步骤固化成快速、可靠的 verify 流程（“E2E tests”“Verification means running the change”）。
- **测试要匹配风险。** E2E 适合验证用户链路；属性测试适合检验边界、不变量和幂等性；差分测试适合迁移时比较新旧结果（“3 tests worth investing in”）。
- **按改动触发少量相关检查。** 维护带有触发条件的可靠性清单，让每次改动只检查相关项；失败经过有限轮次仍无法解决时交给人处理（“Failing tests require human attention”“Reliability checks trigger on the diff”）。
- **检查规则要可信且会维护。** 让代码所有者定义检查；保护负责判定改动的规则，定期用真实缺陷回放评估检查是否漏报或误报，并把反复出现的漏检转成规则、清理失效规则（“Code owners write their own checks”“Changes can't modify their own checks”“Test your checks on what actually matters”“Turn misses into rules”）。

## 本站现状与机会

本站已有较强的自动验证基础：CI 会运行构建、单元测试和两套 E2E；E2E 覆盖导航、双语切换、SEO、无障碍、响应式和内容页面（`.github/workflows/e2e.yml`、`tests/e2e/specs/`、`tests/e2e-next/specs/`）。单元测试也已引入 `fast-check`，覆盖部分纯函数属性（例如 `tests/unit/wikiFilter.test.ts`、`tests/unit/readingTime.test.ts`）。

接下来优先改善验证过程的**选择性、反馈质量和可信度**：

| 优先级 | 改进 | 具体做法 | 为什么适合本站 |
| --- | --- | --- | --- |
| 先做 | 按改动路径选择验证清单 | 建立一份短的 `verify` 指南：`src/pages`、组件和样式改动跑构建与对应 E2E，并抽查桌面/移动端；博客、Wiki、Prompt 等内容改动跑对应的双语、链接、SEO 或格式检查；纯工具逻辑改动跑对应单测。先由开发者按表选择，不急于自动推断。 | 仓库已经有多类检查，但完整 E2E 一次运行两套框架，全部改动都跑全量测试会拉长反馈。清单可让日常验证更快，也降低漏跑中英文或移动端的概率。 |
| 先做 | 把重试通过的 E2E 标记为不稳定 | CI 汇总首次失败、重试次数和最终结果；重试通过仍建不稳定记录，禁止把反复重试当成修复。每轮迭代优先查根因；连续三轮仍失败时附上报告、截图或 trace 并请求人工判断。 | Playwright CI 配置允许两次重试，新 E2E 配置允许一次；若只看最终状态，短期波动可能被绿色结果掩盖。 |
| 先做 | 建立按路径触发的可靠性清单 | 从常见回归点开始维护表格：`src/content` → 双语配对、slug/链接、frontmatter；`src/pages`/`src/layouts` → 路由、导航和语言切换；`src/styles`/`src/components` → 桌面与移动交互、可访问性；`scripts`/`src/utils` → 单测、边界与重复运行。每条只保留“触发条件、检查命令/场景、过去发现的问题”。 | 项目有中文/英文镜像、静态路由和内容生成脚本，这些跨目录约束容易在局部改动中被遗漏。 |
| 随后 | 分批把有效内容检查从告警升级为门禁 | 先为新增/修改内容提供差异范围内的报告，确认误报可处理后，再逐类开启严格门禁。记录暂时例外及原因，定期清理。 | 当前 Wiki 样式和 SEO 静态检查在 CI 中是 warning；strict gate 由仓库变量控制。无需一次性把所有历史问题升级成阻断。 |
| 随后 | 用真实回归验证检查是否有效 | 每次线上缺陷或回滚，补一条最小可复现的单测/E2E/内容检查；每季度抽查几条已知回归，确认对应检查仍会失败。 | 文章强调要“审查检查器”，否则测试只会增加数量，不一定提升发现问题的能力。 |
| 迁移稳定后 | 收敛重复的 E2E 套件 | 保持新旧框架对同一用户链路的覆盖映射；等新框架替代用例经过覆盖复核并在 CI 连续稳定后，逐组退役旧用例。 | 仓库当前同时运行 Playwright 与新 E2E 框架，增加了每次全量验证的耗时；测试 README 已说明两套暂时并存。 |

## 建议的落地顺序

1. **已试行：** 新增[开发改动验证指南](../standards/development-verification.md)，并从 `AGENTS.md` 链接。它列出目录到检查命令的映射、双语与视口确认方式，以及重试通过仍要记录、连续三轮未解决时交由人工处理的规则。此阶段只更新人工工作流，保留当前全量 CI。
2. 在 CI 报告中区分首次失败与重试后通过，先观察不稳定用例清单，再修复高频不稳定点。
3. 对新内容逐类打开严格门禁；每个实际缺陷都补一条能复现它的检查。
4. 等新 E2E 框架通过覆盖复核后，再减少旧框架的重复用例和运行时间。

第一阶段不需要新增测试框架或大改 CI。建议先执行 2–3 个迭代，观察开发者耗时、CI 重跑率和线上回归，再决定是否把路径选择自动化或设置更强的提交门禁。

## 参考

- 文章原文：[How the Claude Code team thinks about verification](https://claude.dev/blog/how-the-claude-code-team-thinks-about-verification/)
- 仓库依据：`.github/workflows/e2e.yml`、`tests/package.json`、`tests/playwright.config.ts`、`tests/e2e.config.ts`、`tests/README_CN.md`、`tests/unit/`
