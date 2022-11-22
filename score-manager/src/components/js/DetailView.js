import React, { useState, useEffect } from "react";
import NewTaskButton from "./NewTaskButton";
import TaskList from "./TaskList";
import { Link, useParams, useNavigate } from "react-router-dom";
import DeleteTeamButton from "./DeleteTeamButton";
import "../css/DetailView.css";

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
    <>
      <div
        style={{ width: "75%" }}
        className="background position-absolute top-50 start-50 translate-middle p-5"
      >
        <div className="d-flex justify-content-between">
          <h3 className="text-white font-monospace text-uppercase">
            {currentTeamName}
          </h3>
          <Link to={"/"}>
            <button className="btn-close btn-close-white">x</button>
          </Link>
        </div>
        <hr></hr>
        <TaskList team={currentTeam.currentTeam}></TaskList>
        <NewTaskButton onAddTask={onAddTask}></NewTaskButton>
      </div>
      <div className="p-5 d-flex justify-content-end">
        <DeleteTeamButton></DeleteTeamButton>
      </div>
    </>
  );
}
