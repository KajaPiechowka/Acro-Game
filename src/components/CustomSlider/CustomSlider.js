import { useState } from 'react';
import { Slider } from '@mui/material';
import { withStyles, makeStyles } from '@mui/material/styles';

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

const ContinuousSlider = withStyles({
  rail: {
    backgroundImage: 'linear-gradient(.25turn, #f00, #00f)',
  },
  track: {
    backgroundImage: 'linear-gradient(.25turn, #f00, #00f)',
  },
})(Slider);

export default function CustomSlider() {
  const classes = useStyles();
  const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <ContinuousSlider
        value={value}
        onChange={handleChange}
        aria-labelledby="continuous-slider"
      />
    </div>
  );
}
