import React, { useState } from "react";
import HowToPlayButton from "../HowToPlay/HowToPlayButton";
import HowToPlay from "../HowToPlay/HowToPlay";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

//TODO: add button to the menu about classes
const Hero = ({ children }) => {
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const location = useLocation();

  const handleShowHowToPlay = () => {
    setShowHowToPlay((prev) => !prev);
  };

  return (
    <div className="hero">
      {showHowToPlay ? <HowToPlay event={handleShowHowToPlay} /> : null}
      <ul className="hero__menu">
        <li>
          {location.pathname === "/vilnius" ? (
            <Link className="hero__link" to="/">
              Acro Game
            </Link>
          ) : (
            <Link className="hero__link" to="/vilnius">
              Classes in Vilnius!
            </Link>
          )}
        </li>
        <li>
          {showHowToPlay && location.pathname === "/vilnius" ? null : (
            <HowToPlayButton event={handleShowHowToPlay} />
          )}
        </li>
      </ul>

      {children}
    </div>
  );
};

export default Hero;
