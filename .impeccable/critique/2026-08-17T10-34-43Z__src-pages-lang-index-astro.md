---
target: 网站首页 review
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
timestamp: 2026-08-17T10-34-43Z
slug: src-pages-lang-index-astro
---
# 首页 Critique 评审报告 — Nao's Blog / 软件测试同学

Method: dual-agent (A: 93bbd333 设计评审 · B: 4411ebf5 检测器+浏览器证据)
目标: src/pages/[lang]/index.astro（真实首页，/ 是语言重定向壳）+ HomeTaskNavigator / HomeCapabilityGuide / HomeExploreHub

## Design Health Score: 22/32 (Acceptable, 68.75%)
| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | 任务卡/能力卡无 hover 态，契约断裂 |
| 2 | Match System / Real World | 3 | 文案自然双语对等；Skill vs Prompt 需额外解释 |
| 3 | User Control and Freedom | 3 | / 重定向页无 JS 时强制跳语言 |
| 4 | Consistency and Standards | 2 | 三套卡片样式并存，圆角混用，hover 不一致 |
| 5 | Error Prevention | 3 | 无出错操作，广告槽未填充正确折叠 |
| 6 | Recognition Rather Than Recall | 3 | 概念靠记忆区分 |
| 7 | Flexibility and Efficiency | n/a | 落地页无重复任务场景 |
| 8 | Aesthetic and Minimalist Design | 2 | 下半页卡片墙，页长 5.7k px |
| 9 | Error Recovery | 3 | 无错误路径，404 兜底 |
| 10 | Help and Documentation | n/a | 帮助即内容本身 |

## Design Specificity
上半页产品专属（任务导向 IA、QA 生命周期 6 任务卡、Skill/Prompt 双轨、输入→能力→输出示例条）；下半页（最新文章/探索）模板化可替换。检测器: side-tab x2 (border-left 3px 彩条 + 12px 圆角同元素), design-system-font-size x3 (1rem/18px token 阶外)。

## Priority Issues
1. [P1] 任务卡/能力卡整体不可点 + 无 hover 反馈（554x118-196px 只有底部一行小字可点）→ polish
2. [P1] 顶栏焦点环不可见（.locale-trigger outline:none; .btn-icon 白 70% 环在白色顶栏上不可见）→ audit
3. [P1] 页面 2 个 h1（Header 品牌 h1 + hero h1）→ audit
4. [P2] 信息架构倒置：ask 先于 explain，hero 主 CTA 是自锚点 → clarify
5. [P2] favicon.svg ~385KB 是全页最大单体资源，比 AdSense 主脚本还大 → optimize
6. [P2] 下半页模板化 + zh/en 探索卡 4/3 不对称（wiki 中文专属所致）+ en hero 390px 折 4 行 → layout
7. [P3] #64748b 4.55:1 贴 AA 线；token 阶外字号 3 处；border-left 彩条与四档圆角契约冲突；en 一个 href="#" 空锚

## Persona Red Flags
- Jordan: hero 主 CTA 只滚动不离开；Skill/Prompt 无解释；无 JS 时语言被强制
- Riley: 任务卡整卡乱点零反馈；双语不对称被抓；en hero 4 行折行
- Casey: 页长 5658/5915px；CTA 在顶部拇指难达；385KB favicon 拖慢首屏

## Minor Observations
- GoogleAdThin 插在最新文章与探索之间，与"广告移页尾"策略待复核（未填充时折叠正常）
- 示例条只展示 1 条，数据里有 3 条
- 任务卡 6 张全指向 Skill，无 Prompt 详情入口
- 探索中心副标题"而不是一次塞满整页列表"与自身 4 卡轻微自相矛盾

## Evidence
浏览器实测: 无横向滚动、网格断点正确、console 仅 AdSense 403+TagError:Y 环境噪音、无 404、无站点 JS 错误、对比度全部 >=4.76:1、焦点环真缺失 1 处 (.locale-trigger)、h1=2、alt 缺失 0。性能: DCL 54-141ms, load 1630-1845ms (AdSense iframe 拖长), 资源 30-31 个, favicon.svg ~385KB 最大。
