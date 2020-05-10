import React, { createContext, useReducer, Dispatch } from 'react';
import annualExpensesReducer, { AnnualExpensesState } from './annualExpenses.reducer';

export interface AppState {
    annualExpenses: AnnualExpensesState;
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
        nonFlightHotelTravel: 0,
        other: 0,
    }
};

function rootReducer(state: AppState = initialState, action: Action): AppState {
    return {
        annualExpenses: annualExpensesReducer(state.annualExpenses, action)
    }
}

export default rootReducer;
