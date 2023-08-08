const Booking = require("../model/Booking");

// Create new booking
const createBooking = async (req, res) => {
  try {
    const bookingData = req.body;

    const { userId, userEmail } = req.body;

    // Create a new booking document
    const newBooking = new Booking({
      ...bookingData,
      userId: userId,
      userEmail: userEmail,
    });

    const savedBooking = await newBooking.save();

    res.status(201).json({
      success: true,
      message: "Booking successfully created",
      data: savedBooking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get single booking
const getBooking = async (req, res) => {
  try {
    const book = await Booking.findById(req.params.id);
    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Successful",
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all bookings
const getAllBooking = async (req, res) => {
  try {
    const books = await Booking.find();
    res.status(200).json({
      success: true,
      message: "Successful",
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { createBooking, getBooking, getAllBooking };
