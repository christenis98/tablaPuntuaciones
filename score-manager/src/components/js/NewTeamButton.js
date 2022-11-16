import { useState } from "react";
import "../css/NewTeamButon.css";

const NewTeam = (props) => {
  var url = "http://localhost:8080/api/teams";
  const teamcount = props.teamcount;
  var data = {
    id: Math.random().toString().split(".")[1],
    name: "team" + teamcount,
    scores: [
      { name: "task1", points: 8 },
      { name: "task2", points: 8 },
    ],
  };

  const clickHandler = () => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log("Success: ", response);
        props.onNewButton();
      });
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
