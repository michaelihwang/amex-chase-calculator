import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { GlobalStateContainer } from '../../GlobalStateContainer';

import CardContainer from '../../components/CardContainer';

const useStyles = makeStyles((theme) => ({
  body: {
    marginTop: 15,
    marginLeft: 30,
    marginRight: 30,
  },
  heading: {
    marginTop: 15,
    marginLeft: 30,
    marginRight: 30,
  },
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
  return (
    <CardContainer>
      <Typography color="secondary" variant="h6">Summary</Typography>
      <Typography variant="h6" className={classes.heading} gutterBottom>
        Amex Trifecta: {trifectaValuation.amex.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })}
      </Typography>
      <Typography className={classes.body} gutterBottom>
        ● American Express Platinum (Schwab) - 5x airfare, hotel + benefits
      </Typography>
      <Typography className={classes.body} gutterBottom>
        ● American Express Gold - 4x dining, US groceries, 3x airfare + benefits
      </Typography>
      <Typography className={classes.body} gutterBottom>
        ● American Express Blue Business Plus - 2x on all purchases
      </Typography>
      <Typography variant="h6" className={classes.heading} gutterBottom>
        Chase Trifecta: {trifectaValuation.chase.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })}
      </Typography>
      <Typography className={classes.body} gutterBottom>
        ● Chase Sapphire Reserve - 3x dining, travel + benefits
      </Typography>
      <Typography className={classes.body} gutterBottom>
        ● Chase Freedom - 5x rotating quarterly categories up to $1.5k/quarter
      </Typography>
      <Typography className={classes.body} gutterBottom>
        ● Chase Freedom Unlimited - 1.5x on all purchases
      </Typography>
      <Typography variant="h6" className={classes.heading} gutterBottom>
        No Annual Fee Cashback Setup: {trifectaValuation.noAF.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })}
      </Typography>
      <Typography className={classes.body} gutterBottom>
        ● Wells Fargo Propel - 3% dining, gas, travel, streaming services
      </Typography>
      <Typography className={classes.body} gutterBottom>
        ● Amex Blue Cash Everryday - 3% groceries up to $6k/annually
      </Typography>
      <Typography className={classes.body} gutterBottom>
        ● Bank of America Cash Rewards - 3% category up to $2.5k/quarter
      </Typography>
      <Typography className={classes.body} gutterBottom>
        ● Chase Freedom - 5% rotating quarterly categories up to $1.5k/quarter
      </Typography>
      <Typography className={classes.body} gutterBottom>
        ● Citi Double Cash - 2% on all purchases
      </Typography>
      <Typography variant="h6" className={classes.heading} gutterBottom>
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