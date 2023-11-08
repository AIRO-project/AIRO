import { useRef } from "react";

import typography from "/src/styles/Typography/typography";

import { styled } from "styled-components";

import { TabProps } from "./types";
import Button from "../Button";

import { clickElOnKeyPress } from "/src/utils/helpers";

const StyledLabel = styled.label<{ $checked: boolean }>`
  cursor: pointer;
  flex: 1;

  button {
    background-color: ${({ $checked }) =>
      $checked ? "var(--color-secondary)" : "var(--color-grey-dark-2)"};
  }

  &:hover {
    button {
      background-color: ${({ $checked }) =>
        $checked ? "var(--color-primary)" : "var(--color-grey-dark-1)"};
    }
  }

  &:active {
    button {
      background-color: ${({ $checked }) =>
        $checked ? "var(--color-primary-dark)" : "var(--color-grey-dark-2)"};
    }
  }
`;

const StyledInput = styled.input`
  pointer-events: none;
  display: none;
`;

const StyledButton = styled(Button)`
  pointer-events: none;
  ${typography.subtitle3}
`;

function Tab({ tab, name, checked }: TabProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <StyledLabel
      tabIndex={0}
      onKeyDown={(e) => {
        clickElOnKeyPress(e, inputRef);
      }}
      $checked={checked}
    >
      <StyledInput
        type="radio"
        name={name}
        ref={inputRef}
        value={tab.value}
        defaultChecked={checked}
      />
      <StyledButton tabIndex={-1}>{tab.label}</StyledButton>
    </StyledLabel>
  );
}

export default Tab;
