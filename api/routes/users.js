import express from "express";
import { criar_usu, pegar_usu, validar_usu } from "../controllers/user.js";

const router = express.Router();

router.post('/criar', criar_usu);
router.get('/validar', validar_usu)
router.get('/', pegar_usu)

export default router;