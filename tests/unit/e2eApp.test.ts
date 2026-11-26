import { describe, expect, it } from "vitest";
import { getE2EApp } from "../e2e/support/app";

describe("E2E app target", () => {
  it("uses the explicit E2E target when configured", () => {
    expect(getE2EApp({ E2E_BASE_URL: "https://preview.example" })).toEqual({ url: "https://preview.example" });
  });

  it("prefers the explicit E2E target over the legacy variable", () => {
    expect(getE2EApp({
      E2E_BASE_URL: "https://preview.example",
      PLAYWRIGHT_BASE_URL: "https://staging.example",
    })).toEqual({ url: "https://preview.example" });
  });

  it("accepts the legacy Playwright target variable", () => {
    expect(getE2EApp({ PLAYWRIGHT_BASE_URL: "https://staging.example" })).toEqual({ url: "https://staging.example" });
  });

  it("starts the local Astro preview when no external target is configured", () => {
    expect(getE2EApp({})).toEqual({
      url: "http://127.0.0.1:4321",
      command: {
        executable: "npm",
        args: ["--prefix", "..", "run", "preview", "--", "--host", "127.0.0.1"],
        reuseExisting: true,
        log: ".e2e/logs/astro-preview.log",
      },
    });
  });
});
