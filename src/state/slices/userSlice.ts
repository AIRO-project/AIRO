import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";

import { handleSignOut } from "/src/auth/handleSignOut";

type IUser = {
  isLoggedIn: boolean;
  userName: string | null;
  userImg: string | null;
  userEmail: string | null;
};
const initialState: IUser = {
  isLoggedIn: false,
  userName: null,
  userImg: null,
  userEmail: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userName = action.payload.userName;
      state.userImg = action.payload.userImg;
      state.userEmail = action.payload.userEmail;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userName = null;
      state.userImg = null;
      state.userEmail = null;
      handleSignOut();
    },
  },
});

export const selectUser = (state: RootState) => state.user;

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
