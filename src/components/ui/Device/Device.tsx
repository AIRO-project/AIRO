import {
  StyledDevice,
  StyledDeviceIcon,
  StyledDeviceInfo,
} from "./Device.styles";

import Icon from "/src/assets/svgs/Icon";
import Typography from "/src/styles/Typography";

type Props = {
  type: string;
  name: string;
  address: string;
};

function Device({ type, name, address }: Props) {
  return (
    <StyledDevice>
      <StyledDeviceIcon>
        <Icon name={type === "device" ? "device" : "gateway"} />
      </StyledDeviceIcon>

      <StyledDeviceInfo>
        <Typography tag="h2" tagStyle="heading2">
          {name}
        </Typography>

        <Typography tag="p" tagStyle="label3">
          {address}
        </Typography>
      </StyledDeviceInfo>
    </StyledDevice>
  );
}

export default Device;
