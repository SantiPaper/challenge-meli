import { Product } from "./items";

export type Context = {
  state: State;
  getProductsBySearch: (products: Array<Product>) => void;
};

export type State = {
  products: [];
};
export type Reducer = (state: State, action: Action) => State;

export type Action = {
  type: "GET_PRODUCTS";
  payload: Product;
};
