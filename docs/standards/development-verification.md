# 开发改动验证指南

按改动范围选择最快的有效检查。多个范围同时改动时，合并对应检查；无法判断影响范围时，使用全量验证。此指南用于本地迭代选择检查，CI 仍按现有配置运行。

## 按改动范围选择检查

| 改动范围 | 本地检查 | 额外确认 |
| --- | --- | --- |
| `src/utils/`、纯数据处理逻辑 | `npm test` | 对边界、不变量和重复运行行为补充或运行属性测试 |
| Wiki / AI Wiki 内容 | `npm run wiki:style:check`、`npm run wiki:integrity:check` | 检查对应中英文词条、目录、站内链接和推荐内容；涉及标题或链接时再跑 `npm run seo:check` |
| 博客内容、Prompt、QA Skill、Workflow 内容 | `npm run seo:check`；Prompt 改动另跑 `npm run prompts:format:check` | 检查中英文对应内容、标题摘要、站内链接和图片；结构或渲染相关改动再跑 `npm run build` |
| 页面、布局、组件、样式、交互 | `npm run build`；相关 TesterArmy 用例可用 `cd tests && npm run test:e2e:run -- e2e/specs/<name>.e2e.ts` 定向运行 | 在预览页实际操作改动流程；页面有双语版本时分别检查，布局或交互改动查看桌面和窄屏 |
| 路由、导航、语言切换、共享内容 schema | `npm run build`、`npm run seo:check`、`cd tests && npm run test:e2e:all` | 验证中英文入口、目标 URL、canonical / sitemap 等相关输出 |
| `scripts/`、内容同步或生成逻辑 | `npm test`；根据内容类型运行对应格式、完整性检查 | 对生成或规范化流程连续执行两次，确认结果稳定且没有意外重复修改 |
| 依赖、Astro 配置、CI 工作流或跨多个范围的改动 | `npm run build`、`npm test`、`cd tests && npm run test:e2e:all` | 检查配置变化影响的构建、内容检查和真实页面链路 |

`npm run build` 包含 Astro 检查、站点构建和构建产物 SEO 检查。针对 E2E 的快速定向运行不能替代高风险改动所需的双套件完整验证。

## E2E 失败处理

- 首次失败后先查看失败步骤、截图和 trace，判断产品缺陷、环境问题还是用例不稳定。
- 重试后通过仍记录为不稳定用例，不作为干净通过；修复根因后再确认。
- 不用增加等待时间或反复重试掩盖失败。连续三轮调查或修复仍无法判断时，保留失败证据并交由人工处理。

## 验证结果记录

汇报改动时写明运行过的命令及结果。若改动影响页面，补充实际检查的路径、语言和视口；未运行某项建议检查时说明原因。遇到失败时区分本次引入的问题与已有问题，并附上失败步骤或报告位置。
