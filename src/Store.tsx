import React, { createContext, useContext, useReducer, Dispatch } from 'react';
import rootReducer, { initialState, Action, AppState } from './reducers/root.reducer';

const AppStateContext = createContext<AppState | null>(null);
const AppDispatchContext = createContext<Dispatch<Action> | null>(null);

interface StoreProps {
  children: React.ReactNode;
}
function StoreProvider({ children }: StoreProps) {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

export function useAppState(): AppState {
  const context = useContext(AppStateContext);
  if (context == null) {
    throw new Error("useAppState must be used within a AppStateProvider");
  }
  return context;
}

export function useAppDispatch(): Dispatch<Action> {
  const context = useContext(AppDispatchContext);
  if (context == null) {
    throw new Error("useAppDispatch must be used within a AppDispatchProvider");
  }
  return context;
}

export function useAppContext() {
  return { state: useAppState(), dispatch: useAppDispatch() };
}

export default StoreProvider;
