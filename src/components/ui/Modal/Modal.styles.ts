import styled from "styled-components";

import { fadeIn, scaleUp } from "../../../styles/global/animations";

export const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

export const StyledModalContent = styled.div`
  position: relative;
  background: var(--color-grey-dark-2);
  padding: 5.2rem 3.7rem;
  animation: ${scaleUp} 0.3s ease-in-out;
`;

export const StyledModalButton = styled.button`
  background-color: transparent;
  position: absolute;
  padding: 0;
  top: 1rem;
  right: 1rem;
  border: none;
  cursor: pointer;
`;
