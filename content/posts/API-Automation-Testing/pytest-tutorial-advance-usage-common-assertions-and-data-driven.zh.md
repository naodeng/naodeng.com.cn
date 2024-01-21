---
author:  "nao.deng"
title:  "Pytest 接口自动化测试教程：进阶用法 - 常用断言和数据驱动"
date: "2023-11-15T18:32:55+08:00"
summary:  "深入探讨 Pytest 的高级用法，着重介绍如何将 Pytest 常用断言和数据驱动。"
ZHtags: ["断言", "数据驱动"]
ZHcategories: ["接口自动化测试", "Pytest"]
ZHseries: ["Pytest 接口自动化测试教程"]
ShowWordCount: true
---

## 进阶用法

### 常用断言

使用 Pytest 在接口自动化测试用例编写过程中，我们需要使用各种断言来验证测试的预期结果。

Pytest 提供了更多的断言和灵活的断言库，以满足各种测试需求。

以下是一些常用的 Pytest 接口自动化测试断言：

- **相等性断言**：检查两个值是否相等。

   ```python
   assert actual_value == expected_value
   ```

- **不相等性断言**：检查两个值是否不相等。

   ```python
   assert actual_value != expected_value
   ```

- **包含断言**：检查一个值是否包含在另一个值中，通常用于检查字符串是否包含子字符串。

   ```python
   assert substring in full_string
   ```

- **成员资格断言**：检查一个值是否在集合、列表或其他可迭代对象中。

   ```python
   assert item in iterable
   ```

- **真值断言**：检查一个表达式或变量是否为真。

   ```python
   assert expression
   ```

   或

   ```python
   assert variable
   ```

- **假值断言**：检查一个表达式或变量是否为假。

   ```python
   assert not expression
   ```

   或

   ```python
   assert not variable
   ```

- **大于、小于、大于等于、小于等于断言**：检查一个值是否大于、小于、大于等于或小于等于另一个值。

   ```python
   assert value > other_value
   assert value < other_value
   assert value >= other_value
   assert value <= other_value
   ```

- **类型断言**：检查一个值的类型是否符合预期。

   ```python
   assert isinstance(value, expected_type)
   ```

   例如，检查一个值是否是字符串：

   ```python
   assert isinstance(my_string, str)
   ```

- **异常断言**：检查在代码块中是否引发了特定类型的异常。

   ```python
   with pytest.raises(ExpectedException):
       # 代码块，期望引发 ExpectedException 异常
   ```

- **近似相等断言**：检查两个浮点数是否在某个误差范围内相等。

   ```python
   assert math.isclose(actual_value, expected_value, rel_tol=1e-9)
   ```

- **列表相等断言**：检查两个列表是否相等。

   ```python
   assert actual_list == expected_list
   ```

- **字典相等断言**：检查两个字典是否相等。

   ```python
   assert actual_dict == expected_dict
   ```

- **正则表达式匹配断言**：检查一个字符串是否匹配给定的正则表达式。

   ```python
   import re

   assert re.match(pattern, string)
   ```

- **空值断言**：检查一个值是否为 `None`。

   ```python
   assert value is None
   ```

- **非空值断言**：检查一个值是否不为 `None`。

   ```python
   assert value is not None
   ```

- **布尔值断言**：检查一个值是否为 `True` 或 `False`。

   ```python
   assert boolean_expression
   ```

- **空容器断言**：检查一个列表、集合或字典是否为空。

   ```python
   assert not container  # 检查容器是否为空
   ```

- **包含子集断言**：检查一个集合是否包含另一个集合作为子集。

   ```python
   assert subset <= full_set
   ```

- **字符串开头或结尾断言**：检查一个字符串是否以指定的前缀或后缀开头或结尾。

    ```python
    assert string.startswith(prefix)
    assert string.endswith(suffix)
    ```

- **数量断言**：检查一个列表、集合或其他可迭代对象的元素数量。

    ```python
    assert len(iterable) == expected_length
    ```

- **范围断言**：检查一个值是否在指定的范围内。

    ```python
    assert lower_bound <= value <= upper_bound
    ```

- **文件存在断言**：检查文件是否存在。

    ```python
    import os

    assert os.path.exists(file_path)
    ```

以上是一些 Pytest 常用的断言，但根据具体的测试需求，您可能会使用其他断言或结合多个断言来更全面地验证测试结果。
详细的断言文档可以在 Pytest 官方网站找到：[Pytest - Built-in fixtures, marks, and nodes](https://docs.pytest.org/en/latest/reference.html#pytest)

### 数据驱动

在 API 自动化测试的过程中。使用数据驱动是一种常规测试方法，其中测试用例的输入数据和预期输出数据都被存储在数据文件中，测试框架根据这些数据文件执行多次测试，以验证 API 的各个方面。

测试数据可以很容易地修改，而不需要修改测试用例代码。

数据驱动测试可以帮助你有效地覆盖多种情况，确保 API 在各种输入数据下都能正常运行。

可参考 demo：<https://github.com/Automation-Test-Starter/Pytest-API-Test-Demo>

#### 新建测试配置文件

> 配置文件会以 json 格式存储为例，其他格式如 YAML、CSV 等类似，均可参考

```bash
// 新建测试配置文件夹
mkdir config
// 新建测试配置文件
cd config
touch config.json
```

#### 编写测试配置文件

配置文件存储测试环境的配置信息，如测试环境的 URL、数据库连接信息等。

demo 中的测试配置文件内容如下：

- 配置 host 信息
- 配置 getAPI 接口信息
- 配置 postAPI 接口信息

```json
{
  "host": "https://jsonplaceholder.typicode.com",
  "getAPI": "/posts/1",
  "postAPI":"/posts"
}
```

#### 新建测试数据文件

请求数据文件和响应数据文件分别存储测试用例的请求数据和预期响应数据。

```bash
// 新建测试数据文件夹
mkdir data
// 进入测试数据文件夹
cd data
// 新建请求数据文件
touch request_data.json
// 新建响应数据文件
touch response_data.json
```

#### 编写测试数据文件

- 编写请求数据文件

> 请求数据文件中配置了 getAPI 接口的请求数据和 postAPI 接口的请求数据

```json
{
  "getAPI": "",
  "postAPI":{
    "title": "foo",
    "body": "bar",
    "userId": 1
  }
}
```

- 编写响应数据文件

> 请求数据文件中配置了 getAPI 接口的响应数据和 postAPI 接口的响应数据

```json
{
    "getAPI": {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    "postAPI":{
      "title": "foo",
      "body": "bar",
      "userId": 1,
      "id": 101
    }
}
```

#### 更新测试用例来支持数据驱动

> 为做区分，这里新建测试用例文件，文件名为 test_demo_data_driving.py

```python
import requests
import json

# 从配置文件夹获取测试配置
with open("config/config.json", "r") as json_file:
    config = json.load(json_file)

# 从测试数据文件夹获取接口请求数据
with open('data/request_data.json', 'r') as json_file:
    request_data = json.load(json_file)

# 从测试数据文件夹获取接口响应数据
with open('data/response_data.json', 'r') as json_file:
    response_data = json.load(json_file)


class TestPytestDemo:

    def test_get_demo(self):
        host = config.get("host")
        get_api = config.get("getAPI")
        get_api_response_data = response_data.get("getAPI")
        # 发起请求
        response = requests.get(host+get_api)
        # 断言
        assert response.status_code == 200
        assert response.json() == get_api_response_data

    def test_post_demo(self):
        host = config.get("host")
        post_api = config.get("postAPI")
        post_api_request_data = request_data.get("postAPI")
        post_api_response_data = response_data.get("postAPI")
        # 发起请求
        response = requests.post(host + post_api, post_api_request_data)
        # 断言
        assert response.status_code == 201
        assert response.json() == post_api_response_data
```

#### 运行该测试用例确认数据驱动是否生效

> 若用 demo 项目运行数据驱动支持测试用例：test_demo_data_driving.py，建议先屏蔽掉其他测试用例，否则可能会报错

![XQIPLf](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/XQIPLf.png)

## 参考

- [pytest 文档](https://docs.pytest.org/en/6.2.x/)

---
欢迎关注软件测试同学的公众号“**软件测试同学**”，原创 QA 技术文章第一时间推送。
<!-- markdownlint-disable MD045 -->
<!-- markdownlint-disable MD033 -->
<center>
  <img src="https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112015'QR Code for 公众号.jpg" style="width: 100px;">
</center>
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD045 -->
