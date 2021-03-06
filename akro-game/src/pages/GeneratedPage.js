import React, { useContext, useEffect, useState } from "react";

import Pose from "../components/Poses/Pose";
import SettingsContext from "../assets/context/SettingsContext";
import { Link } from "react-router-dom";

require("dotenv").config();

const api = process.env.REACT_APP_API;

const GeneratedPage = () => {
  const { context, setContext } = useContext(SettingsContext);
  const [data, setData] = useState(false);

  const resetContext = () => {
    setContext({ difficulty: "1", poses: "10" });
  };

  const generateSequence = () => {
    fetch(
      `${api}sequence/generate?difficulty=${context.difficulty}&length=${context.poses}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    generateSequence();
  }, []);

  if (!data) {
    return <h1>Wait...</h1>;
  } else {
    return (
      <div className="poses">
        <ul className="poses__list">
          {data.data.map(({ id, name }, index) => (
            <Pose name={name} key={id} index={index} />
          ))}
        </ul>
        <div className="poses__links">
          <button
            type="reset"
            onClick={generateSequence}
            className="poses__button"
          >
            Generate New
          </button>
          <Link to="/" className="poses__button" onClick={resetContext}>
            Change Settings
          </Link>
        </div>
      </div>
    );
  }
};

export default GeneratedPage;
