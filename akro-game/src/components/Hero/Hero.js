import React, { useState } from "react";
import HowToPlayButton from "../HowToPlay/HowToPlayButton";
import HowToPlay from "../HowToPlay/HowToPlay";

const Hero = ({ children }) => {
  const [showHowToPlay, setShowHowToPlay] = useState(false);

  const handleShowHowToPlay = () => {
    setShowHowToPlay((prev) => !prev);
  };

  return (
    <div className="hero">
      {showHowToPlay ? (
        <HowToPlay event={handleShowHowToPlay} />
      ) : (
        <HowToPlayButton event={handleShowHowToPlay} />
      )}

      {children}
    </div>
  );
};

export default Hero;
