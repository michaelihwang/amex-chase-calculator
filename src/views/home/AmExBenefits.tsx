import React from 'react';
import { Typography } from '@material-ui/core';
import { useAppState } from '../../Store';
import CardContainer from '../../components/CardContainer';
import SliderContainer from '../../components/SliderContainer';

export default function AmExBenefits() {
  const { benefitsValuation } = useAppState();
  return (
    <CardContainer>
      <Typography color="secondary" variant="h6">AmEx Benefits Valuation</Typography>
      <SliderContainer
        headerText="Uber Credit ($15/mo + $20 in Dec)"
        defaultValue={benefitsValuation.amex.uberCredit}
        max={200}
      />
      <SliderContainer
        headerText="Airline Incidental Fee ($200)"
        defaultValue={benefitsValuation.amex.airlineIncidentalPlat}
        max={200}
      />
      <SliderContainer
        headerText="Saks Credit ($50/bi-annual)"
        defaultValue={benefitsValuation.amex.saksCredit}
        max={100}
      />
      <SliderContainer
        headerText="TSA/Global Entry Credit ($100)"
        defaultValue={benefitsValuation.amex.tsaGlobalEntryCredit}
        max={100}
      />
      <SliderContainer
        headerText="Lounge Access"
        defaultValue={benefitsValuation.amex.loungeAccess}
        max={100}
      />
      <Typography>Access to Centurion and Priority Pass Airport lounges. Delta Lounge if flying with Delta</Typography>
      <SliderContainer
        headerText="Hilton/Marriott Gold Status"
        defaultValue={benefitsValuation.amex.hotelStatus}
        max={1000}
      />
      <SliderContainer
        headerText="Dining Credit ($10/mo)"
        defaultValue={benefitsValuation.amex.diningCredit}
        max={120}
      />
      <SliderContainer
        headerText="Airline Incidental ($100)"
        defaultValue={benefitsValuation.amex.airlineIncidentalGold}
        max={200}
      />
    </CardContainer>
  );
}