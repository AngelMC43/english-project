import { useState, useEffect } from "react";
import "./advanced.css";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../../context/LoginContext";
import arrow from "../../../visual/main/arrow.png";

export default function AdvancedVocabulary() {
  const [questions, setQuestions] = useState([]);
  const [jump, setJump] = useState(0);
  const [count, setCount] = useState(0);
  const { userLogged } = useLoginContext();
  const [answer, setAnswer] = useState({
    correct: "",
  });

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
          level: "advanced",
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
    e.stopPropagation();
    e.preventDefault();
    handleCount();
    setJump(jump + 1);
    setAnswer({ correct: " " });
  }

  function handleJump(e) {
    e.stopPropagation();
    e.preventDefault();
    setJump(jump + 1);
    setAnswer({ correct: " " });
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
            ></input>
            {answer.correct !=
            (questions.length > 0 ? questions[jump].correct : "") ? (
              <img src={arrow} onClick={handleJump} className="arrowPink" />
            ) : (
              <button onClick={handleJoined} name="">
                next
              </button>
            )}
          </div>
        </form>
      </div>

      <div>
        {questions[10] === questions[jump] ? (
          <div className="finalPanel-advanced">
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
                  className="pass-basic animate__animated animate__fadeInUpBig animate__delay-2s"
                />
                <img
                  src={questions.length > 0 ? questions[10].correct : ""}
                  className="wellDone-basic animate__animated animate__lightSpeedInLeft animate__delay-1s"
                />
              </div>
            ) : (
              <div>
                <img
                  src={questions.length > 0 ? questions[11].pic_correct : ""}
                  className="fail-basic animate__animated animate__fadeInRightBig animate__delay-1s"
                />
                <img
                  src={questions.length > 0 ? questions[11].pic_incorrect : ""}
                  className="loser-basic animate__animated animate__jackInTheBox"
                />
              </div>
            )}
            <Link
              to="/games/advanced/verbs"
              className="buttonCompleted-advanced"
            >
              Next Game
            </Link>
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
    </div>
  );
}
