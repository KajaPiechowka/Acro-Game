import React, { useState } from "react";

const Poses = () => {
  const [dificulty, setDificulty] = useState("b-left");
  const [isCheckedTen, setIsCheckedTen] = useState(true);
  const [isCheckedFifteen, setIsCheckedFifteen] = useState(false);

  const valueSetDificultyTen = (e) => {
    let value = e.currentTarget.value;
    setDificulty(value);
    setIsCheckedTen(true);

    console.log(dificulty);
  };
  const valueSetDificultyFifteen = (e) => {
    let value = e.currentTarget.value;
    setDificulty(value);
    setIsCheckedFifteen(true);

    console.log(dificulty);
  };

  const inputSetDificulty = () => {
    setDificulty("b-right");
    setIsCheckedTen(false);
    setIsCheckedFifteen(false);
  };

  return (
    <div className="form__section">
      <span>
        Number of
        <br /> Poses:
      </span>
      <div className="form__settings">
        <div className={dificulty} />
        <label className="form__settings-label">
          <input
            type="radio"
            name="number"
            value="b-left"
            className="form__radio"
            checked={isCheckedTen}
            onChange={valueSetDificultyTen}
          />
          10
        </label>
        <label className="form__settings-label">
          <input
            type="radio"
            name="number"
            value="b-center"
            className="form__radio"
            checked={isCheckedFifteen}
            onChange={valueSetDificultyFifteen}
          />
          15
        </label>
        <input
          className="form__input"
          type="number"
          name="number"
          placeholder="number"
          onFocus={inputSetDificulty}
          min="1"
        ></input>
      </div>
    </div>
  );
};

export default Poses;
