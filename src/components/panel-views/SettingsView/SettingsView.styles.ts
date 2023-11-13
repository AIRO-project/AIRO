import styled from "styled-components";

import Button from "../../ui/Button";

export const StyledSettingsView = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  color: var(--color-white);
  height: 100%;
`;

export const StyledDevicesList = styled.div`
  overflow: scroll;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  height: 6.2rem;
  display: flex;
  border-radius: 0.2rem;
  overflow: hidden;
  margin-top: auto;
`;

export const SettingsButton = styled(Button)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 0;
  text-decoration: none;
  color: var(--color-white);
  gap: 2.2rem;
`;