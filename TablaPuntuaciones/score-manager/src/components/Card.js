import "./Card.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Card = (props) => {
  return (
    <div className="col-lg-2  col-sm-6 p-0 m-0 d-flex justify-content-center ">
      <button className=" btn-lg m-2 ">
        <div className="fw-bold text-uppercase ">Team 01</div>
        <div className="display-4">0</div>
      </button>
    </div>
  );
};

export default Card;
