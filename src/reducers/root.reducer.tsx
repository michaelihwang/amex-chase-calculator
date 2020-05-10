import annualExpensesReducer, { AnnualExpensesState } from './annualExpenses.reducer';
import benefitsValuationReducer, { BenefitsValuationState } from './benefitsValuation.reducer';
import trifectaValuationReducer, { TrifectaValuationState } from './trifectaValuation.reducer';

export interface AppState {
  trifectaValuation: TrifectaValuationState;
  annualExpenses: AnnualExpensesState;
  benefitsValuation: BenefitsValuationState
}

export interface Action {
  type: string;
  payload: any;
}

export const initialState: AppState = {
  trifectaValuation: {
    chase: 0,
    amex: 0,
    maxCashback: 0,
  },
  annualExpenses: {
    dining: 0,
    groceries: 0,
    flights: 0,
    hotels: 0,
    amexHotels: 0,
    nonFlightHotelTravel: 0,
    other: 0,
  },
  benefitsValuation: {
    amex: {
      credits: 0,
      perks: 0,
      centsPerPoint: 0,
    },
    chase: {
      credits: 0,
      perks: 0,
      centsPerPoint: 0
    }
  }
};

function rootReducer(state: AppState = initialState, action: Action): AppState {
  return {
    trifectaValuation: trifectaValuationReducer(state.trifectaValuation, action),
    annualExpenses: annualExpensesReducer(state.annualExpenses, action),
    benefitsValuation: benefitsValuationReducer(state.benefitsValuation, action)
  };
}

export default rootReducer;
