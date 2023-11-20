import { KeyboardEvent, RefObject } from "react";

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
