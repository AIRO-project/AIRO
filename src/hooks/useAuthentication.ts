import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { auth } from "../config/firebase";
import { login } from "../state/slices/userSlice";

const useAuthentication = () => {
  const dispatch = useDispatch();
  const [authStatus, setAuthStatus] = useState("pending");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            userName: userAuth.displayName,
            userImg: userAuth.photoURL,
            userEmail: userAuth.email,
          })
        );
      }
      setAuthStatus(userAuth ? "authenticated" : "unauthenticated");
    });

    return () => unsubscribe();
  }, [dispatch]);
  return { authStatus };
};

export default useAuthentication;
