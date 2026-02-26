// @vitest-environment jsdom
// Tests for prompts detail page: getStaticPaths property test, tab switching, copy button
import { describe, it, expect, vi, beforeEach } from "vitest";
import fc from "fast-check";

// ── Shared constants (mirrors content.config.ts enums) ──────────────────────

const TESTING_TYPES = [
  "accessibility-testing",
  "ai-assisted-testing",
  "api-testing",
  "automation-testing",
  "bug-reporting",
  "functional-testing",
  "manual-testing",
  "mobile-testing",
  "performance-testing",
  "requirements-analysis",
  "security-testing",
  "test-case-reviewer",
  "test-case-writing",
  "test-reporting",
  "test-strategy",
] as const;

const LANGS = ["en", "zh-cn"] as const;
const VERSIONS = ["Standard", "ROSES", "LangGPT", "ICIO", "CRISPE", "RISE"] as const;

type TestingType = (typeof TESTING_TYPES)[number];
type Lang = (typeof LANGS)[number];
type Version = (typeof VERSIONS)[number];

// ── Simulate getStaticPaths logic ────────────────────────────────────────────

interface MockEntry {
  data: { lang: Lang; testingType: TestingType; promptVersion: Version; order: number };
  body: string;
}

function buildMockEntries(): MockEntry[] {
  const entries: MockEntry[] = [];
  let order = 1;
  for (const lang of LANGS) {
    for (const testingType of TESTING_TYPES) {
      for (const promptVersion of VERSIONS) {
        entries.push({
          data: { lang, testingType, promptVersion, order: order++ },
          body: `# ${testingType} ${promptVersion} ${lang}`,
        });
      }
    }
  }
  return entries;
}

function getStaticPaths(allPrompts: MockEntry[]) {
  const seen = new Set<string>();
  const routes: { params: { lang: string; testingType: string }; props: { entries: MockEntry[] } }[] = [];

  for (const entry of allPrompts) {
    const key = `${entry.data.lang}__${entry.data.testingType}`;
    if (!seen.has(key)) {
      seen.add(key);
      const entries = allPrompts
        .filter((p) => p.data.lang === entry.data.lang && p.data.testingType === entry.data.testingType)
        .sort((a, b) => a.data.order - b.data.order);
      routes.push({ params: { lang: entry.data.lang, testingType: entry.data.testingType }, props: { entries } });
    }
  }
  return routes;
}

// ── Property 1: Route completeness ──────────────────────────────────────────

describe("getStaticPaths — route completeness (Property 1)", () => {
  const allPrompts = buildMockEntries();
  const paths = getStaticPaths(allPrompts);

  it("generates exactly 30 routes (15 types × 2 langs)", () => {
    expect(paths).toHaveLength(30);
  });

  it("for any valid testingType × lang combo, a route exists", () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...TESTING_TYPES),
        fc.constantFrom(...LANGS),
        (testingType, lang) => {
          const found = paths.some(
            (p) => p.params.testingType === testingType && p.params.lang === lang
          );
          expect(found).toBe(true);
        }
      ),
      { numRuns: 200 }
    );
  });

  it("each route's props contain entries sorted by order", () => {
    paths.forEach(({ props }) => {
      const orders = props.entries.map((e) => e.data.order);
      for (let i = 1; i < orders.length; i++) {
        expect(orders[i]).toBeGreaterThanOrEqual(orders[i - 1]);
      }
    });
  });

  it("each route's entries all share the same lang and testingType", () => {
    paths.forEach(({ params, props }) => {
      props.entries.forEach((e) => {
        expect(e.data.lang).toBe(params.lang);
        expect(e.data.testingType).toBe(params.testingType);
      });
    });
  });
});

// ── Tab switching logic ──────────────────────────────────────────────────────

describe("tab switching logic", () => {
  function buildTabDOM(versions: string[]) {
    // Simulate the DOM structure produced by the Astro page
    const tablist = document.createElement("div");
    tablist.setAttribute("role", "tablist");

    const panels: HTMLElement[] = [];

    versions.forEach((v, i) => {
      const tab = document.createElement("button");
      tab.setAttribute("role", "tab");
      tab.setAttribute("aria-selected", i === 0 ? "true" : "false");
      tab.setAttribute("aria-controls", `tab-panel-${v}`);
      tab.setAttribute("id", `tab-${v}`);
      tab.dataset.version = v;
      tablist.appendChild(tab);

      const panel = document.createElement("div");
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute("id", `tab-panel-${v}`);
      if (i !== 0) panel.hidden = true;
      document.body.appendChild(panel);
      panels.push(panel);
    });

    document.body.appendChild(tablist);
    return { tablist, panels };
  }

  function attachTabLogic() {
    const tablist = document.querySelector('[role="tablist"]');
    if (!tablist) return;
    const tabs = Array.from(tablist.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const targetId = tab.getAttribute("aria-controls");
        if (!targetId) return;
        tabs.forEach((t) => t.setAttribute("aria-selected", "false"));
        tab.setAttribute("aria-selected", "true");
        document.querySelectorAll('[role="tabpanel"]').forEach((panel) => {
          (panel as HTMLElement).hidden = panel.id !== targetId;
        });
      });
    });
  }

  beforeEach(() => {
    document.body.innerHTML = "";
  });

  it("first tab panel is visible without JS interaction (SSG default)", () => {
    const versions = ["Standard", "ROSES", "LangGPT"];
    buildTabDOM(versions);
    const panels = document.querySelectorAll('[role="tabpanel"]');
    expect((panels[0] as HTMLElement).hidden).toBe(false);
    expect((panels[1] as HTMLElement).hidden).toBe(true);
    expect((panels[2] as HTMLElement).hidden).toBe(true);
  });

  it("clicking a non-active tab shows its panel and hides others", () => {
    const versions = ["Standard", "ROSES", "LangGPT"];
    buildTabDOM(versions);
    attachTabLogic();

    const tabs = document.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    const panels = document.querySelectorAll('[role="tabpanel"]');

    // Click second tab
    tabs[1].click();

    expect((panels[0] as HTMLElement).hidden).toBe(true);
    expect((panels[1] as HTMLElement).hidden).toBe(false);
    expect((panels[2] as HTMLElement).hidden).toBe(true);
    expect(tabs[1].getAttribute("aria-selected")).toBe("true");
    expect(tabs[0].getAttribute("aria-selected")).toBe("false");
  });

  it("clicking each tab in sequence always shows exactly one panel", () => {
    const versions = ["Standard", "ROSES", "LangGPT", "ICIO", "CRISPE", "RISE"];
    buildTabDOM(versions);
    attachTabLogic();

    const tabs = document.querySelectorAll<HTMLButtonElement>('[role="tab"]');

    tabs.forEach((tab, idx) => {
      tab.click();
      const panels = document.querySelectorAll('[role="tabpanel"]');
      let visibleCount = 0;
      panels.forEach((p) => { if (!(p as HTMLElement).hidden) visibleCount++; });
      expect(visibleCount).toBe(1);
      expect((panels[idx] as HTMLElement).hidden).toBe(false);
    });
  });
});

// ── Copy button logic ────────────────────────────────────────────────────────

describe("copy button logic", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    vi.useFakeTimers();
  });

  it("calls navigator.clipboard.writeText with the raw content", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText },
      writable: true,
      configurable: true,
    });

    // Build minimal DOM
    const tabBtn = document.createElement("button");
    tabBtn.setAttribute("role", "tab");
    tabBtn.dataset.version = "Standard";
    tabBtn.dataset.rawContent = "# My prompt content";
    document.body.appendChild(tabBtn);

    const copyBtn = document.createElement("button");
    copyBtn.className = "prompt-copy-btn";
    copyBtn.dataset.version = "Standard";
    copyBtn.dataset.copyLabel = "Copy Prompt";
    copyBtn.dataset.copiedLabel = "Copied!";
    const textEl = document.createElement("span");
    textEl.className = "prompt-copy-btn-text";
    textEl.textContent = "Copy Prompt";
    copyBtn.appendChild(textEl);
    document.body.appendChild(copyBtn);

    // Attach copy logic (mirrors the page script)
    copyBtn.addEventListener("click", () => {
      const version = copyBtn.dataset.version;
      const rawContent =
        document.querySelector<HTMLButtonElement>(`[data-version="${version}"][role="tab"]`)?.dataset.rawContent ?? "";
      const copiedLabel = copyBtn.dataset.copiedLabel ?? "Copied!";
      const copyLabel = copyBtn.dataset.copyLabel ?? "Copy";
      const span = copyBtn.querySelector(".prompt-copy-btn-text");

      navigator.clipboard.writeText(rawContent).then(() => {
        if (span) span.textContent = copiedLabel;
        copyBtn.classList.add("copied");
        setTimeout(() => {
          if (span) span.textContent = copyLabel;
          copyBtn.classList.remove("copied");
        }, 1500);
      });
    });

    copyBtn.click();
    await Promise.resolve(); // flush microtask

    expect(writeText).toHaveBeenCalledWith("# My prompt content");
  });

  it("shows confirmation state for 1500ms then reverts", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText },
      writable: true,
      configurable: true,
    });

    const tabBtn = document.createElement("button");
    tabBtn.setAttribute("role", "tab");
    tabBtn.dataset.version = "ROSES";
    tabBtn.dataset.rawContent = "prompt text";
    document.body.appendChild(tabBtn);

    const copyBtn = document.createElement("button");
    copyBtn.className = "prompt-copy-btn";
    copyBtn.dataset.version = "ROSES";
    copyBtn.dataset.copyLabel = "Copy Prompt";
    copyBtn.dataset.copiedLabel = "Copied!";
    const textEl = document.createElement("span");
    textEl.className = "prompt-copy-btn-text";
    textEl.textContent = "Copy Prompt";
    copyBtn.appendChild(textEl);
    document.body.appendChild(copyBtn);

    copyBtn.addEventListener("click", () => {
      const version = copyBtn.dataset.version;
      const rawContent =
        document.querySelector<HTMLButtonElement>(`[data-version="${version}"][role="tab"]`)?.dataset.rawContent ?? "";
      const copiedLabel = copyBtn.dataset.copiedLabel ?? "Copied!";
      const copyLabel = copyBtn.dataset.copyLabel ?? "Copy";
      const span = copyBtn.querySelector(".prompt-copy-btn-text");

      navigator.clipboard.writeText(rawContent).then(() => {
        if (span) span.textContent = copiedLabel;
        copyBtn.classList.add("copied");
        setTimeout(() => {
          if (span) span.textContent = copyLabel;
          copyBtn.classList.remove("copied");
        }, 1500);
      });
    });

    copyBtn.click();
    await Promise.resolve();

    expect(textEl.textContent).toBe("Copied!");
    expect(copyBtn.classList.contains("copied")).toBe(true);

    vi.advanceTimersByTime(1500);
    expect(textEl.textContent).toBe("Copy Prompt");
    expect(copyBtn.classList.contains("copied")).toBe(false);
  });
});
