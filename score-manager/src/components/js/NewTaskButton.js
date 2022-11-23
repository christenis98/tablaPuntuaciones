import React, { useState } from "react";
import "../css/NewTask.css";
import NewTaskForm from "./NewTaskForm";

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

  const onSaveNewTask = (enteredTask) => {
    setIsVisible(false);
    setNewTask(true);
    props.onAddTask(enteredTask);
  };

  return (
    <>
      {newTask ? (
        <button
          className="col-2 new-task-button font-monospace"
          onClick={onClickHandler}
        >
          New Task
        </button>
      ) : (
        <button
          className=" col-3 new-task-button font-monospace"
          onClick={onClickHandler}
        >
          Hide New Task
        </button>
      )}
      {isVisible ? <NewTaskForm onSaveNewTask={onSaveNewTask} /> : null}
    </>
  );
};

export default NewTask;
