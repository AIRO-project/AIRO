import { useState, useEffect } from "react";

export interface Location {
  latitude: number | null;
  longitude: number | null;
  error: string | null;
}

const defaultLocation = {
  //center of Chisinau, Moldova
  latitude: 47.024801,
  longitude: 28.832526,
};

function useGeolocation(): Location {
  const [coordinates, setCoordinates] = useState<Location>({
    latitude: null,
    longitude: null,
    error: null,
  });

  useEffect(() => {
    const handleSuccess = (position: GeolocationPosition) => {
      setCoordinates({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
      });
    };

    const handleError = (error: GeolocationPositionError) => {
      setCoordinates({
        latitude: defaultLocation.latitude,
        longitude: defaultLocation.longitude,
        error: error.message || "Error retrieving location",
      });
    };

    const options: PositionOptions = {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: Infinity,
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        handleSuccess,
        handleError,
        options
      );
    } else {
      setCoordinates({
        latitude: null,
        longitude: null,
        error: "Geolocation is not supported by your browser",
      });
    }
  }, []);

  return coordinates;
}

export default useGeolocation;
