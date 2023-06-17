import express from "express";
import { booking, bookingList, bookingSearch, checkOut } from "../controllers/bookingsC.js";
import { verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

//Check In
router.post("/", booking);

// //Booking List
router.get("/list",  bookingList);

// //Search Booking By Id
 router.get("search/:id",  bookingSearch);

// //Check Out
router.delete("/checkout/:id",  checkOut);

export default router;


