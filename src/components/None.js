import React from "react";

const None = () => {
  return (
    <div className="btn-container">
      <div className="wrapper">
        <button className="minus-btn">
          <i className="fa-solid fa-minus"></i>
        </button>
        <span className="none">None</span>
      </div>
      <button className="plus-btn">
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default None;
