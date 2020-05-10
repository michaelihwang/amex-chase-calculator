import React, { createContext, useReducer } from 'react';
import rootReducer, { initialState, Action, AppState } from './reducers/root.reducer';

export const Context = createContext(initialState);

interface StoreProps {
    children: React.ReactNode;
}
function Store({ children }: StoreProps) {
    const [state, dispatch] = useReducer(rootReducer, initialState);
    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}

export default Store;
