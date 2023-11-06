import {
  ChangeEvent,
  KeyboardEvent,
  ReactNode,
  useId,
  useRef,
  useState,
} from "react";
import styled from "styled-components";

import Icon from "../../assets/svgs/Icon";

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
  isChecked?: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  children: ReactNode;
  color?: string;
};

/**
 * @prop `value`[string] - the `value` of the checkbox;
 * @prop `handleChange`[function] - gets the checkbox's `ChangeEvent` as parameter;
 * @prop `isChecked`[boolean] - the default state of the checkbox, Default value: `false`;
 * @prop `color` [string: any valid `css` color] - the color of the checkbox. Default value: `#fff`;
 */
function Checkbox({
  value,
  handleChange,
  isChecked = false,
  color = "var(--color-white)",
  children,
}: CheckboxProps) {
  const id = useId();
  const [checked, setIsChecked] = useState(isChecked);
  const inputRef = useRef<HTMLInputElement | null>(null);

  function checkHandler(e: ChangeEvent<HTMLInputElement>) {
    setIsChecked(e.target.checked);
  }

  function handleKeyboardEvent(e: KeyboardEvent<HTMLLabelElement>) {
    if (e.code === "Space" || e.code === "Enter") {
      inputRef.current?.click();
    }
  }

  return (
    <Container $color={color}>
      <StyledInput
        id={id}
        type="checkbox"
        checked={checked}
        value={value}
        onChange={(e) => {
          checkHandler(e);
          if (handleChange) handleChange(e);
        }}
        ref={inputRef}
      />
      <StyledLabel
        htmlFor={id}
        tabIndex={0}
        onKeyDown={(e) => {
          handleKeyboardEvent(e);
        }}
      >
        <Icon
          name={checked ? "checkmark-on" : "checkmark-off"}
          color="currentColor"
          width="1.4rem"
          height="1.4rem"
        />
        {children}
      </StyledLabel>
    </Container>
  );
}

export default Checkbox;
