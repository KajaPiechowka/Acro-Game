import { Slider } from '@mui/material';

function valuetext(value: number) {
  return `${value}`;
}

const MainPage = () => (
  <div className="content">
    <div className="content__wrapper">
      <h1 className="content__title">
        Welcome in <br />
        Acro Game!
      </h1>
      <p className="content__text">Number of Poses:</p>
      <Slider
        aria-label="poses"
        getAriaValueText={valuetext}
        defaultValue={1}
        marks
        max={5}
        step={1}
        valueLabelDisplay="auto"
      />
      <p className="content__text">Choose Difficulty:</p>
      <Slider
        aria-label="difficulty"
        getAriaValueText={valuetext}
        defaultValue={1}
        marks
        max={5}
        step={1}
        valueLabelDisplay="auto"
      />
    </div>
  </div>
);

export default MainPage;
