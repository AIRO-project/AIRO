import { useState, useEffect } from "react";

export interface Location {
  latitude: number | null;
  longitude: number | null;
  error: string | null;
}

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
        latitude: null,
        longitude: null,
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
