import { Outlet } from "react-router-dom";
import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { LoginContextProvider } from "./context/LoginContext";

function App() {
  return (
    <LoginContextProvider>
      <Navbar />
      <>
        <Outlet />
        <Footer />
      </>
    </LoginContextProvider>
  );
}

export default App;
