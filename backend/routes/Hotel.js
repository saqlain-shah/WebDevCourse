import express from "express";
import {
    // countByCity,
    // countByHotel,
  createHotel,
  deleteHotel,
  updateHotel,
  getHotel,
  getHotels,
} from "../controllers/hotel.js";
import hotel from"../models/hotel.js";
 import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/",verifyAdmin,createHotel);

//UPDATE
// router.put("/availability/:id", updateRoomAvailability);
router.put("/:id",verifyAdmin, updateHotel);
//DELETE
router.delete("/:id",verifyAdmin, deleteHotel);
//GET

router.get("/:id",verifyAdmin, getHotel);
//GET ALL

router.get("/",verifyAdmin, getHotels);
// router.get("/")

export default router;



