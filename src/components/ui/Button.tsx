import { ReactNode } from "react";
import styled from "styled-components";

import typography from "../../styles/Typography/typography";

type ButtonVariants = "normal" | "outline";

const StyledButton = styled.button`
  ${typography.subtitle1}

  border: none;
  border-radius: 0.2rem;
  color: var(--color-white);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--color-primary);
  }

  &:active {
    background-color: var(--color-primary-dark);
  }
`;

const ButtonNormal = styled(StyledButton)<{ $width: string }>`
  width: ${({ $width }) => $width};
  padding: 0.8rem 0;
  background-color: var(--color-secondary);
`;

const ButtonOutline = styled(StyledButton)<{ $width: string }>`
  width: ${({ $width }) => $width};
  padding: 0.7rem 0;
  background-color: transparent;
  border: 1px solid currentColor;

  &:hover {
    border-color: var(--color-primary);
  }

  &:active {
    border-color: var(--color-primary-dark);
  }
`;

type ButtonProps = {
  className?: string;
  width?: string;
  type?: ButtonVariants;
  onClick?: () => void;
  tabIndex?: number;
  children: ReactNode;
};

/**
 * @prop `onClick` [function] - `onClick` callback function;
 * @prop `width` [string: any valid `css` width unit] - the width of the button. Default value: `100%`;
 * @prop `type` [string: "normal" | "outline"] - the type of the button. Default value: `normal`;
 * @prop `className` [should not be passed] - this is added to make extending styles of the `Button` component possible, see https://styled-components.com/docs/basics#styling-any-component for more info;
 * @prop `tabIndex` [number] - tabIndex of the Button, is useful when we want to disable the button from accessibility (eg: tabIndex={-1}). 
 */
function Button({
  className,
  onClick,
  width = "100%",
  type = "normal",
  tabIndex = 0,
  children,
}: ButtonProps) {
  return type === "outline" ? (
    <ButtonOutline
      tabIndex={tabIndex}
      className={className}
      onClick={onClick}
      $width={width}
    >
      {children}
    </ButtonOutline>
  ) : (
    <ButtonNormal
      tabIndex={tabIndex}
      className={className}
      onClick={onClick}
      $width={width}
    >
      {children}
    </ButtonNormal>
  );
}

export default Button;
