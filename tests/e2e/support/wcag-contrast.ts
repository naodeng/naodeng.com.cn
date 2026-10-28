export type ContrastMeasurement = {
  missing: boolean;
  selector: string;
  invalidColor?: true;
  ratio?: number;
  threshold?: number;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  backgroundColor?: string;
  text?: string;
};

/** Measure the rendered contrast for a selector inside a browser page. */
export function measureContrast(selector: string): ContrastMeasurement {
  type RGBA = { r: number; g: number; b: number; a: number };

  const parseColor = (value: string): RGBA | null => {
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    const context = canvas.getContext("2d");
    if (!context) return null;

    context.clearRect(0, 0, 1, 1);
    context.fillStyle = "rgba(1,2,3,1)";
    const before = context.fillStyle;
    context.fillStyle = value;
    const normalized = context.fillStyle;
    const source = value.trim().toLowerCase();
    if (normalized === before && source !== "rgba(1,2,3,1)" && source !== "rgb(1,2,3)") return null;

    context.fillRect(0, 0, 1, 1);
    const pixel = context.getImageData(0, 0, 1, 1).data;
    return { r: pixel[0], g: pixel[1], b: pixel[2], a: pixel[3] / 255 };
  };

  const blend = (foreground: RGBA, background: RGBA): RGBA => {
    const alpha = foreground.a + background.a * (1 - foreground.a);
    if (alpha <= 0) return { r: 255, g: 255, b: 255, a: 1 };
    return {
      r: (foreground.r * foreground.a + background.r * background.a * (1 - foreground.a)) / alpha,
      g: (foreground.g * foreground.a + background.g * background.a * (1 - foreground.a)) / alpha,
      b: (foreground.b * foreground.a + background.b * background.a * (1 - foreground.a)) / alpha,
      a: alpha,
    };
  };

  const luminance = (color: RGBA) => {
    const toLinear = (channel: number) => {
      const value = channel / 255;
      return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
    };
    return 0.2126 * toLinear(color.r) + 0.7152 * toLinear(color.g) + 0.0722 * toLinear(color.b);
  };

  const target = document.querySelector(selector) as HTMLElement | null;
  if (!target) return { missing: true, selector };

  const style = window.getComputedStyle(target);
  const foreground = parseColor(style.color);
  if (!foreground) return { missing: false, invalidColor: true, selector, color: style.color };

  let background: RGBA = { r: 255, g: 255, b: 255, a: 1 };
  const ancestors: Element[] = [];
  let node: Element | null = target;
  while (node) {
    ancestors.unshift(node);
    node = node.parentElement;
  }
  for (const ancestor of ancestors) {
    const color = parseColor(window.getComputedStyle(ancestor).backgroundColor);
    if (color && color.a > 0) background = blend(color, background);
  }

  let opacity = 1;
  let ancestor: Element | null = target;
  while (ancestor) {
    opacity *= Number.parseFloat(window.getComputedStyle(ancestor).opacity);
    ancestor = ancestor.parentElement;
  }

  const ink = blend({ ...foreground, a: foreground.a * opacity }, background);
  const foregroundLuminance = luminance(ink);
  const backgroundLuminance = luminance(background);
  const ratio = (Math.max(foregroundLuminance, backgroundLuminance) + 0.05) /
    (Math.min(foregroundLuminance, backgroundLuminance) + 0.05);
  const fontSize = Number.parseFloat(style.fontSize);
  const fontWeight = Number.parseInt(style.fontWeight, 10) || 400;
  const threshold = fontSize >= 24 || (fontSize >= 18.66 && fontWeight >= 700) ? 3 : 4.5;

  return {
    missing: false,
    selector,
    ratio,
    threshold,
    fontSize,
    fontWeight,
    color: style.color,
    backgroundColor: style.backgroundColor,
    text: target.textContent?.trim().slice(0, 80) ?? "",
  };
}
