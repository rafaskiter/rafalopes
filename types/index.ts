/**
 * Tipos compartilhados do portfólio.
 * A camada de conteúdo (content/) é totalmente tipada por estes contratos,
 * o que facilita migrar para um CMS no futuro.
 */

/** Categorias usadas nos thumbnails flutuantes do hero e nos cards. */
export type Category =
  | "Branding"
  | "Identidade Visual"
  | "UX Design"
  | "UI Design"
  | "Websites"
  | "Games";

/** Tipo de estudo de caso — define como a página interna é narrada. */
export type CaseType =
  | "ux"
  | "branding"
  | "website"
  | "game"
  | "design-system"
  | "produto";

export type Ratio = "1/1" | "4/3" | "16/9" | "3/4" | "21/9";

/** Especificação de um placeholder gerado por seed (sem imagens reais). */
export interface Placeholder {
  /** Semente determinística — mesma seed gera sempre o mesmo visual. */
  seed: string;
  label?: string;
  ratio?: Ratio;
  category?: Category;
}

export interface CaseMetric {
  value: string;
  label: string;
}

export interface CaseListItem {
  title: string;
  description?: string;
}

export type CaseBlockLayout =
  | "text"
  | "wide-media"
  | "media-grid"
  | "split"
  | "quote"
  | "metrics"
  | "list";

/** Bloco genérico de conteúdo de um case — renderizado pelos componentes de case. */
export interface CaseBlock {
  id: string;
  eyebrow?: string;
  heading?: string;
  body?: string[];
  layout: CaseBlockLayout;
  media?: Placeholder[];
  metrics?: CaseMetric[];
  list?: CaseListItem[];
  quote?: { text: string; author?: string };
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: Category;
  type: CaseType;
  year: number;
  /** Resumo curto exibido no card. */
  summary: string;
  /** Subtítulo do hero da página de case. */
  intro: string;
  role: string[];
  services: string[];
  cover: Placeholder;
  blocks: CaseBlock[];
  /** Cor da marca usada no card grande da home (fundo). */
  color: string;
  /** Card grande na home (destaque visual). */
  featured?: boolean;
}

/** Item leve usado na galeria flutuante do hero (pode haver mais que 6). */
export interface GalleryItem {
  seed: string;
  title: string;
  category: Category;
  year: number;
  description: string;
}

export interface TimelineEntry {
  period: string;
  role: string;
  org: string;
  description: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}
