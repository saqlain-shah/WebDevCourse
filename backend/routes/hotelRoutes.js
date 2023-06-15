import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";
import Hotel from "../models/hotelModules.js";
 import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin,createHotel);

//UPDATE
router.put("/:id",verifyAdmin, updateHotel);
//DELETE
router.delete("/:id",verifyAdmin, deleteHotel);
//GET

router.get("/:id",verifyAdmin, getHotel);
//GET ALL

router.get("/",verifyAdmin, getHotels);
router.get("/countByCity",verifyAdmin, countByCity);
router.get("/countByType",verifyAdmin, countByType);
router.get("/room/:id",verifyAdmin, getHotelRooms);

export default router;




