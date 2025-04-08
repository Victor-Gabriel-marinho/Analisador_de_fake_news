import express from "express";
import { criar_usu, pegar_usu } from "../controllers/user.js";

const router = express.Router();

router.post('/criar', criar_usu);
router.get('/', pegar_usu)

export default router;