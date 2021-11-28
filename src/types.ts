import firebase from "firebase/auth";

export interface IState {
  products: Array<IProduct>;
  basket: [] | Array<IProduct>;
  user: TUser | null;
}

export type TUser = firebase.User;

export interface IProduct {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
}

// Context API
export type TAction =
  | { type: "LOGIN" }
  | { type: "ADD_TO_BASKET"; payload: IProduct }
  | { type: "REMOVE_FROM_BASKET"; payload: number }
  | { type: "SET_USER"; payload: TUser | null };

export type TDispatch = ({ type }: TAction) => void;
export type TReducer = (state: IState, action: TAction) => IState;
export interface IStateProvider {
  initialState: IState;
  reducer: TReducer;
  children: React.ReactNode | React.ReactChildren;
}
export type TStateProvider = (obj: IStateProvider) => JSX.Element;
export type TContextProps = [state: IState, dispatch: TDispatch];
