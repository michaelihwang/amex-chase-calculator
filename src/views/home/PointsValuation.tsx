import React from 'react';
import { Typography } from '@material-ui/core';
import CardContainer from '../../components/CardContainer';
import SliderContainer from '../../components/SliderContainer';

export default function PointsValuation() {
  return (
    <CardContainer>
      <Typography color="secondary" variant="h6">MR/UR Points Valuation</Typography>
      <SliderContainer
        headerText="Cent Per Point value of AmEx MR"
        defaultValue={1.25}
        step={0.05}
        max={3}
      />
      <SliderContainer
        headerText="Cent Per Point value of Chase UR"
        defaultValue={1.5}
        step={0.05}
        max={3}
      />
    </CardContainer>
  );
}