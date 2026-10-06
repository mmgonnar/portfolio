export type ProjectType =
  | 'website'
  | 'web_app'
  | 'landing'
  | 'redesign'
  | 'dashboard'
  | 'other'
  | '';

export type FeatureKey =
  | 'auth'
  | 'admin_dashboard'
  | 'forms_emails'
  | 'database'
  | 'integrations'
  | 'seo'
  | 'multi_language'
  | 'deployment';

/**
 * 'ready' y 'brand_kit' saltan el paso de estilo: el cliente ya trae diseño o
 * marca. 'none' lo muestra, porque es el unico caso donde hay que preguntar
 * que estetica busca.
 */
export type DesignStatus = '' | 'ready' | 'brand_kit' | 'none';

export type BudgetKey = 'r1' | 'r2' | 'r3' | 'r4' | '';

export type TimelineKey = 'asap' | 'one_month' | 'two_three_months' | 'flexible' | '';

export interface BriefData {
  // Contacto
  name: string;
  email: string;
  phone?: string;
  company?: string;

  // Tipo y detalles
  projectType: ProjectType;
  projectName: string;
  projectDescription: string;
  hasExistingSite: boolean;
  existingSiteUrl?: string;

  // Funcionalidades
  features: string[];
  featuresDetail?: string;

  // Audiencia, opcional
  targetAudience: string;
  competitors?: string;

  // Diseño y marca
  designStatus: DesignStatus;
  designLink?: string;
  wantsDesignQuote: boolean;
  brandColors: string;
  brandAssetsReady: boolean;

  // Estilo, solo cuando designStatus lo pide
  visualStyle: string;
  visualReferences?: string;

  // Presupuesto y tiempos
  budget: BudgetKey;
  timeline: TimelineKey;
  flexibleBudget: boolean;
  additionalNotes?: string;

  // Metadata
  locale: string;
}
