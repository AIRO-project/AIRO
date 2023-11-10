import typography from "/src/styles/Typography/typography";

import { styled } from "styled-components";

import { TabProps } from "./types";
import Button from "../Button";

const StyledButton = styled(Button)<{ $checked: boolean }>`
  ${typography.subtitle3}

  background-color: ${({ $checked }) =>
    $checked ? "var(--color-secondary)" : "var(--color-grey-dark-2)"};

  &:hover {
    background-color: ${({ $checked }) =>
      $checked ? "var(--color-primary)" : "var(--color-grey-dark-1)"};
  }
`;

function Tab({ tab, checked, onClick }: TabProps) {
  return (
    <StyledButton $checked={checked} onClick={onClick.bind(null, tab.value)}>
      {tab.label}
    </StyledButton>
  );
}

export default Tab;
