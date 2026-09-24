export function buildMetaDescription({
  description,
  siteDescription,
  pageContext = "",
  suffix = "",
  minLength = 70,
  maxLength = 155,
}) {
  const rawDescription = String(description || siteDescription || "").trim();
  const normalizedSiteDescription = String(siteDescription || "").trim();
  const context = String(pageContext || "").trim();
  const needsContext = rawDescription.length < minLength || rawDescription === normalizedSiteDescription;
  const contextualDescription = needsContext && context
    ? `${context}: ${rawDescription} ${suffix}`.trim()
    : needsContext
      ? `${rawDescription} ${suffix}`.trim()
      : rawDescription;

  return contextualDescription.length > maxLength
    ? `${contextualDescription.slice(0, maxLength - 3).trimEnd()}…`
    : contextualDescription;
}
