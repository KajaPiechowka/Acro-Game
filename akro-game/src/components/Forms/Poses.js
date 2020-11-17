import React, { useState } from "react";

const Poses = () => {
  const [chosen, setChosen] = useState("d-left");

  const valueSetDificulty = (e) => {
    let value = e.currentTarget.value;
    setChosen(value);
    console.log(chosen);
  };

  return (
    <div className="form__section">
      <span>
        Number of
        <br /> Poses:
      </span>
      <div className="form__settings">
        <div className={chosen} />

        <input
          id="option1"
          type="radio"
          name="number"
          value="d-left"
          className="form__radio"
          checked={chosen === "d-left"}
          onChange={valueSetDificulty}
        />
        <label className="form__settings-label" htmlFor="option1">
          10
        </label>

        <input
          id="option2"
          type="radio"
          name="number"
          value="d-center"
          className="form__radio"
          checked={chosen === "d-center"}
          onChange={valueSetDificulty}
        />
        <label className="form__settings-label" htmlFor="option2">
          15
        </label>

        <input
          id="option3"
          type="radio"
          name="number"
          value="d-right"
          className={chosen === "d-right" ? "invisible" : "form__radio"}
          checked={chosen === "d-right"}
          onChange={valueSetDificulty}
        />
        <label
          className={
            chosen === "d-right" ? "invisible" : "form__settings-label"
          }
          htmlFor="option3"
        >
          Your Number
        </label>
        {chosen === "d-right" ? (
          <input
            className="form__input"
            type="number"
            name="number"
            min="1"
            max="30"
            autoFocus={true}
          ></input>
        ) : null}
      </div>
    </div>
  );
};

export default Poses;
