# 📋 API REST - Lista de Tareas

## 📖 Descripción

Este proyecto consiste en una API REST desarrollada con Node.js, Express y MongoDB que permite administrar una lista de tareas.

La aplicación ofrece operaciones CRUD completas para crear, consultar, actualizar y eliminar tareas almacenadas en una base de datos MongoDB.

---

## 🚀 Tecnologías utilizadas

* Node.js
* Express.js
* MongoDB
* Mongoose
* Cors
* Morgan
* Dotenv

---

## 📂 Estructura del proyecto

```bash
lista-tareas/
│
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── database/
│   └── app.js
│
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/usuario/lista-tareas.git
```

2. Ingresar al directorio del proyecto:

```bash
cd lista-tareas
```

3. Instalar dependencias:

```bash
npm install
```

4. Crear el archivo `.env`

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/lista_tareas
```

5. Ejecutar el proyecto:

```bash
npm run dev
```

o

```bash
npm start
```

---

## 🗄️ Modelo de Datos

### Tarea

```json
{
  "_id": "685f4a8c7e9c123456789abc",
  "nombreTarea": "Estudiar MongoDB",
  "descripcion": "Practicar consultas con Mongoose",
  "estado": false,
  "fechaCreacion": "2026-06-17T15:00:00.000Z"
}
```

| Campo         | Tipo     | Descripción             |
| ------------- | -------- | ----------------------- |
| _id           | ObjectId | Identificador único     |
| nombreTarea   | String   | Nombre de la tarea      |
| descripcion   | String   | Descripción de la tarea |
| estado        | Boolean  | Estado de la tarea      |
| fechaCreacion | Date     | Fecha de creación       |

---

## 📌 Endpoints

### Obtener todas las tareas

```http
GET /api/tareas
```

Respuesta:

```json
[
  {
    "_id": "685f4a8c7e9c123456789abc",
    "nombreTarea": "Estudiar MongoDB",
    "estado": false
  }
]
```

---

### Obtener una tarea por ID

```http
GET /api/tareas/:id
```

Ejemplo:

```http
GET /api/tareas/685f4a8c7e9c123456789abc
```

---

### Obtener una tarea por nombre

```http
GET /api/tareas/buscar/:nombre
```

Ejemplo:

```http
GET /api/tareas/buscar/Estudiar MongoDB
```

---

### Crear una tarea

```http
POST /api/tareas
```

Body:

```json
{
  "nombreTarea": "Realizar TP Backend",
  "descripcion": "Completar API REST con MongoDB",
  "estado": false
}
```

---

### Editar una tarea

```http
PUT /api/tareas/:id
```

Body:

```json
{
  "nombreTarea": "Realizar TP Backend Final",
  "estado": true
}
```

---

### Eliminar una tarea

```http
DELETE /api/tareas/:id
```

---

## ✅ Funcionalidades

* Crear tareas.
* Listar todas las tareas.
* Buscar una tarea por ID.
* Buscar una tarea por nombre.
* Editar tareas existentes.
* Eliminar tareas.
* Persistencia de datos con MongoDB.
* Validación de datos mediante Mongoose.

---

## 👨‍💻 Autor Almaraz Abel

Proyecto desarrollado como práctica de Backend utilizando Node.js, Express y MongoDB.
