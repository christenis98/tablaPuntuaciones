import React, { useState, useEffect } from "react";
import Task from "./Task";

export default function TaskList(props) {
  const [tasks, setTasks] = useState([]);
  // const [totalPoints, setTotalPoints] = useState([]);

  // console.log(props.team + "team from detail view");

  useEffect(() => {
    const tasksList = props.tasks;

    setTasks(tasksList);

    console.log("deloquequieras");
    // const teamPoints = tasksList.map((task) => task.score);
    // const totalTeamPoints = teamPoints.reduce((a, b) => a + b, 0);
    // setTotalPoints(totalTeamPoints);
    // callback(totalPoints);
  }, [props.tasks]);

  return (
    <div className="mb-4">
      {tasks.map((task) => (
        <Task
          key={task.id}
          name={task.name}
          points={task.points}
          callback={props.callback}
        ></Task>
      ))}
    </div>
  );
}
