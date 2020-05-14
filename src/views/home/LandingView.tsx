import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Grid } from '@material-ui/core';

// Cards
import Summary from './Summary';
import AnnualExpenses from './AnnualExpenses';
import AmExBenefits from './AmExBenefits';
import ChaseBenefits from './ChaseBenefits';
import PointsValuation from './PointsValuation';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 72,
    padding: 16,
  },
  submitButton: {
    borderRadius: 10,
    width: 214,
  },
  summaryTrifectaHeader: {
    marginTop: 30,
    marginLeft: 40
  }
}));

const CARD_CONTAINER_FLEX = 12;

export default function LandingView() {
  const classes = useStyles();

  const handleSubmitClicked = () => {
    console.log('scroll up and show summary');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={CARD_CONTAINER_FLEX}>
          <Summary />
        </Grid>
        <Grid item xs={CARD_CONTAINER_FLEX}>
          <AnnualExpenses />
        </Grid>
        <Grid item xs={CARD_CONTAINER_FLEX}>
          <AmExBenefits />
        </Grid>
        <Grid item xs={CARD_CONTAINER_FLEX}>
          <ChaseBenefits />
        </Grid>
        <Grid item xs={CARD_CONTAINER_FLEX}>
          <PointsValuation />
        </Grid>
        <Button
          className={classes.submitButton}
          variant="contained"
          color="primary"
          onClick={handleSubmitClicked}
        >
          Submit
        </Button>
      </Grid>
    </Box>
  );
}