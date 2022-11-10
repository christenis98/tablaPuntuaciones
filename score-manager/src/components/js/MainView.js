import React, { useState } from "react";
import Score from "./Score";
import "../css/mainView.css"
import "bootstrap/dist/css/bootstrap.min.css";


const MainView = ({ scoreData }) => {
  return (
    <div className="backgroundColor">
      <div className="container mb-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-7 radius soleraBackColor ">
            <div className="">
              <h2 className="text-white m-4">Solera Teams Bootcamp 4</h2>
            </div>

            <Score scoreData={scoreData}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainView;
