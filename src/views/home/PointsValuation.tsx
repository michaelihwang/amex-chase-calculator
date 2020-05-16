import React from 'react';
import { Typography } from '@material-ui/core';
import { GlobalStateContainer } from '../../GlobalStateContainer';

import CardContainer from '../../components/CardContainer';
import SliderContainer from '../../components/SliderContainer';

export default function PointsValuation() {
  const { pointsValuation, setPointsValuation } = GlobalStateContainer.useContainer();

  return (
    <CardContainer>
      <Typography color="secondary" variant="h6">MR/UR Points Valuation</Typography>
      <SliderContainer
        headerText="Cent Per Point value of AmEx MR"
        step={0.05}
        max={3}
        value={pointsValuation.amexCPP}
        onChange={(event, newValue) => { setPointsValuation({
          ...pointsValuation, amexCPP: newValue as number
        }); }}
        ccp
        useDollarAdornment={false}
      />
      <SliderContainer
        headerText="Cent Per Point value of Chase UR"
        step={0.05}
        max={3}
        value={pointsValuation.chaseCPP}
        onChange={(event, newValue) => {
          setPointsValuation({
            ...pointsValuation, chaseCPP: newValue as number
          });
        }}
        ccp
        useDollarAdornment={false}
      />
    </CardContainer>
  );
}