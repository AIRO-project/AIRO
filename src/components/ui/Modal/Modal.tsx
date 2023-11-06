import { ReactNode } from "react";

import {
  StyledModalButton,
  StyledModalContent,
  StyledModalOverlay,
} from "./Modal.styles";
import Icon from "../../../assets/svgs/Icon";

type Props = {
  toggleModal: () => void;
  children: ReactNode;
};

/**
 * @prop `toggleModal`[Function] - the modal closing function;
 * @prop `children` [ReactNode] - `the modal content`;
 */

function Modal({ toggleModal, children }: Props) {
  return (
    <StyledModalOverlay onClick={toggleModal}>
      <StyledModalContent onClick={(e) => e.stopPropagation()}>
        {children}

        <StyledModalButton onClick={toggleModal}>
          <Icon
            name="close"
            width="1.6rem"
            hover="fill: var(--color-grey-light-1);"
          />
        </StyledModalButton>
      </StyledModalContent>
    </StyledModalOverlay>
  );
}

export default Modal;
