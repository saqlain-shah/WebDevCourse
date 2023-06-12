import express from "express";
import {

  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotel,
} from "../controllers/hotelControllers.js";

//import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", createHotel);

//UPDATE
router.put("/:id",  updateHotel);
//DELETE
router.delete("/:id",  deleteHotel);
//GET

router.get("/:id", getHotel);
//GET ALL

router.get("/", getHotels);
// router.get("/countByCity", countByCity);
// router.get("/countByType", countByType);
 router.get("/room/:id", getHotelRooms);

export default router;




