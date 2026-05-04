import { z } from 'zod';

export const stepOneSchema = z.object({
  name: z.string().min(2, { message: 'form.errors.error_name_short' }).max(100),
  email: z.string().email({ message: 'form.errors.error_email_invalid' }),
  company: z.string().min(2, { message: 'form.errors.error_name_short' }),
  phone: z
    .string()
    .regex(/^\d+$/, { message: 'form.errors.error_phone_numbers_only' })
    .min(10, { message: 'form.errors.error_phone_too_short' })
    .optional()
    .or(z.literal('')),
});

export type StepOneData = z.infer<typeof stepOneSchema>;

export const stepTwoSchema = (t: any) =>
  z.object({
    projectType: z.string().min(1, { message: t('forms.errors.error_project') }),
    projectDescription: z.string().min(10, { message: t('forms.errors.error_message_short') }),
    features: z.string().min(5, { message: t('forms.errors.error_goals') }),
  });

export type StepTwoData = z.infer<typeof stepTwoSchema>;

export interface BriefData {
  // Paso 1 — Contacto
  name: string;
  email: string;
  phone?: string;
  company?: string;

  // Paso 2 — Proyecto
  projectType: string;
  projectName: string;
  projectDescription: string;
  hasExistingSite: boolean;
  existingSiteUrl?: string;

  // Paso 3 — Funcionalidades
  features: string[];
  featuresDetail?: string;

  // Paso 4 — Estilo y Audiencia
  targetAudience: string;
  competitors?: string;
  visualStyle: string;
  visualReferences?: string;
  brandColors: boolean;
  brandAssetsReady: boolean;

  // Paso 5 — Presupuesto y Tiempos
  budget: string;
  timeline: string;
  flexibleBudget: boolean;
  additionalNotes?: string;

  // Metadata
  locale: string;
}
