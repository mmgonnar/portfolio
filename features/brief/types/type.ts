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
  name: string;
  email: string;
  company?: string;
  projectName: string;
  projectType: ProjectType;
  description: string;
  features: string[];
  budget: BudgetKey;
  timeline: TimelineKey;
  referenceLinks?: string;
  additionalNotes?: string;
}
