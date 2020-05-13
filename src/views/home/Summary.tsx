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

export default function AnnualSpending() {
  const classes = useStyles();
  const { trifectaValuation } = GlobalStateContainer.useContainer();
  // TODO: Color the valuation numbers red/green depending if they're pos/neg
  return (
    <CardContainer>
      <Typography color="secondary" variant="h6">Summary</Typography>
      <Typography variant="h6" className={classes.summaryTrifectaHeader} gutterBottom>
        Chase Trifecta: ${trifectaValuation.chase}
      </Typography>
      <Typography variant="h6" className={classes.summaryTrifectaHeader} gutterBottom>
        Amex Trifecta: ${trifectaValuation.amex}
      </Typography>
      <Typography variant="h6" className={classes.summaryTrifectaHeader} gutterBottom>
        Maximum Cashback Trifecta: ${trifectaValuation.noAF}
      </Typography>
    </CardContainer>
  );
}