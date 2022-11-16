import React, { useState, useEffect } from "react";
import "./App.css";
import MainView from "./components/js/MainView";
import DetailView from "./components/js/DetailView";
import { Routes, Route } from "react-router-dom";

const App=()=>{
  const API_URL = "http://localhost:8080/api/teams";

  const [teams, setTeams] = useState([]);

  useEffect(() => {
      fetch(API_URL)
        .then((res) => res.json())
        .then((response) => setTeams(response));        
    },[]);

  console.log(teams)

  return (
    <>
      <Routes>
        <Route path="/" element={<MainView teams={teams}/>}></Route>
        <Route path="/teamDetails/:id" element={<DetailView teams={teams}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
