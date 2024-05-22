import { Router } from "express";
import { agregarCancion, obtenerCanciones, editarCancion, eliminarCancion } from '../controllers/cancion.controller.js';

const router = Router()

router.post('/', agregarCancion);
router.get('/', obtenerCanciones);
router.put('/:id', editarCancion);
router.delete('/:id', eliminarCancion);

export default router;


