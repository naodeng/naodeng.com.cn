---
author:  "nao.deng"
title: "Pytest API Automation Testing Tutorial Advance Usage Filtering test case execution and Concurrent testing"
date: "2023-11-20T15:37:00+08:00"
summary:  "Focus on test case screening, concurrency testing and distributed testing. Learn how to execute test cases in a targeted manner to improve testing efficiency. Explore Pytest concurrent testing features and learn how to execute multiple test cases at the same time to reduce testing time."
tags: ["Filtering test case", "Concurrent testing","Distributed testing"]
Categories: ["API automation testing", "Pytest"]
series: ["Pytest API Automation Testing Tutorial"]
ShowWordCount: true
---

## Advanced Usage

### concurrent testing and distributed testing

In the daily process of API automation testing, concurrent execution of test cases is required to improve testing efficiency.

Sometimes it is also necessary to introduce distributed testing in order to run test cases on multiple machines at the same time, which can also better improve testing efficiency.

`pytest-xdist` is a plugin for Pytest that provides some corresponding functionality, mainly for supporting concurrent and distributed testing.

#### `pytest-xdist` Feature Introduction

1. **Concurrently run tests**:
   - Use the `-n` option: `pytest -n NUM` allows running tests concurrently, where `NUM` is the number of concurrent workers. This can speed up test execution, especially on computers with multiple CPU cores.

   ```bash
   pytest -n 3  # Start 3 concurrent workers to execute the test
   ```

2. **Distributed testing**:
   - Use `pytest --dist=loadscope`: allows tests to be executed on multiple nodes and test runs can be completed faster with distributed testing.

   ```bash
   pytest --dist=loadscope
   ```

   - Use `pytest --dist=each`: run a set of tests per node, for distributed testing.

   ```bash
   pytest --dist=each
   ```

3. **Parameterized tests and Concurrency**:
   - Use of `pytest.mark.run`: In conjunction with the `pytest.mark.run` tag, tests with different tags can optionally be run on different processes or nodes.

   ```python
   @pytest.mark.run(processes=2)
   def test_example():
       pass
   ```

4. **Distributed environment setup**:
   - Use `pytest_configure_node`: you can configure the tests before running them on the node.

   ```python
   def pytest_configure_node(node):
       node.slaveinput['my_option'] = 'some value'
   ```

   - Use `pytest_configure_node`: you can configure the tests before running them on the node.

   ```python
   def pytest_configure_node(node):
       node.slaveinput['my_option'] = 'some value'
   ```

5. **Distributed test environment destruction**:
   - Use `pytest_configure_node`: you can clean up after running tests on a node.

   ```python
   def pytest_configure_node(node):
       # Configure the node
       yield

       # Perform cleanup after running tests on nodes
       print("Cleaning up after test run on node %s" % node.gateway.id)
   ```

These are some of the features provided by `pytest-xdist` that can help you perform concurrent and distributed tests more efficiently to speed up test execution and increase efficiency. Be sure to consult the `pytest-xdist` documentation for more detailed information and usage examples before using it.

#### Installing `pytest-xdist` dependency

```shell
pip install pytest-xdist
```

#### Example of running a test case concurrently

##### Execute test cases concurrently with 3 workers

Run the following commands to see how long the test cases take to execute

- Concurrent Execution

```shell
pytest -n 3
```

![LKHRct](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/LKHRct.png)

- Default Parallel Execution

```shell
pytest
```

![5y442s](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/5y442s.png)

`Parallel execution took 9.81s` while `Concurrent execution took 1.63s`, you can see that concurrent execution of test cases can greatly improve the Parallel of testing.

##### concurrently executes the test cases with 3 workers, and each worker prints the progress of the test cases

```shell
pytest -n 3 -v
```

![5krJia](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/5krJia.png)

The progress of the test is printed in the test results, which provides a better understanding of the execution of the test cases.

#### Distributed testing example

##### Distributed test where each node runs a set of tests

```shell
pytest --dist=each
```

![W1akqS](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/W1akqS.png)

Distributed testing allows for faster test runs.

##### Distributed testing, where each node runs a set of tests and each worker prints the progress of the test cases

```shell
pytest --dist=each -v
```

![sMlawH](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/sMlawH.png)

The progress of the test will be printed in the test results, so you can better understand the execution of the test cases.

##### Distributed testing, each node runs a set of tests, and each worker prints the progress of the test cases, as well as the output of the test logs

```shell
pytest --dist=each -v --capture=no
```

![RkNSDb](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/RkNSDb.png)

The output of the test log is printed in the test results, which gives a better understanding of the execution of the test cases.

### Filtering test case execution

In the daily API testing process, we need to selectively execute test cases according to the actual situation in order to improve the testing efficiency.

Generally, when we use allure test reports, we can use the Allure tag feature to filter the use cases corresponding to the tag to execute the test, but the Pytest framework does not directly support running tests based on Allure tags. However, the Pytest framework does not directly support running tests based on Allure tags, so you can use Pytest markers to accomplish this.

Pytest provides a `marks` tagging feature that can be used to tag different types of test cases and then filter them for execution.

The general process is that you can mark tests with custom markers (e.g. Regression/Smoke) and then use pytest's -m option to run only those tests.

#### Defining Pytest Markers

Edit the pytest.ini file and add the following: customize the type of markers

- Regression: Marks the use case for regression testing.
- Smoke: mark it as a use case for smoke testing

```ini
markers =
    Regression: marks tests as Regression
    Smoke: marks tests as Smoke
```

#### Marking Test Cases

The operation steps are:

- Introduce pytest
- Mark the test case with `@pytest.mark`.

> To differentiate, create a new test case file named test_demo_filter.py.

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

#### Filtering Test Case Execution

- Running Regression-tagged test cases

```shell
pytest -m Regression
```

This command tells pytest to run only the tests labeled Regression.

![d8dMGa](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/d8dMGa.png)

- Running Smoke-tagged test cases

```shell
pytest -m Smoke
```

This command tells pytest to run only the tests labeled Smoke.

![2023112014VOVT3v](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112014VOVT3v.png)

## reference

- pytest-xdist docs:<https://pytest-xdist.readthedocs.io/en/stable/>
- pytest makers docs:<https://docs.pytest.org/en/6.2.x/example/markers.html>
- pytest docs:<https://docs.pytest.org/en/6.2.x/>
