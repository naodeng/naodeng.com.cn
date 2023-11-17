---
author:  "nao.deng"
title:  "Pytest API Automation Testing Tutorial Advance Usage Common Assertions and Data Driven"
date: "2023-11-15T18:32:55+08:00"
summary:  "A deep dive into advanced Pytest usage, focusing on how Pytest is commonly asserted and data-driven."
tags: ["Assertions", "Data Driven"]
Categories:   ["API automation testing", "Pytest"]
series: ["Pytest API Automation Testing Tutorial"]
ShowWordCount: true
---

## Advanced Usage

### Common Assertions

Using Pytest During the writing of interface automation test cases, we need to use various assertions to verify the expected results of the tests.

Pytest provides more assertions and a flexible library of assertions to fulfill various testing needs.

The following are some of the commonly used Pytest interface automation test assertions:

- **Equality assertion**: checks whether two values are equal.

   ```python
   assert actual_value == expected_value
   ```

- **Unequality Assertion**: checks if two values are not equal.

   ```python
   assert actual_value != expected_value
   ```

- **Containment assertion**: checks whether a value is contained in another value, usually used to check whether a string contains a substring.

   ```python
   assert substring in full_string
   ```

- **Membership Assertion**: checks whether a value is in a collection, list, or other iterable object.

   ```python
   assert item in iterable
   ```

- **Truth Assertion**: checks whether an expression or variable is true.

   ```python
   assert expression
   ```

   OR

   ```python
   assert variable
   ```

- **False Value Assertion**: checks whether an expression or variable is false.

   ```python
   assert not expression
   ```

   OR

   ```python
   assert not variable
   ```

- **Greater Than, Less Than, Greater Than Equal To, Less Than Equal To Assertion**: checks whether a value is greater than, less than, greater than equal to, or less than equal to another value.

   ```python
   assert value > other_value
   assert value < other_value
   assert value >= other_value
   assert value <= other_value
   ```

- **Type Assertion**: checks that the type of a value is as expected.

   ```python
   assert isinstance(value, expected_type)
   ```

   For example, to check if a value is a string:

   ```python
   assert isinstance(my_string, str)
   ```

- **Exception Assertion**: checks to see if a specific type of exception has been raised in a block of code.

   ```python
   with pytest.raises(ExpectedException):
       # Block of code that is expected to raise an ExpectedException.
   ```

- **Approximate Equality Assertion**: checks whether two floating-point numbers are equal within some margin of error.

   ```python
   assert math.isclose(actual_value, expected_value, rel_tol=1e-9)
   ```

- **List Equality Assertion**: checks if two lists are equal.

   ```python
   assert actual_list == expected_list
   ```

- **Dictionary Equality Assertion**: checks if two dictionaries are equal.

   ```python
   assert actual_dict == expected_dict
   ```

- **Regular Expression Match Assertion**: checks if a string matches the given regular expression.

   ```python
   import re

   assert re.match(pattern, string)
   ```

- **Null Assertion**: checks whether a value is `None`。

   ```python
   assert value is None
   ```

- **Non-null value assertion**: checks if a value is not `None`。

   ```python
   assert value is not None
   ```

- **Boolean Assertion**: checks whether a value of `True` or `False`。

   ```python
   assert boolean_expression
   ```

- **Empty Container Assertion**: checks if a list, collection or dictionary is empty.

   ```python
   assert not container  # Check if the container is empty
   ```

- **Contains Subset Assertion**: checks whether a set contains another set as a subset.

   ```python
   assert subset <= full_set
   ```

- **String Beginning or End Assertion**: checks whether a string begins or ends with the specified prefix or suffix.

    ```python
    assert string.startswith(prefix)
    assert string.endswith(suffix)
    ```

- **Quantity Assertion**: checks the number of elements in a list, collection, or other iterable object.

    ```python
    assert len(iterable) == expected_length
    ```

- **Range Assertion**: checks if a value is within the specified range.

    ```python
    assert lower_bound <= value <= upper_bound
    ```

- **Document Existence Assertion**: checking whether a document exists or not。

    ```python
    import os

    assert os.path.exists(file_path)
    ```

These are some common Pytest assertions, but depending on your specific testing needs, you may want to use other assertions or combine multiple assertions to more fully validate your test results.
Detailed documentation on assertions can be found on the official Pytest website at:[Pytest - Built-in fixtures, marks, and nodes](https://docs.pytest.org/en/latest/reference.html#pytest)

### Data-driven

In the process of API automation testing. The use of data-driven is a regular testing methodology where the input data and expected output data of the test cases are stored in data files, and the testing framework executes multiple tests based on these data files to validate various aspects of the API.

The test data can be easily modified without modifying the test case code.

Data-driven testing helps you cover multiple scenarios efficiently and ensures that the API works properly with a variety of input data.

Refer to the demo:<https://github.com/Automation-Test-Starter/Pytest-API-Test-Demo>

#### Create the test configuration file

> Configuration file will be stored in json format for example, other formats such as YAML, CSV, etc. are similar, can be referred to.

```bash
// create a new config folder
mkdir config
// enter the config folder
cd config
// create a new configuration file
touch config.json
```

#### Writing Test Configuration Files

The configuration file stores the configuration information of the test environment, such as the URL of the test environment, database connection information, and so on.

The contents of the test configuration file in the demo are as follows:

- Configure host information
- Configure the getAPI interface information.
- Configure the postAPI interface information.

```json
{
  "host": "https://jsonplaceholder.typicode.com",
  "getAPI": "/posts/1",
  "postAPI":"/posts"
}
```

#### Create the test data file

The request data file and the response data file store the request data and the expected response data of the test case, respectively.

```bash
// create a new data folder
mkdir data
// enter the data folder
cd data
// create a new request data file
touch request_data.json
// create a new response data file
touch response_data.json
```

#### Writing test data files

- Writing the request data file

> The request data file is configured with the request data for the getAPI API and the request data for the postAPI API.

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

- Writing the response data file

> The request data file is configured with the response data for the getAPI API and the response data for the postAPI API.

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

#### Updating test cases to support data driving

> To differentiate, here is a new test case file named test_demo_data_driving.py

```python
import requests
import json

# get the test configuration information from the configuration file
with open("config/config.json", "r") as json_file:
    config = json.load(json_file)

# get the request data from the test data file
with open('data/request_data.json', 'r') as json_file:
    request_data = json.load(json_file)

# get the response data from the test data file
with open('data/response_data.json', 'r') as json_file:
    response_data = json.load(json_file)


class TestPytestDemo:

    def test_get_demo(self):
        host = config.get("host")
        get_api = config.get("getAPI")
        get_api_response_data = response_data.get("getAPI")
        # send request
        response = requests.get(host+get_api)
        # assert
        assert response.status_code == 200
        assert response.json() == get_api_response_data

    def test_post_demo(self):
        host = config.get("host")
        post_api = config.get("postAPI")
        post_api_request_data = request_data.get("postAPI")
        post_api_response_data = response_data.get("postAPI")
        # send request
        response = requests.post(host + post_api, post_api_request_data)
        # assert
        assert response.status_code == 201
        assert response.json() == post_api_response_data
```

#### Run the test case to confirm the data driver is working

> If you run the data driver support test case with demo project: test_demo_data_driving.py, it is recommended to block other test cases first, otherwise it may report errors.
  
```shell
  pytest tests/test_demo_data_driving.py
```

![XQIPLf](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/XQIPLf.png)

## Reference

- [Pytest docs](https://docs.pytest.org/en/6.2.x/)