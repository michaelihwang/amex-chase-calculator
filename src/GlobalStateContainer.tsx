import { useEffect, useState } from 'react';
import { createContainer } from 'unstated-next';
import { calculateAmexTrifecta, calculateChaseTrifecta, calculateNoAF } from './controller/calculator'

export interface AnnualExpensesState {
  dining: number;
  groceries: number;
  flights: number;
  hotels: number;
  gas: number;
  lyftRides: number;
  nonFlightHotelTravel: number;
  streamingServices: number;
  onlineShopping: number;
  other: number;
  freedomCategories: number;
}

export interface AmexBenefitsState {
  // Amex Platinum Benefits
  uberCredit: number;
  airlineIncidentalPlat: number;
  saksCredit: number;
  tsaGlobalEntryCredit: number;
  loungeAccess: number;
  hotelStatus: number;

  // Amex Gold Benefits
  diningCredit: number;
  airlineIncidentalGold: number;
}

export interface ChaseBenefitsState {
  // CSR Benefits
  travelCredit: number;
  tsaGlobalEntryCredit: number;
  loungeAccess: number;

  // temporary credits
  doorDashPass: number;
  doorDashCredit: number;
  lyftPink: number;
}

export interface PointsValuationState {
  amexCPP: number;
  chaseCPP: number;
}

export interface TrifectaValuationState {
  amex: number,
  chase: number,
  noAF: number,
}

function useGlobalStateContainer() {
  const [annualExpenses, setAnnualExpenses] = useState<AnnualExpensesState>({
    dining: 3000,
    groceries: 3000,
    flights: 1000,
    hotels: 1000,
    gas: 1200,
    lyftRides: 500,
    nonFlightHotelTravel: 1000,
    streamingServices: 40 * 12,
    onlineShopping: 1500,
    other: 1500,
    freedomCategories: 2500,
  });

  const [amexBenefits, setAmexBenefits] = useState<AmexBenefitsState>({
    uberCredit: 100,
    airlineIncidentalPlat: 100,
    saksCredit: 0,
    tsaGlobalEntryCredit: 85,
    loungeAccess: 50,
    hotelStatus: 100,
    diningCredit: 60,
    airlineIncidentalGold: 50,
  });

  const [chaseBenefits, setChaseBenefits] = useState<ChaseBenefitsState>({
    travelCredit: 300,
    tsaGlobalEntryCredit: 85,
    loungeAccess: 50,
    doorDashPass: 0,
    doorDashCredit: 30,
    lyftPink: 0,
  });

  const [pointsValuation, setPointsValuation] = useState<PointsValuationState>({
    amexCPP: 1.25,
    chaseCPP: 1.5,
  });

  // Calculate here
  const [trifectaValuation, setTrifectaValuation] = useState<TrifectaValuationState>({
    amex: 0,
    chase: 0,
    noAF: 0,
  });
  useEffect(() => {
    setTrifectaValuation({
      amex: calculateAmexTrifecta(annualExpenses, amexBenefits, pointsValuation.amexCPP),
      chase: calculateChaseTrifecta(annualExpenses, chaseBenefits, pointsValuation.chaseCPP),
      noAF: calculateNoAF(annualExpenses),
    });
  }, [annualExpenses, amexBenefits, chaseBenefits, pointsValuation]);

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  return {
    annualExpenses, setAnnualExpenses,
    amexBenefits, setAmexBenefits,
    chaseBenefits, setChaseBenefits,
    pointsValuation, setPointsValuation,
    trifectaValuation, setTrifectaValuation,
    isSubmitted, setIsSubmitted
  };
}

export const GlobalStateContainer = createContainer(useGlobalStateContainer);