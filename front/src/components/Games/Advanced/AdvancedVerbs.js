import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../../context/LoginContext";

export default function AdvancedGrammar() {
  const [questions, setQuestions] = useState([]);
  const [jump, setJump] = useState(0);
  const [count, setCount] = useState(0);
  const { userLogged } = useLoginContext();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:3001/games/advanced/verbs`,
        {
          mode: "cors",
        }
      );
      const json = await response.json();
      setQuestions(json);
    }
    fetchData();
  }, []);

  const handleScore = (event) => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3001/score`, {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idUser: userLogged.id,
          level: "basic",
          type: "verbs",
          score: count,
        }),
      });
    }
    fetchData();
  };
  console.log("count es", count);

  const handleCount = () => {
    setCount(count + 1);
  };

  function handleJoined(e) {
    handleCount();
    handleJump();
  }

  const handleJump = (e) => {
    setJump(jump + 1);
  };

  return (
    <div className="main-advancedVerbs">
      <h1 className="title-advancedVerbs">
        {questions.length > 0 ? questions[jump].question : ""}
      </h1>
      <div className="button-container-advancedVerbs">
        <button onClick={handleJoined} className="button-left-advancedVerbs">
          <b> {questions.length > 0 ? questions[jump].correct : ""}</b>
        </button>
        <button onClick={handleJump} className="button-rigth-advancedVerbs">
          <b>{questions.length > 0 ? questions[jump].incorrect_a : ""}</b>
        </button>
      </div>
    </div>
  );
}
