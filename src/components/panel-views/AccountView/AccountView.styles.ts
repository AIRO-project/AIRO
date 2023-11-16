import styled from "styled-components";

import Button from "../../ui/Button";

export const StyledAccountView = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  color: var(--color-white);
  height: 100%;
`;

export const StyledDevicesList = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const StyledAddNewButton = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  width: fit-content;
  cursor: pointer;
  align-self: center;
  color: var(--color-white);
  transition: color 0.2s;

  &:hover {
    color: var(--color-grey-light-1);
  }
`;

export const StyledButtonGroup = styled.div`
  min-height: 6rem;
  display: flex;
  border-radius: 0.2rem;
  overflow: hidden;
  margin-top: auto;
`;

export const AccountButton = styled(Button)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 0;
  text-decoration: none;
  color: var(--color-white);
  gap: 2.2rem;
  height: 100%;
`;

export const AccountLink = styled.a`
  flex: 1;
  text-decoration: none;
`;
