import { useMemo, useState } from "react";

import {
  StyledEmailInput,
  StyledInput,
  StyledEmailField,
  IconButton,
} from "./Input.styles";
import Icon from "../../../assets/svgs/Icon";
import Typography from "../../../styles/Typography";

type InputVariants = "default" | "email";
type InputEvent = React.ChangeEvent<HTMLInputElement>;
type InputProps = {
  placeholder: string;
  inputValue: string;
  setInputValue: (value: string) => void;
  type?: InputVariants;
  errorMessage?: string;
};

/**
 * @prop `placeholder` [string] - placeholder for the input. Default value : empty string;
 * @prop `inputValue` [string: "normal" | "outline"] - state of the input;
 * @prop `setInputValue` [should not be passed] - function to set the state;
 * @prop `type` [string : "default" | "email"] - type of the input. Default value : `default`;
 * @prop `errorMessage` [string: "normal" | "outline"] - error message only for email type input. Default value : `Error`;
 */

function Input({
  placeholder = "",
  inputValue,
  setInputValue,
  type = "default",
  errorMessage = "Error",
}: InputProps) {
  const isEmail = useMemo(() => type === "email", [type]);
  const handleInputChange = (e: InputEvent) => {
    setInputValue(e.target.value);
    if (isEmail) setHasError(!isValidEmail(e.target.value));
  };

  const [hasError, setHasError] = useState(false);
  function isValidEmail(input: string) {
    return !input || /\S+@\S+\.\S+/.test(input);
  }

  const input = (
    <StyledInput
      placeholder={placeholder}
      value={inputValue}
      onChange={handleInputChange}
    />
  );

  const handleButtonClick = () => {
    setInputValue("");
    setHasError(false);
  };

  return isEmail ? (
    <StyledEmailInput hasError={hasError}>
      <StyledEmailField>
        {input}
        <IconButton onClick={handleButtonClick}>
          <Icon name="close-circle" width="1.7rem" height="1.7rem" />
        </IconButton>
      </StyledEmailField>
      <Typography tag="span" tagStyle="label2">
        {errorMessage}
      </Typography>
    </StyledEmailInput>
  ) : (
    input
  );
}

export default Input;
