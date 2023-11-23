import styled from "styled-components";

import { fadeIn } from "/src/styles/global/animations";
import typography from "/src/styles/Typography/typography";

export const Container = styled.ul<{ $scrollNeeded: boolean }>`
  position: absolute;
  top: 3.2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  max-width: 34.9rem;
  list-style: none;
  width: 100%;
  border-radius: 0.4rem;
  overflow: scroll;
  height: ${({ $scrollNeeded }) => ($scrollNeeded ? "32rem" : "unset")};
  box-shadow: var(--shadow-md);
  animation: ${fadeIn} 0.3s ease;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledResult = styled.ul<{
  $isFocused: boolean;
}>`
  ${typography.label2}
  cursor: pointer;
  width: 100%;
  border: none;
  text-align: start;
  background-color: ${({ $isFocused }) =>
    $isFocused ? "var(--color-primary)" : "var(--color-grey-dark-2)"};
  color: var(--color-white);
  padding: 0.4rem 0.8rem;

  &:hover,
  &:focus {
    background-color: var(--color-primary);
  }
`;
