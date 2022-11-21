import React, { useState, useEffect } from "react";
import NewTaskButton from "./NewTaskButton";
import TaskList from "./TaskList";
import { Link, useParams, useNavigate } from "react-router-dom";
import DeleteTeamButton from "./DeleteTeamButton";

export default function DetailView() {
  const identifierObj = useParams();
  const [teams, setTeams] = useState([]);
  const [currentTeam, setCurrentTeam] = useState({});
  const [currentTeamName, setCurrentTeamName] = useState(" ");
  const navigate = useNavigate();

  const identifier = identifierObj.id;
  const API_URL = "http://localhost:8080/api/teams";

  const getTeams = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    getTeams().then((data) => setTeams(data));
  }, []);

  useEffect(() => {
    const currentTeam = teams.find((team) => team.id === identifier);
    setCurrentTeam({ currentTeam });
  }, [teams]);

  useEffect(() => {
    let teamName;
    if (currentTeam.currentTeam != null)
      teamName = currentTeam.currentTeam.name;
    setCurrentTeamName(teamName);
  }, [currentTeam]);

  // const newTaskHandler = (task) => {
  //   setCurrentTeam((prevTeam) => {
  //     const newTeam = {
  //       id: prevTeam.id,
  //       name: prevTeam.name,
  //       scores: [...prevTeam.scores, task],
  //     };

  //     getTeams().then((data) => setTeams(data));

  //     return newTeam;
  //   });
  // };

  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle rounded-3 bg-light border border-secondary p-5">
        <div className="d-flex justify-content-between">
          <h3>{currentTeamName}</h3>
          <Link to={"/"}>
            <button className="btn btn-primary">x</button>
          </Link>
        </div>
        <hr></hr>
        <TaskList team={currentTeam.currentTeam}></TaskList>
        <NewTaskButton></NewTaskButton>
        <DeleteTeamButton></DeleteTeamButton>
      </div>
    </>
  );
}
