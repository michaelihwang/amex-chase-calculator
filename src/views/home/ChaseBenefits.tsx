import React from 'react';
import { Typography } from '@material-ui/core';
import { useAppState } from '../../Store';
import CardContainer from '../../components/CardContainer';
import SliderContainer from '../../components/SliderContainer';

export default function ChaseBenefits() {
  const { benefitsValuation } = useAppState();
  return (
    <CardContainer>
      <Typography color="secondary" variant="h6">{'Chase Benefits Valuation'}</Typography>
      <SliderContainer
        headerText="Travel Credit ($300)"
        defaultValue={benefitsValuation.chase.travelCredit}
        max={300}
      />
      <SliderContainer
        headerText="TSA/Global Entry Credit ($100)"
        defaultValue={benefitsValuation.chase.tsaGlobalEntryCredit}
        max={100}
      />
      <SliderContainer
        headerText="Priority Pass Lounge Access"
        defaultValue={benefitsValuation.chase.loungeAccess}
        max={100}
      />
      <SliderContainer
        headerText="Complementary DashPass ($9.99/mo)"
        defaultValue={benefitsValuation.chase.doorDashPass}
        max={120}
      />
      <SliderContainer
        headerText="DoorDash Credit ($60)"
        defaultValue={benefitsValuation.chase.doorDashCredit}
        max={60}
      />
      <SliderContainer
        headerText="LyftPink"
        defaultValue={benefitsValuation.chase.lyftPink}
        max={100}
      />
    </CardContainer>
  );
}