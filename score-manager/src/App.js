import React from "react";
import "./App.css";
import MainView from "./components/js/MainView";

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

  return (   
    <MainView scoreData={scoreData} keys={keys}/>     
  )
}

export default App;
