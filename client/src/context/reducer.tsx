import { Reducer, State } from "../types/context";
import { SearchResults } from "../types/items";

export const initialState: State = {
  searchResults: {} as SearchResults,
  searchInput: "",
};

export const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS": {
      return {
        ...state,
        searchResults: action.payload,
      };
    }
    case "SEARCH_PRODUCTS": {
      return {
        ...state,
        searchInput: action.payload,
      };
    }
    default:
      return state;
  }
};
