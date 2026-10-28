import type { E2EConfig } from "e2e";
import { web } from "@e2e-dev/web";

const externalBaseUrl = process.env.E2E_BASE_URL || process.env.PLAYWRIGHT_BASE_URL;
const app = externalBaseUrl
  ? { url: externalBaseUrl }
  : {
      url: "http://127.0.0.1:4321",
      command: {
        executable: "npm",
        args: ["--prefix", "..", "run", "preview", "--", "--host", "127.0.0.1"],
        reuseExisting: true,
        log: ".e2e/logs/astro-preview.log",
      },
    };

export default {
  tests: "e2e-next/**/*.e2e.ts",
  timeout: 60_000,
  assertionTimeout: 10_000,
  retries: process.env.CI ? 1 : 0,
  ...(process.env.CI ? { workers: 2, reporters: ["list", "junit"] } : {}),
  targets: [
    {
      name: "chromium",
      engine: web({ browser: "chromium" }),
      app,
    },
  ],
} satisfies E2EConfig;
