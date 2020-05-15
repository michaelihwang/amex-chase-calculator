import { AnnualExpensesState, AmexBenefitsState, ChaseBenefitsState } from '../GlobalStateContainer';

enum AnnualFees {
  AmexAF = 550 + 250,
  ChaseAF = 550,
}

function sumBenefitsHelper(benefits: AmexBenefitsState | ChaseBenefitsState) {
  let benefitsValue = 0;
  for (const key in benefits) {
    benefitsValue += (benefits as any)[key];
  }

  return benefitsValue;
}

/*
 * Amex Trifecta Calculator (3 Cards)
 *
 * Amex Platinum Schwab - 5x Airfare, Hotel via amex travel (Schwab allows 1.25 cashback to brokerage account)
 * Amex Gold - 4x dining, 4x US groceries
 * Amex Blue Business Plus - 2x all purchases
 */
export function calculateAmexTrifecta(expenses: AnnualExpensesState, benefits: AmexBenefitsState, cpp: number): number {
  const {
    dining, groceries, flights, hotels, gas, lyftRides, nonFlightHotelTravel,
    streamingServices, onlineShopping, other, freedomCategories
  } = expenses;

  // Amex Gold caps groceries 4x multiplier up to $25k/annually; after, use BBP
  let groceriesOverCap = 0;
  if (groceries > 25000) {
    groceriesOverCap = groceries - 25000;
  }

  const pointsEarned = (4 * dining) + (4 * groceries) + groceriesOverCap + (5 * flights)
    + (5 * hotels) + (2 * gas) + (2 * lyftRides) + (2 * nonFlightHotelTravel)
    + (2 * streamingServices) + (2 * onlineShopping) + (2 * other)
    + (2 * freedomCategories);
  const benefitsValue = sumBenefitsHelper(benefits);

  return (pointsEarned * cpp / 100) + benefitsValue - AnnualFees.AmexAF;
}

/*
 * Chase Trifecta Calculator (3 Cards)
 *
 * Chase Sapphire Reserve - 3x dining, travel
 * Chase Freedom - 5x rotating quarterly categories up to $1.5k/quarter
 * Chase Freedom Unlimited - 1.5x all purchases
 */
export function calculateChaseTrifecta(expenses: AnnualExpensesState, benefits: ChaseBenefitsState, cpp: number): number {
  const {
    dining, groceries, flights, hotels, gas, lyftRides, nonFlightHotelTravel,
    streamingServices, onlineShopping, other, freedomCategories
  } = expenses;
  
  const pointsEarned = (3 * dining) + (1.5 * groceries) + (3 * flights)
    + (3 * hotels) + (1.5 * gas) + (10 * lyftRides) + (3 * nonFlightHotelTravel)
    + (1.5 * streamingServices) + (1.5 * onlineShopping) + (1.5 * other)
    + (5 * freedomCategories);
  const benefitsValue = sumBenefitsHelper(benefits);

  return (pointsEarned * cpp / 100) + benefitsValue - AnnualFees.ChaseAF;
}

/*
 * No Annual Fee Setup Calculator (5 Cards)
 *
 * Wells Fargo Propel - 3% dining, gas, travel, streaming services
 * Amex Blue Cash Everryday - 3% groceries up to $6k/annually
 * Bank of America Cash Rewards - 3% category up to $2.5k/quarter (currently set as online shopping, but make it flexible later)
 * Chase Freedom - 5% rotating quarterly categories up to $1.5k/quarter
 * Citi Double Cash - 2% everything
 */
export function calculateNoAF(expenses: AnnualExpensesState): number {
  const {
    dining, groceries, flights, hotels, gas, lyftRides, nonFlightHotelTravel,
    streamingServices, onlineShopping, other, freedomCategories
  } = expenses;

  // Amex BCE caps groceries 3% back up to $6k/annually; after, use Citi DoubleCash
  let groceriesOverCap = 0;
  if (groceries > 6000) {
    groceriesOverCap = groceries - 6000;
  }

  let onlineShoppingOverCap = 0;
  if (onlineShopping > 10000) {
    onlineShoppingOverCap = onlineShopping - 10000;
  }

  const cashBackEarned = (0.03 * dining) + (0.03 * groceries) + (0.02 * groceriesOverCap)
    + (0.03 * flights) + (0.03 * hotels) + (0.03 * gas) + (0.03 * lyftRides) + (0.03 * nonFlightHotelTravel)
    + (0.03 * streamingServices) + (0.03 * onlineShopping) + (0.02 * onlineShoppingOverCap)
    + (0.02 * other) + (0.05 * freedomCategories);

  return cashBackEarned;
}