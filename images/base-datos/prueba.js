import { useState, useEffect } from "react";

const [user, setUser] = useState([]);


function App() {
 useEffect(function () {
  async function fetchApi() {
    const response = await fetch(`http://localhost:3003/allusers`, {
      mode: "cors",
    });
    const json = await response.json();
    setUser(json);
  }
  fetchApi();
}, []);

{for (let i = 0; i <= user.length - 1; i++) {
  console.log(user[i]);

}}
  
return (
  <h1>{user[i]}</h1>
)





/*

const arrayPaises = ["Bolivia", "Ecuador", "Francia", "Brasil", "Holanda"];
const arrayPrimos = [2, 3, 5, 7, 11, 13];
const arrayPersona = [
  {
    nombre: "Carlos",
    edad: 23,
  },
  {
    nombre: "Susana",
    edad: 33,
  },
  {
    nombre: "Pedro",
    edad: 28,
  },
];*/