import React from "react";
import Dificulty from "../Forms/Dificulty";
import Poses from "../Forms/Poses";

const Main = () => {
  return (
    <div className="container main">
      <h1 className="main__title">
        Welcome in <br />
        Acro Game!
      </h1>
      <form className="form">
        <div className="form__holder">
          <Dificulty />
          <Poses />
        </div>
        <button type="submit" className="form__submit">
          Generate
        </button>
      </form>
    </div>
  );
};

export default Main;
