import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { GlobalStateContainer } from '../../GlobalStateContainer';

import CardContainer from '../../components/CardContainer';

const useStyles = makeStyles((theme) => ({
  summaryTrifectaHeader: {
    marginTop: 30,
    marginLeft: 40
  }
}));

function trifectaDifference(num1: number, num2: number) {
  return (num1 - num2).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
}

export default function AnnualSpending() {
  const classes = useStyles();
  const { trifectaValuation } = GlobalStateContainer.useContainer();
  // TODO: Color the valuation numbers red/green depending if they're pos/neg
  return (
    <CardContainer>
      <Typography color="secondary" variant="h6">Summary</Typography>
      <Typography variant="h6" className={classes.summaryTrifectaHeader} gutterBottom>
        Amex Trifecta: {trifectaValuation.amex.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })}
      </Typography>
      <Typography variant="h6" className={classes.summaryTrifectaHeader} gutterBottom>
        Chase Trifecta: {trifectaValuation.chase.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })}
      </Typography>
      <Typography variant="h6" className={classes.summaryTrifectaHeader} gutterBottom>
        No Annual Fee Cashback Setup: {trifectaValuation.noAF.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })}
      </Typography>
      <Typography variant="h6" className={classes.summaryTrifectaHeader} gutterBottom>
        {trifectaValuation.amex > trifectaValuation.noAF && trifectaValuation.chase > trifectaValuation.noAF ? (
          (trifectaValuation.amex > trifectaValuation.chase) ? (
            `You get ${trifectaDifference(trifectaValuation.amex, trifectaValuation.chase)} more from the Amex Trifecta than the Chase Trifecta!`
          ) : (
            `You get ${trifectaDifference(trifectaValuation.chase, trifectaValuation.amex)} more from the Chase Trifecta than the Amex Trifecta!`
          )) : (
          'You\'re better off with the No Annual Fee Cashback Setup!'
        )}
      </Typography>
    </CardContainer>
  );
}