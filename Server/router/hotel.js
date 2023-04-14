const express = require("express");

const router = express.Router();

const hotelController = require("../controller/hotel");

router.get("/hotel", hotelController.getHotel);

module.exports = router;
