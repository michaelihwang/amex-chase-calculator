import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
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
  valueTextContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40
  },
  valueText: {
    marginBottom: 0,
    marginRight: 30
  },
  textInput: {
    marginRight: 30,
    fontSize: '1.5rem',
    maxWidth: 114,
  },
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
  defaultValue?: number;
  step?: number;
  max: number;
  onChange: ((event: React.ChangeEvent<{}>, value: number | number[]) => void);
  value: number;
  ccp?: boolean;
  useDollarAdornment?: boolean; // Defaults to true
}

export default function SliderContainer({ headerText, defaultValue, step, max, onChange, value, ccp, useDollarAdornment = true }: SliderContainerProps) {
  const classes = useStyles();
  const windowSize = useWindowSize();
  const [isTextInputEnabled, setTextInputVisibility] = useState(false);

  function showTextInput() {
    setTextInputVisibility(true);
  }

  function hideTextInput() {
    setTextInputVisibility(false);
  }

  function handleTextInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    onChange(event, parseFloat(event.currentTarget.value));
  }

  return (
    <Container className={classes.root}>
      <Typography variant="h6" className={classes.header} gutterBottom>{headerText}</Typography>
      {!isTextInputEnabled ?
        <Box className={classes.valueTextContainer}>
          <Typography variant="h5" className={classes.valueText} gutterBottom >
            {`${ccp ? '' : '$'}${value} ${ccp ? 'cents/point' : ''}`}
          </Typography>
          <Button variant="outlined" onClick={showTextInput}>EDIT</Button>
        </Box>
        : 
        <Box className={classes.valueTextContainer}>
          <OutlinedInput 
            className={classes.textInput} 
            value={value} 
            onChange={handleTextInputChange} 
            startAdornment={
              useDollarAdornment ? 
                <InputAdornment position="start">$</InputAdornment> 
                : 
                null
            } 
          />
          <Button variant="outlined" color="primary" onClick={hideTextInput}>DONE</Button>
        </Box>
      }

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