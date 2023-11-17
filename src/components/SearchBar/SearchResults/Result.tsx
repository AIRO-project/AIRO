import { MouseEventHandler, ReactNode } from "react";
import { styled } from "styled-components";

import typography from "/src/styles/Typography/typography";

const StyledResult = styled.button<{ onClick: MouseEventHandler }>`
  ${typography.label2}
  cursor: pointer;
  width: 100%;
  border: none;
  text-align: start;
  background-color: var(--color-grey-dark-2);
  color: var(--color-white);
  padding: 0.4rem 0.8rem;

  &:hover,
  &:focus {
    background-color: var(--color-primary);
  }
`;

function Result({
  onClick,
  children,
}: {
  onClick: MouseEventHandler;
  children: ReactNode;
}) {
  return <StyledResult onClick={onClick}>{children}</StyledResult>;
}

export default Result;
