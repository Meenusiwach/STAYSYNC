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
import Hotel from "../models/Hotel.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE a new Hotel
router.post("/", verifyAdmin, createHotel);

//UPDATE a HOTEL
router.put("/:id", verifyAdmin, updateHotel);
//DELETE A HOTEL
router.delete("/:id", verifyAdmin, deleteHotel);
//GET A HOTEL DETAILS

router.get("/find/:id", getHotel);
//GET ALL HOTELS DETAILS

router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;
