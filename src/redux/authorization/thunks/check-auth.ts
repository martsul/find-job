import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AuthResponse } from "../../../types/auth-response";
import { API_URL } from "../../../http";

export const checkAuth = createAsyncThunk(
  "authorization/thunks/checkAuth",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true,
      });

      localStorage.setItem("token", response.data.accessToken);
      return response.data.user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
