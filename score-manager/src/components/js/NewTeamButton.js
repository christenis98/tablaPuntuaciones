import { useState } from "react";
import "../css/NewTeamButon.css";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const NewTeam = (props) => {
  const number = props.teamcount;
  const API_URL = "http://localhost:8080/api/teams";
  let teamnumber;

  const[currentTeam, setCurrentTeam]=useState({})

  if (props.teamnumber>0)
  {
    teamnumber=props.teamnumber
  }
  else{
    teamnumber=1
  }

  const newTeam = {
    id: uuidv4(),
    name: "Team " + teamnumber,
    scores: [{ name: "task 1", points: 5 }],
  };

  const clickHandler = async () => {
    const response = fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(newTeam),
      headers: {
        "Content-Type": "application/json",
      },
    })

    // const fetchedData = await response;
    // const fetchedDataJson = await fetchedData.json();
    // console.log("Success: ", fetchedDataJson);

    setCurrentTeam(newTeam);
    props.isclicked(true)

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
