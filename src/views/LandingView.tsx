import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import { useAppContext } from '../Store';
import CardContainer from '../components/CardContainer';
import SliderContainer from '../components/SliderContainer';
import { getActionTypeFromAnnualExpenseStatePropertyName } from "../reducers/annualExpenses.reducer";

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
  const { appState, dispatch } = useAppContext();

  function onAnnualExpensesChange(statePropertyName: string, event: any, value: number | number[]): void {
    if (event == null) {
      return;
    }
    const actionType = getActionTypeFromAnnualExpenseStatePropertyName(statePropertyName);
    if (actionType == null) {
      return;
    }
    dispatch({ type: actionType, payload: value });
  }
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
            <SliderContainer
              headerText="Dining"
              defaultValue={0}
              max={15000}
              value={appState.annualExpenses.dining}
              onChange={onAnnualExpensesChange.bind(null, 'dining')}
            />
            <SliderContainer
              headerText="Groceries"
              defaultValue={0}
              max={15000}
              value={appState.annualExpenses.groceries}
              onChange={onAnnualExpensesChange.bind(null, 'groceries')}
            />
            <SliderContainer
              headerText="Flights"
              defaultValue={0}
              max={15000}
              value={appState.annualExpenses.flights}
              onChange={onAnnualExpensesChange.bind(null, 'flights')}
            />
            <SliderContainer
              headerText="Hotels"
              defaultValue={0}
              max={15000}
              value={appState.annualExpenses.hotels}
              onChange={onAnnualExpensesChange.bind(null, 'hotels')}
            />
            <SliderContainer
              headerText="Hotels Booked Through Amex"
              defaultValue={0}
              max={15000}
              value={appState.annualExpenses.hotelsBookedThroughAmex}
              onChange={onAnnualExpensesChange.bind(null, 'hotelsBookedThroughAmex')}
            />
            <SliderContainer
              headerText="Other Travel"
              defaultValue={0}
              max={10000}
              value={appState.annualExpenses.nonFlightHotelTravel}
              onChange={onAnnualExpensesChange.bind(null, 'nonFlightHotelTravel')}
            />
            <SliderContainer
              headerText="All Other Annual Expenses"
              defaultValue={0}
              max={20000}
              value={appState.annualExpenses.other}
              onChange={onAnnualExpensesChange.bind(null, 'other')}
            />
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