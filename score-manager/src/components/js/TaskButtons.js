import React from "react";

export default function button1() {
  return (
    <div className="d-flex gap-2 p-1">
      <button className="btn border border-dark bg-light"><box-icon name='plus-circle'></box-icon></button>
      <button className="btn border border-dark bg-light"><box-icon name='edit-alt' ></box-icon></button>
    </div>
  );
}
