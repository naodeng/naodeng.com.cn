# 测试策略评审清单 / Testing Strategy Review Checklist

> 这是一份受 WireMock 文章启发的独立实践工具，不是原文提供的官方清单。 / This is an independent practical tool inspired by the WireMock article, not an official checklist from the source.

| # | 检查项 / Review question | 状态 / Status | 证据 / Evidence | 负责人 / Owner |
| --- | --- | --- | --- | --- |
| 1 | 是否记录了关键业务风险？ / Are the critical business risks documented? | ☐ | | |
| 2 | 每项风险是否映射到明确的验证边界？ / Is each risk mapped to a clear verification boundary? | ☐ | | |
| 3 | 单元测试是否聚焦复杂规则与边界组合？ / Do unit tests focus on complex rules and boundary combinations? | ☐ | | |
| 4 | 服务级测试是否通过公开 API 验证可观察行为？ / Do service-level tests verify observable behavior through public APIs? | ☐ | | |
| 5 | Mock 是否覆盖成功、异常和超时场景？ / Do mocks cover success, error, and timeout scenarios? | ☐ | | |
| 6 | Mock 的行为是否通过契约或提供方验证？ / Is mock behavior checked through contracts or provider verification? | ☐ | | |
| 7 | 是否定期对真实依赖执行集成验证？ / Are integration checks against real dependencies scheduled? | ☐ | | |
| 8 | 是否用少量 E2E 测试保护关键用户旅程？ / Do a small number of E2E tests protect critical user journeys? | ☐ | | |
| 9 | 是否单独考虑界面、可访问性和跨浏览器风险？ / Are UI, accessibility, and cross-browser risks considered separately? | ☐ | | |
| 10 | 是否按测试类型记录执行时间和不稳定测试比例？ / Are execution time and flaky rate tracked by test type? | ☐ | | |
| 11 | 是否记录测试发现的有效缺陷及其严重程度？ / Are useful defects found by tests and their severity recorded? | ☐ | | |
| 12 | 是否衡量失败诊断时间与测试维护工作量？ / Are failure diagnosis time and test maintenance effort measured? | ☐ | | |
| 13 | 是否按风险安排安全、性能和韧性验证？ / Are security, performance, and resilience checks selected by risk? | ☐ | | |
| 14 | 测试组合是否依据证据调整，而不是追逐固定比例？ / Is the portfolio adjusted using evidence rather than fixed ratios? | ☐ | | |
| 15 | 是否明确试点范围、观察周期和复盘时间？ / Are the pilot scope, observation period, and review date defined? | ☐ | | |

## 决策记录 / Decision record

- **当前最重要的质量风险 / Top quality risks:**
- **需要增加的验证 / Checks to add:**
- **需要减少或替换的验证 / Checks to remove or replace:**
- **Mock 契约校验方式 / Mock contract-validation approach:**
- **试点服务与观察周期 / Pilot service and observation period:**
- **衡量成功的指标 / Success measures:**
- **决策负责人 / Decision owner:**
