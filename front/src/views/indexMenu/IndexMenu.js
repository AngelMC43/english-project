import { Link } from "react-router-dom";
import gamesVideo from "../../visual/main/games.mp4";
import profileVideo from "../../visual/main/profile.mp4";
import rankingVideo from "../../visual/main/ranking.mp4";
import { useLoginContext } from "../../context/LoginContext";
import "./indexMenu.css";

export default function IndexMenu() {
  const { id } = useLoginContext();

  return (
    <div className="App">
      <div className="title-index">
        <h2 className="text-index animate__animated animate__rubberBand">
          Welcome to the world of games
        </h2>
      </div>
      <div className="boxes-index d-flex justify-content-center">
        <Link to="/games" className="boxes">
          <video loop autoPlay muted end className="video-index">
            <source src={gamesVideo} type="video/mp4" />
          </video>
        </Link>
        <Link to={`/profile`} className="boxes-index">
          <video loop autoPlay muted className="video-index">
            <source src={profileVideo} type="video/mp4" />
          </video>
        </Link>
      </div>
    </div>
  );
}
