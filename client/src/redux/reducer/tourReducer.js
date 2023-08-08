import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  tours: [],
  tour: null,
  featuredTours: [],
  tourCount: null,
  error: null,
};

const tourReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("getFeaturedToursRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("getFeaturedToursSuccess", (state, action) => {
      state.isLoading = false;
      state.featuredTours = action.payload;
    })
    .addCase("getFeaturedToursFailure", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase("getToursRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("getToursSuccess", (state, action) => {
      state.isLoading = false;
      state.tours = action.payload;
    })
    .addCase("getToursFailure", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase("getTourCountRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("getTourCountSuccess", (state, action) => {
      state.isLoading = false;
      state.tourCount = action.payload;
    })
    .addCase("getTourCountFailure", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase("getSingleTourRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("getSingleTourSuccess", (state, action) => {
      state.isLoading = false;
      state.tour = action.payload;
    })
    .addCase("getSingleTourFailure", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase("clearErrors", (state) => {
      state.error = null;
    });
});

export default tourReducer;
