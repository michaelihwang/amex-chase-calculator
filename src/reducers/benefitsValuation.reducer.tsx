import { Action } from './root.reducer';

interface BenefitsValuation {
  credits: number;
  perks: number;
  centsPerPoint: number;
};

export interface BenefitsValuationState {
  amex: BenefitsValuation;
  chase: BenefitsValuation;
};

function reducer(state: BenefitsValuationState, action: Action): BenefitsValuationState {
  switch (action.type) {
    case 'SET_AMEX_CREDITS':
      return updateObjectSubproperty(state, 'amex', 'credits', action.payload);
    case 'SET_AMEX_PERKS':
      return updateObjectSubproperty(state, 'amex', 'perks', action.payload);
    case 'SET_AMEX_CENTS_PER_POINT':
      return updateObjectSubproperty(state, 'amex', 'centsPerPoint', action.payload);
    case 'SET_CHASE_CREDITS':
      return updateObjectSubproperty(state, 'chase', 'credits', action.payload);
    case 'SET_CHASE_PERKS':
      return updateObjectSubproperty(state, 'chase', 'perks', action.payload);
    case 'SET_CHASE_CENTS_PER_POINT':
      return updateObjectSubproperty(state, 'chase', 'centsPerPoint', action.payload);
    default:
      return state;
  }
}

function updateObjectSubproperty(state: { [key: string]: any }, property: string, subproperty: string, value: any): any {
  return {
    ...state,
    [property]: { ...state[property], [subproperty]: value }
  }
}

export default reducer;