---
title: "Selenium UI 自动化最佳实践"
description: "通过显式同步、独立数据和可诊断证据，维护可持续的 Selenium 测试套件。"
testType: ui-testing
framework: selenium
language: Python
stage: best-practices
difficulty: advanced
duration: 35
order: 5
officialDocs: https://www.selenium.dev/documentation/test_practices/
---

## 概念与目标

Selenium WebDriver：WebDriver 标准的浏览器自动化实现。当需要覆盖多个浏览器、远程执行或接入既有 Selenium Grid 时，它非常合适。未手动提供本地驱动时，Selenium Manager 可以解析兼容驱动。 本文把这些能力落到“可维护且独立的浏览器回归套件”这个可执行任务上。采用可重复的评审循环：先定义业务风险，选择能暴露风险的最低测试层，让数据和环境可观测，并保留能够解释失败的产物。下面示例是一份检查清单，可在把绿色运行当作发布决策证据之前使用。请从已授权、可恢复的目标开始，例如本地测试应用或预发布环境；在运行前记录目标版本、测试数据来源和结果负责人。这样可以避免把“工具运行成功”误读成“允许发布”。

通过标准必须可观察：响应符合约定、用户可见状态出现，或受控负载运行满足预先商定的目标。开始编写前，先用一句话写清目标，例如：“在支持的浏览器和测试账号下，保存资料后必须出现确认提示。”它比“脚本没有报错”更可靠，因为它直接指向真实用户或服务消费者需要的结果。

### 先定义信号，再选择实现方式

选择一个主信号和一个诊断信号。主信号是决定成败的状态码、用户提示、分位延迟或事务结果；诊断信号是解释失败的报告、trace、截图、JTL、浏览器日志或服务指标。环境变量和测试数据不应写死在源码中。这样同一篇教程既能在本地复现，也能迁入 CI，而不必提交凭据或误把生产系统当作测试目标。

## 实施步骤

### 1. 准备受控环境

创建干净工作区，确认运行时可用，并显式指定目标地址。如果目标不可访问，或账号正在被其他并行运行使用，就先停止并解决前置问题。下面命令只用于安装和连通性检查，不构成压测或回归通过证据；遇到环境问题时，应把输出与本次改动一起保存。

```bash
python -m venv .venv
source .venv/bin/activate
pip install -U selenium pytest
python -c "import selenium; print(selenium.__version__)"
```

### 2. 实现最小的工具专属场景

围绕一个可观察结果构造场景，并用业务语言命名操作。下面的 Selenium WebDriver 示例刻意保持很小，便于定位问题。只有能说明新地址、选择器或接口参数为何稳定之后，才替换占位内容。把断言放在其验证的操作附近，评审者才能分辨失败来自初始化、交互、响应还是验证本身。

```python
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

def test_saved_notice(driver, base_url):
    driver.get(f"{base_url}/settings")
    driver.find_element(By.CSS_SELECTOR, "[data-testid='save']").click()
    notice = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.CSS_SELECTOR, "[role='status']"))
    )
    assert "Saved" in notice.text
```

### 3. 让行为可重复

把场景保存为有名字的文件，把数据放进独立 fixture 或 CSV，并通过环境变量传入目标。本阶段应使用工具原生的等待、事务、拦截、报告或配置能力来处理 best-practices 关注点，不能用通用 sleep 或隐藏的全局默认值敷衍。以下配置和命令聚焦于“可维护且独立的浏览器回归套件”，也适合作为提交前的最小冒烟检查。

```python
# conftest.py: expose one explicit target and driver per test
import os
import pytest
from selenium import webdriver

@pytest.fixture
def base_url():
    return os.environ['BASE_URL']

@pytest.fixture
def driver():
    options = webdriver.ChromeOptions()
    options.add_argument('--headless=new')
    browser = webdriver.Chrome(options=options)
    yield browser
    browser.quit()

# Run one focused test before expanding the suite.
BASE_URL="$BASE_URL" pytest -q tests/test_best_practices.py
```

## 运行与验证

只对已授权目标运行，并从最小安全范围开始。一次本地绿色结果只表示该配置下的场景契约通过；它不能证明容量、无障碍、安全性或所有浏览器与设备都正确。保存执行命令、目标提交版本、运行时间窗、测试数据标识和输出目录，使其他工程师可以独立复现。

```bash
export BASE_URL=https://staging.example.test
mkdir -p artifacts
BASE_URL="$BASE_URL" pytest -q --junitxml=artifacts/junit.xml
```

### 把结果当作证据阅读

通过的 pytest 结果应标识浏览器和断言的用户结果。失败时保留 JUnit XML、浏览器控制台日志、截图和页面源码。发生超时时先阅读捕获状态：原因可能是应用不可用、选择器已变或异步条件尚未满足，不能直接加 `sleep(5)`。 将实际结果与写下的阈值比较，而不是仅与上一次绿色构建比较。目标变慢或不可用时，应标记本次运行为“不确定”并保留证据，不能反复重试到偶然变绿。性能测试还要关联施压机和服务端指标；UI 测试则要先用 trace 或截图复现失败状态，再修改定位器、fixture 或超时。

## 常见问题与边界

不要混用隐式等待与 WebDriverWait，不要断言私有 DOM 细节，也不要让并行测试共享可变账号。定位应优先选择无障碍角色、标签或约定的 data-testid，而不是视觉样式路径。Grid 能提升浏览器覆盖和吞吐量，但也会引入网络与节点健康问题；先保证本地测试稳定，再分布式执行。 教程中的示例也有范围边界：它演示一种技术，不代表可以测试任意公共服务。涉及负载或可能造成数据变更的操作时，应使用限速、匿名化数据和约定的维护窗口。分享截图、报告和 CI 产物前，必须移除 token、cookie、个人信息和内部 URL。

### 推荐排障顺序

失败时按以下顺序检查：目标是否可达；选择的运行时和版本；fixture 或数据是否有效；第一个失败的请求或用户动作；最后再读诊断产物。这个顺序能避免测试框架的表面症状掩盖真实应用回归。一次只修改一个假设，然后重新运行聚焦命令。无法借助保留证据复现的失败仍应视为风险，不能简单标为“偶发”。

## CI/CD 实践

CI 任务应受控且可复现：锁定依赖，安装需要的浏览器或 Java/Python 运行时，只注入受保护变量，运行聚焦门禁，并在失败时也上传诊断产物。下面示例不在 YAML 中写真实密钥；应在 CI 提供商的密钥管理中配置。除非环境负责人明确批准成本和影响范围，否则不要把长时间压测或破坏性流程放进每次提交的门禁。

```yaml
name: Selenium WebDriver regression
on: [pull_request]
jobs:
  verify:
    runs-on: ubuntu-latest
    timeout-minutes: 20
    steps:
      - uses: actions/checkout@v4
      - name: Install runtime
        run: |
          python -m pip install -U pip selenium pytest
      - name: Run bounded test
        env:
          BASE_URL: ${{ secrets.STAGING_BASE_URL }}
        run: |
          BASE_URL="$BASE_URL" pytest -q --junitxml=artifacts/junit.xml
      - uses: actions/upload-artifact@v4
        if: always()
        with:
          name: selenium-evidence
          path: artifacts/
```

在将绿色任务当作发布信号前先检查产物。CI 应快速回答一个狭窄问题；定时任务或候选发布任务可以再增加浏览器矩阵、更长持续时间和受控的数据刷新。团队需要明确两者区别，避免把冒烟门禁误认为完整系统验证。
