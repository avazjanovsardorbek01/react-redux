import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  user: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Login
    loginUserStart: (state) => {
      state.isLoading = true;
    },
    loginUserSuccess: (state, action) => {},
    loginUserFailure: (state) => {},
    // Register
    registerUserStart: (state) => {
      state.isLoading = true;
    },
    registerUserSuccess: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
    },
    registerUserFailure: (state) => {
      state.isLoading = false;
      state.error = "Registration failed";
    },
  },
});

export const {
  loginUserStart,
  registerUserStart,
  registerUserSuccess,
  registerUserFailure,
} = authSlice.actions;

export default authSlice.reducer;
