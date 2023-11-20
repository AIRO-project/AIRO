import { useSelector, useDispatch } from "react-redux";

import Device from "../../ui/Device/Device";
import User from "../../ui/User";
import {
  AccountButton,
  AccountLink,
  StyledAccountView,
  StyledAddNewButton,
  StyledButtonGroup,
  StyledDevicesList,
} from "./AccountView.styles";

import Icon from "/src/assets/svgs/Icon";
import Typography from "/src/styles/Typography";
import { logout, selectUser } from "/src/state/slices/userSlice";

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

function AccountView() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <StyledAccountView>
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
        <AccountLink href="https://gdpr-info.eu/" target="_blank">
          <AccountButton>
            <Icon name="privacy" height="2.4rem" width="2.4rem" />
            <Typography tag="p" tagStyle="subtitle4">
              Privacy
            </Typography>
          </AccountButton>
        </AccountLink>

        <AccountButton onClick={() => dispatch(logout())}>
          <Icon name="sign-out" height="2.4rem" width="2.4rem" />
          <Typography tag="p" tagStyle="subtitle4">
            Sign Out
          </Typography>
        </AccountButton>
      </StyledButtonGroup>
    </StyledAccountView>
  );
}

export default AccountView;
