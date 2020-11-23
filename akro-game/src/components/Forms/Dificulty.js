import React, { useState } from "react";

const Dificulty = () => {
  const [divPosition, setDivPosition] = useState("b-left");
  const [dificulty, setDificulty] = useState("1");

  const valueSetDificulty = (e) => {
    let value = e.currentTarget.value;
    setDificulty(value);
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
        Dificulty:
      </span>
      <div className="form__settings">
        <div className={divPosition} />

        <input
          id="easy"
          type="radio"
          name="dificulty"
          value="1"
          className="form__radio"
          onChange={valueSetDificulty}
          defaultChecked="true"
        />
        <label className="form__settings-label" htmlFor="easy">
          Easy
        </label>

        <input
          id="medium"
          type="radio"
          name="dificulty"
          value="2"
          className="form__radio"
          onChange={valueSetDificulty}
        />
        <label className="form__settings-label" htmlFor="medium">
          Medium
        </label>

        <input
          id="hard"
          type="radio"
          name="dificulty"
          value="3"
          className="form__radio"
          onChange={valueSetDificulty}
        />
        <label className="form__settings-label" htmlFor="hard">
          Hard
        </label>
      </div>
    </div>
  );
};

export default Dificulty;
