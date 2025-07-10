import db from './index.js';

const createTasksTable = async () => {
  await db.query('DROP TABLE IF EXISTS tasks');
  await db.query(`
    CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    description TEXT NOT NULL,
    completed BOOLEAN DEFAULT FALSE
    )
 `);
  console.log('Tabla de tareas creada');
};

const createTables = async () => {
  await createTasksTable();
  console.log('Tablas creadas correctamente');
  process.exit();
};

createTables();
