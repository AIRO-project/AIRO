import { useDispatch } from "react-redux";

import Button from "../../ui/Button";
import { StyledRemoveDeviceModal } from "./RemoveDevice.styles";

import { FormButtons } from "/src/forms/DeviceForm/DeviceForm.styles";
import { showNotification } from "/src/state/slices/notificationSlice";
import Typography from "/src/styles/Typography";
import { DeviceT } from "/src/types/DeviceT";
import { deleteDevice } from "/src/state/slices/devicesSlice";

type Props = {
  device: DeviceT;
  toggleModal: () => void;
  toggleMenu: () => void;
};

function RemoveDevice(props: Props) {
  const dispatch = useDispatch();

  async function handleRemove() {
    try {
      await dispatch(deleteDevice(props.device.id));
      props.toggleModal();

      dispatch(
        showNotification({
          type: "success",
          message: "Device Removed Successfully!",
        })
      );
    } catch (err) {
      dispatch(
        showNotification({
          type: "error",
          message: (err as Error).message,
        })
      );
    }
  }

  function handleCancel() {
    props.toggleModal();
    props.toggleMenu();
  }

  return (
    <StyledRemoveDeviceModal>
      <Typography tag="h1" tagStyle="subtitle1">
        Are you sure you want to remove this device?
      </Typography>
      <FormButtons>
        <Button width="15rem" onClick={handleRemove}>
          Remove
        </Button>
        <Button onClick={handleCancel} type="outline" width="15rem">
          Cancel
        </Button>
      </FormButtons>
    </StyledRemoveDeviceModal>
  );
}

export default RemoveDevice;
