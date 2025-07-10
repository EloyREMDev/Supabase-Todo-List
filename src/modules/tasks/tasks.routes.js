import express from 'express';
import tasksRepository from './tasks.repository.js';
import {
  createTaskRouteSchema,
  deleteTaskRouteSchema,
  completedTaskRouteSchema,
} from './tasks.routes.schemas.js';

const tasksRouter = express.Router();

// Obtener todas las tareas
tasksRouter.get('/', async (req, res) => {
  const tasks = await tasksRepository.getAll();
  res.json(tasks);
});

// Crear una nueva tarea
tasksRouter.post('/', async (req, res) => {
  const body = createTaskRouteSchema.body.parse(req.body);
  const newTask = await tasksRepository.addOne(body);
  res.json(newTask);
});

// Eliminar una tarea
tasksRouter.delete('/:id', async (req, res) => {
  const params = deleteTaskRouteSchema.params.parse(req.params);
  const taskDeleted = await tasksRepository.deleteOneById(params.id);
  res.json(taskDeleted);
});

// Marcar/desmarcar una tarea como completada
tasksRouter.patch('/:id', async (req, res) => {
  const params = completedTaskRouteSchema.params.parse(req.params);
  const body = completedTaskRouteSchema.body.parse(req.body);
  const taskCompleted = await tasksRepository.completedById(params.id, body.completed);
  res.json(taskCompleted);
});

export default tasksRouter;