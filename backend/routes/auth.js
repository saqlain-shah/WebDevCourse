import express from "express";
import { SignIn, signUp } from "../controllers/auth.js";

const router = express.Router();
router.post("/sign-up", signUp);
router.post("/sign-in", SignIn);

export default router;