import "../css/Card.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";

const Card = (props) => {
  const [isvisible, setIsvisble] = useState(false);
  
  const clickHandler = () => {
    let isvis = true;
    setIsvisble(isvis);
    props.callback(isvis,props.team);
  };

  return (
    <div className="col-lg-2  col-sm-6 p-0 m-0 d-flex justify-content-center ">
      <button onClick={clickHandler} className=" btn-lg-2 m-2 ">
        <div className="text-uppercase fs-1 mb-4">Team {props.team}</div>
        <div className="fw-bold display-4 fs-1 mb-4">{props.score}</div>
      </button>
    </div>
  );
};

export default Card;
