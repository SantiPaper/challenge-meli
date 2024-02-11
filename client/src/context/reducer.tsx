import { Reducer, State } from "../types/context";
import { SearchResults } from "../types/items";

export const initialState: State = {
  searchResults: {} as SearchResults,
};

export const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS": {
      return {
        ...state,
        searchResults: action.payload,
      };
    }

    default:
      return state;
  }
};
