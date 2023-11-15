---
author:  "nao.deng"
title:  "Pytest Tutorial: Building a Pytest API Automation Test project from 0 to 1"
date: "2023-11-14T09:58:14+08:00"
summary: "dive into how to build a Pytest API automation testing project from scratch.Pytest is a popular Java library for performing REST API testing, providing powerful tools that make it easy to write automated test scripts to validate the API'sbehavior. "
tags:  [ "Building a API Automation Test project from 0 to 1"]
Categories:   ["API automation testing", "Pytest"]
series: ["Pytest Guide"]
ShowWordCount: true
---

## Build a Pytest API Automation Test Project from 0 to 1

### 1. Create a project directory

```shell
mkdir Pytest-API-Testing-Demo
```

### 2.Project initialization

```shell
// Go to the project folder
cd Pytest-API-Testing-Demo
// Create the project python project virtual environment
python -m venv .env
// Enable the project python project virtual environment
source .env/bin/activate
```

### 3.Install project dependencies

```shell
// Install the requests package
pip install requests
// Install the pytest package
pip install pytest
// Save the project dependencies to the requirements.txt file.
pip freeze > requirements.txt
```

### 4. Create new test files and test cases

```shell
// Create a new tests folder
mkdir tests
// Create a new test case file
cd tests
touch test_demo.py
```

### 5. Writing Test Cases

> The test API can be referred to the demoAPI.md file in the project.

```python
import requests

class TestPytestDemo:

    def test_get_demo(self):
        base_url = "https://jsonplaceholder.typicode.com"
        # SEND REQUEST
        response = requests.get(f"{base_url}/posts/1")
        # ASSERT
        assert response.status_code == 200
        assert response.json()['userId'] == 1
        assert response.json()['id'] == 1

    def test_post_demo(self):
        base_url = "https://jsonplaceholder.typicode.com"
        requests_data = {
            "title": "foo",
            "body": "bar",
            "userId": 1
        }
        # SEND REQUEST
        response = requests.post(f"{base_url}/posts", requests_data)
        # ASSERT
        assert response.status_code == 201
        print(response.json())
        assert response.json()['userId'] == '1'
        assert response.json()['id'] == 101
```

### 6.Run test cases

```shell
pytest
```

### 7.View test report

![CsoB4y](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/CsoB4y.png)

### 8.Integration pytest-html-reporter test report

> <https://github.com/prashanth-sams/pytest-html-reporter>

#### 8.1 Install pytest-html-reporter dependency

```shell
pip install pytest-html-reporter 
```

#### 8.2 Configuring Test Report Parameters

- Create a new pytest.ini file in the project root directory.
- Add the following

```ini
[pytest]
addopts = -vs -rf --html-report=./report --title='PYTEST REPORT' --self-contained-html
```

#### 8.3 Run test cases

```shell
pytest
```

#### 8.4 Viewing the test report

The report is located in the report directory in the project root directory, use your browser to open the pytest_html_report.html file to view it.

![8JdxbA](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/8JdxbA.png)

## reference

- pytest: [https://docs.pytest.org/en/latest/](https://docs.pytest.org/en/latest/)