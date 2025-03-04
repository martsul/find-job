import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../../services/AuthService";

export const registration = createAsyncThunk(
  "authorization/thunks/registration",
  async (
    {
      email,
      password,
      nickname,
    }: { email: string; password: string; nickname: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await AuthService.registration(
        email,
        password,
        nickname
      );

      if (!response) {
        return rejectWithValue("No User Data!");
      }

      localStorage.setItem("token", response.data.accessToken);
      return response.data.user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
