import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { auth } from "../config/firebase";

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();

  return signInWithPopup(auth, provider);
};
export const handleSignIn = async () => {
  try {
    await googleSignIn();
  } catch (error) {
    console.log("SignIn error", error);
  }
};
