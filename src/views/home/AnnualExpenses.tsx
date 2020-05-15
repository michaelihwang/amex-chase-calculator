import React from 'react';
import { Typography } from '@material-ui/core';
import { GlobalStateContainer } from '../../GlobalStateContainer';

import CardContainer from '../../components/CardContainer';
import SliderContainer from '../../components/SliderContainer';

enum ExpenseCategory {
  Dining = 'dining',
  Groceries = 'groceries',
  Flights = 'flights',
  Hotels = 'hotels',
  Gas = 'gas',
  LyftRides = 'lyftRides',
  NonFlightHotelTravel = 'nonFlightHotelTravel',
  SteamingServices = 'streamingServices',
  OnlineShopping = 'onlineShopping',
  Other = 'other',
  FreedomCategories = 'freedomCategories'
}

export default function AnnualExpenses() {
  const { annualExpenses, setAnnualExpenses } = GlobalStateContainer.useContainer();

  const handleSliderChange = (newValue: number, category: ExpenseCategory) => {
    setAnnualExpenses({
      ...annualExpenses, [category]: newValue,
    });
  };

  return (
    <CardContainer>
      <Typography color="secondary" variant="h6">Annual Expenses</Typography>
      <SliderContainer
        headerText="Dining"
        max={15000}
        value={annualExpenses.dining}
        onChange={(event, newValue) => {
          handleSliderChange(newValue as number, ExpenseCategory.Dining);
        }}
      />
      <SliderContainer
        headerText="Groceries"
        max={15000}
        value={annualExpenses.groceries}
        onChange={(event, newValue) => {
          handleSliderChange(newValue as number, ExpenseCategory.Groceries);
        }}
      />
      <SliderContainer
        headerText="Flights"
        max={15000}
        value={annualExpenses.flights}
        onChange={(event, newValue) => {
          handleSliderChange(newValue as number, ExpenseCategory.Flights);
        }}
      />
      <SliderContainer
        headerText="Hotels"
        max={15000}
        value={annualExpenses.hotels}
        onChange={(event, newValue) => {
          handleSliderChange(newValue as number, ExpenseCategory.Hotels);
        }}
      />
      <SliderContainer
        headerText="Gas"
        max={15000}
        value={annualExpenses.gas}
        onChange={(event, newValue) => {
          handleSliderChange(newValue as number, ExpenseCategory.Gas);
        }}
      />
      <SliderContainer
        headerText="Lyft Rides"
        max={15000}
        value={annualExpenses.lyftRides}
        onChange={(event, newValue) => {
          handleSliderChange(newValue as number, ExpenseCategory.LyftRides);
        }}
      />
      <SliderContainer
        headerText="Other Travel"
        max={15000}
        value={annualExpenses.nonFlightHotelTravel}
        onChange={(event, newValue) => {
          handleSliderChange(newValue as number, ExpenseCategory.NonFlightHotelTravel);
        }}
      />
      <SliderContainer
        headerText="Streaming Services"
        max={15000}
        value={annualExpenses.streamingServices}
        onChange={(event, newValue) => {
          handleSliderChange(newValue as number, ExpenseCategory.SteamingServices);
        }}
      />
      <SliderContainer
        headerText="Online Shopping"
        max={15000}
        value={annualExpenses.onlineShopping}
        onChange={(event, newValue) => {
          handleSliderChange(newValue as number, ExpenseCategory.OnlineShopping);
        }}
      />
      <SliderContainer
        headerText="All Other Expenses"
        max={15000}
        value={annualExpenses.other}
        onChange={(event, newValue) => {
          handleSliderChange(newValue as number, ExpenseCategory.Other);
        }}
      />
      <SliderContainer
        headerText="All Other Expenses as Chase Freedom Quarterly Categories"
        max={6000}
        value={annualExpenses.freedomCategories}
        onChange={(event, newValue) => {
          handleSliderChange(newValue as number, ExpenseCategory.FreedomCategories);
        }}
      />
    </CardContainer>
  );
}
