import { configureStore } from "@reduxjs/toolkit";
import tourReducer from "../redux/reducer/tourReducer";
import userReducer from "./reducer/userReducer";
import reviewReducer from "./reducer/reviewReducer";
import bookingReducer from "./reducer/bookingReducer";

const store = configureStore({
  reducer: {
    tour: tourReducer,
    user: userReducer,
    review: reviewReducer,
    booking: bookingReducer,
  },
});

export default store;
