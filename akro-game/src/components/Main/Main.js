import React from "react";

const Main = () => {
  return (
    <div className="container main">
      <h1 className="main__title">
        Welcome in <br />
        Acro Game!
      </h1>
      <form className="main__forms">
        <div className="main__form">
          <span>
            Choose <br />
            Dificulty:
          </span>
          <div className="main__buttons">
            <button className="main__button">Easy</button>
            <button className="main__button">Medium</button>
            <button className="main__button">Hard</button>
          </div>
        </div>
        <div className="main__form">
          <span>
            Number of
            <br /> Poses:
          </span>
          <div className="main__buttons">
            <button className="main__button">10</button>
            <button className="main__button">15</button>
            <input
              className="main__input"
              type="number"
              name="number"
              placeholder="number"
            ></input>
          </div>
        </div>
      </form>
      <button type="submit" className="main__submit">
        Generate
      </button>
    </div>
  );
};

export default Main;
