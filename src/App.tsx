import useAuthentication from "./hooks/useAuthentication";
import Main from "./layout/Main";
import Navbar from "./layout/Navbar/Navbar";

function App() {
  const { authStatus } = useAuthentication();

  return (
    authStatus !== "pending" && (
      <>
        <Navbar />
        <Main />
      </>
    )
  );
}

export default App;
