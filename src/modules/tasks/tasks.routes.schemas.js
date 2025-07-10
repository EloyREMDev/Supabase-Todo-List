import { z } from 'zod/v4';
import { taskSchema } from './tasks.schemas.js';

const taskIdSchema = z
  .string()
  .transform((val) => Number(val))
  .refine((val) => !isNaN(val), { message: 'El id tiene que ser un numero' });

export const createTaskRouteSchema = {
  params: z.object({}),
  body: taskSchema.omit({ id: true }),
  queries: z.object({}),
};

export const completedTaskRouteSchema = {
  params: z.object({ id: taskIdSchema }),
  body: z.object({
    completed: z.boolean(),
  }),
  queries: z.object({}),
};

export const deleteTaskRouteSchema = {
  params: z.object({ id: taskIdSchema }),
  body: z.object({}),
  queries: z.object({}),
};