import express from "express";
import { criar_usu, get_news, validar_usu } from "../controllers/user.js";

const router = express.Router();

router.post('/criar', criar_usu);
router.get('/validar', validar_usu)
router.get('/noticias', get_news)

export default router;