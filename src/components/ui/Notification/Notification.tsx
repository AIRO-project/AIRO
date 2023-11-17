import Icon from "/src/assets/svgs/Icon";

import {
  StyledIcon,
  StyledNotification,
  StyledStatus,
} from "./Notification.styles";

import Typography from "/src/styles/Typography";

import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  clearNotification,
  selectNotification,
} from "/src/state/slices/notificationSlice";

import { useEffect } from "react";

/**
 * @prop `type` [string : "success" | "error"] - type of notification;
 * @prop `message` [string] - message of the notification;
 */

function Notification() {
  const { type, message } = useSelector(selectNotification);
  const dispatch = useDispatch();

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => dispatch(clearNotification()), 4000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [message, dispatch]);

  return (
    !!message &&
    createPortal(
      <StyledNotification $isError={type === "error"}>
        <StyledStatus>
          <StyledIcon>
            <Icon
              name={type === "success" ? "tick" : "close"}
              color={
                type === "success"
                  ? "var(--color-primary)"
                  : "var(--color-error)"
              }
              width="1.2rem"
              height="1.2rem"
            />
          </StyledIcon>
          <Typography tag="h3" tagStyle="subtitle1">
            {type === "success" ? "Success!" : "Oops!"}
          </Typography>
        </StyledStatus>

        <Typography tag="span" tagStyle="subtitle3">
          {message}
        </Typography>
      </StyledNotification>,
      document.getElementById("root")!
    )
  );
}
export default Notification;
