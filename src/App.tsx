import styled from "styled-components";

import Navbar from "./components/ui/Navbar/Navbar";
import SidePanel from "./components/ui/SidePanel/SidePanel";

const StyledMap = styled.div`
  position: relative;
  height: calc(100vh - 6rem);
  background-color: grey;
`;

function App() {
  return (
    <>
      <Navbar />

      <StyledMap>
        <SidePanel />
      </StyledMap>
    </>
  );
}

export default App;
