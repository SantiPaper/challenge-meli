import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useProductsContext } from "../../hooks/useProductsContext";
import { Breadcrumbs } from "../Breadcrumbs";
import { Loading } from "../Loading";
import { Background } from "../Background";
import { StyledDetail } from "./style";

export const Detail = () => {
  const location = useLocation();

  const { state, handleFormat } = useProductsContext();

  const product = state.product.item;

  const categories = state.product.categories;

  const { loading } = useFetch({
    status: "/",
    payload: location.pathname.split("/")[2],
  });

  return (
    <StyledDetail>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Breadcrumbs categories={categories} />
          <Background>
            <div className="detail__info">
              <img
                className="detail__info__img"
                src={product.picture}
                alt={product.title}
                width={680}
                height={680}
              />

              <div className="detail__info__aside">
                <p className="detail__info__aside__condition">
                  {product.condition === "new" ? "Nuevo" : "Usado"}
                </p>
                <h1 className="detail__info__aside__title">{product.title}</h1>
                <p className="detail__info__aside__price">
                  {handleFormat(product.price.amount)}
                </p>
                <button className="detail__info__aside__button">Comprar</button>
              </div>
            </div>
            <div className="detail__description">
              <h3 className="detail__description__title">
                Descripción del producto
              </h3>
              <p className="detail__description__text">{product.description}</p>
            </div>
          </Background>
        </>
      )}
    </StyledDetail>
  );
};
