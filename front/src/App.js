import { Outlet } from "react-router-dom";
import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <>
        <Outlet />
        <Footer />
      </>
    </AuthContextProvider>
  );
}

export default App;
