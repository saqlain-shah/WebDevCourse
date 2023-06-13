import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/:id", verifyAdmin, createRoom);

//UPDATE
router.put("/:id",verifyAdmin, updateRoomAvailability);
router.put("/:id", verifyAdmin, updateRoom);
//DELETE
router.delete("/:id", verifyAdmin, deleteRoom);
//GET

router.get("/:id",verifyAdmin, getRoom);
//GET ALL

router.get("/",verifyAdmin,getRooms);

export default router;



