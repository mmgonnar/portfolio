import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, { message: 'form.errors.error_name_short' }),
  email: z.string().email({ message: 'form.errors.error_email_invalid' }),
  message: z.string().min(10, { message: 'form.errors.error_message_short' }),
  phone_extension: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
