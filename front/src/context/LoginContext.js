import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginContext = createContext({
  userLogged: null,
  handleLogin: () => {},
  logout: () => {},
  errorMessage: "",
});

export const useLoginContext = () => {
  return useContext(LoginContext);
};

export function LoginContextProvider({ children }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    surname: "",
    id: "",
    age: "",
  });
  const navigate = useNavigate();

  function handleLogin(e, user) {
    e.preventDefault();
    async function fetchData() {
      const response = await fetch(`http://localhost:3001/login`, {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          password: user.password,
        }),
      });
      const json = await response.json();
      if ("error" in json) {
        setErrorMessage(true);
      } else {
        console.log({ json });
        setUser(json);
        navigate("/index-menu");
      }
    }
    fetchData();
  }

  function logout() {
    setUser(null);
  }

  const value = {
    userLogged: user,
    handleLogin,
    logout,
    errorMessage,
  };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
}
