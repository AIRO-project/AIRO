import { GoogleMap, Libraries, useJsApiLoader } from "@react-google-maps/api";
import { useState } from "react";

import useGeolocation from "/src/hooks/useGeolocation";

import MapControls from "./Controls";
import mapStyles from "./map-styles";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const mapOptions = {
  styles: mapStyles,
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: false,
  zoomControl: false,
};

function Map() {
  const [libraries] = useState<Libraries>(["maps", "places"]);

  const { isLoaded } = useJsApiLoader({
    id: "google-maps",
    googleMapsApiKey: import.meta.env.VITE_APP_MAP_API_KEY,
    libraries,
  });
  const { longitude: lng, latitude: lat } = useGeolocation();

  const canRenderMap = isLoaded && lng && lat;

  return canRenderMap ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat, lng }}
      zoom={15}
      options={mapOptions}
    >
      <MapControls />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default Map;
