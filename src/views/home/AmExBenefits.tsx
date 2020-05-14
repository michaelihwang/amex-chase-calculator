import React from 'react';
import { Typography } from '@material-ui/core';
import { GlobalStateContainer } from '../../GlobalStateContainer';

import CardContainer from '../../components/CardContainer';
import SliderContainer from '../../components/SliderContainer';

enum AmexPerks {
  UberCredit = 'uberCredit',
  AirlineIncidentalPlat = 'airlineIncidentalPlat',
  SaksCredit = 'saksCredit',
  TSAGlobalEntryCredit = 'tsaGlobalEntryCredit',
  LoungeAccess = 'loungeAccess',
  HotelStatus = 'hotelStatus',
  DiningCredit = 'diningCredit',
  AirlineIncidentalGold = 'airlineIncidentalGold'
}

export default function AmExBenefits() {
  const { amexBenefits, setAmexBenefits } = GlobalStateContainer.useContainer();

  const handleSliderChange = (newValue: number, benefits: AmexPerks) => {
    setAmexBenefits({
      ...amexBenefits, [benefits]: newValue,
    });
  };

  return (
    <CardContainer>
      <Typography color="secondary" variant="h6">AmEx Benefits Valuation</Typography>
      <SliderContainer
        headerText="Uber Credit ($200)"
        max={200}
        value={amexBenefits.uberCredit}
        onChange={(event, newValue) => {
          handleSliderChange(newValue as number, AmexPerks.UberCredit);
        }}
      />
      <SliderContainer
        headerText="Airline Incidental Fee ($200)"
        max={200}
        value={amexBenefits.airlineIncidentalPlat}
        onChange={(event, newValue) => {
          handleSliderChange(newValue as number, AmexPerks.AirlineIncidentalPlat);
        }}
      />
      <SliderContainer
        headerText="Saks Credit ($100)"
        max={100}
        value={amexBenefits.saksCredit}
        onChange={(event, newValue) => {
          handleSliderChange(newValue as number, AmexPerks.SaksCredit);
        }}
      />
      <SliderContainer
        headerText="TSA/Global Entry Credit ($100)"
        max={100}
        value={amexBenefits.tsaGlobalEntryCredit}
        onChange={(event, newValue) => {
          handleSliderChange(newValue as number, AmexPerks.TSAGlobalEntryCredit);
        }}
      />
      <SliderContainer
        headerText="Lounge Access"
        max={100}
        value={amexBenefits.loungeAccess}
        onChange={(event, newValue) => {
          handleSliderChange(newValue as number, AmexPerks.LoungeAccess);
        }}
      />
      <Typography>Access to Centurion and Priority Pass Airport lounges. Delta Lounge if flying with Delta</Typography>
      <SliderContainer
        headerText="Hilton/Marriott Gold Status"
        defaultValue={1000}
        max={1000}
        value={amexBenefits.hotelStatus}
        onChange={(event, newValue) => {
          handleSliderChange(newValue as number, AmexPerks.HotelStatus);
        }}
      />
      <SliderContainer
        headerText="Dining Credit ($120)"
        defaultValue={120}
        max={120}
        value={amexBenefits.diningCredit}
        onChange={(event, newValue) => {
          handleSliderChange(newValue as number, AmexPerks.DiningCredit);
        }}
      />
      <SliderContainer
        headerText="Airline Incidental ($100)"
        defaultValue={100}
        max={100}
        value={amexBenefits.airlineIncidentalGold}
        onChange={(event, newValue) => {
          handleSliderChange(newValue as number, AmexPerks.AirlineIncidentalGold);
        }}
      />
    </CardContainer>
  );
}