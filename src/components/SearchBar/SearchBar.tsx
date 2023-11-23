import Icon from "/src/assets/svgs/Icon";

import {
  StyledSearchBar,
  StyledSearchBarInput,
  StyledSearchButton,
} from "./SearchBar.styles";
import SearchResults from "./SearchResults/SearchResults";

import { FormEvent, useCallback, useRef, useState } from "react";

import useDebounce from "/src/hooks/useDebounce";
import { DeviceT } from "/src/types/DeviceT";
import useClickedOutside from "/src/hooks/useClickedOutside";

import searchDevices from "./searchDevices";
import useFormSubmit from "./hooks/useFormSubmit";
import useInputValue from "./hooks/useInputValue";
import Loader from "../ui/Loader";

import { useSelector } from "react-redux";

import { selectDevices } from "/src/state/slices/devicesSlice";

function SearchBar() {
  const [focusedDevice, setFocusedDevice] = useState<DeviceT>();
  const [searchResults, setSearchResults] = useState<DeviceT[] | null>(null);
  const [inputIsFocused, setInputIsFocused] = useState<boolean>(false);

  const { devices } = useSelector(selectDevices);

  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useClickedOutside<HTMLFormElement>(
    formRef,
    () => {
      setInputIsFocused(false);
    },
    inputIsFocused
  );

  const onResultFocus = useCallback(function (device: DeviceT) {
    setFocusedDevice(device);
  }, []);

  const { handleInputChange, searchValue, inputValue } =
    useInputValue(focusedDevice);

  function searchDevicesOnDebounce() {
    setSearchResults(searchDevices(searchValue, devices));
  }

  const { onSubmitHandler, onResultClickHandler } = useFormSubmit(
    setInputIsFocused,
    focusedDevice,
    setFocusedDevice
  );

  const isLoading = useDebounce<string, DeviceT>(
    searchValue,
    devices,
    searchDevicesOnDebounce,
    300
  );

  return (
    <StyledSearchBar
      $isFocused={inputIsFocused}
      ref={formRef}
      onSubmit={(e: FormEvent) => {
        inputRef.current?.blur();
        onSubmitHandler(e);
      }}
    >
      <StyledSearchButton>
        <Icon name="filter" height="12px" width="12px" />
      </StyledSearchButton>
      <StyledSearchBarInput
        type="text"
        placeholder="Type address..."
        onChange={handleInputChange}
        onFocus={() => {
          setInputIsFocused(true);
        }}
        value={inputValue}
        ref={inputRef}
      />
      <StyledSearchButton disabled={!isLoading}>
        {!isLoading ? (
          <Icon
            name="search"
            height="100%"
            width="100%"
            color="var(--color-grey-light-2)"
          />
        ) : (
          <Loader size="1.8rem" color="var(--color-grey-light-2)" />
        )}
      </StyledSearchButton>
      {inputIsFocused && searchResults && (
        <SearchResults
          searchValue={searchValue}
          results={searchResults}
          onResultClick={onResultClickHandler}
          onResultFocus={onResultFocus}
        />
      )}
    </StyledSearchBar>
  );
}

export default SearchBar;
