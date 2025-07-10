import db from '../../db/index.js';
import { ErrorWithStatus } from '../../utils/errorTypes.js';

const getAll = async () => {
  const response = await db.query('SELECT * FROM tasks');
  return response.rows;
};

const addOne = async (payload) => {
  const response = await db.query(
    `
    INSERT INTO tasks (description)
    VALUES ($1) RETURNING *
    `,
    [payload.description],
  );
  return response.rows[0];
};

const deleteOneById = async (id) => {
  const response = await db.query(
    `
    DELETE FROM tasks
    WHERE id = $1
    RETURNING *
    `,
    [id],
  );
  if (response.rowCount === 0) {
    throw new ErrorWithStatus(404, 'La tarea no fue encontrada');
  }
  return response.rows[0];
};

const completedById = async (id, completed) => {
  const response = await db.query(
    `
    UPDATE tasks
    SET completed = $1
    WHERE id = $2
    RETURNING *
    `,
    [completed, id],
  );
  if (response.rowCount === 0) {
    throw new ErrorWithStatus(404, 'La tarea no fue encontrada');
  }
  return response.rows[0];
};

const tasksRepository = { getAll, addOne, deleteOneById, completedById };

export default tasksRepository;