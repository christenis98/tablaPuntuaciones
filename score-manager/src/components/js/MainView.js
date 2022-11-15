import React, { useEffect, useState } from "react";
import Score from "./Score";
import "../css/mainView.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DetailView from "./DetailView";

const MainView = () => {
  const mockedDb = [
    {
      id: 1,
      team: 1,
      tasks: [{ id: 1, description: "task 1", score: 5 }],
    },
    {
      id: 2,
      team: 2,
      tasks: [
        { id: 1, description: "task 1", score: 5 },
        { id: 2, description: "task 2", score: 5 },
      ],
    },
    {
      id: 3,
      team: 3,
      tasks: [
        { id: 1, description: "task 1", score: 5 },
        { id: 2, description: "task 2", score: 5 },
        { id: 3, description: "task 3", score: 5 },
      ],
    },
    {
      id: 4,
      team: 4,
      tasks: [
        { id: 1, description: "task 1", score: 5 },
        { id: 2, description: "task 2", score: 5 },
        { id: 3, description: "task 3", score: 5 },
        { id: 4, description: "task 4", score: 5 },
      ],
    },
    {
      id: 5,
      team: 5,
      tasks: [
        { id: 1, description: "task 1", score: 5 },
        { id: 2, description: "task 2", score: 5 },
        { id: 3, description: "task 3", score: 5 },
        { id: 4, description: "task 4", score: 5 },
        { id: 5, description: "task 5", score: 5 },
      ],
    },
  ];

  const [isvisible, setisvisible] = useState(false);
  const [teamnumber, setTeamNumber] = useState("");
  const [teampoints, setTotalPoints] = useState();

  const callback = (isvis, team, points) => {
    setisvisible(isvis);
    setTeamNumber(team);
  };

  useEffect(() => {
    // const scores = mockedDb.map(team => team.tasks).flat().map(task => task.score)
  
    // const teamPointsCollection = teamTasksCollection.score.map(
    //   ({points}) => points.score
    // );

    // const teamPoints = tasks.map((teamPoints) =>
    //   teamPoints.score.reduce((a, b) => a + b, 0)
    // );

    // const totalTeamPoints = teamPoints.reduce((a, b) => a + b, 0);

    // setTotalPoints(totalPoints);
  }, []);

  console.log(teampoints);

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
            <Score
              callback={callback}
              mockeddb={mockedDb}
              totalpoints={teampoints}
            />
            {isvisible && (
              <DetailView
                callback={callback}
                teamnumber={teamnumber}
                mockeddb={mockedDb}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainView;

// [[{...score:5}],[{...score:5},{...score:5}],[{...score:5},{...score:5},{...score:5}],[{...score:5},{...score:5},{...score:5},{...score:5}],[{...score:5},{...score:5},{...score:5},{...score:5},{...score:5}]]

// [[5],[5,5],[5,5,5],[5,5,5,5],[5,5,5,5,5]]
