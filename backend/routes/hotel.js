import express from "express";
import {
  updateHotel,
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
} from "../controllers/hotelController.js";
import Hotel from "../models/hotel.js";
//import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/", createHotel);

//UPDATE
router.put("/:id", updateHotel);
//DELETE
router.delete("/:id", deleteHotel);
//GET

router.get("/find/:id", getHotel);
//GET ALL

router.get("/", getHotels);
//router.get("/countByCity", countByCity);
//router.get("/countByType", countByType);
//router.get("/room/:id", getHotelRooms);

export default router;
