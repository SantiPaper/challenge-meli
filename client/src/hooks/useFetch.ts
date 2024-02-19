import { useEffect, useState } from "react";
import { useProductsContext } from "./useProductsContext";

type Props = {
  status: "?q=" | "/";
  payload: string | null;
};

export const useFetch = ({ status, payload }: Props) => {
  const { getProductsBySearch, getProductById } = useProductsContext();

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);

    fetch(`http://localhost:3001/api/items${status}${payload}`)
      .then((response) => {
        if (response.status === 404) {
          throw new Error(`Producto no encontrado`);
        }
        return response.json();
      })
      .then((data) => {
        if (status === "/") {
          getProductById(data);
          setError(null);
        } else {
          getProductsBySearch(data);
          setError(null);
        }
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { loading, error };
};
