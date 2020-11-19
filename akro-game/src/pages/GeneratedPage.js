import React, { useState, useEffect } from "react";

const API = "http://api.acrogame.net/poses/";

const GeneratedPage = () => {
  const [data, setData] = useState(false);

  useEffect(() => {
    console.log(API);
    fetch(API, {
      method: "GET",
      mode: "no-cors",
      headers: new Headers({
        api_token: "y4vemThlilQkAeQaesMgCw5MGG3qiiLhmlbD",
      }),
    })
      .then((response) => response.json())
      .then((poses) => {
        setData(poses);
      }, []);
    console.log(data);
  });
  return <>{data ? <h1>something</h1> : <h2>nothing</h2>}</>;
};

export default GeneratedPage;
