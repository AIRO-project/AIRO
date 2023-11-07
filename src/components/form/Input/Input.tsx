import { useState } from "react";

import {
  StyledEmailInput,
  StyledInput,
  StyledEmailField,
  IconButton,
} from "./Input.styles";
import Icon from "../../../assets/svgs/Icon";
import Typography from "../../../styles/Typography";

type InputVariants = "default" | "email";
type InputProps = {
  type?: InputVariants;
  placeholder: string;
  inputValue: string;
  setInputValue: (value: string) => void;
  errorMessage?: string;
};

/**
 * @prop `type` [string : "default" | "email"] - type of the input;
 * @prop `placeholder` [string] - placeholder for the input;
 * @prop `inputValue` [string: "normal" | "outline"] - state of the input;
 * @prop `setInputValue` [should not be passed] - function to set the state;
 * @prop `errorMessage` [string: "normal" | "outline"] - error message only for email type input;
 */

function Input({
  type = "default",
  placeholder = "Type...",
  inputValue,
  setInputValue,
  errorMessage = "Error",
}: InputProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const [error, setError] = useState<boolean>(false);
  function isValidEmail(input: string): boolean {
    return /\S+@\S+\.\S+/.test(input);
  }
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!isValidEmail(e.target.value)) {
      setError(true);
    } else {
      setError(false);
    }

    setInputValue(e.target.value);
  };
  const handleButtonClick = (): void => {
    setInputValue("");
  };
  return type === "default" ? (
    <StyledInput
      placeholder={placeholder}
      value={inputValue}
      onChange={handleInputChange}
    />
  ) : (
    <StyledEmailInput className={error && inputValue.length > 0 ? "error" : ""}>
      <StyledEmailField>
        <StyledInput
          placeholder={placeholder}
          value={inputValue}
          onChange={handleEmailChange}
        />
        <IconButton onClick={handleButtonClick}>
          <Icon name="close-circle" width="1.7rem" height="1.7rem" />
        </IconButton>
      </StyledEmailField>

      <Typography tag="span" tagStyle="label2">
        {errorMessage}
      </Typography>
    </StyledEmailInput>
  );
}

export default Input;
