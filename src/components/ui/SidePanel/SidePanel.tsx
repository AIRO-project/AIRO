import { ReactNode } from "react";

import { StyledPanelButton, StyledSidePanel } from "./SidePanel.styles";
import Icon from "../../../assets/svgs/Icon";

type Props = {
  children: ReactNode;
  isOpen: boolean;
  closePanel: () => void;
};

function SidePanel(props: Props) {
  return (
    <StyledSidePanel $isOpen={props.isOpen}>
      {props.children}
      
      <StyledPanelButton onClick={props.closePanel}>
        <Icon
          name="close"
          width="1.6rem"
          hover="fill: var(--color-grey-light-1);"
        />
      </StyledPanelButton>
    </StyledSidePanel>
  );
}

export default SidePanel;
