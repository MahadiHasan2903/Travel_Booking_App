const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const tour = require("./routes/tourRoutes");
const user = require("./routes/userRoutes");
const review = require("./routes/reviewRoutes");
const booking = require("./routes/bookingRoutes");

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "https://travel-world-application.netlify.app",
    // origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(morgan("dev"));

//Routes
app.use("/api/v1/tours", tour);
app.use("/api/v1/users", user);
app.use("/api/v1/reviews", review);
app.use("/api/v1/bookings", booking);

// Server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(
    `Server is running in ${process.env.NODE_MODE} Mode on port ${port}`.bgCyan
      .white
  );
});
