import { useState } from "react";
import "../css/NewTeamButon.css";
import { v4 as uuidv4 } from "uuid";

const NewTeam = (props) => {
  const number = props.teamcount;
  var POST_URL = "http://localhost:8080/api/teams";

  var data = {
    id: uuidv4(),
    name: "Team " + number,
    scores: [{ name: "task 1", points: 5 }],
  };

  const clickHandler = async () => {
    const response = fetch(POST_URL, {
      method: "POST",
      body: JSON.stringify(data),
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
      <button className="new-team-button" onClick={clickHandler}>
        New Team
      </button>
    </div>
  );
};

export default NewTeam;
