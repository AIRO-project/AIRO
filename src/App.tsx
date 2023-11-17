import Notification from "./components/ui/Notification/Notification";
import useAuthentication from "./hooks/useAuthentication";
import Main from "./layout/Main";
import Navbar from "./layout/Navbar/Navbar";

function App() {
  useAuthentication();

  return (
    <>
      <Navbar />
      <Main />
      <Notification />
    </>
  );
}

export default App;
