import React, { useState } from "react";

const Dificulty = () => {
  const [dificulty, setDificulty] = useState("b-left");

  const valueSetDificulty = (e) => {
    let value = e.currentTarget.value;
    setDificulty(value);
    console.log(dificulty);
  };

  return (
    <div className="form__section ">
      <span>
        Choose <br />
        Dificulty:
      </span>
      <div className="form__settings">
        <div className={dificulty} />

        <input
          id="easy"
          type="radio"
          name="dificulty"
          value="b-left"
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
          value="b-center"
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
          value="b-right"
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
