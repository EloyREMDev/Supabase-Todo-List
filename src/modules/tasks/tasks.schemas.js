import { z } from 'zod/v4';

export const taskSchema = z.object({
  id: z.number().optional(),
  description: z.string().min(1, 'La descripción es obligatoria.'),
  completed: z.boolean().optional(),
});