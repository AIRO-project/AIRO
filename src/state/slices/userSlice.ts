/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";

import { signOut } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { auth } from "/src/config/firebase";

type UserT = {
  isLoggedIn: boolean;
  loading: boolean;
  error: string;
  userName: string | null;
  userImg: string | null;
  userEmail: string | null;
};
const initialState: UserT = {
  isLoggedIn: false,
  loading: false,
  error: "",
  userName: null,
  userImg: null,
  userEmail: null,
};

export const handleSignIn = createAsyncThunk("user/handleSignIn", async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("SignIn error", error);
  }
}) as any;

export const handleSignOut = createAsyncThunk(
  "user/handleSignOut",
  async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("LogOut error", error);
    }
  }
) as any;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(handleSignIn.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.loading = false;
      state.userName = action.payload!.displayName;
      state.userImg = action.payload!.photoURL;
      state.userEmail = action.payload!.email;
    });
    builder.addCase(handleSignIn.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(handleSignIn.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });
    builder.addCase(handleSignOut.fulfilled, (state) => {
      state.isLoggedIn = false;
      state.userName = null;
      state.userImg = null;
      state.userEmail = null;
    });
  },
});

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
