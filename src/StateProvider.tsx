import { createContext, useContext, useReducer } from "react";
import {
  IStateProvider,
  TContextProps,
  TReducer,
  TStateProvider,
} from "./types";

export const StateContext: React.Context<TContextProps> = createContext(
  {} as TContextProps
);

export const StateProvider: TStateProvider = ({
  reducer,
  initialState,
  children,
}: IStateProvider) => (
  <StateContext.Provider value={useReducer<TReducer>(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
