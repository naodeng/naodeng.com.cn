---
author:  "nao.deng"
title:  "Pytest 接口自动化测试教程：进阶用法 - 筛选测试用例执行，并发测试和分布式测试"
date: "2023-11-20T15:37:00+08:00"
summary:  "聚焦于测试用例筛选、并发测试和分布式测试。学会如何有针对性地执行测试用例，提高测试效率。探索 Pytest 的并发测试特性，了解如何同时执行多个测试用例，缩短测试时间。"
ZHtags: ["测试用例筛选", "并发测试", "分布式测试"]
ZHcategories: ["接口自动化测试", "Pytest"]
ZHseries: ["Pytest 接口自动化测试教程"]
ShowWordCount: true
---

## 进阶用法

### 并发测试和分布式测试

在日常的接口自动化测试过程中，需要并发执行测试用例，以提高测试效率。

有时候也需要引入分布式测试，以便在多台机器上同时运行测试用例，也能更好的提升测试效率。

`pytest-xdist` 是 Pytest 的一个插件，能提供了一些对应的功能，主要用于支持并发测试和分布式测试。

#### `pytest-xdist` 功能介绍

1. **并发执行测试**：
   - 使用 `-n` 选项：`pytest -n NUM` 允许并发运行测试，其中 `NUM` 是并发 worker 的数量。这可以加速测试执行，特别是在拥有多个 CPU 内核的计算机上。

   ```bash
   pytest -n 3  # 启动 3 个并发 worker 执行测试
   ```

2. **分布式测试**：
   - 使用 `pytest --dist=loadscope`：允许在多个节点上执行测试，通过分布式测试可以更快地完成测试运行。

   ```bash
   pytest --dist=loadscope
   ```

   - 使用 `pytest --dist=each`：每个节点运行一组测试，适用于分布式测试。

   ```bash
   pytest --dist=each
   ```

3. **参数化测试和并发**：
   - 使用 `pytest.mark.run`：结合 `pytest.mark.run` 标记，可以选择在不同的进程或节点上运行具有不同标记的测试。

   ```python
   @pytest.mark.run(processes=2)
   def test_example():
       pass
   ```

4. **分布式环境设置**：
   - 使用 `pytest_configure_node`：可以在节点上运行测试之前进行配置。

   ```python
   def pytest_configure_node(node):
       node.slaveinput['my_option'] = 'some value'
   ```

   - 使用 `pytest_configure_node`：可以在节点上运行测试之前进行配置。

   ```python
   def pytest_configure_node(node):
       node.slaveinput['my_option'] = 'some value'
   ```

5. **分布式测试环境销毁**：
   - 使用 `pytest_configure_node`：可以在节点上运行测试之后进行清理。

   ```python
   def pytest_configure_node(node):
       # 配置节点
       yield

       # 在节点上运行测试后执行清理
       print("Cleaning up after test run on node %s" % node.gateway.id)
   ```

这些是 `pytest-xdist` 提供的一些功能，可以帮助您更有效地执行并发测试和分布式测试，以加速测试执行并提高效率。确保在使用前查阅 `pytest-xdist` 的文档以获取更详细的信息和用法示例。

#### 安装 `pytest-xdist` 依赖

```shell
pip install pytest-xdist
```

#### 并发运行测试用例示例

##### 并发 3 个 worker 执行测试用例

分别运行以下命令，查看测试用例的执行时长

- 并发执行

```shell
pytest -n 3
```

![LKHRct](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/LKHRct.png)

- 默认串行执行

```shell
pytest
```

![5y442s](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/5y442s.png)

`串行执行耗时 9.81s`，而`并发执行耗时 1.63s`，可以看到并发执行测试用例可以大大提高测试效率。

##### 并发 3 个 worker 执行测试用例，并且每个 worker 都会打印测试用例的进度

```shell
pytest -n 3 -v
```

![5krJia](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/5krJia.png)

测试结果中会打印测试进度，可以更好的了解测试用例的执行情况。

#### 分布式测试示例

##### 分布式测试，每个节点运行一组测试

```shell
pytest --dist=each
```

![W1akqS](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/W1akqS.png)

分布式测试可以更快地完成测试运行。

##### 分布式测试，每个节点运行一组测试，并且每个 worker 都会打印测试用例的进度

```shell
pytest --dist=each -v
```

![sMlawH](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/sMlawH.png)

测试结果中会打印测试进度，可以更好的了解测试用例的执行情况。

##### 分布式测试，每个节点运行一组测试，并且每个 worker 都会打印测试用例的进度，同时打印测试日志的输出

```shell
pytest --dist=each -v --capture=no
```

![RkNSDb](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/RkNSDb.png)

测试结果中会打印测试日志的输出，可以更好的了解测试用例的执行情况。

### 筛选用例执行

在日常的接口测试过程中，我们需要根据实际情况来选择性地执行测试用例，以提高测试效率。

一般我们使用 allure 测试报告的时候，可以使用 Allure 标签特性来进行筛选对应标签的的用例来执行测试，但 Pytest 框架不直接支持运行基于 Allure 标签的测试。所以可以使用 Pytest 标记来实现这一点。

Pytest 提供 `marks`标记功能可以用来标记不同类型的测试用例，然后进行筛选对应类型的测试用例进行执行。

大致流程为你可以用自定义标记（如 Regression/Smoke）来标记测试，然后使用 pytest 的 -m 选项只运行这些测试。

#### 定义 Pytest 标记

编辑 pytest.ini 文件，添加以下内容：自定义标记的类型

- Regression:标记为回归测试的用例
- Smoke:标记为冒烟测试的用例

```ini
markers =
    Regression: marks tests as Regression
    Smoke: marks tests as Smoke
```

#### 标记用例

操作步骤为：

- 引入 pytest
- 使用 `@pytest.mark` 标记测试用例

> 为做区分，这里新建测试用例文件，文件名为 test_demo_filter.py

```python
import pytest
import requests
import json


class TestPytestMultiEnvDemo:

    @pytest.mark.Regression  # mark the test case as regression
    def test_get_demo_filter(self, env_config, env_request_data, env_response_data):
        host = env_config["host"]
        get_api = env_config["getAPI"]
        get_api_response_data = env_response_data["getAPI"]
        # send request
        response = requests.get(host+get_api)
        # assert
        assert response.status_code == 200
        assert response.json() == get_api_response_data

    @pytest.mark.Smoke  # mark the test case as smoke
    def test_post_demo_filter(self, env_config, env_request_data, env_response_data):
        host = env_config["host"]
        post_api = env_config["postAPI"]
        post_api_request_data = env_request_data["postAPI"]
        print("make the request")
        post_api_response_data = env_response_data["postAPI"]
        # Your test code here
        response = requests.post(host + post_api, json=post_api_request_data)
        print("verify the response status code")
        assert response.status_code == 201
        print("verify the response data")
        assert response.json() == post_api_response_data
```

#### 筛选测试用例执行

- 运行 Regression 标记的测试用例

```shell
pytest -m Regression
```

这条命令告诉 pytest 只运行标有 Regression 的测试。

![d8dMGa](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/d8dMGa.png)

- 运行 Smoke 标记的测试用例

```shell
pytest -m Smoke
```

这条命令告诉 pytest 只运行标有 Smoke 的测试。

![2023112014VOVT3v](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112014VOVT3v.png)

## 参考资料

- pytest-xdist 文档:<https://pytest-xdist.readthedocs.io/en/stable/>
- pytest makers 文档:<https://docs.pytest.org/en/6.2.x/example/markers.html>
- pytest 文档:<https://docs.pytest.org/en/6.2.x/>

---
欢迎关注软件测试同学的公众号“**软件测试同学**”，原创 QA 技术文章第一时间推送。
<!-- markdownlint-disable MD045 -->
<!-- markdownlint-disable MD033 -->
<center>
  <img src="https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112015'QR Code for 公众号.jpg" style="width: 100px;">
</center>
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD045 -->
