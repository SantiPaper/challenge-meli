import { SearchResults } from "./items";

export type Context = {
  state: State;
  getProductsBySearch: (searchResults: SearchResults) => void;
};

export type State = {
  searchResults: SearchResults;
};
export type Reducer = (state: State, action: Action) => State;

export type Action = {
  type: "GET_PRODUCTS";
  payload: SearchResults;
};
