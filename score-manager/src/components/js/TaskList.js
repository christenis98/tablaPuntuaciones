import React, { useState, useEffect } from "react";
import Task from "./Task";

export default function TaskList(props) {
  const [tasks, setTasks] = useState([]);
  const [totalPoints, setTotalPoints] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((response) => {
  //       setUsers(response);
  //     });
  // }, []);

  useEffect(() => {
    const currentTeam = props.mockeddb.find(
      (team) => team.team == props.teamnumber
    );
    const tasksList = currentTeam.tasks;
    setTasks(tasksList);
    // const teamPoints = tasksList.map((task) => task.score);
    // const totalTeamPoints = teamPoints.reduce((a, b) => a + b, 0);
    // setTotalPoints(totalTeamPoints);
    // callback(totalPoints);
  }, []);

  console.log(tasks)

  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          description={task.description}
          score={task.score}
          callback={props.callback}
        ></Task>
      ))}
    </div>
  );
}
