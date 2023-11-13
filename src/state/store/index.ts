import { configureStore } from "@reduxjs/toolkit";

import sidePanelReducer from "../slices/sidePanelSlice";

export const store = configureStore({
  reducer: {
    sidePanel: sidePanelReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;