import { useContext, useState } from 'react';
import SettingsContext from '../../assets/context/SettingsContext';
import RainbowSlider from '../RainbowSlider/RainbowSlider';

function valuetext(value) {
  return `${value}`;
}

const colors = {
  yellow: '#fff500',
  orange: '#ff7a00',
  red: '#ff0000',
  green: '#8de47d',
  blue: '#19d3fc',
};

const SettingsForm = () => {
  const { setContext } = useContext(SettingsContext);
  const { yellow, orange, red, green, blue } = colors;
  const [posesActiveColor, setPosesActiveColor] = useState(blue);
  const [difficultyActiveColor, setDifficultyActiveColor] = useState(blue);

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

  const changePosesValue = (e) => {
    const { value } = e.target;
    setContext((prev) => ({
      ...prev,
      poses: value,
    }));
    changePosesColor(value);
  };

  const valueSetDifficulty = (e) => {
    const { value } = e.target;
    setContext((prev) => ({
      ...prev,
      difficulty: value,
    }));
    changeDifficultyColor(value);
  };

  return (
    <>
      <p className="content__text">Number of Poses:</p>
      <RainbowSlider
        aria-label="poses"
        getAriaValueText={valuetext}
        defaultValue={5}
        onChange={changePosesValue}
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
        getAriaValueText={valuetext}
        defaultValue={1}
        onChange={valueSetDifficulty}
        marks
        min={1}
        max={3}
        step={1}
        activeColor={difficultyActiveColor}
        valueLabelDisplay="on"
      />
    </>
  );
};

export default SettingsForm;
