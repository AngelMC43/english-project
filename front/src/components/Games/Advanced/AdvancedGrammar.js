import { useState, useEffect } from "react";

export default function AdvancedGrammar() {
  const [questions, setQuestions] = useState([]);
  const [jump, setJump] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:3001/games/advanced/grammar`,
        {
          mode: "cors",
        }
      );
      const json = await response.json();
      setQuestions(json);
    }
    fetchData();
  }, []);

  const fallo = "Se han acabado las preguntas";

  const handleJump = (e) => {
    if (jump < 11) {
      e.stopPropagation();
      e.preventDefault();
      setJump(jump + 1);
    } else {
      //aqui meter en FINAL PANEL
      console.log(fallo);
    }
  };

  return (
    <div>
      <h1>{questions.length > 0 ? questions[jump].question : ""}</h1>
      <h3 onClick={handleJump}>
        <button>{questions.length > 0 ? questions[jump].correct : ""}</button>
        <button>
          {questions.length > 0 ? questions[jump].incorrect_a : ""}
        </button>
        <button>
          {questions.length > 0 ? questions[jump].incorrect_b : ""}
        </button>
        <button>
          {questions.length > 0 ? questions[jump].incorrect_c : ""}
        </button>
      </h3>
    </div>
  );
}
