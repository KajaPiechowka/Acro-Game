import React, { useState, useContext } from "react";
import SettingsContext from "../../assets/context/SettingsContext";

const Difficulty = () => {
  const [divPosition, setDivPosition] = useState("b-left");
  const { setContext } = useContext(SettingsContext);

  const valueSetDifficulty = (e) => {
    let value = e.target.value;
    setContext((prev) => {
      return {
        ...prev,
        difficulty: value,
      };
    });
  };
  const valueSetClass = (e) => {
    let value = e.currentTarget.value;
    if (value === "1") {
      setDivPosition("b-left");
    } else if (value === "2") {
      setDivPosition("b-center");
    } else if (value === "3") {
      setDivPosition("b-right");
    }
  };

  return (
    <div className="form__section ">
      <span>
        Choose <br />
        Difficulty:
      </span>
      <div className="form__settings">
        <div className={divPosition} />

        <input
          id="easy"
          type="radio"
          name="difficulty"
          value="1"
          className="form__radio"
          onClick={valueSetDifficulty}
          onChange={valueSetClass}
          defaultChecked="true"
        />
        <label className="form__settings-label" htmlFor="easy">
          Easy
        </label>

        <input
          id="medium"
          type="radio"
          name="difficulty"
          value="2"
          className="form__radio"
          onClick={valueSetDifficulty}
          onChange={valueSetClass}
        />
        <label className="form__settings-label" htmlFor="medium">
          Medium
        </label>

        <input
          id="hard"
          type="radio"
          name="difficulty"
          value="3"
          className="form__radio"
          onClick={valueSetDifficulty}
          onChange={valueSetClass}
        />
        <label className="form__settings-label" htmlFor="hard">
          Hard
        </label>
      </div>
    </div>
  );
};

export default Difficulty;
