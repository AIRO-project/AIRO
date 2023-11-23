import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  FormButtons,
  FormFlex,
  FormInputs,
  FormLabel,
  FormLocationButton,
  StyledDeviceForm,
} from "./DeviceForm.styles";

import Button from "/src/components/ui/Button";
import Typography from "/src/styles/Typography";
import Input from "/src/components/form/Input/Input";
import useGeolocation from "/src/hooks/useGeolocation";
import Icon from "/src/assets/svgs/Icon";
import SearchLocation from "/src/components/form/SearchLocation/SearchLocation";
import { getAddressFromCoords, getAirQualityData } from "/src/utils/helpers";
import { showNotification } from "/src/state/slices/notificationSlice";
import {
  addDevice,
  editDevice,
  setSelectedDevice,
} from "/src/state/slices/devicesSlice";
import { selectUser } from "/src/state/slices/userSlice";
import { DeviceT } from "/src/types/DeviceT";
import Loader from "/src/components/ui/Loader";

type Props = {
  type: "create" | "edit";
  closeForm: () => void;
  device?: DeviceT;
  toggleMenu?: () => void;
};

export type Coordinates = {
  lat: number;
  lng: number;
};

function DeviceForm(props: Props) {
  const [name, setName] = useState(props.device?.name || "");
  const [description, setDescription] = useState(
    props.device?.description || ""
  );
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState<Coordinates>();
  const [loading, setLoading] = useState(false);

  const user = useSelector(selectUser);
  const coords = useGeolocation();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchAddress() {
      if (coords.latitude && coords.longitude) {
        const result = await getAddressFromCoords(coords);

        if (props.type === "edit") {
          setCoordinates(props.device!.coordinates);
          setLocation(props.device!.address);
        }
        setAddress(result);
      }
    }
    fetchAddress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coords]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      setLoading(true);

      if (coordinates!.lng === 0 && coordinates!.lat === 0) {
        alert("Invalid Address");
        return;
      }

      const data = await getAirQualityData(coordinates!);

      const metrics = { ...data.list[0].components, ...data.list[0].main };
      const device = {
        description,
        name,
        coordinates,
        address: location,
        user: user.userEmail,
        metrics,
      };

      props.type === "edit"
        ? await dispatch(
            editDevice({ id: props.device!.id, updatedDevice: device })
          )
        : await dispatch(addDevice(device));

      props.toggleMenu && props.toggleMenu();
      props.closeForm();
      dispatch(setSelectedDevice(device));

      dispatch(
        showNotification({
          type: "success",
          message: `The device was ${
            props.type === "edit" ? "edited" : "created"
          } successfully!`,
        })
      );
    } catch (err) {
      dispatch(
        showNotification({
          type: "error",
          message: (err as Error).message,
        })
      );
    } finally {
      setLoading(false);
    }
  }

  function handleLocationClick() {
    setLocation(address);
    setAddress(address);
    setCoordinates({ lat: coords.latitude!, lng: coords.longitude! });
  }

  return (
    <StyledDeviceForm onSubmit={handleSubmit}>
      <Typography tag="h1" tagStyle="heading1">
        {props.type === "create" ? "Add Device" : "Edit Device"}
      </Typography>

      <FormInputs>
        <FormLabel htmlFor="name">
          <Typography tagStyle="subtitle4">Device's Name:</Typography>
          <Input
            placeholder="Type Name..."
            type="default"
            inputValue={name}
            setInputValue={setName}
          />
        </FormLabel>

        <FormLabel htmlFor="description">
          <Typography tagStyle="subtitle4">Description:</Typography>
          <Input
            placeholder="Type Description..."
            type="default"
            inputValue={description}
            setInputValue={setDescription}
          />
        </FormLabel>

        <FormLabel htmlFor="location">
          <Typography tagStyle="subtitle4">Location:</Typography>

          <FormFlex>
            <SearchLocation
              value={location}
              setValue={setLocation}
              setCoordinates={setCoordinates}
            />
            <FormLocationButton onClick={handleLocationClick}>
              <Icon name="location" width="2rem" height="2rem" />
            </FormLocationButton>
          </FormFlex>
        </FormLabel>
      </FormInputs>

      <FormButtons>
        <Button width="20rem" disabled={loading}>
          {loading ? (
            <Loader size="1.8rem" />
          ) : props.type === "create" ? (
            "Add Device"
          ) : (
            "Edit Device"
          )}
        </Button>
        <Button
          onClick={() => {
            props.toggleMenu && props.toggleMenu();
            props.closeForm();
          }}
          type="outline"
          width="20rem"
        >
          Cancel
        </Button>
      </FormButtons>
    </StyledDeviceForm>
  );
}

export default DeviceForm;
