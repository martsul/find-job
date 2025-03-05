import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../../services/AuthService";
import { AxiosError } from "axios";

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
