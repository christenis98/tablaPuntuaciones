import React from "react";
import TaskButtons from "./TaskButtons";
import TaskData from "./TaskData";

export default function Task(props) {
  return (
    <div className="m-1 bg-info rounded-3 border border-secondary bg-opacity-100 bg-light">
      <div className="d-flex align-items-center">
        <div className="w-100 m-1 d-flex gap-3 justify-content-between font-monospace fw-bold pe-2">
          <div>{props.name}</div>
          <div>{props.points}</div>
        </div>
      </div>
    </div>
  );
}
