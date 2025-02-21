import { configureStore } from "@reduxjs/toolkit";
import filterSelectionReducers from "./slices/filterSelectionSlice";

export const store = configureStore({
  reducer: {
    filterSelection: filterSelectionReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
