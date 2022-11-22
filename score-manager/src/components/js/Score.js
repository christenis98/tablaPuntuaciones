import "../css/Score.css";
import Card from "./Card";
import { useState, useEffect } from "react";

const Score = () => {
  const API_URL = "http://localhost:8080/api/teams";

  const [teams, setTeams] = useState([]);

  const getTeams = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();

    return data;
  };

  useEffect(() => {
    getTeams().then((data) => {
      setTeams(data);
      console.log(data);
    });
  }, []);

  // const allScores = teams.map((team) => team.scores);

  // let taskList = [];

  // for (let i = 0; i < allScores.length; i++) {
  //   let taskListSum = 0;
  //   for (let j = 0; j < allScores[i].length; j++) {
  //     taskListSum += allScores[i][j].points;
  //   }
  //   taskList.push(taskListSum);
  // }

  return (
    <div className="row justify-content-lg-center mb-4">
      {teams?.map(({ id, name, scores }) => (
        <Card
          key={id}
          identifier={id}
          name={name}
          scores = {scores}
        ></Card>
      ))}
    </div>
  );
};

export default Score;
