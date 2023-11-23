import { useState } from "react";

import Icon from "/src/assets/svgs/Icon";
import Typography from "/src/styles/Typography";
import DeviceForm from "/src/forms/DeviceForm/DeviceForm";
import { DeviceT } from "/src/types/DeviceT";

import { MenuButton, StyledMenu } from "./Menu.styles";
import RemoveDevice from "../../modals/RemoveDevice/RemoveDevice";
import Modal from "../Modal/Modal";

type ModalType = "remove" | "edit";

type Props = {
  toggleMenu: () => void;
  device: DeviceT;
};

function Menu(props: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>();

  function toggleModal() {
    setIsModalOpen((prev) => !prev);
  }

  function handleEditButton() {
    setModalType("edit");
    toggleModal();
  }

  function handleRemoveButton() {
    setModalType("remove");
    toggleModal();
  }

  return (
    <StyledMenu>
      <MenuButton onClick={handleEditButton}>
        <Icon name="edit" />
        <Typography tag="p" tagStyle="label3">
          Edit
        </Typography>
      </MenuButton>

      <MenuButton onClick={handleRemoveButton}>
        <Icon name="delete" />
        <Typography tag="p" tagStyle="label3">
          Remove
        </Typography>
      </MenuButton>

      {isModalOpen && (
        <Modal
          closeModal={() => {
            toggleModal();
            props.toggleMenu();
          }}
        >
          {modalType === "edit" ? (
            <DeviceForm
              type="edit"
              closeForm={toggleModal}
              device={props.device}
              toggleMenu={props.toggleMenu}
            />
          ) : (
            <RemoveDevice
              device={props.device}
              toggleModal={toggleModal}
              toggleMenu={props.toggleMenu}
            />
          )}
        </Modal>
      )}
    </StyledMenu>
  );
}

export default Menu;
