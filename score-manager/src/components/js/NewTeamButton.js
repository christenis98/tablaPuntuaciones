import { useState } from "react";
import "../css/NewTeamButon.css";
import { v4 as uuidv4 } from "uuid";

const NewTeam = (props) => {
  const number = props.teamcount;
  const API_URL = "http://localhost:8080/api/teams";

  const newTeam = {
    id: uuidv4(),
    name: "Team " + number,
    scores: [{ name: "task 1", points: 5 }],
  };

  const clickHandler = async () => {
    const response = fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(newTeam),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const fetchedData = await response;
    const fetchedDataJson = await fetchedData.json();
    console.log("Success: ", fetchedDataJson);
  };

  return (
    <div className="new-team">
      <button className="new-team-button font-monospace" onClick={clickHandler}>
        New Team
      </button>
    </div>
  );
};

export default NewTeam;
