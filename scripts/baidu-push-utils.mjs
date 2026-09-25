export const BAIDU_PUSH_ENDPOINT = "http://data.zz.baidu.com/urls";
export const BAIDU_MAX_URLS_PER_REQUEST = 2_000;
export const BAIDU_PUSH_TIMEOUT_MS = 15_000;

function messageFromBody(body, fallback) {
  const message = String(body || "").trim();
  return message || fallback;
}

function validOptionalArray(value) {
  return value === undefined || Array.isArray(value);
}

export function buildBaiduPushRequest({ endpoint, site, token, urls }) {
  const requestUrl = new URL(endpoint);
  requestUrl.searchParams.set("site", site);
  requestUrl.searchParams.set("token", token);
  return {
    url: requestUrl.toString(),
    init: {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: urls.join("\n"),
    },
  };
}

export function classifyBaiduPushResponse(status, body) {
  if (status < 200 || status >= 300) {
    return {
      kind: "failure",
      status,
      message: messageFromBody(body, `Baidu API returned HTTP ${status}`),
    };
  }

  let payload;
  try {
    payload = JSON.parse(body);
  } catch {
    return { kind: "failure", status, message: "Baidu response is not valid JSON" };
  }

  if (!Number.isInteger(payload?.success) || !Number.isInteger(payload?.remain)) {
    return {
      kind: "failure",
      status,
      message: "Baidu response is missing integer success/remain fields",
    };
  }
  if (!validOptionalArray(payload.not_same_site) || !validOptionalArray(payload.not_valid)) {
    return {
      kind: "failure",
      status,
      message: "Baidu response has invalid rejection list fields",
    };
  }

  const notSameSiteCount = payload.not_same_site?.length ?? 0;
  const notValidCount = payload.not_valid?.length ?? 0;
  return {
    kind: notSameSiteCount > 0 || notValidCount > 0 ? "partial" : "success",
    status,
    success: payload.success,
    remain: payload.remain,
    notSameSiteCount,
    notValidCount,
  };
}

function requestFailureMessage(error) {
  const errorName = error instanceof Error ? error.name : "";
  return errorName === "AbortError" || errorName === "TimeoutError"
    ? "Baidu request timed out"
    : "Baidu request failed";
}

export async function submitBaiduUrls(
  urls,
  {
    endpoint = BAIDU_PUSH_ENDPOINT,
    site,
    token,
    fetchImpl = fetch,
    timeoutMs = BAIDU_PUSH_TIMEOUT_MS,
  },
) {
  if (urls.length === 0) {
    return { failedBatches: 0, acceptedUrls: 0, partialBatches: 0, remaining: null, messages: [] };
  }
  if (!token?.trim()) throw new Error("BAIDU_PUSH_TOKEN is required when URLs are provided");

  let failedBatches = 0;
  let acceptedUrls = 0;
  let partialBatches = 0;
  let remaining = null;
  const messages = [];

  for (let offset = 0; offset < urls.length; offset += BAIDU_MAX_URLS_PER_REQUEST) {
    const batch = urls.slice(offset, offset + BAIDU_MAX_URLS_PER_REQUEST);
    const request = buildBaiduPushRequest({ endpoint, site, token, urls: batch });
    try {
      const response = await fetchImpl(request.url, {
        ...request.init,
        signal: AbortSignal.timeout(timeoutMs),
      });
      const result = classifyBaiduPushResponse(response.status, await response.text());
      if (result.kind === "failure") {
        failedBatches += 1;
        messages.push(`HTTP ${result.status}: Baidu response rejected`);
        continue;
      }
      acceptedUrls += result.success;
      remaining = result.remain;
      if (result.kind === "partial") {
        partialBatches += 1;
        messages.push(
          `partial response: ${result.notSameSiteCount} not_same_site, ${result.notValidCount} not_valid`,
        );
      }
    } catch (error) {
      failedBatches += 1;
      messages.push(requestFailureMessage(error));
    }
  }

  return { failedBatches, acceptedUrls, partialBatches, remaining, messages };
}
