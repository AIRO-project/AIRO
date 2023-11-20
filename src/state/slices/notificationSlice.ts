import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";

type NotificationVariants = "success" | "error";

type NotificationT = {
  type: NotificationVariants;
  message: string;
};

const initialState: NotificationT = {
  type: "success",
  message: "",
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification: (state, action) => {
      state.type = action.payload.type;
      state.message = action.payload.message;
    },
    clearNotification: (state) => {
      state.message = "";
    },
  },
});

export const { showNotification, clearNotification } =
  notificationSlice.actions;

export const selectNotification = (state: RootState) => state.notification;
export default notificationSlice.reducer;
