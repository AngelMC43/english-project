import { useState, useEffect } from "react";
import "./advanced.css";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../../context/LoginContext";
import arrow from "../../../visual/main/arrow.png";

import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const initialAnswerValue = {
  correct: "",
};

export default function AdvancedVocabulary() {
  const [questions, setQuestions] = useState([]);
  const [jump, setJump] = useState(0);
  const [count, setCount] = useState(0);
  const { userLogged } = useLoginContext();
  const [answer, setAnswer] = useState(initialAnswerValue);
  console.log({ questions });
  const handleChange = (event) => {
    event.preventDefault();
    setAnswer({
      ...answer,
      [event.target.name]: event.target.value,
    });
    console.log("esto es el event", event.target.name);
  };
  console.log("esto es new", answer);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:3001/games/advanced/vocabulary`,
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
          type: "Vocabulary",
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
    e.preventDefault();
    handleCount();
    setJump(jump + 1);
    setAnswer(initialAnswerValue);
    Swal.fire({
      position: "center",
      width: 400,
      title: "Yes!",
      color: "rgb(233, 169, 236)",
      icon: "success",
      background: "rgb(136, 13, 142)",
      iconColor: "rgb(233, 169, 236)",
      borderRadius: "30%",
      showConfirmButton: false,
      timer: 1000,
    });
  }

  function handleJump(e) {
    e.preventDefault();
    setJump(jump + 1);
    setAnswer(initialAnswerValue);
    Swal.fire({
      position: "center",
      title: "Oh no!",
      width: 400,
      height: 400,
      icon: "error",
      color: "rgb(136, 13, 142)",
      background: "rgb(233, 169, 236)",
      iconColor: "rgb(136, 13, 142)",
      borderRadius: "30%",
      showConfirmButton: false,
      timer: 1000,
    });
  }

  console.log("Esto es jump", jump);
  return (
    <div>
      <div className="main-advancedVocabulary">
        <h1 className="title-advancedVocabulary animate__animated animate__pulse">
          {questions.length > 0 ? questions[jump].question : ""}
        </h1>
        <div className="box-answer-advancedVocabulary fw-bold">
          <div className="answer-advancedVocabulary">
            {questions.length > 0 ? questions[7].correct : ""}
          </div>
          <div className="answer-advancedVocabulary">
            {questions.length > 0 ? questions[1].correct : ""}
          </div>
          <div className="answer-advancedVocabulary">
            {questions.length > 0 ? questions[8].correct : ""}
          </div>
          <div className="answer-advancedVocabulary">
            {questions.length > 0 ? questions[3].correct : ""}
          </div>
          <div className="answer-advancedVocabulary">
            {questions.length > 0 ? questions[9].correct : ""}
          </div>
          <div className="answer-advancedVocabulary">
            {questions.length > 0 ? questions[5].correct : ""}
          </div>
          <div className="answer-advancedVocabulary">
            {questions.length > 0 ? questions[0].correct : ""}
          </div>
          <div className="answer-advancedVocabulary">
            {questions.length > 0 ? questions[2].correct : ""}
          </div>
          <div className="answer-advancedVocabulary">
            {questions.length > 0 ? questions[4].correct : ""}
          </div>
          <div className="answer-advancedVocabulary">
            {questions.length > 0 ? questions[6].correct : ""}
          </div>
          <div>
            {questions[10] == questions[jump] ? (
              <div>{questions[10] ? (count + 1, handleScore()) : ""}</div>
            ) : (
              ""
            )}
          </div>
        </div>
        <form>
          <div>
            <input
              type="text"
              name="correct"
              className="browser-default input-advancedVocabulary"
              placeholder="WRITE YOUR ANSWER"
              onChange={handleChange}
              value={answer.correct}
            ></input>
            {answer.correct !=
            (questions.length > 0 ? questions[jump].correct : "") ? (
              <img src={arrow} onClick={handleJump} className="arrowPink" />
            ) : (
              <img src={arrow} onClick={handleJoined} className="arrowPink" />
            )}
          </div>
        </form>
      </div>
      {questions === [] ? (
        <></>
      ) : (
        <div>
          {questions[10] === questions[jump] ? (
            <div className="finalPanel-advanced">
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
                  to="/games/advanced/intro-vocabulary"
                  className="buttonCompleted-basic"
                >
                  Try again
                </Link>
              ) : (
                <Link
                  to="/games/advanced/intro-verbs"
                  className="buttonCompleted-basic"
                >
                  Next Game
                </Link>
              )}
              <br />
              <Link to="/showscore" className="buttonCompleted-advanced">
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
      )}
    </div>
  );
}
