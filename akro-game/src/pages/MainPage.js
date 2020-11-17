import React from "react";

import HowToPlayLink from "../components/HowToPlayLink/HowToPlayLink";

const Hero = ({ children }) => (
  <div className="hero">
    <HowToPlayLink />
    {children}
  </div>
);

export default Hero;
