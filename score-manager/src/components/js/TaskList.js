import React, { useState, useEffect } from "react";
import Task from "./Task";

export default function TaskList(props) {
  const [currentTasks, setCurrentTasks] = useState();

  let tasks;

  if (props.team != null)
  {
    tasks=props.team.scores;
  }

  return (
    <div>
      {tasks?.map(({ id, name, scores }) => (
        <Task
          key={id}
          name={name}
          scores={scores}          
        ></Task>
      ))}
    </div>
  );
}
