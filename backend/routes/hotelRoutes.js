import express from "express";
import {

  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotel,
} from "../controllers/hotelControllers.js";
import { verifyAdmin } from "../utils/verifyToken.js";

//import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/",verifyAdmin, createHotel);

//UPDATE
router.put("/:id",verifyAdmin,  updateHotel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET

router.get("/:id",verifyAdmin, getHotel);
//GET ALL

router.get("/", getHotels);
// router.get("/countByCity", countByCity);
// router.get("/countByType", countByType);
 router.get("/room/:id", getHotelRooms);

export default router;




