import styled from "styled-components";

export const StyledSidePanel = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  width: 36rem;
  padding: 3.6rem 1.8rem;
  background-color: var(--color-grey-dark-1);
  height: 100%;
  top: 0;
  right: 0;
  transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "40rem")});
  transition: transform 0.3s ease-in-out;
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
