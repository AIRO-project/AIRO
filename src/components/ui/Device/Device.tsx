import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  StyledDevice,
  StyledDeviceIcon,
  StyledDeviceInfo,
  StyledMenuButton,
} from "./Device.styles";

import Icon from "/src/assets/svgs/Icon";
import Typography from "/src/styles/Typography";
import { setSelectedDevice } from "/src/state/slices/devicesSlice";

import { DeviceT } from "../../../types/DeviceT";
import Menu from "../Menu/Menu";

type Props = {
  device: DeviceT;
};

function Device({ device }: Props) {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleDeviceClick() {
    dispatch(setSelectedDevice(device));
  }

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <StyledDevice onClick={handleDeviceClick}>
      <StyledDeviceIcon>
        <Icon name="device" />
      </StyledDeviceIcon>

      <StyledDeviceInfo>
        <Typography tag="h2" tagStyle="heading2">
          {device.name.slice(0, 27)}
        </Typography>

        <Typography tag="p" tagStyle="label3">
          {device.address}
        </Typography>
      </StyledDeviceInfo>

      <StyledMenuButton onClick={toggleMenu}>
        <Icon name="menu" />
      </StyledMenuButton>

      {isMenuOpen && <Menu toggleMenu={toggleMenu} device={device} />}
    </StyledDevice>
  );
}

export default Device;
