import React from 'react';
import { Typography } from '@material-ui/core';
import { useAppContext } from '../../Store';
import CardContainer from '../../components/CardContainer';
import SliderContainer from '../../components/SliderContainer';
import { getActionTypeFromAnnualExpenseStatePropertyName } from '../../reducers/annualExpenses.reducer';

export default function AnnualSpend() {

  function onAnnualExpensesChange(statePropertyName: string, event: any, value: number | number[]): void {
    if (event == null) {
      return;
    }
    const actionType = getActionTypeFromAnnualExpenseStatePropertyName(statePropertyName);
    if (actionType == null) {
      return;
    }
    dispatch({ type: actionType, payload: value });
  }

  const { appState, dispatch } = useAppContext();
  const { annualExpenses } = appState;
  return (
    <CardContainer>
      <Typography color="secondary" variant="h6">Annual Spend</Typography>
      <SliderContainer
        headerText="Dining"
        defaultValue={annualExpenses.dining}
        max={15000}
        value={annualExpenses.dining}
        onChange={onAnnualExpensesChange.bind(null, 'dining')}
      />
      <SliderContainer
        headerText="Groceries"
        defaultValue={annualExpenses.groceries}
        max={15000}
        value={annualExpenses.groceries}
        onChange={onAnnualExpensesChange.bind(null, 'groceries')}
      />
      <SliderContainer
        headerText="Flights"
        defaultValue={annualExpenses.flights}
        max={15000}
        value={annualExpenses.flights}
        onChange={onAnnualExpensesChange.bind(null, 'flights')}
      />
      <SliderContainer
        headerText="Hotels"
        defaultValue={annualExpenses.hotels}
        max={15000}
        value={annualExpenses.hotels}
        onChange={onAnnualExpensesChange.bind(null, 'hotels')}
      />
      <SliderContainer
        headerText="Other Travel"
        defaultValue={annualExpenses.nonFlightHotelTravel}
        max={15000}
        value={annualExpenses.nonFlightHotelTravel}
        onChange={onAnnualExpensesChange.bind(null, 'nonFlightHotelTravel')}
      />
      <SliderContainer
        headerText="All Other Expenses"
        defaultValue={annualExpenses.other}
        max={15000}
        value={annualExpenses.other}
        onChange={onAnnualExpensesChange.bind(null, 'other')}
      />
      <SliderContainer
        headerText="All Other Expenses as Chase Freedom Quarterly Categories"
        defaultValue={annualExpenses.freedomCategories}
        max={6000}
        value={annualExpenses.freedomCategories}
        onChange={onAnnualExpensesChange.bind(null, 'other')}
      />
    </CardContainer>
  );
}
