import { colors, Slider, styled } from '@mui/material';

const RainbowSlider = styled(Slider)(({ activeColor }) => ({
  color: activeColor,
  margin: '45px 0 20px 0',
  height: 6,
  '& span.MuiSlider-track': {
    border: 'none',
    backgroundColor: colors.amber,
    color: colors.amber,
  },
  '& .MuiSlider-thumb': {
    height: 20,
    width: 20,
    backgroundColor: 'black',
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
    borderRadius: '20% 20% 20% 0',
    border: `2px solid ${activeColor}`,
    backgroundColor: 'black',
    color: activeColor,
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

export default RainbowSlider;
