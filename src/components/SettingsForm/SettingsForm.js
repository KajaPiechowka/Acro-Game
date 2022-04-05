import { Slider } from '@mui/material';
import { useContext } from 'react';
import SettingsContext from '../../assets/context/SettingsContext';

function valuetext(value) {
  return `${value}`;
}

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
      <Slider
        color="secondary"
        aria-label="poses"
        getAriaValueText={valuetext}
        defaultValue={5}
        onChange={changePosesValue}
        marks
        max={30}
        min={5}
        step={5}
        valueLabelDisplay="auto"
      />
      <p className="content__text">Choose Difficulty:</p>
      <Slider
        aria-label="difficulty"
        color="secondary"
        getAriaValueText={valuetext}
        defaultValue={1}
        onChange={valueSetDifficulty}
        marks
        min={1}
        max={3}
        step={1}
        valueLabelDisplay="auto"
      />
    </>
  );
};

export default SettingsForm;
