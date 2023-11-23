import styled, { keyframes } from "styled-components";

import { fadeIn } from "/src/styles/global/animations";

const slide = keyframes`
 0%{
  transform: translateX(30rem)
 }

 100% {
  transform: translateX(0)
 }
`;

export const StyledDevice = styled.button`
  position: relative;
  border: none;
  background-color: var(--color-grey-dark-2);
  border-radius: 0.2rem;
  cursor: pointer;
  padding: 1rem;
  text-align: left;
  display: flex;
  gap: 2.1rem;
  transition: all 0.2s;
  animation: ${fadeIn} 0.8s ease-in-out;
  animation: ${slide} 0.4s ease-in-out;

  &:hover {
    background-color: var(--color-black);
  }

  &:hover a {
    display: flex;
  }
`;

export const StyledDeviceIcon = styled.div`
  position: relative;
  height: 4.8rem;
  width: 4.8rem;
  border-radius: 50%;
  background-color: var(--color-secondary);

  & svg {
    position: absolute;
    top: 50%;
    right: -1rem;
    width: 3.2rem;
    height: 3.2rem;
    transform: translateY(-50%);
  }
`;

export const StyledDeviceInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  flex: 1;

  h2 {
    color: var(--color-white);
  }

  p {
    color: var(--color-grey-light-1);
  }
`;

export const StyledMenuButton = styled.a`
  display: none;
  position: absolute;
  border-radius: 0.2rem;
  padding: 0.1rem 0.6rem;
  cursor: pointer;
  top: 0.4rem;
  right: 0.4rem;
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-dark-1);
  }
`;
