# E2E 测试目录说明

English: [README_EN.md](./README_EN.md)

```
e2e/
├── playwright.config.ts   # Playwright 配置（testDir、webServer、baseURL 等）
├── package.json           # 独立依赖（@playwright/test）
├── specs/                 # 用例目录，所有 *.spec.ts 放于此
│   ├── page-accessibility.spec.ts
│   ├── links.spec.ts
│   ├── layout.spec.ts
│   └── navigation.spec.ts
└── support/               # 支撑代码（常量、工具、fixtures 等）
    └── constants.ts
```

- **specs/**：仅放置测试用例，命名 `*.spec.ts`。
- **support/**：被用例引用的公共模块，不直接作为用例执行。

运行：在 `e2e` 目录下执行 `npm test` 或 `npx playwright test`。
