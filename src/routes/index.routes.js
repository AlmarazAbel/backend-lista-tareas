import { Router } from "express";
// Importa tus funciones de controlador
import {
  crearTarea,
  obtenerTareas,
  obtenerTarea,
  editarTarea,
  borrarTarea,
} from "../controllers/tareas.controllers.js";

const router = Router();

// Definición de endpoints
router.post("/tareas", crearTarea);
router.get("/tareas", obtenerTareas);
router.get("/tareas/:id", obtenerTarea);
router.put("/tareas/:id", editarTarea);
router.delete("/tareas/:id", borrarTarea);

export default router;
