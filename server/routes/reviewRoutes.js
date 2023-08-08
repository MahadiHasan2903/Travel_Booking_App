const express = require("express");
const router = express.Router();
const { verifyUser, verifyToken } = require("../utils/verifyToken");

const { createReview } = require("../controller/reviewController");

router.post("/:tourId", createReview);

module.exports = router;
