---
author:  "nao.deng"
title:  "A collection of tutorials on API automation testing for different frameworks and different development languages"
date: "2023-11-29T11:23:00+08:00"
summary: "This blog post compiles tutorials on API automation testing using various frameworks and programming languages, providing readers with comprehensive learning resources. It covers a range of popular testing frameworks and programming languages, enabling you to choose the best solution for your project. Whether you're a developer in Python, Java, JavaScript, or any other language, and whether you prefer using REST Assured, SuperTest, or other frameworks, this collection will offer you in-depth learning guides to help you navigate the field of API automation testing with ease. A must-read resource to master the various tools and techniques in API automation testing."
tags: ["Getting Started","Setting Up Environment","Building a API Automation Test project from 0 to 1","Multiple Environment Support","Integration Allure Report","Data Driven","CI/CD Integration"]
categories: ["API Automation Testing", "Postman", "SuperTest", "RestAssured", "Pytest", "Bruno"]
series: ["API Automation Testing Tutorial"]
ShowWordCount: true
---

## Implementation of API Automation Projects with Java and REST Assured Framework

### REST Assured Framework Tutorial Table of Contents

> The table of contents is not clickable, only for displaying the structure.
<!-- markdownlint-disable MD051 -->
- [Quick Start Project for RestAssured API Test](#restassured-api-test-starter)
  - [Introduction to RestAssured](#introduction-to-restassured)
  - [Project Structure](#project-structure)
    - [Versions for Gradle Build](#versions-for-gradle-build)
    - [Versions for Maven Build](#versions-for-maven-build)
  - [Project Dependencies](#project-dependencies)
  - [Building REST Assured API Test Project from 0 to 1](#building-rest-assured-api-test-project-from-0-to-1)
    - [Gradle Version](#gradle-version)
    - [Maven Version](#maven-version)
  - [Advanced Usage](#advanced-usage)
    - [Verify Response Data](#verify-response-data)
    - [File Upload](#file-upload)
    - [Logging](#logging)
    - [Filters](#filters)
    - [Continuous Integration](#continuous-integration)
      - [Integrate with GitHub Action](#integrate-with-github-action)
    - [Integrate Allure Test Report](#integrate-allure-test-report)
    - [Data-Driven](#data-driven)
    - [Multi-Environment Support](#multi-environment-support)
<!-- markdownlint-disable MD051 -->
### Corresponding Articles for REST Assured Framework Tutorial

- REST Assured API Test Tutorial: Advanced Usage - Integration with CI/CD and Allure Report:<https://naodeng.tech/en/posts/api-automation-testing/rest-assured-tutorial-advance-usage-integration-ci-cd-and-allure-report/>
- REST Assured API Test Tutorial: Advanced Usage - Verify Response and Logging, Filters, File Upload:<https://naodeng.tech/en/posts/api-automation-testing/rest-assured-tutorial-advance-usage-verifying-response-and-logging/>
- REST Assured API Test Tutorial: Building Your Own Project from 0 to 1:<https://naodeng.tech/en/posts/api-automation-testing/rest-assured-tutorial-building-your-own-project-from-0-to-1/>
- REST Assured API Test Tutorial: Introduction and Environment Setup Preparation:<https://naodeng.tech/en/posts/api-automation-testing/rest-assured-tutorial-and-environment-preparation/>

### Reference Documents for REST Assured Framework Tutorial

- Demo Project Repository: [RestAssured-API-Test-Starterhttps://github.com/Automation-Test-Starter/RestAssured-API-Test-Starter/](<https://github.com/Automation-Test-Starter/RestAssured-API-Test-Starter/>)
- Rest Assured Official Documentation: [https://rest-assured.io/](https://rest-assured.io/)
- Rest Assured Official GitHub: [https://github.com/rest-assured/rest-assured](https://github.com/rest-assured/rest-assured)
- Rest Assured Official Chinese Translation: [https://github.com/RookieTester/rest-assured-doc](https://github.com/RookieTester/rest-assured-doc)
- Allure Documentation: [https://docs.qameta.io/allure/](https://docs.qameta.io/allure/)
- GitHub Action Documentation: [https://docs.github.com/en/actions](https://docs.github.com/en/actions)

## Implementation of API Automation Projects with JavaScript and SuperTest Framework

### SuperTest Framework Tutorial Table of Contents

> The table of contents is not clickable, only for displaying the structure.
<!-- markdownlint-disable MD051 -->
- [Quick Start Project for SuperTest API Test](#supertest-api-test-starter)
  - [Introduction](#introduction)
  - [Project Dependencies](#project-dependencies)
  - [Project File Structure](#project-file-structure)
  - [Building SuperTest API Test Project from 0 to 1](#building-supertest-api-test-project-from-0-to-1)
    - [Mocha Version](#mocha-version)
    - [Jest Version](#jest-version)
  - [Advanced Usage](#advanced-usage)
    - [Continuous Integration](#continuous-integration)
      - [Integrate with GitHub Action](#integrate-with-github-action)
    - [Common Assertions](#common-assertions)
      - [Built-in Assertions in SuperTest](#built-in-assertions-in-supertest)
      - [Common Assertions in CHAI](#common-assertions-in-chai)
      - [Common Assertions in Jest](#common-assertions-in-jest)
    - [Data-Driven](#data-driven)
    - [Multi-Environment Support](#multi-environment-support)
<!-- markdownlint-disable MD051 -->
### Corresponding Articles for SuperTest Framework Tutorial

- SuperTest API Test Tutorial: Advanced Usage - Multi-Environment Support:<https://naodeng.tech/en/posts/api-automation-testing/supertest-tutorial-advance-usage-multiple-environment-support/>
- SuperTest API Test Tutorial: Advanced Usage - Data-Driven:<https://naodeng.tech/en/posts/api-automation-testing/supertest-tutorial-advance-usage-data-driven/>
- SuperTest API Test Tutorial: Advanced Usage - Common Assertions:<https://naodeng.tech/en/posts/api-automation-testing/supertest-tutorial-advance-usage-common-assertions/>
- SuperTest API Test Tutorial: Advanced Usage - Integration with CI/CD and GitHub Action:<https://naodeng.tech/en/posts/api-automation-testing/supertest-tutorial-advance-usage-integration-ci-cd-and-github-action/>
- SuperTest API Test Tutorial: Building Your Own Project from 0 to 1:<https://naodeng.tech/en/posts/api-automation-testing/supertest-tutorial-building-your-own-project-from-0-to-1/>
- SuperTest API Test Tutorial: Getting Started and Own Environment Preparation:<https://naodeng.tech/en/posts/api-automation-testing/supertest-tutorial-getting-started-and-own-environment-preparation/>

### Reference Documents for SuperTest Framework Tutorial

- Demo Project Repository: [SuperTest-API-Test-Starterhttps://github.com/Automation-Test-Starter/SuperTest-API-Test-Starter](https://github.com/Automation-Test-Starter/SuperTest-API-Test-Starter)
- SuperTest Documentation: [https://github.com/ladjs/supertest](https://github.com/ladjs/supertest)
- Jest Documentation: [https://jestjs.io/docs/en/getting-started](<https://jestjs.io/docs/en/getting-started>)
- Mocha Documentation: [https://mochajs.org/](https://mochajs.org/)
- Chai Documentation: [https://www.chaijs.com/](https://www.chaijs.com/)
- Allure Documentation: [https://docs.qameta.io/allure/](https://docs.qameta.io/allure/)
- GitHub Action Documentation: [https://docs.github.com/en/actions](https://docs.github.com/en/actions)

## Implementation of API Automation Projects with Python and Pytest Framework

### Pytest Framework Tutorial Table of Contents

> The table of contents is not clickable, only for displaying the structure.
<!-- markdownlint-disable MD051 -->
- [Quick Start Project for Pytest API Test](#pytest-api-test-starter)
  - [Introduction](#introduction)
    - [Introduction to Pytest](#introduction-to-pytest)
    - [Introduction to Python Virtual Environment](#python-virtual-environment-introduction)
  - [Project Dependencies](#project-dependencies)
  - [Project Directory Structure](#project-directory-structure)
  - [Building Pytest API Test Project from 0 to 1](#building-pytest-api-test-project-from-0-to-1)
  - [Advanced Usage](#advanced-usage)
    - [Continuous Integration](#continuous-integration)
      - [Integrate with GitHub Action](#integrate-with-github-action)
    - [Common Assertions](#common-assertions)
    - [Data-Driven](#data-driven)
    - [Multi-Environment Support and Integration with Allure Report](#multi-environment-support-and-integration-with-allure-report)
    - [Concurrent Testing and Distributed Testing](#concurrent-testing-and-distributed-testing)
    - [Filtering Test Case Execution](#filtering-test-case-execution)
<!-- markdownlint-disable MD051 -->
### Corresponding Articles for Pytest Framework Tutorial

- Pytest API Test Tutorial: Advanced Usage - Filtering Test Case Execution, Concurrent Testing, and Distributed Testing:<https://naodeng.tech/en/posts/api-automation-testing/pytest-tutorial-advance-usage-filter-testcase-and-concurrent-testing-distributed-testing/>
- Pytest API Test Tutorial: Advanced Usage - Multi-Environment Support and Integration with Allure Report:<https://naodeng.tech/en/posts/api-automation-testing/pytest-tutorial-advance-usage-multiple-environment-support-and-integration-allure-report/>
- Pytest API Test Tutorial: Advanced Usage - Common Assertions and Data-Driven:<https://naodeng.tech/en/posts/api-automation-testing/pytest-tutorial-advance-usage-common-assertions-and-data-driven/>
- Pytest API Test Tutorial: Advanced Usage - Integration with CI/CD and GitHub Action:<https://naodeng.tech/en/posts/api-automation-testing/pytest-tutorial-advance-usage-integration-ci-cd-and-github-action/>
- Pytest API Test Tutorial: Building Your Own Project from 0 to 1:<https://naodeng.tech/en/posts/api-automation-testing/pytest-tutorial-building-your-own-project-from-0-to-1/>
- Pytest API Test Tutorial: Getting Started and Own Environment Preparation:<https://naodeng.tech/en/posts/api-automation-testing/pytest-tutorial-getting-started-and-own-environment-preparation/>

### Reference Documents for Pytest Framework Tutorial

- Demo Project Repository: [Pytest-API-Test-Starter](https://github.com/Automation-Test-Starter/Pytest-API-Test-Starter)
- Pytest Documentation: [https://docs.pytest.org/en/stable/](https://docs.pytest.org/en/stable/)
- Pytest-html Documentation: [https://pypi.org/project/pytest-html/](https://pypi.org/project/pytest-html/)
- Pytest-xdist Documentation: [https://pypi.org/project/pytest-xdist/](https://pypi.org/project/pytest-xdist/)
- Allure-pytest Documentation: [https://pypi.org/project/allure-pytest/](https://pypi.org/project/allure-pytest/)
- Allure Documentation: [https://docs.qameta.io/allure/](https://docs.qameta.io/allure/)
- GitHub Action Documentation: [https://docs.github.com/en/actions](https://docs.github.com/en/actions)

## Implementation of API Automation Testing with Testing Tools

### Postman API Automation Testing

#### Postman Framework Tutorial Directory

> The directory is not clickable, only for displaying the structure
<!-- markdownlint-disable MD051 -->
- [Implementation of API Automation Projects with Java and REST Assured Framework](#implementation-of-api-automation-projects-with-java-and-rest-assured-framework)
  - [REST Assured Framework Tutorial Table of Contents](#rest-assured-framework-tutorial-table-of-contents)
  - [Corresponding Articles for REST Assured Framework Tutorial](#corresponding-articles-for-rest-assured-framework-tutorial)
  - [Reference Documents for REST Assured Framework Tutorial](#reference-documents-for-rest-assured-framework-tutorial)
- [Implementation of API Automation Projects with JavaScript and SuperTest Framework](#implementation-of-api-automation-projects-with-javascript-and-supertest-framework)
  - [SuperTest Framework Tutorial Table of Contents](#supertest-framework-tutorial-table-of-contents)
  - [Corresponding Articles for SuperTest Framework Tutorial](#corresponding-articles-for-supertest-framework-tutorial)
  - [Reference Documents for SuperTest Framework Tutorial](#reference-documents-for-supertest-framework-tutorial)
- [Implementation of API Automation Projects with Python and Pytest Framework](#implementation-of-api-automation-projects-with-python-and-pytest-framework)
  - [Pytest Framework Tutorial Table of Contents](#pytest-framework-tutorial-table-of-contents)
  - [Corresponding Articles for Pytest Framework Tutorial](#corresponding-articles-for-pytest-framework-tutorial)
  - [Reference Documents for Pytest Framework Tutorial](#reference-documents-for-pytest-framework-tutorial)
- [Implementation of API Automation Testing with Testing Tools](#implementation-of-api-automation-testing-with-testing-tools)
  - [Postman API Automation Testing](#postman-api-automation-testing)
    - [Postman Framework Tutorial Directory](#postman-framework-tutorial-directory)
    - [Postman Framework Tutorial Articles](#postman-framework-tutorial-articles)
    - [Postman Framework Tutorial Reference Documents](#postman-framework-tutorial-reference-documents)
  - [Bruno API Automation Testing](#bruno-api-automation-testing)
    - [Bruno Framework Tutorial Directory](#bruno-framework-tutorial-directory)
    - [Bruno Framework Tutorial Articles](#bruno-framework-tutorial-articles)
    - [Bruno Framework Tutorial Reference Documents](#bruno-framework-tutorial-reference-documents)
    - [Recommended Reading](#recommended-reading)
<!-- markdownlint-disable MD051 -->

#### Postman Framework Tutorial Articles

- Postman API Automation Testing Tutorial: Advanced Usage - Common Command Line Options, File Upload Scenarios, and SSL Certificate Scenarios: https://naodeng.tech/zh/posts/api-automation-testing/postman-tutorial-advance-usage-common-command-line-options-and-file-upload/
- Postman API Automation Testing Tutorial: Advanced Usage - Data-Driven:https://naodeng.tech/zh/posts/api-automation-testing/postman-tutorial-advance-usage-data-driven-and-environment-data-driven/
- Postman API Automation Testing Tutorial: Advanced Usage - Common Test Scripts and Examples of Commonly Used Third-Party Packages: https://naodeng.tech/zh/posts/api-automation-testing/postman-tutorial-advance-usage-common-test-scripts-and-commonly-used-third-party-packages/
- Postman API Automation Testing Tutorial: Advanced Usage - Integration with CI/CD and GitHub Action, Allure Report: https://naodeng.tech/zh/posts/api-automation-testing/postman-tutorial-advance-usage-integration-html-report-and-allure-report-integration-github-action/
- Postman API Automation Testing Tutorial: Getting Started and Building Your Own Project from 0 to 1: https://naodeng.tech/zh/posts/api-automation-testing/postman-tutorial-getting-started-and-building-your-own-project-from-0-to-1/

#### Postman Framework Tutorial Reference Documents

- Demo Project Repository: [Link](https://github.com/Automation-Test-Starter/Postman-API-Test-Starter)
- Postman Official Documentation: [Link](https://learning.postman.com/docs/getting-started/introduction/)
- Newman Official Documentation: [Link](https://github.com/postmanlabs/newman)
- GitHub Action Documentation: [Link](https://docs.github.com/en/actions)
- Allure Documentation: [Link](https://docs.qameta.io/allure/)

### Bruno API Automation Testing

#### Bruno Framework Tutorial Directory

> The directory is not clickable, only for displaying the structure
<!-- markdownlint-disable MD051 -->
- [bruno-user-guide](#bruno-user-guide)
  - [Why Choose Bruno](#why-choose-bruno)
  - [Installing Bruno](#installing-bruno)
  - [Getting Started with the Client](#getting-started-with-the-client)
    - [Default Main API](#default-main-API)
    - [API Request Collections](#api-request-collections)
    - [API Requests](#api-requests)
    - [Writing API Request Test Scripts](#writing-api-request-test-scripts)
  - [Environment Variables](#environment-variables)
  - [API Script API Automation](#api-script-API-automation)
    - [Preconditions](#preconditions)
    - [Demo of API Automation Project](#demo-of-api-automation-project)
  - [Integration with CI](#integration-with-ci)
    - [Integration with GitHub Action](#integration-with-github-action)
  - [Migration from Postman Scripts](#migration-from-postman-scripts)
    - [API Request Collection Migration](#api-request-collection-migration)
    - [Environment Variable Migration](#environment-variable-migration)
    - [Reference for Test Script Migration](#reference-for-test-script-migration)
<!-- markdownlint-disable MD051 -->

#### Bruno Framework Tutorial Articles

- Introduction to Bruno, a Postman Replacement Tool: [https://naodeng.tech/zh/posts/api-automation-testing/introduction_of_bruno/](https://naodeng.tech/zh/posts/api-automation-testing/introduction_of_bruno/)

#### Bruno Framework Tutorial Reference Documents

- Demo Project Repository: [https://github.com/Automation-Test-Starter/Bruno-API-Test-Starter](https://github.com/Automation-Test-Starter/Bruno-API-Test-Starter)
- Bruno Documentation: [https://docs.usebruno.com/](https://docs.usebruno.com/)
- GitHub Action Documentation: [https://docs.github.com/en/actions](https://docs.github.com/en/actions)

#### Recommended Reading

- [Quick Start Series for API Automation Testing Using Postman](https://naodeng.tech/series/postman-api-automation-testing-tutorial/)
- [Quick Start Series for API Automation Testing Using Pytest](https://naodeng.tech/series/pytest-api-automation-testing-tutorial/)
- [Quick Start Series for API Automation Testing Using SuperTest](https://naodeng.tech/series/rest-assured-api-automation-testing-tutorial/)
- [Quick Start Series for API Automation Testing Using Rest Assured](https://naodeng.tech/series/supertest-api-automation-testing-tutorial/)
- [Quick Start Series for Performance Testing Using Gatling](https://naodeng.tech/series/gatling-performance-testing-tutorial/)
