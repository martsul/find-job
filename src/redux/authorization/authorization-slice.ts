import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/i-user";
import { login } from "./thunks/login";
import { registration } from "./thunks/registration";
import { logout } from "./thunks/logout";
import { checkAuth } from "./thunks/check-auth";

type AuthorizationState = {
  status: "not authorized" | "pending" | "authorized";
  data: IUser | object;
};

const initialState: AuthorizationState = {
  status: "not authorized",
  data: {},
};

export const authorizationSlice = createSlice({
  name: "authorizationSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(login.pending, (state) => {
        state.status = "pending";
      })
      .addCase(login.rejected, (state) => {
        state.status = "not authorized";
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.status = "authorized";
        state.data = payload as IUser;
      })
      .addCase(checkAuth.pending, (state) => {
        state.status = "pending";
      })
      .addCase(checkAuth.rejected, (state) => {
        state.status = "not authorized";
      })
      .addCase(checkAuth.fulfilled, (state, { payload }) => {
        state.status = "authorized";
        state.data = payload as IUser;
      })
      .addCase(registration.pending, (state) => {
        state.status = "pending";
      })
      .addCase(registration.rejected, (state) => {
        state.status = "not authorized";
      })
      .addCase(registration.fulfilled, (state, { payload }) => {
        state.status = "authorized";
        state.data = payload as IUser;
      })
      .addCase(logout.pending, (state) => {
        state.status = "pending";
      })
      .addCase(logout.rejected, (state) => {
        state.status = "authorized";
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = "not authorized";
        state.data = {};
      }),
});
