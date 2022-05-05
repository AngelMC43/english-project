import { useState, useEffect } from "react";
import "./basic.css";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../../context/LoginContext";

// Esta to pusheado

export default function ModeloUno() {
  const [questions, setQuestions] = useState([]);
  const [jump, setJump] = useState(0);
  const [count, setCount] = useState(0);
  const { userLogged } = useLoginContext();

  // const [newScore, setNewScore] = useState({
  //   idUser: "",
  //   level: "",
  //   type: "",
  //   score: "",
  // });
  console.log("count es", count);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:3001/games/basic/vocabulary`,
        {
          mode: "cors",
        }
      );
      const json = await response.json();
      setQuestions(json);
    }
    fetchData();
  }, [jump]);

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
          type: "vocabulary",
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
    <div className="button-container-vocabulary">
      {questions[10] == questions[jump] ? (
        <button
          onClick={handleJoined}
          className="button-push-vocabulary btn btn-outline-primary accent-4 z-depth-3 section"
        >
          {questions.length > 0 ? questions[jump].correct : ""}
          {questions[10] ? (count + 1, handleScore()) : ""}
        </button>
      ) : (
        <button
          onClick={handleJoined}
          className="button-push-vocabulary btn btn-outline-primary accent-4 z-depth-3 section"
        >
          {questions.length > 0 ? questions[jump].correct : ""}
        </button>
      )}
    </div>

    // <div className="button-container-vocabulary">
    //   {questions[10] == questions[jump] ? (
    //     <button
    //       onClick={handleJoined}
    //       className="button-push-vocabulary btn btn-outline-primary accent-4 z-depth-3 section"
    //     >
    //       {questions.length > 0 ? questions[jump].correct : ""}
    //       {questions[10] ? (count + 1, handleScore()) : ""}
    //     </button>
    //   ) : (
    //     <button
    //       onClick={handleJoined}
    //       className="button-push-vocabulary btn btn-outline-primary accent-4 z-depth-3 section"
    //     >
    //       {questions.length > 0 ? questions[jump].correct : ""}
    //     </button>
    //   )}
    // </div>
  );
}
