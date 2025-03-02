import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  EmploymentsDetails,
  EmploymentsDetailsState,
  selectEmploymentDetailsById,
} from "./employments-details-slice";

export const getEmploymentsDetails = createAsyncThunk(
  "employmentDetails/getEmploymentDetails",
  async (employmentId: EmploymentsDetails["_id"], { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/employments/${employmentId}`
      );

      const result = await response.json();

      if (!result) {
        rejectWithValue("No Data!");
        return;
      }

      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (employmentId, { getState }) => {
      const state = getState() as {
        employmentsDetails: EmploymentsDetailsState;
      };

      return !selectEmploymentDetailsById(state, employmentId);
    },
  }
);
