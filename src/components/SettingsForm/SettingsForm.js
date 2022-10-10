import { Button } from '@mui/material';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import SettingsContext from '../../assets/context/SettingsContext';
import { colors } from '../../utils';
import RainbowSlider from '../RainbowSlider/RainbowSlider';

function valuetext(value) {
  return `${value}`;
}

const SettingsForm = () => {
  const { context, setContext } = useContext(SettingsContext);
  const { yellow, orange, red, green, blue } = colors;
  const [posesActiveColor, setPosesActiveColor] = useState(blue);
  const [difficultyActiveColor, setDifficultyActiveColor] = useState(blue);
  // TODO: more reusable logic for changing colors
  const changePosesColor = (value) => {
    switch (value) {
      case 10:
        setPosesActiveColor(green);
        break;
      case 15:
        setPosesActiveColor(yellow);
        break;
      case 20:
        setPosesActiveColor(yellow);
        break;
      case 25:
        setPosesActiveColor(orange);
        break;
      case 30:
        setPosesActiveColor(red);
        break;
      default:
        setPosesActiveColor(blue);
    }
  };

  const changeDifficultyColor = (value) => {
    switch (value) {
      case 2:
        setDifficultyActiveColor(yellow);
        break;
      case 3:
        setDifficultyActiveColor(red);
        break;
      default:
        setDifficultyActiveColor(blue);
    }
  };

  const changeValue = (e) => {
    const { value, name } = e.target;
    setContext((prev) => ({
      ...prev,
      [name]: value,
    }));
    return name === 'poses'
      ? changePosesColor(value)
      : changeDifficultyColor(value);
  };

  return (
    <>
      <p className="content__text">Number of Poses:</p>
      <RainbowSlider
        aria-label="poses"
        name="poses"
        getAriaValueText={valuetext}
        defaultValue={5}
        onChange={changeValue}
        marks
        max={30}
        min={5}
        step={5}
        activeColor={posesActiveColor}
        valueLabelDisplay="on"
      />
      <p className="content__text">Choose Difficulty:</p>
      <RainbowSlider
        aria-label="difficulty"
        name="difficulty"
        getAriaValueText={valuetext}
        defaultValue={1}
        onChange={changeValue}
        marks
        min={1}
        max={3}
        step={1}
        activeColor={difficultyActiveColor}
        valueLabelDisplay="on"
      />
      {/* TODO: Make the color an average of colors in two inputs */}
      <Link
        to="/generated"
        className="link-button"
        style={{ color: difficultyActiveColor }}
      >
        Generate
      </Link>
    </>
  );
};

export default SettingsForm;
