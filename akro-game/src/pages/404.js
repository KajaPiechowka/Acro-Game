import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => (
  <div className="not-found">
    <h1>404</h1>
    <p>Thers is no page like this</p>
    <Link className="not-found__link" to="/">
      Go to main Page
    </Link>
  </div>
);

export default PageNotFound;
