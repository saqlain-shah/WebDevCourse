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
} from "../controllers/hotelC.js";
 import Hotel from "../models/hotelM.js";
// import hotelM from "../models/hotelM.js";

import {verifyAdmin} from "../utils/verifyToken.js"
//import {error} from '../utils/err.js';

const router = express.Router();

//CREATE
router.post("/",  createHotel);

//UPDATE
router.put("/:id",  updateHotel);
//DELETE
router.delete("/:id",  deleteHotel);
//GET

router.get("/find/:id", getHotel);
//GET ALL

router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;




