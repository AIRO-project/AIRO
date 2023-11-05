import { useState, useRef } from "react";

import AnimatedIcon from "./AnimatedIcon";
import {
  StyledSelect,
  StyledButton,
  OptionsList,
  OptionItem,
} from "./Dropdown.styles";
import Icon from "../../../assets/svgs/Icon";
import useClickedOutside from "../../../hooks/useClickedOutside";
import Typography from "../../../styles/Typography";

type Props = {
  options: string[];
  selectedOption: string;
  disabled?: boolean;
  onOptionSelect: (option: string) => void;
};

/**
 * @prop `options`[string[]] - the dropdown options;
 * @prop `selectedOption` [string] - `the dropdown selected option`;
 * @prop `onOptionSelect`[Function] - function to be called when user selects an option`;
 * @prop `disabled?`[boolean] - optional prop indicating if dropdown should be disabled, default is false`;
 */

const Dropdown = ({
  options,
  selectedOption,
  onOptionSelect,
  disabled = false,
}: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((isOpen) => !isOpen);
  };

  const handleOptionClick = (option: string) => {
    onOptionSelect(option);
    toggleDropdown();
  };

  useClickedOutside<HTMLDivElement>(
    dropdownRef,
    toggleDropdown,
    isDropdownOpen
  );

  return (
    <StyledSelect ref={dropdownRef}>
      <StyledButton onClick={toggleDropdown} disabled={disabled}>
        <Typography tag="p" tagStyle="body">
          {selectedOption}
        </Typography>

        <AnimatedIcon reversed={isDropdownOpen}>
          <Icon
            name="chevron"
            width="1rem"
            color={disabled ? "var(--color-grey-light-1)" : "white"}
          />
        </AnimatedIcon>
      </StyledButton>

      {isDropdownOpen && (
        <OptionsList>
          {options.map((option: string) => (
            <OptionItem key={option} onClick={() => handleOptionClick(option)}>
              <Typography tag="p" tagStyle="body">
                {option}
              </Typography>
            </OptionItem>
          ))}
        </OptionsList>
      )}
    </StyledSelect>
  );
};

export default Dropdown;
