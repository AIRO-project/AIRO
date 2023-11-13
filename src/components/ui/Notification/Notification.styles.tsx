import { styled } from "styled-components";

interface StyledNotificationProps {
  $isError: boolean;
}

export const StyledNotification = styled.div<StyledNotificationProps>`
  color: var(--color-white);
  background-color: ${(props) =>
    props.$isError ? "var(--color-error)" : "var(--color-primary)"};
  padding: 1.6rem;
  padding-right: 5.4rem;
  border-radius: 2px;
  display: inline-flex;
  align-items: center;
  gap: 2.4rem;
`;

export const StyledStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const StyledIcon = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  background-color: var(--color-white);
  display: flex;
  justify-content: center;
  align-items: center;
`;
