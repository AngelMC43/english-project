import next from "../../../visual/main/nextCompleted.mp4";
import { Link } from "react-router-dom";
import "./introAdvanced.css";

export default function NextCompleted() {
  return (
    <div className="mainIntroNext">
      <Link to="/">
        <h1 className="nextFirst-completed animate__animated animate__backInLeft animate__delay-3s">
          Game completed{" "}
        </h1>
        <h2 className="nextSecond-completed animate__animated animate__backInLeft animate__delay-4s">
          Congratulations!!!
        </h2>
        <video autoPlay muted className="videoIntro-choose">
          <source src={next} type="video/mp4" />
        </video>
      </Link>
    </div>
  );
}
