import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import {Context} from '../Store';
import CardContainer from '../components/CardContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 72,
    padding: 16,
  },
}));

export default function CalculatorBody() {
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [state, dispatch] = useContext(Context);
  dispatch({type: 'SET_DINING_EXPENSE', payload: 2});
  console.log("STATE: ", state);
  const classes = useStyles();
  return ( 
    <Box className={classes.root}>
      <Grid container direction="column" spacing={3}>
        <Grid item xs={12}>
          <CardContainer headerText={isFormComplete ? 'Summary' : 'Introduction'}>
            
           </CardContainer>
        </Grid>
        <Grid item xs={12}>
          <CardContainer headerText="Annual Spend">
           </CardContainer>
        </Grid>
        <Grid item xs={12}>
          <CardContainer headerText="Card Benefits Valuation">
            </CardContainer>
        </Grid>
        <Grid item xs={12}>
          <CardContainer headerText="MR/UR Points Valuation">
            </CardContainer>
        </Grid>
      </Grid>
    </Box>
  );
}