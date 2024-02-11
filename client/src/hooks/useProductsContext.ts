import { useContext } from "react";
import { ItemsContext } from "../context";

export const useProductsContext = () => {
  const value = useContext(ItemsContext);
  if (!value) {
    throw new Error("useBookContext tiene que usarse dentro del provider");
  }
  return value;
};
