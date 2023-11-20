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
    const user = result.user;
    return {
      userName: user.displayName,
      userImg: user.photoURL,
      userEmail: user.email,
    };
  } catch (error) {
    console.log("SignIn error", error);
  }
}) as any;

export const handleSignOut = createAsyncThunk(
  "user/handleSignOut",
  async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log("LogOut error", error);
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
      state.userName = action.payload!.userName;
      state.userImg = action.payload!.userImg;
      state.userEmail = action.payload!.userEmail;
    });
    builder.addCase(handleSignIn.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(handleSignIn.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.loading = false;
      state.error = action.error.message!;
      state.userName = null;
      state.userImg = null;
      state.userEmail = null;
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
