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
        style={{
          width: "110%",
          height: "110%",
        }}
        className="position-absolute top-50 start-50 translate-middle rounded-5 bg-light border border-secondary p-5"
      >
        <button
          onClick={clickHandler}
          style={{
            right: "2%",
            top: "3%",
          }}
          className="position-absolute btn btn-primary"
        >
          x
        </button>
        <h1>TEAM {props.teamnumber}</h1>
        <hr></hr>
        <TaskList></TaskList>
      </div>
    </>
  );
}
