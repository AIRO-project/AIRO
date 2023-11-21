import Notification from "./components/ui/Notification/Notification";
import useGetDevices from "./hooks/useGetDevices";
import Main from "./layout/Main";
import Navbar from "./layout/Navbar/Navbar";

function App() {
  useGetDevices();
  return (
    <>
      <Navbar />
      <Main />
      <Notification />
    </>
  );
}

export default App;
