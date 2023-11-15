import { useSelector, useDispatch } from "react-redux";

import { StyledPanelButton, StyledSidePanel } from "./SidePanel.styles";
import Icon from "../../../assets/svgs/Icon";
import { toggleSidePanel } from "../../../state/slices/sidePanelSlice";
import AccountView from "../../panel-views/AccountView/AccountView";
import SettingsView from "../../panel-views/SeettingsView/SettingsView";

import { RootState } from "/src/state/store";

function SidePanel() {
  const isOpen = useSelector((state: RootState) => state.sidePanel.isOpen);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleSidePanel());
  };

  return (
    <StyledSidePanel $isOpen={isOpen}>
      {user.isLoggedIn ? <AccountView /> : <SettingsView />}

      <StyledPanelButton onClick={handleClose}>
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
