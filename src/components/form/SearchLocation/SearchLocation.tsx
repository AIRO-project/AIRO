import { StandaloneSearchBox } from "@react-google-maps/api";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";

import typography from "/src/styles/Typography/typography";

type Coordinates = {
  lat: number;
  lng: number;
};

type Props = {
  value: string;
  setValue: (place: string) => void;
  setCoordinates: (coords: Coordinates) => void;
};

const StyledInput = styled.input`
  ${typography.subtitle4}
  color: var(--color-white);
  border: none;
  outline: none;
  background-color: var(--color-grey-dark-2);
  border-radius: 0.2rem;
  width: 40rem;
  padding: 0.6rem 1.2rem;

  &:hover,
  &:focus {
    border: 2px solid var(--color-primary);
    padding: calc(0.6rem - 2px) calc(1.2rem - 2px);
  }
  &::placeholder {
    color: var(--color-white);
    opacity: 0.6;
  }
`;

function SearchLocation(props: Props) {
  const [searchBox, setSearchBox] = useState<google.maps.places.SearchBox>();

  function handleSelect() {
    const places = searchBox!.getPlaces();
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
      onLoad={(ref) => setSearchBox(ref)}
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
