const Tour = require("../model/Tour");

//create new tour
const createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      success: true,
      message: "Tour Successfully Created",
      data: newTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//Update Tour
const updateTour = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    if (!updatedTour) {
      return res.status(404).json({
        success: false,
        message: "Tour not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Tour Successfully Updated",
      data: updatedTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//Delete Tour
const deleteTour = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedTour = await Tour.findByIdAndDelete(id);

    if (!deletedTour) {
      return res.status(404).json({
        success: false,
        message: "Tour not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Tour Successfully Deleted",
      data: deletedTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//Get Single Tour
const getSingleTour = async (req, res) => {
  const id = req.params.id;

  try {
    const tour = await Tour.findById(id);

    if (!tour) {
      return res.status(404).json({
        success: false,
        message: "Tour not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Tour Found",
      data: tour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Tour
const getAllTour = async (req, res) => {
  const ITEMS_PER_PAGE = 8;
  const page = parseInt(req.query.page) || 1;

  try {
    const totalToursCount = await Tour.countDocuments();
    const totalPages = Math.ceil(totalToursCount / ITEMS_PER_PAGE);

    const tours = await Tour.find({})
      .populate("reviews")
      .skip((page - 1) * ITEMS_PER_PAGE)
      .limit(ITEMS_PER_PAGE);

    res.status(200).json({
      success: true,
      message: "All Tours",
      count: tours.length,
      data: tours,
      pagination: {
        currentPage: page,
        totalPages,
        totalTours: totalToursCount,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//Get Tour by search

const getTourBySearch = async (req, res) => {
  // Extract the query parameters from the request
  const { city, distance, maxGroupSize } = req.query;

  try {
    // Prepare the query object to filter tours based on provided search criteria
    const query = {};

    // If the 'city' parameter is provided, search for tours with matching city (case-insensitive)
    if (city) {
      query.city = new RegExp(city, "i");
    }

    // If the 'distance' parameter is provided, search for tours with distance greater than or equal to the specified value
    if (distance) {
      query.distance = { $gte: parseInt(distance) };
    }

    // If the 'maxGroupSize' parameter is provided, search for tours with max group size greater than or equal to the specified value
    if (maxGroupSize) {
      query.maxGroupSize = { $gte: parseInt(maxGroupSize) };
    }

    // Execute the database query with the constructed 'query' object
    const tours = await Tour.find(query).populate("reviews");

    // Return the search results in the response
    res.status(200).json({
      success: true,
      message: "Tour Found",
      data: tours,
    });
  } catch (error) {
    // Handle any errors that occurred during the search
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//Get Featured Tour
const getFeaturedTour = async (req, res) => {
  try {
    // Find tours in the database and limit the result to 8 tours
    const tours = await Tour.find({}).populate("reviews").limit(8);

    res.status(200).json({
      success: true,
      message: "Featured Tours",
      data: tours,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//Get Tour Counts
const getTourCount = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();
    res.status(200).json({
      success: true,
      data: tourCount,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  createTour,
  deleteTour,
  updateTour,
  getAllTour,
  getSingleTour,
  getTourBySearch,
  getFeaturedTour,
  getTourCount,
};
