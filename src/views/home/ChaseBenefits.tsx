import React from 'react';
import { Typography } from '@material-ui/core';
import { GlobalStateContainer } from '../../GlobalStateContainer';

import CardContainer from '../../components/CardContainer';
import SliderContainer from '../../components/SliderContainer';

enum ChasePerks {
  TravelCredit = 'travelCredit',
  TSAGlobalEntryCredit = 'tsaGlobalEntryCredit',
  LoungeAccess = 'loungeAccess',
  DoorDashPass = 'doorDashPass',
  DoorDashCredit = 'doorDashCredit',
  LyftPink = 'lyftPink',
}

export default function ChaseBenefits() {
  const { chaseBenefits, setChaseBenefits, } = GlobalStateContainer.useContainer();

  const handleSliderChange = (newValue: number, category: ChasePerks) => {
    setChaseBenefits({
      ...chaseBenefits, [category]: newValue,
    });
  };

  return (
    <CardContainer>
      <Typography color="secondary" variant="h6">{'Chase Benefits Valuation'}</Typography>
      <SliderContainer
        headerText="Travel Credit ($300)"
        max={300}
        value={chaseBenefits.travelCredit}
        onChange={(event, newValue) => {
          handleSliderChange(newValue as number, ChasePerks.TravelCredit);
        }}
      />
      <SliderContainer
        headerText="TSA/Global Entry Credit ($100)"
        defaultValue={100}
        max={100}
        value={chaseBenefits.tsaGlobalEntryCredit}
        onChange={(event, newValue) => {
          handleSliderChange(newValue as number, ChasePerks.TSAGlobalEntryCredit);
        }}
      />
      <SliderContainer
        headerText="Priority Pass Lounge Access"
        defaultValue={100}
        max={100}
        value={chaseBenefits.loungeAccess}
        onChange={(event, newValue) => {
          handleSliderChange(newValue as number, ChasePerks.LoungeAccess);
        }}
      />
      <SliderContainer
        headerText="Complementary DashPass ($9.99/mo)"
        defaultValue={120}
        max={120}
        value={chaseBenefits.doorDashPass}
        onChange={(event, newValue) => {
          handleSliderChange(newValue as number, ChasePerks.DoorDashPass);
        }}
      />
      <SliderContainer
        headerText="DoorDash Credit ($60)"
        defaultValue={60}
        max={60}
        value={chaseBenefits.doorDashCredit}
        onChange={(event, newValue) => {
          handleSliderChange(newValue as number, ChasePerks.DoorDashCredit);
        }}
      />
      <SliderContainer
        headerText="LyftPink"
        defaultValue={100}
        max={100}
        value={chaseBenefits.lyftPink}
        onChange={(event, newValue) => {
          handleSliderChange(newValue as number, ChasePerks.LyftPink);
        }}
      />
    </CardContainer>
  );
}