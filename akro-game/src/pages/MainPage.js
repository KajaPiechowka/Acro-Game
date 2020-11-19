import React from "react";
import Dificulty from "../components/Forms/Dificulty";
import Poses from "../components/Forms/Poses";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="container main">
      <h1 className="main__title">
        Welcome in <br />
        Acro Game!
      </h1>
      <div className="form">
        <div className="form__holder">
          <Dificulty />
          <Poses />
        </div>
        <Link to="/generated" className="form__submit">
          Generate
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
