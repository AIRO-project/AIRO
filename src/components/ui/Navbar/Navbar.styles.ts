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

export const StyledSearchBar = styled.div`
  height: 3rem;
  width: 40rem;
  border-radius: 1.6rem;
  overflow: hidden;
  border: 1px solid var(--color-grey-light-2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1.6rem;
  padding-right: 0.8rem;
  margin-left: 1.6rem;
`;

export const StyledSearchBarInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  color: var(--color-white);
  margin-left: 0.6rem;
  &::placeholder {
    color: var(--color-grey-light-1);
  }
`;
export const StyledSearchButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
`;
