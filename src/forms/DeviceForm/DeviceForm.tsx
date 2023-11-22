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
import { addDevice, setSelectedDevice } from "/src/state/slices/devicesSlice";
import { selectUser } from "/src/state/slices/userSlice";

type Props = {
  type: "create" | "edit";
  closeForm: () => void;
};

export type Coordinates = {
  lat: number;
  lng: number;
};

function DeviceForm(props: Props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState<Coordinates>();

  const user = useSelector(selectUser);
  const coords = useGeolocation();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchAddress() {
      if (coords.latitude && coords.longitude) {
        const result = await getAddressFromCoords(coords);
        setAddress(result);
      }
    }
    fetchAddress();
  }, [coords]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();

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

      dispatch(addDevice(device));
      props.closeForm();
      dispatch(setSelectedDevice(device));

      dispatch(
        showNotification({
          type: "success",
          message: "The device was created successfully!",
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

  function handleLocationClick() {
    setLocation(address);
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
        <Button width="20rem">
          {props.type === "create" ? "Add Device" : "Edit Device"}
        </Button>
        <Button onClick={props.closeForm} type="outline" width="20rem">
          Cancel
        </Button>
      </FormButtons>
    </StyledDeviceForm>
  );
}

export default DeviceForm;
