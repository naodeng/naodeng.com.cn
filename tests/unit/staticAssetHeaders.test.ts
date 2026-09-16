import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const REPO_ROOT = path.resolve(process.cwd(), "..");
const headers = readFileSync(path.join(REPO_ROOT, "public", "_headers"), "utf8");

describe("static asset cache headers", () => {
  it("caches hashed Astro assets and versioned article images immutably", () => {
    expect(headers).toContain(
      "/_astro/*\n  Cache-Control: public, max-age=31536000, immutable",
    );
    expect(headers).toContain(
      "/images/*\n  Cache-Control: public, max-age=31536000, immutable",
    );
  });

  it("uses a short cache for unversioned public brand assets", () => {
    expect(headers).toContain(
      "/default.jpg\n  Cache-Control: public, max-age=86400",
    );
    expect(headers).toContain(
      "/favicon.svg\n  Cache-Control: public, max-age=86400",
    );
    expect(headers).toContain(
      "/brand/*\n  Cache-Control: public, max-age=86400",
    );
  });
});
