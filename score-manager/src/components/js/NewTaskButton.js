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
    <>
      {newTask ? (<button className="btn btn-primary" onClick={onClickHandler}>New Task</button>) : (<button className="btn btn-primary" onClick={onClickHandler}>Hide New Task</button>)}
      {isVisible ? <NewTaskForm onSaveNewTask={newTaskHandler} /> : null}
    </>
  );
};

export default NewTask;