import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { tasksSlice } from "./tasks";

export const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useSelectorApp: TypedUseSelectorHook<RootState> = useSelector;
