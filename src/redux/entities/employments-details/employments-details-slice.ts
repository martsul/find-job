import { createSlice } from "@reduxjs/toolkit";
import { getEmploymentsDetails } from "./get-employments-details";

export type EmploymentsDetails = {
  timeOfPost: Date;
  mainInfo: Record<string, string>;
  company: string;
  requirements: string[];
  _id: string;
  logo: string;
  name: string;
  text: string;
  location: string;
};

export type EmploymentsDetailsState = {
  ids: EmploymentsDetails["_id"][];
  entities: Record<EmploymentsDetails["_id"], EmploymentsDetails>;
  requestStatus: "idle" | "pending" | "rejected" | "fulfilled";
};

const initialState: EmploymentsDetailsState = {
  entities: {},
  ids: [],
  requestStatus: "idle",
};

export const employmentsDetailsSlice = createSlice({
  name: "employmentsDetails",
  initialState,
  reducers: {},
  selectors: {
    selectEmploymentDetailsById: (state, id: EmploymentsDetails["_id"]) =>
      state.entities[id],
  },
  extraReducers: (builder) =>
    builder
      .addCase(getEmploymentsDetails.pending, (state) => {
        state.requestStatus = "pending";
      })
      .addCase(getEmploymentsDetails.rejected, (state) => {
        state.requestStatus = "rejected";
      })
      .addCase(getEmploymentsDetails.fulfilled, (state, { payload }) => {
        state.ids = [...state.ids, payload._id];
        state.entities = { ...state.entities, [payload["_id"]]: payload };

        state.requestStatus = "fulfilled";
      }),
});

export const { selectEmploymentDetailsById } =
  employmentsDetailsSlice.selectors;
