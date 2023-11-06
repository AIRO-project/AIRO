import { ReactNode } from "react";
import styled from "styled-components";

const StyledAnimatedIcon = styled.div<{ reversed: boolean }>`
  transition: transform 0.2s ease;
  transform: ${({ reversed }) =>
    reversed ? "rotate(90deg)" : "rotate(-90deg)"};
`;

type Props = {
  reversed: boolean;
  children: ReactNode;
};

function AnimatedIcon(props: Props) {
  return (
    <StyledAnimatedIcon reversed={props.reversed}>
      {props.children}
    </StyledAnimatedIcon>
  );
}

export default AnimatedIcon;
