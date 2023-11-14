import useAuthentication from "./hooks/useAuthentication";
import Main from "./layout/Main";
import Navbar from "./layout/Navbar/Navbar";

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
