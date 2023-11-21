import { KeyboardEvent, RefObject } from "react";

import { Coordinates } from "../forms/DeviceForm/DeviceForm";
import { Location } from "../hooks/useGeolocation";

/**
 * function to click the passed Element on `Space` or `Enter` Keypress
 * @param e - The keyboard event object.
 * @param elementRef - A reference to the HTML element to be clicked when the space or enter key is pressed.
 */
export function clickElOnKeyPress(
  e: KeyboardEvent<HTMLLabelElement>,
  elementRef: RefObject<HTMLElement> | null
) {
  if (e.code === "Space" || e.code === "Enter") {
    elementRef?.current?.click();
  }
}

export async function getAddressFromCoords(coords: Location) {
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
    return result;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return;
  }
}

/**
 * Fetches air quality data from the Openweathermap AirQuality API based on coordinates.
 * @param {Coordinates} coords - The coordinates (latitude and longitude) for which weather data is requested.
 * @returns {Promise<object>} - A promise that resolves to the fetched weather data as an object.
 * @throws {Error} - Throws an error if coordinates are invalid or if there's a failure to fetch weather data.
 */

export async function getAirQualityData(coords: Coordinates) {
  if (!coords || (!coords.lat && !coords.lng)) {
    throw new Error("Invalid coordinates provided");
  }

  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/air_pollution?lat=${
      coords!.lat
    }&lon=${coords!.lng}&appid=${import.meta.env.VITE_APP_WEATHER_API_KEY}`
  );

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Failed to fetch air data");
  }
}
