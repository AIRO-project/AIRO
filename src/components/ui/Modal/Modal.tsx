import { ReactNode } from "react";
import { createPortal } from "react-dom";

import {
  StyledModalButton,
  StyledModalContent,
  StyledModalOverlay,
} from "./Modal.styles";
import Icon from "../../../assets/svgs/Icon";

type Props = {
  closeModal: () => void;
  children: ReactNode;
};

/**
 * @prop `toggleModal`[Function] - the modal closing function;
 * @prop `children` [ReactNode] - `the modal content`;
 */

function Modal({ closeModal, children }: Props) {
  return createPortal(
    <StyledModalOverlay onClick={closeModal}>
      <StyledModalContent onClick={(e) => e.stopPropagation()}>
        {children}

        <StyledModalButton onClick={closeModal}>
          <Icon
            name="close"
            width="1.6rem"
            hover="fill: var(--color-grey-light-1);"
          />
        </StyledModalButton>
      </StyledModalContent>
    </StyledModalOverlay>,
    document.getElementById("root")!
  );
}

export default Modal;
