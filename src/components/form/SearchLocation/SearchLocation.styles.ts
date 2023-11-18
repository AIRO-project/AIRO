import styled from "styled-components";

import typography from "/src/styles/Typography/typography";

export const StyledInput = styled.input`
  ${typography.subtitle4}
  color: var(--color-white);
  border: none;
  outline: none;
  background-color: var(--color-grey-dark-2);
  border-radius: 0.2rem;
  width: 40rem;
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
