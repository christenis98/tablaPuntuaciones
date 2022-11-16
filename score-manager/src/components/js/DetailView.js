import React, { useState, useEffect } from "react";
import NewTask from "./NewTask";
import TaskList from "./TaskList";

export default function DetailView(props) {
  const [isvisible, setIsvisble] = useState(false);
  const [updatedTeam, setUpdatedTeam] = useState(
    props.teams.find((team) => team.name === props.teamname)
  );

  const url = "http://localhost:8080/api/teams";

  useEffect(() => {
    // let currentTeam = props.teams.find((team) => team.name === props.teamname);
    // setUpdatedTeam(currentTeam);
  }, [updatedTeam]);

  // let currentTeam = props.teams.find((team) => team.name === props.teamname);
  // // console.log(currentTeam);
  // setUpdatedTeam(currentTeam);

  const clickHandler = () => {
    let isvis = false;
    setIsvisble(isvis);
    props.callback(isvis);
  };

  const updateDataBase = (team) => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(team),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log("Success: ", response);
      });
  };

  const newTaskHandler = (task) => {
    setUpdatedTeam((prevTeam) => {
      const newTeam = {
        id: prevTeam.id,
        name: prevTeam.name,
        scores: [...prevTeam.scores, task],
      };
      updateDataBase(newTeam);
      return newTeam;
    });
  };

  return (
    <>
      <div
        style={{ width: "110%" }}
        className="position-absolute top-50 start-50 translate-middle rounded-3 bg-light border border-secondary p-5"
      >
        <div className="d-flex justify-content-between">
          <h3>{props.teamname}</h3>
          <button
            onClick={clickHandler}
            className="btn btn-primary border border-dark"
          >
            x
          </button>
        </div>
        <hr></hr>
        <TaskList
          tasks={updatedTeam.scores}
          callback={props.callback}
        ></TaskList>
        <NewTask onAddTask={newTaskHandler} />
      </div>
    </>
  );
}
