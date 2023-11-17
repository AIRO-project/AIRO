import { keyframes, styled } from "styled-components";

interface StyledNotificationProps {
  $isError: boolean;
}

const notificationAnimation = keyframes`
  0% {
    transform: translateY(15rem) translateX(-50%);
  }
  10% {
    transform: translateY(0) translateX(-50%);
  }
  90% {
    transform: translateY(0) translateX(-50%);
  }
  100% {
    transform: translateY(15rem) translateX(-50%);
  }
`;

export const StyledNotification = styled.div<StyledNotificationProps>`
  position: absolute;
  z-index: 10;
  bottom: 5.5rem;
  left: 50%;
  transform: translateY(15rem) translateX(-50%);
  animation: ${notificationAnimation} 4s ease;
  color: var(--color-white);
  background-color: ${(props) =>
    props.$isError ? "var(--color-error)" : "var(--color-primary)"};
  padding: 1.6rem;
  padding-right: 5.4rem;
  border-radius: 2px;
  box-shadow: var(--shadow-sm);
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
