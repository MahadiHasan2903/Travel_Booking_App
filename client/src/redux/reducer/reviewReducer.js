import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  review: [],
  error: null,
};

const reviewReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("submitReviewSuccess", (state, action) => {
      state.isLoading = false;
      state.review = action.payload.data;
    })
    .addCase("submitReviewFailure", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase("clearReviewErrors", (state) => {
      state.error = null;
    });
});

export default reviewReducer;
