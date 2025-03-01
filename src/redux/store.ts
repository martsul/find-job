import { configureStore } from "@reduxjs/toolkit";
import { employmentsSlice } from "./entities/employments/employments-slice.ts";

export const store = configureStore({
  reducer: {
    [employmentsSlice.name]: employmentsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
