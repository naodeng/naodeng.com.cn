---
author: "nao.deng"
title: "Gatling Performance Testing Tutorial: Getting Started"
date: "2023-10-24T17:44:53+08:00"
summary: "This article describes how to get started with the performance testing tool gatling, how to set up the environment, and how to get the official demo up and running."
tags: [
"Getting Started", "Setting Up Environment"
]
Categories: ["Performance testing", "Gatling"]
series: ["Gatling Performance Testing Tutorial"]
ShowWordCount: true
---

## Gatling Introduction

Gatling is an open source tool for performance and load testing, especially for testing web applications. It is a high-performance tool based on the Scala programming language for simulating and measuring the performance of applications under different loads.

Here are some of the key features and benefits of Gatling:

- Based on Scala programming language: Gatling's test scripts are written in Scala, which makes it a powerful programming tool that allows users to write complex test scenarios and logic.
- High Performance: Gatling is designed as a high performance load testing tool. It uses non-blocking I/O and an asynchronous programming model that is capable of simulating large numbers of concurrent users to better mimic real-world load situations.
- Easy to learn and use: Although Gatling's test scripts are written in Scala, its DSL (Domain Specific Language) is very simple and easy to learn. Even if you are not familiar with Scala, you can quickly learn how to create test scripts.
- Rich Features: Gatling provides a rich set of features, including request and response processing, data extraction, conditional assertions, performance report generation, and more. These features enable you to create complex test scenarios and perform comprehensive evaluation of application performance.
- Multi-Protocol Support: In addition to HTTP and HTTPS, Gatling supports other protocols such as WebSocket, JMS, and SMTP, making it suitable for testing a wide range of different types of applications.
- Real-time results analysis: Gatling provides real-time performance data and graphical reports during test runs to help you quickly identify performance issues.
- Open source and active community: Gatling is an open source project with an active community that constantly updates and improves the tool.
- CI/CD Integration Support: Gatling can be integrated with CI/CD tools such as Jenkins to perform performance testing in continuous integration and continuous delivery processes.

Overall, Gatling is a powerful performance testing tool for testing a wide range of application types, helping development teams identify and resolve performance issues to ensure consistent performance and scalability of applications in production environments.

## Environment setup

> Since I'm a macbook user, I'll use the macbook demo as an example in the introduction, but windows users can refer to it on their own.

### VSCode + Gradle + Scala Version

#### Preparation

- [x] Development tool: VSCode
- [x] Install Gradle version >= 6.0, I am using Gradle 8.44.
- [x] Install JDK version >= 8, I use JDK 19

#### install plugins

- [x] VSCode search for Scala (Metals) plugin for installation
- [x] VSCode search for Gradle for Java plugin for installation

#### official demo initialization & debugging

> We will use the official demo project for initialization and debugging first, and then we will introduce how to create your own project later.

- Clone the official demo project

```bash
git clone git@github.com:gatling/gatling-gradle-plugin-demo-scala.git
```

- Open the cloned official demo project with VSCode.

- Open the project's Terminal window with VSCode and execute the following command

```bash
gradle build
```

![readme-build](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-build.png)

- Run the demo in the project

```bash
gradle gatlingRun
```

- Viewing the results of a command line run

![readme-report](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-report.png)

- Click on the html report link in the command line report and open it with your browser to view the detailed report information

![readme-report1](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-report1.png)

### VSCode + Maven + Scala version

#### Preparation

- [x] Development tool: VSCode
- [x] Install Maven, I use Maven 3.9.5
- [x] JDK version >= 8, I use JDK 19

#### install plugins

- [x] VSCode search for Scala (Metals) plugins to install
- [x] VSCode search for Maven for Java plugins to install

#### Official demo initialization & debugging

> We will use the official demo project for initialization and debugging first, and then we will introduce how to create your own project.

- Clone the official demo project

```bash
git clone git@github.com:gatling/gatling-maven-plugin-demo-scala.git
```

- Use VSCode to open the cloned official demo project.

- Open the Terminal window of this project with VSCode and execute the following command to run the demo in the project

```bash
mvn gatling:test
```

- Viewing the results of a command line run

![readme-report2](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-report2.png)

- Click on the html report link in the command line report and open it with your browser to view the detailed report information

![readme-report1](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-report1.png)

### IDEA + Gradle + Scala version

This is similar to the VSCode version, so I won't repeat it here.

The differences are as follows:

- IDEA searches for Scala plugins to install
- New way to run: right click and select Engine.scala file in the project directory, select Run 'Engine' to run the demo (you need to press enter to confirm the run).

### IDEA + Maven + Scala version

This is similar to the VSCode version, so I won't repeat it here.

The differences are as follows:

- IDEA searches for Scala plugins to install
- New way to run: right-click the Engine.scala file in the project directory and select Run 'Engine' to run the demo (you need to press enter to confirm during the run).
