const express = require("express");
const router = express.Router();
const { verifyUser, verifyAdmin } = require("../utils/verifyToken");

const {
  createBooking,
  getBooking,
  getAllBooking,
} = require("../controller/bookingController");

router.post("/", createBooking);
router.get("/:id", verifyUser, getBooking);
router.get("/", verifyAdmin, getAllBooking);

module.exports = router;
