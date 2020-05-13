import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import CardContainer from '../../components/CardContainer';
import SliderContainer from '../../components/SliderContainer';

export default function PointsValuation() {
  // temp states
  const [amexCPP, setAmexCPP] = useState(1.25);
  const [chaseCPP, setChaseCPP] = useState(1.5);

  return (
    <CardContainer>
      <Typography color="secondary" variant="h6">MR/UR Points Valuation</Typography>
      <SliderContainer
        headerText="Cent Per Point value of AmEx MR"
        defaultValue={amexCPP}
        step={0.05}
        max={3}
        value={amexCPP}
        onChange={(event, newValue) => { setAmexCPP(newValue as number); }}
        ccp
      />
      <SliderContainer
        headerText="Cent Per Point value of Chase UR"
        defaultValue={chaseCPP}
        step={0.05}
        max={3}
        value={chaseCPP}
        onChange={(event, newValue) => { setChaseCPP(newValue as number); }}
        ccp
      />
    </CardContainer>
  );
}