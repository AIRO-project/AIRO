import { ChangeEvent, KeyboardEvent, ReactNode, useRef, useState } from "react";
import styled from "styled-components";

import { SwitchStylesProperties } from "./Switch/Switch.styles";
import Icon from "../../assets/svgs/Icon";
import { clickElOnKeyPress } from "../../utils/helpers";

const Container = styled.div<{ $color: string }>`
  color: ${({ $color }) => $color};
`;

const StyledInput = styled.input`
  display: none;
  pointer-events: none;
`;

const StyledLabel = styled.label`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

type CheckboxProps = {
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
  checked?: boolean;
  styledAs?: "checkbox" | "switch";
  SwitchStyles?: SwitchStylesProperties;
  color?: string;
};

/**
 * @prop `value`[string] - the `value` of the checkbox;
 * @prop `handleChange`[function] - gets the checkbox's `ChangeEvent` as parameter;
 * @prop `checked`[boolean] - the default state of the checkbox, Default value: `false`;
 * @prop `color` [string: any valid `css` color] - the color of the checkbox. Default value: `#fff`;
 */
function Checkbox({
  value,
  handleChange,
  SwitchStyles,
  checked = false,
  color = "var(--color-white)",
  styledAs = "checkbox",
  children,
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);
  const inputRef = useRef<HTMLInputElement | null>(null);

  function checkHandler(e: ChangeEvent<HTMLInputElement>) {
    setIsChecked(e.target.checked);
  }

  function handleKeyboardEvent(e: KeyboardEvent<HTMLLabelElement>) {
    clickElOnKeyPress(e, inputRef);
  }

  if (styledAs === "checkbox") {
    return (
      <Container $color={color}>
        <StyledLabel tabIndex={0} onKeyDown={handleKeyboardEvent}>
          <StyledInput
            type="checkbox"
            checked={isChecked}
            value={value}
            onChange={(e) => {
              checkHandler(e);
              handleChange(e);
            }}
            ref={inputRef}
          />
          <Icon
            name={isChecked ? "checkmark-on" : "checkmark-off"}
            color="currentColor"
            width="1.4rem"
            height="1.4rem"
          />
          {children}
        </StyledLabel>
      </Container>
    );
  }

  if (styledAs === "switch" && SwitchStyles) {
    return (
      <SwitchStyles.Rail
        $checked={isChecked}
        tabIndex={0}
        onKeyDown={handleKeyboardEvent}
      >
        <StyledInput
          type="checkbox"
          value={value}
          checked={isChecked}
          onChange={(e) => {
            checkHandler(e);
            handleChange(e);
          }}
          ref={inputRef}
        />
        <SwitchStyles.Knob $checked={isChecked} />
      </SwitchStyles.Rail>
    );
  }
}

export default Checkbox;
