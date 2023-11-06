import styled from "styled-components";

export const StyledSelect = styled.div`
  max-width: 45rem;
  position: relative;

  & p {
    flex: 1;
    overflow: hidden;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
  background-color: var(--color-grey-dark-2);
  color: var(--color-white);
  border: none;
  text-align: left;
  padding: 0.6rem 1.2rem;
  width: 100%;
  border-radius: 0.2rem;
  transition: all 0.2s;
  cursor: pointer;

  &:focus,
  &:hover {
    background-color: var(--color-primary);
  }

  &:disabled {
    background-color: var(--color-grey-dark-2);
    color: var(--color-grey-light-1);
    cursor: not-allowed;
  }
`;

export const OptionsList = styled.ul`
  position: absolute;
  list-style: none;
  padding: 0;
  top: 100%;
  left: 0;
  width: 100%;
  margin-top: -0.2rem;
  background-color: var(--color-grey-dark-2);
  border-bottom-right-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
`;

export const OptionItem = styled.li`
  color: var(--color-grey-light-1);
  padding: 0.6rem 1.2rem;
  transition: all 0.2s;
  width: 100%;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    color: var(--color-white);
  }
`;
