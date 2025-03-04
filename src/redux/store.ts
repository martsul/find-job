import { configureStore } from "@reduxjs/toolkit";
import { employmentsSlice } from "./entities/employments/employments-slice.ts";
import { employmentsDetailsSlice } from "./entities/employments-details/employments-details-slice.ts";
import { authorizationSlice } from "./authorization/authorization-slice.ts";

export const store = configureStore({
  reducer: {
    [employmentsSlice.name]: employmentsSlice.reducer,
    [employmentsDetailsSlice.name]: employmentsDetailsSlice.reducer,
    [authorizationSlice.name]: authorizationSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
