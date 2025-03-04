import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../../services/AuthService";

export const logout = createAsyncThunk(
  "authorization/thunks/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await AuthService.logout();

      localStorage.removeItem("token");
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
