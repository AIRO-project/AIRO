import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

import { DeviceT } from "/src/types/DeviceT";
import { setSelectedDevice } from "/src/state/slices/devicesSlice";

import { useDispatch } from "react-redux";

function useFormSubmit(
  setInputIsFocused: Dispatch<SetStateAction<boolean>>,
  focusedDevice: DeviceT | undefined,
  setFocusedDevice: Dispatch<SetStateAction<DeviceT | undefined>>
) {
  const [deviceToSelect, setDeviceToSelect] = useState<DeviceT>();
  const dispatch = useDispatch();

  const onSubmitHandler = useCallback(
    function (e: FormEvent) {
      e.preventDefault();
      setDeviceToSelect(focusedDevice);
      setInputIsFocused(false);
    },
    [setDeviceToSelect, setInputIsFocused, focusedDevice]
  );

  const onResultClickHandler = useCallback(
    function (device: DeviceT) {
      setDeviceToSelect(device);
      setFocusedDevice(device);
      setInputIsFocused(false);
    },
    [setDeviceToSelect, setFocusedDevice, setInputIsFocused]
  );

  useEffect(() => {
    deviceToSelect && dispatch(setSelectedDevice(deviceToSelect));
  }, [deviceToSelect, dispatch]);

  return { onSubmitHandler, onResultClickHandler };
}

export default useFormSubmit;
