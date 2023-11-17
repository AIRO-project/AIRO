import { useState } from "react";

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

type Props = {
  type: "create" | "edit";
  closeForm: () => void;
};

type Coordinates = {
  lat: number;
  lng: number;
};

function DeviceForm(props: Props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState<Coordinates>();

  const coords = useGeolocation();
  address || locateUser();

  function locateUser() {
    if (coords.latitude) {
      getAddressFromCoords();
    }
  }

  async function getAddressFromCoords() {
    try {
      const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${
        coords.latitude
      },${coords.longitude}&key=${import.meta.env.VITE_APP_MAP_API_KEY}`;

      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      const result = data.results[0].formatted_address;
      setAddress(result);
      console.log(address);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (coordinates!.lng === 0 && coordinates!.lat === 0) {
      alert("Invalid Address");
      return;
    }
    props.closeForm();
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
