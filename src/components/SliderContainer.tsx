import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

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
  max: number;
  onChange: ((event: React.ChangeEvent<{}>, value: number | number[]) => void);
  value: number;
}

export default function SliderContainer({ headerText, defaultValue, max, onChange, value }: SliderContainerProps) {

  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography variant="h5" className={classes.header} gutterBottom>{headerText}</Typography>
      <Typography variant="h5" className={classes.valueText} gutterBottom>${value}</Typography>
      <Slider
        defaultValue={defaultValue}
        step={10}
        valueLabelDisplay="auto"
        min={0}
        max={max}
        marks={generateMarksEveryThousand(max)}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
}