import React, { useEffect, useState } from "react";
import Score from "./Score";
import "../css/mainView.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DetailView from "./DetailView";

const MainView = () => {
  const API_URL = "http://localhost:8080/api/teams";

  const [isvisible, setisvisible] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [teams, setTeams] = useState([]);

  const callback = (isvis, team, points) => {
    setisvisible(isvis);
    setTeamName(team);
  };

  console.log(teamName)

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((response) => setTeams(response));
  }, []);

  // useEffect(() => {
  //   // const scores = mockedDb.map(team => team.tasks).flat().map(task => task.score)

  //   // const teamPointsCollection = teamTasksCollection.score.map(
  //   //   ({points}) => points.score
  //   // );

  //   // const teamPoints = tasks.map((teamPoints) =>
  //   //   teamPoints.score.reduce((a, b) => a + b, 0)
  //   // );

  //   // const totalTeamPoints = teamPoints.reduce((a, b) => a + b, 0);

  //   // setTotalPoints(totalPoints);
  // }, []);

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
            <Score callback={callback} teams={teams} />
            {isvisible && (
              <DetailView
                callback={callback}
                teamname={teamName}
                teams={teams}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainView;
