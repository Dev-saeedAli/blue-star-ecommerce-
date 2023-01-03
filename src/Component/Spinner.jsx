import React from "react";

const Spinner = () => {
  return (
    <div className="mx-auto my-auto text-center">
      <div
        className="spinner-border text-success"
        style={{width: "5rem",  height: "5rem"}}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        className="spinner-grow text-success"
        style={{width: "5rem", height: "5rem"}}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
