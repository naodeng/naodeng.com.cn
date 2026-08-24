import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const REPO_ROOT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);

const redirects = readFileSync(
  path.join(REPO_ROOT, "public", "_redirects"),
  "utf8",
)
  .split("\n")
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith("#"));

const astroConfig = readFileSync(
  path.join(REPO_ROOT, "astro.config.mjs"),
  "utf8",
);

describe("RSS redirects", () => {
  it.each(["en", "zh-cn"])(
    "does not redirect the canonical %s RSS path back to its non-canonical path",
    (lang) => {
      expect(redirects).not.toContain(
        `/${lang}/rss.xml/ /${lang}/rss.xml 301`,
      );
      expect(astroConfig).not.toContain(
        `"/${lang}/rss.xml/": "/${lang}/rss.xml"`,
      );
    },
  );
});
