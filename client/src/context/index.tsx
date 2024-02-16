import { PropsWithChildren, createContext, useReducer } from "react";
import { Context } from "../types/context";
import { initialState, reducer } from "./reducer";
import { ProductDetail, SearchResults } from "../types/items";

export const ItemsContext = createContext<Context | null>(null);

export const Provider = ({ children }: PropsWithChildren) => {
  const handleFormat = (price: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getProductsBySearch = (searchResults: SearchResults) => {
    dispatch({
      type: "GET_PRODUCTS",
      payload: searchResults,
    });
  };

  const getProductById = (product: ProductDetail) => {
    dispatch({
      type: "GET_PRODUCT_BY_ID",
      payload: product,
    });
  };

  return (
    <ItemsContext.Provider
      value={{
        state,
        getProductsBySearch,
        getProductById,
        handleFormat,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
