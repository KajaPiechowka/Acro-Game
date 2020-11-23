import React, { useState } from "react";

const Poses = () => {
  const [chosen, setChosen] = useState("radio1");
  const [divPosition, setDivPosition] = useState("d-left");
  const [posesValue, setPosesValue] = useState("10");

  const valueSetDificulty = async (e) => {
    let value = e.currentTarget.value;
    setChosen(value);
    console.log(chosen);

    if (value === "radio1") {
      setPosesValue("10");
      setDivPosition("d-left");
    } else if (value === "radio2") {
      setPosesValue("15");
      setDivPosition("d-center");
    } else if (value === "radio3") {
      setDivPosition("d-right");
    }
  };

  const changePosesValue = (e) => {
    let value = e.target.value;
    setPosesValue(value);
  };

  return (
    <div className="form__section">
      <span>
        Number of
        <br /> Poses:
      </span>
      <div className="form__settings">
        <div className={divPosition} />

        <input
          id="option1"
          type="radio"
          name="number"
          value="radio1"
          className="form__radio"
          checked={chosen === "radio1"}
          onChange={valueSetDificulty}
        />
        <label className="form__settings-label" htmlFor="option1">
          10
        </label>

        <input
          id="option2"
          type="radio"
          name="number"
          value="radio2"
          className="form__radio"
          checked={chosen === "radio2"}
          onChange={valueSetDificulty}
        />
        <label className="form__settings-label" htmlFor="option2">
          15
        </label>

        <input
          id="option3"
          type="radio"
          name="number"
          value="radio3"
          className={chosen === "radio3" ? "invisible" : "form__radio"}
          checked={chosen === "radio3"}
          onChange={valueSetDificulty}
        />
        <label
          className={chosen === "radio3" ? "invisible" : "form__settings-label"}
          htmlFor="option3"
        >
          Your Number
        </label>
        {chosen === "radio3" ? (
          <input
            className="form__input"
            type="number"
            name="number"
            min="1"
            max="30"
            autoFocus={true}
            onChange={changePosesValue}
          ></input>
        ) : null}
      </div>
    </div>
  );
};

export default Poses;
