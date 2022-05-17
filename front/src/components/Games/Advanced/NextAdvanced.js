import next from "../../../visual/advanced/nextAdvanced.mp4";
import { Link } from "react-router-dom";
import "./introAdvanced.css";
import image from "../../../visual/advanced/moon.png";

export default function NextAdvanced() {
  return (
    <div className="mainIntroNext">
      <Link to="/games/advanced">
        <h1 className="nextFirst-advanced animate__animated animate__backInLeft animate__delay-3s">
          Next Level
        </h1>
        <h2 className="nextSecond-advanced animate__animated animate__backInLeft animate__delay-4s">
          Advanced
        </h2>
        <img
          src={image}
          className="moon animate__animated animate__wobble animate__delay-1s"
        />
        <video autoPlay muted className="videoIntro-choose">
          <source src={next} type="video/mp4" />
        </video>
      </Link>
    </div>
  );
}
