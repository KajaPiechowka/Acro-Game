import React from "react";

const Dificulty = () => {
  return (
    <div className="main__form">
      <span>
        Choose <br />
        Dificulty:
      </span>
      <div className="main__settings">
        <div className="main__border b-left" />
        <label className="main__settings-label">
          <input
            type="radio"
            name="dificulty"
            vlaue="easy"
            className="main__radio"
            checked
          />
          Easy
        </label>

        <label className="main__settings-label">
          <input
            type="radio"
            name="dificulty"
            value="medium"
            className="main__radio"
          />
          Medium
        </label>

        <label className="main__settings-label">
          <input
            type="radio"
            name="dificulty"
            value="hard"
            className="main__radio"
          />
          Hard
        </label>
      </div>
    </div>
  );
};

export default Dificulty;
