import { useEffect } from "react";
import { styled } from "styled-components";

import Tab from "./Tab";
import { ToggleTabsProps } from "./types";

const Container = styled.div<{ $width: string }>`
  width: ${({ $width }) => $width};
  display: inline-flex;
  gap: 0.2rem;
`;

/**
 * @prop `name` [string] - the name of the radio inputs;
 * @prop `tabs` [array: {value: string, label: string}[]] - the ToggleTabs's component tabs;
 * @prop `width` [string: any valid `css` width unit] - the width of the ToggleTab. Default value: `100%`;
 * @prop `currentTab` [string: useState's state] - the state where the selected tab's value should be kept in;
 * @prop `setTab` [function: useState's setState function] - the setState function of the option state;
 * @prop `defaultTab` [number] - the index of the tab that should be set as selected by default. Default value: 0.
 *
 */
function ToggleTabs({
  tabs,
  currentTab,
  setTab,
  defaultTab = 0,
  width = "100%",
}: ToggleTabsProps) {
  function onTabClickHandler(value: string) {
    setTab(value);
  }

  useEffect(() => {
    setTab(tabs[defaultTab].value);
  }, [defaultTab, tabs, setTab]);

  return (
    <Container $width={width}>
      {tabs.map((tab, index) => (
        <Tab
          tab={tab}
          key={index}
          checked={tab.value === currentTab}
          onClick={onTabClickHandler}
        />
      ))}
    </Container>
  );
}

export default ToggleTabs;
