import { useState, useEffect } from "react";
import "./advanced.css";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../../context/LoginContext";

export default function AdvancedVocabulary() {
  const [questions, setQuestions] = useState([]);
  const [jump, setJump] = useState(0);
  const [count, setCount] = useState(0);
  const { userLogged } = useLoginContext();

  // const [newScore, setNewScore] = useState({
  //   idUser: "",
  //   level: "",
  //   type: "",
  //   score: "",
  // });
  console.log("count es", count);

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
    handleCount();
    handleJump();
  }

  const handleJump = (e) => {
    setJump(jump + 1);
  };

  console.log("count es", count);

  return (
    <div>
      <div className="main-advancedVocabulary">
        <div className="inside-container-advancedVocabulary">
          <h1 className="animate__animated animate__pulse">
            {questions.length > 0 ? questions[jump].question : ""}
          </h1>

          <h3 className="answer-advancedVocabulary">
            <div className="button-container-advancedVocabulary">
              {questions[10] == questions[jump] ? (
                <button
                  onClick={handleJoined}
                  className="button-push-advancedVocabulary btn btn-outline-primary accent-4 z-depth-3 section"
                >
                  {questions.length > 0 ? questions[jump].correct : ""}
                  {questions[10] ? (count + 1, handleScore()) : ""}
                </button>
              ) : (
                <button
                  onClick={handleJoined}
                  className="button-push-vocabulary btn btn-outline-primary accent-4 z-depth-3 section"
                >
                  {questions.length > 0 ? questions[jump].correct : ""}
                </button>
              )}
            </div>
            <div className="button-container-advancedVocabulary">
              <button
                onClick={handleJump}
                className="button-push-advancedVocabulary btn btn-outline-primary accent-4 z-depth-3 section"
              >
                {questions.length > 0 ? questions[jump].incorrect_a : ""}
              </button>

              {/* <h1 className="visually-hidden" id="correcto">
                Correcto
              </h1>

              <h1 className="visually-hidden" id="incorrecto">
                Incorrecto
              </h1> */}
            </div>
          </h3>
        </div>
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
                  src={questions.length > 0 ? questions[10].pic_correct : ""}
                  className=""
                />
                <img
                  src={questions.length > 0 ? questions[10].pic_incorrect : ""}
                  className=""
                />
              </div>
            ) : (
              <div>
                <img
                  src={questions.length > 0 ? questions[11].pic_correct : ""}
                  className=""
                />
                <img
                  src={questions.length > 0 ? questions[11].pic_incorrect : ""}
                  className=""
                />
              </div>
            )}
            <Link
              to="/games/advanced/choose"
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
