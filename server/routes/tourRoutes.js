const express = require("express");
const router = express.Router();

const {
  createTour,
  deleteTour,
  updateTour,
  getAllTour,
  getSingleTour,
  getTourBySearch,
  getFeaturedTour,
  getTourCount,
} = require("../controller/tourController");
const {
  verifyToken,
  verifyAdmin,
  verifyUser,
} = require("../utils/verifyToken");

//Create New Tour
router.post("/", verifyAdmin, createTour);

//Update Tour
router.put("/:id", verifyAdmin, updateTour);

//Delete Tour
router.delete("/:id", verifyAdmin, deleteTour);

//Get Single Tour
router.get("/:id", getSingleTour);

//Get All Tour
router.get("/", getAllTour);

//Get Tour by search
router.get("/search/getTourBySearch", getTourBySearch);

//Get Featured Tour
router.get("/search/getFeaturedTour", getFeaturedTour);

//Get  Tour Count
router.get("/search/getTourCount", getTourCount);

module.exports = router;
