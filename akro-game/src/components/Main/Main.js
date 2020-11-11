import React from "react";

const Main = () => {
  return (
    <div className="container main">
      <h1 className="main__title">
        Welcome in <br />
        Acro Game!
      </h1>
      <div className="main__forms">
        <div className="main__form">
          <span>Choose Dificulty:</span>
          <div className="main__buttons">
            <button className="main__button">Easy</button>
            <button className="main__button">Easy</button>
            <button className="main__button">Easy</button>
          </div>
        </div>
        <div className="main__form">
          <span>Number of Poses</span>
          <div className="main__buttons">
            <button className="main__button">Easy</button>
            <button className="main__button">Easy</button>
            <button className="main__button">Easy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
