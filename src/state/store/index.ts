import { configureStore } from "@reduxjs/toolkit";

import sidePanelReducer from "../slices/sidePanelSlice";
import userReducer from "../slices/userSlice";

export const store = configureStore({
  reducer: {
    sidePanel: sidePanelReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
