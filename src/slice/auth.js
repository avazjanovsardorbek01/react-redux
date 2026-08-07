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
    loginUserSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    loginUserFailure: (state) => {
      state.isLoading = false;
      state.error = "Login failed";
    },
    // Register
    registerUserStart: (state) => {
      state.isLoading = true;
    },
    registerUserSuccess: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
    },
    registerUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loginUserStart,
  registerUserStart,
  registerUserSuccess,
  registerUserFailure,
  loginUserSuccess,
  loginUserFailure,
} = authSlice.actions;

export default authSlice.reducer;
