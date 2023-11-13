import Icon from "/src/assets/svgs/Icon";

import {
  StyledIcon,
  StyledNotification,
  StyledStatus,
} from "./Notification.styles";

import Typography from "/src/styles/Typography";

type NotificationVariants = "success" | "error";
type NotificationProps = {
  type: NotificationVariants;
  message: string;
};

/**
 * @prop `type` [string : "success" | "error"] - type of notification;
 * @prop `message` [string] - message of the notification;
 */

function Notification({ type = "success", message = "" }: NotificationProps) {
  return (
    <StyledNotification $isError={type === "error"}>
      <StyledStatus>
        <StyledIcon>
          <Icon
            name={type === "success" ? "tick" : "close"}
            color={
              type === "success" ? "var(--color-primary)" : "var(--color-error)"
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
    </StyledNotification>
  );
}
export default Notification;
