import React, { useState } from "react";
import { exampleData } from "../assets/data/exampleData";

import PoseList from "../components/Poses/PosesList";

require("dotenv").config();

// const api = process.env.REACT_APP_API;
// const apiKey = process.env.REACT_APP_API_KEY;

const GeneratedPage = (props) => {
  return (
    <>
      {console.log(props)}
      <PoseList data={exampleData} />
    </>
  );

  // if (!data) {
  //   return <h1>Wait...</h1>;
  // } else {
  //   return <PoseList data={data} />;
  // }
};

export default GeneratedPage;
