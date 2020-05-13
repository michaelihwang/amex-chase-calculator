import React from 'react';
import { Typography } from '@material-ui/core';
import { useAppState } from '../../Store';
import CardContainer from '../../components/CardContainer';
import SliderContainer from '../../components/SliderContainer';

export default function AnnualSpend() {
  const { annualExpenses } = useAppState();
  return (
    <CardContainer>
      <Typography color="secondary" variant="h6">Annual Spend</Typography>
      <SliderContainer
        headerText="Dining"
        defaultValue={annualExpenses.dining}
        max={15000}
      />
      <SliderContainer
        headerText="Groceries"
        defaultValue={annualExpenses.groceries}
        max={15000}
      />
      <SliderContainer
        headerText="Flights"
        defaultValue={annualExpenses.flights}
        max={15000}
      />
      <SliderContainer
        headerText="Hotels"
        defaultValue={annualExpenses.hotels}
        max={15000}
      />
      <SliderContainer
        headerText="Other Travel"
        defaultValue={annualExpenses.nonFlightHotelTravel}
        max={15000}
      />
      <SliderContainer
        headerText="All Other Expenses"
        defaultValue={annualExpenses.other}
        max={15000}
      />
      <SliderContainer
        headerText="All Other Expenses as Chase Freedom Quarterly Categories"
        defaultValue={annualExpenses.freedomCategories}
        max={6000}
      />
    </CardContainer>
  );
}
