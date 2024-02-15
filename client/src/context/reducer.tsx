import { Reducer, State } from "../types/context";
import { ProductDetail, SearchResults } from "../types/items";

export const initialState: State = {
  searchResults: {} as SearchResults,
  product: {} as ProductDetail,
};

export const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS": {
      return {
        ...state,
        searchResults: action.payload,
      };
    }
    case "GET_PRODUCT_BY_ID": {
      return {
        ...state,
        product: action.payload,
      };
    }

    default:
      return state;
  }
};
