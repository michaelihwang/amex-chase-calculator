import { Action } from './root.reducer';

export interface TrifectaValuationState {
  chase: number,
  amex: number,
  maxCashback: number,
};

function reducer(state: TrifectaValuationState, action: Action): TrifectaValuationState {
  switch (action.type) {
    case 'SET_CHASE_VALUATION':
      return {
        ...state,
        chase: action.payload
      };
    case 'SET_AMEX_VALUATION':
      return {
        ...state,
        amex: action.payload,
      };
    case 'SET_MAX_CASHBACK_VALUATION':
      return {
        ...state,
        maxCashback: action.payload
      };
    case 'SET_ALL_VALUATIONS':
      return action.payload;
    default:
      return state;
  }
}

export default reducer;