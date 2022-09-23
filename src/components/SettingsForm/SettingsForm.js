import { Slider, styled } from '@mui/material';
import { useContext, useState } from 'react';
import SettingsContext from '../../assets/context/SettingsContext';

function valuetext(value) {
  return `${value}`;
}

// const theme = createTheme({
//   palette: {
//     primary: { main: '#fff500' },
//     secondary: { main: '#ff7a00' },
//     error: { main: '#ff0000' },
//     success: { main: '#8de47d' },
//     neutral: { main: '#19d3fc' },
//   },
// });

const PrettoSlider = styled(Slider)(({ props }) => ({
  color: props ? '#fff500' : '#ff7a00',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
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
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#fff500',
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

  const changePosesValue = (e) => {
    const { value } = e.target;
    setContext((prev) => ({
      ...prev,
      poses: value,
    }));
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
      <PrettoSlider
        aria-label="poses"
        getAriaValueText={valuetext}
        defaultValue={5}
        onChange={changePosesValue}
        marks
        max={30}
        min={5}
        step={5}
        props={false}
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
        props
        valueLabelDisplay="auto"
      />
    </>
  );
};

export default SettingsForm;
