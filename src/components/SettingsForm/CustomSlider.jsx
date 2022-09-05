import React, { useState } from 'react';
import { Slider } from '@mui/material';

const CustomSlider = () => {
  const [color, setColor] = useState();
  return (
    <Slider
      aria-label="difficulty"
      getAriaValueText={valuetext}
      defaultValue={1}
      onChange={valueSetDifficulty}
      marks
      max={3}
      step={1}
      valueLabelDisplay="auto"
    />
  );
};
