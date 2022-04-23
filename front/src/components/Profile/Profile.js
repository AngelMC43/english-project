import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Profile() {
  const [profile, setProfile] = useState([]);
  const id = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3001/profile/${id.id}`, {
        mode: "cors",
      });
      const json = await response.json();
      console.log("1 esto trae json", json);
      console.log(id.id);
      setProfile(json);
      console.log("2 esto tiene users", profile);
    }
    fetchData();
  }, []);
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(`http://localhost:3001/profile/${id}`, {
  //       mode: "cors",
  //     });
  //     const json = await response.json();
  //     console.log("1 esto trae json", json);
  //     setUsers(json);
  //     console.log("2 esto tiene users", users);
  //   }
  //   fetchData();
  // }, []);
  return (
    <div>
      <h1>Profile site</h1>
      <h1 className="card-title">{profile.name}</h1>
    </div>
  );
}
