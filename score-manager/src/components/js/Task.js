import React from "react";
import TaskButtons from "./TaskButtons";
import TaskData from "./TaskData";

export default function Task(props) {
  return (
    <div className="m-1 bg-info rounded-1 border border-secondary bg-success bg-opacity-50">
      <div className="d-flex align-items-center">
        <div className="w-100 m-1 d-flex gap-3 justify-content-between">
          <div className="fw-bold">{props.name}</div>
          <div className="fw-bold">{props.points}</div>
        </div>
      </div>
    </div>
  );
}
