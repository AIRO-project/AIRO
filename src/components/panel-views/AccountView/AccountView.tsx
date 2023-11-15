import { useSelector } from "react-redux";

import Device from "../../ui/Device/Device";
import User from "../../ui/User";
import {
  SettingsButton,
  StyledAddNewButton,
  StyledButtonGroup,
  StyledDevicesList,
  StyledSettingsView,
} from "./AccountView.styles";

import Icon from "/src/assets/svgs/Icon";
import { handleSignOut } from "/src/auth/handleSignOut";
import Typography from "/src/styles/Typography";
import { RootState } from "/src/state/store";

type Device = {
  type: "gateway" | "device";
  name: string;
  address: string;
};

const devices: Device[] = [
  {
    type: "gateway",
    name: "Gateway 1",
    address: "Chisinau, Moldova",
  },
  {
    type: "device",
    name: "Device 1",
    address: "Hincesti, Moldova",
  },
  {
    type: "device",
    name: "Device 2",
    address: "Gura Galbenei, Moldova",
  },
];

function SettingsView() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <StyledSettingsView>
      <Typography tag="h1" tagStyle="heading1">
        Account
      </Typography>

      <User
        type="info"
        name={user.userName!}
        email={user.userEmail!}
        imgSrc={user.userImg!}
      />

      <StyledDevicesList>
        {devices.map((device, idx) => {
          return (
            <Device
              key={idx}
              name={device.name}
              address={device.address}
              type={device.type}
            />
          );
        })}
      </StyledDevicesList>

      <StyledAddNewButton>
        <Typography tag="p" tagStyle="subtitle1">
          + Add new
        </Typography>
      </StyledAddNewButton>

      <StyledButtonGroup>
        <SettingsButton>
          <Icon name="privacy" height="2.4rem" width="2.4rem" />
          <Typography tag="p" tagStyle="subtitle4">
            Privacy
          </Typography>
        </SettingsButton>

        <SettingsButton onClick={handleSignOut}>
          <Icon name="sign-out" height="2.4rem" width="2.4rem" />
          <Typography tag="p" tagStyle="subtitle4">
            Sign Out
          </Typography>
        </SettingsButton>
      </StyledButtonGroup>
    </StyledSettingsView>
  );
}

export default SettingsView;
