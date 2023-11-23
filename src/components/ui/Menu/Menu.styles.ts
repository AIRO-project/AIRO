import styled from "styled-components";

export const StyledMenu = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0.4rem;
  right: 0.4rem;
  background-color: var(--color-grey-dark-2);
  border-radius: 0.2rem;
  box-shadow: var(--shadow-md);
  color: var(--color-white);
  overflow: hidden;
`;

export const MenuButton = styled.a`
  display: flex;
  align-items: center;
  padding: 0.6rem 1rem;
  transition: all 0.2s;
  gap: 1rem;

  svg {
    height: 1rem;
    width: 1rem;
  }

  &:hover {
    background-color: var(--color-grey-dark-1);
  }

  &:nth-child(2) {
    color: #ef6e6e;

    svg {
      fill: #ef6e6e;
    }
  }

  &:nth-child(2):hover {
    background-color: #472d2d;
  }
`;
