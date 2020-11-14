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
      <form className="main__forms" id="main">
        <Dificulty />
        <Poses />
      </form>
      <button type="submit" className="main__submit" htmlFor="main">
        Generate
      </button>
    </div>
  );
};

export default Main;
