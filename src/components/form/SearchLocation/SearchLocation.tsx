import { ChangeEvent, useRef } from "react";
import { StandaloneSearchBox } from "@react-google-maps/api";

import { StyledInput } from "./SearchLocation.styles";

import { Coordinates } from "/src/forms/DeviceForm/DeviceForm";

type Props = {
  value: string;
  setValue: (place: string) => void;
  setCoordinates: (coords: Coordinates) => void;
};

function SearchLocation(props: Props) {
  const searchBox = useRef<google.maps.places.SearchBox>();

  function handleSelect() {
    const places = searchBox.current!.getPlaces();
    const placeCoords = places[0].geometry!.location;
    const selectedPlace = places[0].formatted_address;

    props.setValue(selectedPlace!);
    props.setCoordinates({
      lat: placeCoords.lat(),
      lng: placeCoords.lng(),
    });
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    props.setValue(e.target.value);
    props.setCoordinates({ lat: 0, lng: 0 });
  }

  return (
    <StandaloneSearchBox
      onLoad={(ref) => (searchBox.current = ref)}
      onPlacesChanged={handleSelect}
    >
      <StyledInput
        type="text"
        value={props.value}
        placeholder="Search for a location..."
        onChange={handleChange}
        required
      />
    </StandaloneSearchBox>
  );
}

export default SearchLocation;
