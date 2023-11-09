import styled, { css, keyframes } from "styled-components";

export const StyledSidePanel = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  width: 36rem;
  padding: 3.6rem 1.8rem;
  background-color: var(--color-grey-dark-1);
  height: 100%;
  top: 0;
  right: -40rem;
  animation: ${({ $isOpen }) =>
      $isOpen
        ? css`
            ${slideIn} 0.3s ease-in-out
          `
        : css`
            ${slideOut} 0.2s ease-out
          `}
    forwards;
`;

const slideIn = keyframes`
  from {
    right: -40rem;
  }
  to {
    right: 0;
  }
`;

const slideOut = keyframes`
  from {
    right:  0 ;
  }
  to {
    right: -40rem;
  }
`;

export const StyledPanelButton = styled.button`
  background-color: transparent;
  position: absolute;
  padding: 0;
  top: 3.6rem;
  right: 1.8rem;
  border: none;
  cursor: pointer;
`;
