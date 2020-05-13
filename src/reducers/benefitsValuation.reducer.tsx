import { Action } from './root.reducer';
import { updateObjectSubproperty } from './reducerUtils';

interface AmexBenefitsValuation {
  // Amex Platinum Benefits
  uberCredit: number;   // $15/month with $20 bonus in dec ($35 credit in dec)
  airlineIncidentalPlat: number;  // $200
  saksCredit: number;             // $50 first half $50 second half
  tsaGlobalEntryCredit: number;   // $85 TSA Pre or $100 Global Entry
  loungeAccess: number;           // Centrion/Priority Pass/ Delta Lounge Access
  hotelStatus: number;

  // Amex Gold Benefits
  diningCredit: number;           // $10/mo credit towards Seamless/Grubhub etc
  airlineIncidentalGold: number;  // $100
}

// CSR Benefits; other Chase cards don't have benefits
interface ChaseBenefitsValuation {
  travelCredit: number;           // $300/year
  tsaGlobalEntryCredit: number;   // $85 TSA Pre or $100 Global Entry
  loungeAccess: number;           // Priority Pass Lounge Access

  // temporary credits
  doorDashPass: number;           // DashPass normally $9.99/mo for at least 1 year (not sure what this means)
  doorDashCredit: number;         // $60 in 2020, $60 in 2021
  lyftPink: number;               // LyftPink normally $19.99/mo until march 2022
}

export interface BenefitsValuationState {
  amex: AmexBenefitsValuation;
  chase: ChaseBenefitsValuation;
}

// update reducer
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



export default reducer;