import { createSlice } from "@reduxjs/toolkit";
import { login } from "./thunks/login";
import { registration } from "./thunks/registration";
import { logout } from "./thunks/logout";
import { checkAuth } from "./thunks/check-auth";
import {
  useAuthorized,
  setError,
  setNotAuthorized,
  setPending,
} from "./auth-hooks";
import { AuthorizationState } from "../../types/auth-state";
import { AuthError } from "../../types/auth-error";

const initialState: AuthorizationState = {
  status: "not authorized",
  data: null,
};

export const authorizationSlice = createSlice({
  name: "authorizationSlice",
  initialState,
  reducers: {},
  selectors: {
    selectAuthStatus: (state) => state.status,
    selectAuthData: (state) => state.data,
  },
  extraReducers: (builder) =>
    builder
      .addCase(login.pending, setPending)
      .addCase(login.rejected, (state, { payload }) =>
        setError(state, payload as AuthError)
      )
      .addCase(login.fulfilled, (state, { payload }) => {
        useAuthorized(state, payload);
      })
      .addCase(checkAuth.pending, setPending)
      .addCase(checkAuth.rejected, setNotAuthorized)
      .addCase(checkAuth.fulfilled, (state, { payload }) => {
        useAuthorized(state, payload);
      })
      .addCase(registration.pending, setPending)
      .addCase(registration.rejected, (state, { payload }) => {
        setError(state, payload as AuthError);
      })
      .addCase(registration.fulfilled, (state, { payload }) => {
        useAuthorized(state, payload);
      })
      .addCase(logout.pending, setPending)
      .addCase(logout.fulfilled, setNotAuthorized),
});

export const { selectAuthData, selectAuthStatus } =
  authorizationSlice.selectors;
