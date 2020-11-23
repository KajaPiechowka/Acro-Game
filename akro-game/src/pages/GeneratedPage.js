import React, { useEffect, useState } from "react";
import { exampleData } from "../assets/data/exampleData";

import PoseList from "../components/Poses/PosesList";

require("dotenv").config();

const api = process.env.REACT_APP_API;
// const apiKey = process.env.REACT_APP_API_KEY;

const GeneratedPage = () => {
  const [data, setData] = useState(false);

  useEffect(() => {
    console.log(api);

    fetch(`${api}sequence/generate`, {
      method: "GET",
      difficulty: 2,
      length: 5,
    })
      .then((response) => response.json())
      .then((poses) => {
        setData(poses);
      });

    console.log(data);
  }, []);

  return <PoseList data={exampleData} />;

  // if (!data) {
  //   return <h1>Wait...</h1>;
  // } else {
  //   return <PoseList data={data} />;
  // }
};

export default GeneratedPage;
