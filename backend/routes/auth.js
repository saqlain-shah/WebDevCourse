import express from "express";
import { signUp, login } from "../controllers/auth.js";

const router = express.Router();
router.post("/sign-up", signUp);
router.post("/sign-in", login);

export default router;
