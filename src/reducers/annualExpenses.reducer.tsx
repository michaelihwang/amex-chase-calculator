import { Action } from './root.reducer';

export interface AnnualExpensesState {
  dining: number;
  groceries: number;
  flights: number;
  hotels: number;
  amexHotels: number;
  nonFlightHotelTravel: number;
  other: number;
}

function reducer(state: AnnualExpensesState, action: Action): AnnualExpensesState {
  switch (action.type) {
  case 'SET_DINING_EXPENSE':
    return {
      ...state,
      dining: action.payload
    };
  case 'SET_GROCERIES_EXPENSE':
    return {
      ...state,
      groceries: action.payload
    };
  case 'SET_FLIGHTS_EXPENSE':
    return {
      ...state,
      flights: action.payload
    };
  case 'SET_HOTELS_EXPENSE':
    return {
      ...state,
      hotels: action.payload
    };
  case 'SET_HOTELS_BOOKED_THROUGH_AMEX':
    return {
      ...state,
      amexHotels: action.payload
    };
  case 'SET_NON_FLIGHT_HOTEL_TRAVEL_EXPENSE':
    return {
      ...state,
      nonFlightHotelTravel: action.payload
    };
  case 'SET_OTHER_ANNUAL_EXPENSE':
    return {
      ...state,
      other: action.payload
    };
  default:
    return state;
  }
}

export default reducer;