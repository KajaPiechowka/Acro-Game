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

  const valueSetDifficulty = (e) => {
    const { value } = e.target;
    setContext((prev) => ({
      ...prev,
      difficulty: value,
    }));
  };

  return (
    <>
      <p className="content__text">Number of Poses:</p>
      <Slider
        aria-label="poses"
        getAriaValueText={valuetext}
        defaultValue={5}
        onChange={changePosesValue}
        marks
        max={30}
        step={5}
        valueLabelDisplay="auto"
      />
      <p className="content__text">Choose Difficulty:</p>
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
    </>
  );
};

export default SettingsForm;
