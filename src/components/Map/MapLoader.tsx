import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectSidePanelIsOpen } from "/src/state/slices/sidePanelSlice";

import Loader from "../ui/Loader";

const LoaderContainer = styled.div<{ $isOpen: boolean }>`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: ${({ $isOpen }) => ($isOpen ? "calc((100vw - 36rem) / 2)" : "50%")};
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
`;

function MapLoader() {
  const isOpen = useSelector(selectSidePanelIsOpen);

  return (
    <LoaderContainer $isOpen={isOpen}>
      <Loader />
    </LoaderContainer>
  );
}

export default MapLoader;
