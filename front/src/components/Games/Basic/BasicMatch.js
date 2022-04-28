import { useState, useEffect } from "react";
import "./basic.css";

export default function BasicMatch() {
  const [questions, setQuestions] = useState([]);
  const [jump, setJump] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3001/games/basic/match`, {
        mode: "cors",
      });
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
  if ((questions.pic_correct = questions.correct)) {
  }
  return (
    <div>
      <div className="main-match ">
        <div className="inside-container-match">
          <div>
            <h1 className="title-match d-flex justify-content-center">
              {questions.length > 0 ? questions[jump].question : ""}
            </h1>
          </div>
          <div className="d-flex">
            <img
              src={questions.length > 0 ? questions[0].pic_correct : ""}
              onClick={handleJump}
              className="bird-match"
            />

            <img
              src={questions.length > 0 ? questions[1].pic_correct : ""}
              onClick={handleJump}
              className="plane-match"
            />
          </div>
          <div className="d-flex justify-content-between">
            <img
              src={questions.length > 0 ? questions[2].pic_correct : ""}
              onClick={handleJump}
              className="apple-match"
            />
            <img
              src={questions.length > 0 ? questions[3].pic_correct : ""}
              onClick={handleJump}
              className="house-match"
            />
            <img
              src={questions.length > 0 ? questions[8].pic_correct : ""}
              onClick={handleJump}
              className="parrot-match"
            />
          </div>
          <div className="d-flex">
            <img
              src={questions.length > 0 ? questions[5].pic_correct : ""}
              onClick={handleJump}
              className="cat-match"
            />
            <img
              src={questions.length > 0 ? questions[4].pic_correct : ""}
              onClick={handleJump}
              className="car-match"
            />
          </div>
          <div className="d-flex justify-content-between">
            <img
              src={questions.length > 0 ? questions[7].pic_correct : ""}
              onClick={handleJump}
              className="dog-match"
            />
            <img
              src={questions.length > 0 ? questions[6].pic_correct : ""}
              onClick={handleJump}
              className="chicken-match"
            />
            <img
              src={questions.length > 0 ? questions[9].pic_correct : ""}
              onClick={handleJump}
              className="ball-match"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
