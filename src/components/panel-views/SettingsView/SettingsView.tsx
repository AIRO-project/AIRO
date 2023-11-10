import Device from "../../ui/Device/Device";
import User from "../../ui/User";
import {
  SettingsButton,
  StyledAddNewButton,
  StyledButtonGroup,
  StyledDevicesList,
  StyledSettingsView,
} from "./SettingsView.styles";

import Icon from "/src/assets/svgs/Icon";
import Typography from "/src/styles/Typography";

const devices = [
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
  return (
    <StyledSettingsView>
      <Typography tag="h1" tagStyle="heading1">
        Settings
      </Typography>

      <User
        type="info"
        name="Galina Schshirska"
        email="@gschchirska"
        imgSrc="https://an-talla.co.uk/wp-content/uploads/2022/09/Santa-social-Edited.png"
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

        <SettingsButton>
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
