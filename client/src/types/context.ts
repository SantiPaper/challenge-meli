import { SearchResults } from "./items";

export type Context = {
  state: State;
  getProductsBySearch: (searchResults: SearchResults) => void;
  getSearchString: (query: string) => void;
};

export type State = {
  searchResults: SearchResults;
  searchInput: string;
};
export type Reducer = (state: State, action: Action) => State;

export type Action =
  | {
      type: "GET_PRODUCTS";
      payload: SearchResults;
    }
  | {
      type: "SEARCH_PRODUCTS";
      payload: string;
    };
