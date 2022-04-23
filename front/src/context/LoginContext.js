import { createContext, useContext, useState } from "react";

const LoginContext = createContext({
  userLogged: null,
  login: () => {},
  logout: () => {},
  errorMessage: "",
});

export const useLoginContext = () => {
  return useContext(LoginContext);
};

export function LoginContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  function login(user) {
    if (user.email === "pepe@mail.com" && user.password === "1234") {
      setUser(user);
      setErrorMessage("");
    } else {
      setErrorMessage("El email o la pasword no son correctos");
    }
  }

  function logout() {
    setUser(null);
  }

  const value = {
    userLogged: user,
    login,
    logout,
    errorMessage,
  };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
}
