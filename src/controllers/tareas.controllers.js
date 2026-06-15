import Tarea from '../models/tarea.model.js';


// 1. Agregar una tarea (POST)
export const crearTarea = async (req, res) => {
    try {
        const { nombreTarea, descripcion } = req.body;

        // Validar si ya existe una tarea con ese nombre
        const tareaExiste = await Tarea.findOne({ nombreTarea });
        if (tareaExiste) {
            return res.status(400).json({ msg: 'Ya existe una tarea con ese nombre' });
        }

        const nuevaTarea = new Tarea({ nombreTarea, descripcion });
        await nuevaTarea.save();

        res.status(201).json({
            msg: 'Tarea creada con éxito',
            tarea: nuevaTarea
        });
    } catch (error) {
        res.status(500).json({ msg: 'Error al crear la tarea', error: error.message });
    }
};

// 2. Listar todas las tareas (GET)
export const obtenerTareas = async (req, res) => {
    try {
        const tareas = await Tarea.find();
        res.status(200).json(tareas);
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener las tareas', error: error.message });
    }
};

// 3. Obtener una tarea por ID o por Nombre único (GET)
export const obtenerTarea = async (req, res) => {
    try {
        const { id } = req.params; // El parámetro en la ruta se llama :id, pero puede ser el nombre
        let tarea;

        // Verificamos si el parámetro tiene el formato de un ID de MongoDB (24 caracteres hexadecimales)
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            tarea = await Tarea.findById(id);
        } else {
            // Si no es un ID válido, buscamos por coincidencia exacta del nombre
            tarea = await Tarea.findOne({ nombreTarea: id });
        }

        if (!tarea) {
            return res.status(404).json({ msg: 'Tarea no encontrada' });
        }

        res.status(200).json(tarea);
    } catch (error) {
        res.status(500).json({ msg: 'Error al buscar la tarea', error: error.message });
    }
};

// 4. Editar una tarea (PUT)
export const editarTarea = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        // Buscamos y actualizamos por ID
        const tareaActualizada = await Tarea.findByIdAndUpdate(id, data, { 
            new: true,          // Devuelve el objeto ya modificado
            runValidators: true // Aplica las validaciones del modelo al editar
        });

        if (!tareaActualizada) {
            return res.status(404).json({ msg: 'No se encontró la tarea para actualizar' });
        }

        res.status(200).json({
            msg: 'Tarea actualizada con éxito',
            tarea: tareaActualizada
        });
    } catch (error) {
        res.status(400).json({ msg: 'Error al actualizar la tarea', error: error.message });
    }
};

// 5. Borrar una tarea (DELETE)
export const borrarTarea = async (req, res) => {
    try {
        const { id } = req.params;
        const tareaEliminada = await Tarea.findByIdAndDelete(id);

        if (!tareaEliminada) {
            return res.status(404).json({ msg: 'No se encontró la tarea para eliminar' });
        }

        res.status(200).json({
            msg: 'Tarea eliminada correctamente',
            tareaEliminada
        });
    } catch (error) {
        res.status(500).json({ msg: 'Error al eliminar la tarea', error: error.message });
    }
};