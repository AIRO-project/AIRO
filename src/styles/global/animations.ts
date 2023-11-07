import { keyframes } from "styled-components";

export const fadeIn = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`;

export const scaleUp = keyframes`
    0% {
      transform: scale(0.6);
    }
    100% {
      transform: scale(1);
    }
`;
