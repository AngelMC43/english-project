import { createContext, useContext, useState, useEffect } from "react";
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
    avatar: "",
    email: "",
    password: "",
    name: "",
    surname: "",
    id: "",
    age: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedIn");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);

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

      window.localStorage.setItem("loggedIn", JSON.stringify(json));
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
    console.log("fn de logout");
    setUser(null);
    window.localStorage.removeItem("loggedIn");
    navigate("/");
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
