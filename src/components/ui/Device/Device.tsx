import {
  StyledDevice,
  StyledDeviceIcon,
  StyledDeviceInfo,
} from "./Device.styles";

import Icon from "/src/assets/svgs/Icon";
import Typography from "/src/styles/Typography";

import { DeviceT } from "../../../types/DeviceT";

import { useDispatch } from "react-redux";

import { setSelectedDevice } from "/src/state/slices/devicesSlice";

type Props = {
  device: DeviceT;
};

function Device({ device }: Props) {
  const dispatch = useDispatch();

  function handleDeviceClick() {
    dispatch(setSelectedDevice(device));
  }

  return (
    <StyledDevice onClick={handleDeviceClick}>
      <StyledDeviceIcon>
        <Icon name="device" />
      </StyledDeviceIcon>

      <StyledDeviceInfo>
        <Typography tag="h2" tagStyle="heading2">
          {device.name}
        </Typography>

        <Typography tag="p" tagStyle="label3">
          {device.address}
        </Typography>
      </StyledDeviceInfo>
    </StyledDevice>
  );
}

export default Device;
