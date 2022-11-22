import React, { useState } from "react";
import "../css/NewTaskForm.css";

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
    <div className="my-3 w-25">
      <form onSubmit={submintHandler}>
        <div>
          <div className="d-flex justify-content-between my-1">
            <label>Task name</label>
            <input
              type="text"
              value={enteredTaskName}
              onChange={testNameChangeHandler}
            />
          </div>

          <div className="d-flex justify-content-between my-1">
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
          <button className="btn btn-danger my-3" type="submit">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTaskForm;
