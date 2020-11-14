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
        <label className="form__settings-label">
          <input
            type="radio"
            name="dificulty"
            value="b-left"
            className="form__radio"
            onChange={valueSetDificulty}
            defaultChecked="true"
          />
          Easy
        </label>

        <label className="form__settings-label">
          <input
            type="radio"
            name="dificulty"
            value="b-center"
            className="form__radio"
            onChange={valueSetDificulty}
          />
          Medium
        </label>

        <label className="form__settings-label">
          <input
            type="radio"
            name="dificulty"
            value="b-right"
            className="form__radio"
            onChange={valueSetDificulty}
          />
          Hard
        </label>
      </div>
    </div>
  );
};

export default Dificulty;
