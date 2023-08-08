import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  booking: null,
  error: null,
};

const bookingReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("bookTourRequest", (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase("bookTourSuccess", (state, action) => {
      state.isLoading = false;
      state.booking = action.payload;
      state.error = null;
    })
    .addCase("bookTourFailure", (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
});

export default bookingReducer;
