export type ProjectType =
  | 'website'
  | 'webapp'
  | 'wordpress'
  | 'landing'
  | 'redesign'
  | 'other'
  | '';

export interface BriefData {
  name: string;
  email: string;
  company?: string;
  projectName: string;
  projectType: ProjectType;
  description: string;
  features: string[];
  budget: string;
  timeline: string;
  referenceLinks?: string;
  additionalNotes?: string;
}
