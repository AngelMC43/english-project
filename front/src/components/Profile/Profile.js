import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Profile() {
  const [profile, setProfile] = useState([]);
  const [jump, setJump] = useState(0);
  const params = useParams();

  useEffect(
    function () {
      async function fetchData() {
        const response = await fetch(
          `http://localhost:3001/profile/${params.id}`
        );
        const json = await response.json();
        setProfile(json);
      }
      fetchData();
    },
    [params.id]
  );

  return (
    <div>
      <h1>Profile site</h1>
      <h5 className="card-title">{profile.name}</h5>
    </div>
  );
}
