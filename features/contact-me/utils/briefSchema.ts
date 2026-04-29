import { z } from 'zod';
import { BUDGET_RANGES, FEATURES, PROJECT_TYPES, TIMELINES, VISUAL_STYLES } from '../types/type';

export const step1Schema = z.object({
  name: z.string().min(2, { message: 'brief.errors.name_short' }),
  email: z.string().email({ message: 'brief.errors.email_invalid' }),
  phone: z.string().optional(),
  company: z.string().optional(),
  role: z.string().optional(),
});

export const step2Schema = z
  .object({
    projectType: z.enum(PROJECT_TYPES, { message: 'brief.errors.project_type_required' }),
    projectName: z.string().min(2, { message: 'brief.errors.project_name_short' }),
    projectDescription: z.string().min(20, { message: 'brief.errors.description_short' }),
    hasExistingSite: z.boolean().default(false),
    existingSiteUrl: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.hasExistingSite && !data.existingSiteUrl) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['existingSiteUrl'],
        message: 'brief.errors.url_required',
      });
    }

    if (data.hasExistingSite && data.existingSiteUrl) {
      try {
        new URL(data.existingSiteUrl);
      } catch {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['existingSiteUrl'],
          message: 'brief.errors.url_invalid',
        });
      }
    }
  });
export const step3Schema = z.object({
  features: z.array(z.enum(FEATURES)).min(1, { message: 'brief.errors.features_required' }),
  featuresDetail: z.string().optional(),
});

export const step4Schema = z.object({
  targetAudience: z.string().min(10, { message: 'brief.errors.audience_short' }),
  competitors: z.string().optional(),
  visualStyle: z.enum(VISUAL_STYLES, { message: 'brief.errors.style_required' }),
  visualReferences: z.string().optional(),
  brandColors: z.boolean().default(false),
  brandAssetsReady: z.boolean().default(false),
});

export const step5Schema = z.object({
  budget: z.enum(BUDGET_RANGES, { message: 'brief.errors.budget_required' }),
  timeline: z.enum(TIMELINES, { message: 'brief.errors.timeline_required' }),
  flexibleBudget: z.boolean().default(false),
  additionalNotes: z.string().optional(),
});

export const step6Schema = z.object({
  files: z.array(z.instanceof(File)).optional(),
});

// ─── Schema maestro ─────────
export const briefSchema = step1Schema
  .merge(step2Schema)
  .merge(step3Schema)
  .merge(step4Schema)
  .merge(step5Schema)
  .extend({
    files: z.array(z.string()).optional(),
    submittedAt: z.string().datetime().optional(),
    locale: z.string().default('es'),
  });

export type BriefFormData = z.infer<typeof briefSchema>;
export type Step1Data = z.infer<typeof step1Schema>;
export type Step2Data = z.infer<typeof step2Schema>;
export type Step3Data = z.infer<typeof step3Schema>;
export type Step4Data = z.infer<typeof step4Schema>;
export type Step5Data = z.infer<typeof step5Schema>;
export type Step6Data = z.infer<typeof step6Schema>;

export type ProjectType = (typeof PROJECT_TYPES)[number];
export type BudgetRange = (typeof BUDGET_RANGES)[number];
export type Timeline = (typeof TIMELINES)[number];
export type Feature = (typeof FEATURES)[number];
export type VisualStyle = (typeof VISUAL_STYLES)[number];
