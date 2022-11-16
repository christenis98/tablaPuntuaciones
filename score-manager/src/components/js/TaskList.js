import React, { useState, useEffect } from "react";
import Task from "./Task";

export default function TaskList(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasksList = props.tasks;
    setTasks(tasksList);
  }, [props.tasks]);

  return (
    <div>
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
