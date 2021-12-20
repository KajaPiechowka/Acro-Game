import { Slider } from '@mui/material';
import { useState } from 'react';

const marks = [
  { value: 1, label: 'Easy' },
  { value: 2, label: 'Medium' },
  { value: 3, label: 'Hard' },
];

interface CustomSliderProps {
  sliderEvent: (value: number) => void;
}

const CustomSlider = ({ sliderEvent }: CustomSliderProps) => {
  const [value, setValue] = useState(1);
  const [color, setColor] = useState('primary');

  const changeColor = (switchColor: number) => {
    switch (switchColor) {
      case 1:
        return 'primary';

      case 2:
        return 'secondary';

      case 3:
        return 'error';

      default:
        return 'primary';
    }
  };

  const handleChange = (event: Event, newValue: number): void => {
    setValue(newValue);
    setColor(changeColor(newValue));
    sliderEvent(newValue);
  };

  return (
    <div className="wrapper">
      <p className="content__text">Choose Difficulty:</p>
      <Slider
        onChange={handleChange}
        color={color}
        step={null}
        marks={marks}
        value={value}
        min={1}
        max={3}
      />
    </div>
  );
};

export default CustomSlider;
