import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../../context/LoginContext";
import "./advanced.css";

import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export default function AdvancedVerbs() {
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
          level: "Advanced",
          type: "Phrasal verbs",
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
    Swal.fire({
      position: "center",
      width: 400,
      title: "Yes!",
      color: "rgb(175, 255, 14)",
      icon: "success",
      background: "rgb(137, 24, 124)",
      iconColor: "rgb(175, 255, 14);",
      borderRadius: "30%",
      showConfirmButton: false,
      timer: 800,
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
      background: "rgb(175, 255, 14)",
      iconColor: "rgb(137, 24, 124)",
      borderRadius: "30%",
      showConfirmButton: false,
      timer: 800,
    });
  };

  const random = Math.floor(Math.random() * 2);

  return (
    <div>
      <div className="main-advancedVerbs browser-default">
        <h1 className="title-advancedVerbs animate__animated animate__pulse">
          {questions.length > 0 ? questions[jump].question : ""}
        </h1>

        {random == 0 ? (
          <div className="insideContainer-advancedVerbs">
            {questions[10] == questions[jump] ? (
              <button
                onClick={handleJoined}
                className="button-left-advancedVerbs "
              >
                <b>{questions.length > 0 ? questions[jump].correct : ""}</b>
                {questions[10] ? (count + 1, handleScore()) : ""}
              </button>
            ) : (
              <button
                onClick={handleJoined}
                className="button-left-advancedVerbs "
              >
                <b>{questions.length > 0 ? questions[jump].correct : ""}</b>
              </button>
            )}
            <button
              onClick={handleJump}
              className="button-rigth-advancedVerbs "
            >
              <b> {questions.length > 0 ? questions[jump].incorrect_a : ""}</b>
            </button>
          </div>
        ) : (
          <div className="insideContainer-advancedVerbs">
            <button onClick={handleJump} className="button-left-advancedVerbs ">
              <b>{questions.length > 0 ? questions[jump].incorrect_a : ""}</b>
            </button>

            {questions[10] == questions[jump] ? (
              <button
                onClick={handleJoined}
                className="button-rigth-advancedVerbsbtn "
              >
                <b>{questions.length > 0 ? questions[jump].correct : ""}</b>
                {questions[10] ? (count + 1, handleScore()) : ""}
              </button>
            ) : (
              <button
                onClick={handleJoined}
                className="button-rigth-advancedVerbs "
              >
                <b> {questions.length > 0 ? questions[jump].correct : ""}</b>
              </button>
            )}
          </div>
        )}
      </div>
      <div>
        {questions[10] === questions[jump] ? (
          <div className="finalPanel-advanced">
            {" "}
            <h2>Game completed!</h2>
            <h2>Score: {count}/10 </h2>
            {count > 4 ? (
              <div>
                <img
                  src={questions.length > 0 ? questions[10].order : ""}
                  className="pass-intermediate animate__animated animate__backInDown animate__delay-2s "
                />
                <img
                  src={questions.length > 0 ? questions[10].decoration : ""}
                  className="confeti-basic animate__animated animate__bounceIn"
                />
                <img
                  src={questions.length > 0 ? questions[10].decoration_ : ""}
                  className="goodJob-basic animate__animated animate__lightSpeedInLeft animate__delay-1st"
                />
              </div>
            ) : (
              <div>
                <img
                  src={questions.length > 0 ? questions[11].order : ""}
                  className="fail-intermediate animate__animated animate__fadeIn animate__delay-2s"
                />
                <img
                  src={questions.length > 0 ? questions[11].decoration : ""}
                  className="mission-intermediate animate__animated animate__fadeIn animate__delay-1s"
                />
                <img
                  src={questions.length > 0 ? questions[11].decoration_ : ""}
                  className="failed-intermediate animate__animated animate__fadeIn animate__delay-3s"
                />
              </div>
            )}
            {count < 5 ? (
              <Link
                to="/games/advanced/intro-verbs"
                className="buttonCompleted-basic"
              >
                Try again
              </Link>
            ) : (
              <Link
                to="/games/advanced/intro-grammar"
                className="buttonCompleted-basic"
              >
                Next Game
              </Link>
            )}
            <br />
            <Link to="/showscore/advanced-verbs" className="buttonCompleted-advanced">
              Ranking
            </Link>
            <br />
            <Link to="/games/advanced" className="buttonCompleted-advanced">
              Menu
            </Link>{" "}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
