import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useProductsContext } from "../../hooks/useProductsContext";
import { Breadcrumbs } from "../Breadcrumbs";
import { Loading } from "../Loading";
import { Background } from "../Background";

export const Detail = () => {
  const location = useLocation();

  const { state } = useProductsContext();

  const product = state.product.item;

  const categories = state.product.categories;

  const { loading } = useFetch({
    status: "/",
    payload: location.pathname.split("/")[2],
  });

  console.log(product);

  return (
    <section>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Breadcrumbs categories={categories} />{" "}
          <Background>
            <h1>{product.title}</h1>
          </Background>
        </>
      )}
    </section>
  );
};
