import { useEffect, useState } from "react";
import { useProductsContext } from "./useProductsContext";

type Props = {
  status: "?q=" | "/";
  payload: string | null;
};

export const useFetch = ({ status, payload }: Props) => {
  const { getProductsBySearch } = useProductsContext();

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3001/api/items${status}${payload}`)
      .then((data) => data.json())
      .then((data) => {
        getProductsBySearch(data);
      })
      .catch((error) => setError(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { loading, error };
};
