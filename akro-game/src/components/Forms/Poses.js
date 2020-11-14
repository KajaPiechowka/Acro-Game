import React from "react";

const Poses = () => {
  return (
    <div className="form__section">
      <span>
        Number of
        <br /> Poses:
      </span>
      <div className="form__settings">
        <div className="form__border b-right" />
        <label className="form__settings-label">
          <input
            type="radio"
            name="number"
            value="10"
            className="form__radio"
            defaultChecked="true"
          />
          10
        </label>
        <label className="form__settings-label">
          <input
            type="radio"
            name="number"
            value="15"
            className="form__radio"
          />
          15
        </label>
        <input
          className="form__input"
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
