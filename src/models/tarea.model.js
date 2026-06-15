import { Schema, model } from "mongoose";

const TareaSchema = new Schema({
  nombreTarea: {
    type: String,
    required: [true, "El nombre de la tarea es obligatorio"],
    unique: true, // Para evitar tareas duplicadas y buscar de forma única por nombre
    trim: true,
    minlength: [3, "El nombre debe tener al menos 3 caracteres"],
    maxlength: [100, "El nombre no puede exceder los 100 caracteres"],
  },
  descripcion: {
    type: String,
    trim: true,
    maxlength: [500, "La descripción no puede exceder los 500 caracteres"],
  },
  completada: {
    type: Boolean,
    default: false,
  },
  fechaCreacion: {
    type: Date,
    default: Date.now,
  },
});

// El primer parámetro será el nombre de la colección en la base de datos (se transformará en "tareas")
export default model("Tarea", TareaSchema);
