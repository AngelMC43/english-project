import { Link } from "react-router-dom";
import FinalPanel from "../../components/FinalPanel/FinalPanel";
import Score from "../../components/Score/ShowScore";

export default function AdvancedPanel() {
  return (
    <div>
      <h1>menu avanzado</h1>
      <FinalPanel />
      <Score />
      <Link to="/games" className="btn btn-outline-info">
        Volver a empezar
      </Link>
    </div>
  );
}
