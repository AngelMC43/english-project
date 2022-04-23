import { useState, useEffect } from "react";
import "./basic.css";

export default function BasicGrammar() {
  const [questions, setQuestions] = useState([]);
  const [jump, setJump] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:3001/games/basic/grammar`,
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
      <div class="position-absolute top-50 start-50 translate-middle border border-dark rounded-3 border-4 p-5 purple lighten-2">
        <h1 className="mt-5">
          {questions.length > 0 ? questions[jump].question : ""}
        </h1>
        <h3 onClick={handleJump} className="position-sticky start-50">
          <button>{questions.length > 0 ? questions[jump].correct : ""}</button>
          <button>
            {questions.length > 0 ? questions[jump].incorrect_a : ""}
          </button>
        </h3>
      </div>
    </div>
  );
}
