import { createContext, useState, useContext } from "react";

const AuthContext = createContext({
  auth: {},
  login: () => {}, // funcion vacia para llenar despues con la funcion login, logines es el state, donde en ()entrara el parametro user y en el objeto a user.mail y user.password
  errorMessage: "", //string vacio porque necesitamos una clave para darle valor luego con el mensaje puesto en setErrorMessage, ya que errorMessage es state
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
    name: "",
    surname: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  //   function login(user) {
  //     if (user.email === "pepe@mail.com" && user.password === "1234") {
  //       setAuth(user);
  //     } else {
  //       setErrorMessage("Error a introducir credenciales!!");
  //     }
  //   }

  function login(user) {
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
        setAuth(user);
      }
    }
    console.log(auth);

    fetchData();
  }

  const value = {
    auth,
    login,
    errorMessage,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
