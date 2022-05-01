import { useLoginContext } from "../../context/LoginContext";
import { useEffect, useState } from "react";

export default function Score() {
  const { userLogged } = useLoginContext();
  const [mark, setMark] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3001/showscore`, {
        mode: "cors",
      });
      const json = await response.json();
      setMark(json);
    }
    fetchData();
  }, []);

  return (
    <div className="border border-dark w-50">
      <h1>SCORE</h1>
      {mark.map((item) => (
        <div>
          <h3>{item.name}</h3>
          <h5>{item.level}</h5>
          <h5>{item.score}</h5>
        </div>
      ))}
    </div>
  );
}
