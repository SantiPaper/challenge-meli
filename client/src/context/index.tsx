import { PropsWithChildren, createContext, useReducer } from "react";
import { Context } from "../types/context";
import { initialState, reducer } from "./reducer";
import { SearchResults } from "../types/items";

export const ItemsContext = createContext<Context | null>(null);

export const Provider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProductsBySearch = (searchResults: SearchResults) => {
    dispatch({
      type: "GET_PRODUCTS",
      payload: searchResults,
    });
  };

  return (
    <ItemsContext.Provider
      value={{
        state,
        getProductsBySearch,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
