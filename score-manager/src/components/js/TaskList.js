import React, { useState, useEffect } from "react";
import Task from "./Task";

export default function TaskList(props) {
  const [currentTasks, setCurrentTasks] = useState([]);
  const [currentTeamPoints, setCurrentTeamPoints] = useState("0");

  let tasks;
  let totalPoints;

  if (props.team != null) {
    tasks = props.team.scores;
    const pointsArray = tasks.map((task) => task.points);
    let initialValue = 0;
    totalPoints = pointsArray.reduce(
      (totalValue, currentValue) => totalValue + currentValue,
      initialValue
    );

    console.log(totalPoints)
  }


  return (
    <div className="mb-4">
      {tasks?.map(({ id, name, points }) => (
        <Task key={id} name={name} points={points}></Task>
      ))}
    </div>
  );
}
