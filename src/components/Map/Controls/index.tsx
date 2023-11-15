import { useGoogleMap } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import { styled } from "styled-components";

import useGeolocation from "/src/hooks/useGeolocation";
import { RootState } from "/src/state/store";
import Icon from "/src/assets/svgs/Icon";
import Button from "/src/components/ui/Button";

const Controls = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  bottom: 3.6rem;
  right: 3.6rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${({ $isOpen }) => ($isOpen ? "-36rem" : "0")});
  gap: 2rem;
`;

const StyledButton = styled(Button)`
  border: none;
  width: 4rem;
  height: 4rem;
  box-shadow: var(--shadow-sm);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ZoomControls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

function MapControls() {
  const map = useGoogleMap();
  const sidePanelIsOpen = useSelector(
    (state: RootState) => state.sidePanel.isOpen
  );
  const { longitude: lng, latitude: lat } = useGeolocation();

  const handleZoomIn = () => {
    if (map) {
      const currentZoom = map.getZoom();
      map.setZoom(currentZoom + 1);
    }
  };

  const handleZoomOut = () => {
    if (map) {
      const currentZoom = map.getZoom();
      map.setZoom(currentZoom - 1);
    }
  };

  const handleCenterCurrLocation = () => {
    if (map && lng && lat) {
      map.panTo({ lat, lng });
    }
  };

  return (
    <Controls $isOpen={sidePanelIsOpen}>
      <ZoomControls>
        <StyledButton onClick={handleZoomOut}>
          <Icon name="zoom-out" />
        </StyledButton>
        <StyledButton onClick={handleZoomIn}>
          <Icon name="zoom-in" />
        </StyledButton>
      </ZoomControls>
      <StyledButton onClick={handleCenterCurrLocation}>
        <Icon name="locator" height="2.4rem" width="2.4rem" />
      </StyledButton>
    </Controls>
  );
}

export default MapControls;
