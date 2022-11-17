import React, { useState, useEffect } from "react";
import NewTask from "./NewTask";
import TaskList from "./TaskList";
import { Link,useParams } from "react-router-dom";

export default function DetailView() {
  const identifierObj=useParams();
  const identifier=identifierObj.id;
  const API_URL = "http://localhost:8080/api/teams";

  const [teams, setTeams] = useState([]);
  const [updatedTeam, setUpdatedTeam] = useState({});

  const getTeams = async () => {
    const res=await fetch(API_URL)
    const data= await res.json()
    return data
  };

  // useEffect(() => {
  //   const currentTeam = teams.find((team) => team.id === identifier);
  //   setUpdatedTeam(currentTeam);
  // }, [updatedTeam]);

  useEffect(() => {
    getTeams().then(data=>setTeams(data));
  }, []);


  // const updateDataBase = (team) => {
  //   fetch(url, {
  //     method: "POST",
  //     body: JSON.stringify(team),
  //     headers: { "Content-Type": "application/json" },
  //   })
  //     .then((res) => res.json())
  //     .then((response) => {
  //       console.log("Success: ", response);
  //     });
  // };

  // const newTaskHandler = (task) => {
  //   setUpdatedTeam((prevTeam) => {
  //     const newTeam = {
  //       id: prevTeam.id,
  //       name: prevTeam.name,
  //       scores: [...prevTeam.scores, task],
  //     };
  //     updateDataBase(newTeam);
  //     return newTeam;
  //   });
  // };

  console.log(teams)
  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle rounded-3 bg-light border border-secondary p-5">
        <div className="d-flex justify-content-between">
          {/* <h3>{updatedTeam.name.toUpperCase()}</h3> */}
          <Link to={"/"}><button className="btn btn-primary border border-dark">x</button></Link>
        </div>
        <hr></hr>
        {/* <TaskList tasks={updatedTeam.scores} ></TaskList>  */}
        {/* <NewTask onAddTask={newTaskHandler} /> */}
      </div>
    </>
  );
}
