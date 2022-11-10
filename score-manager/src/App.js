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

  const keys=[1,2,3,4,5,6,7,8,9,10]

  // const scoreData = [
  //   "team 1", "team 2", "team 3", "team 4", "team 5", "team 6", "team 7", "team 8", "team 9", "team 10"
  // ];

  return (    
    <>
      <h1>SOLERA TEAMS. BOOTCAMP 4</h1>
      <hr></hr>
      <MainView scoreData={scoreData} keys={keys}/> 
    </>        
  )
}

export default App;
