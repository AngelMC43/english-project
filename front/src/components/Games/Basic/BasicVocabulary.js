import { useState, useEffect } from "react";
import "./basic.css";
import fondobasic from "./fondobasic.jpg";

export default function BasicVocabulary() {
  const [questions, setQuestions] = useState([]);
  const [jump, setJump] = useState(0);

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
      <div className="prueba">
        <div className="inside-container">
          <h1 className="">
            {questions.length > 0 ? questions[jump].question : ""}
          </h1>
          <img
            src={questions.length > 0 ? questions[jump].picone : ""}
            className="img-option"
          />
          <h3 className="answer">
            <div className="button-container">
              <button
                onClick={handleJump}
                className="button-push btn btn-outline-primary accent-4 z-depth-3 section"
              >
                {questions.length > 0 ? questions[jump].correct : ""}
              </button>
            </div>
            <div className="button-container">
              <button
                onClick={handleJump}
                className="button-push btn btn-outline-primary accent-4 z-depth-3 section"
              >
                {questions.length > 0 ? questions[jump].incorrect_a : ""}
              </button>
            </div>
          </h3>
        </div>
      </div>
    </div>
  );
}
