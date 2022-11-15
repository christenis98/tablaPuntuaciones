import React, { useState, useEffect } from "react";
import Task from "./Task";

export default function TaskList(props) {
  const [tasks, setTasks] = useState([]);
  // const [totalPoints, setTotalPoints] = useState([]);

  useEffect(() => {
    const currentTeam = props.teams.find(
      (team) => team.name === props.teamname
    );

    const tasksList = currentTeam.scores;

    setTasks(tasksList);
    
    // const teamPoints = tasksList.map((task) => task.score);
    // const totalTeamPoints = teamPoints.reduce((a, b) => a + b, 0);
    // setTotalPoints(totalTeamPoints);
    // callback(totalPoints);
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <Task
          //key={task.id}
          name={task.name}
          points={task.points}
          callback={props.callback}
        ></Task>
      ))}
    </div>
  );
}
