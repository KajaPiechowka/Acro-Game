import React from "react";
import Pose from "./Pose";
import { Link } from "react-router-dom";

const PoseList = ({ data }) => {
  return (
    <div className="poses">
      <ul className="poses__list">
        {data.data.map(({ id, name }, index) => (
          <Pose name={name} key={id} index={index} />
        ))}
      </ul>
      <div className="poses__links">
        <Link to="/generated" className="form__submit">
          Generate New
        </Link>
        <Link to="/" className="form__submit">
          Change Settings
        </Link>
      </div>
    </div>
  );
};
export default PoseList;
