import { useState, useEffect } from "react";
import "./intermediate.css";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../../context/LoginContext";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export default function IntermediateVerbs() {
  const [questions, setQuestions] = useState([]);
  const [jump, setJump] = useState(0);
  const [count, setCount] = useState(0);
  const { userLogged } = useLoginContext();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:3001/games/intermediate/verbs`,
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
          level: "Intermediate",
          type: "Verbs",
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
      color: "rgb(18, 200, 192)",
      icon: "success",
      background: "rgb(137, 24, 124)",
      iconColor: "rgb(18, 200, 192)",
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
      color: "rgb(137, 24, 124)",
      background: "rgb(18, 200, 192)",
      iconColor: "rgb(137, 24, 124)",
      borderRadius: "30%",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  const random = Math.floor(Math.random() * 3);
  console.log("random", random);
  console.log("count", count);

  return (
    <div className="main-intermediateVerbs">
      <h1 className="title-intermediateVerbs animate__animated animate__pulse">
        {questions.length > 0 ? questions[jump].question : ""}
      </h1>

      {random == 0 ? (
        <div>
          {questions[10] == questions[jump] ? (
            <button
              onClick={handleJoined}
              className="button-first-intermediateVerbs"
            >
              {questions.length > 0 ? questions[jump].correct : ""}
              {questions[10] ? (count + 1, handleScore()) : ""}
            </button>
          ) : (
            <button
              onClick={handleJoined}
              className="button-first-intermediateVerbs"
            >
              {" "}
              {questions.length > 0 ? questions[jump].correct : ""}
            </button>
          )}
          <button
            onClick={handleJump}
            className="button-second-intermediateVerbs"
          >
            {questions.length > 0 ? questions[jump].incorrect_a : ""}
          </button>
          <button
            onClick={handleJump}
            className="button-third-intermediateVerbs"
          >
            {questions.length > 0 ? questions[jump].incorrect_b : ""}
          </button>
          <button
            onClick={handleJump}
            className="button-forth-intermediateVerbs"
          >
            {questions.length > 0 ? questions[jump].incorrect_c : ""}
          </button>
        </div>
      ) : random == 1 ? (
        <div>
          <button
            onClick={handleJump}
            className="button-first-intermediateVerbs"
          >
            {questions.length > 0 ? questions[jump].incorrect_b : ""}
          </button>

          <button
            onClick={handleJump}
            className="button-second-intermediateVerbs"
          >
            {questions.length > 0 ? questions[jump].incorrect_a : ""}
          </button>
          {questions[10] == questions[jump] ? (
            <button
              onClick={handleJoined}
              className="button-third-intermediateVerbs"
            >
              {questions.length > 0 ? questions[jump].correct : ""}
              {questions[10] ? (count + 1, handleScore()) : ""}
            </button>
          ) : (
            <button
              onClick={handleJoined}
              className="button-third-intermediateVerbs"
            >
              {" "}
              {questions.length > 0 ? questions[jump].correct : ""}
            </button>
          )}
          <button
            onClick={handleJump}
            className="button-forth-intermediateVerbs"
          >
            {questions.length > 0 ? questions[jump].incorrect_c : ""}
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={handleJump}
            className="button-first-intermediateVerbs"
          >
            {questions.length > 0 ? questions[jump].incorrect_c : ""}
          </button>

          <button
            onClick={handleJump}
            className="button-second-intermediateVerbs"
          >
            {questions.length > 0 ? questions[jump].incorrect_a : ""}
          </button>
          <button
            onClick={handleJump}
            className="button-third-intermediateVerbs"
          >
            {questions.length > 0 ? questions[jump].incorrect_b : ""}
          </button>
          {questions[10] == questions[jump] ? (
            <button
              onClick={handleJoined}
              className="button-forth-intermediateVerbs"
            >
              {questions.length > 0 ? questions[jump].correct : ""}
              {questions[10] ? (count + 1, handleScore()) : ""}
            </button>
          ) : (
            <button
              onClick={handleJoined}
              className="button-forth-intermediateVerbs"
            >
              {" "}
              {questions.length > 0 ? questions[jump].correct : ""}
            </button>
          )}
        </div>
      )}

      <div>
        {questions[10] === questions[jump] ? (
          <div className="finalPanel-intermediate touch-intermediateVerbs">
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
                to="/games/intermediate/intro-verbs"
                className="buttonCompleted-basic"
              >
                Try again
              </Link>
            ) : (
              <Link
                to="/games/intermediate/intro-grammar"
                className="buttonCompleted-basic"
              >
                Next Game
              </Link>
            )}
            <br />
            <Link to="/showscore" className="buttonCompleted-intermediate">
              Ranking
            </Link>
            <br />
            <Link
              to="/games/intermediate"
              className="buttonCompleted-intermediate"
            >
              Menu
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
