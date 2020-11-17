import React, { useState, useEffect } from "react";

const API = "dupa";

const GeneratedPage = () => {
  const [data, setData] = useState(false);

  useEffect(() => {
    fetch({ API })
      .then((response) => response.json())
      .then((poses) => {
        setData(poses);
      }, []);
  });

  {
    data ? <h1>coś jest</h1> : <h2>nie ma</h2>;
  }
};

export default GeneratedPage;
