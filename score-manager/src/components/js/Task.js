import React from "react";
import TaskButtons from "./TaskButtons";
import TaskData from "./TaskData";

export default function Task(props) {
  return (
    <div className="m-1 bg-info rounded-1 border border-secondary bg-success bg-opacity-50">
      <div className="d-flex align-items-center">
        <div style={{ width: "90%" }} className="m-1 d-flex gap-3 justify-content-between">

          <div>o</div>

          {/* <div>props.tasks.map({id, taskName})=>(<TaskData>key={id} taskname={taskName}</TaskData>)</div> */}

          <div className="fw-bold">Score: {props.score}</div>

        </div>
        <TaskButtons />
      </div>
    </div>
  );
}


{/* {<TaskData{key={taskId}, name={taskName}}></TaskData>)} */}