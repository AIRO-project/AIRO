import { styled } from "styled-components";

export const StyledNavbar = styled.div`
  height: 6rem;
  padding: 0 3rem;
  background-color: var(--color-black);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledNavbarLogo = styled.div`
  display: flex;
  gap: 0.6rem;

  img {
    width: 13.2rem;
  }
  span {
    align-self: flex-end;
    color: var(--color-grey-light-2);
  }
`;

export const StyledNavbarActions = styled.div`
  display: flex;
  align-items: center;

  span {
    color: var(--color-grey-light-1);
    margin-right: 0.6rem;
  }
`;
