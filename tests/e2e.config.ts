import type { E2EConfig } from "e2e";
import { web } from "@e2e-dev/web";
import { getE2EApp } from "./e2e/support/app";

export default {
  tests: "e2e/**/*.e2e.ts",
  timeout: 60_000,
  assertionTimeout: 10_000,
  retries: process.env.CI ? 1 : 0,
  ...(process.env.CI ? { workers: 2, reporters: ["list", "junit"] } : {}),
  targets: [
    {
      name: "chromium",
      engine: web({ browser: "chromium" }),
      app: getE2EApp(process.env),
    },
  ],
} satisfies E2EConfig;
