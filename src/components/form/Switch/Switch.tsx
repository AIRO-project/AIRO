import { ChangeEvent } from "react";

import { SwitchStyles } from "./Switch.styles";
import Checkbox from "../Checkbox";

export type SwitchVariants = "switch-primary" | "switch-secondary";

type SwitchProps = {
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  type?: SwitchVariants;
};

/**
 * @prop `value`[string] - the `value` of the switch(checkbox);
 * @prop `handleChange`[function] - gets the switch's `ChangeEvent` as parameter;
 * @prop `checked`[boolean] - the default state of the switch, Default value: `false`;
 * @prop `type` [string: "switch-primary" | "switch-secondary"] - the type of the switch. Default value: `switch-primary`;
 */
function Switch({
  handleChange,
  value,
  checked = false,
  type = "switch-primary",
}: SwitchProps) {
  return (
    <Checkbox
      handleChange={handleChange}
      value={value}
      checked={checked}
      styledAs="switch"
      SwitchStyles={SwitchStyles[type]}
    />
  );
}

export default Switch;
