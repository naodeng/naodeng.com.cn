interface E2EEnvironment {
  E2E_BASE_URL?: string;
  PLAYWRIGHT_BASE_URL?: string;
}

export function getE2EApp(environment: E2EEnvironment) {
  const externalBaseUrl = environment.E2E_BASE_URL || environment.PLAYWRIGHT_BASE_URL;
  if (externalBaseUrl) return { url: externalBaseUrl };

  return {
    url: "http://127.0.0.1:4321",
    command: {
      executable: "npm",
      args: ["--prefix", "..", "run", "preview", "--", "--host", "127.0.0.1"],
      reuseExisting: true,
      log: ".e2e/logs/astro-preview.log",
    },
  };
}
