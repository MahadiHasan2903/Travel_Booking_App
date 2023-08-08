import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  isLoading: false,
  user: null,
  isAuthenticated: false,
  error: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("registerUserRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("registerUserSuccess", (state, action) => {
      state.isLoading = false;
      state.user = action.payload.data;
      state.isAuthenticated = true;
    })
    .addCase("registerUserFailure", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase("loginUserRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("loginUserSuccess", (state, action) => {
      state.isLoading = false;
      state.user = action.payload.data;
      state.isAuthenticated = true;
    })
    .addCase("loginUserFailure", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase("logoutUserSuccess", (state) => {
      state.isLoading = false;
      state.user = null;
      state.isAuthenticated = false;
    })
    .addCase("logoutUserFailure", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase("clearErrors", (state) => {
      state.error = null;
    });
});

export default userReducer;
