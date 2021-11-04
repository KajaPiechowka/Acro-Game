import React from "react";

const Pose = ({ name, index }) => {
  return (
    <li className="poses__pose">
      <div className="poses__pose-text">
        <span className="poses__pose-number">{index + 1}.</span>
        {name}
      </div>
    </li>
  );
};

export default Pose;
