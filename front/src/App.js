import { Outlet } from "react-router-dom";
import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <AuthContextProvider>
      <>
        <Outlet />
      </>
    </AuthContextProvider>
  );
}

export default App;
