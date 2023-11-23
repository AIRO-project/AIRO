import {
  GoogleMap,
  Libraries,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useState } from "react";

import useGeolocation from "/src/hooks/useGeolocation";

import MapControls from "./Controls";
import MapLoader from "./MapLoader";
import mapStyles from "./map-styles";

import { useSelector } from "react-redux";

import { selectDevices } from "/src/state/slices/devicesSlice";
import { greenMarker, orangeMarker, redMarker } from "/src/assets/svgs/markers";

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
  const { devices } = useSelector(selectDevices);
  const { selectedDevice } = useSelector(selectDevices);

  function returnMarkerColor(aqi: number) {
    if (aqi < 3) {
      return greenMarker;
    } else if (aqi >= 3 && aqi < 5) {
      return orangeMarker;
    } else {
      return redMarker;
    }
  }

  return canRenderMap ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={
        selectedDevice ? { ...selectedDevice?.coordinates } : { lat, lng }
      }
      zoom={15}
      options={mapOptions}
    >
      {devices.map((device) => (
        <Marker
          key={device.id}
          position={device.coordinates}
          icon={returnMarkerColor(device.metrics.aqi)}
        />
      ))}
      <MapControls />
    </GoogleMap>
  ) : (
    <MapLoader />
  );
}

export default Map;
