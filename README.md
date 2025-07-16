# Supabase Todo List - Backend

Este es el backend de una aplicación de **Lista de Tareas** desarrollado con **Node.js**, **Express**, y **PostgreSQL**. Permite gestionar tareas (crear, consultar, actualizar, eliminar y marcar como completadas) a través de una API RESTful.

## Características

- **CRUD de tareas**: Crea, lee, actualiza y elimina tareas.
- **Validación de datos**: Utiliza [Zod](https://zod.dev/) para validar los datos recibidos.
- **Persistencia en PostgreSQL**: Las tareas se almacenan en una base de datos relacional.
- **Manejo de errores**: Respuestas claras y estructuradas para errores comunes y validaciones.
- **Modularidad**: Código organizado por módulos (routes, repository, schemas, utils).

## Estructura del Proyecto

```
Backend/
├── src/
│   ├── db/
│   │   ├── index.js
│   │   └── tables.js
│   ├── modules/
│   │   └── tasks/
│   │       ├── tasks.repository.js
│   │       ├── tasks.routes.js
│   │       ├── tasks.routes.schemas.js
│   │       ├── tasks.schemas.js
│   │       ├── addTasks.http
│   │       ├── getTasks.test.http
│   │       ├── removeTasks.test.http
│   │       └── toggleTaskCompletion.test.http
│   ├── utils/
│   │   └── errorTypes.js
│   └── index.js
├── .env
├── package.json
└── README.md
```

## Endpoints principales

- `POST /tasks`  
  Crea una nueva tarea.  
  **Body:**  
  ```json
  {
    "description": "Texto de la tarea",
    "completed": false // Opcional
  }
  ```

- `GET /tasks`  
  Obtiene la lista de tareas.

- `PATCH /tasks/:id`  
  Actualiza el estado `completed` de una tarea.  
  **Body:**  
  ```json
  {
    "completed": true
  }
  ```

- `PATCH /tasks/:id/toggle-completion`  
  Alterna el estado de completado de una tarea.

- `DELETE /tasks/:id`  
  Elimina una tarea.

## Requisitos

- Node.js >= 18
- PostgreSQL
- npm

## Instalación

1. Clona el repositorio:
   ```sh
   git clone <url-del-repo>
   cd Backend
   ```

2. Instala las dependencias:
   ```sh
   npm install
   ```

3. Configura tu archivo `.env` con los datos de la base de datos PostgreSQL:
   ```
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=tu_usuario
   DB_PASSWORD=tu_password
   DB_NAME=tu_basededatos
   ```

4. Ejecuta las migraciones/creación de tablas:
   ```sh
   npm run tables:create
   # o el script correspondiente
   ```

5. Inicia el servidor:
   ```sh
   npm run dev
   # o
   node src/index.js
   ```

6. Prueba los endpoints usando archivos `.http`, Postman o tu cliente favorito.

## Ejemplo de uso

### Crear una tarea

```http
POST http://localhost:3000/tasks
Content-Type: application/json

{
  "description": "Hacer las compras"
}
```

### Marcar tarea como completada

```http
PATCH http://localhost:3000/tasks/1
Content-Type: application/json

{
  "completed": true
}
```

## Contribuir

¡Las contribuciones son bienvenidas!  
Abre un issue o un pull request con tus mejoras o correcciones.
