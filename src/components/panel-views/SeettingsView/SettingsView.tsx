import { useState } from "react";

import { StyledAboutButton, StyledSettingsView } from "./SettingsView.styles";

import Typography from "/src/styles/Typography";

import SignIn from "../../../assets/svgs/gradient colored/sign-in.svg";
import About from "../../modals/About/About";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal/Modal";

import { handleSignIn } from "/src/auth/handleSignIn";

function SettingsView() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen((prev) => !prev);
  }

  return (
    <StyledSettingsView>
      <Typography tag="h1" tagStyle="heading1">
        Settings
      </Typography>
      <img src={SignIn} alt="sign in image" />

      <Typography>
        Please Log In via Gmail SSO account to have possibility to manage
        personal devices and recieve notifications.
      </Typography>

      <Button width="25.8rem" onClick={handleSignIn}>
        Sign In
      </Button>

      <StyledAboutButton onClick={toggleModal}>
        <Typography tag="span" tagStyle="subtitle1">
          About this application &rarr;
        </Typography>
      </StyledAboutButton>

      {isModalOpen && (
        <Modal closeModal={toggleModal}>
          <About buttonHandler={toggleModal} />
        </Modal>
      )}
    </StyledSettingsView>
  );
}

export default SettingsView;
