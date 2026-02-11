# E2E Test Directory

中文说明：[README.md](./README.md)

```
e2e/
├── playwright.config.ts   # Playwright config (testDir, webServer, baseURL, etc.)
├── package.json          # Standalone deps (@playwright/test)
├── specs/                # Test specs; all *.spec.ts live here
│   ├── page-accessibility.spec.ts
│   ├── links.spec.ts
│   ├── layout.spec.ts
│   └── navigation.spec.ts
└── support/              # Shared code (constants, helpers, fixtures)
    └── constants.ts
```

- **specs/** — Test cases only; files must be named `*.spec.ts`.
- **support/** — Shared modules used by specs; not run as tests.

**Run tests:** From the `e2e` directory run `npm test` or `npx playwright test`.
