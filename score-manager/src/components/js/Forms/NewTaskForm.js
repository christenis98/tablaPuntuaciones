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

    // const newTeam = {
    //   id: prevTeam.id,
    //   name: prevTeam.name,
    //   scores: [...prevTeam.scores, task],
    // };

    // postNewTask(newTeam);
  };

  // const postNewTask = () => {
  //   fetch("http://localhost:8080/api/teams", {
  //     method: "POST",
  //     body: JSON.stringify(team),
  //     headers: { "Content-Type": "application/json" },
  //   })
  //     .then((res) => res.json())
  //     .then((response) => {
  //       console.log("Success: ", response);
  //     });
  // };

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
