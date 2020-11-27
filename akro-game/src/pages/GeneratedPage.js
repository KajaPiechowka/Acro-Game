import React, { useContext, useEffect, useState } from "react";
import { exampleData } from "../assets/data/exampleData";

import PoseList from "../components/Poses/PosesList";
import SettingsContext from "../assets/context/SettingsContext";

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
    return <PoseList data={data} />;
  }
};

export default GeneratedPage;
