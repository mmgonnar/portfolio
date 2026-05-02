import { z } from 'zod';

export const stepOneSchema = z.object({
  name: z.string().min(2, { message: 'Name is too short' }).max(50),
  email: z.string().email({ message: 'Invalid email address' }),
  company: z.string().optional(),
});

// Tipo inferido para TypeScript
export type StepOneData = z.infer<typeof stepOneSchema>;
