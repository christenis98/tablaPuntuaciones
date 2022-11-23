import React, { useState, useEffect } from "react";
import "./App.css";
import MainView from "./components/js/MainView";
import DetailView from "./components/js/DetailView";
import { Routes, Route } from "react-router-dom";

const App=()=>{

  const getPoints=(totalPoints)=>{console.log(totalPoints)}

  return (
    <>
      <Routes>
        <Route path="/" element={<MainView/>}></Route>
        <Route path="/teamDetails/:id" element={<DetailView/>}></Route>
      </Routes>
    </>
  );
}

export default App;
