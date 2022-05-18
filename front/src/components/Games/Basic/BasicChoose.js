import { useState, useEffect } from "react";
import "./basic.css";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../../context/LoginContext";

import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export default function BasicChoose() {
  const [questions, setQuestions] = useState([]);
  const [jump, setJump] = useState(0);
  const [count, setCount] = useState(0);
  const { userLogged } = useLoginContext();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3001/games/basic/choose`, {
        mode: "cors",
      });
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
          level: "Basic",
          type: "Choose the correct",
          score: count,
        }),
      });
    }
    fetchData();
  };

  const handleCount = () => {
    setCount(count + 1);
  };

  function handleJoined(e) {
    handleCount();
    handleJump();
    Swal.fire({
      position: "center",
      width: 400,
      title: "Yes!",
      icon: "success",
      color: "rgb(249, 252, 7)",
      background: "rgb(33, 202, 6)",
      iconColor: "rgb(249, 252, 7)",
      borderRadius: "30%",
      showConfirmButton: false,
      timer: 1000,
    });
  }

  const handleJump = (e) => {
    setJump(jump + 1);
    Swal.fire({
      position: "center",
      title: "Oh no!",
      width: 400,
      height: 400,
      icon: "error",
      color: "rgb(33, 202, 6)",
      background: "rgb(249, 252, 7)",
      iconColor: "rgb(33, 202, 6)",
      borderRadius: "30%",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  const random = Math.floor(Math.random() * 2);

  return (
    <div>
      <div className="main-choose">
        <div className="inside-container-choose">
          <h1 className="titleBG-choose">
            {questions.length > 0 ? questions[jump].question : ""}
          </h1>

          {random == 0 ? (
            <div className="answer-choose">
              {questions[10] == questions[jump] ? (
                <div>
                  {questions[10] ? (count + 1, handleScore()) : ""}
                  <img
                    src={questions.length > 0 ? questions[jump].correct : ""}
                    onClick={handleJump}
                    className="img-correctChoose"
                  />
                </div>
              ) : (
                <div>
                  <img
                    src={questions.length > 0 ? questions[jump].correct : ""}
                    onClick={handleJoined}
                    className="img-correctChoose"
                  />
                </div>
              )}
              <div>
                <img
                  src={questions.length > 0 ? questions[jump].incorrect_a : ""}
                  onClick={handleJump}
                  className="img-incorrectChoose"
                />
              </div>
            </div>
          ) : (
            <div className="answer-choose">
              <div>
                <img
                  src={questions.length > 0 ? questions[jump].incorrect_a : ""}
                  onClick={handleJump}
                  className="img-correctChoose"
                />
              </div>
              {questions[10] == questions[jump] ? (
                <div>
                  {questions[10] ? (count + 1, handleScore()) : ""}

                  <img
                    src={questions.length > 0 ? questions[jump].correct : ""}
                    onClick={handleJump}
                    className="img-incorrectChoose"
                  />
                </div>
              ) : (
                <div>
                  <img
                    src={questions.length > 0 ? questions[jump].correct : ""}
                    onClick={handleJoined}
                    className="img-incorrectChoose"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div>
        {questions[10] === questions[jump] ? (
          <div className="finalPanel-basic">
            <h2>Game completed!</h2>
            <h2>Score: {count}/10 </h2>
            {count > 4 ? (
              <div>
                <img
                  src={questions.length > 0 ? questions[10].pic_correct : ""}
                  className="confeti-basic animate__animated animate__bounceIn"
                />
                <img
                  src={questions.length > 0 ? questions[10].pic_incorrect : ""}
                  className="pass-basic animate__animated animate__backInUp animate__delay-2s"
                />
                <img
                  src={questions.length > 0 ? questions[10].correct : ""}
                  className="great-basic animate__animated animate__lightSpeedInLeft animate__delay-1s"
                />
              </div>
            ) : (
              <div>
                <img
                  src={questions.length > 0 ? questions[11].pic_incorrect : ""}
                  className="loser-basic animate__animated animate__jackInTheBox"
                />
              </div>
            )}
            {count < 5 ? (
              <Link
                to="/games/basic/intro-choose"
                className="buttonCompleted-basic"
              >
                Try again
              </Link>
            ) : (
              <Link
                to="/games/basic/intro-grammar"
                className="buttonCompleted-basic"
              >
                Next Game
              </Link>
            )}
            <br />
            <Link to="/showscore" className="buttonCompleted-basic">
              Ranking
            </Link>
            <br />
            <Link to="/games/basic" className="buttonCompleted-basic">
              Menu
            </Link>
          </div>
        ) : (
          ""
        )}
        {/* <button onSubmit={handleScore}>score</button> */}
      </div>
    </div>
  );
}
