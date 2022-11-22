import "../css/Card.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams } from "react-router-dom";

import React, { useState } from "react";

const Card = (props) => {
  return (
    <div className="col-lg-2 col-sm-6 p-0 ms-2 me-2 d-flex justify-content-center ">
      <Link className="text-light " to={`/TeamDetails/${props.identifier}`}>
        <button className="btn btn-team m-3">
          <div className="text-uppercase fs-4 mb-4 mt-2 ms-2 me-2 ps-0 pe-0 font-monospace"> {props.name} </div>
          <div className="fw-bold display-4 fs-0 mb-4 font-monospace">0</div>
        </button>
      </Link>
    </div>
  );
};

export default Card;
