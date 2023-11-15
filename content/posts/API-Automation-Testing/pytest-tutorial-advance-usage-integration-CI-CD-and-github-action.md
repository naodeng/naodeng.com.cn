---
author:  "nao.deng"
title:  "Pytest Tutorial Advance Usage Integration CI CD and Github Action"
date: "2023-11-15T18:32:55+08:00"
summary: "dive into advanced usage of Pytest, focusing on how to integrate Pytest into a CI/CD process and how to automate tests using GitHub Actions. "
tags: [ "CI/CD Integration"]
Categories:   ["API automation testing", "Pytest"]
series: ["Pytest Guide"]
ShowWordCount: true
---

## Advanced Usage

### CI/CD integration

#### Integration github action

Use github action as an example, and other CI tools similarly

See the demo at <https://github.com/Automation-Test-Starter/Pytest-API-Test-Demo>

- Create the .github/workflows directory: In your GitHub repository, create a directory called .github/workflows. This will be where the GitHub Actions workflow files will be stored.

- Create a workflow file: Create a YAML-formatted workflow file, such as pytest.yml, in the .github/workflows directory.

- Edit the pytest.yml file: Copy the following into the file
  
```yaml
# This workflow will install Python dependencies, run tests and lint with a single version of Python
# For more information see: https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-python

name: Pytest API Testing

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

permissions:
  contents: read

jobs:
  Pytes-API-Testing:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3
    - name: Set up Python 3.10
      uses: actions/setup-python@v3
      with:
        python-version: "3.10"
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt
        
    - name: Test with pytest
      run: |
        pytest

    - name: Archive Pytest test report
      uses: actions/upload-artifact@v3
      with:
        name: SuperTest-test-report
        path: report
          
    - name: Upload Pytest report to GitHub
      uses: actions/upload-artifact@v3
      with:
        name: Pytest-test-report
        path: report
```

- Commit the code: Add the pytest.yml file to your repository and commit.
- View test reports: In GitHub, navigate to your repository. Click the Actions tab at the top and then click the Pytest API Testing workflow on the left. You should see the workflow running, wait for the execution to complete and you can view the results.

![yE65LO](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/yE65LO.png)

## reference

- Pytest official document: <https://docs.pytest.org/en/6.2.x/contents.html>
- gitHub action official document: <https://docs.github.com/en/actions>
