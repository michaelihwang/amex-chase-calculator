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
    dining: 3000,
    groceries: 3000,
    flights: 1000,
    hotels: 1000,
    hotelsBookedThroughAmex: 1000,
    nonFlightHotelTravel: 1000,
    other: 3000,
    freedomCategories: 2500,
  },
  benefitsValuation: {
    amex: {
      uberCredit: 0,
      airlineIncidentalPlat: 0,
      saksCredit: 0,
      tsaGlobalEntryCredit: 0,
      loungeAccess: 0,
      hotelStatus: 0,
      diningCredit: 0,
      airlineIncidentalGold: 0,
    },
    chase: {
      travelCredit: 300,
      tsaGlobalEntryCredit: 0,
      loungeAccess: 0,
      doorDashPass: 0,
      doorDashCredit:0,
      lyftPink: 0,
    }
  },
  
};

function rootReducer(state: AppState = initialState, action: Action): AppState {
  return {
    trifectaValuation: trifectaValuationReducer(state.trifectaValuation, action),
    annualExpenses: annualExpensesReducer(state.annualExpenses, action),
    benefitsValuation: benefitsValuationReducer(state.benefitsValuation, action)
  };
}

export default rootReducer;
