import React, { useState } from "react";
import TaskList from "./TaskList";


export default function DetailView(props) {
  const [isvisible, setIsvisble] = useState(false);

  const clickHandler = () => {
    let isvis = false;
    setIsvisble(isvis);
    props.callback(isvis);
  };

  return (
    <>
      <div
        style={{width: "110%",}} className="position-absolute top-50 start-50 translate-middle rounded-3 bg-light border border-secondary p-5">
          <div className="d-flex justify-content-between">
            <h3>Team 0{props.teamnumber}</h3>
            <button onClick={clickHandler} className="btn btn-primary border border-dark">x</button>
          </div>
          <hr></hr>
        <TaskList teamnumber={props.teamnumber} mockeddb={props.mockeddb} callback={props.callback}></TaskList>
      </div>
    </>
  );
}
