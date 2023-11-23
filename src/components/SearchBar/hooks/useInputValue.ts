import { ChangeEvent, useCallback, useEffect, useState } from "react";

import { DeviceT } from "/src/types/DeviceT";

import { useSelector } from "react-redux";

import { selectDevices } from "/src/state/slices/devicesSlice";

function useInputValue(deviceToSelect: DeviceT | undefined) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [inputValue, setInputValue] = useState("");

  const { selectedDevice } = useSelector(selectDevices);

  const handleInputChange = useCallback(function (
    e: ChangeEvent<HTMLInputElement>
  ) {
    setSearchValue(e.target.value);
    setInputValue(e.target.value);
  },
  []);

  useEffect(() => {
    setInputValue(deviceToSelect?.address || "");
  }, [deviceToSelect]);

  useEffect(() => {
    selectedDevice && setInputValue(selectedDevice?.address);
  }, [selectedDevice]);

  return { handleInputChange, searchValue, inputValue };
}

export default useInputValue;
