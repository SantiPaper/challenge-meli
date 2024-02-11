import { StyledResults } from "./style";
import { useProductsContext } from "../../hooks/useProductsContext";
import { useFetch } from "../../hooks/useFetch";

import { useSearchParams } from "react-router-dom";
import { Background } from "../Background";
import { ItemProduct } from "../ItemProduct";

export const Results = () => {
  const { state } = useProductsContext();
  const [params] = useSearchParams();
  const { loading, error } = useFetch({
    status: "?q=",
    payload: params.get("search"),
  });

  return (
    <StyledResults>
      {error && <p>{error}</p>}
      {loading ? (
        <p>Loading component</p>
      ) : (
        <>
          <p className="results__categories">
            {state.searchResults.categories}
          </p>
          <Background>
            {state.searchResults.items.map((prod) => (
              <ItemProduct
                key={prod.id}
                title={prod.title}
                price={prod.price.amount}
                shipping={prod.free_shipping}
                img={prod.picture}
              />
            ))}
          </Background>
        </>
      )}
    </StyledResults>
  );
};
