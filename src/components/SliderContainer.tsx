import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import useWindowSize from '../hooks/useWindowSize';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    marginBottom: 100,
  },
  header: {
    marginTop: 30,
    marginBottom: 10,
    marginLeft: -30
  },
  valueText: {
    textAlign: 'center',
    marginBottom: 40,
  }
}));

function generateMarksEveryThousand(max: number) {
  let marks = [];
  for (let i = 0; i <= max; i++) {
    if (i % 1000 === 0) {
      let mark = {
        value: i,
        label: `$${i}`
      };
      marks.push(mark);
    }
  }
  return marks;
}

interface SliderContainerProps {
  headerText: string;
  defaultValue: number;
  step?: number;
  max: number;
  onChange: ((event: React.ChangeEvent<{}>, value: number | number[]) => void);
  value: number;
  ccp?: boolean
}

export default function SliderContainer({ headerText, defaultValue, step, max, onChange, value, ccp }: SliderContainerProps) {

  const classes = useStyles();
  const windowSize = useWindowSize();
  return (
    <Container className={classes.root}>
      <Typography variant="h6" className={classes.header} gutterBottom>{headerText}</Typography>
      <Typography variant="h5" className={classes.valueText} gutterBottom>{`${ccp ? '' : '$'}${value} ${ccp ? 'cents/point' : ''}`}</Typography>
      <Slider
        defaultValue={defaultValue}
        step={step !== undefined ? step : 10}
        valueLabelDisplay="auto"
        min={0}
        max={max}
        marks={windowSize.width < 600 ? undefined : generateMarksEveryThousand(max)}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
}