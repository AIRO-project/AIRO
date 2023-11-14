import { styled } from "styled-components";

import Map from "/src/components/Map";
import SidePanel from "/src/components/ui/SidePanel/SidePanel";

const StyledMap = styled.main`
  position: relative;
  height: calc(100vh - 6rem);
  background-color: var(--color-black);
`;

function Main() {
  return (
    <StyledMap>
      <Map />
      <SidePanel />
    </StyledMap>
  );
}

export default Main;
