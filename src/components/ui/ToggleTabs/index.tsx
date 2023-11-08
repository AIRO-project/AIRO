import { ChangeEvent, useEffect } from "react";
import { styled } from "styled-components";

import Tab from "./Tab";
import { ToggleTabsProps } from "./types";

const Container = styled.form<{ $width: string }>`
  width: ${({ $width }) => $width};
  display: inline-flex;
  gap: 0.2rem;
`;

/**
 * @prop `name` [string] - the name of the radio inputs;
 * @prop `tabs` [array: {value: string, label: string}[]] - the ToggleTabs's component tabs;
 * @prop `width` [string: any valid `css` width unit] - the width of the ToggleTab. Default value: `100%`;
 * @prop `option` [string: useState's state] - the state where the selected option should be kept in;
 * @prop `seOption` [function: useState's setState function] - the setState function of the option state;
 * @prop `defaultOption` [number] - the index of the tab that should be set as selected by default. Default value: 1.
 *
 */
function ToggleTabs({
  name,
  tabs,
  option,
  setOption,
  defaultOption = 0,
  width = "100%",
}: ToggleTabsProps) {
  function handler(e: ChangeEvent<HTMLFormElement>) {
    setOption(e.target.value);
  }

  useEffect(() => {
    setOption(tabs[defaultOption].value);
  }, [defaultOption, tabs, setOption]);

  return (
    <Container $width={width} onChange={handler}>
      {tabs.map((tab, index) => (
        <Tab tab={tab} name={name} key={index} checked={tab.value === option} />
      ))}
    </Container>
  );
}

export default ToggleTabs;
