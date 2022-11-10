import React from "react";
import "./App.css";
import DetailView from "./components/DetailView";
import MainView from "./MainView.js";

function App() {
  const scoreData = [
    { team: 1, score: 5 },
    { team: 2, score: 5 },
    { team: 3, score: 5 },
    { team: 4, score: 5 },
    { team: 5, score: 5 },
    { team: 6, score: 5 },
    { team: 7, score: 5 },
    { team: 8, score: 5 },
    { team: 9, score: 5 },
    { team: 10, score: 5 },
  ];
  
  return (    
    <MainView/>     
  )
}

export default App;
