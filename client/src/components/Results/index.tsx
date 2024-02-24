import { useSearchParams } from "react-router-dom";
import { useProductsContext } from "../../hooks/useProductsContext";
import { useFetch } from "../../hooks/useFetch";
import { Background } from "../Background";
import { ItemProduct } from "../ItemProduct";
import { Breadcrumbs } from "../Breadcrumbs";
import { Loading } from "../Loading";
import { Container } from "../Container";
import { NotFound } from "../NotFound";
import { StyledResults } from "./style";

export const Results = () => {
  const { state, handleFormat } = useProductsContext();

  const [params] = useSearchParams();

  const { loading, error } = useFetch({
    status: "?q=",
    payload: params.get("search"),
  });

  return (
    <StyledResults>
      {loading ? (
        <Loading />
      ) : (
        <>
          {state.searchResults.categories && (
            <Breadcrumbs categories={state.searchResults.categories} />
          )}
          {state.searchResults.items ? (
            <Background>
              {state.searchResults.items.map((prod) => {
                return (
                  <ItemProduct
                    key={prod.id}
                    id={prod.id}
                    title={prod.title}
                    price={handleFormat(prod.price.amount)}
                    shipping={prod.free_shipping}
                    img={prod.picture}
                    condition={prod.condition}
                  />
                );
              })}
            </Background>
          ) : (
            <Container>
              <NotFound error={error} />
            </Container>
          )}
        </>
      )}
    </StyledResults>
  );
};
