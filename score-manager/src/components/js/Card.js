import "../css/Card.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams } from "react-router-dom";

import React, { useState } from "react";

const Card = (props) => {
  return (
    <div className="col-lg-2 col-sm-6 p-0 m-0 d-flex justify-content-center">
      <Link to={`/TeamDetails/${props.identifier}`}><button className=" btn-lg-2 m-2 rounded-3">
        <div className="text-uppercase fs-3 mb-4">{props.name}</div>
        <div className="fw-bold display-4 fs-1 mb-4">0</div>
      </button></Link>
    </div>
  );
};

export default Card;
