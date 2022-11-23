import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../css/DeleteTeamButton.css";

export default function DeleteTeamButton() {
  const idObj = useParams();
  const id = idObj.id;
  const navigate = useNavigate();

  const Navigate = () => {
    navigate("/");
  };

  const ClickHandler = async () => {
    const res = await fetch(`http://localhost:8080/api/teams/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const response = await res;
    console.log(response);
    const nav = await Navigate();
  };

  return (
    <div>
      <button onClick={ClickHandler} className="delete-team-button">
        Delete This Team
      </button>
    </div>
  );
}
