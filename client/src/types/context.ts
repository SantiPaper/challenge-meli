import { ProductDetail, SearchResults } from "./items";

export type Context = {
  state: State;
  getProductsBySearch: (searchResults: SearchResults) => void;
  getProductById: (product: ProductDetail) => void;
};

export type State = {
  searchResults: SearchResults;
  product: ProductDetail;
};
export type Reducer = (state: State, action: Action) => State;

export type Action =
  | {
      type: "GET_PRODUCTS";
      payload: SearchResults;
    }
  | {
      type: "GET_PRODUCT_BY_ID";
      payload: ProductDetail;
    };
