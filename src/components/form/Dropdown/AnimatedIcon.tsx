import { ReactNode } from "react";
import styled from "styled-components";

const StyledAnimatedChevron = styled.div<{ reversed: boolean }>`
  transition: transform 0.2s ease;
  transform: ${({ reversed }) =>
    reversed ? "rotate(90deg)" : "rotate(-90deg)"};
`;

type Props = {
  reversed: boolean;
  children: ReactNode;
};

function AnimatedChevron(props: Props) {
  return (
    <StyledAnimatedChevron reversed={props.reversed}>
      {props.children}
    </StyledAnimatedChevron>
  );
}

export default AnimatedChevron;
