import styled from "styled-components";

const StyledLoader = styled.span<{
  $size: string;
  $color: string;
  $thickness: string;
}>`
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  border: ${({ $thickness }) => $thickness} solid ${({ $color }) => $color};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

type Props = {
  size?: string;
  color?: string;
  thickness?: string;
};

/**
 * @prop `size` [string: any valid `css` unit] - the width and height of the loader.;
 * @prop `color` [string: string: any valid `css` color] - the color of the loader;
 * @props `thickness` [string: any valid `css` unit] - the loader's thickness;
 */
function Loader({
  size = "3.2rem",
  color = "var(--color-white)",
  thickness = "0.2rem",
}: Props) {
  return <StyledLoader $size={size} $color={color} $thickness={thickness} />;
}

export default Loader;
