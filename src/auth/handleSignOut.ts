import { signOut } from "firebase/auth";

import { auth } from "../config/firebase";

const logOut = () => {
  return signOut(auth);
};

export const handleSignOut = async () => {
  try {
    await logOut();
  } catch (error) {
    console.log("LogOut error", error);
  }
};
