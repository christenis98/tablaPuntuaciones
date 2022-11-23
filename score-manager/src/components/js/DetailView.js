import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../css/DetailView.css";
import DeleteTeamButton from "./DeleteTeamButton";
import NewTaskButton from "./NewTaskButton";
import TaskList from "./TaskList";


export default function DetailView() {
  const identifierObj = useParams();
  const [teams, setTeams] = useState([]);
  const [currentTeam, setCurrentTeam] = useState({});
  const [currentTeamName, setCurrentTeamName] = useState(" ");

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

  const onAddTask = (task) => {
    const teamUpdated = {
      id: currentTeam.currentTeam.id,
      name: currentTeam.currentTeam.name,
      scores: [...currentTeam.currentTeam.scores, task],
    };

    postTeamWithNewTask(teamUpdated);
  };

  const postTeamWithNewTask = async (teamUpdated) => {
    const response = fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(teamUpdated),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const fetchedData = await response;
    const fetchedDataJson = await fetchedData.json();
    console.log("Success: ", fetchedDataJson);

    getTeams().then((data) => setTeams(data));
  };  

  return (
    <div className="page-background d-flex justify-content-center">
      <div
        style={{ width: "45%" }}
        className="detail-view p-5"
      >
        <div className="d-flex justify-content-center"> <DeleteTeamButton></DeleteTeamButton> </div>
        <div className="d-flex pb-3 justify-content-between">
          <h3 className="text-white font-monospace text-uppercase mt-2"> {currentTeamName} </h3>
          <Link to={"/"}>
            <button className="btn-close btn-close-white"></button>
          </Link>
        </div>
        <TaskList team={currentTeam.currentTeam}></TaskList>
        <div className="row d-flex justify-content-center"><NewTaskButton onAddTask={onAddTask}></NewTaskButton></div>
      </div>
      
    </div>
  );
}
