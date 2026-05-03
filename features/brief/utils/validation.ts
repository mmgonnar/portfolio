import { z } from 'zod';

export const stepOneSchema = z.object({
  name: z.string().min(2, { message: 'form.errors.error_name_short' }).max(100),
  email: z.string().email({ message: 'form.errors.error_email_invalid' }),
  company: z.string().optional(),
});

export type StepOneData = z.infer<typeof stepOneSchema>;

export const stepTwoSchema = (t: any) =>
  z.object({
    projectType: z.string().min(1, { message: t('forms.errors.error_project') }),
    description: z.string().min(10, { message: t('forms.errors.error_message_short') }),
    features: z.string().min(5, { message: t('forms.errors.error_goals') }),
  });

export type StepTwoData = z.infer<typeof stepTwoSchema>;
