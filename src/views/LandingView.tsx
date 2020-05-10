import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import { useAppState } from '../Store';
import CardContainer from '../components/CardContainer';
import SliderContainer from '../components/SliderContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 72,
    padding: 16,
  },
  summaryTrifectaHeader: {
    marginTop: 30,
    marginLeft: 40
  }
}));



export default function CalculatorBody() {
  const [isFormComplete, setIsFormComplete] = useState(false);
  const classes = useStyles();
  const appState = useAppState();
  // TODO: Color the valuation numbers red/green depending if they're pos/neg
  return (
    <Box className={classes.root}>
      <Grid container direction="column" spacing={3}>
        <Grid item xs={12}>
          <CardContainer headerText={isFormComplete ? 'Summary' : 'Introduction'}>
            <Typography variant="h6" className={classes.summaryTrifectaHeader} gutterBottom>
              Chase Trifecta: ${appState.trifectaValuation.chase}
            </Typography>
            <Typography variant="h6" className={classes.summaryTrifectaHeader} gutterBottom>
              Amex Trifecta: ${appState.trifectaValuation.amex}
            </Typography>
            <Typography variant="h6" className={classes.summaryTrifectaHeader} gutterBottom>
              Maximum Cashback Trifecta: ${appState.trifectaValuation.maxCashback}
            </Typography>
          </CardContainer>
        </Grid>
        <Grid item xs={12}>
          <CardContainer headerText="Annual Spend">
            <SliderContainer headerText="Dining" defaultValue={appState.annualExpenses.dining} max={15000} />
            <SliderContainer headerText="Groceries" defaultValue={appState.annualExpenses.dining} max={15000} />
            <SliderContainer headerText="Flights" defaultValue={appState.annualExpenses.dining} max={15000} />
            <SliderContainer headerText="Hotels" defaultValue={appState.annualExpenses.dining} max={15000} />
            <SliderContainer headerText="Other Travel" defaultValue={appState.annualExpenses.dining} max={15000} />
            <SliderContainer headerText="All Other Annual Expenses" defaultValue={appState.annualExpenses.dining} max={15000} />
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