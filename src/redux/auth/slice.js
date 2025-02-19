import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, editUser, logOut } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      userName: null,
      email: null,
      avatarURL: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    loading: false,
    error: false,
  },

  extraReducers: (builder) =>
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        // state.token = action.payload.token;
        state.loading = false;
      })
      .addCase(register.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(logIn.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(logIn.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      // ------------------------------------------------------------------------
      .addCase(editUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = false;
      })
      .addCase(editUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      // --------------------------------------------------------------------------
      .addCase(logOut.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
          password: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        state.loading = false;
      }),
});

export const authReducer = authSlice.reducer;
