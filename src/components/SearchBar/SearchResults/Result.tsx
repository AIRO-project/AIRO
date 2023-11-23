import { ReactNode } from "react";

import { DeviceT } from "/src/types/DeviceT";

import { StyledResult } from "./SearchResults.styles";

function Result({
  onClick,
  children,
  isFocused,
  value,
}: {
  onClick: (device: DeviceT) => void;
  children: ReactNode;
  isFocused: boolean;
  value: DeviceT;
}) {
  return (
    <StyledResult
      onClick={() => {
        onClick(value);
      }}
      $isFocused={isFocused}
    >
      {children}
    </StyledResult>
  );
}

export default Result;
