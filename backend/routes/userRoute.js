import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
  Requests,
} from "../controllers/userController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//UPDATE
router.post("/:id",verifyAdmin, Requests);
router.put("/:id",verifyAdmin, updateUser);
router.put("/",verifyAdmin, updateUser);
//DELETE
router.delete("/:id",verifyAdmin, deleteUser);
//GET
router.get("/:id",verifyAdmin, getUser);
//GET ALL
router.get("/",verifyAdmin,getUsers);
export default router;
