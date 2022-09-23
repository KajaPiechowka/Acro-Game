import { Slider, styled } from '@mui/material';
import { useContext, useState } from 'react';
import SettingsContext from '../../assets/context/SettingsContext';

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

const PrettoSlider = styled(Slider)(({ activeColor }) => ({
  color: activeColor,
  height: 6,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 26,
    height: 26,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: activeColor,
    color: '#000000',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
}));

const SettingsForm = () => {
  const { setContext } = useContext(SettingsContext);
  const [posesActiveColor, setPosesActiveColor] = useState('#fff500');
  const { yellow, orange, red, green, blue } = colors;

  const changePosesColor = (value) => {
    switch (value) {
      case 10:
        setPosesActiveColor(green);
        break;
      case 15:
        setPosesActiveColor(yellow);
        break;
      case 20:
        setPosesActiveColor(orange);
        break;
      case 25:
        setPosesActiveColor(red);
        break;
      case 30:
        setPosesActiveColor(red);
        break;
      default:
        setPosesActiveColor(blue);
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

  const valueSetDifficulty = (value) => {
    setContext((prev) => ({
      ...prev,
      difficulty: value,
    }));
  };

  return (
    <>
      <p className="content__text">Number of Poses:</p>
      {console.log(Slider)}
      <PrettoSlider
        aria-label="poses"
        getAriaValueText={valuetext}
        defaultValue={5}
        onChange={changePosesValue}
        marks
        max={30}
        min={5}
        step={5}
        activeColor={posesActiveColor}
        valueLabelDisplay="auto"
      />
      <p className="content__text">Choose Difficulty:</p>
      <PrettoSlider
        aria-label="difficulty"
        getAriaValueText={valuetext}
        defaultValue={1}
        onChange={valueSetDifficulty}
        marks
        min={1}
        max={3}
        step={1}
        activeColor="#ffffff"
        valueLabelDisplay="auto"
      />
    </>
  );
};

export default SettingsForm;
