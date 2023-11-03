import styled from "styled-components";

import { Icons } from "./icons";
import Sprite from "../sprite.svg";

const StyledIcon = styled.svg<{
  $color: string;
  $width: string;
  $height: string;
  $hover: string;
  $active: string;
}>`
  fill: ${({ $color }) => $color};
  stroke: ${({ $color }) => $color};
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  transition: all .2s ease;

  &:hover {
    ${({ $hover }) => $hover}
  }

  &:active {
    ${({ $active }) => $active}
  }
`;

type Props = {
  name: Icons;
  color?: string;
  width?: string;
  height?: string;
  hover?: string;
  active?: string;
};

/**
 * @prop `name`[string] - the `id` of the icon in the `sprite.svg`;
 * @prop `color` [string: any valid `css` color] - the color of the icon. Default value: `#fff`;
 * @prop `width`[string: any valid `css` unit] - the width of the icon. Default value: `1.6rem`;
 * @prop `height`[string: any valid `css` unit] - the height of the icon. Default value: `1.6rem`;
 * @prop `hover`[string: any valid `css`] - the hover pseudo-class of the icon;
 * @prop `active`[string: any valid `css`] - the active pseudo-class of the icon;
 */
const Icon = ({
  name,
  color = "#fff",
  width = "1.6rem",
  height = "1.6rem",
  hover = "",
  active = "",
}: Props) => (
  <StyledIcon
    $color={color}
    $width={width}
    $height={height}
    $hover={hover}
    $active={active}
  >
    <use href={`${Sprite}#${name}`} />
  </StyledIcon>
);

export default Icon;
