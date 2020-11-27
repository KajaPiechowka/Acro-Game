import React from "react";

const Pose = ({ name, index }) => {
  return (
    <li className="poses__pose">
      <div className="poses__text">
        <span>{index + 1}</span>
        {name}
      </div>
    </li>
  );
};

export default Pose;
