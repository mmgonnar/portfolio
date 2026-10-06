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

export const stepTwoSchema = z
  .object({
    projectName: z.string().min(2, { message: 'form.errors.error_name_short' }),
    projectDescription: z.string().min(50, { message: 'form.errors.error_message_short' }),
    hasExistingSite: z.boolean(),
    existingSiteUrl: z.string().optional().or(z.literal('')),
  })
  .refine(
    data => {
      if (data.hasExistingSite) {
        return (
          data.existingSiteUrl &&
          data.existingSiteUrl.length > 0 &&
          /^https?:\/\/.+\..+/.test(data.hasExistingSite ? data.existingSiteUrl : '')
        );
      }
      return true;
    },
    {
      message: 'form.errors.error_invalid_url',
      path: ['existingSiteUrl'],
    },
  );

export type StepTwoData = z.infer<typeof stepTwoSchema>;

// export const stepThreeSchema = z.object({
//   targetAudience: z.string().min(20, { message: 'form.errors.error_message_short_20' }),
//   competitors: z.string().refine(val => val.length === 0 || val.length >= 20, {
//     message: 'form.error.error_message_short_20',
//   }),
// });

// export type StepThreeSchema = z.infer<typeof stepThreeSchema>;

// El paso de audiencia es opcional: vacio pasa, pero una respuesta a medias
// no, porque veinte caracteres es lo minimo que dice algo.
const optionalLongText = z.string().refine(val => val.length === 0 || val.length >= 20, {
  message: 'form.errors.error_message_short_20',
});

export const stepFiveSchema = z.object({
  targetAudience: optionalLongText,
  competitors: optionalLongText,
});

export type StepFiveSchema = z.infer<typeof stepFiveSchema>;

export const stepSixSchema = z.object({
  visualStyle: z.string().min(1).optional(),
  visualReferences: z.string().refine(
    val => {
      if (!val) return false;
      const urls = val
        .split(',')
        .map(u => u.trim())
        .filter(u => u);
      return urls.length > 0 && urls.every(u => u.startsWith('http'));
    },
    { message: 'form.errors.error_invalid_url' },
  ),
});

export type StepSixSchema = z.infer<typeof stepSixSchema>;
