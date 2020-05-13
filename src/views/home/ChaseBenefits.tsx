import React from 'react';
import { Typography } from '@material-ui/core';
import { useAppContext } from '../../Store';
import CardContainer from '../../components/CardContainer';
import SliderContainer from '../../components/SliderContainer';

export default function ChaseBenefits() {
  const { appState, dispatch } = useAppContext();
  const { benefitsValuation } = appState;
  return (
    <CardContainer>
      <Typography color="secondary" variant="h6">{'Chase Benefits Valuation'}</Typography>
      <SliderContainer
        headerText="Travel Credit ($300)"
        defaultValue={benefitsValuation.chase.travelCredit}
        max={300}
        value={benefitsValuation.chase.travelCredit}
        onChange={() => {}}
      />
      <SliderContainer
        headerText="TSA/Global Entry Credit ($100)"
        defaultValue={benefitsValuation.chase.tsaGlobalEntryCredit}
        max={100}
        value={benefitsValuation.chase.tsaGlobalEntryCredit}
        onChange={() => { }}
      />
      <SliderContainer
        headerText="Priority Pass Lounge Access"
        defaultValue={benefitsValuation.chase.loungeAccess}
        max={100}
        value={benefitsValuation.chase.loungeAccess}
        onChange={() => { }}
      />
      <SliderContainer
        headerText="Complementary DashPass ($9.99/mo)"
        defaultValue={benefitsValuation.chase.doorDashPass}
        max={120}
        value={benefitsValuation.chase.doorDashPass}
        onChange={() => { }}
      />
      <SliderContainer
        headerText="DoorDash Credit ($60)"
        defaultValue={benefitsValuation.chase.doorDashCredit}
        max={60}
        value={benefitsValuation.chase.doorDashCredit}
        onChange={() => { }}
      />
      <SliderContainer
        headerText="LyftPink"
        defaultValue={benefitsValuation.chase.lyftPink}
        max={100}
        value={benefitsValuation.chase.lyftPink}
        onChange={() => { }}
      />
    </CardContainer>
  );
}