import React, { useState } from "react";
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
        <button className="btn btn-primary my-2" onClick={onClickHandler}>
          New Task
        </button>
      ) : (
        <button className="btn btn-primary my-2" onClick={onClickHandler}>
          Hide
        </button>
      )}
      {isVisible ? <NewTaskForm onSaveNewTask={onSaveNewTask} /> : null}
    </>
  );
};

export default NewTask;
