import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import CardContainer from '../components/CardContainer';
import {useAppState} from '../Store';

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
  return (
    <Box className={classes.root}>
      <Grid container direction="column" spacing={3}>
        <Grid item xs={12}>
          <CardContainer headerText={isFormComplete ? 'Summary' : 'Introduction'}>
            <Typography variant="h6" className={classes.summaryTrifectaHeader}>
              Chase Trifecta: {appState.trifectaValuation.chase}
            </Typography>
            <Typography variant="h6" className={classes.summaryTrifectaHeader}>
              Amex Trifecta: {appState.trifectaValuation.amex}
            </Typography>
            <Typography variant="h6" className={classes.summaryTrifectaHeader}>
              Maximum Cashback Trifecta: {appState.trifectaValuation.maxCashback}
            </Typography>
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