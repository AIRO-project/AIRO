import { KeyboardEvent, RefObject } from "react";

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
