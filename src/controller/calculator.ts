import { AnnualExpensesState, AmexBenefitsState, ChaseBenefitsState } from '../GlobalStateContainer';

enum AnnualFees {
  AmexAF = 550 + 250,
  ChaseAF = 550,
  NoAF = 0,
}

function sumBenefits(benefits: AmexBenefitsState | ChaseBenefitsState) {
  let benefitsValue = 0;
  for (const key in benefits) {
    benefitsValue += (benefits as any)[key];
  }

  return benefitsValue;
}

export function calculateAmexTrifecta(expenses: AnnualExpensesState, benefits: AmexBenefitsState, cpp: number): number {
  const { dining, groceries, flights, hotels, lyftRides, nonFlightHotelTravel, other, freedomCategories } = expenses;
  const pointsEarned = (4 * dining) + (4 * groceries) + (5 * flights)
    + (5 * hotels) + (2 * lyftRides) + (2 * nonFlightHotelTravel) + (2 * other)
    + (2 * freedomCategories);
  let benefitsValue = sumBenefits(benefits);

  return (pointsEarned * cpp / 100) + benefitsValue - AnnualFees.AmexAF;
}

export function calculateChaseTrifecta(expenses: AnnualExpensesState, benefits: ChaseBenefitsState, cpp: number): number {
  const { dining, groceries, flights, hotels, lyftRides, nonFlightHotelTravel, other, freedomCategories } = expenses;
  const pointsEarned = (3 * dining) + (1.5 * groceries) + (3 * flights)
    + (3 * hotels) + (10 * lyftRides) + (3 * nonFlightHotelTravel)
    + (1.5 * other) + (5 * freedomCategories);
  let benefitsValue = sumBenefits(benefits);

  return (pointsEarned * cpp / 100) + benefitsValue - AnnualFees.ChaseAF;
}

export function calculateNoAF(expenses: AnnualExpensesState): number {
  // const { dining, groceries, flights, hotels, lyftRides, nonFlightHotelTravel, other, freedomCategories } = expenses;
  return 0 - AnnualFees.NoAF;
}