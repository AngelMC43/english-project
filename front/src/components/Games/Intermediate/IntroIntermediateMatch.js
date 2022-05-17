import intro from "../../../visual/intermediate/introIntermediateMatch.mp4";
import { Link } from "react-router-dom";
import "./introIntermediate.css";
import start from "../../../visual/basic/start.png";

export default function IntroIntermediateMatch() {
  return (
    <div className="mainIntro-choose">
      <Link to="/games/intermediate/match">
        <img
          src={start}
          className="imageIntro-choose animate__animated animate__backInLeft animate__delay-3s"
        />{" "}
        <h4 className="titleIntro-choose animate__animated animate__backInLeft animate__delay-3s">
          Start
        </h4>
        <video autoPlay muted className="videoIntro-choose">
          <source src={intro} type="video/mp4" />
        </video>
      </Link>
    </div>
  );
}
