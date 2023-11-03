import styled from "styled-components";

import { Icons } from "./icons";
import Sprite from "../sprite.svg";

const StyledIcon = styled.svg<{
  $color: string;
  $width: string;
  $height: string;
}>`
  fill: ${({ $color }) => $color};
  stroke: ${({ $color }) => $color};
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;

type Props = {
  name: Icons;
  color?: string;
  width?: string;
  height?: string;
};

/**
 * @prop `name`[string] - the `id` of the icon in the `sprite.svg`;
 * @prop `color` [string: any valid `css` color] - the color of the icon. Default value: `#fff`;
 * @prop `width`[string: any valid `css` unit] - the width of the icon. Default value: `1.6rem`;
 * @prop `height`[string: any valid `css` unit] - the height of the icon. Default value: `1.6rem`;
 */
const Icon = ({
  name,
  color = "#fff",
  width = "1.6rem",
  height = "1.6rem",
}: Props) => (
  <StyledIcon $color={color} $width={width} $height={height}>
    <use href={`${Sprite}#${name}`} />
  </StyledIcon>
);

export default Icon;
