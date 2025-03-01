import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectEmploymentsFilteredIds } from "./employments-slice";
import { EmploymentState } from "./employments-slice.ts";

export const getEmployments = createAsyncThunk(
  "employments/getEmployments",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3001/api/employments");
      const result = await response.json();

      if (!result.length) {
        rejectWithValue("No Data!");
        return;
      }

      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (_, { getState }) => {
      return (
        selectEmploymentsFilteredIds(
          getState() as { employments: EmploymentState },
          new Set([])
        ).length === 0
      );
    },
  }
);
