import { styled } from "styled-components";

export const StyledSearchBar = styled.div`
  position: relative;
  height: 3rem;
  width: 40rem;
  border-radius: 1.6rem;
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
