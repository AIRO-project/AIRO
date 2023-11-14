import Navbar from "./components/layout/Navbar/";
import SidePanel from "./components/ui/SidePanel/SidePanel";
import useAuthentication from "./hooks/useAuthentication";
import Main from "./layout/Main";

function App() {
  useAuthentication();
  return (
    <>
      <Navbar />
      <Main />
    </>
  );
}

export default App;
