+++
author = "nao.deng"
title = "gatling performance testing tool advanced usage: CI/CD Integration"
date = "2023-10-30T10:36:24+08:00"
keywords = ["Performance Testing","gatling","Performance Testing tool"]
description = "This article introduces the advanced usage of the performance testing tool gatling: CI/CD integration, using github action as an example to introduce how to integrate gatling into the CI/CD process."
tags = [
"Performance Testing","gatling"
]
+++

### CI/CD Integration

#### Accessing github action

Take github action as an example, and other CI tools as well.

##### Gradle + Scala version

> See the demo at <https://github.com/Automation-Test-Starter/gatling-gradle-scala-demo>.

- Create the .github/workflows directory: In your GitHub repository, create a directory called .github/workflows. This will be where the GitHub Actions workflow files will be stored.

- Create the workflow file: Create a YAML-formatted workflow file, such as gatling.yml, in the .github/workflows directory.
- Edit the gatling.yml file: Copy the following into the file.

```yaml
name: Gatling Performance Test

on:
  push:
    branches:
      - main

jobs:
  performance-test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Java
        uses: actions/setup-java@v2
        with:
          java-version: 11
          distribution: 'adopt'

      - name: Run Gatling tests
        run: |
          ./gradlew gatlingRun
        env:
          GATLING_SIMULATIONS_FOLDER: src/gatling/scala

      - name: Archive Gatling results
        uses: actions/upload-artifact@v2
        with:
          name: gatling-results
          path: build/reports/gatling

      - name: Upload Gatling results to GitHub
        uses: actions/upload-artifact@v2
        with:
          name: gatling-results
          path: build/reports/gatling
```

- Commit the code: Add the gatling.yml file to your repository and commit.
- View the test report: In GitHub, navigate to your repository. Click the Actions tab at the top and then click the Performance Test workflow on the left. You should see the workflow running, wait for the execution to complete and you can view the results.

![readme-github-action-gradle](https://github.com/Automation-Test-Starter/Gatling-Performance-Test-starter/raw/main/readme-pic/readme-github-action-gradle.png)

##### Maven + Scala version

> See the demo at <https://github.com/Automation-Test-Starter/gatling-maven-scala-demo>

- Create the .github/workflows directory: In your GitHub repository, create a directory called .github/workflows. This will be where the GitHub Actions workflow files will be stored.

- Create the workflow file: Create a YAML-formatted workflow file, such as gatling.yml, in the .github/workflows directory.
- Edit the gatling.yml file: Copy the following into the file.

```yaml
name: Gatling Performance Test

on:
  push:
    branches:
      - main

jobs:
  performance-test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Java
        uses: actions/setup-java@v2
        with:
          java-version: 11
          distribution: 'adopt'

      - name: Run Gatling tests
        run: |
          mvn gatling:test
        env:
          GATLING_SIMULATIONS_FOLDER: src/test/scala

      - name: Archive Gatling results
        uses: actions/upload-artifact@v2
        with:
          name: gatling-results
          path: target/gatling

      - name: Upload Gatling results to GitHub
        uses: actions/upload-artifact@v2
        with:
          name: gatling-results
          path: target/gatling
```

- Commit the code: Add the gatling.yml file to your repository and commit.
- View the test report: In GitHub, navigate to your repository. Click the Actions tab at the top and then click the Performance Test workflow on the left. You should see the workflow running, wait for the execution to complete and you can view the results.

![readme-github-action-maven](https://github.com/Automation-Test-Starter/Gatling-Performance-Test-starter/raw/main/readme-pic/readme-github-action-maven.png)

## reference

- galting official website: <https://gatling.io/>
- galting official documentation: <https://gatling.io/docs/gatling/>
- galting official github: <https://github.com/gatling/>