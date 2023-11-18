import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Device from "/src/components/ui/Device/Device";
import User from "/src/components/ui/User";
import Modal from "/src/components/ui/Modal/Modal";

import {
  AccountButton,
  AccountLink,
  StyledAccountView,
  StyledAddNewButton,
  StyledButtonGroup,
  StyledDevicesList,
} from "./AccountView.styles";

import Icon from "/src/assets/svgs/Icon";
import { handleSignOut } from "/src/auth/handleSignOut";
import { logout, selectUser } from "/src/state/slices/userSlice";
import Typography from "/src/styles/Typography";
import DeviceForm from "/src/forms/DeviceForm/DeviceForm";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  function toggleModal() {
    setIsModalOpen((prev) => !prev);
  }

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

      <StyledAddNewButton onClick={toggleModal}>
        <Typography tag="p" tagStyle="subtitle1">
          + Add new
        </Typography>
      </StyledAddNewButton>

      {isModalOpen && (
        <Modal closeModal={toggleModal}>
          <DeviceForm type="create" closeForm={toggleModal} />
        </Modal>
      )}

      <StyledButtonGroup>
        <AccountLink href="https://gdpr-info.eu/" target="_blank">
          <AccountButton>
            <Icon name="privacy" height="2.4rem" width="2.4rem" />
            <Typography tag="p" tagStyle="subtitle4">
              Privacy
            </Typography>
          </AccountButton>
        </AccountLink>

        <AccountButton
          onClick={() => {
            handleSignOut();
            dispatch(logout());
          }}
        >
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
