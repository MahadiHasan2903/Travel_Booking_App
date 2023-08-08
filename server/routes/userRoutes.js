const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  logoutUser,
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUsers,
} = require("../controller/userController");

const {
  verifyToken,
  verifyAdmin,
  verifyUser,
} = require("../utils/verifyToken");

// Create a new user
router.post("/register", registerUser);

// Login user
router.post("/login", loginUser);

// Logout user
router.get("/logout", logoutUser);

// Update an existing user by ID
router.put("/users/:id", verifyUser, updateUser);

// Delete an existing user by ID
router.delete("/users/:id", verifyUser, deleteUser);

// Get a single user by ID
router.get("/users/:id", verifyUser, getSingleUser);

// Get all users
router.get("/users", verifyAdmin, getAllUsers);

module.exports = router;
