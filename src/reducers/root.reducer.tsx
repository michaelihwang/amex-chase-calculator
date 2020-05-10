import annualExpensesReducer, { AnnualExpensesState } from './annualExpenses.reducer';
import benefitsValuationReducer, { BenefitsValuationState } from './benefitsValuation.reducer';

export interface AppState {
  annualExpenses: AnnualExpensesState;
  benefitsValuation: BenefitsValuationState
};

export interface Action {
  type: string;
  payload: any;
}

export const initialState: AppState = {
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
    annualExpenses: annualExpensesReducer(state.annualExpenses, action),
    benefitsValuation: benefitsValuationReducer(state.benefitsValuation, action)
  }
}

export default rootReducer;
