import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const store = configureStore({
  reducer: {},
});

export function useSelectorApp<TState = ReturnType<typeof store.getState>, TSelected = unknown>(
  selector: (state: TState) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean,
) {
  return useSelector(selector, equalityFn);
}
