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

// action:
// import axios from "axios";
// import { server } from "../../server";

// export const getFeaturedToursRequest = () => ({
//   type: "getFeaturedToursRequest",
// });

// export const getFeaturedToursSuccess = (data) => ({
//   type: "getFeaturedToursSuccess",
//   payload: data,
// });

// export const getFeaturedToursFailure = (error) => ({
//   type: "getFeaturedToursFailure",
//   payload: error,
// });

// export const getFeaturedTours = () => async (dispatch) => {
//   try {
//     dispatch(getFeaturedToursRequest());

//     const { data } = await axios.get(`${server}/tours/search/getFeaturedTour`);

//     dispatch(getFeaturedToursSuccess(data));
//   } catch (error) {
//     dispatch(getFeaturedToursFailure(error.message));
//   }
// };

// reducer:
// import { createReducer } from "@reduxjs/toolkit";

// const initialState = {
//   data: null,
//   error: null,
//   loading: true,
// };

// const featuredToursReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase("getFeaturedToursRequest", (state) => {
//       state.loading = true;
//     })
//     .addCase("getFeaturedToursSuccess", (state, action) => {
//       state.loading = false;
//       state.data = action.payload;
//       state.error = null;
//     })
//     .addCase("getFeaturedToursFailure", (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     });
// });

// export default featuredToursReducer;

// store:
// import { configureStore } from "@reduxjs/toolkit";
// import featuredToursReducer from "./reducer/tourReducer"; // Remove curly braces for default export

// const store = configureStore({
//   reducer: {
//     featuredTours: featuredToursReducer,
//   },
// });

// export default store;

// FeaturedTourList:
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getFeaturedTours } from "../../redux/action/tourAction"; // Import the Redux action
// import TourCard from "../../shared/Tourcard/TourCard";
// import { Col } from "reactstrap";

// const FeaturedTourList = () => {
//   const dispatch = useDispatch();
//   const {
//     data: featuredTours,
//     loading,
//     error,
//   } = useSelector((state) => state.featuredTours);
//   useEffect(() => {
//     dispatch(getFeaturedTours());
//   }, [dispatch]);

//   // console.log(featuredTours.data);
//   return (
//     <>
//       {loading && <h4>Loading....</h4>}
//       {error && <h4>Error...</h4>}

//       {!loading &&
//         !error &&
//         featuredTours.data?.map((tour) => (
//           <Col lg="3" className="mb-4" key={tour._id}>
//             <TourCard tour={tour} />
//           </Col>
//         ))}
//     </>
//   );
// };

// export default FeaturedTourList;
