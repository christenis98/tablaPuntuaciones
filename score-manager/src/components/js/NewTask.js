import React, { useState } from "react";
import "../css/NewTask.css";
import NewTaskForm from "./Forms/NewTaskForm";

const NewTask = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [newTask, setNewTask] = useState(true);

  const onClickHandler = () => {
    if (newTask) {
      setIsVisible(true);
      setNewTask(false);
    } else {
      setIsVisible(false);
      setNewTask(true);
    }
  };

  const newTaskHandler = (enteredTask) => {
    setIsVisible(false);
    setNewTask(true);
    props.onAddTask(enteredTask);
  };

  return (
    <div>
      {newTask ? (
        <button className="new-task-button font-monospace" onClick={onClickHandler}>
          New Task
        </button>
      ) : (
        <button className="new-task-button font-monospace" onClick={onClickHandler}>
          Hide New Task
        </button>
      )}
      {isVisible ? <NewTaskForm onSaveNewTask={newTaskHandler} /> : null}
    </div>
  );
};

export default NewTask;
