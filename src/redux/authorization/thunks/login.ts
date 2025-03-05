import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../../services/AuthService";
import { AxiosError } from "axios";

export const login = createAsyncThunk(
  "authorization/thunks/login",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await AuthService.login(email, password);

      localStorage.setItem("token", response.data.accessToken);
      return response.data.user;
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
