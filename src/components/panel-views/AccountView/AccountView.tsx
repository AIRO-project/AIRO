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
import useGetDevices from "/src/hooks/useGetDevices";

function AccountView() {
  const user = useSelector(selectUser);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  function toggleModal() {
    setIsModalOpen((prev) => !prev);
  }

  const { devices } = useGetDevices();

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
        {devices
          ?.filter((device) => device.user === user.userEmail)
          .map((device, idx) => {
            return <Device key={idx} device={device} />;
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
