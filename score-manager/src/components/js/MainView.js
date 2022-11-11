import React, { useState } from "react";
import Score from "./Score";
import "../css/mainView.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DetailView from "./DetailView";

const MainView = () => {
  const [isvisible, setisvisible] = useState(false)
  const [teamnumber, setTeamNumber] = useState("")

  const callback = (isvis, team) => {
    setisvisible(isvis);
    setTeamNumber(team);
  };

  return (
    <div className="backgroundColor">
      <div
        className="container d-flex flex-column justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="row justify-content-center">
          <div className="col-10 m-3 radius soleraBackColor position-relative">
            <div>
              <h2 className="text-white m-4">Solera Teams Bootcamp 4</h2>
            </div>
            <Score callback={callback} />
            {isvisible && <DetailView callback={callback} teamnumber={teamnumber} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainView;
