import * as React from 'react';

interface HowToPlayButtonProps {
  event: React.MouseEventHandler<HTMLButtonElement>;
}

const HowToPlayButton = ({ event }: HowToPlayButtonProps) => (
  <button onClick={event} type="button" className="how-to-play-button">
    How To Play?
  </button>
);

export default HowToPlayButton;
