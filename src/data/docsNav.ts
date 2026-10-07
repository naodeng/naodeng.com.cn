/** 百科、Guild 和周刊共享的侧栏导航分组。 */
export interface DocsNavSection {
  title?: string;
  items: { label: string; href: string }[];
}
