export type ProjectType =
  | 'website'
  | 'webapp'
  | 'wordpress'
  | 'landing'
  | 'redesign'
  | 'other'
  | '';

export type BudgetKey = 'r1' | 'r2' | 'r3' | 'r4' | 'r5' | '';

export type TimelineKey = 'asap' | 'one_month' | 'two_three_months' | 'flexible' | '';

export interface BriefData {
  // Paso 1
  name: string;
  email: string;
  phone?: string;
  company?: string;

  // Paso 2
  projectType: ProjectType;
  projectName: string;
  projectDescription: string; // Asegúrate de que no diga 'description'
  hasExistingSite: boolean;
  existingSiteUrl?: string;

  // Paso 3
  features: string[];
  featuresDetail?: string;

  // Paso 4
  targetAudience: string;
  competitors?: string;
  visualStyle: string;
  visualReferences?: string;
  brandColors: string;
  brandAssetsReady: boolean;

  // Paso 5
  budget: string;
  timeline: string;
  flexibleBudget: boolean;
  additionalNotes?: string;

  // Metadata
  locale: string;
}
