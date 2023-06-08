import express from "express";
import { signUp, signIn } from "../controllers/auth.js";

const router = express.Router();
router.post("/sign-up", signUp);
router.post("/sign-in", signIn);

export default router;
