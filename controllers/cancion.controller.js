import { nanoid } from "nanoid";
import cancionModel from '../models/cancion.model.js';
import { handleError } from "../database/errors.js";

export const agregarCancion = async (req, res) => {
    const { titulo, artista, tono } = req.body;
    try {
        if (!titulo || !artista || !tono) {
            return res.status(400).json({ ok: false, msg: "campos obligatorios" });
        }

        const nuevaCancion = {
            titulo,
            artista,
            tono,
            id: nanoid()
        };

        await cancionModel.agregarCancion(nuevaCancion);
        return res.status(201).json(nuevaCancion);
    } catch (error) {
        console.log(error);
        const { code, msg } = handleError(error);
        return res.status(code).json({ ok: false, msg });
    }
};

export const obtenerCanciones = async (req, res) => {
    try {
        const canciones = await cancionModel.obtenerCanciones();
        return res.json(canciones);
    } catch (error) {
        console.log(error);
        const { code, msg } = handleError(error);
        return res.status(code).json({ ok: false, msg });
    }
};

export const editarCancion = async (req, res) => {
    const { id } = req.params;
    const { titulo, artista, tono } = req.body;
    try {
        await cancionModel.editarCancion(id, titulo, artista, tono);
        return res.json({ message: 'Canción editada' });
    } catch (error) {
        console.log(error);
        const { code, msg } = handleError(error);
        return res.status(code).json({ ok: false, msg });
    }
};

export const eliminarCancion = async (req, res) => {
    const { id } = req.params;
    try {
        await cancionModel.eliminarCancion(id);
        return res.json({ message: 'Canción eliminada' });
    } catch (error) {
        console.log(error);
        const { code, msg } = handleError(error);
        return res.status(code).json({ ok: false, msg });
    }
};
