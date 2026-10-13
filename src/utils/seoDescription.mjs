/**
 * @param {{
 *   description?: string,
 *   siteDescription?: string,
 *   pageContext?: string,
 *   suffix?: string,
 *   minLength?: number,
 *   maxLength?: number | null,
 *   appendContext?: boolean,
 * }} options
 */
export function buildMetaDescription({
  description,
  siteDescription,
  pageContext = "",
  suffix = "",
  minLength = 70,
  maxLength = null,
  appendContext = false,
}) {
  const rawDescription = String(description || siteDescription || "").trim();
  const normalizedSiteDescription = String(siteDescription || "").trim();
  const context = String(pageContext || "").trim();
  const hasDescription = Boolean(String(description || "").trim());
  const isDefaultDescription = !hasDescription || rawDescription === normalizedSiteDescription;
  const needsContext = rawDescription === normalizedSiteDescription ||
    (isDefaultDescription && rawDescription.length < minLength) ||
    (appendContext && rawDescription.length < minLength);
  const contextualDescription = needsContext && context
    ? `${context}: ${rawDescription} ${suffix}`.trim()
    : needsContext
      ? `${rawDescription} ${suffix}`.trim()
      : rawDescription;

  return maxLength !== null && contextualDescription.length > maxLength
    ? `${contextualDescription.slice(0, maxLength - 3).trimEnd()}…`
    : contextualDescription;
}

/**
 * @param {{
 *   description: string,
 *   input: string,
 *   output: string,
 *   lang: "en" | "zh-cn",
 * }} options
 */
export function buildQASkillMetaDescription({ description, input, output, lang }) {
  const outputDetail = String(output || "").trim();
  const inputDetail = String(input || "").trim();
  const outputPart = outputDetail
    ? lang === "zh-cn" ? `输出：${outputDetail}。` : `Output: ${outputDetail}.`
    : "";
  const inputPart = inputDetail
    ? lang === "zh-cn" ? `输入：${inputDetail}。` : `Input: ${inputDetail}.`
    : "";
  const build = (parts) => buildMetaDescription({
    description,
    suffix: parts.filter(Boolean).join(lang === "zh-cn" ? "" : " "),
    minLength: 70,
    maxLength: null,
    appendContext: true,
  });

  const withOutput = build([outputPart]);
  if (withOutput.length >= 70 || !inputPart) return withOutput;

  const followUp = lang === "zh-cn"
    ? "供团队评审与后续跟进。"
    : "For team review and follow-up.";
  const withOutputAndFollowUp = build([outputPart, followUp]);
  if (withOutputAndFollowUp.length >= 70) return withOutputAndFollowUp;

  const withInput = build([outputPart, inputPart]);
  if (withInput.length >= 70) return withInput;

  return build([outputPart, inputPart, followUp]);
}
