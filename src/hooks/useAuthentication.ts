import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { auth } from "../config/firebase";
import { login, logout } from "../state/slices/userSlice";

const useAuthentication = () => {
  const dispatch = useDispatch();

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
      } else {
        dispatch(logout());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);
};

export default useAuthentication;
