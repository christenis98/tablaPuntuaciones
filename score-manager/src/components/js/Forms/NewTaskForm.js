import React, { useState } from "react";
import "../../css/NewTaskForm.css";

const NewTaskForm = (props) => {
  const [enteredTaskName, setEnteredTaskName] = useState("");
  const [enteredPoints, setEnteredPoints] = useState("");

  const testNameChangeHandler = (event) => {
    setEnteredTaskName(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredPoints(event.target.value);
  };

  const submintHandler = (event) => {
    event.preventDefault();
    const task = {
      name: enteredTaskName,
      points: enteredPoints,
      id: Math.random().toString().split(".")[1],
    };
    props.onSaveNewTask(task);
    setEnteredPoints("");
    setEnteredTaskName("");
  };

  return (
    <div>
      <form onSubmit={submintHandler}>
        <div className="new-expense__element">
          <div className="new-task__form">
            <label>Task name</label>
            <input
              type="text"
              value={enteredTaskName}
              onChange={testNameChangeHandler}
            />
          </div>

          <div className="new-task__form">
            <label>Points</label>
            <input
              type="number"
              value={enteredPoints}
              onChange={amountChangeHandler}
              min="0"
              max="9.99"
            />
          </div>
        </div>
        <div>
          <button type="submit">Add Task</button>
        </div>
      </form>
    </div>
  );
};

export default NewTaskForm;
