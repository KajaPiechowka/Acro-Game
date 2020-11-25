import React, { useState } from "react";
import Dificulty from "../components/Forms/Dificulty";
import Poses from "../components/Forms/Poses";
import { Link } from "react-router-dom";

const MainPage = () => {
  const [dificulty, setDificulty] = useState("1");
  const [poses, setPoses] = useState("10");

  const updateDificulty = (value) => {
    setDificulty(value);
  };
  const updatePoses = (value) => {
    setPoses(value);
  };

  return (
    <div className="container main">
      <h1 className="main__title">
        Welcome in <br />
        Acro Game!
      </h1>
      <div className="form">
        <div className="form__holder">
          <Dificulty update={updateDificulty} />
          <Poses update={updatePoses} />
        </div>
        <Link
          to={{
            pathName: "/generated",
          }}
          className="form__submit"
        >
          Generate
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
