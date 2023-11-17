import { onSnapshot, collection } from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { db } from "../config/firebase";
import { selectDevices, setDevices } from "../state/slices/devicesSlice";

const useGetDevices = () => {
  const dispatch = useDispatch();
  const devices = useSelector(selectDevices);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "devices"),
      (querySnapshot) => {
        const newDevices = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        dispatch(setDevices(newDevices));
      }
    );

    return () => unsubscribe();
  }, [dispatch]);
  return devices;
};
export default useGetDevices;
