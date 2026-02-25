/**
 * Guild (测试自动化指南) 配置文件
 * 定义测试类型、框架和学习路径
 */

export interface Framework {
  id: string;
  name: string;
  language: string;
  icon?: string;
  description: string;
  githubDemo?: string;
  officialDocs?: string;
  color?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

export interface TestType {
  id: string;
  title: string;
  description: string;
  icon?: string;
  frameworks: Framework[];
}

export interface GuildConfig {
  testTypes: TestType[];
}

// 中文配置
export const guildConfigZhCn: GuildConfig = {
  testTypes: [
    {
      id: 'api-testing',
      title: '接口自动化测试',
      description: '学习如何使用各种框架进行 API 自动化测试',
      icon: '🔌',
      frameworks: [
        {
          id: 'postman',
          name: 'Postman + Newman',
          language: 'JavaScript',
          description: '最流行的 API 测试工具，支持可视化测试和命令行执行',
          githubDemo: 'https://github.com/Automation-Test-Starter/Postman-API-Test-Starter',
          officialDocs: 'https://learning.postman.com/',
          color: '#FF6C37',
          icon: 'https://cdn.worldvectorlogo.com/logos/postman.svg',
        },
        {
          id: 'pytest',
          name: 'Pytest + Requests',
          language: 'Python',
          description: 'Python 生态最流行的测试框架，结合 Requests 进行 API 测试',
          githubDemo: 'https://github.com/Automation-Test-Starter/Pytest-API-Test-Starter',
          officialDocs: 'https://docs.pytest.org/',
          color: '#0A9EDC',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Pytest_logo.svg',
        },
        {
          id: 'rest-assured',
          name: 'Rest Assured',
          language: 'Java',
          description: 'Java 领域最强大的 REST API 测试框架',
          githubDemo: 'https://github.com/Automation-Test-Starter/RestAssured-API-Test-Starter',
          officialDocs: 'https://rest-assured.io/',
          color: '#007396',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        },
        {
          id: 'supertest',
          name: 'SuperTest',
          language: 'JavaScript/TypeScript',
          description: '基于 Node.js 的 HTTP 断言库，适合测试 Express/Koa 应用',
          githubDemo: 'https://github.com/Automation-Test-Starter/SuperTest-API-Test-Starter',
          officialDocs: 'https://github.com/ladjs/supertest',
          color: '#68A063',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        },
        {
          id: 'bruno',
          name: 'Bruno',
          language: 'JavaScript',
          description: '开源的 API 客户端，支持离线使用和 Git 友好',
          githubDemo: 'https://github.com/Automation-Test-Starter/Bruno-API-Test-Starter',
          officialDocs: 'https://www.usebruno.com/',
          color: '#F59E0B',
          icon: 'https://raw.githubusercontent.com/usebruno/bruno/main/assets/images/logo-transparent.png',
        },
      ],
    },
    {
      id: 'ui-testing',
      title: 'UI 自动化测试',
      description: '学习如何进行 Web UI 自动化测试',
      icon: '🖥️',
      frameworks: [
        {
          id: 'playwright',
          name: 'Playwright',
          language: 'JavaScript/TypeScript/Python/Java/.NET',
          description: '微软出品的现代化 Web 测试框架，支持多浏览器',
          githubDemo: 'https://github.com/naodeng/playwright-demo',
          officialDocs: 'https://playwright.dev/',
          color: '#2EAD33',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg',
        },
        {
          id: 'cypress',
          name: 'Cypress',
          language: 'JavaScript/TypeScript',
          description: '开发者友好的端到端测试框架',
          githubDemo: 'https://github.com/naodeng/cypress-demo',
          officialDocs: 'https://www.cypress.io/',
          color: '#17202C',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg',
        },
      ],
    },
    {
      id: 'performance-testing',
      title: '性能测试',
      description: '学习如何进行性能测试和压力测试',
      icon: '⚡',
      frameworks: [
        {
          id: 'k6',
          name: 'K6',
          language: 'JavaScript',
          description: '现代化的负载测试工具，开发者友好',
          githubDemo: 'https://github.com/Automation-Test-Starter/K6-Performance-Test-starter',
          officialDocs: 'https://k6.io/docs/',
          color: '#7D64FF',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/k6/k6-original.svg',
        },
        {
          id: 'gatling',
          name: 'Gatling',
          language: 'Scala/Java',
          description: '强大的性能测试工具，支持高并发场景',
          githubDemo: 'https://github.com/Automation-Test-Starter/Gatling-Performance-Test-starter',
          officialDocs: 'https://gatling.io/docs/',
          color: '#FF9E2A',
          icon: 'https://cdn.prod.website-files.com/685a8fe4ddca049f26333871/685d6a0e417481e14f3eb1f6_Gatling.webp',
        },
      ],
    },
  ],
};

// 英文配置
export const guildConfigEn: GuildConfig = {
  testTypes: [
    {
      id: 'api-testing',
      title: 'API Automation Testing',
      description: 'Learn how to perform API automation testing with various frameworks',
      icon: '🔌',
      frameworks: [
        {
          id: 'postman',
          name: 'Postman + Newman',
          language: 'JavaScript',
          description: 'Most popular API testing tool with visual interface and CLI support',
          githubDemo: 'https://github.com/Automation-Test-Starter/Postman-API-Test-Starter',
          officialDocs: 'https://learning.postman.com/',
          color: '#FF6C37',
          icon: 'https://cdn.worldvectorlogo.com/logos/postman.svg',
        },
        {
          id: 'pytest',
          name: 'Pytest + Requests',
          language: 'Python',
          description: 'Most popular testing framework in Python ecosystem for API testing',
          githubDemo: 'https://github.com/Automation-Test-Starter/Pytest-API-Test-Starter',
          officialDocs: 'https://docs.pytest.org/',
          color: '#0A9EDC',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Pytest_logo.svg',
        },
        {
          id: 'rest-assured',
          name: 'Rest Assured',
          language: 'Java',
          description: 'Most powerful REST API testing framework for Java',
          githubDemo: 'https://github.com/Automation-Test-Starter/RestAssured-API-Test-Starter',
          officialDocs: 'https://rest-assured.io/',
          color: '#007396',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        },
        {
          id: 'supertest',
          name: 'SuperTest',
          language: 'JavaScript/TypeScript',
          description: 'HTTP assertion library for Node.js, perfect for Express/Koa apps',
          githubDemo: 'https://github.com/Automation-Test-Starter/SuperTest-API-Test-Starter',
          officialDocs: 'https://github.com/ladjs/supertest',
          color: '#68A063',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        },
        {
          id: 'bruno',
          name: 'Bruno',
          language: 'JavaScript',
          description: 'Open-source API client with offline support and Git-friendly',
          githubDemo: 'https://github.com/Automation-Test-Starter/Bruno-API-Test-Starter',
          officialDocs: 'https://www.usebruno.com/',
          color: '#F59E0B',
          icon: 'https://raw.githubusercontent.com/usebruno/bruno/main/assets/images/logo-transparent.png',
        },
      ],
    },
    {
      id: 'ui-testing',
      title: 'UI Automation Testing',
      description: 'Learn how to perform Web UI automation testing',
      icon: '🖥️',
      frameworks: [
        {
          id: 'playwright',
          name: 'Playwright',
          language: 'JavaScript/TypeScript/Python/Java/.NET',
          description: 'Modern web testing framework by Microsoft with multi-browser support',
          githubDemo: 'https://github.com/naodeng/playwright-demo',
          officialDocs: 'https://playwright.dev/',
          color: '#2EAD33',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg',
        },
        {
          id: 'cypress',
          name: 'Cypress',
          language: 'JavaScript/TypeScript',
          description: 'Developer-friendly end-to-end testing framework',
          githubDemo: 'https://github.com/naodeng/cypress-demo',
          officialDocs: 'https://www.cypress.io/',
          color: '#17202C',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg',
        },
      ],
    },
    {
      id: 'performance-testing',
      title: 'Performance Testing',
      description: 'Learn how to perform performance and load testing',
      icon: '⚡',
      frameworks: [
        {
          id: 'k6',
          name: 'K6',
          language: 'JavaScript',
          description: 'Modern load testing tool for developers',
          githubDemo: 'https://github.com/Automation-Test-Starter/K6-Performance-Test-starter',
          officialDocs: 'https://k6.io/docs/',
          color: '#7D64FF',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/k6/k6-original.svg',
        },
        {
          id: 'gatling',
          name: 'Gatling',
          language: 'Scala/Java',
          description: 'Powerful performance testing tool for high concurrency scenarios',
          githubDemo: 'https://github.com/Automation-Test-Starter/Gatling-Performance-Test-starter',
          officialDocs: 'https://gatling.io/docs/',
          color: '#FF9E2A',
          icon: 'https://cdn.prod.website-files.com/685a8fe4ddca049f26333871/685d6a0e417481e14f3eb1f6_Gatling.webp',
        },
      ],
    },
  ],
};

// 根据语言获取配置
export function getGuildConfig(locale: string): GuildConfig {
  return locale === 'zh-cn' ? guildConfigZhCn : guildConfigEn;
}

// 学习阶段配置
export const learningStages = {
  'zh-cn': {
    'getting-started': '入门',
    'basic': '基础',
    'advanced': '进阶',
    'ci-cd': 'CI/CD',
    'best-practices': '最佳实践',
  },
  'en': {
    'getting-started': 'Getting Started',
    'basic': 'Basic',
    'advanced': 'Advanced',
    'ci-cd': 'CI/CD',
    'best-practices': 'Best Practices',
  },
};

// 难度级别配置
export const difficultyLevels = {
  'zh-cn': {
    'beginner': '初级',
    'intermediate': '中级',
    'advanced': '高级',
  },
  'en': {
    'beginner': 'Beginner',
    'intermediate': 'Intermediate',
    'advanced': 'Advanced',
  },
};
