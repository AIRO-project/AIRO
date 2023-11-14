import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import useGeolocation from "/src/hooks/useGeolocation";

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
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-maps",
    googleMapsApiKey: import.meta.env.VITE_APP_MAP_API_KEY,
  });

  const userLocation = useGeolocation();

  return isLoaded && userLocation.latitude && userLocation.longitude ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat: userLocation.latitude, lng: userLocation.longitude }}
      zoom={15}
      options={mapOptions}
    ></GoogleMap>
  ) : (
    <></>
  );
}

export default Map;
