const PROJECTS_LIST = [
  {
    url: "https://github.com/naodeng/awesome-qa-prompt",
    name: { en: "Awesome QA Prompt", "zh-cn": "Awesome QA Prompt" },
    techStack: {
      en: "Markdown, VitePress, AI Prompts",
      "zh-cn": "Markdown、VitePress、AI 提示词"
    },
    description: {
      en: "A curated AI prompt collection for QA and software testing, covering the full testing lifecycle with 15+ test types, 3 workflows, and 225+ documents. Bilingual (EN/CN), supports ROSES, LangGPT, ICIO, CRISPE, RISE frameworks.",
      "zh-cn": "专业的 QA AI 提示词集合，涵盖从需求分析到测试报告的完整测试生命周期，提供 15 个测试类型模块、3 个工作流程和 225+ 文档。中英文双语，支持 ROSES、LangGPT、ICIO、CRISPE、RISE 等框架。"
    }
  },
  {
    url: "https://github.com/naodeng/QA-Glossary-Wiki",
    name: { en: "QA Glossary Wiki", "zh-cn": "QA 测试术语 Wiki" },
    techStack: {
      en: "Markdown, Wiki",
      "zh-cn": "Markdown、Wiki"
    },
    description: {
      en: "A Chinese version of QA and software testing glossary wiki for personal learning. Covers terms from A/B Testing, Acceptance Testing, API Testing, to Agile Testing and more.",
      "zh-cn": "中文版 QA 与软件测试术语 Wiki，用于个人学习。涵盖 A/B 测试、验收测试、API 测试、敏捷测试等术语。"
    }
  },
  {
    url: "https://github.com/Automation-Test-Starter/Bruno-API-Test-Starter",
    name: { en: "Bruno API Test Starter", "zh-cn": "Bruno API 测试入门" },
    techStack: {
      en: "Bruno, JavaScript, GitHub Actions",
      "zh-cn": "Bruno、JavaScript、GitHub Actions"
    },
    description: {
      en: "API test starter using Bruno (open source, MIT). Supports Postman/Insomnia collection import, Assert & Tests scripts, environment variables, and CI/CD integration (e.g. GitHub Actions).",
      "zh-cn": "基于 Bruno 的 API 测试入门项目（开源、MIT）。支持 Postman/Insomnia 集合导入、Assert 与 Tests 脚本、环境变量及 CI/CD 集成（如 GitHub Actions）。"
    }
  },
  {
    url: "https://github.com/Automation-Test-Starter/RestAssured-API-Test-Starter",
    name: { en: "RestAssured API Test Starter", "zh-cn": "RestAssured API 测试入门" },
    techStack: {
      en: "Java, RestAssured, Maven/JUnit",
      "zh-cn": "Java、RestAssured、Maven/JUnit"
    },
    description: {
      en: "API test starter with RestAssured for Java. Structured project for REST API automation with Maven and JUnit.",
      "zh-cn": "基于 Java RestAssured 的 API 测试入门项目，使用 Maven 与 JUnit 构建 REST API 自动化测试。"
    }
  },
  {
    url: "https://github.com/Automation-Test-Starter/SuperTest-API-Test-Starter",
    name: { en: "SuperTest API Test Starter", "zh-cn": "SuperTest API 测试入门" },
    techStack: {
      en: "Node.js, SuperTest, Mocha/Chai",
      "zh-cn": "Node.js、SuperTest、Mocha/Chai"
    },
    description: {
      en: "API test starter with SuperTest for Node.js. HTTP assertion library for testing REST APIs with Mocha/Chai.",
      "zh-cn": "基于 Node.js SuperTest 的 API 测试入门项目，使用 Mocha/Chai 进行 REST API 断言测试。"
    }
  },
  {
    url: "https://github.com/Automation-Test-Starter/Postman-API-Test-Starter",
    name: { en: "Postman API Test Starter", "zh-cn": "Postman API 测试入门" },
    techStack: {
      en: "Postman, JavaScript, Newman",
      "zh-cn": "Postman、JavaScript、Newman"
    },
    description: {
      en: "API test starter with Postman. Collection-based API tests with scripts and Newman for CLI/CI.",
      "zh-cn": "基于 Postman 的 API 测试入门项目，支持集合与测试脚本，可使用 Newman 在命令行或 CI 中运行。"
    }
  },
  {
    url: "https://github.com/Automation-Test-Starter/Pytest-API-Test-Starter",
    name: { en: "Pytest API Test Starter", "zh-cn": "Pytest API 测试入门" },
    techStack: {
      en: "Python, Pytest, requests",
      "zh-cn": "Python、Pytest、requests"
    },
    description: {
      en: "API test starter with Pytest for Python. REST API automation using pytest and requests.",
      "zh-cn": "基于 Python Pytest 的 API 测试入门项目，使用 pytest 与 requests 进行 REST API 自动化测试。"
    }
  },
  {
    url: "https://github.com/Automation-Test-Starter/Gatling-Performance-Test-starter",
    name: { en: "Gatling Performance Test Starter", "zh-cn": "Gatling 性能测试入门" },
    techStack: {
      en: "Scala, Gatling",
      "zh-cn": "Scala、Gatling"
    },
    description: {
      en: "Performance test starter with Gatling. Load and stress testing with Scala DSL.",
      "zh-cn": "基于 Gatling 的性能测试入门项目，使用 Scala DSL 进行负载与压力测试。"
    }
  },
  {
    url: "https://github.com/Automation-Test-Starter/K6-Performance-Test-starter",
    name: { en: "K6 Performance Test Starter", "zh-cn": "K6 性能测试入门" },
    techStack: {
      en: "K6, JavaScript",
      "zh-cn": "K6、JavaScript"
    },
    description: {
      en: "Performance test starter with K6. Modern load testing with JavaScript/ES6 scripts.",
      "zh-cn": "基于 K6 的性能测试入门项目，使用 JavaScript/ES6 编写负载测试脚本。"
    }
  },
  {
    url: "https://github.com/Automation-Test-Starter/Airtest-Mobile-UI-Automation-Testing-Starter",
    name: { en: "Airtest Mobile UI Automation Starter", "zh-cn": "Airtest 移动端 UI 自动化入门" },
    techStack: {
      en: "Airtest, Python, Android/iOS",
      "zh-cn": "Airtest、Python、Android/iOS"
    },
    description: {
      en: "Mobile UI automation starter with Airtest. Cross-platform (Android/iOS) UI testing with Python.",
      "zh-cn": "基于 Airtest 的移动端 UI 自动化入门项目，使用 Python 进行 Android/iOS 跨平台 UI 测试。"
    }
  },
  {
    url: "https://github.com/Automation-Test-Starter/Cypress-Cucumber-BDD-UI-Automation-Testing-Starter",
    name: { en: "Cypress Cucumber BDD UI Automation Starter", "zh-cn": "Cypress Cucumber BDD UI 自动化入门" },
    techStack: {
      en: "Cypress, Cucumber, BDD, JavaScript",
      "zh-cn": "Cypress、Cucumber、BDD、JavaScript"
    },
    description: {
      en: "UI automation starter with Cypress and Cucumber for BDD. Write Gherkin scenarios and run them with Cypress.",
      "zh-cn": "基于 Cypress 与 Cucumber 的 BDD UI 自动化入门项目，使用 Gherkin 场景与 Cypress 执行。"
    }
  }
];

export { PROJECTS_LIST as P };
