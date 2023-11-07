import styled, { css } from "styled-components";

import typography from "../../../styles/Typography/typography";

type StyledEmailInputProps = {
  hasError: boolean;
};

export const StyledInput = styled.input`
  ${typography.subtitle4}
  color: var(--color-white);
  border: none;
  outline: none;
  background-color: var(--color-grey-dark-2);
  border-radius: 0.2rem;
  width: 100%;
  padding: 0.6rem 1.2rem;

  &:hover,
  &:focus {
    border: 2px solid var(--color-primary);
    padding: calc(0.6rem - 2px) calc(1.2rem - 2px);
  }
  &::placeholder {
    color: var(--color-white);
    opacity: 0.6;
  }
`;

export const StyledEmailField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: -3rem;
  margin-right: 1rem;
`;

export const StyledEmailInput = styled.div<StyledEmailInputProps>`
  svg {
    stroke: none;
  }
  span {
    color: var(--color-red-error);
    display: none;
  }

  ${(props) =>
    props.hasError &&
    css`
      ${IconButton} {
        display: block;
      }
      span {
        display: block;
      }
      ${StyledInput} {
        border: 2px solid var(--color-red-error);
        padding: calc(0.6rem - 2px) calc(1.2rem - 2px);
      }
    `}
`;
