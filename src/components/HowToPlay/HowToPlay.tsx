import * as React from 'react';

interface HowToPlayProps {
  event: React.MouseEventHandler<HTMLButtonElement>;
}

const HowToPlay = ({ event }: HowToPlayProps) => (
  <>
    <div className="blur"></div>
    <div className="how-to-play">
      <button type="button" onClick={event} className="how-to-play__close-btn">
        X
      </button>

      <h2 className="how-to-play__title">How To Play?</h2>
      <p className="how-to-play__text">
        Choosing difficulty and length of the progression you will end up with a
        list of acro yoga poses Your goal is to transition from through all them
        one by one doing as few of transition poses as possible.
      </p>
      <p className="how-to-play__text-small">Good Luck!</p>
    </div>
  </>
);

export default HowToPlay;
