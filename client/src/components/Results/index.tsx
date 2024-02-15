import { useSearchParams } from "react-router-dom";
import { useProductsContext } from "../../hooks/useProductsContext";
import { useFetch } from "../../hooks/useFetch";
import { Background } from "../Background";
import { ItemProduct } from "../ItemProduct";
import { Breadcrumbs } from "../Breadcrumbs";
import { Loading } from "../Loading";
import { Container } from "../Container";
import { ErrorMessage } from "../ErrorMessage";

export const Results = () => {
  const { state } = useProductsContext();
  const [params] = useSearchParams();

  const { loading, error } = useFetch({
    status: "?q=",
    payload: params.get("search"),
  });

  return (
    <section>
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
                const number = new Intl.NumberFormat("es-AR", {
                  style: "currency",
                  currency: "ARS",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(prod.price.amount);

                return (
                  <ItemProduct
                    key={prod.id}
                    id={prod.id}
                    title={prod.title}
                    price={number}
                    shipping={prod.free_shipping}
                    img={prod.picture}
                    condition={prod.condition}
                  />
                );
              })}
            </Background>
          ) : (
            <Container>
              <ErrorMessage error={error} />
            </Container>
          )}
        </>
      )}
    </section>
  );
};
