import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUserStart: (state) => {
      state.isLoading = true;
    },
    loginUserSuccess: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    loginUserFailure: (state) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { loginUserStart, loginUserSuccess, loginUserFailure } =
  authSlice.actions;

export default authSlice.reducer;
