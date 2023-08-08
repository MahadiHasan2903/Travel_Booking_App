const Review = require("../model/Review");
const Tour = require("../model/Tour");

const createReview = async (req, res) => {
  const tourId = req.params.tourId;

  try {
    const reviewData = {
      ...req.body,
      date: new Date(),
    };

    const savedReview = await Review.create(reviewData);

    await Tour.findByIdAndUpdate(
      tourId,
      { $push: { reviews: savedReview._id } },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Review Submitted",
      data: savedReview,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error submitting review",
    });
  }
};

module.exports = { createReview };
