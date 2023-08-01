import express from "express";
const router = express.Router()

import { createNota, verNotas } from '../controllers/noteController.js'



router.get('/', verNotas)
router.post('/crear', createNota)
// router.get('/:id',noteController.traerNota)
// router.put('/:id', noteController.actualizarNota)
// router.delete('/:id',noteController.eliminarNota)


export default router;
 




