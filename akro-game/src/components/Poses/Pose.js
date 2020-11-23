import React from "react";

const Pose = ({ name }) => {
  return (
    <li className="poses__pose">
      <div className="poses__text">{name}</div>
    </li>
  );
};

export default Pose;
