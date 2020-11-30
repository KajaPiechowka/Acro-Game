import React, { useContext, useEffect, useState } from "react";

import Pose from "../components/Poses/Pose";
import SettingsContext from "../assets/context/SettingsContext";
import { Link } from "react-router-dom";

require("dotenv").config();

const api = process.env.REACT_APP_API;
const apiKey = process.env.REACT_APP_API_KEY;

const GeneratedPage = () => {
  const { context } = useContext(SettingsContext);
  const [data, setData] = useState(false);

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
    console.log(context);
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
            className="form__submit poses__button"
          >
            Generate New
          </button>
          <Link to="/" className="form__submit">
            Change Settings
          </Link>
        </div>
      </div>
    );
  }
};

export default GeneratedPage;
