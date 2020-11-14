import React from "react";

const Poses = () => {
  return (
    <div className="main__form">
      <span>
        Number of
        <br /> Poses:
      </span>
      <div className="main__settings">
        <div className="main__border b-left" />
        <label className="main__settings-label">
          <input
            type="radio"
            name="number"
            value="10"
            className="main__radio"
            checked="true"
          />
          10
        </label>
        <label className="main__settings-label">
          <input
            type="radio"
            name="number"
            value="15"
            className="main__radio"
          />
          15
        </label>
        <input
          className="main__input"
          type="number"
          name="number"
          placeholder="number"
          min="1"
        ></input>
      </div>
    </div>
  );
};

export default Poses;
