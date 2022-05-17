import { useState, useEffect } from "react";
import "./advanced.css";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../../context/LoginContext";

export default function BasicMatch() {
  const [questions, setQuestions] = useState([]);
  const [jump, setJump] = useState(0);
  const [count, setCount] = useState(0);
  const { userLogged } = useLoginContext();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:3001/games/advanced/match`,
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
          type: "Guess what",
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
  }

  const handleJump = (e) => {
    setJump(jump + 1);
  };

  console.log("count", count);
  console.log("jump", jump);

  return (
    <div className="main-matchAdvanced">
      <div className="inside-container-matchAdvanced">
        <div>
          <h1 className="title-matchAdvanced d-flex justify-content-center">
            {questions.length > 0 ? questions[jump].question : ""}
          </h1>
        </div>

        <div>
          <div className="d-flex">
            {questions[jump] === questions[0] ? (
              <img
                src={questions.length > 0 ? questions[0].correct : ""}
                onClick={handleJoined}
                className="helicopter-match"
              />
            ) : (
              <img
                src={questions.length > 0 ? questions[0].correct : ""}
                onClick={handleJump}
                className="helicopter-match"
              />
            )}
            {questions[jump] === questions[1] ? (
              <img
                src={questions.length > 0 ? questions[1].correct : ""}
                onClick={handleJoined}
                className="cloud-match"
              />
            ) : (
              <img
                src={questions.length > 0 ? questions[1].correct : ""}
                onClick={handleJump}
                className="cloud-match"
              />
            )}

            {questions[jump] === questions[2] ? (
              <img
                src={questions.length > 0 ? questions[2].correct : ""}
                onClick={handleJoined}
                className="parachute-match"
              />
            ) : (
              <img
                src={questions.length > 0 ? questions[2].correct : ""}
                onClick={handleJump}
                className="parachute-match"
              />
            )}
            {questions[jump] === questions[3] ? (
              <img
                src={questions.length > 0 ? questions[3].correct : ""}
                onClick={handleJoined}
                className="humming-match"
              />
            ) : (
              <img
                src={questions.length > 0 ? questions[3].correct : ""}
                onClick={handleJump}
                className="humming-match"
              />
            )}
          </div>
          <div className="d-flex justify-content-between">
            {questions[jump] === questions[4] ? (
              <img
                src={questions.length > 0 ? questions[4].correct : ""}
                onClick={handleJoined}
                className="platform-match"
              />
            ) : (
              <img
                src={questions.length > 0 ? questions[4].correct : ""}
                onClick={handleJump}
                className="platform-match"
              />
            )}

            {questions[jump] === questions[5] ? (
              <img
                src={questions.length > 0 ? questions[5].correct : ""}
                onClick={handleJoined}
                className="boat-match"
              />
            ) : (
              <img
                src={questions.length > 0 ? questions[5].correct : ""}
                onClick={handleJump}
                className="boat-match"
              />
            )}
            {questions[jump] === questions[6] ? (
              <img
                src={questions.length > 0 ? questions[6].correct : ""}
                onClick={handleJoined}
                className="barn-match"
              />
            ) : (
              <img
                src={questions.length > 0 ? questions[6].correct : ""}
                onClick={handleJump}
                className="barn-match"
              />
            )}

            {questions[jump] === questions[7] ? (
              <img
                src={questions.length > 0 ? questions[7].correct : ""}
                onClick={handleJoined}
                className="bull-match"
              />
            ) : (
              <img
                src={questions.length > 0 ? questions[7].correct : ""}
                onClick={handleJump}
                className="bull-match"
              />
            )}
          </div>
          <div className="d-flex justify-content-between">
            {questions[jump] === questions[8] ? (
              <img
                src={questions.length > 0 ? questions[8].correct : ""}
                onClick={handleJoined}
                className="launch-match"
              />
            ) : (
              <img
                src={questions.length > 0 ? questions[8].correct : ""}
                onClick={handleJump}
                className="launch-match"
              />
            )}
            {questions[jump] === questions[9] ? (
              <img
                src={questions.length > 0 ? questions[9].correct : ""}
                onClick={handleJoined}
                className="roc-match"
              />
            ) : (
              <img
                src={questions.length > 0 ? questions[9].correct : ""}
                onClick={handleJump}
                className="roc-match"
              />
            )}
            {questions[10] == questions[jump] ? (
              <div>{questions[10] ? (count + 1, handleScore()) : ""}</div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <div>
        {questions[10] === questions[jump] ? (
          <div className="finalPanel-matchAdvanced">
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
            {count < 5 ? (
              <Link
                to="/games/advanced/intro-match"
                className="buttonCompleted-basic"
              >
                Try again
              </Link>
            ) : (
              <Link to="/" className="buttonCompleted-basicRed">
                Congratulations!!!
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
    </div>
  );
}
