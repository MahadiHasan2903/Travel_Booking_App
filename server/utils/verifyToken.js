const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  console.log("req.user:", req.user);
  console.log("req.params.tourId:", req.params.tourId);
  const token = req.cookies.accessToken;
  console.log("Token received in verifyToken:", token);
  console.log("Token:", token);

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "You are not authorized",
    });
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded User:", user);
    req.user = user;
    next();
  } catch (error) {
    console.error("Token Verification Error:", error);
    res.status(401).json({
      success: false,
      message: "Token is Invalid",
    });
  }
};

const verifyUser = (req, res, next) => {
  console.log("req.user:", req.user);
  console.log("req.params.tourId:", req.params.tourId);

  if (
    req.user &&
    (req.user.id === req.params.tourId || req.user.role === "admin")
  ) {
    next();
  } else {
    return res.status(401).json({
      success: false,
      message: "You're not authenticated",
    });
  }
};

const verifyAdmin = (req, res, next) => {
  if (req.user.role === "admin") {
    next();
  } else {
    return res.status(401).json({
      success: false,
      message: "You're not authorized",
    });
  }
};

module.exports = { verifyToken, verifyAdmin, verifyUser };
