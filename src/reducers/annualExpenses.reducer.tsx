import { Action } from './root.reducer';

export interface AnnualExpensesState {
  dining: number;
  groceries: number;
  flights: number;
  hotels: number;
  hotelsBookedThroughAmex: number;
  nonFlightHotelTravel: number;
  other: number;
  freedomCategories: number;
}

export enum AnnualExpenseActionType {
  SET_DINING_EXPENSE = 'SET_DINING_EXPENSE',
  SET_GROCERIES_EXPENSE = 'SET_GROCERIES_EXPENSE',
  SET_FLIGHTS_EXPENSE = 'SET_FLIGHTS_EXPENSE',
  SET_HOTELS_EXPENSE = 'SET_HOTELS_EXPENSE',
  SET_HOTELS_BOOKED_THROUGH_AMEX_EXPENSE = 'SET_HOTELS_BOOKED_THROUGH_AMEX_EXPENSE',
  SET_NON_FLIGHT_HOTEL_TRAVEL_EXPENSE = 'SET_NON_FLIGHT_HOTEL_TRAVEL_EXPENSE',
  SET_OTHER_ANNUAL_EXPENSE = 'SET_OTHER_ANNUAL_EXPENSE'
};

type AnnualExpenseActionTypeType = keyof typeof AnnualExpenseActionType;

function reducer(state: AnnualExpensesState, action: Action): AnnualExpensesState {
  switch (action.type) {
  case AnnualExpenseActionType.SET_DINING_EXPENSE:
    return {
      ...state,
      dining: action.payload
    };
  case AnnualExpenseActionType.SET_GROCERIES_EXPENSE:
    return {
      ...state,
      groceries: action.payload
    };
  case AnnualExpenseActionType.SET_FLIGHTS_EXPENSE:
    return {
      ...state,
      flights: action.payload
    };
  case AnnualExpenseActionType.SET_HOTELS_EXPENSE:
    return {
      ...state,
      hotels: action.payload
    };
  case AnnualExpenseActionType.SET_HOTELS_BOOKED_THROUGH_AMEX_EXPENSE:
    return {
      ...state,
      hotelsBookedThroughAmex: action.payload
    };
  case AnnualExpenseActionType.SET_NON_FLIGHT_HOTEL_TRAVEL_EXPENSE:
    return {
      ...state,
      nonFlightHotelTravel: action.payload
    };
  case AnnualExpenseActionType.SET_OTHER_ANNUAL_EXPENSE:
    return {
      ...state,
      other: action.payload
    };
  default:
    return state;
  }
}

export function getActionTypeFromAnnualExpenseStatePropertyName(name: string): AnnualExpenseActionType | null {
  switch (name) {
  case 'dining':
    return AnnualExpenseActionType.SET_DINING_EXPENSE;
  case 'groceries':
    return AnnualExpenseActionType.SET_GROCERIES_EXPENSE;
  case 'flights':
    return AnnualExpenseActionType.SET_FLIGHTS_EXPENSE;
  case 'hotels':
    return AnnualExpenseActionType.SET_HOTELS_EXPENSE;
  case 'hotelsBookedThroughAmex':
    return AnnualExpenseActionType.SET_HOTELS_BOOKED_THROUGH_AMEX_EXPENSE;
  case 'nonFlightHotelTravel':
    return AnnualExpenseActionType.SET_NON_FLIGHT_HOTEL_TRAVEL_EXPENSE;
  case 'other':
    return AnnualExpenseActionType.SET_OTHER_ANNUAL_EXPENSE;
  default:
    return null;
  }
}

export default reducer;