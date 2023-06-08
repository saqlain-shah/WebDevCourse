import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
  Requests,
} from "../controllers/userControllers.js";

const router = express.Router();
//UPDATE
router.post("/:id", Requests);
router.put("/:id", updateUser);
//router.put("/", updateUser);
//DELETE
router.delete("/:id", deleteUser);
//GET
router.get("/:id", getUser);
//GET ALL
router.get("/", getUsers);
export default router;