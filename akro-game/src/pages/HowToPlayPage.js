import React from "react";
import { Link } from "react-router-dom";

const HowToPlayPage = () => {
  return (
    <div className="how-to-play">
      <h2 className="how-to-play__title">How To Play?</h2>
      <p className="how-to-play__text">
        Choosing difficulty and length of the progression you will end up with a
        list of acro yoga poses Your goal is to transition from through all them
        one by one doing as few of transition poses as possible.
      </p>
      <p className="how-to-play__text-small">Good Luck!</p>
      <Link className="how-to-play__link" to="/">
        Play The Game!
      </Link>
    </div>
  );
};

export default HowToPlayPage;
