import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../../services/AuthService";
import { AxiosError } from "axios";

export const logout = createAsyncThunk(
  "authorization/thunks/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await AuthService.logout();

      localStorage.removeItem("token");
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(
          error?.response?.data || { message: "Unknown error" }
        );
      }

      return rejectWithValue({ message: "Unexpected error occurred" });
    }
  }
);
