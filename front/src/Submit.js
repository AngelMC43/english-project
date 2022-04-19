import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Submit() {
  const [users, setUsers] = useState([]);
  const [jump, setJump] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3001/allusers`, {
        mode: "cors",
      });
      const json = await response.json();
      console.log("1 esto trae json", json);
      setUsers(json);
      console.log("2 esto tiene users", users);
    }
    fetchData();
  }, []);

  const fallo = "Se han acabado los users";

  const handleJump = (e) => {
    if (jump < 6) {
      e.stopPropagation();
      e.preventDefault();
      setJump(jump + 1);
    } else {
      console.log(fallo);
    }
  };
  console.log("3 esto me da users", users);

  return (
    <>
      <h3>g</h3>
      {/*<div>
        <button onClick={(e) => handle(e)}>{users[jump].correct}</button>
        <button onClick={(e) => handle(e)}>{users[jump].incorrect_a}</button>
      </div>*/}
    </>
  );
}
