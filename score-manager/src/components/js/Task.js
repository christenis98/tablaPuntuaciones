import React from "react";

export default function Task(props) {
  return (
    <div className="m-1 bg-primary rounded-1 border border-secondary">
      <div className=" m-1 d-flex gap-3">
        <div className="text-white fw-bold">Task: {props.team}</div>
        <div className="text-white">Member: {props.score}</div>
      </div>
    </div>
  );
}
