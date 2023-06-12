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
// import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/",createHotel);

//UPDATE
// router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", updateHotel);
//DELETE
router.delete("/:id", deleteHotel);
//GET

router.get("/:id", getHotel);
//GET ALL

router.get("/", getHotels);
// router.get("/")

export default router;



