import { pool } from '../database/cancion.connection.js';

const cancionModel = {};

cancionModel.agregarCancion = async ({ titulo, artista, tono }) => {
    const query = {
        text: `INSERT INTO canciones (titulo, artista, tono) VALUES ($1, $2, $3)`,
        values: [titulo, artista, tono]
    };
    await pool.query(query);
};

cancionModel.obtenerCanciones = async () => {
    const query = {
        text: `SELECT * FROM canciones`
    };
    const { rows } = await pool.query(query);
    return rows;
};

cancionModel.editarCancion = async ({ id, titulo, artista, tono }) => {
    const query = {
        text: `UPDATE canciones SET titulo = $1, artista = $2, tono = $3 WHERE id = $4 RETURNING *`,
        values: [titulo, artista, tono, id]
    };
    const { rows } = await pool.query(query);
    return rows[0];
};

cancionModel.eliminarCancion = async (id) => {
    const query = {
        text: `DELETE FROM canciones WHERE id = $1`,
        values: [id]
    };
    const { rows } = await pool.query(query);
    return rows;
};

export default cancionModel;





