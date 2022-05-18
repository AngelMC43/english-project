import intro from "../../../visual/advanced/introMatchAdvanced.mp4";
import { Link } from "react-router-dom";
import "./introAdvanced.css";
import start from "../../../visual/basic/start.png";

export default function IntroAdvancedMatch() {
  return (
    <div className="mainIntro-choose">
      <Link to="/games/advanced/match">
        <img
          src={start}
          className="imageIntro-choose animate__animated animate__backInLeft animate__delay-4s"
        />{" "}
        <h4 className="titleIntro-choose animate__animated animate__backInLeft animate__delay-4s">
          Start
        </h4>
        <video autoPlay muted className="videoIntro-choose">
          <source src={intro} type="video/mp4" />
        </video>
      </Link>
    </div>
  );
}
