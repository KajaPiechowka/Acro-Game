import React from "react";
import Difficulty from "../components/Forms/Difficulty";
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
          <Difficulty />
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
