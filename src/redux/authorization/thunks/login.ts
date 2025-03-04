import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../../services/AuthService";

export const login = createAsyncThunk(
  "authorization/thunks/login",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await AuthService.login(email, password);

      if (!response) {
        return rejectWithValue("No User Data!");
      }

      localStorage.setItem("token", response.data.accessToken);
      return response.data.user;
    } catch (error) {
      console.log(error)
      rejectWithValue(error);
    }
  }
);
