import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, devices } from "@playwright/test";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const externalBaseURL = process.env.PLAYWRIGHT_BASE_URL;

export default defineConfig({
  testDir: "e2e/specs",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: process.env.CI
    ? [["github"], ["html", { open: "never", outputFolder: "e2e/playwright-report" }]]
    : [["html", { outputFolder: "e2e/playwright-report" }]],
  use: {
    baseURL: externalBaseURL || "http://localhost:4321",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        // Local fallback when Playwright's bundled chromium is missing
        ...(process.env.PLAYWRIGHT_CHANNEL
          ? { channel: process.env.PLAYWRIGHT_CHANNEL as "chrome" | "chrome-beta" | "msedge" | "msedge-beta" | "msedge-dev" }
          : {}),
      },
    },
  ],
  webServer: externalBaseURL
    ? undefined
    : process.env.CI
    ? {
        command: "env -u NO_COLOR npm run preview",
        url: "http://localhost:4321",
        cwd: projectRoot,
        reuseExistingServer: false,
        timeout: 60_000,
      }
    : {
        command: "env -u NO_COLOR npm run build && env -u NO_COLOR npm run preview",
        url: "http://localhost:4321",
        cwd: projectRoot,
        reuseExistingServer: true,
        timeout: 120_000,
      },
});
