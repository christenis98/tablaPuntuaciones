import React, { useEffect, useState } from "react";
import Score from "./Score";
import "../css/mainView.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NewTeamButton from "./NewTeamButton";

const MainView = () => {
  const API_URL = "http://localhost:8080/api/teams";

  const [teams, setTeams] = useState([]);

  const getTeams = async () => {
    const res=await fetch(API_URL)
    const data= await res.json()

    return data
  };

  useEffect(() => {
    getTeams().then(data=>setTeams(data))
  }, [])

  useEffect(() => {
    getTeams().then(data=>setTeams(data))
  }, [teams])

  return (
    <div className="backgroundColor">
      <div
        className="container d-flex flex-column justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="row justify-content-center">
          <div className="col-10 p-5 radius soleraBackColor position-relative">
            <div>
              <h2 className="text-white mb-4 text-center font-monospace">Solera Teams Bootcamp 4</h2>
            </div>
            <Score teams={teams} />
            <NewTeamButton
              teamcount={teams.length}              
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainView;
