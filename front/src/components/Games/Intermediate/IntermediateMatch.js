import { useState, useEffect } from "react";
import "./intermediate.css";
import { useLoginContext } from "../../../context/LoginContext";

export default function BasicMatch() {
  const [questions, setQuestions] = useState([]);
  const [jump, setJump] = useState(0);
  const [count, setCount] = useState(0);
  const { userLogged } = useLoginContext();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:3001/games/intermediate/match`,
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
          level: "intermediate",
          type: "match",
          score: count,
        }),
      });
    }
    fetchData();
  };
  const handleJump = (e) => {
    if (jump < 11) {
      e.stopPropagation();
      e.preventDefault();
      setJump(jump + 1);
    } else {
    }
  };

  return (
    <div>
      <div className="main-intermediateMatch ">
        <div className="inside-container-intermediateMatch">
          <div>
            <h1 className="title-intermediateMatch d-flex justify-content-center">
              {questions.length > 0 ? questions[jump].question : ""}
            </h1>
          </div>
          <div className="d-flex">
            <img
              src={questions.length > 0 ? questions[0].correct : ""}
              onClick={handleJump}
              className="planeInt-intermediateMatch"
            />

            <img
              src={questions.length > 0 ? questions[1].correct : ""}
              onClick={handleJump}
              className="clock-intermediateMatch"
            />
            <img
              src={questions.length > 0 ? questions[2].correct : ""}
              onClick={handleJump}
              className="flag-intermediateMatch"
            />
          </div>
          <div className="d-flex justify-content-between">
            <img
              src={questions.length > 0 ? questions[3].correct : ""}
              onClick={handleJump}
              className="crash-intermediateMatch"
            />
            <img
              src={questions.length > 0 ? questions[4].correct : ""}
              onClick={handleJump}
              className="basket-intermediateMatch"
            />
            <img
              src={questions.length > 0 ? questions[5].correct : ""}
              onClick={handleJump}
              className="bus-intermediateMatch"
            />
            <img
              src={questions.length > 0 ? questions[6].correct : ""}
              onClick={handleJump}
              className="ligth-intermediateMatch"
            />
          </div>

          <div className="d-flex justify-content-between">
            <img
              src={questions.length > 0 ? questions[7].correct : ""}
              onClick={handleJump}
              className="font-intermediateMatch"
            />
            <img
              src={questions.length > 0 ? questions[8].correct : ""}
              onClick={handleJump}
              className="plaque-intermediateMatch"
            />
            <img
              src={questions.length > 0 ? questions[9].correct : ""}
              onClick={handleJump}
              className="bench-intermediateMatch"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
