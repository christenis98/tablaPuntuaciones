import React, { useEffect, useState } from "react";
import Score from "./Score";
import "../css/mainView.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NewTeamButton from "./NewTeamButton";

const MainView = (props) => {
  const API_URL = "http://localhost:8080/api/teams";

  const [teamName, setTeamName] = useState("");
  const [teams, setTeams] = useState([]);

  // useEffect(() => {
  //   fetchTeams(API_URL);
  // }, []);  

  const callback = (team) => {
    setTeamName(team);
  };

  const newButtonHandler = () => {
    fetchTeams(API_URL);
  };

  const fetchTeams = (url) =>{
    fetch(url).then((res) => res.json()).then((response) => setTeams(response));
  }   

  return (
    <div className="backgroundColor">
      <div
        className="container d-flex flex-column justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="row justify-content-center">
          <div className="col-10 p-5 radius soleraBackColor position-relative">
            <div>
              <h2 className="text-white mb-4">Solera Teams Bootcamp 4</h2>
            </div>
            <Score callback={callback} teams={props.teams} teamname={teamName} />
            {/* {isvisible && (
              <DetailView
                callback={callback}
                teamname={teamName}
                teams={teams}
              />
            )} */}
            <NewTeamButton
              teamCount={teams.length}
              onNewButton={newButtonHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainView;
