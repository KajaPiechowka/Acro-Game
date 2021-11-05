import { Button } from '@mui/material';
import React from 'react';
import Header from '../Header/Header';

interface HeroProps {
  children: JSX.Element;
}

const Hero = ({ children }: HeroProps) => (
  <div className="container">
    <Header />
    <div className="hero">
      <div className="hero__yellow-wrapper">
        <div className="hero__white-wrapper">
          <p className="hero__text">
            The game for all Acroyoga freaks who want’s to make they practice
            more challenging and create amazing flows. Are you ready for this?{' '}
          </p>
        </div>
        <div className="hero__button-wrapper">
          <Button>How to Play?</Button>
        </div>
      </div>
    </div>
    {children}
  </div>
);
export default Hero;
